export interface IMiddlewareFactory {
    getMiddleware(middlewareName: string): any;
}
