import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto, User } from './models/user.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('users')
  async create(@Body() dto: CreateUserDto): Promise<User> {
    return this.appService.create(dto);
  }

  @Get('users')
  async getMany(): Promise<Array<User>> {
    const users = await this.appService.getMany();
    return users;
  }

  @Get('users/:id')
  async getOne(@Param('id') id: string) {
    return this.appService.getOne();
  }

  @Get('user')
  getUser(): Array<User> {
    // return new User({ firstName: 'John', lastName: 'Doe' });
    return [this.appService.getUser(), this.appService.getUser()];
  }
}
