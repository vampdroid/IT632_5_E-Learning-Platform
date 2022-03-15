import '../Styles/Layout.css'
function Layout(props){
    return(
            <div className="container-layout">
                <div className="wraplogin100 p-5">
                    {props.children}
                </div>
            </div>
    );
}

export default Layout;