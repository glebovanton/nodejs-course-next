export interface IUser {
    id?: string;
    name: string;
    login: string;
    password?: string;
}
export declare class User {
    id?: string;
    name: string;
    login: string;
    password?: string;
    static toResponse(user: IUser): IUser;
}
