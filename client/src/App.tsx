import { Route, Routes } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./layout/DefaultLayout";
import Home from "./pages";
import FavoriteCitites from "./pages/FavoriteCitites";
import Map from "./pages/Map";
import Settings from "./pages/Settings";

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
          <Route
            path="/favoriteCities"
            element={
              <>
                <FavoriteCitites />
              </>
            }
          />
          <Route
            path="/map"
            element={
              <>
                <Map />
              </>
            }
          />
          <Route
            path="/settings"
            element={
              <>
                <Settings />
              </>
            }
          />
        </Routes>
      </DefaultLayout>
    </>
  );
}

export default App;
