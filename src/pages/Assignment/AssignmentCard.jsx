/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";


const AssignmentCard = ({ assignment }) => {

  const {
    _id,
    title,
    marks,
    difficultyLevel,
    description,
    dueDate,
    image,
    assignmentCreator,
  } = assignment;

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl mb-10">
        <figure>
          <img src={image} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-start">
            <div className="badge badge-outline">{dueDate}</div>
            <div className="badge badge-outline">{difficultyLevel}</div>
          </div>
          <p className="font-bold">Marks : {marks}</p>
          <p className="font-bold">User : {assignmentCreator}</p>

          <div className="flex justify-end gap-5">
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Update Assignment</button>
            </div>

            <div className="card-actions justify-end">
              <NavLink to={`/assignment-details/${_id}`}>
                <button className="btn btn-info">View Assignment</button>
              </NavLink>
            </div>

            {/* <div className="card-actions justify-end">
              <button
                onClick={() => handleDeleteAssignment(_id, assignmentCreator)}
                className="btn btn-error"
              >
                Delete
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;