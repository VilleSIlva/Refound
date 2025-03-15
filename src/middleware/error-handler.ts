import { AppError } from "@/utils/AppEror";
import { ZodError } from "zod";
import { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (error,request,response,next)=>{
    if(error instanceof AppError){
       response.status(error.status).send(error.message);
       return
    }

    if(error instanceof ZodError){
        response.status(400).json({
            message: "validad Error",
            issues: error.format()
        })
        return
    }
    response.status(400).send(error.message)
    return
    
}