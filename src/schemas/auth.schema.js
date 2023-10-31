import {z} from 'zod'

export const registerSchema = z.object({

username: z.string({
    required_error: "Username is required"
}),
email : z.string({
    required_error: 'Email is required'
}).email({
    message: "El email es invalido, muevete y verifica"
}),
password: z.string({
    required_error: "Password is required",
})
.min(6, {
    message: ' Password necesita por lo menos tener 6 letras'
}),

});

export const loginSchema = z.object({

    email: z.string({
        required_error: "Email is required",
    }).email({
        message: "Invalid email",
    }),
    password: z.string({
        required_error: "Password is required",
    }).min(6, {
message: "Password must be at least 6 characters",
    }),
});