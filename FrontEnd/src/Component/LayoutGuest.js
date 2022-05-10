import '../Styles/LayoutGuest.css'
import React from 'react';
function LayoutGuest(props){
    return(
            <div className="container-layout">
                <div className="wraplogin100 p-5">
                    {props.children}
                </div>
            </div>
    );
}

export default LayoutGuest;