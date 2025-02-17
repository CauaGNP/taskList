import { z } from "zod"

export const formSchema = z.object({
    title : z.string({message: "preencha esse campo!"})
    .min(1,
        {
            message : "Campo precisa ser preenchido"
        }),
    description : z.string({message: "preencha esse campo!"}).min(1, 
        {
            message : "Campo precisa ser preenchido"
        }
    )
})
