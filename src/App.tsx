import { BrowserRouter } from "react-router-dom";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { AnimatedRoutes } from "./pages/Route";
function App() {
  return (
    <>
      <MantineProvider>
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </MantineProvider>
    </>
  );
}

export default App;
