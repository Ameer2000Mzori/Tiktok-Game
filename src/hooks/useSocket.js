import { useEffect, useState } from "react";
import io from "socket.io-client";

const SOCKET_SERVER_URL = "http://localhost:3000"; // Adjust if needed

const useSocket = () => {
  const [socket, setSocket] = useState(null);
  // const [messages, setMessages] = useState([]);
  const [gift, setGift] = useState([]);

  useEffect(() => {
    const socketInstance = io(SOCKET_SERVER_URL);

    socketInstance.on("connect", () => {
      console.log("Connected to server");
    });

    // socketInstance.on("chat", (data) => {
    //   setMessages((prevMessages) => [...prevMessages, data]);
    // });

    socketInstance.on("gift", (data) => {
      setGift([data]);
    });

    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  // return { messages, gifts };
  return { gift };
};

export default useSocket;
