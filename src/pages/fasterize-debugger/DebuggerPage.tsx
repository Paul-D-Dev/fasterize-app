import React, { useEffect, useState } from 'react';
import CloudFrontStatusComponent from '../../components/cloudfront-status/cloudfront-status.component';
import FlagComponent from '../../components/flag/flag.component';
import LoaderComponent from '../../components/loader/loader.component';
import SectionTitleBar from '../../components/section-title-bar/section-title-bar.component';
import SideBarComponent from '../../components/side-bar/side-bar.component';
import StatusCloudComponent from '../../components/status-cloud/status-cloud.component';
import TopBarComponent from '../../components/top-bar/top-bar.component';
import UrlPLugService from '../../shared/serices/urlPlug.service';
import ResultPlug from '../../shared/_models/reponse-plug.model';
import './debugger-page.style.scss';

const DebuggerPage = () => {
    const urlPlugService = new UrlPLugService();
    const [url, setUrl] = useState<string>('');
    const [resultsPlug, setResultsPlug] = useState<ResultPlug[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const handlerUrlChange = (url: string) => {
        setUrl(url);
    }
    const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();  
        console.log(url);
        const today = new Date(Date.now());
        setLoading(true);
        setError('');
        await urlPlugService.getResultUrlPLug(url)
            .then((res: ResultPlug) => {
                res.url = url;
                res.date = today.toLocaleDateString();
                console.log(res);
                setResultsPlug(prevResult => {
                    const arr = [res, ...prevResult]
                    localStorage.setItem('resultsUrlPlug', JSON.stringify(arr));
                    return arr;
                });
            })
            .catch(() => setError('Une erreur est survenue...'))
            .finally(() => setLoading(false));
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
        const ulrsPlug = localStorage.getItem('resultsUrlPlug');
        if (ulrsPlug) {
            setResultsPlug(JSON.parse(ulrsPlug));
        }
    }, [])


    return (
        <div className="dp">
            <SideBarComponent/>
            <main className="main">
                <TopBarComponent title='FASTERIZE DEBUGGER'/>
                <div className="content">
                    <section>
                        <SectionTitleBar title='HEADER DEBUGGER'/>
                        <form className="dp__form" onSubmit={handlerSubmit}>
                            <div className="dp__form__content">
                                <div className="dp__form__content__input">
                                    <label>Url to check</label>
                                    <input 
                                        className="dp__form__content__input-url"
                                        type="url" 
                                        name="url" 
                                        onChange={(e) => handlerUrlChange(e.target.value)}/>
                                </div>
                                <button type="submit" className="btn primary dp__form__content__btn-submit">
                                    LAUNCH ANALYSIS
                                    {loading ? <LoaderComponent/> : ''}    
                                </button>
                            </div>
                            {error !== '' ?
                                <div className="dp__form-error">
                                    {error}
                                </div>
                                 : ''}
                        </form>
                    </section>

                    <section>
                        <SectionTitleBar title='HISTORY'/>
                        {/* Table */}
                        {
                            resultsPlug.length === 0 ? 
                            '' 
                            : 
                            <table className="dp__history">
                                <colgroup className="col">
                                <col />
                                <col className="col-url"/>
                                <col />
                                <col />
                                <col />
                                <col />
                                </colgroup>
                                <thead>
                                    <tr className="head">
                                        <th>Date</th>
                                        <th>URL</th>
                                        <th>Status</th>
                                        <th>Flags</th>
                                        <th>Cloudfront status</th>
                                        <th>Cloudfront pop</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        resultsPlug.map( (plug, i) => 
                                        <tr className="row" key={i}>
                                            {/* Date */}
                                            <td>{plug.date}</td>
                                            {/* URL */}
                                            <td className="row-url">{plug.url}</td>
                                            {/* Status */}
                                            <td><StatusCloudComponent color={checkPlugged(plug)}/></td>
                                            {/* Flags */}
                                            <td className="row-flags">
                                                {plug.fstrzFlags?.map(flag =>
                                                    <FlagComponent key={flag + i} flag={flag}/>
                                                    )}
                                            </td>
                                            {/* Cloudfront status */}
                                            <td><CloudFrontStatusComponent text={plug.cloudfrontStatus}/></td>
                                            {/* Cloudfront pop */}
                                            <td>{plug.cloudfrontPOP}</td>
                                        </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                            
                        }
                    </section>
                </div>
            </main>
        </div>
    )
}

export default DebuggerPage;
