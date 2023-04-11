import 'bulma/css/bulma.min.css';

function NavBar() {
    return (
        <>
        <nav style={{backgroundColor: "red"}} class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
            </div>
            <div class="navbar-menu">
                <div class="navbar-start">
                    <a style={{color: "white"}} href="/todos" class="navbar-item" onMouseEnter={(object) => object.target.style.color = 'black'} onMouseLeave={(object) => object.target.style.color = 'white'}>
                        Home
                    </a>
                    <a style={{color: "white"}} class="navbar-item" onMouseEnter={(object) => object.target.style.color = 'black'} onMouseLeave={(object) => object.target.style.color = 'white'}>
                        Categories
                    </a>
                    <a style={{color: "white"}} class="navbar-item" onMouseEnter={(object) => object.target.style.color = 'black'} onMouseLeave={(object) => object.target.style.color = 'white'}>
                        Done
                    </a>
                </div>
            </div>
        </nav>
        </>
    )
}

export default NavBar;