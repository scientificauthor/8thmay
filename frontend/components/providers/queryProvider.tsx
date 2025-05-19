'use client';

import { QueryClientProvider, HydrationBoundary } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { queryClient } from '@/lib/react-query';

export default function QueryProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={{}}>
        {children}
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
