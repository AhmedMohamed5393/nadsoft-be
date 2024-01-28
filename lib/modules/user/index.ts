import { UserServiceConfig } from "./config";
import { Service } from "./service";
import {
    MiddlewareFactory,
} from "../../shared/middlewares/middlewareFactory";

class UserServiceFactory {
    public static getConfig() {
        return new UserServiceConfig();
    }

    public static createModule() {
        return new Service();
    }

    public static createMiddlewareFactory() {
        return new MiddlewareFactory();
    }
}

export { UserServiceConfig, Service, MiddlewareFactory };
export default UserServiceFactory;
