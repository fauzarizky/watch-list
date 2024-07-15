"use client";

import { Auth } from "@supabase/auth-ui-react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export default function AuthForm() {
  const supabase = createClientComponentClient();

  return (
    <Auth
      supabaseClient={supabase}
      view="magic_link"
      showLinks={false}
      providers={[]}
      redirectTo={`${process.env.BASE_URL}/auth/callback`}
      appearance={{
        theme: ThemeSupa,
        className: {
          button: "bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded",
        },
      }}
      localization={{
        variables: {
          magic_link: {
            link_text: "Sign in with link",
            confirmation_text: "Check your email for the Sign in link",
          },
        },
      }}
    />
  );
}
