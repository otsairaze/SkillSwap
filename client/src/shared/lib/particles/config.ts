import { MoveDirection, OutMode } from '@tsparticles/engine';
import type { ISourceOptions } from '@tsparticles/engine';

export const starsOptions: ISourceOptions = {
  fullScreen: {
    enable: true,
    zIndex: -1,
  },

  background: {
    color: {
      value: '#0E0F16',
    },
  },

  fpsLimit: 60,

  particles: {
    number: {
      density: {
        enable: true,
      },
      value: 120,
    },

    color: {
      value: '#ffffff',
    },

    links: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.25,
      width: 1,
    },

    move: {
      enable: true,
      speed: 0.15,
      direction: MoveDirection.none,
      outModes: {
        default: OutMode.out,
      },
    },

    opacity: {
      value: { min: 0.3, max: 0.8 },
    },

    size: {
      value: { min: 1, max: 2 },
    },
  },

  detectRetina: true,
};
