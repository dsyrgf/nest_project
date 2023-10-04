import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const port = 3000 || process.env.PORT

  const app = await NestFactory.create(AppModule);

  
  const config = new DocumentBuilder ().setTitle('Nest-Projct') .setVersion('1.0.0') .addTag('status').addTag('Auth')  .addServer('http://localhost:3000', 'local').build();
  
  const document = SwaggerModule.createDocument(app, config)
  
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
  
  console.log("http://localhost:" + port)
}
bootstrap();
