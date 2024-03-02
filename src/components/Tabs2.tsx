import classNames from "classnames";
import { useRouter } from "next/router";
import { routes } from "../utils/utils";

interface ITab {
   badge: string;
   text: string;
   url: string;
}
interface Tabs2Props {
   items: ITab[];
   selectedItem: number;
}

const Tabs2: React.FC<Tabs2Props> = (props) => {
   const router = useRouter();
   return (
      <div className="flex items-center rounded-lg bg-gray-25 gap-2 p-1 border border-gray-200 md:w-fit w-full">
         {props.items.map((x, i) => (
            <div
               onClick={() => router.push(x.url)}
               className={classNames(
                  "flex items-center justify-center rounded-md gap-2 py-2 px-4 cursor-pointer w-full",
                  { "shadow-tabs2": i === props.selectedItem }
               )}
            >
               <div
                  className={classNames(
                     "text-gray-500 font-semibold text-sm whitespace-nowrap",
                     {
                        "text-gray-700": i === props.selectedItem,
                     }
                  )}
               >
                  {x.text}
               </div>
               <div className="flex items-center rounded-2xl bg-gray-100 py-0.5 px-2 text-gray-700 font-medium text-xs">
                  {x.badge}
               </div>
            </div>
         ))}
      </div>
   );
};

export default Tabs2;
