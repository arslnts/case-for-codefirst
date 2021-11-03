import HomaPage from "./pages/HomePage";
import GamesProvider from "./store/GameProvider";

function App() {
  return (
    <GamesProvider>
      <HomaPage />
    </GamesProvider>
  );
}

export default App;
