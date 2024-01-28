import * as express from "express";

export interface IService {
    signin(req: express.Request, res: express.Response, next: express.NextFunction): Promise<any>;

    getPaginatedUsers(req: express.Request, res: express.Response, next: express.NextFunction): Promise<any>;

    getUserDetails(req: express.Request, res: express.Response, next: express.NextFunction): Promise<any>;
    
    createUser(req: express.Request, res: express.Response, next: express.NextFunction): Promise<any>;

    updateUser(req: express.Request, res: express.Response, next: express.NextFunction): Promise<any>;

    deleteUser(req: express.Request, res: express.Response, next: express.NextFunction): Promise<any>;
}
