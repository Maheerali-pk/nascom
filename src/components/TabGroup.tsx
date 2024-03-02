import classNames from "classnames";
import { useRouter } from "next/router";

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
   const router = useRouter();
   return (
      <div className="flex gap-6 border-b border-gray-200">
         {tabs.map((tab, i) => (
            <div
               onClick={() => router.push(tab.url || "")}
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
