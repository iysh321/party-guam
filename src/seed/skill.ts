import { Factory, Seeder } from 'typeorm-seeding';
import { SkillEntity } from 'src/skill/entity/skill.entity';
import { DataSource } from 'typeorm';

export default class CreateSkills implements Seeder {
  public async run(factory: Factory, dataSource: DataSource): Promise<void> {
    await dataSource
      .createQueryBuilder()
      .insert()
      .into(SkillEntity)
      .values([
        { skill: 'node.js' },
        { skill: 'nestjs' },
        // Add more skills as needed
      ])
      .execute();
  }
}
