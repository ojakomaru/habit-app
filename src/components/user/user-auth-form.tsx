'use client';

import { signIn } from 'next-auth/react';
import * as React from 'react';
import { Icons } from '../icons';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isGoogleLoading, setIsGoogleLoading] = React.useState<boolean>(false);
  const [isGithubLoading, setIsGithubLoading] = React.useState<boolean>(false);

  return (
    <div {...props}>
      <button
        type="button"
        onClick={() => {
          setIsGoogleLoading(true);
          setIsLoading(true);
          signIn('google');
        }}
        disabled={isGoogleLoading || isLoading}
      >
        {isGoogleLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{' '}
        Continue with Google
      </button>
      <button
        type="button"
        onClick={() => {
          setIsGithubLoading(true);
          setIsLoading(true);
          signIn('github');
        }}
        disabled={isGithubLoading || isLoading}
      >
        {isGithubLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.github className="mr-2 h-4 w-4" />
        )}{' '}
        Continue with Github
      </button>
    </div>
  );
}
