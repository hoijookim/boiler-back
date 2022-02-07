import { CoreEntity } from 'src/common/entities/core.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity } from 'typeorm';
import { IsString, IsEnum, IsNotEmpty } from 'class-validator';

export enum Role {
  Admin = 'Admin',
  CommonUser = 'CommonUser',
}

@Entity()
export class Users extends CoreEntity {
  @IsString()
  @ApiProperty({
    example: 'user',
    description: '아이디',
  })
  @Column('varchar', {
    name: 'account',
    unique: true,
    length: 15,
    nullable: true,
  })
  account: string;

  @IsString()
  @ApiProperty({
    example: 'password123',
    description: '비밀번호',
  })
  @Column('varchar', {
    name: 'password',
    length: 100,
    select: false,
    nullable: true,
  })
  password: string;

  @IsEnum(Role)
  @IsNotEmpty()
  @ApiProperty({
    example: 'Admin | CommonUser',
    description: '권한',
  })
  @Column('enum', { name: 'role', enum: Role, default: Role.CommonUser })
  role: Role;
}
