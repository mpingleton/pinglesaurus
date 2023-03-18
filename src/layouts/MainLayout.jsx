import React from 'react';

function MainLayout(props) {
    document.title=`${props.title} - Pinglesaur.us`;
    return (
        <div className="mainlayout">
            <div className="mainlayout_header">

            </div>
            <div className="mainlayout_linkbar_left">
                <ul class="mainlayout_linkbar">
                    <li class="mainlayout_linkbar_item"><a class="mainlayout_linkbar_item" href="/projects">Projects</a></li>
                    <li class="mainlayout_linkbar_item"><a class="mainlayout_linkbar_item" href="//github.com/mpingleton">GitHub</a></li>
                </ul>
            </div>
            <div className="mainlayout_linkbar_right">
                <ul class="mainlayout_linkbar">
                    <li class="mainlayout_linkbar_item"><a class="mainlayout_linkbar_item" href="/mobile">Mobile</a></li>
                    <li class="mainlayout_linkbar_item"><a class="mainlayout_linkbar_item" href="/privacy">Privacy Policy</a></li>
                </ul>
            </div>
            <div className="mainlayout_homebutton">
                <a class="mainlayout_homebutton" href="/">&nbsp;</a>
            </div>
            <div className="mainlayout_body">
                {props.children}
            </div>
        </div>
    );
}

export default MainLayout;