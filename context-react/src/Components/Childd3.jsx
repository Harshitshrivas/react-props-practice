import { useContext } from "react";
import { userContext } from "../App";
const Childd3 = () => {
  const { name, age, study, city, concept } = useContext(userContext);
  return (
    <div>
      <h1>My name is {name}</h1>
      <h2>I am {age} years old</h2>
      <h2>I live in {city}</h2>
      <h2>I study in {study}</h2>
      <h2>I see concept of {concept}</h2>
    </div>
  );
};

export default Childd3;
