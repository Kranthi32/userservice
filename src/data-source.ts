import {DataSourceOptions, DataSource } from 'typeorm';
import { User } from './user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
 
export const Config: any = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'your_password',
    database: 'customer_user',
    entities: [User],
    synchronize: true,
};
const dataSource = new DataSource(Config);
export default dataSource;
