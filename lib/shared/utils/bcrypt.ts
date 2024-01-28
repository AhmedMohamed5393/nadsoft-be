import * as bcryptjs from "bcryptjs";

export async function encryptPassword(password: string) {
    return bcryptjs.hashSync(password, 10);
}

export async function comparePassword(requestPassword: string, userPassword: string) {
    return bcryptjs.compareSync(requestPassword, userPassword);
}
