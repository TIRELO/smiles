export class Atividade {
    id: number;
    descricao: string;
    imagem: string;
    opcoes: Opcoes[];
    resposta: number;
}

export class Opcoes {
    id: number;
    descricao: string;
    imagem: string;
}
