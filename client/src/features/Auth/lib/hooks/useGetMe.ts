'use client';

import { useQuery } from '@apollo/client/react';
import { GET_ME } from '../../api/queries/me.query';
import type { MeQueryVariables, MeResponse } from '../../api/types/me-response.types';

export const useGetMe = () => {
  const { data, loading, error, refetch } = useQuery<MeResponse, MeQueryVariables>(GET_ME);

  return {
    user: data?.me,
    loading,
    error,
    refetch,
  };
};
