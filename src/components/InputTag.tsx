interface InputTagProps {
   icon: JSX.Element;
   text: string;
   className?: string;
   closeIconClassName?: string;
   textClassName?: string;

   onClick: () => void;
}

const InputTag: React.FC<InputTagProps> = (props) => {
   return (
      <div
         className={
            "flex cursor-pointer gap-1 rounded-3xl bg-gray-100 items-center py-0.5 px-2 " +
            (props.className || "")
         }
      >
         <div
            className={
               "font-medium text-sm " + (props.textClassName || "text-gray-700")
            }
         >
            {props.text}
         </div>
         <div
            className={"cursor-pointer " + (props.closeIconClassName || "")}
            onClick={props.onClick}
         >
            {props.icon}
         </div>
      </div>
   );
};

export default InputTag;
