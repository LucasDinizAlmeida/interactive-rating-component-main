import { useState } from "react";
import { Phone } from "../../SVGs/Phone";

interface ThanksContent {
  handleAssignGrade: (value: string) => void;
}

export function ThanksContent({ handleAssignGrade }: ThanksContent) {


  return (
    <div className="flex flex-col items-center">
      <Phone />

      <button
        className="w-2/3 my-5 p-1 flex items-center justify-center rounded-full hover:bg-white hover:text-orangeCustom-900 transition-colors bg-gray-700 text-sm font-normal text-orangeCustom-900"
        onClick={() => handleAssignGrade('')}
      >
        You selected 4 out of 5
      </button>
      <h1 className="text-2xl text-white font-normal">
        Thank you!
      </h1>
      <p className="text-sm text-center text-greyCustom-300 leading-5 py-3">
        We appreciate you taking the time to give a rating. If you ever need more support, don`t hesitate to get in touch!
      </p>


    </div>
  )
}