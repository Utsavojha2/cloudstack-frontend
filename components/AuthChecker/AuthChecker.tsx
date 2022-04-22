import React from 'react';
import { useAuth } from 'hooks/query/useAuth';

export default function AuthChecker({
  children,
}: React.PropsWithChildren<Record<string, unknown>>) {
  useAuth();

  return <div>{children}</div>;
}
