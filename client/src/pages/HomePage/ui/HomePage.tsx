'use client';

import { useGetMe } from '@/features/Auth';
import { Navigation } from '@/widgets/Navigation';
import { Header } from '@/widgets/Header';
import { StarsBackground } from '@/shared/lib/particles/particles';
import { HowItWorks } from '@/widgets/HowItWorks';
import { Spinner } from '@/shared/ui/spinner';

export const HomePage = () => {
  const { loading } = useGetMe();

  if (loading) {
    return (
      <div className='flex items-center gap-6 justify-center min-h-screen'>
        <Spinner className='size-8' />
      </div>
    );
  }

  return (
    <div>
      <StarsBackground />
      <Navigation />
      <Header />
      <HowItWorks />
    </div>
  );
};
