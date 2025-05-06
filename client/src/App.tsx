import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import DefaultLayout from "./layout/DefaultLayout";

function App() {
  return (
    <>
      <DefaultLayout>
        <Routes>
          <Route
            index
            element={
              <>
                <Home />
              </>
            }
          />
        </Routes>
      </DefaultLayout>
    </>
  );
}

export default App;
