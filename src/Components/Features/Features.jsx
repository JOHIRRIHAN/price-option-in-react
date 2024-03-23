import propTypes from "prop-types";
import { FaCheckCircle } from "react-icons/fa";

const Features = ({ feature }) => {
  return (
    <div>
      <h5 className="text-base items-center flex gap-5">
        <FaCheckCircle className="text-green-500" />
        {feature.name}
      </h5>
    </div>
  );
};
Features.propTypes = {
  feature: propTypes.array,
};
export default Features;
