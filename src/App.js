import Dashboard from "./components/Dashboard";
import { AnimatePresence } from "framer-motion";
function App() {
  return (
    <AnimatePresence mode="wait" >
      <Dashboard/>
    </AnimatePresence>
  );
}

export default App;
