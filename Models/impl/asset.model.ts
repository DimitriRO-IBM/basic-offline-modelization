export class Asset {
    assetName: string;

    constructor(name: string) {
        this.assetName = name;
    }

    display(): void {
        console.log(this.assetName);
    }
}