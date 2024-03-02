import classNames from "classnames";
import { useNavigate } from "react-router-dom";

interface ITab {
   text: string;
   badge?: string;
   url?: string;
}
interface TabGroupProps {
   selected: number;
   tabs: ITab[];
   onTabChange: (tabIndex: number) => void;
}

const TabGroup: React.FC<TabGroupProps> = ({ selected, tabs, onTabChange }) => {
   const navigate = useNavigate();
   return (
      <div className="flex gap-6 border-b border-gray-200">
         {tabs.map((tab, i) => (
            <div
               onClick={() => onTabChange(i)}
               className={classNames(
                  "pr-1 cursor-pointer pb-3 pl-1 text-gray-500  border-primary-400",
                  {
                     "border-b-2 text-primary-400": selected === i,
                  }
               )}
            >
               <div className="font-semibold text-base">{tab.text}</div>
            </div>
         ))}
      </div>
   );
};

export default TabGroup;
