import {AxiosResponse} from 'axios'
import $api from "../http";
import {IAuthResponse} from "../models/response/auth-response";
import { IUser } from '../models/IUser';

export default class UserService {
    static fetchUsers() {
        return $api.get<IUser[]>("/users")
    }
}
