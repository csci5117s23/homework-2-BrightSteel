import 'bulma/css/bulma.min.css';

function NavBar() {
    return (
        <>
        <nav style={{backgroundColor: "red"}} className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <a style={{color: "white"}} href="/todos" className="navbar-item" onMouseEnter={(object) => object.target.style.color = 'black'} onMouseLeave={(object) => object.target.style.color = 'white'}>
                        Home
                    </a>
                    <a style={{color: "white"}} className="navbar-item" onMouseEnter={(object) => object.target.style.color = 'black'} onMouseLeave={(object) => object.target.style.color = 'white'}>
                        Categories
                    </a>
                    <a style={{color: "white"}} className="navbar-item" onMouseEnter={(object) => object.target.style.color = 'black'} onMouseLeave={(object) => object.target.style.color = 'white'}>
                        Done
                    </a>
                </div>
            </div>
        </nav>
        </>
    )
}

export default NavBar;