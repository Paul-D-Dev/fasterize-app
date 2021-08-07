import react, { FunctionComponent } from 'react';
import './top-bar.style.scss';

type Props = {
    title: string;
}
const TopBarComponent: FunctionComponent<Props> = ({title}) => {
    return(
        <div className='topBar'>
            <h1>{title}</h1>
        </div>
    )
}

export default TopBarComponent