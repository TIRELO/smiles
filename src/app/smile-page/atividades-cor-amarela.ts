import { Atividade } from './atividade-model';

export const AtividadesCorAmarela: Atividade[] = [
    {
        id: 1,
        descricao: 'Qual a cor da banana?',
        imagem: 'assets/images/banana.jpg',
        resposta: 3,
        opcoes: [
            {
                id: 1,
                descricao: 'Verde',
                imagem: 'assets/images/verde.jpg'
            },
            {
                id: 2,
                descricao: 'Vermelho',
                imagem: 'assets/images/vermelho.jpg'
            },
            {
                id: 3,
                descricao: 'Amarelo',
                imagem: 'assets/images/amarelo.jpg'
            },
            {
                id: 4,
                descricao: 'Azul',
                imagem: 'assets/images/azul.jpg'
            }
        ]
    },
    {
        id: 2,
        descricao: 'Qual a cor do sol?',
        imagem: 'assets/images/sol.jpg',
        resposta: 1,
        opcoes: [
            {
                id: 1,
                descricao: 'Amarelo',
                imagem: 'assets/images/amarelo.jpg'
            },
            {
                id: 2,
                descricao: 'Vermelho',
                imagem: 'assets/images/vermelho.jpg'
            },
            {
                id: 3,
                descricao: 'Azul',
                imagem: 'assets/images/azul.jpg'
            },
            {
                id: 4,
                descricao: 'Verde',
                imagem: 'assets/images/verde.jpg'
            },
        ]
    }
  ];
