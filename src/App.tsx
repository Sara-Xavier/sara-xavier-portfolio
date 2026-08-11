import { useEffect, useState } from "react";
import Home from "./Home";
import { CaseStudy } from "./components/CaseStudy";
import { projects } from "./content";

function currentHash() {
  return window.location.hash || "#top";
}

export default function App() {
  const [hash, setHash] = useState(currentHash);
  const match = hash.match(/^#\/work\/([a-z0-9-]+)$/);
  const project = match ? projects.find((item) => item.slug === match[1]) : undefined;

  useEffect(() => {
    const updateRoute = () => setHash(currentHash());
    window.addEventListener("hashchange", updateRoute);
    return () => window.removeEventListener("hashchange", updateRoute);
  }, []);

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

  return project ? <CaseStudy project={project} /> : <Home />;
}
