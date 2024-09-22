import React, { useState, useEffect } from "react";
import Input from "../Shared/Input";

const Form = ({ onFormDataChange, clearForm }) => {
  const [localFormData, setLocalFormData] = useState({
    postTitle: "",
    postContent: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Debouncing the input change
  useEffect(() => {
    onFormDataChange(localFormData);
  }, [localFormData, onFormDataChange]);

  // Clear local form when parent calls clearForm
  useEffect(() => {
    if (clearForm) {
      setLocalFormData({ postTitle: "", postContent: "" });
    }
  }, [clearForm]);

  return (
    <form className="flex flex-col gap-2 mt-10 items-center justify-center">
      <Input
        className="flex flex-row gap-2 w-full items-center justify-center"
        inputClassName="border border-gray-300 p-2 rounded-md"
        labelClassName="font-semibold text-gray-700"
        name="postTitle"
        id="postTitle"
        label="Post Title"
        type="text"
        value={localFormData.postTitle}
        onChange={handleInputChange}
      />

      <Input
        className="flex flex-col gap-2 w-full"
        textareaClassName="border border-gray-300 p-2 rounded-md h-32"
        labelClassName="font-semibold text-gray-700"
        name="postContent"
        id="postContent"
        label="Post Content"
        type="textarea"
        value={localFormData.postContent}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default Form;
