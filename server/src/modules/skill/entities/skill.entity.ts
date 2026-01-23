import { Field, ObjectType } from '@nestjs/graphql';
import { SkillStatus } from '../../../../prisma/generated/prisma/enums';

@ObjectType()
export class Skill {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field(() => SkillStatus)
  status: SkillStatus;
}
