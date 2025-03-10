import Dropzone from "./components/Dropzone/Dropzone";
import Gallery from "./components/Gallery/Gallery";
import useWebSocket from "./hooks/useWebSocket";
import "./styles/global.css";

function App() {
  const progress = useWebSocket();

  return (
    <div className="app-container">
      <h1>Photo Upload App</h1>
      <Dropzone />
      <p>Real-time Progress: {progress}%</p>
      <Gallery />
    </div>
  );
}

export default App;
