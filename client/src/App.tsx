import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CityProvider } from "./context/CityContext";
import DefaultLayout from "./layout/DefaultLayout";
import FavoriteCitites from "./pages/FavoriteCitites";
import Home from "./pages/Home";
import Map from "./pages/Map";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <CityProvider>
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
      </CityProvider>
    </>
  );
}

export default App;
