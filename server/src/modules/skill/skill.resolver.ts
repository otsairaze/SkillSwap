import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SkillService } from '@modules/skill/skill.service';
import { Skill } from '@modules/skill/entities/skill.entity';
import { CreateSkillInput } from '@modules/skill/dto/create-skill-input';

@Resolver(() => Skill)
export class SkillResolver {
  constructor(private readonly skillService: SkillService) {}

  @Query(() => [Skill])
  async getAllSkills() {
    return this.skillService.getAllSkills();
  }

  @Query(() => [Skill])
  async getSkillByUserId(@Args('id', { type: () => Int }) id: number) {
    return this.skillService.getSkillByUserId(id);
  }

  @Query(() => [Skill])
  async getFindSkill(@Args('query') query: string) {
    return this.skillService.getFindSkill(query);
  }

  @Mutation(() => Skill)
  async createSkill(@Args('input') input: CreateSkillInput) {
    return this.skillService.createSkill(input);
  }
}
