import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import configuration from './config/configuration';
import { MainModule } from './modules/api/main/main.module';
import { ViewModule } from './modules/view/view.module';

@Module({
  imports: [
    MainModule,
    ViewModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    GraphQLModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        autoSchemaFile: 'schema.gql',
        sortSchema: true,
        playground: config.get('playground'),
        introspection: config.get('playground'),
        cors: {
          origin: true,
          credentials: true,
        },
      }),
    }),
  ],
})
export class AppModule {}
