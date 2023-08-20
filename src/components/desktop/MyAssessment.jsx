import { useContext } from 'react';
import {icons} from '../../assets/iconIndex'
import { AssessmentContext } from '../../context/AssesssmentContext';
import AssessmentCard from "../../utils/AssessmentCard";

const MyAssessment = ({setIsOpenModal}) => {
  
  const { assessment } = useContext(AssessmentContext);
  return (
    <div className="p-5 flex flex-col gap-5">
      <p className="text-[18px] text-[#1C4980]">My Assessments</p>
      <div className="flex flex-wrap justify-start gap-5">
        <div onClick={()=>setIsOpenModal(true)}  className="w-full sm:w-[360px] hover:cursor-pointer h-52 bg-[#F6F8FA] text-[#1C4980] rounded-lg border-dotted border-2 p-7 flex flex-col gap-2 justify-center items-center">
          <img src={icons.add} alt="Add" />
          <p className="text-xl ">New Assessment</p>
          <p className="text-center text-sm">
            From here you can add questions of multiple types like MCQs,
            subjective (text or paragraph)!
          </p>
        </div>
{
  assessment.map((item)=>{
    return  <AssessmentCard setIsOpenModal={setIsOpenModal} assessmentItem={item} key={item.id}/>
  })
}

      </div>
    </div>
  );
};

export default MyAssessment;
