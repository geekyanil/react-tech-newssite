import React from "react";
import { useGlobalContext } from "./context";

const Search = () => {
  const { query, searchPost } = useGlobalContext();
  return (
    <>
      <div className="container text-center">
        <h1 style={{ marginTop: "10px", padding: "10px" }}>
          Welcome To The Tech Site
        </h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              style={{
                marginTop: "10px",
                padding: "10px 30px",
                borderRadius: "10px",
              }}
              type="text"
              placeholder="Search Here"
              value={query}
              onChange={(e) => {
                searchPost(e.target.value);
              }}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Search;
