import { AiOutlineClose } from "react-icons/ai";
import Input from "@mui/joy/Input";
import { Button } from "@mui/joy";
import { AssessmentContext } from "../context/AssesssmentContext";
import { useContext, useState } from "react";
const InputModel = ({ setIsOpenModal }) => {
  const { addAssessment } = useContext(AssessmentContext);
  const [assessmentName, setAssessmentName] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [question, setQuestion] = useState("");
  console.log(question);

  return (
    <div className="p-3 md:p-10 opacity-110 w-7/12 flex flex-col justify-around h-auto gap-3 md:gap-7 bg-white rounded-xl">
      <div className="flex justify-between items-center">
        <p className="text-lg md:text-3xl font-medium">Create Assessment</p>
        <AiOutlineClose
          size={20}
          className="hover:cursor-pointer"
          onClick={() => setIsOpenModal(false)}
        />
      </div>
      <hr />
      <div>
        <label className="text-base md:text-xl " htmlFor="name of assessment">
          Name of Assessment
        </label>
        <Input
          placeholder="Name of Assessment"
          value={assessmentName}
          onChange={(e) => setAssessmentName(e.target.value)}
        />
      </div>
      <div>
        <label className="text-base md:text-xl " htmlFor="description">
          Description
        </label>
        <Input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label className="text-base md:text-xl " htmlFor="question">
          No of questions
        </label>
        <Input
          placeholder="No of questions"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>
      <div>
        <label className="text-base md:text-xl " htmlFor="description">
          Duration of Test - In min
        </label>
        <Input
          type="number"
          placeholder="Description"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </div>
      <div className="flex gap-3">
        <Button
          size="md"
          color="primary"
          onClick={() => {
            addAssessment(assessmentName, duration, question);
            setIsOpenModal(false)
          }}
        >
          Save
        </Button>
        <Button size="md" color="danger" onClick={() => setIsOpenModal(false)}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default InputModel;
