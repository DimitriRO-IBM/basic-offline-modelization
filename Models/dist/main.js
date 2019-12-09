"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var asset_offline_model_1 = require("./impl/asset-offline.model");
var asset = new asset_offline_model_1.OfflineAsset('Coucou Thomas');
var synced = asset.syncModel();
console.log(synced);
synced.display();
