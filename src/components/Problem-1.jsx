import React, {useState} from 'react';

const Problem1 = () => {

    const [show, setShow] = useState('all');
    const [name, setName] = React.useState("")
    const [status, setStatus] = React.useState("")
    const [data, setData] = React.useState([])
    const [fullData, setFullData] = React.useState([])
    const ref = React.useRef(null)
    const handleClick = (val) =>{
        setShow(val);
        if(val === "active") {
            const filteredData = data.filter(data => data.status === val)
            setFullData(filteredData)
        }
        else if(val === "completed") {
            const filteredData = data.filter(data => data.status === val)
            setFullData(filteredData)
        } 
        else {
            setFullData([
                ...data.filter(data => data.status === 'active'), 
                ...data.filter(data => data.status === "completed"),
                ...data.filter(data => data.status !== "active" && data.status !== "completed").sort((a,b) => {
                    if(a.status > b.status) return 1
                    else if(a.status < b.status) return -1
                    else return 0
                })
            ])
        }
    }
    const submit = e => {
        e.preventDefault()
        data.push({name, status})
        // setFullData([...data])
        setFullData([
            ...data?.filter(data => data?.status === 'active'), 
            ...data?.filter(data => data?.status === "completed"),
            ...data?.filter(data => data?.status !== "active" && data?.status !== "completed").sort((a,b) => {
                if(a?.status > b?.status) return 1
                else if(a?.status < b?.status) return -1
                else return 0
            })
        ])
        ref.current.reset()
    }
    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form ref={ref} className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input type="text" onChange={e => setName(e.target.value)} className="form-control" placeholder="Name"/>
                        </div>
                        <div className="col-auto">
                            <input type="text" onChange={e => setStatus(e.target.value)} className="form-control" placeholder="Status"/>
                        </div>
                        <div className="col-auto">
                            <button onClick={submit} type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                fullData.map((value, index) => <tr key={index}>
                                    <td>{value.name}</td>
                                    <td>{value.status}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;