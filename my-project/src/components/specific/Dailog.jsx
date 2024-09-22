import React from "react";

const Dailog = ({ data, index }) => {
  return (
    <div
      className="mb-4 border-b pb-4 flex flex-col gap-2  justify-center"
    >
      <div>
        <h3 className="font-bold">Submission {index + 1} - Post Title:</h3>
        <p>{data.postTitle}</p>
      </div>
      <div>
        <h3 className="font-bold">Post Content:</h3>
        <p>{data.postContent}</p>
      </div>
    </div>
  );
};

export default Dailog;
