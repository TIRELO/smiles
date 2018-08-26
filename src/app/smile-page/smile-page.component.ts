import { Component, OnInit } from '@angular/core';
import { Atividade } from './atividade-model';
import { AtividadesLevelOne } from './atividades-level-one.mock';
import { AtividadesLevelTwo } from './atividades-level-two.mock';

@Component({
    selector: 'app-smile-page',
    templateUrl: './smile-page.component.html',
    styleUrls: ['./smile-page.component.scss', '../../styles/style.scss']
})
export class SmilePageComponent implements OnInit {
    index: number;
    atividadeAtiva: Atividade;
    atividades: Atividade[];
    isFirst: boolean;
    smileLogo: string;
    isGameEnded: boolean;
    isGameStarted: boolean;
    selectLevel: boolean;
    selectedLevel: number;
    levelOneLogo: string;
    levelTwoLogo: string;
    acertos: number;
    isLastQuestion: boolean;
    result: string;
    message: string;
    descriptionMessage: string;
    initialTime: any;
    endTime: any;
    totalTimeMinutes: any;
    totalTimeSeconds: any;
    timeResult: string;

    constructor() {}

    ngOnInit() {
        this.smileLogo = 'assets/images/smile.png';
        this.levelOneLogo = 'assets/images/level-1.png';
        this.levelTwoLogo = 'assets/images/dois.png';
        this.isFirst = true;
        this.isGameEnded = false;
        this.isGameStarted = false;
    }

    onButtomPlay() {
        this.isGameEnded = false;
        this.isFirst = false;
        this.selectLevel = true;
    }

    startGame(selectedLevel: number) {
        this.selectLevel = false;
        this.selectedLevel = selectedLevel;
        this.index = 0;

        if (selectedLevel === 1) {
            this.atividades = AtividadesLevelOne;
        } else {
            this.atividades = AtividadesLevelTwo;
        }

        this.atividadeAtiva = this.atividades[this.index];
        this.acertos = 0;
        this.isGameStarted = true;
        this.initialTime = new Date().getTime();
    }

    onRestartButtonClick() {
        this.selectLevel = true;
        this.isGameStarted = false;
        this.atividades = [];
        this.atividadeAtiva = null;
        this.index = 0;
        this.acertos = 0;
        this.isGameEnded = false;
        this.isLastQuestion = false;
    }

    onOptionClick(resposta: number) {
        this.index += 1;

        if (this.atividadeAtiva.resposta === resposta) {
                this.acertos = this.acertos + 1;
        }

        if (!this.isLastQuestion) {
            this.atividadeAtiva = this.atividades[this.index];

            let lastIndex = this.atividades.length - this.index;
            if (lastIndex === 1) {
                this.isLastQuestion = true;
            }
        } else {
            this.endTime = new Date().getTime();

            this.totalTimeMinutes = new Date(this.endTime - this.initialTime).getUTCMinutes();
            this.totalTimeSeconds = new Date(this.endTime - this.initialTime).getUTCSeconds();
            this.isGameStarted = false;
            this.isGameEnded = true;
            this.timeResult = 'Você terminou em ' + this.totalTimeMinutes + ' minutos e ' + this.totalTimeSeconds + ' segundos!';
            this.result = 'Você acertou ' + this.acertos + ' de ' + this.atividades.length;

            if (this.acertos === 0) {
                this.message = 'Você não acertou nenhuma pergunta. =(';
                this.descriptionMessage = 'Mas não desanime, sabemos que na proxima vez você vai arrasar!';
            }

            const porcentagemAcertos = this.acertos / this.atividades.length;

            if (porcentagemAcertos === 1) {
                this.message = 'VOCÊ ACERTOU TODAS AS PERGUNTAS!!!';
                this.descriptionMessage = 'Você foi sensacional, arrasou muito';
            }

            if (porcentagemAcertos > 0 && porcentagemAcertos <= 0.2) {
                this.message = 'Não desanime, é errando que se aprende!';
                this.descriptionMessage = 'Tente novamente, sabemos que vai se sair bem';
            }

            if (porcentagemAcertos > 0.20 && porcentagemAcertos <= 0.5) {
                this.message = 'Você está aprendendo';
                this.descriptionMessage = 'Logo logo vai estar fera';
            }

            if (porcentagemAcertos > 0.50 && porcentagemAcertos <= 0.8) {
                this.message = 'Quase lá!!';
                this.descriptionMessage = 'Logo vai ser um expert';
            }

            if (porcentagemAcertos > 0.50 && porcentagemAcertos < 1) {
                this.message = 'Falta muito pouco';
                this.descriptionMessage = 'Você está sendo excelente, logo vai acertar tudo';
            }
        }
    }
}
