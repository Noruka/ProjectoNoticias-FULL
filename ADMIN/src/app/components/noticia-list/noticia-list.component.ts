import {Component, HostBinding, OnInit} from '@angular/core';
import {NoticiasService} from "../../services/noticias.service";

@Component({
  selector: 'app-noticia-list',
  templateUrl: './noticia-list.component.html',
  styleUrls: ['./noticia-list.component.css']
})
export class NoticiaListComponent implements OnInit {

  noticias: any = [];

  @HostBinding('class') classes = 'row';
  constructor(private noticiasService: NoticiasService) { }

  ngOnInit() {
    this.getNoticias();
  }

  getNoticias() {
    this.noticiasService.getNoticias().subscribe(
      res => {
        this.noticias = res;
      },
      err => console.error(err)
    )
  }

  deleteNoticia( id: string ) {
    this.noticiasService.deleteNoticia( id ).subscribe(
      res => {
        console.log(res);
        this.getNoticias();
      },
      err => console.log(err)
    )
  }

}
