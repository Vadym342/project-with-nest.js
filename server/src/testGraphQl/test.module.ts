import { TestResolver } from './test.resolver';
import { TestService } from './test.service';
import { Module } from '@nestjs/common';

@Module({
    providers: [TestService,TestResolver],
  })
  export class TestModule { }