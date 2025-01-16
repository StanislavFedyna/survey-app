'use client';

import Link from 'next/link';

import { Button, Header, Title } from '@/components';
import { Questions } from '@/types';
import { SCREEN_TYPES } from '@/constansts';

import styles from './InfoScreen.module.css';

interface InfoScreenProps {
  title: Questions['title'];
  subtitle: Questions['subtitle'];
}

export const InfoScreen = ({ title, subtitle }: InfoScreenProps) => {
  return (
    <main className={styles.infoScreen}>
      <Header screenType={SCREEN_TYPES.INFORMATION} className={styles.header} />

      <section className={styles.innerContentWrapper}>
        <Title text="So how does it work?" type="light" />

        <p className={styles.bodyContent}>
          We analyze hundreds of data points to create your unique astrological
          blueprint. This is combined with AI to tailor-make your astrological
          insights, based on your answers. We’re going to change your
          relationship with astrology.
        </p>

        <Link href="/next-screen-path">
          <Button variant="secondary">Next</Button>
        </Link>
      </section>
    </main>
  );
};
