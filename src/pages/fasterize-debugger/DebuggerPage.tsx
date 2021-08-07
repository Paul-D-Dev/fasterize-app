import React, { useState } from 'react'
import SideBarComponent from '../../components/side-bar/side-bar.component';
import TopBarComponent from '../../components/top-bar/top-bar.component';
import SectionTitleBar from '../../components/section-title-bar/section-title-bar.component';
import './debugger-page.style.scss'


const DebuggerPage = () => {

    const [url, setUrl] = useState<String>('');


    const handlerUrlChange = (url: string) => {
        setUrl(url);
    }
    const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();  
        console.log(url);

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

                    </section>
                </div>
            </main>
        </div>
    )
}

export default DebuggerPage;
