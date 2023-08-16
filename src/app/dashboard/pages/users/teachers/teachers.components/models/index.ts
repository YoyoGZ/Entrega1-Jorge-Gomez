export interface Teacher {
    id: number;
    name: string;
    surname: string;
    nation: string;
    birthday: string;
    sex: string;
    email: string;
    password: string;
};

export interface CreateTeacherId {
    name: string;
    surname: string;
    nation: string;
    birthday: string;
    sex: string;
    email: string;
    password: string;
};

export interface UpdateTeacherData {
    name?: string;
    surname?: string;
    nation?: string;
    birthday?: string;
    sex?: string;
    email?: string;
    password?: string;
};