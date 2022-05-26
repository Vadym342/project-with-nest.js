import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { graphqlUploadExpress } from 'graphql-upload';

const start = async () => {
  try {
    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService);
    const PORT = configService.get<string>('PORT');
    app.enableCors();
    app.use(graphqlUploadExpress());
    await app.listen(PORT, () => console.log(`🚀 Server started on PORT ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};
start();
