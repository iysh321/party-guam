import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { Company } from './company.entity';

@Entity()
export class UserExperience {
  @PrimaryGeneratedColumn()
  experience_id: number;

  @ManyToOne(() => User, (user) => user.userExperiences)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Company, (company) => company.userExperiences)
  @JoinColumn({ name: 'company_id' })
  company: Company;

  @Column({ nullable: true })
  position: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true, type: 'date' })
  start_date: Date;

  @Column({ nullable: true, type: 'date' })
  end_date: Date;
}
