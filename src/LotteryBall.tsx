import React from "react";

interface Props {
    number: number;
}

const LotteryBall: React.FC<Props> = ({number}) => {
    return (
        <div className={"ball"}>
            {number}
        </div>
    );
};

export default LotteryBall;