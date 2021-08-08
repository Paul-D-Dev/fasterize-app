import React, { useEffect, useState } from 'react';
import FlagComponent from '../../components/flag/flag.component';
import SectionTitleBar from '../../components/section-title-bar/section-title-bar.component';
import SideBarComponent from '../../components/side-bar/side-bar.component';
import TopBarComponent from '../../components/top-bar/top-bar.component';
import UrlPLugService from '../../shared/serices/urlPlug.service';
import ResultPlug from '../../shared/_models/reponse-plug.model';
import './debugger-page.style.scss';

const DebuggerPage = () => {
    const urlPlugService = new UrlPLugService();
    const [url, setUrl] = useState<string>('');
    const [resultsPlug, setResultsPlug] = useState<ResultPlug[]>([]);

    const handlerUrlChange = (url: string) => {
        setUrl(url);
    }
    const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();  
        console.log(url);
        const today = new Date(Date.now());
        await urlPlugService.getResultUrlPLug(url).then((res: ResultPlug) => {
            res.url = url;
            res.date = today.toLocaleDateString();
            console.log(res);
            setResultsPlug(prevResult => {
                const arr = [res, ...prevResult]
                localStorage.setItem('resultsUrlPlug', JSON.stringify(arr));
                return arr;
            });
        })
    }

    const checkPlugged = (plug: ResultPlug): string => {
        const {plugged, fstrzFlags} = plug;
        if (plugged) {
            if (fstrzFlags?.includes('optimisée')) {
                return 'green';
            } else {
                return 'orange';
            }
        } else {
            return 'red';
        }
    }

    useEffect(() => {
        const ulrsPlug = localStorage.getItem('resultsUrlPlug')
        if (ulrsPlug) {
            setResultsPlug(JSON.parse(ulrsPlug));
        }
    }, [])


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
                            <table className="debuggerPage__history">
                                <colgroup className="col">
                                <col />
                                <col className="col-url"/>
                                <col />
                                <col />
                                <col />
                                <col />
                                </colgroup>
                                <tr>
                                    <th>Date</th>
                                    <th>URL</th>
                                    <th>Status</th>
                                    <th>Flags</th>
                                    <th>Cloudefront status</th>
                                    <th>Cloudfront pop</th>
                                </tr>
                                {
                                    resultsPlug.map( (plug, i) => 
                                    <tr className="row" key={i}>
                                        {/* Date */}
                                        <td>{plug.date}</td>
                                        {/* URL */}
                                        <td className="row-url">{plug.url}</td>
                                        {/* Status */}
                                        <td>{checkPlugged(plug)}</td>
                                        {/* Flags */}
                                        <td>
                                            {plug.fstrzFlags?.map(flag =>
                                                <FlagComponent key={i} flag={flag}/>
                                            )}
                                        </td>
                                        {/* Cloudfront status */}
                                        <td>{plug.cloudfrontStatus}</td>
                                        {/* Cloudfront pop */}
                                        <td>{plug.cloudfrontPOP}</td>
                                    </tr>
                                    )
                                }
                            </table>
                            
                        }
                    </section>
                </div>
            </main>
        </div>
    )
}

export default DebuggerPage;
