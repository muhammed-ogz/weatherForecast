import { Route, Routes } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./layout/DefaultLayout";
import Home from "./pages";

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
