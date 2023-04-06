import { Show, type Component } from "solid-js";
import { createServerData$ } from "solid-start/server";
import { authOpts } from "../routes/api/auth/[...solidauth]";
import { signIn, signOut } from "@solid-auth/next/client";
import { getSession } from "@solid-auth/next";

interface IChessProps {}

const Chess: Component<IChessProps> = () => {
  const session = useSession();
  return (
        <Show
          when={session()?.user}
          keyed
          fallback={
            <>
                Hello
            </>
          }
        >
          {(us) => (
            <div>
                 Hello {us.name}
            </div>
          )}
        </Show>
  );
};

export default Chess;

export const useSession = () => {
  return createServerData$(
    async (_, { request }) => {
      return await getSession(request, authOpts);
    },
    { key: () => ["auth_user"] }
  );
};
