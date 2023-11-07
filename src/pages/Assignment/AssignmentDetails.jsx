import { useLoaderData } from "react-router-dom";

const AssignmentDetails = () => {
    const assignment = useLoaderData();
    console.log(assignment);
    
    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={assignment.image}
              className="w-1/2 rounded-lg shadow-2xl"
            />
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
            </div>
          </div>
        </div>
      </div>
    );
};

export default AssignmentDetails;