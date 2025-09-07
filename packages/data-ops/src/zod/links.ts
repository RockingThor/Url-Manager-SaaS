import z from "zod";

export const destinationsSchema= z.preprocess((obj)=>{
    if(typeof obj === "string"){
       return JSON.parse(obj);
    }
    return obj;
},
    z.object({
        default: z.string().url(),
    }).catchall(z.string().url())
);

export type DestinationsSchemaType= z.infer<typeof destinationsSchema>;

export const linkSchema= z.object({
    linkId: z.string(),
    accountId: z.string(),
    name: z.string(),
    destinations: destinationsSchema,
    created: z.string(),
    updated: z.string(),
});

export const createLinkSchema= linkSchema.omit({
    created: true,
    updated: true,
    accountId: true,
    linkId: true,
});

export type CreateLinkSchemaType= z.infer<typeof createLinkSchema>;