import { A, Outlet } from 'solid-start';
import { Projects } from '../components/projects';

export default function App() {
  return (
    <section class="flex flex-col" style="height: 100vh; justify-content: space-between;">
      <nav class="px-2">
        <div class="flex" style="align-items: flex-end; justify-content: space-between;">
          <div>
            <A
              href="/home"
              activeClass="bg-yellow-200"
              inactiveClass="bg-white"
            ><strong>tt5</strong></A>
          </div>
          <div style="flex-grow: 1; height: 2rem;">&nbsp;</div>
          <div class="flex" style="gap: 1rem">
            <div><A
              href="/one"
              activeClass="bg-yellow-200"
              inactiveClass="bg-white"
            >one</A></div>
            <div><A
              href="/two"
              activeClass="bg-yellow-200"
              inactiveClass="bg-white"
            >two</A></div>
            <div style="text-decoration: line-through;">three</div>
          </div>
        </div>
      </nav>
      <main class="px-2" style="flex-grow: 1;">
        <Outlet />
      </main>
      <footer>
        footer
      </footer>
    </section>
  );
}
