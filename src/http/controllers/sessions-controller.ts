import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export function sessionsController(req: Request,res:Response,next: NextFunction){
    const schemaBody = z.object({
        email: z.string().email({message: "Email invalido"}), 
        password: z.string().trim().min(8,{message: "A senha precisa ter mais de 8 caracteres"}),
    });

    const {email,password} = schemaBody.parse(req.body);

    try {
        
    } catch (error) {
        next(error)
    }
}