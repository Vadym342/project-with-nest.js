import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { GraphQLUpload, FileUpload, Upload } from 'graphql-upload';
import { createWriteStream } from 'fs';
import { BadRequestException, Req, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { imageFileFilter } from './file.helper';

export const uploadFile = (filename: string = 'file'): MethodDecorator => (
  target: any,
  propertyKey,
  descriptor: PropertyDescriptor,
) => {
  
}


@Resolver()
export class FileResolver {

  constructor() { }

  @Mutation(() => String)
  async uploadFile_GraphqlUpload(@Args({ name: 'file', type: () => GraphQLUpload })
  {
    createReadStream,
    filename
  }: FileUpload) {
    return new Promise(async (resolve, reject) =>
      createReadStream()
        .pipe(createWriteStream(`./uploads/${filename}`))
        .on('error', error => reject(error))
        .on('finish', () => resolve(`./uploads/${filename}`))
    );
  }

  @Mutation(() => String)
  @uploadFile('filename')
  @UseInterceptors(
    FileInterceptor('filename', {
      fileFilter: imageFileFilter,
    })
  )
  async uploadFile(@Req() req: any, @UploadedFile() file: Express.Multer.File) {
    if (!file || req.fileValidationError) {
      throw new BadRequestException('Invalid file provided, [image files allowed]')
    }
    const buffer = file.buffer;

  }

  @Mutation(() => String)
  @UseInterceptors(
    FileInterceptor('image')
  )
  async uploadMultipleFiles(@UploadedFile() files: any) { // Express.multer types !!!
    const response: any = [];
    files.map((file: any) => {
      const fileResponse = {
        originalname: file.originalname,
        filename: file.filename,
      };
      response.push(fileResponse);
    });
    return response;
  }
}