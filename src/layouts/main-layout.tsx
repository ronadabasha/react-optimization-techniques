import { ReactNode } from "react";
import { pages } from "../data";

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <header>
        <nav>
          <ul className="bg-black">
            {pages.map((page) => {
              return (
                <li
                  key={page.name}
                  className="text-white inline-block px-4 py-2"
                >
                  <a href={page.link}>{page.name}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <main className="bg-gray-100 min-h-screen p-8 ">{children}</main>
    </div>
  );
};

export default MainLayout;
