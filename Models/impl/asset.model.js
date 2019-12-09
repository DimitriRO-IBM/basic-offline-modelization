"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Asset = /** @class */ (function () {
    function Asset(name) {
        this.assetName = name;
    }
    Asset.prototype.display = function () {
        console.log(this.assetName);
    };
    return Asset;
}());
exports.Asset = Asset;
