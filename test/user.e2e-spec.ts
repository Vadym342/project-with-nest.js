import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { UsersModule } from '../src/models/users/users.module';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../src/models/users/entities/user.entity';
import { Roles } from '../src/models/users/constants/enums/roles.enum';
import { ApolloServer } from 'apollo-server-express';


describe('UsersResolver (e2e)', () => {
  let app: INestApplication;

  const mockUsers = [{
    id: 1,
    name: 'dfdfd',
    email: 'dfdf@dfdf.com',
    password: '1234567',
    role: Roles.USER
  }]

  const mockUsersRepository = {
    // mockImplementation(()=> Promise.resolve({}))
    find: jest.fn().mockResolvedValue(mockUsers),
    create: jest.fn().mockImplementation((dto) => dto),
    save: jest.fn().mockImplementation((user) => Promise.resolve({ ...user })),
  }

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UsersModule],
    })
      .overrideProvider(getRepositoryToken(User))
      .useValue(mockUsersRepository)
      .compile();

    app = moduleFixture.createNestApplication();

    await app.init();
  });
  
  const typeDefs = `
  type Query {
    hello(name: String): String!
  }`;

  const resolvers = {
    Query: {
      hello: (_, { name }) => `Hello ${name}!`,
    },
  };

  it('returns hello with the provided name', async () => {
    const testServer = new ApolloServer({
      typeDefs,
      resolvers
    });

    const result = await testServer.executeOperation({
      query: 'query SayHelloWorld($name: String) { hello(name: $name) }',
      variables: { name: 'world' },
    });

    expect(result.errors).toBeUndefined();
    expect(result.data?.hello).toBe('Hello world!');
  });
});
