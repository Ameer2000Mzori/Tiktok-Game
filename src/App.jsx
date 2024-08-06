import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import store from "./store";
import GameCanvas from "./components/GameCanvas";
export const GAMEBOARD_LENGTH = 86;
export const SCROLL_SPEED = 35;

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <GameCanvas />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
