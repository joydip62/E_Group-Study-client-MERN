import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const GiveMark = () => {
    const submittedAssignment = useLoaderData();
    const { _id, marks, pdfLink, textNote} = submittedAssignment;
    
    const navigate = useNavigate();
    
    const handleFeedback = e => {
        e.preventDefault();
        const form = e.target;
        const obtainMarks = form.obtainMarks.value;
        const feedback = form.feedback.value;
        const status = "Completed";

        const updateSubmittedAssignment = {
          obtainMarks,
          feedback,
          status,
        };

        fetch(`http://localhost:5000/update-assignment-mark/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updateSubmittedAssignment),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              Swal.fire(
                "Good job!",
                "Assignment feedback submitted successfully!",
                "success"
              );
              navigate("/all-submitted-assignment");
            } else {
              return Swal.fire("Oopsss", "Form is not valid", "error");
            }
          });
    }

      

    return (
      <div className="w-3/4 m-auto text-center lg:p-24">
        <h2 className="text-3xl mb-8 font-bold">Give Mark</h2>
        <form onSubmit={handleFeedback}>
          <div className="md:flex space-x-5 mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Link</span>
              </label>
              <label className="input-group">
                <input
                  placeholder="enter product name"
                  className="input input-bordered w-full"
                  name="name"
                  defaultValue={pdfLink}
                  readOnly
                />
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Text Note</span>
              </label>
              <label className="input-group">
                <input
                  placeholder="enter product name"
                  className="input input-bordered w-full"
                  name="name"
                  defaultValue={textNote}
                  readOnly
                />
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Assignment mark</span>
              </label>
              <label className="input-group">
                <input
                  placeholder="enter product name"
                  className="input input-bordered w-full"
                  name="name"
                  defaultValue={marks}
                  readOnly
                />
              </label>
            </div>
          </div>

          <div className="md:flex space-x-5 mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Give Mark</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  placeholder="enter mark"
                  className="input input-bordered w-full"
                  name="obtainMarks"
                  required
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <textarea
                  placeholder="Feedback"
                  className="textarea textarea-bordered textarea-lg w-full"
                  name="feedback"
                ></textarea>
              </label>
            </div>
          </div>

          <input
            className="btn btn-block"
            type="submit"
            value="Submit mark and feedback"
          />
        </form>
      </div>
    );
};

export default GiveMark;