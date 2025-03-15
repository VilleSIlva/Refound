import { Prisma, User } from "@prisma/client";
import { UserResitory } from "./user-repository-interface";
import { prisma } from "@/lib/prisma";

export class UserRepository{
    async findEmail(email: string): Promise<User | null> {
        const userExist = prisma.user.findUnique({
            where:{
                email
            }
        });

        if(!userExist){
            return null
        }

        return userExist
    }

    async create(data: Prisma.UserCreateInput) {
        const user = await prisma.user.create({
            data:{
                name:data.name,
                email: data.email,
                password: data.password,
                role: data.role
                
            }
        })

        return user
    }

}