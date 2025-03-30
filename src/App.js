import { Header, Footer } from "./components";
import { AllRoutes } from "./routes/AllRoutes";

import './App.css';

import Logo from "./assets/images/logo.png";

function App() {
  return (
    <div className="App">
      <Header Logo={Logo} />

      <AllRoutes />   

      <Footer />
    </div>
  );
}

export default App;