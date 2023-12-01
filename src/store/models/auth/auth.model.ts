export interface IRegistrationRequest {
    phone: string;
}

export interface IRegistrationResponse {
    sucess: string;
}

export interface ILoginRequest {
    phone: string;
    password: string;
    deviceData: string;
}

export interface ILoginResponse {
    access: string;
    user: IAuth;
}

export interface IAuth {
    id: number;
    phone: string;
}