# Automated Code Review with Cursor CLI

This directory contains the GitHub Actions workflow for automated code review using Cursor CLI.

## Files

- `cursor-code-review.yml` - The main workflow file that runs on pull requests
- `README.md` - This documentation file

## Setup

### 1. Required Secrets

Add these secrets to your GitHub repository:

- `CURSOR_API_KEY` - Your Cursor API key (get it from [Cursor](https://cursor.com))

### 2. Optional Variables

You can set these repository variables to customize behavior:

- `BLOCKING_REVIEW` - Set to `true` to make the workflow fail if critical issues are found (default: `false`)

### 3. Permissions

The workflow requires these permissions:
- `pull-requests: write` - To post review comments
- `contents: read` - To read repository contents
- `issues: write` - To manage issue comments

## How It Works

1. **Trigger**: Runs automatically on pull request events (opened, synchronized, reopened, ready for review)
2. **Installation**: Installs Cursor CLI in the GitHub Actions runner
3. **Review**: Analyzes the PR diff for critical issues like:
   - Security vulnerabilities
   - Performance anti-patterns
   - Logic errors
   - Resource leaks
   - Missing error handling
4. **Comments**: Posts inline comments on specific lines with emojis for easy scanning
5. **Blocking**: Optionally fails the workflow if critical issues are found

## Features

- **Smart Commenting**: Avoids duplicate comments and marks resolved issues
- **Inline Reviews**: Comments are placed directly on changed lines
- **Emoji System**: Uses emojis to categorize issues (🚨 Critical, 🔒 Security, ⚡ Performance, etc.)
- **Draft PR Support**: Skips review for draft pull requests
- **Configurable Blocking**: Can be configured to block merges on critical issues

## Example Output

The agent will post comments like:
- 🚨 Critical: Potential null dereference on line 42
- 🔒 Security: SQL injection vulnerability in user input
- ⚡ Performance: Consider memoizing this expensive calculation
- ✅ Resolved: This issue appears to be fixed by recent changes

## Customization

You can modify the review criteria and behavior by editing the prompt in the workflow file. The current configuration focuses on high-severity issues to maintain a good signal-to-noise ratio.

## Troubleshooting

- Ensure your `CURSOR_API_KEY` secret is properly set
- Check that the workflow has the required permissions
- Verify that the repository allows GitHub Actions to run
- For blocking reviews, ensure the `BLOCKING_REVIEW` variable is set correctly

## Learn More

- [Cursor CLI Documentation](https://docs.cursor.com/en/cli)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Pull Request Reviews API](https://docs.github.com/en/rest/pulls/comments)
