import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'postgress_migration',
      autoLoadEntities: true,
      synchronize: false,
    }),
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
