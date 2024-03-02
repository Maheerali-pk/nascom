import { icons } from "../utils/helpers";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import Checkbox from "./Checkbox";
import Input from "./Input";

interface SelectProps<Name extends string = string> {
   options: ISelectOption<Name>[];
   value: Name[];
   onChange: (val: Name[]) => void;
   showSearch?: boolean;
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
   renderCustomPlaceholder?: (
      value: Name[],
      options: ISelectOption<Name>[]
   ) => string;
}

const MultipleSelect = <Name extends string = string>({
   options,
   value,
   onChange,
   placeholder,
   state,
   className = "",
   openOnTop,
   menuClassName,
   relativeParent = true,

   ...props
}: SelectProps<Name>) => {
   const [open, setOpen] = useState(false);
   const elmRef = useRef<HTMLDivElement>(null);
   const selectedOptions = options.filter((x) => value.includes(x.value));
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
   const [search, setSearch] = useState("");
   const filteredOptions = options.filter(
      (x) =>
         x.heading?.toLowerCase()?.includes(search.trim().toLowerCase()) ||
         value.includes(x.value)
   );
   const renderPlaceholder = () => {
      if (selectedOptions.length === 0) return placeholder;
      if (props.renderCustomPlaceholder) {
         return props.renderCustomPlaceholder(value, options);
      }
      return `${selectedOptions.length} ${props.postfix}`;
   };
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
                     "bg-gray-50": value.length > 0,
                     relative: relativeParent,
                  }
               )}
            >
               <div className="flex gap-2 items-center w-full">
                  <div className="text-gray-900 font-medium text-sm">
                     {renderPlaceholder()}
                  </div>
                  {/* {selectedOption?.badge && (
                  <div className="rounded-2xl bg-gray-100 py-0.5 px-2">
                     {selectedOption.badge}
                  </div>
               )} */}
               </div>

               {value.length === 0 ? (
                  <div>{icons.chevronDown}</div>
               ) : (
                  <div
                     onClick={(e) => {
                        e.stopPropagation();
                        onChange([]);
                     }}
                  >
                     {icons.close}
                  </div>
               )}
            </div>
            <div
               className={classNames(
                  `select-menu z-10 ${menuClassName ? menuClassName : ""}`,
                  {
                     show: open,
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
                        onClick={() => onChange([])}
                        className="text-primary-400 font-medium text-sm btn-link btn btn-primary w-fit"
                     >
                        Clear
                     </div>
                  </div>
                  {props.showSearch && (
                     <Input
                        inputClassName="px-3 py-2.5 text-sm"
                        onChange={setSearch}
                        value={search}
                        placeholder="Search"
                        startIcon={icons.searchInput}
                     ></Input>
                  )}
               </div>
               <div className="flex  flex-col overflow-auto ">
                  {filteredOptions.map((opt) => (
                     <div
                        onClick={(e) => {
                           e.stopPropagation();
                           console.log("label clicked");
                           let newValue = [...value];
                           const alreadySelected = value.includes(opt.value);
                           if (alreadySelected) {
                              newValue = value.filter((x) => x !== opt.value);
                           } else {
                              newValue = [...value, opt.value];
                           }
                           onChange(newValue);
                        }}
                        className={classNames(
                           "flex w-full justify-between gap-3 items-center py-2.5 px-2 hover:bg-gray-50 rounded-md"
                        )}
                     >
                        <Checkbox
                           onChange={(checked) => {
                              const newValue = checked
                                 ? Array.from(new Set([...value, opt.value]))
                                 : value.filter((x) => x !== opt.value);
                              onChange(newValue);
                           }}
                           value={value.includes(opt.value)}
                           label={opt.heading || ""}
                        ></Checkbox>
                        {/* <div className="flex flex-col gap-[2px]">
                           <div className="text-gray-500 text-sm">
                              {opt.text}
                           </div>
                        </div>
                        {value === opt.value ? icons.check : <></>} */}
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default MultipleSelect;
