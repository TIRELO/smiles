import { Atividade } from './atividade-model';

export const AtividadesLevelOne: Atividade[] = [
    {
        id: 1,
        descricao: 'Você é bom de matemática? Então nos ajude com essa continha:',
        imagem: 'assets/images/doismaisdois.png',
        resposta: 4,
        opcoes: [
            {
                id: 1,
                descricao: 'Três',
                imagem: 'assets/images/tres.png'
            },
            {
                id: 2,
                descricao: 'Cinco',
                imagem: 'assets/images/seis.png'
            },
            {
                id: 3,
                descricao: 'Seis',
                imagem: 'assets/images/cinco.png'
            },
            {
                id: 4,
                descricao: 'Quatro',
                imagem: 'assets/images/quatro.png'
            }
        ]
    },
    {
        id: 2,
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
    }
  ];
