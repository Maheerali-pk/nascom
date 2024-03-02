import moment from "moment";
import { monthsArray } from "../../utils/data";
import { icons } from "../../utils/helpers";

interface AchievementProps {
   achievement: IAchievementMini;
}

const Achievement: React.FC<AchievementProps> = ({ achievement }) => {
   return (
      <div className="flex flex-col gap-1">
         <div className="text-gray-900 font-semibold text-base">
            {achievement.award}
         </div>
         <div className="flex gap-3 items-center">
            <div className="text-gray-500 font-normal text-base">
               {achievement.organisation}
            </div>
            <a
               // onClick={() => (window.location.href = achievement.url)}
               className="btn-link w-fit btn btn-primary gap-2 text-sm"
               href={achievement.url}
               target="_blank"
            >
               <div>Visit Website</div> {icons.externalWebsite}
            </a>
         </div>
         <div className="text-gray-500 font-normal text-base">
            {achievement.year}
         </div>
      </div>
   );
};

export default Achievement;
