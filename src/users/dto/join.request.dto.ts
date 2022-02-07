import { PickType } from '@nestjs/swagger';
import { Users } from '../entities/user.entity';

export class JoinRequestDto extends PickType(Users, [
  'account',
  'password',
] as const) {}
