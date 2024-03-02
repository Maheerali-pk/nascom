import { FileUploader } from "react-drag-drop-files";
import { icons } from "../utils/helpers";
import { bytesToSize } from "../utils/utils";
import { useState } from "react";
import AttachedFile from "./AttachedFile";

interface MultipleFileUploadProps {
   value: File[] | null;
   addFile: (file: File) => void;
   deleteFile: (file: File) => void;
   maxFiles: number;
   maxSize: number;
}

const MultipleFileUpload: React.FC<MultipleFileUploadProps> = ({
   value,
   addFile,
   deleteFile,
   maxFiles,
   maxSize,
}) => {
   const [error, setError] = useState("");
   return (
      <div className="gap-5 flex flex-col w-full">
         <FileUploader
            value={value}
            handleChange={(file: File) => {
               console.log(file);
               addFile(file);
               setError("");
            }}
            onSizeError={(file: File) => {
               console.log("File error");
               setError("File size is too large");
            }}
            maxSize={5}
            classes="w-full custom-upload-file"
            children={
               <div className="flex flex-col gap-2 cursor-pointer">
                  {error && (
                     <div className="text-error-600 text-sm">{error}</div>
                  )}
                  <div className="w-full bg-white border border-gray-200 py-6 px-4 rounded-xl flex items-center gap-1">
                     {icons.paperClip}
                     <div className="text-primary-400 font-semibold text-sm">
                        Attach File
                     </div>
                     <div className="text-gray-600 font-normal text-sm">
                        (Max size: {bytesToSize(maxSize)}. You can attach{" "}
                        {maxFiles - (value?.length || 0)} more file)
                     </div>
                  </div>
               </div>
            }
         ></FileUploader>
         {value?.map((val) => (
            <AttachedFile
               showDelete
               onClickOnDelete={() => deleteFile(val)}
               value={val}
            ></AttachedFile>
         ))}
      </div>
   );
};

export default MultipleFileUpload;
