import config from "../../../config";
import iUser from "./user.interface";
import { User } from "./user.model";
import { generateUserId } from "./user.utils";

export const createUser = async(user:iUser):Promise<iUser | null> =>{
    const id = await generateUserId();
    user.id = id

    if(!user.password){
        user.password = config.default_user_pass as string
    }

    const createUser = User.create(user)

    if(!createUser){
        throw new Error('Failed to create user')
    }
    return createUser
}