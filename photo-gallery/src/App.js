import { useSelector } from "react-redux";
import DarkModeToggle from "./components/DarkModeToggle";
import ImageGrid from "./components/ImageGrid";
import Pagination from "./components/Pagination";

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <div className={`py-2 min-h-screen ${darkMode ? "bg-black" : "bg-white"}`}>
      <h1 className={`text-4xl font-bold text-center font-mono ${darkMode ? "text-white" : "text-black"}`}>Photo Gallery</h1>
      <DarkModeToggle />
      <ImageGrid />
      <Pagination />
    </div>
  );
}

export default App;
