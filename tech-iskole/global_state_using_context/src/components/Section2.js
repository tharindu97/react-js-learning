import { useTheme } from "../ThemeContext";

function Section2() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#1e293b" : "white",
        color: theme === "dark" ? "white" : "#1e293b",
      }}
    >
      <h2>Section 2</h2>

      <button onClick={() => toggleTheme()}>Toggle mode</button>
    </div>
  );
}

export default Section2;
