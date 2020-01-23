import { Component, OnInit } from '@angular/core';
import {NoticiasService} from '../../services/noticias.service';

@Component({
  selector: 'app-mostrar-noticia',
  templateUrl: './mostrar-noticia.page.html',
  styleUrls: ['./mostrar-noticia.page.scss'],
})
export class MostrarNoticiaPage implements OnInit {
    noticia: any;



  constructor(private noticiasService: NoticiasService) { }

  ngOnInit() {
  }

}
