'use client';

import clsx from 'clsx';

import { BackArrow } from '@/components/svgs';
import { Question } from '@/types';

import styles from './Header.module.css';

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
  showBackIcon = true,
}: HeaderProps) => (
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
