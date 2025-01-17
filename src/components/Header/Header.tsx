'use client';

import clsx from 'clsx';

import { BackArrow } from '@/components/svgs';

import styles from './Header.module.css';
import { Question } from '@/types';

interface HeaderProps {
  screenType: Question['screenType'];
  className?: string;
  showBackIcon?: boolean;
  onBack: () => void;
}

export const Header = ({
  screenType,
  className,
  onBack,
  showBackIcon,
}: HeaderProps) => {
  console.log(showBackIcon);

  return (
    <header className={clsx(styles.header, className)}>
      {showBackIcon && (
        <BackArrow
          onClick={onBack}
          className={clsx(
            styles.backButton,
            screenType === 'information' ? styles.lightArrow : styles.darkArrow,
          )}
        />
      )}
      <div
        className={clsx(
          styles.logo,
          screenType === 'information' ? styles.logoLight : styles.logoDark,
        )}
      />
    </header>
  );
};
