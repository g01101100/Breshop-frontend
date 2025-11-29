import { Brecho } from "./Brecho";
import { Tag } from "./Tag";

export interface Produto{
    nome: string,
    preco: number,
    brecho: Brecho,
    tags: Tag[],
}