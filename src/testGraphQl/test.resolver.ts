import { TestService } from './test.service';
import { Resolver ,Query } from "@nestjs/graphql";
import { Test } from './test.entity';

@Resolver(of => Test)
export class TestResolver {
    constructor(private testService: TestService) { }

    @Query(returns => [Test])
    test(): Promise<Test[]> {
        return this.testService.returnTest();
    }
}