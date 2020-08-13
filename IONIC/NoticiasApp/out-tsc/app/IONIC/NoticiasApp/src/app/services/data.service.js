import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
let DataService = class DataService {
    constructor(http) {
        this.http = http;
    }
    getMenuOpts() {
        return this.http.get('/assets/data/menu.json'); /*servicio que devuelve la lista para el menu*/
    }
};
DataService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], DataService);
export { DataService };
//# sourceMappingURL=data.service.js.map