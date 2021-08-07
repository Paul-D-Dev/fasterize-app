import React, { FunctionComponent } from 'react'
import './section-title-bar.style.scss';

type Props = {
    title: string;
} 
const SectionTitleBar: FunctionComponent<Props> = ({title}) => {
    return(
        <div className="section-title-bar">
            <h2>{title}</h2>
        </div>
    )
}

export default SectionTitleBar;