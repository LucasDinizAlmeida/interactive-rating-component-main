
interface VoteButtonProps {
  selectedValue?: string;
  title: string;
  handleSelectValue: (value: string) => void;
}

export function VoteButton({ title, selectedValue = '', handleSelectValue }: VoteButtonProps) {

  if (title === selectedValue) {
    return (
      <button
        className="h-10 w-10 rounded-full transition-colors bg-orangeCustom-900 flex items-center justify-center text-sm font-bold text-white"
        onClick={() => handleSelectValue(title)}
      >
        {title}
      </button>
    )
  }

  return (
    <button
      className="h-10 w-10 rounded-full hover:bg-greyCustom-300 current:bg-blue-500 transition-colors bg-gray-700 flex items-center justify-center text-sm font-bold text-white"
      onClick={() => handleSelectValue(title)}
    >
      {title}
    </button>
  )
}