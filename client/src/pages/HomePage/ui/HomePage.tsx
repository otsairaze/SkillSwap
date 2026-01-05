import { Navigation } from '@/widgets/Navigation';
import { Header } from '@/widgets/Header';
import { StarsBackground } from '@/shared/lib/particles/particles';
import { HowItWorks } from '@/widgets/HowItWorks';

export const HomePage = () => {
  return (
    <>
      <div>
        <StarsBackground />
        <Navigation />
        <Header />
        <HowItWorks />
      </div>
    </>
  );
};
