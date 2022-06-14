import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { createReadStream } from 'fs';
@Injectable()
export class FileService {
  constructor(
    private readonly configService: ConfigService
  ) { }

  async uploadFileForS3(fileName: string, filePath: string) {
    const s3 = new S3();
    console.log(fileName)
    const fileStream = createReadStream(filePath);
    const bb = await s3.upload({
      Bucket: `${this.configService.get('AWS_BUCKET_NAME')}`,
      Body: fileStream,
      Key: fileName
    }).promise();
    console.log(bb);
    return bb;
  }

  async deleteFile(fileKey: string) {
    const s3 = new S3();
    return await s3.deleteObject({
      Bucket: `${this.configService.get('AWS_BUCKET_NAME')}`,
      Key: fileKey
    }).promise();
  }

  async getFile(fileKey: string) {
    const s3 = new S3();
    return await s3.getObject({
      Bucket: `${this.configService.get('AWS_BUCKET_NAME')}`,
      Key: fileKey
    }).promise();
  }
}
