import { A, Outlet } from 'solid-start';
import { createEffect, createSignal } from 'solid-js';

const initializeTheme = () => {
  let theme;
  if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme") as "light" | "dark";
  }
  return theme;
};

const ThemeToggler = () => {
  const [theme, setTheme] = createSignal<string>(initializeTheme());

  createEffect(() => {
    const root = document.documentElement;
    if (theme() === "light") {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });

  return (
      <button onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}>
            <svg class="h-5 w-6 dark:fill-white" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 180 180" xml:space="preserve">
<path d="M0,90c0,49.626,40.374,90,90,90s90-40.374,90-90S139.626,0,90,0S0,40.374,0,90z M90,20v140c-38.598,0-70-31.402-70-70
	S51.402,20,90,20z"/>
</svg></button>
  );
};


export default function App() {

  return (
    <section class="flex flex-col h-screen">
      <nav class="px-2 pb-1 dark:text-white font-bold">
        <div class="flex items-end">
          <A
            href="/home"
            activeClass="bg-yellow-400 dark:bg-yellow-800"
            inactiveClass="bg-white dark:bg-black"
            class="px-2"
          >tt5</A>
          <div class="grow h-8">&nbsp;</div>
          <div class="flex gap-4">
          <A
            href="/chess"
            activeClass="bg-yellow-400 dark:bg-yellow-800"
            inactiveClass="bg-white dark:bg-black"
            class="px-2"
          >chess</A>
          <a
            href="https://dashboard.tt15551.cc"
            class="px-2"
          >enter</a>
          <ThemeToggler />
          </div>
        </div>
      </nav>
      <main class="px-2 grow">
        <Outlet />
      </main>
      <footer class="px-2">
        <div class="px-2"><strong>tt5</strong></div>
      </footer>
    </section>
  );
}

