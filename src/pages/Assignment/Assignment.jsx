import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
// import useAuth from "../../hooks/useAuth";
import AssignmentCard from "./AssignmentCard";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const Assignment = () => {
      const { user } = useAuth();
    const [updateAssignments, setUpdateAssignments] = useState([]);
    
    const axios = useAxios();

      useEffect(() => {
          axios.get("/all/assignment")
              .then((res) => {
          setUpdateAssignments(res.data);
        });
      }, [axios]);
    
    
    
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
                } else if (
                  /* Read more about handling dismissals below */
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
        <div>
          <h1 className="text-5xl font-bold text-center">All Assignment</h1>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {updateAssignments.map((assignment) => (
              <AssignmentCard
                key={assignment._id}
                assignment={assignment}
                handleDeleteAssignment={handleDeleteAssignment}
              />
            ))}
          </div>
        </div>
      </div>
    );
};

export default Assignment;