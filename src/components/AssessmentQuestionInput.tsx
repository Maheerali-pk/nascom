import Textarea from "./Textarea";

interface AssessmentQuestionInputProps {
   value: string;
   onChange: (val: string) => void;
   question: string;
   index: number;
   showBottomLine?: boolean;
}

const AssessmentQuestionInput: React.FC<AssessmentQuestionInputProps> = ({
   value,
   onChange,
   question,
   index,
   showBottomLine = true,
}) => {
   return (
      <div className="flex flex-col ">
         <div className="text-gray-900 font-semibold text-lg mb-1">
            Assessment question {index}
         </div>
         <div className="text-gray-600 font-normal text-base mb-4">{}</div>
         <Textarea
            value={value}
            onChange={onChange}
            placeholder="Type your answer here"
            rows={5}
         ></Textarea>
         {showBottomLine && (
            <div className="border-gray-200 border-t w-full mt-8 mb-10"></div>
         )}
      </div>
   );
};

export default AssessmentQuestionInput;
