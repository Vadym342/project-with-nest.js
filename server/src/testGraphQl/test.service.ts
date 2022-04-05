import { Injectable } from "@nestjs/common";
import { Test } from "./test.entity";

@Injectable()
export class TestService {
    async returnTest(): Promise<Test[]> {
        const test = new Test();
        test.word = 'fdfd';

        return [test];
    }
}