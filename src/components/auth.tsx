import { Show, type Component } from "solid-js";
import { createServerData$ } from "solid-start/server";
import { authOpts } from "../routes/api/auth/[...solidauth]";
import { signIn, signOut } from "@solid-auth/next/client";
import { getSession } from "@solid-auth/next";

interface INavBarProps {}

const NavBar: Component<INavBarProps> = () => {
  const session = useSession();
  return (
        <Show
          when={session()?.user}
          keyed
          fallback={
            <>
              <button
                class="font-normal underline"
                onClick={() => signIn("github")}
              >
                login
              </button>
            </>
          }
        >
          {(us) => (
            <div class="flex items-end gap-2 font-normal">
                <Show when={us.image} keyed>
                  {(im) => <img src={im} class="w-5 h-5" />}
                </Show>
                <div class="bg-yellow-400 dark:bg-yellow-800 px-2">
                  {us.name.toString().substring(0,5)}
                </div>
              <button
                onClick={() => signOut()}
                class="underline"
              >
                logout
              </button>
            </div>
          )}
        </Show>
  );
};

export default NavBar;

export const useSession = () => {
  return createServerData$(
    async (_, { request }) => {
      return await getSession(request, authOpts);
    },
    { key: () => ["auth_user"] }
  );
};
