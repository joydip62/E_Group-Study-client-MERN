
const Feature = () => {
    return (
      <div>
        <h1 className="text-5xl font-bold text-center my-10">Our Feature</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/kVZm959/assignment.png"
                alt="Assignment"
                className="h-[300px]"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Assignment Creation</h2>
              <p>
                Users can easily create and share assignments, specifying due
                dates, instructions, and resources.
              </p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/0nTdQrC/helping.png"
                alt="Real-time Collaboration"
                className="h-[300px]"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Real-time Collaboration</h2>
              <p>
                Implement real-time collaborative features, such as live video
                conferencing, chat, or discussion boards, to facilitate group
                study.
              </p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/7C4XDvs/support.png"
                alt="Feedback and Grading"
                className="h-[300px]"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Feedback and Grading</h2>
              <p>
                Provide a system for instructors or peers to provide feedback
                and grades for submitted assignments.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Feature;