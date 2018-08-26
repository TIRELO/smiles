import { Component, OnInit } from '@angular/core';
import { Pergunta } from './pergunta.model';
import { Perguntas } from './perguntas-mock';
import { PRIMARY_OUTLET } from '@angular/router';

@Component({
    selector: 'app-mithtrue-page',
    templateUrl: './mithtrue-page.component.html',
    styleUrls: ['./mithtrue-page.component.scss', '../../styles/style.scss']
})
export class MithtruePageComponent implements OnInit {
    perguntaAtiva: Pergunta;
    mithOrTrueLogo: string;
    perguntas = Perguntas;
    isFirst: boolean;
    index: number;
    isGameEnded: boolean;
    perguntaRespondida: boolean;
    acertou: boolean;
    isLastQuestion: boolean;
    acertos: number;
    resultado: string;
    descriptionMessage: string;
    Message: string;

    constructor() {}

    ngOnInit() {
        this.mithOrTrueLogo = 'assets/images/mitoverdade.png';
        this.isFirst = true;
        this.isGameEnded = false;
    }

    onButtomPlay() {
        this.index = 0;
        this.isGameEnded = false;
        this.perguntaAtiva = this.perguntas[this.index];
        this.isFirst = false;
        this.perguntaRespondida = false;
        this.isLastQuestion = false;
        this.acertos = 0;
    }

    alterarPergunta () {
        this.index += 1;

        if (this.index < this.perguntas.length) {
            this.perguntaAtiva = this.perguntas[this.index];
            this.perguntaRespondida = false;

            let lastIndex = this.perguntas.length - this.index;
            if (lastIndex === 1) {
                this.isLastQuestion = true;
            }
        }
    }

    responderPergunta (resposta: boolean) {
        if (resposta === this.perguntaAtiva.resposta) {
            this.acertou = true;
            this.acertos += 1;
        } else {
            this.acertou = false;
        }

        this.perguntaRespondida = true;
    }

    finalizarJogo () {
        this.isGameEnded = true;

        this.resultado = 'Você acertou ' + this.acertos + ' de ' + this.perguntas.length + ' perguntas!';

        const porcentagemDeAcertos = this.acertos / this.perguntas.length;

        if (porcentagemDeAcertos >= 0 && porcentagemDeAcertos < 0.5) {
            this.Message = 'Não desanime, é errando que se aprende!';
            this.descriptionMessage = 'Sabemos do seu potencial, e incentivamos que volte a jogar assim que possível';
        }

        if (porcentagemDeAcertos >= 0.5 && porcentagemDeAcertos < 1) {
            this.Message = 'Você foi bem, mas podemos melhorar!';
            this.descriptionMessage = 'Você se dedicou e acertou a maior parte das questões, agora é hora de acertar todas!';
        }

        if (porcentagemDeAcertos === 1) {
            this.Message = 'Você é um expert!';
            this.descriptionMessage = 'Você acertou todas, e está pronto para ajudar a conscientizar a sociedade.';
        }
    }
}
