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
            } else if (result.dismiss === Swal.DismissReason.cancel) {
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

  const handleAssignmentSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const pdfLink = form.pdfLink.value;
    const textNote = form.textNote.value;
    const submittedUser = user.email;

    const submitAssignment = {
      pdfLink,
      textNote,
      submittedUser,
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
