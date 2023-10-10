import { UserEntity } from 'src/users/user/infra/db/entity/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { PartyEntity } from '../post/party.entity';

@Entity()
export class PartyRecruitmentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, (user) => user.partyRecruitments)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ManyToOne(() => PartyEntity, (post) => post.partyRecruitments)
  @JoinColumn({ name: 'party_post_id' })
  party: PartyEntity;

  @Column({ nullable: true })
  message: string;

  @Column({ nullable: true, type: 'date' })
  created_at: Date;

  @Column({ nullable: true })
  status: string;
}
