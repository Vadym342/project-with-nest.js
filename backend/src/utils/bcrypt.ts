import * as bcrypt from 'bcrypt';

const SALT = 10;
export function enCodePassword(password: string) {
  return bcrypt.hashSync(password, SALT);
}

export function comparePassword(password: string, hash: string) {
  return bcrypt.compareSync(password, hash);
}