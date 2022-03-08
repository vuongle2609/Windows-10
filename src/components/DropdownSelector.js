import { useState } from "react";

const DropdownSelector = ({ label, choices }) => {
  const [isDrop, setIsDrop] = useState(false);
  const [choice, setChoice] = useState(choices[0].name);

  return (
    <>
      <h3 className="text-xs block mb-[6px]">{label}</h3>
      <div className="relative w-[280px]">
        <div
          className="border-[2px] border-[#999999] hover:border-[#666666] px-2 py-[4px]"
          onClick={() => setIsDrop(true)}
        >
          <p className="text-[13px] font-medium">{choice}</p>
          <i className="fa-thin fa-angle-down absolute top-[50%] -translate-y-[50%] right-2"></i>
        </div>
        {isDrop ? (
          <ul className="absolute w-full left-0 top-0 bg-[#f2f2f2] py-1 border-[1px] border-[#999999]">
            {choices.map((choice, index) => (
              <li
                className="px-2 py-[4px] text-[13px] font-medium hover:bg-[#dadada]"
                key={index}
                onClick={() => {
                  choice.func();
                  setIsDrop(false);
                  setChoice(choices[index].name);
                }}
              >
                {choice.name}
              </li>
            ))}
          </ul>
        ) : (
          false
        )}
      </div>
    </>
  );
};

export default DropdownSelector;
