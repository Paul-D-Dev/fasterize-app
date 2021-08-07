import React, { useState } from 'react'
import SideBarComponent from '../../components/side-bar/side-bar.component';
import TopBarComponent from '../../components/top-bar/top-bar.component';
import SectionTitleBar from '../../components/section-title-bar/section-title-bar.component';
import './debugger-page.style.scss'
import ResultPlug from '../../shared/_models/reponse-plug.model';
import UrlPLugService from '../../shared/serices/urlPlug.service';

const DebuggerPage = () => {
    const urlPlug = new UrlPLugService();
    const [url, setUrl] = useState<string>('');
    const [resultsPlug, setResultsPlug] = useState<ResultPlug[]>([]);

    const handlerUrlChange = (url: string) => {
        setUrl(url);
    }
    const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();  
        console.log(url);
        urlPlug.getResultUrlPLug(url).then((res: ResultPlug) => {
            console.log(res);
            setResultsPlug(prevResult => [res, ...prevResult]);
            console.log(resultsPlug);
            
        })
    }

    return (
        <div className="debuggerPage">
            <SideBarComponent/>
            <main className="main">
                <TopBarComponent title='FASTERIZE DEBUGGER'/>
                <div className="content">
                    <section>
                        <SectionTitleBar title='HEADER DEBUGGER'/>
                        <form className="debuggerPage__form"onSubmit={handlerSubmit}>
                            <div className="debuggerPage__form__input">
                                <label>Url to check</label>
                                <input type="url" name="url" onChange={(e) => handlerUrlChange(e.target.value)}/>
                            </div>
                            <button type="submit" className="btn primary debuggerPage__form__btn-submit">LAUNCH ANALYSIS</button>
                        </form>
                    </section>

                    <section>
                        <SectionTitleBar title='HISTORY'/>
                        {/* Table */}
                        {
                            resultsPlug.length === 0 ? 
                            '' 
                            : 
                            resultsPlug.map( (plug, i) => 
                                <div className="row" key={i}>
                                    <p>
                                    {plug.plugged ? 'true': 'false'}
                                    </p>
                                </div>
                            )
                        }
                    </section>
                </div>
            </main>
        </div>
    )
}

export default DebuggerPage;
