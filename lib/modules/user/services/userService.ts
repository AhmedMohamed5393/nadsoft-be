import { UserRepository } from "../repositories/userRepository";
import { IUserRepository } from "../models/interfaces/classes/IUserRepository";
import { UserRepositoriesFactory } from "../repositories/userRepositoriesFactory";
import { IUserService } from "../models/interfaces/classes/IUserService";
import { getLogger } from "../../../shared/utils/helpers";
import { ICreateUserRequest } from "../models/interfaces/ICreateUserRequest";
import { IUserCheck } from "../models/interfaces/IUserCheck";

const TAG = "nadsoft-be:user:userService";

export class UserService implements IUserService {
    private repository: IUserRepository;
    private repositoriesFactory: UserRepositoriesFactory;

    constructor(repository?: IUserRepository) {
        if (!repository) {
            this.repositoriesFactory = UserRepositoriesFactory.Instance;

            this.repository = this.repositoriesFactory.getRepository(UserRepository.name);
        } else {
            this.repository = repository;
        }
    }
    
    public async createNewUser(payload: ICreateUserRequest): Promise<any> {
        try {
            
        } catch (error) {
            const log = { message: error, tag: `${TAG}:createNewUser`, status: 500 };

            getLogger(log);
        }
    }

    public async checkExistance(info: IUserCheck): Promise<any> {
        try {
            
        } catch (error) {
            const log = { message: error, tag: `${TAG}:checkExistance`, status: 500 };

            getLogger(log);
        }
    }
}
