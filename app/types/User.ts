import { Address } from "./Address";

export interface User{
    nome: string,
    email: string,
    address?: Address,
}
