import { PartyUserEntity } from 'src/party/infra/db/entity/party/party-user.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('postion')
export class PositionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  position: string;

  @OneToMany(() => PartyUserEntity, (position) => position.position)
  partyUsers: PartyUserEntity[];

  @OneToMany(() => PartyUserEntity, (position) => position.position)
  users: PartyUserEntity[];
}
