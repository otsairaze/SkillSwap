import { memo } from 'react';
import Image from 'next/image';
import Circle from '../../../../public/img/header/circle.png';
import styles from './Header.module.css';

export const Header = memo(() => {
  return (
    <section>
      <div className={styles.wrapper}>
        <Image
          src={Circle}
          alt='Описание'
          width={2700}
          height={2700}
          priority={true}
          className={styles.secondCircle}
        />
        <div className={styles.inner}>
          <p className={styles.title}>SkillSwap</p>
          <div className={'flex flex-col gap-3'}>
            <p className={styles.subtitle}>
              SkillSwap is an innovative skill-exchange platform built for people who value{' '}
              <span className={styles.accent}>
                mutual learning, real connections, and hands-on experience—no money involved
              </span>
            </p>
            <a className={styles.linkBtn}>[ COME JOIN US ]</a>
          </div>
        </div>
        <div className={styles.inner}>
          <p className={styles.secondSubtitle}>
            Crafted with a clean, human-centered approach, SkillSwap offers intuitive, accessible,
            and highly flexible matching tools to simplify skill exchange and foster meaningful
            connections.
          </p>
          <p className={styles.secondTitle}>Platform1.0</p>
        </div>
      </div>
    </section>
  );
});
