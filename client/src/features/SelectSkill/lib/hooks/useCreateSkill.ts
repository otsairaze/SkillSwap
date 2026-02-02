import { useMutation } from '@apollo/client/react';
import { CREATE_SKILL_MUTATION } from '../../api/mutations/create-skill-mutation';
import type {
  CreateSkillInput,
  CreateSkillResponse,
  CreateSkillVariables,
} from '../../api/types/skill.types';

export const useCreateSkill = () => {
  const [mutate, { error, loading, data }] = useMutation<CreateSkillResponse, CreateSkillVariables>(
    CREATE_SKILL_MUTATION,
  );

  const createSkill = async (input: CreateSkillInput) => {
    return await mutate({
      variables: { input },
    });
  };

  return { createSkill, error, loading, data: data?.createSkill };
};
