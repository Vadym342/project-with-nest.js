import { Module } from '@nestjs/common';
import { FileResolver } from './files.resolver';
import { FileService } from './files.service';

@Module({
  imports: [],
  providers: [FileResolver, FileService],
})
export class FileModule {}
