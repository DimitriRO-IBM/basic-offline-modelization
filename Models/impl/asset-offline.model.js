"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var offline_model_1 = require("../offline.model");
var asset_model_1 = require("./asset.model");
var OfflineAsset = /** @class */ (function (_super) {
    __extends(OfflineAsset, _super);
    function OfflineAsset(name) {
        var _this = _super.call(this) || this;
        _this._indexes = ['assetName'];
        _this._key = 'assetName';
        _this.assetName = name;
        return _this;
    }
    OfflineAsset.prototype.syncModel = function () {
        return new asset_model_1.Asset(this.assetName);
    };
    OfflineAsset.tableName = 'assets';
    return OfflineAsset;
}(offline_model_1.OfflineModel));
exports.OfflineAsset = OfflineAsset;
