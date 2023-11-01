import React from "react";
import { useState, useEffect } from "react";
import "./JobCard.css";
import JobList from "../joblist/JobList";
import { useDispatch, useSelector } from "react-redux";
import { fetchListId } from "../../redux/slices/boardSlice";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import Footer from "../footer/Footer";
const JobCard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchListId());
  }, []);
  const ids = useSelector((state) => state.boardReducer.ids);
  const status = useSelector((state) => state.boardReducer.status);

  if (status === "loading") {
    const antIcon = (
      <LoadingOutlined
        style={{ fontSize: 24, position: "absolute", top: "40%", left: "50%" }}
        spin
      />
    );
    return <Spin indicator={antIcon} />;
  }
  return (
    <div className="box">
      <JobList />
    </div>
  );
};

export default JobCard;
