import { useEffect } from "react";
import { Navbar } from "./containers/Navbar";
import { Wall as WallPage } from "./pages/Wall";
import { setUserSession, getUser } from "./utils/auth";

function App() {
  useEffect(() => {
    const user = getUser();
    if (!user) {
      setUserSession({
        id: 1,
        name: "Gustavo Olmedo",
      });
    }
  }, []);
  return (
    <div className="App">
      <Navbar />
      <WallPage />
    </div>
  );
}

export default App;
