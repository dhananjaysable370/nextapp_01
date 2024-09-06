import {z} from 'zod'

export const usernameValidation = z
    .string()
    .min(5, "Username must be atleast 5 characters!")
    .max(15, "Username must be atmost 20 characters!")
    .regex(/^[a-z][a-zA-Z0-9_]*$/,"Username must not contain spacial characters!")
    
export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({ message: 'Invalid email address!' }),
    password:z.string().min(8,{message:'password must be atleast 8 characters.'})
})