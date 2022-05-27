import { Injectable } from '@nestjs/common';
import { FileService } from './files.service';

@Injectable()
export class UploadService {
  constructor(
    private readonly filesService: FileService,
  ) { }

  // async addImage(imageBuffer: Buffer, fileName: string) {
  //   return await this.filesService.uploadFile(imageBuffer, fileName)
  // }
}
