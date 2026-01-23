import { Field, ObjectType } from '@nestjs/graphql';
import { SkillLevel } from '../../../../prisma/generated/prisma/enums';
import { Skill } from '@modules/skill/entities/skill.entity';

@ObjectType()
export class UserSkill {
  @Field()
  userId: number;

  @Field()
  skillId: number;

  @Field()
  confirmed: boolean;

  @Field(() => SkillLevel)
  level: SkillLevel;

  @Field(() => Skill)
  skill: Skill;
}
