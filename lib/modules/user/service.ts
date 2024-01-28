import * as express from "express";
import { EventEmitter } from "events";
import { IService } from "./models/interfaces/classes/IService";
import { getLogger } from "../../shared/utils/helpers";
import { IUserService } from "./models/interfaces/classes/IUserService";
import { UserService } from "./services/userService";
import { IUserCheck } from "./models/interfaces/IUserCheck";
import { comparePassword, encryptPassword } from "../../shared/utils/bcrypt";
import { ICreateUserRequest } from "./models/interfaces/ICreateUserRequest";
import { encryptToken } from "../../shared/utils/jwt";

const TAG = "nadsoft-be:user:service";

export class Service implements IService {
    private userService: IUserService;
    
    public static globalEvents = new EventEmitter();
    
    constructor() {
        this.userService = new UserService();
    }

    public async signin(req: express.Request, res: express.Response, next: express.NextFunction): Promise<any> {
        try {
            const { user, password } = req.body;

            // check existance of user by email or phone or name
            const checkPayload: IUserCheck = { name: user, email: user, phone: user };
            const isExistUser = await this.userService.checkExistance(checkPayload);
            if (!isExistUser) {
                return res.status(404).json({ message: "User isn't found" });
            }

            // compare passwords
            const isMatch = await comparePassword(password, isExistUser.password);
            if (!isMatch) {
                return res.status(422).json({ message: "Passwords mismatch" });
            }

            // prepare payload with generating jwt token
            const payload = { sub: isExistUser._id, username: isExistUser.email };
            const token = encryptToken(payload);
            res.cookie('token', token);

            // prepare response
            return res.status(200).json({
                message: "User is logged in successfully",
                token: token,
            });
        } catch (error) {
            const log = { message: error, tag: `${TAG}:signin`, status: 500 };

            getLogger(log);
        }
    }

    public async createUser(req: express.Request, res: express.Response, next: express.NextFunction): Promise<any> {
        try {
            const { name, email, phone } = req.body;

            // check existance of user by email or phone or name
            const checkPayload: IUserCheck = { name, email, phone };
            const user = await this.userService.checkExistance(checkPayload);
            if (user) {
                return res.status(403).json({ message: "User is already exists" });
            }

            // encode password
            const password = await encryptPassword(req.body.password);

            // create user
            const payload: ICreateUserRequest = { name, email, phone, password };

            const createdUser = await this.userService.createNewUser(payload);
            if (!createdUser) {
                return res.status(422).json({ message: "Can't create user" });
            }

            // prepare response
            return res.status(201).json({
                message: "User is registered successfully",
                data: createdUser,
            });
        } catch (error) {
            const log = { message: error, tag: `${TAG}:signup`, status: 500 };

            getLogger(log);
        }
    }

    public async getPaginatedUsers(req: express.Request, res: express.Response, next: express.NextFunction): Promise<any> {
        try {
            
        } catch (error) {
            const log = { message: error, tag: `${TAG}:getPaginatedUsers`, status: 500 };

            getLogger(log);
        }
    }

    public async getUserDetails(req: express.Request, res: express.Response, next: express.NextFunction): Promise<any> {
        try {
            
        } catch (error) {
            const log = { message: error, tag: `${TAG}:getUserDetails`, status: 500 };

            getLogger(log);
        }
    }

    public async updateUser(req: express.Request, res: express.Response, next: express.NextFunction): Promise<any> {
        try {
            
        } catch (error) {
            const log = { message: error, tag: `${TAG}:updateUser`, status: 500 };

            getLogger(log);
        }
    }

    public async deleteUser(req: express.Request, res: express.Response, next: express.NextFunction): Promise<any> {
        try {
            
        } catch (error) {
            const log = { message: error, tag: `${TAG}:deleteUser`, status: 500 };

            getLogger(log);
        }
    }
}
