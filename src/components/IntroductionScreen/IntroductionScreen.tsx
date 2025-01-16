'use client';

import Link from 'next/link';

import { Button, Header, Title } from '@/components';

import styles from './IntroductionScreen.module.css';

interface IntroductionScreenProps {}

export const IntroductionScreen = ({}: IntroductionScreenProps) => {
  return (
    <main className={styles.introductionScreen}>
      <Header screenType="introduction" />

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
