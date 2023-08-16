export interface User {
    id: number;
    name: string,
    surname: string;
    email: string;
    password: string;
};

export interface CreateUserId {
    name: string,
    surname: string;
    email: string;
    password: string;
};

export interface UpdateUserData {
    name?: string,
    surname?: string;
    email?: string;
    password?: string;
};
