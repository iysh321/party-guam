import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserExperience } from './user-experience.entity';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  company_id: number;

  @Column()
  name: string;

  @OneToMany(() => UserExperience, (userExperience) => userExperience.user)
  userExperiences: UserExperience[];
}
