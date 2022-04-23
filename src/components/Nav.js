import React from 'react';

function Nav(props) {
    const {
        pages = [],
        setCurrentPage,
        currentPage
    } = props;

    return (
        <header>
            <h1><a id="big-name" href='/'>john proodian</a></h1>
            <nav>
                <ul>
                    {pages.map((page) => (
                        <li>
                            <span onClick={() => setCurrentPage(page)}>{page}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
    
}


export default Nav;