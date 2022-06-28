import { useState } from "react";
import Categories from "./components/Categories/Categories";
import data from './data'

const App = () => {
  const [categories] = useState(data)
  

  return <Categories categories={categories} />;
};

export default App;
