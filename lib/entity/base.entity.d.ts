export declare abstract class BaseEntity {
    id: string;
    createdDate: number;
    updatedDate: number | null;
    protected beforeInsert(): void;
    protected beforeUpdate(): void;
}
