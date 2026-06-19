export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    phone: string;
    role: string;
}

export interface UserProfile {
    id: number;
    name: string;
    email: string;
    phone: string;
    role: string;
}

export interface UserLogin {
    email: string;
    password: string;
}
