import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GraphQLModule } from '@nestjs/graphql'
import { ProductsModule } from './products/products.module'

const { NODE_ENV } = process.env

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'test',
      password: 'test',
      database: 'test',
      logging: NODE_ENV !== 'production',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    GraphQLModule.forRoot({
      debug: NODE_ENV !== 'production',
      playground: NODE_ENV !== 'production',
      autoSchemaFile: 'schema.gql',
    }),
    ProductsModule,
  ],
})
export class AppModule {}
