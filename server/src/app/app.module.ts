import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

import { UserModule } from '@modules/user';
import { AuthModule } from '@modules/auth';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { SKillModule } from '@modules/skill/skill.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      context: ({ req, res }) => ({ req, res }),
    }),
    JwtModule.register({}),
    AuthModule,
    UserModule,
    SKillModule,
  ],
  providers: [JwtService],
})
export class AppModule {}
