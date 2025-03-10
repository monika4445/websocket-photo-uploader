import { useEffect, useState } from "react";

const useWebSocket = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8000/ws/progress/");

    socket.onopen = () => {
      console.log("WebSocket connection established.");
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setProgress(data.progress);
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    socket.onclose = (event) => {
      console.warn("WebSocket closed:", event);
    };

    //return () => socket.close();
  }, []);

  return progress;
};

export default useWebSocket;
