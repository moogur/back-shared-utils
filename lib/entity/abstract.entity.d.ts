export declare abstract class AbstractEntity {
    id: string;
    createdDate: number;
    updatedDate: number | null;
    protected beforeInsert(): void;
    protected beforeUpdate(): void;
}
