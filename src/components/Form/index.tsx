import { useState } from "react";
import { Content } from "./Steps/Content";
import { ThanksContent } from "./Steps/ThanksContent";


export function Form() {

  const [evaluationNote, setEvaluationNote] = useState('')

  function handleAssignGrade(value: string) {
    setEvaluationNote(value)
  }

  return (
    <div className="min-h-[330px] w-full max-w-[330px] bg-greyCustom-700 rounded-2xl p-6">
      {
        evaluationNote === '' ?
          <Content handleAssignGrade={handleAssignGrade} />
          :
          <ThanksContent handleAssignGrade={handleAssignGrade} />

      }
    </div>
  )
}