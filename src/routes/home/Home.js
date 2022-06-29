import { useState } from "react";
import Categories from "../../components/Categories/Categories";
import data from "../../data";

const Home = () => {
  const [categories] = useState(data);

  return <Categories categories={categories} />;
};

export default Home;
