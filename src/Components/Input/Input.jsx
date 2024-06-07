import { useState } from "react";

const Input = ({ onClose, onSubmit }) => {
  const [description, setDescription] = useState("");

  const handleInputChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(description);
    setDescription("");
  };

  const handleCancel = () => {
    console.log("Cancel button clicked");
    onClose();
  };

  return (
    <div>
      <textarea
        value={description}
        onChange={handleInputChange}
        placeholder="Enter your description..."
        rows={4}
        cols={25}
        className="rounded-xl p-2"
      />
      <div className="button-container flex justify-center space-x-4">
        <button
          onClick={handleSubmit}
          className="bg-[#a48bef] rounded-lg mt-3 hover:bg-[#9373f2] transition ease-in-out duration-300 text-white font-bold py-2 px-4 "
        >
          Submit
        </button>
        <button
          onClick={handleCancel}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg mt-3"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Input;
