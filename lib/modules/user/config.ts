import { IConfig, IEndpoint } from "../../shared/interfaces/IConfig";
import bodyparser from "body-parser";
import cookieParser from "cookie-parser";
import { MiddlewareFactory } from "../../shared/middlewares/middlewareFactory";

export class UserServiceConfig implements IConfig {
    public middlewares = [
        { handler: bodyparser.json() },
        { "handler": cookieParser() },
    ];

    public middlewareFactory = new MiddlewareFactory();
    
    public endpoints: IEndpoint[] = [
        {
            url: "/auth/signin",
            verb: "post",
            middlewares: [],
            function: "signin",
        },
        {
            url: "/users",
            verb: "get",
            middlewares: [],
            function: "getPaginatedUsers",
        },
        {
            url: "/users/:id",
            verb: "get",
            middlewares: [],
            function: "getUserDetails",
        },
        {
            url: "/users",
            verb: "post",
            middlewares: [],
            function: "createUser",
        },
        {
            url: "/users/:id",
            verb: "patch",
            middlewares: [],
            function: "updateUser",
        },
        {
            url: "/users/:id",
            verb: "delete",
            middlewares: [],
            function: "deleteUser",
        },
    ];
}
