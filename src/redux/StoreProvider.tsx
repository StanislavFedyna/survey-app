'use client';

import { ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';

import { AppStore, makeStore } from '@/redux/store';

interface StoreProvider {
  children: ReactNode;
}

export default function StoreProvider({ children }: StoreProvider) {
  const storeRef = useRef<AppStore>(undefined);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
