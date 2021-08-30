import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { User } from '../../user/entities/user.entity'

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 300 })
  description: string;

  @Column({ type: 'date' })
  due_date: string;

  @Column({ type: 'enum', enum: ['pending', 'finished'], default: 'pending' })
  status: string;

  @DeleteDateColumn({ type: "timestamp" })
  public deleted_at: Date;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  public created_at: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  public updated_at: Date;

  @Column({ type: 'int' })
  user_id: number;
}
