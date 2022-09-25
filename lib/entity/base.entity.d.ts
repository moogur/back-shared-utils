export declare abstract class BaseEntity {
    id: string;
    createdDate: number;
    updatedDate: number | null;
    protected baseBeforeInsert(): void;
    protected baseBeforeUpdate(): void;
}
