import { Component, OnInit } from '@angular/core';
import { Pergunta } from './pergunta.model';
import { Perguntas } from './perguntas-mock';

@Component({
    selector: 'app-mithtrue-page',
    templateUrl: './mithtrue-page.component.html',
    styleUrls: ['./mithtrue-page.component.scss']
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

        if(this.index < this.perguntas.length){
            this.perguntaAtiva = this.perguntas[this.index];
            this.perguntaRespondida = false;

            let lastIndex = this.perguntas.length - this.index
            if(lastIndex === 1) {
                this.isLastQuestion = true;
            }
        }
    }

    responderPergunta (resposta: boolean) {
        if(resposta === this.perguntaAtiva.resposta){
            this.acertou = true;
            this.acertos += 1;
        } else {
            this.acertou = false;
        }

        this.perguntaRespondida = true;
    }

    finalizarJogo () {
        this.isGameEnded = true;
        this.resultado = 'Você acertou ' + this.acertos + ' de ' + this.perguntas.length + ' perguntas!'
    }
}