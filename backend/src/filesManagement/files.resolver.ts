import { uuid } from 'uuidv4';
import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { createWriteStream } from 'fs';
import { imageFileFilter } from './file.helper';
import { FileService } from './files.service';
@Resolver()
export class FileResolver {
//util.promisify
  constructor(
    private readonly filesService: FileService,
  ) { }

  //TEST upload
  @Mutation(() => String)
  async uploadFile(@Args({ name: 'file', type: () => GraphQLUpload })
  {
    createReadStream,
    filename,
  }: FileUpload) {
    if (!imageFileFilter(filename)) {
      return Promise.reject(new Error('Only image files are allowed!'));
    }
    const path = `${uuid()}`;
    const promise = new Promise(async (resolve, reject) =>
      createReadStream()
        .pipe(createWriteStream(`./uploads/${path}`))
        .on('error', error => reject(error))
        .on('finish', () => resolve(`./uploads/${path}`))
    );
    const resualt = await this.filesService.uploadFileForS3(createReadStream, path, `uploads/${path}`);
    const getFile = await this.filesService.getFile(path);
    console.log(getFile);
    console.log(resualt);
    return promise;
  }

  //???
  @Query(()=> String, { name: "getImage" })
  async getImage(@Args('key', { type: () => String }) key: string) {
    const res = await this.filesService.getFile(key);
    console.log(res.Body);
    return `data:image/*;base64,${res.Body.toString("base64")}`
  }
}