import React from "react";

export default function Parameter(props) {
  return (
    <>
      <button className="bg-paramentbg text-neutral-50 flex flex-col w-[46%] items-center justify-center parameterphone:p-[24px] p-[16px] rounded-[8px] gap-[8px]">
        <div className="flex justify-center items-center parameterphone:gap-[16px] gap-[8px]">
          <img className="parameterphone:w-auto parameterphone:h-auto w-[24px] h-[24px]" src={props.image} alt="" />
          <p className="font-BeVietNamPro not-italic font-bold parametermobile:leading-[72px] parametermobile:text-[30px] text-[24px] leading-[32px] text-center">{props.number}</p>
        </div>
        <div className="">
          <p className="font-BeVietNamPro not-italic font-normal parametermobile:text-[24px] parametermobile:leading-[32px] text-[14px] leading-[20px]">{props.text}</p>
        </div>
      </button>
    </>
  );
}
