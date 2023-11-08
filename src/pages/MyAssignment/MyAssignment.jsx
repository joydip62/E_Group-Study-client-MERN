import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyAssignment = () => {
    const { user } = useAuth();

        const [myAssignments, setMyAssignments] = useState([]);


        useEffect(() => {
          fetch(
            "https://online-group-study-server-puce.vercel.app/my-assignment"
          )
            .then((res) => res.json())
            .then((data) => {
              const userEmail = user?.email;
              console.log(userEmail);
              const filteredData = data.filter(
                (item) => item.submittedUser === userEmail
              );
              setMyAssignments(filteredData);
            });
        }, [user]);
    
    
    return (
      <div>
        <h2 className="text-5xl font-extrabold text-center mt-10">
          You have Submitted Assignment
        </h2>
        <div className="overflow-x-auto mt-10">
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Mark</th>
                <th>Obtain marks</th>
                <th>Feedback</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {myAssignments.map((myAssignment) => (
                <tr key={myAssignment._id} className="hover">
                  <td>{myAssignment?.title}</td>
                  <td>{myAssignment?.marks}</td>
                  <td>{myAssignment?.obtainMarks}</td>
                  <td>{myAssignment?.feedback}</td>
                  <td>
                    <div className="badge badge-accent">
                      {myAssignment?.status}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyAssignment;