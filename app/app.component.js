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
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular';
    }
    AppComponent.prototype.onSubmit = function (form) {
        console.log('you submitted value:', form.value);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'demo-form-sku',
        template: "\n  <div class=\"ui raised segment\">\n      <h2 class=\"ui header\">Demo Form: Sku</h2>\n      <form #f=\"ngForm\"\n            (ngSubmit)=\"onSubmit(f)\"\n            class=\"ui form\">\n\n        <div class=\"field\">\n          <label for=\"skuInput\">SKU</label>\n         <input\ttype=\"text\"\tname=\"email\"\tid=\"email\"\tngModel>\n        </div>\n\n        <button type=\"submit\" class=\"ui button\">Submit</button>\n      </form>\n    </div>\n\n    <demo-form-sku-builder></demo-form-sku-builder>\n",
        providers: [forms_1.NgForm]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map