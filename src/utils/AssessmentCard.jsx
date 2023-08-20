import { icons } from "../assets/iconIndex";

const AssessmentCard = ({setIsOpenModal,assessmentItem}) => {
  return (
    <div className="w-full sm:w-[360px] h-52 bg-[#F6F8FA] text-[#1C4980] rounded-lg border-2 p-4 flex flex-col gap-2">
      <div className="flex w-full justify-between">
        <img src={icons.job} alt="job" />
        <img src={icons.dot} alt="" />
      </div>
      <div className="text-xl font-semibold">{assessmentItem.assessmentName}</div>
      <div className="w-full flex gap-4 text-sm">
        <p className="border-r-2 pr-2">Job</p>
        <p className="flex items-center">
          <span>
            <img src={icons.calender} alt="" />
          </span>
          <p className="ml-2  text-gray-400">{assessmentItem.date}</p>
        </p>
      </div>
      <div className="flex mt-4 justify-between items-center">
        <div className="flex gap-2">
          <div className="text-sm">
            <p>{assessmentItem.duration}</p>
            <p>Duration</p>
          </div>
          <div className="text-sm">
          <p>0{assessmentItem.questions}</p>
            <p>Questions</p>
          </div>
        </div>
        <div>
          <button className="border-2 px-3  rounded-xl text-[#1C4980] border-[#d1d5da]">Share</button>
        </div>
      </div>
    </div>
  );
};

export default AssessmentCard;
