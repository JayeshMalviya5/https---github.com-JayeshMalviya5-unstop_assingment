import { useState } from "react";
import { icons } from "../assets/iconIndex";
import AssessmentOverview from "../components/desktop/AssessmentOverview";
import DesktopNavbar from "../components/desktop/DesktopNavbar";
import MyAssessment from "../components/desktop/MyAssessment";
import InputModal from "../modal/InputModel";

const DesktopView = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const closeModal = (e)=>{
    if (e.target.classList.contains('backdrop')) {
      setIsOpenModal(false);
    }
  }
  return (
    <>
      <div className="flex w-full font-medium">
        <div className="hidden md:block">
          <DesktopNavbar />
        </div>
        <div className="w-full bg h-auto bg-white flex-col overflow-y-auto">
          <div className="h-14 flex justify-between items-center border-b-[1px] px-7">
            <div className="flex h-full items-center gap-4 font-medium">
              <div className="border-r-2 pr-5 text-[#1C4980] text-[20px]">
                Assessment
              </div>
              <div className="text-[14px] text-[#0073E6] h-auto">
                My Assessments
              </div>
            </div>
            <div>
              <img src={icons.mobile} alt="mobile" className="hover:cursor-pointer"/>
            </div>
          </div>
          <AssessmentOverview />
          <MyAssessment setIsOpenModal={setIsOpenModal} />
        </div>
      </div>
      {isOpenModal ? (
        <div onClick={closeModal} className="backdrop fixed w-screen h-full top-0 left-0 bg-gray-500  bg-opacity-25 flex justify-center items-center">
          <InputModal setIsOpenModal={setIsOpenModal} onClick={(e)=>e.stopPropogation()}/>
        </div>
      ) : null}
    </>
  );
};

export default DesktopView;
