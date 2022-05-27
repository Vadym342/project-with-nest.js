import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { graphqlUploadExpress } from 'graphql-upload';
import { config } from 'aws-sdk';

const start = async () => {
  try {
    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService);

    config.update({
      accessKeyId: "AKIAWCZEG6XLES2IZYLA" ,
      secretAccessKey: "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",
      region: "eu-west-2",
    })
  
    const PORT = configService.get<string>('PORT');
    app.enableCors();
    app.use(graphqlUploadExpress());
    await app.listen(PORT, () => console.log(`🚀 Server started on PORT ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};
start();
