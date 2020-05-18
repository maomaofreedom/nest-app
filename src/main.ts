import { NestFactory } from '@nestjs/core';
import { PhotoModule } from '../packages/starter';

async function bootstrap() {
  const app = await NestFactory.create(PhotoModule);
  await app.listen(3000);
}
bootstrap();
