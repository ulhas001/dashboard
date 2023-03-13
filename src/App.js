import Dashboard from "./components/Dashboard";
import { AnimatePresence } from "framer-motion";
import User from "./components/User"
function App() {
  return (
    <AnimatePresence mode="wait" >
      <Dashboard/>
      {/* <User/> */}
    </AnimatePresence>
  );
}

export default App;
