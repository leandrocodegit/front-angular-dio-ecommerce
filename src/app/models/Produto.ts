export class Produto{

    codigo: string;
    valor: Number;
    descricao: string;
    
    constructor(
        codigo: string,
        valor: Number,
        descricao: string){
            this.codigo = codigo
            this.valor = valor
            this.descricao = descricao
        }

}