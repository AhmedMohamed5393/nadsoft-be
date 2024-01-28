import * as express from "express";
import { IMiddleware } from "../interfaces/IMiddleware";
import { getLogger } from "../utils/helpers";
import { decryptToken } from "../utils/jwt";
import { UserService } from "../../modules/user/services/userService";

const TAG = "nadsoft-be:authMiddleware";

export class AuthMiddleware implements IMiddleware {
    constructor() {}

    public async execute(req: express.Request, res: express.Response, next: express.NextFunction) {
        const { cookies, headers } = req;
        
        try {
            const credentials: string = cookies?.token || headers?.authorization;
            if (
                !credentials?.startsWith("eyJ") &&
                !(
                    credentials?.includes("Bearer ") &&
                    credentials?.split(" ")[1]?.startsWith("eyJ")
                )
            ) {
                return res.status(401).json({ message: "Unauthorized" });
            }

            const token: string = credentials || credentials?.split(" ")[1];
            const payload = decryptToken(token);

            const userService = new UserService();
            const user = await userService.checkExistance({ email: payload.username });
            
            res.locals.user = user;
            
            next();
        } catch (error) {
            getLogger({ message: error, tag: `${TAG}:authMiddleware`, status: 500 });
        }
    }
}
