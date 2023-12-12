import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
export default class SkillSeeder implements Seeder {
    run(dataSource: DataSource): Promise<any>;
}
