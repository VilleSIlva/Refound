import { UserRepository } from "@/repository/user-prisma";

interface SessionRequest{
    email: string,
    password: string
}

interface SessionResponse{
    token: string
}

export class SessionService{
    private repository: UserRepository

    constructor(repository:UserRepository){
        this.repository = repository
    }

    async execute({email,password}:SessionRequest){
        const user = await this.repository.findEmail(email);
    }
}