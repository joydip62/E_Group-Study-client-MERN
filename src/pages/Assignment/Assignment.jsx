import { useEffect, useState } from "react";

// import useAxios from "../../hooks/useAxios";
// import useAuth from "../../hooks/useAuth";
import useAuth from "../../hooks/useAuth";
import AssignmentCard from "./AssignmentCard";
// import { useQueries } from "@tanstack/react-query";
// import Swal from "sweetalert2";
// import useAuth from "../../hooks/useAuth";


const Assignment = () => {
  const { loading } = useAuth();

  const [updateAssignments, setUpdateAssignments] = useState([]);
  const [filterDifficulty, setFilterDifficulty] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // const axios = useAxios();

  // useEffect(() => {
  //   axios.get("all/assignment").then((res) => {
  //     setUpdateAssignments(res.data);
  //   });
  // }, [axios]);

  useEffect(() => {
    fetch("https://online-group-study-server-puce.vercel.app/all/assignment")
      .then((res) => res.json())
      .then((data) => {
        setUpdateAssignments(data);
      });
  }, []);


  const filterAssignments = () => {
    return updateAssignments.filter(
      (assignment) =>
        !filterDifficulty || assignment.difficultyLevel === filterDifficulty
    );
  };

    const itemsPerPage = 6;
    const totalPages = Math.ceil(filterAssignments().length / itemsPerPage);
    const filteredAssignments = filterAssignments();
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentAssignments = filteredAssignments.slice(
      indexOfFirstItem,
      indexOfLastItem
    );

    const renderPagination = () => {
      const pages = [];
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            className={`join-item btn ${currentPage === i ? "btn-active" : ""}`}
            onClick={() => setCurrentPage(i)}
          >
            {i}
          </button>
        );
      }
      return pages;
    };

  // const getAssignment = async () => {
  //   const res = await axios.get("/all/assignment");
  //   return res;
  // };

  // const {
  //   data: assignment,
  //   isLoading,
  //   isError,
  //   error,
  // } = useQueries({
  //   queryKey: ["assignment"],
  //   queryFn: getAssignment,
  // });

  if (loading) {
    return (
      <span className="loading loading-infinity w-1/4 block mx-auto"></span>
    );
  } else {
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

          <div
            className="mt-10 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            data-aos="fade-up"
          >
            {currentAssignments.map((assignment) => (
              <AssignmentCard key={assignment._id} assignment={assignment} />
            ))}
          </div>

          <div className="join flex justify-center">{renderPagination()}</div>
        </div>
      </div>
    );
  }
};

export default Assignment;
