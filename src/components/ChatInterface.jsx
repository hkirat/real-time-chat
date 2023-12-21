import { useState } from "react";
import Message from "./Message.jsx";

const ChatInterface = () => {
  const [formData, setformData] = useState("");

  const [questions, setQuestions] = useState([1, 2]);

  const handleChange = (e) => {
    setformData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuestions((prev) => [...prev, formData]);
  };

  return (
    <div>
      {questions.map(() => {
        return <Message />;
      })}

      <form onSubmit={handleSubmit}>
        <textarea
          name="message"
          className="bg-pink-300"
          id="chatbox"
          value={formData}
          cols="80"
          rows="5"
          onChange={handleChange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ChatInterface;
