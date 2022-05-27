import { uuid } from 'uuidv4';
import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { GraphQLUpload, FileUpload, Upload } from 'graphql-upload';
import { createWriteStream } from 'fs';
import { BadRequestException, Req, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { imageFileFilter } from './file.helper';
import { FileService } from './files.service';

@Resolver()
export class FileResolver {

  constructor(
    private readonly filesService: FileService,
  ) { }

  @Mutation(() => String)
  async uploadFile(@Req() req: any, @Args({ name: 'file', type: () => GraphQLUpload })
  {
    createReadStream,
    filename,
  }: FileUpload) {
    const path = `${uuid()}-${filename}`
  
    const promise = new Promise(async (resolve, reject) =>
      createReadStream()
        .pipe(createWriteStream(`./uploads/${path}`))
        .on('error', error => reject(error))
        .on('finish', () => resolve(`./uploads/${path}`))
    );
    const resualt = await this.filesService.uploadFileForS3(createReadStream,filename, `uploads/${path}`);
    console.log(resualt);
    return promise;
  }

  // @Mutation(() => String)
  // @UseInterceptors(
  //   FileInterceptor('file', {
  //     fileFilter: imageFileFilter,
  //   })
  // )
  // async uploadFile(@Req() req: any, @UploadedFile() file: Express.Multer.File) {
  //   if (!file || req.fileValidationError) {
  //     throw new BadRequestException('Invalid file provided, [image files allowed]')
  //   }
  //   return file.originalname;
  // }

  // @Mutation(() => String)
  // @UseInterceptors(
  //   FileInterceptor('image')
  // )
  // async uploadMultipleFiles(@UploadedFile() files: any) { // Express.multer types !!!
  //   const response: any = [];
  //   files.map((file: any) => {
  //     const fileResponse = {
  //       originalname: file.originalname,
  //       filename: file.filename,
  //     };
  //     response.push(fileResponse);
  //   });
  //   return response;
  // }
}