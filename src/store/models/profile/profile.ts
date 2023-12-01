export interface IAdress {
    id: number;
    name: string;
    city: string,
    region: string,
    appartaments: string,
    domophoneCode: number,
    entrance: number,
    floor: number,
    postNumber: string,
    deliveryType: number
}

export interface IProfileData {
   firstname: string | null,
   middlename: string | null,
   lastname: string | null,
   birthday: Date | null,
   email: string | null,
   phone: string | null,
   profileAdresses: IAdress[] | null
}

export interface IUpdateProfile {
    firstname: string | null,
    middlename: string | null,
    lastname: string | null,
    birthday: Date | null,
    email: string | null,
    phone: string | null,
}