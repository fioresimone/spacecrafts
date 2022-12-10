import { BrowserRouter, Route, Routes } from "react-router-dom";
import Topbar from "./Components/Topbar/Topbar";
import Spacecrafts from "./Components/Spacecrafts/Spacecrafts";
import Main from "./Components/Main/Main";
import "./App.css";

function App() {
  console.log(process.env.PUBLIC_URL);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="h-screen w-screen relative ">
        <Topbar />

        <Routes>
          <Route index element={<Main />} />
          <Route path="/m/:modelName" element={<Spacecrafts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
