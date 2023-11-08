import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllSubmittedAssignment = () => {
  const [pendingAssignments, setPendingAssignments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-submitted-assignment")
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.filter((item) => item.status === "Pending");
        setPendingAssignments(filteredData);
      });
  }, []);

  return (
    <div>
      <h2 className="text-5xl font-extrabold text-center mt-10">
        All Submitted Pending Assignment
      </h2>
      <div className="overflow-x-auto mt-10">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Mark</th>
              <th>Examinee email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pendingAssignments.map((pendingAssignment) => (
              <tr key={pendingAssignment._id} className="hover">
                <td>{pendingAssignment?.title}</td>
                <td>{pendingAssignment?.marks}</td>
                <td>{pendingAssignment?.submittedUser}</td>
                <td>
                  <Link
                    to={`/give-submitted-assignment-mark/${pendingAssignment._id}`}
                    className="btn btn-primary btn-xs"
                  >
                    Give Mark
                  </Link>
                  
                  <button className="btn btn-info btn-xs ml-3">
                    See Assignment
                  </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSubmittedAssignment;
