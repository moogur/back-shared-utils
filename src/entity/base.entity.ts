import { BeforeInsert, Column, PrimaryGeneratedColumn, BeforeUpdate } from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'created_date', type: 'int4', readonly: true })
  createdDate: number;

  @Column({ name: 'updated_date', type: 'int4', nullable: true })
  updatedDate: number | null;

  @BeforeInsert()
  protected baseBeforeInsert() {
    this.createdDate = Math.floor(Date.now() / 1000);
  }

  @BeforeUpdate()
  protected baseBeforeUpdate() {
    this.updatedDate = Math.floor(Date.now() / 1000);
  }
}
