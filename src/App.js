import React from 'react'
import {Layout} from "./Components/Layout";
import {Router} from "@reach/router";
import {pages} from "./var/pages";

function App() {
    return (
        <Router>
            {
                pages.map((p, i) => (
                    <Layout page={p.component} path={p.link} key={i}/>
                ))
            }
        </Router>
    )
}

export default App;
