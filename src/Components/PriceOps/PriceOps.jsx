/* eslint-disable react/prop-types */

import Features from "../Features/Features";

// eslint-disable-next-line react/prop-types
const PriceOps = ({option}) => {
    // console.log(option)
    const {name, price , features} =option;
    return (
        <div className="text-5xl border-2 border-blue-200 rounded-2xl bg-blue-600 text-zinc-300 p-6">
            <h2 className="font-semibold text-center">{name}</h2>
            <h2 className="text-center">{price} <span className="text-xl">/mon</span></h2>
            {
                features.map((feature, idx) => <Features feature={feature} key={idx}></Features> )
            }
        </div>
    );
};

export default PriceOps;