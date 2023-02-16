import React from 'react';

function Panel(props) {
    return (
        <div className={props.isMobile === true ? "mobile_panel" : "panel"}>
            {props.children}
        </div>
    );
}

export default Panel;