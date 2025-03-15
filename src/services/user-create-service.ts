import { UserRepository } from "@/repository/user-prisma"
import { AppError } from "@/utils/AppEror"
import {Prisma,User} from "@prisma/client"
import { hash} from "bcrypt"


interface UserResponse{
    newUser: User
}

export class UserCreateService{
    repository: UserRepository

    constructor(repository: UserRepository){
        this.repository = repository
    }

    async execute({name,email,password,role}:Prisma.UserCreateInput):Promise<UserResponse>{
        const user = await this.repository.findEmail(email);

        if(user){
          throw new AppError("Usuario já existe")
        }
        const hashPassword = await hash(password,3);

        const newUser = await this.repository.create({
            name,
            email,
            password: hashPassword,
            role
        });

        return {
            newUser
        }
    }
}