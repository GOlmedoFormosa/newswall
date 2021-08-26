import { useEffect } from "react";
import { Navbar } from "./containers/Navbar";
import { Wall as WallPage } from "./pages/Wall";
import { setUserSession, getUser } from "./utils/auth";

if (process.env.REACT_APP_API_MOCKING === "enabled") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

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
