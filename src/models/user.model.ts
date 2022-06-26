import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { randomBytes } from 'crypto';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  id: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Exclude()
  @Prop()
  password: string;

  @Expose()
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  static fromDocument(document: UserDocument) {
    return new User({
      id: document.id,
      firstName: document.firstName,
      lastName: document.lastName,
      password: document.password,
    });
  }

  constructor(partial: Partial<User>) {
    Object.assign(this, partial, {
      password: partial.password || randomBytes(4).toString('hex'),
    });
  }
}

export const UserSchema = SchemaFactory.createForClass(User);

export class CreateUserDto {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;
}
