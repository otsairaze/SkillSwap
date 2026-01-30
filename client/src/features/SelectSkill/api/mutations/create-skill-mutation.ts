import { gql } from '@apollo/client';
import { SKILL_FRAGMENT } from '../fragments/skill.fragment';

export const CREATE_SKILL_MUTATION = gql`
  ${SKILL_FRAGMENT}
  mutation CreateSkill($input: CreateSkillInput!) {
    createSkill(input: $input) {
      id
      name
      status
    }
  }
`;
