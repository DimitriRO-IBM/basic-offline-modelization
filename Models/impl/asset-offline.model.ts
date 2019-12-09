import { OfflineModel } from '../offline.model';
import { Asset } from './asset.model';

export class OfflineAsset extends OfflineModel<Asset> {
    static tableName: string = 'assets';
    _indexes: string[] = ['assetName'] ;
    _key: string = 'assetName';
    assetName: string;

    constructor(name: string) {
        super();
        this.assetName = name;
    }

    syncModel(): Asset {
        return new Asset(this.assetName);
    }
}