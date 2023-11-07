import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
// import useAuth from "../../hooks/useAuth";
import AssignmentCard from "./AssignmentCard";
// import Swal from "sweetalert2";
// import useAuth from "../../hooks/useAuth";

const Assignment = () => {
    
    const [updateAssignments, setUpdateAssignments] = useState([]);
    
    const axios = useAxios();

      useEffect(() => {
          axios.get("/all/assignment")
              .then((res) => {
          setUpdateAssignments(res.data);
        });
      }, [axios]);
    
    
    
    
    return (
      <div>
        <div>
          <h1 className="text-5xl font-bold text-center">All Assignment</h1>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {updateAssignments.map((assig) => (
              <AssignmentCard
                key={assig._id}
                assignment={assig}
                // handleDeleteAssignment={handleDeleteAssignment}
              />
            ))}
          </div>
        </div>
      </div>
    );
};

export default Assignment;