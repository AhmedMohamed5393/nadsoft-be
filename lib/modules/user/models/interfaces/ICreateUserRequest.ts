export interface ICreateUserRequest {
    name: string;
    email: string;
    password: string;
    confirm_password?: string;
    phone?: string;
}
