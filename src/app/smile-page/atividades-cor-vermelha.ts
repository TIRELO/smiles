import { Atividade } from './atividade-model';

export const AtividadesCorVermelha: Atividade[] = [
    {
        id: 1,
        descricao: 'Qual a cor da maçã?',
        imagem: 'assets/images/maca.png',
        resposta: 2,
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
        descricao: 'Qual a cor do Papai Noel?',
        imagem: 'assets/images/papai-noel.png',
        resposta: 4,
        opcoes: [
            {
                id: 1,
                descricao: 'Amarelo',
                imagem: 'assets/images/amarelo.jpg'
            },
            {
                id: 2,
                descricao: 'Verde',
                imagem: 'assets/images/verde.jpg'
            },
            {
                id: 3,
                descricao: 'Azul',
                imagem: 'assets/images/azul.jpg'
            },
            {
                id: 4,
                descricao: 'Vermelho',
                imagem: 'assets/images/vermelho.jpg'
            },
        ]
    }
  ];
