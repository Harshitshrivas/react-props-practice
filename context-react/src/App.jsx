import Child1 from "./Components/Child1";
import { createContext } from "react";

const userContext = createContext();
const App = () => {
  const name = "Harshit Shrivas";
  let age = 22;
  let city = "Jabalpur";
  let study = "BGIEM";
  let concept = "USECONTEXT";

  return (
    // Providing the context value to child3  components directly 
    <userContext.Provider value={{ name, age, city, study, concept }}>
      <div className="child">
        <Child1 />
      </div>
    </userContext.Provider>
  );
};

export default App;
export { userContext };
