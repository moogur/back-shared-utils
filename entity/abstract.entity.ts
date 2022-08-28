import { BeforeInsert, Column, PrimaryGeneratedColumn, BeforeUpdate } from 'typeorm';

export abstract class AbstractEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'created_date', type: 'int4', readonly: true })
  createdDate: number;

  @Column({ name: 'updated_date', type: 'int4', nullable: true, default: null })
  updatedDate: number | null;

  @BeforeInsert()
  protected beforeInsert() {
    this.createdDate = Math.floor(Date.now() / 1000);
  }

  @BeforeUpdate()
  protected beforeUpdate() {
    this.updatedDate = Math.floor(Date.now() / 1000);
  }
}
