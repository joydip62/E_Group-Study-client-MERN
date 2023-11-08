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
     Swal.fire({
       title: "Are you sure to delete this assignment?",
       text: "You won't be able to revert this!",
       icon: "warning",
       showCancelButton: true,
       confirmButtonColor: "#3085d6",
       cancelButtonColor: "#d33",
       confirmButtonText: "Yes, delete it!",
     }).then((result) => {
       if (result.isConfirmed) {
         fetch(`http://localhost:5000/delete/assignment/${_id}`, {
           method: "DELETE",
         })
           .then((res) => res.json())
           .then((data) => {
             if (data.deletedCount > 0) {
               Swal.fire(
                 "Deleted!",
                 "Your Assignment has been deleted.",
                 "success"
               );
               const remaining = updateAssignments.filter(
                 (assignment) => assignment._id !== _id
               );
               setUpdateAssignments(remaining);
               navigate("/all-assignment");
             }
           });
       } else if (result.isDismissed) {
         // User canceled the delete action
         Swal.fire("Cancelled", "Your Assignment is safe.", "error");
       }
     });
   } else {
     Swal.fire({
       title: "Unauthorized",
       text: "You do not have permission to delete this assignment.",
       icon: "error",
     });
   }
 };



  const handleAssignmentSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = assignment.title;
    const marks = assignment.marks;
    const pdfLink = form.pdfLink.value;
    const textNote = form.textNote.value;
    const obtainMarks = "";
    const feedback = "";
      const submittedUser = user.email;
      const status = "Pending";


    const submitAssignment = {
      title,
      marks,
      pdfLink,
      textNote,
      obtainMarks,
      feedback,
      submittedUser,
      status,
    };
    axios
      .post("submit/assignment", submitAssignment)
      // eslint-disable-next-line no-unused-vars
      .then((res) => {
        Swal.fire(
          "Good job!",
          "Your Assignment submitted successfully!",
          "success"
          );
          document.getElementById("my_modal_3").close();

        navigate("/all-assignment");
      })
      .catch(function (error) {
        Swal.fire("Oopsss", error.message, "error");
      });
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
              <button
                className="btn btn-info"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Take Assignment
              </button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button
                      className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                      onClick={() =>
                        document.getElementById("my_modal_3").close()
                      }
                    >
                      ✕
                    </button>
                  </form>
                  <h3 className="font-bold text-lg">
                    Submit Your Assignment document
                  </h3>
                  <form onSubmit={handleAssignmentSubmit}>
                    <label className="label">
                      <span className="label-text">Assignment PDF Link</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="url"
                        placeholder="Enter assignment pdf link"
                        className="input input-bordered w-full"
                        name="pdfLink"
                        required
                      />
                    </label>

                    <label className="label">
                      <span className="label-text">Assignment Text note</span>
                    </label>
                    <label className="input-group">
                      <textarea
                        placeholder="Text note"
                        className="textarea textarea-bordered textarea-lg w-full"
                        name="textNote"
                      ></textarea>
                    </label>
                    <input
                      className="mt-5 btn btn-info btn-block"
                      type="submit"
                      value="Submit Assignment"
                    />
                  </form>
                </div>
              </dialog>

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
