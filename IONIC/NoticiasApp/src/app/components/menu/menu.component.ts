import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {DataService} from "../../services/data.service";
import {Componente} from "../../interfaces/componente";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes: Observable<Componente[]>;

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts(); /*carga la lista de opciones del fichero /assets/data/menu.json */
  }

}
