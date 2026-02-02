export enum SkillStatus {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export type Skill = {
  id: number;
  name: string;
  status: SkillStatus;
};

export type CreateSkillInput = {
  name: string;
};

export type CreateSkillResponse = {
  createSkill: Skill;
};

export type CreateSkillVariables = {
  input: CreateSkillInput;
};
