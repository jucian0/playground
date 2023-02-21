import Link from "next/link";
import { useTheme } from "nextra-theme-docs";

export default function HeroContent() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <div className="isolate my-20">
      <main>
        <div className="relative px-3 lg:px-2">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight  sm:text-6xl">
                Playground for ReactJS components
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Playground helps you to create awesome components
                documentations!
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/quick-start"
                  className="py-3.5 px-8 mr-2 mb-2 text-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Quick start
                </Link>
                <a
                  href="https://github.com/jucian0/playground"
                  className="py-3.5 px-8 mr-2 mb-2 text-md font-medium text-gray-900 focus:outline-none  rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Github <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="px-6 pt-6 lg:px-8 justify-center flex relative">
        <img
          className="rounded-2xl"
          src={`./images/${isDark ? "dark" : "light"}.png`}
        />
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-800 lg:my-8" />
    </div>
  );
}
