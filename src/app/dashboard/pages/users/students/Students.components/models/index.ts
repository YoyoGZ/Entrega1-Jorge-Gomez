export interface Student {
    id: number;
    name: string;
    surname: string;
    nation: string;
    birthday: string;
    sex: string;
    email: string;
    password: string;
};

export interface CreateStudId {
    name: string;
    surname: string;
    nation: string;
    birthday: string;
    sex: string;
    email: string;
    password: string;
};

export interface UpdateStudData {
    name?: string;
    surname?: string;
    nation?: string;
    birthday?: string;
    sex?: string;
    email?: string;
    password?: string;
};