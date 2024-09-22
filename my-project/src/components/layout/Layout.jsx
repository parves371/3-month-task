import React, { useEffect, useState } from "react";
import Form from "../specific/Form";
import Dailog from "../specific/Dailog";

const Layout = () => {
  const [formData, setFormData] = useState({
    postTitle: "",
    postContent: "",
  });

  const [submittedDataList, setSubmittedDataList] = useState([]); // Array to hold all submissions
  const [clearForm, setClearForm] = useState(false);

  const handleFormDataChange = (updatedFormData) => {
    setFormData(updatedFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Append the current form data to the submittedDataList
    setSubmittedDataList((prevDataList) => [
      ...prevDataList,
      { postTitle: formData.postTitle, postContent: formData.postContent },
    ]);

    setFormData({ postTitle: "", postContent: "" }); // clear the form data
    setClearForm(true); // Trigger the form clear in the child component
    setTimeout(() => setClearForm(false), 0); // Reset clearForm after the clear
  };

  // Clear the form by toggling the clear state
  const handleClearForm = () => {
    setFormData({ postTitle: "", postContent: "" }); // clear the form data
    setClearForm(true); // Trigger the form clear in the child component
    setTimeout(() => setClearForm(false), 0); // Reset clearForm after the clear
  };

  return (
    <section className="flex flex-col justify-between">
      <div className="flex flex-row items-center justify-between">
        <div className="w-[48%] bg-gray-100 p-4 rounded-lg shadow-lg">
          <h1 className="text-center mt-4 text-xl font-bold">Post Area</h1>

          <Form onFormDataChange={handleFormDataChange} clearForm={clearForm} />

          <div className="mt-4 flex gap-2">
            <button
              onClick={handleSubmit}
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Submit
            </button>

            <button
              onClick={handleClearForm}
              type="button"
              className="px-4 py-2 bg-red-500 text-white rounded"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Right Panel to display all submitted data */}
        <div className="w-[48%] bg-gray-50 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Preview Data</h2>

          {/* Display the current form data */}

          <div className="mb-4 border-b pb-4">
            <div className="mb-2">
              <h3 className="font-bold text-xl">Post title:</h3>
              <p className="text-lg font-semibold">{formData.postTitle}</p>
            </div>
            <div>
              <h3 className="font-bold text-xl w-full">Post Content:</h3>
              <p className="mt-1 text-gray-700">{formData.postContent}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Display all previous submissions */}
      <div className="flex flex-col gap-2 mt-10 items-center justify-center">
        {" "}
        {submittedDataList.length > 0 ? (
          submittedDataList.map((data, index) => (
            <Dailog key={index} data={data} index={index} />
          ))
        ) : (
          <p>No data submitted yet.</p>
        )}
      </div>
    </section>
  );
};

export default Layout;
