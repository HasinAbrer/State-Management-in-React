import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
const Feature = ({feature}) => {
    return (
        <div>
            <p className="flex items-center gap-2">
               <IoCheckmarkDoneCircleSharp /> {feature}
            </p>
        </div>
    );
};

export default Feature;