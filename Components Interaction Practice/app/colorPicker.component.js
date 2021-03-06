"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ColorPicker = (function () {
    function ColorPicker() {
        this.newEvent = new core_1.EventEmitter();
    }
    ColorPicker.prototype.change = function (data) {
        this.color = data;
        this.newEvent.emit(data);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ColorPicker.prototype, "color", void 0);
    __decorate([
        core_1.Output('color'), 
        __metadata('design:type', Object)
    ], ColorPicker.prototype, "newEvent", void 0);
    ColorPicker = __decorate([
        core_1.Component({
            selector: 'color-picker',
            moduleId: module.id,
            templateUrl: 'colorPicker.component.html',
            styleUrls: ['colorPicker.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ColorPicker);
    return ColorPicker;
}());
exports.ColorPicker = ColorPicker;
//# sourceMappingURL=colorPicker.component.js.map