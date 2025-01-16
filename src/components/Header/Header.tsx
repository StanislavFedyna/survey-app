'use client';

import clsx from 'clsx';

import { router } from 'next/client';

import { BackArrow } from '@/components/svgs';
import { SCREEN_TYPES } from '@/constansts';

import styles from './Header.module.css';

interface HeaderProps {
  screenType: (typeof SCREEN_TYPES)[keyof typeof SCREEN_TYPES];
  className?: string;
}

export const Header = ({ screenType, className }: HeaderProps) => {
  const handleBackClick = () => {
    router.back();
  };

  return (
    <header className={clsx(styles.header, className)}>
      <BackArrow
        onClick={handleBackClick}
        className={clsx(
          styles.backButton,
          screenType === 'information' ? styles.lightArrow : styles.darkArrow,
        )}
      />
      <div
        className={clsx(
          styles.logo,
          screenType === 'information' ? styles.logoLight : styles.logoDark,
        )}
      />
    </header>
  );
};
