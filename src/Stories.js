import React from "react";
import { useGlobalContext } from "./context";

const Stories = () => {
  const { hits, isLoading, removePost } = useGlobalContext();
  if (isLoading) {
    return (
      <>
        <h1 className="text-center" style={{ marginTop: "100px" }}>
          Loading...
        </h1>
      </>
    );
  }
  return (
    <>
      {hits?.map((post) => {
        const { title, author, objectID, url, num_comments } = post;
        return (
          <div
            className="container d-flex justify-content-center "
            style={{ marginTop: "20px", paddingTop: "25px" }}
            key={objectID}
          >
            <div className="card " style={{ width: "42rem" }}>
              <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>
                  By <span>{author}</span> |{" "}
                  <span style={{ cursor: "pointer" }}>{num_comments}</span>
                </p>
                <div className="card-text d-flex justify-content-between ">
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Read More
                  </a>
                  <a
                    rel="noreferrer"
                    className="btn btn-danger"
                    onClick={() => removePost(objectID)}
                  >
                    Remove
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Stories;
