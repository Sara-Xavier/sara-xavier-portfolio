import { useEffect, useState } from "react";
import Home from "./Home";
import { CaseStudy } from "./components/CaseStudy";
import type { Theme } from "./components/ThemeSwitch";
import { projects } from "./content";

function currentHash() {
  return window.location.hash || "#top";
}

function currentTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export default function App() {
  const [hash, setHash] = useState(currentHash);
  const [theme, setTheme] = useState<Theme>(currentTheme);
  const match = hash.match(/^#\/work\/([a-z0-9-]+)$/);
  const project = match ? projects.find((item) => item.slug === match[1]) : undefined;

  useEffect(() => {
    const updateRoute = () => setHash(currentHash());
    window.addEventListener("hashchange", updateRoute);
    return () => window.removeEventListener("hashchange", updateRoute);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')?.setAttribute(
      "content",
      theme === "dark" ? "#11120f" : "#f4f2ed",
    );
  }, [theme]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const followSystemTheme = (event: MediaQueryListEvent) => {
      if (!window.localStorage.getItem("sx-theme")) {
        setTheme(event.matches ? "dark" : "light");
      }
    };

    media.addEventListener("change", followSystemTheme);
    return () => media.removeEventListener("change", followSystemTheme);
  }, []);

  const changeTheme = (next: Theme) => {
    setTheme(next);
    window.localStorage.setItem("sx-theme", next);
  };

  useEffect(() => {
    if (project) {
      document.title = `${project.name} — Sara Xavier`;
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }

    document.title = "Sara Xavier — Digital Product Designer";
    const sectionId = hash.startsWith("#/") ? "top" : hash.slice(1);
    window.requestAnimationFrame(() => {
      document.getElementById(sectionId || "top")?.scrollIntoView();
    });
  }, [hash, project]);

  return project
    ? <CaseStudy project={project} theme={theme} onThemeChange={changeTheme} />
    : <Home theme={theme} onThemeChange={changeTheme} />;
}
