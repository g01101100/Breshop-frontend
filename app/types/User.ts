import { Address } from "./Address";

export interface User{
    id: number;
    nome: string,
    email: string,
    address?: Address,
}
