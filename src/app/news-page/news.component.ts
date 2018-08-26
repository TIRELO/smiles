import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { News } from './news.model';
import { Noticia } from './news-mock';
import { Evento } from './events-mock';


export enum TipoConteudoEnum {
    NOTICIA = 'Notícias',
    EVENTO = 'Eventos',
    ARTIGO = 'Artigos',
}

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss'],
    animations: [routerTransition()]
})

export class NewsComponent implements OnInit {
    mithOrTrueLogo: string;
    tipoConteudo: string;
    tipoConteudos = [TipoConteudoEnum.NOTICIA, TipoConteudoEnum.EVENTO, TipoConteudoEnum.ARTIGO];
    noticias = Noticia;
    eventos = Evento;
    artigos;

    constructor() {

    }

    ngOnInit() {
        console.log("noticia",this.noticias);
        this.tipoConteudo = TipoConteudoEnum.NOTICIA;
    }

    public start() {
        this.noticias;
    }

    onButtomConteudo(tipoConteudo: TipoConteudoEnum){
        console.log("contexto", tipoConteudo);
        this.tipoConteudo = tipoConteudo;

        if(tipoConteudo === TipoConteudoEnum.NOTICIA){
            this.noticias = Noticia;
            this.eventos = null;
        }else if(tipoConteudo === TipoConteudoEnum.EVENTO){    
            this.eventos = Evento;
            this.noticias = null;
        }else if(tipoConteudo === TipoConteudoEnum.ARTIGO){ 
            this.eventos = null;
            this.noticias = null;
        }
        
    }
}
