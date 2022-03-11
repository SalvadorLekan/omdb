import RouteWrapper from "components/routewrapper";
import Home from "pages";
import ResultDetails from "pages/result/{id}";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RouteWrapper />}>
          <Route index element={<Home />} />
          <Route path="/result/:i" element={<ResultDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
