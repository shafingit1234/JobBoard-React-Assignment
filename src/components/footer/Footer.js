import React from "react";
import { useSelector } from "react-redux";
import JobList from "../joblist/JobList";
const Footer = () => {
  const idx = useSelector((state) => state.jobReducer.idx);
  const ids = useSelector((state) => state.boardReducer.ids);

  return <div></div>;
};

export default Footer;
