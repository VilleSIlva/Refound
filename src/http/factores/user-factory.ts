import { UserRepository } from "@/repository/user-prisma";
import { UserCreateService } from "@/services/user-create-service";

export function userFactory(){
    const repository = new UserRepository();
    const userService = new UserCreateService(repository);

    return userService;
}