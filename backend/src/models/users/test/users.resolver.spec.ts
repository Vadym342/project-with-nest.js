import { Test, TestingModule } from '@nestjs/testing';
import { Roles } from '../constants/enums/roles.enum';
import { UsersResolver } from '../users.resolver';
import { UsersService } from '../users.service';

const mockUserService = {
  getOneUser: jest.fn((id: number) => {
    return 'some value';
  }),

  createUser: jest.fn(dto => {
    return {
      id: Date.now(),
      ...dto,
    };
  }),

  updateUser: jest.fn().mockImplementation((id, dto) => ({
    id,
    ...dto,
  })),
};

const newUser = {
  name: 'dfdfdff',
  email: 'dfdf@fdgfg.com',
  password: '1234567',
  role: Roles.USER,
};
describe('UsersResolver', () => {
  let userResolver: UsersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersResolver, UsersService],
    })
      .overrideProvider(UsersService)
      .useValue(mockUserService)
      .compile();

    userResolver = module.get<UsersResolver>(UsersResolver);
  });

  it('should be defined', () => {
    expect(userResolver).toBeDefined();
  });

  describe('CRUD USER', () => {
    it('should return User', async () => {
      const result = 'some value';
      expect(await userResolver.getOneUser(1)).toBe(result);
    });
    it('should return new User', async () => {
      expect(await userResolver.createUser(newUser)).toEqual({
        id: expect.any(Number),
        ...newUser,
      });

      expect(mockUserService.createUser).toHaveBeenCalledWith(newUser);
    });

    it('should return updated User', async () => {
      expect(userResolver.updateUser({ id: 1, ...newUser })).toEqual({
        id: 1,
        ...newUser,
      });

      expect(mockUserService.updateUser).toHaveBeenCalled();
    });
  });
});
