import { icons } from "../utils/helpers";

interface AttachedFileProps {
   value: File;
   showDelete?: boolean;
   onClickOnDelete?: () => void;
   showDownload?: boolean;
   showSize?: boolean;
}

const AttachedFile: React.FC<AttachedFileProps> = ({
   value,
   showDelete = true,
   onClickOnDelete,
   showDownload = false,
   showSize = true,
}) => {
   const onClickOnDownload = () => {};

   return (
      <div className="flex items-center rounded-xl gap-1 p-4 border border-gray-200  justify-between">
         <div className="flex gap-4">
            {icons.file}
            <div className="flex flex-col justify-center">
               <div className="text-gray-700 font-medium text-sm">
                  {value.name}
               </div>
               {showSize && (
                  <div className="text-gray-600 font-normal text-sm">
                     {value.size}
                  </div>
               )}
            </div>
         </div>
         {showDelete && (
            <div className="cursor-pointer" onClick={onClickOnDelete}>
               {icons.delete}
            </div>
         )}
         {showDownload && (
            <div className="cursor-pointer" onClick={onClickOnDownload}>
               {icons.download}
            </div>
         )}
      </div>
   );
};

export default AttachedFile;
