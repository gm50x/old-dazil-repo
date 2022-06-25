import { Exclude, Expose } from 'class-transformer';
import { randomBytes, randomUUID } from 'crypto';

export class User {
  id: string;
  firstName: string;
  lastName: string;

  @Exclude()
  password: string;

  _foo: string;

  @Expose()
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  constructor(partial: Partial<User>) {
    Object.assign(this, partial, {
      id: randomUUID(),
      password: randomBytes(4).toString('hex'),
      _foo: 'bar',
    });
  }
}
