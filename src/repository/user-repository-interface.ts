import { Prisma, User } from "@prisma/client"

export interface UserResitory{
    create(data:Prisma.UserCreateInput):Promise<User>
    findEmail(emal:string):Promise<User | null>
}