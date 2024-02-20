import React from 'react';
import ModelA from './ModelA';
import ModelB from './ModelB';
import { NavLink, Outlet } from 'react-router-dom';

const Problem2 = () => {
    const [page, setPage] = React.useState(1)
    const [info, setinfo] = React.useState([])
    const container = React.useRef(null)
    const [modelA, setModelA] = React.useState(false)
    const [modelB, setModelB] = React.useState(false)
    React.useEffect(() => {
        (async() => {
            const res = await fetch("https://contact.mediusware.com/api/contacts/?page=1")
            const data = await res.json()
            setinfo(data.results)
        })()
    }, [])
    return (

        <div ref={container} className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
                <div className="d-flex justify-content-center gap-3">
                <NavLink to="/problem-2/all-contacts" className="btn btn-lg btn-outline-primary" type="button" >All Contacts</NavLink>
                <NavLink to="/problem-2/us-contacts" className="btn btn-lg btn-outline-primary" type="button" >US Contacts</NavLink>
                </div>
                
            </div>
            <Outlet />
        </div>
    );
};

export default Problem2;