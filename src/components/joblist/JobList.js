import React, { useEffect, useState } from "react";
import "./JobList.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobBoard, setIdx } from "../../redux/slices/jobBoardSlice";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import JobDisplay from "../jobDisplay/JobDisplay";
import Footer from "../footer/Footer";

const JobList = () => {
  const data = [];
  const [job, setJobs] = useState([]);
  const dispatch = useDispatch();
  async function fetchJobBoard(id) {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    );
    const data = await response.json();
    return data;
  }
  const status = useSelector((state) => state.jobReducer.status);
  const idx = useSelector((state) => state.jobReducer.idx);
  useEffect(() => {
    let i = idx;
    // console.log(i);
    for (i = idx; i < 6 + idx && i < ids.length; i++) {
      const id = ids[i];
      fetchJobBoard(id).then((value) => {
        setJobs((job) => [...job, value]);
      });
    }
    dispatch(setIdx(i));
    // console.log(i);
  }, []);
  const ids = useSelector((state) => state.boardReducer.ids);
  function Loader() {
    const antIcon = (
      <LoadingOutlined
        style={{
          fontSize: 24,
          position: "absolute",
          top: "40%",
          left: "50%",
        }}
        spin
      />
    );
    return <Spin indicator={antIcon} />;
  }
  // let visibility = false;

  const [add, setAdd] = useState([]);
  async function loadMore() {
    console.log(idx);
    let i = 0;
    for (i = 0; i < 6 && i + idx < ids.length; i++) {
      let temp_id = ids[i + idx];
      await fetchJobBoard(temp_id).then((value) => {
        setJobs((job) => [...job, value]);
      });
    }
    dispatch(setIdx(i + idx));
  }

  function LoadJobs() {
    return job.length === idx ? (
      job.map((curr, index) => (
        <JobDisplay
          key={index}
          title={curr.title}
          by={curr.by}
          time={curr.time}
        ></JobDisplay>
      ))
    ) : (
      <Loader />
    );
  }

  return (
    <div className="job-box">
      <LoadJobs></LoadJobs>
      <button className="bttn" onClick={loadMore}>
        Load More!
      </button>
    </div>
  );
};

export default JobList;
