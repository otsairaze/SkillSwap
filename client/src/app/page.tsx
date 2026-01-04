import { Navigation } from '@/widgets/Navigation';
import { Header } from '@/widgets/Header';
import { StarsBackground } from '@/shared/lib/particles/particles';

export default function Home() {
  return (
    <>
      <div>
        <StarsBackground />
        <Navigation />
        <Header />
      </div>
    </>
  );
}
