import { useState } from "react";
import { IconStar } from "../../SVGs/IconStar";
import { VoteButton } from "../../VoteButton";

interface ContentProps {
  handleAssignGrade: (value: string) => void;
}

export function Content({ handleAssignGrade }: ContentProps) {

  const [selectedValue, setSelectedValue] = useState('')

  function handleSelectValue(value: string) {
    setSelectedValue(value)
  }

  return (
    <div>
      <IconStar />
      <h1 className="text-2xl text-white font-normal mt-4">
        How did we do?
      </h1>
      <p className="text-sm text-greyCustom-300 leading-6 py-4">
        Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!

      </p>

      <div className="flex flex-row items-center justify-between my-4">
        <VoteButton title="1" selectedValue={selectedValue} handleSelectValue={handleSelectValue} />
        <VoteButton title="2" selectedValue={selectedValue} handleSelectValue={handleSelectValue} />
        <VoteButton title="3" selectedValue={selectedValue} handleSelectValue={handleSelectValue} />
        <VoteButton title="4" selectedValue={selectedValue} handleSelectValue={handleSelectValue} />
        <VoteButton title="5" selectedValue={selectedValue} handleSelectValue={handleSelectValue} />
      </div>

      <button
        className="w-full mt-5 p-2 flex items-center justify-center rounded-full hover:bg-white hover:text-orangeCustom-900 transition-colors bg-orangeCustom-900 text-sm font-normal text-white"
        onClick={() => handleAssignGrade(selectedValue)}
      >
        SUBMIT
      </button>
    </div>
  )
}