'use client';

import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadStarsPreset } from '@tsparticles/preset-stars';

export const StarsBackground = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadStarsPreset(engine);
    }).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id='stars-background'
      options={{
        preset: 'stars',
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: '#0E0F16',
        },
      }}
      style={{ pointerEvents: 'none' }}
    />
  );
};
