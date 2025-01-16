'use client';

import clsx from 'clsx';

import { router } from 'next/client';

import { BackArrow } from '@/components/svgs';

import styles from './Header.module.css';

interface HeaderProps {
  screenType: 'single-select' | 'multi-select' | 'introduction';
}

export const Header = ({ screenType }: HeaderProps) => {
  const handleBackClick = () => {
    router.back();
  };

  return (
    <header className={styles.header}>
      <BackArrow
        onClick={handleBackClick}
        className={clsx(
          styles.backButton,
          screenType === 'introduction' ? styles.lightArrow : styles.darkArrow,
        )}
      />
      <div
        className={clsx(
          styles.logo,
          screenType === 'introduction' ? styles.logoLight : styles.logoDark,
        )}
      />
    </header>
  );
};
