import { IApplicationDetails } from "../../apis/getApplicationDetails";
import { useGlobalContext } from "../../contexts/GlobalContext";
import AddNotesDialog from "../../dialogs/AddNotesDialog";
import { icons } from "../../utils/helpers";

interface AddNotesButtonProps {
   notes?: string;
   appId: string;
}

const AddNotesButton: React.FC<AddNotesButtonProps> = ({ notes, appId }) => {
   const [state, dispatch] = useGlobalContext();
   return notes ? (
      <div
         onClick={() => {
            dispatch({
               setDialog: AddNotesDialog,
               setState: {
                  applicationsForMessages: [appId],
               },
            });
         }}
         className="cursor-pointer flex items-center gap-1 text-primary-400"
      >
         {icons.jobCardCompany.notes}
         <div className="text-primary-400 font-semibold text-sm">
            View Notes
         </div>
      </div>
   ) : (
      <div
         onClick={() => {
            console.log("Add notes dialog click");
            dispatch({
               setDialog: AddNotesDialog,
               setState: {
                  applicationsForMessages: [appId],
               },
            });
         }}
         className="cursor-pointer flex items-center gap-1 text-gray-500"
      >
         {icons.jobCardCompany.notes}
         <div className="text-gray-500 font-semibold text-sm">Add notes</div>
      </div>
   );
};

export default AddNotesButton;
