import react, { FunctionComponent } from 'react';
import './top-bar.style.scss';

type Props = {
    title: string;
}
const TopBarComponent: FunctionComponent<Props> = ({title}) => {
    document.title = title.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));;
    return(
        <div className='topBar'>
            <h1>{title}</h1>
        </div>
    )
}

export default TopBarComponent;