import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

const start = async () => {
  try {
    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService);
    const PORT = configService.get<string>('PORT');
    app.enableCors();
    await app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};
start();
