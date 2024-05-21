export interface User {
    customer_group?: number;
    document?: string;
    email: number;
    id: 2;
    lastname?: string;
    name?: string;
    uid: string;
    token: string;
}

export interface LoginResponse {
    auth: true;
    token: string;
    role: string;
    user?: User;
    error?: string;
    status?: number
}