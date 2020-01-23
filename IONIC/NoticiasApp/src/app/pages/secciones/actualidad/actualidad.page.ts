import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {Noticia} from "../../../models/Noticia";
import {Observable} from "rxjs";
import {Componente} from "../../../interfaces/componente";
import {IonInfiniteScroll, MenuController} from "@ionic/angular";
import {DataService} from "../../../services/data.service";
import {NoticiasService} from "../../../services/noticias.service";

@Component({
  selector: 'app-actualidad',
  templateUrl: './actualidad.page.html',
  styleUrls: ['./actualidad.page.scss'],
})
export class ActualidadPage implements OnInit {

  seccion = "Actualidad";
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

    this.getNoticiaSeccion(this.seccion);

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

      this.getNoticiaSeccion(this.seccion);
      this.loadData(null);

      event.target.complete();
    }, 2000);
  }

  loadData(event) {
    console.log('Cargando siguientes ...');
    setTimeout(() => {

      this.getNoticiaSeccion(this.seccion);

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

  getNoticiaSeccion(seccion: string) {

    this.noticiasService.getNoticiaSeccion(seccion).subscribe(
        res => {
          console.log(res);
          // @ts-ignore
          this.noticias = res;
          },
            error => console.error(error)
    );
  }

}
