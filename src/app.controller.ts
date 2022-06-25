import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './models/user.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('user')
  getUser(): Array<User> {
    // return new User({ firstName: 'John', lastName: 'Doe' });
    return [this.appService.getUser(), this.appService.getUser()];
  }
}
