import React, { useState } from 'react';

function MobileLayout(props) {
    document.title=`${props.title} - Pinglesaur.us`;
    const [isLinkPageVisible, setLinkPageVisible] = useState(false);

    const linkPage = (
        <div className="mobilelayout_linkpage">
                <ul className="mobilelayout_linkpage_item">
                    <li className="mobilelayout_linkpage_item"><a className="mobilelayout_linkpage_item" href="/">Home</a></li>
                    <li className="mobilelayout_linkpage_item"><a className="mobilelayout_linkpage_item" href="/projects">Projects</a></li>
                    <li className="mobilelayout_linkpage_item"><a className="mobilelayout_linkpage_item" href="//github.com/mpingleton">GitHub</a></li>
                    <li className="mobilelayout_linkpage_item"><a className="mobilelayout_linkpage_item" href="//www.pinglesaur.us">Desktop</a></li>
                    <li className="mobilelayout_linkpage_item"><a className="mobilelayout_linkpage_item" href="/privacy">Privacy Policy</a></li>
                </ul>
        </div>
    );

    return (
        <div className="mobilelayout">
            <div className="mobilelayout_header">
                
            </div>
            <div className="mobilelayout_linkbar">
                <div className={isLinkPageVisible ? "mobilelayout_linkbar_item_selected" : "mobilelayout_linkbar_item"} onClick={() => setLinkPageVisible(!isLinkPageVisible)}>
                    <img className="mobilelayout_linkbar_item" src="/images/mobile_homebutton.png"></img>
                </div>
            </div>
            {isLinkPageVisible ? linkPage : null}
            <div className="mobilelayout_body">
                {props.element}
            </div>
        </div>
    );
}

export default MobileLayout;