import { IUserRepository } from "../models/interfaces/classes/IUserRepository";
import { getLogger } from "../../../shared/utils/helpers";
import { Database } from "../../../database/database";

const TAG = "nadsoft-be:user:userRepository";

export class UserRepository implements IUserRepository {
    private userModel: any;
    private database: Database;
    
    constructor() {
        this.database = new Database();
    }
    
    public async exampleOfUserRepositoriesMethod($where: any, select = []): Promise<any> {
        try {
            
        } catch (error) {
            const log = { message: error, tag: `${TAG}:exampleOfUserRepositoriesMethod`, status: 500 };

            getLogger(log);
        }
    }
}
