import React from "react";
import { useParams } from "react-router-dom";
import NotFound from "../components/NotFound";

const generatePage = (pageName) => {
  const riderComponent = () => require(`../riderPages/${pageName}`).default;

  try {
    return React.createElement(riderComponent());
  } catch (err) {
    return <NotFound />;
  }
};

const RiderPageRender = () => {
  const { riderPage, riderId } = useParams();
  let pageName = "";
  if (riderId) {
    pageName = `${riderPage}/[riderId]`;
  } else {
    pageName = `${riderPage}`;
  }

  return generatePage(pageName);
};

export default RiderPageRender;
