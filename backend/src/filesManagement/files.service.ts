import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { uuid } from 'uuidv4';
import fs from 'fs';

@Injectable()
export class FileService {
  constructor(
    private readonly configService: ConfigService
  ) { }

  async uploadFileForS3(createReadStream, fileName: string, filePath: string) {
    const s3 = new S3();
    const fileStream = createReadStream(filePath);
    return await s3.upload({
      Bucket: "shopimages54643",
      Body: fileStream,
      Key: fileName
    }).promise();
  }

  async deleteFile(key: string) {
    const s3 = new S3();
    return await s3.deleteObject({
      Bucket: this.configService.get('AWS_BUCKET_NAME')!,
      Key: key,
    }).promise();
  }
}
