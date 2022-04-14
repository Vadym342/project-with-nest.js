import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

const start = async () => {
  try {
    const PORT = process.env.PORT;
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    await app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};
start();
