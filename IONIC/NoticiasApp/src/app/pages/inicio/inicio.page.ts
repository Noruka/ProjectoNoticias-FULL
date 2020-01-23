import {Component, HostBinding, Inject, OnInit, ViewChild} from '@angular/core';
import {NoticiasService} from '../../services/noticias.service';
import {Noticia} from '../../models/Noticia';
import {Observable} from "rxjs";
import {DataService} from "../../services/data.service";
import {Componente} from "../../interfaces/componente";
import {IonInfiniteScroll, MenuController} from "@ionic/angular";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

    pipo = 0;
    contador = 0;
    noticias: Noticia[];
    componentes: Observable<Componente[]>;

    @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;
    data: any[] = [];

    constructor(private noticiasService: NoticiasService, private menuCtrl: MenuController, @Inject(DataService) private dataService: DataService) {

    }

    ngOnInit() {

        this.componentes = this.dataService.getMenuOpts();

        this.getNoticias();

        this.loadData(null);
    }

    doRefresh(event) {
        console.log('Begin async operation');

        setTimeout(() => {
            console.log('Async operation has ended');

            this.noticias = [];
            this.data = [];
            this.contador = 0;
            this.pipo = 0;

            this.getNoticias();
            this.loadData(null);

            event.target.complete();
        }, 2000);
    }

    loadData(event) {
        console.log('Cargando siguientes ...');
        setTimeout(() => {

        this.getNoticias();

        if ( this.data.length > this.noticias.length ) {
            event.target.complete();
            this.infiniteScroll.disabled = true;
            return;
        }

        if (this.noticias.length - this.data.length >= 5) {
            this.pipo = 5;
        } else {
            this.pipo = this.noticias.length - this.data.length;
        }

        const nuevoArr = Array(this.pipo);
        for (let i = 0; i < 5; i++) {
            if (this.contador < this.noticias.length) {
            nuevoArr[i] = this.noticias[this.contador];
            this.contador++;
            }
        }
        this.data.push( ...nuevoArr);
        event.target.complete();
        }, 1000 );
    }

    getNoticias() {

        this.noticiasService.getNoticias().subscribe(
            res => {
            this.noticias = res;
            },
            err => console.error(err)
        );
    }

}



