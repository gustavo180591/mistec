import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // Enable CORS
  app.enableCors()

  // Enable validation
  app.useGlobalPipes(new ValidationPipe())

  // Enable GraphQL
  app.enableShutdownHooks()

  await app.listen(3001)
}

bootstrap() 