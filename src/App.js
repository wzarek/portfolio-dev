import { Routes, Route, useLocation } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute";
import ProjectRoute from "./routes/ProjectRoute";
import PageNotFound from "./routes/PageNotFound";
import { AnimatePresence } from "framer-motion"


function App() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomeRoute />}/>
          <Route path="/portfolio" element={<HomeRoute />}/>
          <Route path="/projects/:slug" element={<ProjectRoute />}/>
          <Route path="/portfolio/projects/:slug" element={<ProjectRoute />}/>
          <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
