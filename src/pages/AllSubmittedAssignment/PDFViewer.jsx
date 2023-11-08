/* eslint-disable react/prop-types */

import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const PDFViewer = ({ pdfLink }) => {
    // console.log(pdfLink);
    try {
      if (typeof pdfLink === "string") {
        return (
          <div>
            <h1>PDF Viewer</h1>
                <Document file={pdfLink}>
              <Page pageNumber={1} />
            </Document>
          </div>
        );
      } else {
        return <div>Invalid PDF link</div>;
      }
    } catch (error) {
      console.error("Error loading PDF file:", error);
      return <div>Error loading PDF file</div>;
    }
};

export default PDFViewer;