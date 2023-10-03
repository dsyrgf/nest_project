import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = 3000 || process.env.PORT

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log("http://localhost:" + port)
}
bootstrap();
