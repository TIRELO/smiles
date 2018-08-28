import { Component, OnInit, OnDestroy } from '@angular/core';
import { Atividade } from './atividade-model';
import { AtividadesNumeros } from './atividades-numeros';
import { AtividadesLetras } from './atividades-letras';
import { AtividadesCorVermelha } from './atividades-cor-vermelha';
import { AtividadesCorVerde } from './atividades-cor-verde';
import { AtividadesCorAmarela } from './atividades-cor-amarela';
import { AtividadesCorAzul } from './atividades-cor-azul';

@Component({
    selector: 'app-smile-page',
    templateUrl: './smile-page.component.html',
    styleUrls: ['./smile-page.component.scss', '../../styles/style.scss']
})
export class SmilePageComponent implements OnInit, OnDestroy {
    index: number;
    atividadeAtiva: Atividade;
    atividades: Atividade[];
    isFirst: boolean;
    smileLogo: string;
    isGameEnded: boolean;
    isGameStarted: boolean;
    selectContext: boolean;
    colorContextLogo: string;
    numberContextLogo: string;
    letterContextLogo: string;
    selectColor: boolean;
    redColorLogo: string;
    greenColorLogo: string;
    yellowColorLogo: string;
    blueColorLogo: string;
    isLastQuestion: boolean;
    message: string;
    initialTime: any;
    endTime: any;
    totalTimeMinutes: any;
    totalTimeSeconds: any;
    timeResult: string;
    correct: boolean;
    correctLogo: string;
    congratsLogo: string;
    acertsAudio: any;
    errorAudio: any;
    introAudio: any;
    isSoundEnable: boolean;

    // Setar mocks de atividades
    atividadesNumero = AtividadesNumeros;
    atividadesLetras = AtividadesLetras;
    atividadesCorVermelha = AtividadesCorVermelha;
    atividadesCorVerde = AtividadesCorVerde;
    atividadesCorAmarela = AtividadesCorAmarela;
    atividadesCorAzul = AtividadesCorAzul;

    constructor() {}

    ngOnInit() {
        this.smileLogo = 'assets/images/smile.png';
        this.colorContextLogo = 'assets/images/color-logo.jpg';
        this.numberContextLogo = 'assets/images/number-logo.jpg';
        this.letterContextLogo = 'assets/images/letter-logo.jpg';
        this.redColorLogo = 'assets/images/vermelho.jpg';
        this.greenColorLogo = 'assets/images/verde.jpg';
        this.yellowColorLogo = 'assets/images/amarelo.jpg';
        this.blueColorLogo = 'assets/images/azul.jpg';
        this.correctLogo = 'assets/images/correct.png';
        this.congratsLogo = 'assets/images/baloes.png';
        this.isFirst = true;
        this.isGameEnded = false;
        this.isGameStarted = false;
        this.selectColor = false;
        this.acertsAudio = new Audio();
        this.acertsAudio.src = 'assets/sounds/acerts-audio.mp3';
        this.errorAudio = new Audio();
        this.errorAudio.src = 'assets/sounds/error-audio.mp3';
        this.introAudio = new Audio();
        this.introAudio.loop = true;
        this.introAudio.src = 'assets/sounds/intro-song.mp3';
    }

    ngOnDestroy() {
        // destroy audio here
        if (this.introAudio) {
          this.introAudio.pause();
          this.introAudio = null;
        }
      }

    onButtomPlay() {
        this.isGameEnded = false;
        this.isFirst = false;
        this.selectContext = true;
        this.introAudio.load();
        this.introAudio.play();
        this.isSoundEnable = true;
    }

    startGame(atividades: Atividade[]) {
        this.selectContext = false;
        this.selectColor = false;
        this.index = 0;
        this.atividades = atividades;
        this.atividadeAtiva = this.atividades[this.index];
        this.isGameStarted = true;
        this.initialTime = new Date().getTime();
    }

    setColor() {
        this.selectContext = false;
        this.selectColor = true;
    }

    onRestartButtonClick() {
        this.selectContext = true;
        this.isGameStarted = false;
        this.atividades = [];
        this.atividadeAtiva = null;
        this.index = 0;
        this.isGameEnded = false;
        this.isLastQuestion = false;
    }

    onOptionClick(resposta: number) {
        if (this.atividadeAtiva.resposta === resposta) {
            this.isGameStarted = false;
            this.correct = true;
            this.index += 1;
            this.acertsAudio.load();
            this.acertsAudio.play();

            setTimeout(() => {
                this.isGameStarted = true;
                this.correct = false;

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
                    this.message = 'Parabéns!';
            }

            }, 2000);

    } else {
        this.errorAudio.load();
        this.errorAudio.play();
        }
    }

    stopSong() {
        this.introAudio.pause();
        this.isSoundEnable = false;
    }

    startSong() {
        this.introAudio.play();
        this.isSoundEnable = true;
    }
}
