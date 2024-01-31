import React from "react";
import { useParams } from "react-router-dom";
import NotFound from "../components/NotFound";

const generatePage = (pageName) => {
  const component = () => require(`../customerPages/${pageName}`).default;

  try {
    return React.createElement(component());
  } catch (err) {
    return <NotFound />;
  }
};

const PageRender = () => {
  const { customerPage, id } = useParams();
  let pageName = "";
  if (id) {
    pageName = `${customerPage}/[customerId]`;
  } else {
    pageName = `${customerPage}`;
  }

  return generatePage(pageName);
};

export default PageRender;
