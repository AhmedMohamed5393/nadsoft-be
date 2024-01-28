import { ICreateUserRequest } from "../ICreateUserRequest";
import { IUserCheck } from "../IUserCheck";

export interface IUserService {
    checkExistance(info: IUserCheck): Promise<any>;

    createNewUser(payload: ICreateUserRequest): Promise<any>;
}
