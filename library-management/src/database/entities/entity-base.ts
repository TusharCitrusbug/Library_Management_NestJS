import {
  BaseEntity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

export class BaseModel extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', {
    comment: 'The product unique identifier',
  })
  id: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @Column({
    type: 'boolean',
    default: 1,
  })
  isActive: boolean;

  // Assign a UUID to the id column before inserting a new record
  generateId(): void {
    this.id = uuidv4();
  }
}
