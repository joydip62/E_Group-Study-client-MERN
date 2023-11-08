import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
// import useAuth from "../../hooks/useAuth";
import AssignmentCard from "./AssignmentCard";
// import Swal from "sweetalert2";
// import useAuth from "../../hooks/useAuth";

const Assignment = () => {
  const [updateAssignments, setUpdateAssignments] = useState([]);
  const [filterDifficulty, setFilterDifficulty] = useState("");
  
  const axios = useAxios();

  useEffect(() => {
    axios.get("/all/assignment").then((res) => {
      setUpdateAssignments(res.data);
    });
  }, [axios]);

  const filterAssignments = () => {
    return updateAssignments.filter(
      (assignment) =>
        !filterDifficulty || assignment.difficultyLevel === filterDifficulty
    );
  };

  return (
    <div>
      <div>
        <h1 className="text-5xl font-bold text-center">All Assignment</h1>
        <div className="mt-5 text-center">
          <label htmlFor="difficultyFilter" className="font-bold mr-2">
            Filter by Difficulty:
          </label>
          <select
            id="difficultyFilter"
            value={filterDifficulty}
            onChange={(e) => setFilterDifficulty(e.target.value)}
          >
            <option value="">All</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filterAssignments().map((assignment) => (
            <AssignmentCard key={assignment._id} assignment={assignment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Assignment;
