export interface IOrder {
    firstname: string| null;
    surname: string | null;
    lastname: string | null;
    phone: string;
    email: string | null;

    city: string | null;
    region: string | null;
    appartaments: string | null;
    domophoneCode: number | null;
    entrance: number | null;
    floor: number | null;
    postNumber: string | null;

    promocode: string | null;

    paymentType: string | null;
    deliveryType: string | null;
    note: string | null;

    products: IOrderProduct[] | null;
}

export interface IOrderProduct {
    productId: number,
    volumeId: number,
    quantity: number
}

export interface IUserOrderCard {
    orderId: number;
    orderDate: Date;
    orderPrice: number;
    status: string;
    image: string;
}