import { NextFunction, Request,Response } from "express";
import { number, z } from "zod";
import { userFactory } from "../factores/user-factory";
import { UserRole } from "@prisma/client";

export async function  userController(req:Request,res:Response,next: NextFunction){
   
    const schemaBody = z.object({
        name: z.string().trim().min(3,{message: "O nome precisa ter mais de 3 caracteres"}),
        email: z.string().email({message: "Email invalido"}), 
        password: z.string().trim().min(8,{message: "A senha precisa ter mais de 8 caracteres"}),
        role: z.enum([UserRole.admin,UserRole.user]).default("user")
    });

    const {name,email,password,role} = schemaBody.parse(req.body);

    try {
        const userService = userFactory();
        await userService.execute({name,email,password,role});
        res.status(201).send();
    } catch (error) {
      next(error)
    }
}