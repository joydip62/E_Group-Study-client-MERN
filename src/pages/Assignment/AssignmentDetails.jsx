import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";
import { useState } from "react";

const AssignmentDetails = () => {
  const assignment = useLoaderData();
    const { user } = useAuth();
    const axios = useAxios();
    const [updateAssignments, setUpdateAssignments] = useState([]);

    const navigate = useNavigate();
    
  const handleDeleteAssignment = (_id, assignmentCreator) => {
    if (user?.email === assignmentCreator) {
      axios
        .delete(`/delete/assignment/${_id}`)
        // eslint-disable-next-line no-unused-vars
        .then((res) => {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true,
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Assignment has been deleted.",
                icon: "success",
              });
              const remaining = updateAssignments.filter(
                (assign) => assign._id !== _id
              );
                setUpdateAssignments(remaining);
                navigate("/all-assignment");
                
            } else if (
              result.dismiss === Swal.DismissReason.cancel
            ) {
              Swal.fire({
                title: "Cancelled",
                text: "Your imaginary file is safe :)",
                icon: "error",
              });
            }
          });
        })
        .catch((error) => {
          // Handle error
          console.error("Error deleting assignment", error);
        });
    } else {
      Swal.fire({
        title: "Unauthorized",
        text: "You do not have permission to delete this assignment.",
        icon: "error",
      });
    }
    };


  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={assignment.image} className="w-1/2 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{assignment.title}</h1>
            <p className="py-6">{assignment.description}</p>
            <div className="card-actions justify-start">
              <div className="badge badge-outline">{assignment.dueDate}</div>
              <div className="badge badge-outline">
                {assignment.difficultyLevel}
              </div>
            </div>

            <p className="my-3 font-bold">Mark : {assignment.marks}</p>
            <p className="my-3 font-bold">
              Assignment Creator : {assignment.assignmentCreator}
            </p>
            <div className="flex justify-start gap-5">
              <button className="btn btn-info">
                Take Assignment
              </button>

              <button
                onClick={() =>
                  handleDeleteAssignment(
                    assignment._id,
                    assignment.assignmentCreator
                  )
                }
                className="btn btn-error"
              >
                Delete Assignment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;