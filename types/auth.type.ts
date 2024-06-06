export interface User {
    id: number
    name: string
    lastname: string
    admin_pin: any
    document: string
    email: number
    address: number
    uid: string
    token: string
}

export interface LoginResponse {
    auth: true;
    token: string;
    role: string;
    user?: User;
    error?: string;
    status?: number
}