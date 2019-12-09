export abstract class OfflineModel<T> {
    static tableName: string;
    abstract _indexes: string[];
    abstract _key: string;

    abstract syncModel(): T;
}