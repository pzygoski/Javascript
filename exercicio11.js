class Imovel{
    construtor(quartos,tipo,endereco){
        this.quartos = quartos
        this.tipo = tipo
        this.enderco = endereco
    }
    exibirInformacoes(){
        return 'Tipo: ${this.tipo} Quartos: ${this.quatos} Endereco: ${this.endereco}'
    }
}

const casa = new Imovel(4,"Casa","Rua da Amizade, 789 - Bairro Alegre")
const aparartamento = new Imovel(2,"Apartamento","Avenida da Paz, 123 - Centro")
console.log(casa.exibirInformcoes())
console.log(aparartamento.exibirInformacoes())