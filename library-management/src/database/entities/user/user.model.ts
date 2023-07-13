/*external modules*/
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsBoolean, IsString, IsDate } from 'class-validator';

export class UserModel {
  @ApiProperty({ example: '868a6459-a32f-4730-b171-aa07cf15132f' })
  @IsNotEmpty()
  id: string;

  @ApiProperty({ example: 'user@example.com' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'XXX' })
  @IsOptional()
  googleId?: string;

  @ApiProperty({ example: false })
  @IsBoolean()
  verified: boolean;

  @ApiProperty({ example: true })
  @IsBoolean()
  terms: boolean;

  @ApiProperty({
    type: 'array',
    items: { type: 'string' },
    example: ['user1@example.com', 'user2@example.com'],
  })
  @IsString({ each: true })
  receivers: string[];

  @ApiProperty({ example: '2020-12-29T14:13:11.292Z' })
  @IsDate()
  createdAt: Date;

  @ApiProperty({ example: '2020-12-29T14:13:11.292Z' })
  @IsDate()
  updatedAt: Date;
}
