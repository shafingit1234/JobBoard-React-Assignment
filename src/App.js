import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/header/Header";
import JobCard from "./components/jobcard/JobCard";
import JobList from "./components/joblist/JobList";
function App() {
  const idx = useSelector((state) => state.jobReducer.idx);
  const ids = useSelector((state) => state.boardReducer.ids);
  const check = () => {
    if (idx < ids.length) {
      <JobList />;
    }
  };
  return (
    <div className="App">
      <Header></Header>
      <JobCard></JobCard>
    </div>
  );
}

export default App;
