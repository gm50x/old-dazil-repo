import { Injectable } from '@nestjs/common';
import { User } from './models/user.model';

@Injectable()
export class AppService {
  getUser(): User {
    return new User({ firstName: 'John', lastName: 'Doe' });
  }

  getHello(): string {
    return 'Hello World!';
  }
}
