export type Theme = "light" | "dark";

export function ThemeSwitch({
  theme,
  onChange,
}: {
  theme: Theme;
  onChange: (theme: Theme) => void;
}) {
  return (
    <div className="theme-switch" role="group" aria-label="Color theme / Tema de cores">
      <button type="button" aria-pressed={theme === "light"} onClick={() => onChange("light")}>LIGHT</button>
      <span>/</span>
      <button type="button" aria-pressed={theme === "dark"} onClick={() => onChange("dark")}>DARK</button>
    </div>
  );
}
