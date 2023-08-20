
import { icons } from "../../assets/iconIndex.jsx";
const AssessmentOverview = () => {
  return (
    <>
     <div className="p-5">
          <div className="flex flex-col gap-4 text-[#1C4980]">
            <p className="text-[18px] text-[#1C4980] ">Assingment overview</p>
            <div className="border-[1px] rounded-lg flex h-32">
              <div className="border-r-[1px] py-4 px-5 w-2/12">
                <p>Total assessments</p>
                <div className="flex items-center gap-3 mt-4">
                  <img src={icons.totalAssessment} alt="total assessments" />
                  <p className="text-[27px] font-bold">94</p>
                </div>
              </div>
              <div className="border-r-[1px] py-4 px-5 w-4/12">
                <p>Candidates</p>
                <div className="flex gap-3">
                  <div className="flex gap-3 mt-3">
                    <img src={icons.candidates} alt="Total Purpose" />
                    <div className="pr-4 border-r-[1px]">
                      <p className="text-[20px] flex items-center gap-1 font-bold">
                        9245{" "}
                        <span className="text-[#05C165] text-[12px] ">+32</span>{" "}
                      </p>
                      <p className="font-semibold text-[12px]">
                        Total Candidates
                      </p>
                    </div>
                    <div className="pr-4">
                      <p className="text-[20px] flex items-center gap-1 font-bold">
                        1040{" "}
                        <span className="text-[#05C165] text-[12px] ">+14</span>{" "}
                      </p>
                      <p className="font-semibold text-[12px]">Who Attempted</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-r-[1px] py-4 px-5 w-4/12">
                <p>Candidate Source</p>
                <div className="flex gap-3">
                  <div className="flex gap-3 mt-3">
                    <img src={icons.candidateSource} alt="Total Purpose" />
                    <div className="pr-4 border-r-[1px]">
                      <p className="text-[20px] flex items-center gap-1 font-bold">
                        11145{" "}
                        <span className="text-[#05C165] text-[12px] ">+89</span>{" "}
                      </p>
                      <p className="font-semibold text-[12px]">
                        Email
                      </p>
                    </div>
                    <div className="pr-4 border-r-[1px]">
                      <p className="text-[20px] flex items-center gap-1 font-bold">
                        6495{" "}
                        <span className="text-[#05C165] text-[12px] ">+12</span>{" "}
                      </p>
                      <p className="font-semibold text-[12px]">
                        Social share
                      </p>
                    </div>
                    <div className="pr-4">
                      <p className="text-[20px] flex items-center gap-1 font-bold">
                        10800{" "}
                        <span className="text-[#05C165] text-[12px] ">+14</span>{" "}
                      </p>
                      <p className="font-semibold text-[12px]">Unique Link</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-2/12 py-4 px-5">
                <p>Total Purpose</p>
                <div className="flex items-center gap-3 mt-4">
                  <img src={icons.totalPurpose} alt="Total Purpose" />
                  <p className="text-[27px] font-bold">14</p>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
    </>
  )
}

export default AssessmentOverview