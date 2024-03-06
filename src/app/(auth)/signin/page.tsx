import { signIn, signOut } from "next-auth/react";
import { Metadata } from "next";
import Link from "next/link";
import { Icons } from "@/src/components/icons";
import { UserAuthForm } from "@/src/components/user/user-auth-form";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to your account",
};

export default function Signin() {
  return (
    <main className="container">
      <LoginButton />
      <LogoutButton />
    </main>
  );
}

// ログインボタン
export const LoginButton = () => {
  return (
    <button style={{ marginRight: 10 }} onClick={() => signIn()}>
      サインインはこちら
    </button>
  );
};

// ログアウトボタン
export const LogoutButton = () => {
  return (
    <button style={{ marginRight: 10 }} onClick={() => signOut()}>
      ログアウト
    </button>
  );
};
