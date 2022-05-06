import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { getModelToken } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import { Roles } from './constants/enums/roles.enum';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

const mockUsersRepository = {
  create: jest.fn().mockImplementation((dto) => dto),
  save: jest.fn().mockImplementation((user) => Promise.resolve({ ...user })),
};

const newUser = {
  id: 1,
  name: 'dfdfdff',
  email: 'dfdf@fdgfg.com',
  password: '1234567',
  role: Roles.USER,
};

describe('UserService', () => {
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getModelToken(User),
          useValue: mockUsersRepository,
        },
      ],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(usersService).toBeDefined();
  });

  it('should create a new user record and return that', async () => {
    expect(await usersService.createUser(newUser)).toEqual({
      id: expect.any(Number),
      ...newUser,
    });
    expect(mockUsersRepository.create).toHaveBeenCalledWith(newUser);
  });
});
