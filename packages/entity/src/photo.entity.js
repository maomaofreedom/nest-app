"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Photo = void 0;
var typeorm_1 = require("typeorm");
var Photo = /** @class */ (function () {
    function Photo() {
    }
    __decorate([
        typeorm_1.PrimaryColumn()
    ], Photo.prototype, "id");
    __decorate([
        typeorm_1.Column({ length: 64 })
    ], Photo.prototype, "name");
    __decorate([
        typeorm_1.Column('text')
    ], Photo.prototype, "description");
    __decorate([
        typeorm_1.Column()
    ], Photo.prototype, "filename");
    __decorate([
        typeorm_1.Column('int')
    ], Photo.prototype, "views");
    __decorate([
        typeorm_1.Column()
    ], Photo.prototype, "isPublished");
    Photo = __decorate([
        typeorm_1.Entity()
    ], Photo);
    return Photo;
}());
exports.Photo = Photo;
