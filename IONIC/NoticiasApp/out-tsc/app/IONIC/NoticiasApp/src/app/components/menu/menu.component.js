import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DataService } from "../../services/data.service";
let MenuComponent = class MenuComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() {
        this.componentes = this.dataService.getMenuOpts(); /*carga la lista de opciones del fichero /assets/data/menu.json */
    }
};
MenuComponent = tslib_1.__decorate([
    Component({
        selector: 'app-menu',
        templateUrl: './menu.component.html',
        styleUrls: ['./menu.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [DataService])
], MenuComponent);
export { MenuComponent };
//# sourceMappingURL=menu.component.js.map