import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";
export const AssessmentContext = createContext();
const AssessmentProvider = ({ children }) => {
  const [assessment, setAssessment] = useState([
    {
      id: uuid(),
      assessmentName: "Math Assessment",
      date: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
      duration: "20 min",
      questions: 8,
    },

  ]);

  const addAssessment = (assessmentName, duration, question) => {
    setAssessment([
      ...assessment,
      {
        id: uuid(),
        assessmentName: assessmentName || "Default assessment",
        duration: duration || 0,
        date: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
        questions:question,
      },
    ]);
  };

  const assessmentFeatures = {
    addAssessment,
    assessment,
    setAssessment,
  };

  return (
    <AssessmentContext.Provider value={assessmentFeatures}>
      {children}
    </AssessmentContext.Provider>
  );
};

export default AssessmentProvider;
