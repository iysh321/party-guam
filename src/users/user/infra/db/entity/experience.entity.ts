import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('experience')
export class ExperienceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, (user) => user.userExperiences)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @Column({ nullable: true })
  position: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true, type: 'date' })
  start_date: Date;

  @Column({ nullable: true, type: 'date' })
  end_date: Date;
}
