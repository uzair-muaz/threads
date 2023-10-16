import * as z from "zod";

export const UserValidationSchema = z.object({
profile_photo : z.string().min(1).url(),
username : z.string().min(3).max(30),
name: z.string().min(3).max(30),
bio: z.string().min(3).max(1000),
});