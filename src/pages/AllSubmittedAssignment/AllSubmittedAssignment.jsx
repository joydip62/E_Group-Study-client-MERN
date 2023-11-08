import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PDFViewer from "./PDFViewer";

const AllSubmittedAssignment = () => {
  const [pendingAssignments, setPendingAssignments] = useState([]);

    const [showPDFViewer, setShowPDFViewer] = useState(false);
  const [selectedPDFLink, setSelectedPDFLink] = useState("");
  
    const openPDFViewer = (pdfLink) => {
      setSelectedPDFLink(pdfLink);
      setShowPDFViewer(true);
  };
  
  useEffect(() => {
    fetch(
      "https://online-group-study-server-puce.vercel.app/all-submitted-assignment"
    )
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.filter((item) => item.status === "Pending");
        setPendingAssignments(filteredData);
      });
  }, []);

  return (
    <div>
      <h2 className="text-5xl font-extrabold text-center mt-10">
        All Submitted Pending Assignment
      </h2>
      <div className="overflow-x-auto mt-10">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Mark</th>
              <th>Examinee email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pendingAssignments.map((pendingAssignment) => (
              <tr key={pendingAssignment._id} className="hover">
                <td>{pendingAssignment?.title}</td>
                <td>{pendingAssignment?.marks}</td>
                <td>{pendingAssignment?.submittedUser}</td>
                <td>
                  <Link
                    to={`/give-submitted-assignment-mark/${pendingAssignment._id}`}
                    className="btn btn-primary btn-xs"
                  >
                    Give Mark
                  </Link>

                  <button
                    className="btn btn-info btn-xs ml-3"
                    onClick={() => openPDFViewer(pendingAssignment.pdfLink)}
                  >
                    See Assignment
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center m-auto w-full mt-10">
        {showPDFViewer && <PDFViewer pdfLink={selectedPDFLink} />}
      </div>
    </div>
  );
};

export default AllSubmittedAssignment;
