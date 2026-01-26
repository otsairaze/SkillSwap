import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '@shared/prisma/prisma.service';

import { ConfigService } from '@nestjs/config';
import { CreateSkillInput } from '@modules/skill/dto/create-skill-input';

@Injectable()
export class SkillService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  async getAllSkills() {
    await this.prisma.user.findMany();
  }

  async getSkillByUserId(id: number) {
    if (!id) {
      throw new HttpException('User does not exist', HttpStatus.NOT_FOUND);
    }

    await this.prisma.user.findUnique({
      where: { id },
      include: {
        skills: {
          include: { skill: true },
        },
      },
    });
  }

  async getFindSkill(query: string) {
    await this.prisma.skill.findMany({
      where: {
        name: {
          contains: query,
          mode: 'insensitive',
        },
      },
    });
  }

  async createSkill(input: CreateSkillInput) {
    const existingSkill = await this.prisma.skill.findUnique({
      where: { name: input.name },
    });

    if (existingSkill) {
      throw new Error('Skill already exists');
    }

    return this.prisma.skill.create({
      data: {
        name: input.name,
        status: 'PENDING',
      },
    });
  }

  async addSkillToUser() {}
}
