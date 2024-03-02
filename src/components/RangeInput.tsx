import classNames from "classnames";
import { Range, getTrackBackground } from "react-range";
interface RangeInputProps {
   step: number;
   min: number;
   max: number;
   value: [number, number];
   onChange: (value: [number, number]) => void;
}

const RangeInput: React.FC<RangeInputProps> = ({
   value,
   min,
   max,
   onChange,
   step,
}) => {
   return (
      <Range
         renderTrack={({ props, children }) => (
            // <div
            //    {...props}
            //    className="rounded bg-gray-200 h-1.5"
            //    style={props.style}
            // >
            //    {children}
            // </div>
            <div
               onMouseDown={props.onMouseDown}
               onTouchStart={props.onTouchStart}
               style={{
                  ...props.style,
                  height: "36px",
                  display: "flex",
                  alignItems: "cetner",
                  width: "100%",
                  padding: "0 0.75rem",
               }}
            >
               <div
                  ref={props.ref}
                  style={{
                     height: "5px",
                     width: "100%",
                     borderRadius: "4px",
                     background: getTrackBackground({
                        values: value,
                        colors: ["#ccc", "#FF692E", "#ccc"],
                        min: 5000,
                        max: 200000,
                     }),
                     alignSelf: "center",
                  }}
               >
                  {children}
               </div>
            </div>
         )}
         renderThumb={({ props, isDragged }) => (
            // <div
            //    {...props}
            //    style={{
            //       ...props.style,
            //       height: "42px",
            //       width: "42px",
            //       borderRadius: "4px",
            //       backgroundColor: "#FFF",
            //       display: "flex",
            //       justifyContent: "center",
            //       alignItems: "center",
            //       boxShadow: "0px 2px 6px #AAA",
            //    }}
            // >
            //    <div
            //       style={{
            //          height: "16px",
            //          width: "5px",
            //          backgroundColor: isDragged
            //             ? "#548BF4"
            //             : "#CCC",
            //       }}
            //    />

            // </div>
            <div
               {...props}
               className={classNames(
                  "rounded-xl bg-white border-[1.5px] border-primary-400 h-6 w-6 active:border-primary-400 focus-visible:border-primary-400 focus-visible:outline-none"
               )}
               style={{
                  ...props.style,
                  background: isDragged ? "#FF692E" : "white",
                  border: "1.5px solid #FF692E",
               }}
            ></div>
         )}
         min={5000}
         max={200000}
         step={1000}
         values={value}
         onChange={(value) => onChange(value as [number, number])}
      ></Range>
   );
};

export default RangeInput;
