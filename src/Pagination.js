import React from "react";
import { useGlobalContext } from "./context";

const Pagination = () => {
  const { page, nbPages, getNextPage, getPrevPage } = useGlobalContext();
  return (
    <>
      <div
        className="conatainer text-center d-flex justify-content-center"
        style={{ marginTop: "10px", paddingTop: "20px" }}
      >
        <button
          className="btn btn-secondary"
          style={{ marginRight: "10px" }}
          onClick={() => getPrevPage()}
        >
          PREV
        </button>
        <p
          style={{
            paddingRight: "6px",
            paddingLeft: "6px",
            fontWeight: "600",
            fontSize: "20px",
          }}
        >
          {page + 1} of {nbPages}
        </p>
        <button
          className="btn btn-secondary"
          style={{ marginLeft: "10px" }}
          onClick={() => getNextPage()}
        >
          NEXT
        </button>
      </div>
    </>
  );
};

export default Pagination;
