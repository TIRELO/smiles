import { Atividade } from './atividade-model';

export const AtividadesLevelTwo: Atividade[] = [
    {
        id: 1,
        descricao: 'Você sabe o que o Macaco come?',
        imagem: 'assets/images/macaco.jpg',
        resposta: 1,
        opcoes: [
            {
                id: 1,
                descricao: 'Banana',
                imagem: 'assets/images/banana.jpg'
            },
            {
                id: 2,
                descricao: 'Pizza',
                imagem: 'assets/images/pizza.png'
            },
            {
                id: 3,
                descricao: 'Sorvete',
                imagem: 'assets/images/sorvete.png'
            },
            {
                id: 4,
                descricao: 'Chocolate',
                imagem: 'assets/images/chocolate.png'
            }
        ]
    },
    {
        id: 2,
        descricao: 'Você é bom de matemática? Então nos ajude com essa continha:',
        imagem: 'assets/images/quatromaisquatro.png',
        resposta: 3,
        opcoes: [
            {
                id: 1,
                descricao: 'Dois',
                imagem: 'assets/images/dois.png'
            },
            {
                id: 2,
                descricao: 'Cinco',
                imagem: 'assets/images/cinco.png'
            },
            {
                id: 3,
                descricao: 'Oito',
                imagem: 'assets/images/oito.png'
            },
            {
                id: 4,
                descricao: 'Sete',
                imagem: 'assets/images/sete.png'
            }
        ]
    }
  ];
