import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../../user/entities/user.entity';

@ObjectType()
export class MeResponse {
  @Field(() => User)
  user: User;
}
