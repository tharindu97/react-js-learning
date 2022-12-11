import { useTheme } from "../ThemeContext";

function Section4() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#1e293b" : "white",
        color: theme === "dark" ? "white" : "#1e293b",
      }}
    >
      <h2>Section 4</h2>
      <button
        onClick={() => {
          toggleTheme();
        }}
      >
        Section 4 toggle theme button
      </button>
    </div>
  );
}

export default Section4;
