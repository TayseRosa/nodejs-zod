import z from 'zod'

const schema = z.object({
    name:z.string().min(2),
    email:z.string().email(),
    age: z.number().min(18).max(120),
    staus:z.boolean(),
})

type User = z.infer<typeof schema>

let data = {
    name:'Tayse Rosa',
    email:'tayse@email.com',
    age:10
}

const result = schema.safeParse(data)
console.log(result)