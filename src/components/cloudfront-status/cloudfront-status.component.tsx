import React, { FunctionComponent, useEffect, useState } from 'react';
import './cloudfront-status.style.scss';

type Props = {
    text: string;
}

const CloudFrontStatusComponent: FunctionComponent<Props> = ({text}) => {
    
    const [bgColor, setBgColor] = useState<string>('');

    const textToBgColor: { [key: string]: string } = {
        MISS: 'red',
    }
    
    useEffect(() => {
        setBgColor(textToBgColor[text])
    }, [text, textToBgColor]);



    return (
        <div className="cf__status">
            {text !== '' ? 
                <span className={bgColor}>{text}</span> 
                : 
                ''
            }
        </div>
    )
}

export default CloudFrontStatusComponent;