import { IMiddleware } from "../interfaces/IMiddleware";
import { IMiddlewareFactory } from "../interfaces/IMiddlewareFactory";
import { AuthMiddleware } from "./authMiddleware";

export class MiddlewareFactory implements IMiddlewareFactory {
    private middlewareMap: Map<string, IMiddleware>;

    constructor() {
        this.middlewareMap = new Map<string, IMiddleware>();
        this.createMiddlewares();
    }

    public getMiddleware(middlewareName: string) {
        return this.middlewareMap.get(middlewareName);
    }
    
    private createMiddlewares(): void {
        this.middlewareMap.set(AuthMiddleware.name, new AuthMiddleware());
    }
}

export default MiddlewareFactory;
