import classNames from "classnames";
import { useState } from "react";
import { icons } from "../utils/helpers";
import InputTag from "./InputTag";
import SelectMenu from "./SelectMenu";
interface SearchFilterMobileProps {
   title: string;
   placeholder: string;
   options: ISelectOption[];
   value: string[];
   onChange: (val: string[]) => void;
   tagClassName: string;
   textClassName: string;
   closeIconClassName: string;
}

const SearchFilterMobile: React.FC<SearchFilterMobileProps> = (props) => {
   const [focus, setFocus] = useState(false);
   const [showMenu, setShowMenu] = useState(false);
   const [value, setValue] = useState("");
   const [selectedItem, setSelectedItem] = useState(0);

   const onKeyUpOnInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "ArrowUp") {
         setSelectedItem(
            selectedItem === 0 ? itemsToShow.length - 1 : selectedItem - 1
         );
      }
      if (e.key === "ArrowDown") {
         setSelectedItem(
            selectedItem === itemsToShow.length - 1 ? 0 : selectedItem + 1
         );
      }
      if (e.key === "Enter") {
         props.onChange([
            ...props.value,
            itemsToShow[selectedItem].heading as string,
         ]);
      }
   };
   const onBlurOnInput = () => {
      setFocus(false);
      setTimeout(() => {
         setShowMenu(false);
      }, 200);
   };

   const addTag = (tag: string) => {
      // if (props.maxItems && props.value.length >= props.maxItems) {
      //    return;
      // }
      props.onChange([...props.value, tag]);
   };

   const renderInputBase = () => {
      return (
         <div
            className={classNames("input-base", {
               focus: focus,
            })}
         >
            {icons.searchInput}
            <input
               value={value}
               onChange={(e) => setValue(e.target.value)}
               onFocus={() => {
                  setFocus(true);
                  setShowMenu(true);
               }}
               onKeyUp={onKeyUpOnInput}
               onBlur={onBlurOnInput}
               placeholder={props.placeholder}
               autoComplete="off"
            />

            {icons.chevronDown}
         </div>
      );
   };
   const itemsToShow = props.options
      .filter((item) => !props.value.includes(item.value as string))
      .filter((x) => x.value?.toLowerCase().includes(value.toLowerCase()));
   const renderTags = () => {
      return (
         <>
            {props.value.length ? (
               <div className="flex gap-2 flex-wrap mt-4">
                  {props.value.map((tag) => (
                     <InputTag
                        key={tag}
                        text={
                           props.options.find((x) => x.value === tag)
                              ?.heading || ""
                        }
                        icon={icons.closeSmall}
                        className={props.tagClassName}
                        closeIconClassName={props.closeIconClassName}
                        textClassName={props.textClassName}
                        onClick={() =>
                           props.onChange(props.value.filter((x) => x !== tag))
                        }
                     />
                  ))}
               </div>
            ) : null}
         </>
      );
   };

   return (
      <div className="flex flex-col">
         <div
            className={classNames(
               "input-wrapper input-primary relative input-with-tags "
               // {
               //    "input-error": props.state?.type === "error",
               //    "input-primary": props.state === undefined,
               //    "input-warn": props.state?.type === "warn",
               // }
            )}
            // data-testid={props.testId}
         >
            {/* {props.label && (
               <InputLabel
                  rightText={props.labelRightText}
                  subText={props.labelSubtext}
                  text={props.label}
               ></InputLabel>
            )} */}
            <div className="justify-between flex">
               <div className="text-gray-700 font-medium text-sm">
                  {props.title}
               </div>
               <div
                  className={classNames("text-gray-600 font-medium text-sm", {
                     "text-gray-300": props.value.length === 0,
                  })}
                  onClick={() => props.onChange([])}
               >
                  Clear
               </div>
            </div>

            {renderInputBase()}
            <SelectMenu
               items={itemsToShow.map((x) => x.heading as string)}
               open={showMenu}
               onItemSelect={(tag) =>
                  addTag(
                     itemsToShow.find((x) => x.heading === tag)?.value || ""
                  )
               }
               selectedItem={selectedItem}
            ></SelectMenu>
            {/* {props.state?.text && (
               <div className="text-sm helper-text">{props.state?.text}</div>
            )} */}
         </div>
         {renderTags()}
         {/* {suggest?.length ? (
            <div className="mt-5 flex gap-4">
               <div className="text-primary-400 text-sm font-medium">
                  Suggested:{" "}
               </div>

               <div className="flex gap-2">
                  {suggestedTagsToShow?.map((tag) => (
                     <InputTag
                        onClick={() => addTag(tag)}
                        text={tag}
                        icon={icons.addSmall}
                     ></InputTag>
                  ))}
               </div>
            </div>
         ) : null} */}
      </div>
   );
};

export default SearchFilterMobile;
