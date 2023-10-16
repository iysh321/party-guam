import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Position {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  position: string;

  @Column({ default: 1 })
  total_positions: number;

  @Column()
  status: boolean;
}
