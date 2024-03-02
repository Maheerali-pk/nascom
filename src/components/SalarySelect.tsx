import { icons } from "../utils/helpers";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import Checkbox from "./Checkbox";
import Input from "./Input";
import { formatCurrency } from "../utils/utils";
import { Range, getTrackBackground } from "react-range";
import RangeInput from "./RangeInput";

interface SalarySelectProps {
   value: [number, number];
   onChange: (val: [number, number]) => void;
   placeholder: string;
   state?: InputState;
   label?: string;
   labelSubtext?: string;
   className?: string;
   openOnTop?: boolean;
   menuClassName?: string;
   relativeParent?: boolean;
   postfix?: string;
   menuTitle?: string;
   min: number;
   max: number;
}

const SalarySelect = ({
   value,
   onChange,
   placeholder,
   state,
   className = "",
   openOnTop,
   menuClassName,
   relativeParent = true,

   ...props
}: SalarySelectProps) => {
   const [open, setOpen] = useState(false);
   const elmRef = useRef<HTMLDivElement>(null);
   const onOpenMenu = () => {
      setOpen(!open);
   };
   useEffect(() => {
      const func = (e: MouseEvent) => {
         if (open) {
            if (!elmRef.current?.contains(e.target as Node)) {
               setOpen(false);
            }
         }
      };
      window.addEventListener("click", func, true);
      return () => window.removeEventListener("click", func);
   }, [open]);
   useEffect(() => {
      setTimeout(() => {
         elmRef.current?.click();
      }, 1000);
   }, [open]);
   const isValueSame = value[0] === props.min && value[1] === props.max;

   return (
      <div
         className={`${className} select-wrapper flex flex-col  gap-1.5 w-full `}
      >
         {props.label && (
            <div className="text-sm text-gray-700 font-medium">
               {props.label}{" "}
               {props.labelSubtext ? (
                  <span className="text-gray-400 font-normal">
                     ({props.labelSubtext})
                  </span>
               ) : null}
            </div>
         )}
         <div ref={elmRef} className="relative">
            <div
               onClick={onOpenMenu}
               className={classNames(
                  "flex justify-between w-full py-2.5 h-fit px-3.5 items-center rounded-lg border border-gray-300 cursor-pointer ",
                  {
                     "select-error": state?.type === "error",
                     "select-primary": state === undefined,
                     "select-warn": state?.type === "warn",
                     "bg-gray-50": !isValueSame,
                     relative: relativeParent,
                  }
               )}
            >
               <div className="flex gap-2 items-center w-full">
                  <div className="text-gray-900 font-medium text-sm">
                     {isValueSame
                        ? placeholder
                        : `${formatCurrency(value[0])} - ${formatCurrency(
                             value[1]
                          )}`}
                  </div>
                  {/* {selectedOption?.badge && (
                  <div className="rounded-2xl bg-gray-100 py-0.5 px-2">
                     {selectedOption.badge}
                  </div>
               )} */}
               </div>

               {isValueSame ? (
                  <div>{icons.chevronDown}</div>
               ) : (
                  <div
                     onClick={(e) => {
                        e.stopPropagation();
                        onChange([props.min, props.max]);
                     }}
                  >
                     {icons.close}
                  </div>
               )}
            </div>
            {open && (
               <div
                  className={classNames(
                     `select-menu z-10 show ${
                        menuClassName ? menuClassName : ""
                     }`,
                     {
                        "open-top": openOnTop,
                     }
                  )}
               >
                  <div className="flex flex-col px-2 py-4 gap-3">
                     <div className="flex justify-between">
                        <div className="text-gray-700 font-medium text-sm">
                           {props.menuTitle}
                        </div>
                        <div
                           onClick={() => onChange([props.min, props.max])}
                           className="text-primary-400 font-medium text-sm btn-link btn btn-primary w-fit"
                        >
                           Clear
                        </div>
                     </div>
                  </div>
                  <div className="mx-2">
                     <RangeInput
                        max={props.max}
                        value={value}
                        min={props.min}
                        onChange={onChange}
                        step={1000}
                     ></RangeInput>
                     <div className="flex justify-between w-full">
                        <div className="text-gray-700 font-medium text-sm">
                           ₹{formatCurrency(value[0])} / month
                        </div>
                        <div className="text-gray-700 font-medium text-sm">
                           ₹{formatCurrency(value[1])} / month
                        </div>
                     </div>
                  </div>
               </div>
            )}
         </div>
      </div>
   );
};

export default SalarySelect;
