import React, {FunctionComponent} from "react";
import './flag.style.scss';

type Props = {
    flag: string;
}

const FlagComponent: FunctionComponent<Props> = ({flag}) => {
    return (
        <div className="flag">
            {flag}
        </div>
    )
}
export default FlagComponent;