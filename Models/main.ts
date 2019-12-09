import { OfflineAsset } from './impl/asset-offline.model';
import { Asset } from './impl/asset.model';

const asset: OfflineAsset = new OfflineAsset('Coucou Thomas');

const synced: Asset = asset.syncModel();

console.log(synced);
synced.display();