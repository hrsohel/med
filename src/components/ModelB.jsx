import React from 'react'
import "../assets/global.css"
import {NavLink, Outlet} from 'react-router-dom'
import ModelC from './ModelC'

function ModelB() {
    const [check, setCheck] = React.useState(false)
    const [info, setInfo] = React.useState([])
    const [forEven, setForEven] = React.useState([])
    const [showModelC, setShowModelC] = React.useState(false)
    const [dataForModel, setDataForModel] = React.useState({})
    const getEvenData = () => {
       if(!check) {
        const evenData = info.filter(value => value.id % 2 === 0)
        setForEven(evenData)
       } else {
        setForEven(info.filter(value => value.country.name === "United States"))
       }
    } 
    React.useEffect(() => {
        (async() => {
            const res = await fetch("https://contact.mediusware.com/api/contacts/?page=1")
            const data = await res.json()
            setInfo(data.results.filter(value => value.country.name === "United States"))
            setForEven(data.results.filter(value => value.country.name === "United States"))
            console.log(data.results[0]);
        })()
    }, [])
    const showModelFunction = value => {
        setShowModelC(true)
        setDataForModel(value)
    }
  return (
    <>
        <div className='container'>
        <div className='buttons'>
                <NavLink to="/problem-2/all-contacts" className='all-button'>All contacts</NavLink>
                <NavLink to="/problem-2/us-contacts" className='us-button'>US contacts</NavLink>
                <NavLink to="/problem-2" className='cancel-button'>Cancel</NavLink>
            </div>
            <Outlet />
            {
                forEven.length ? <>
                <table className=''>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Phone</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        forEven?.map(value => <>
                            <tr onClick={() => showModelFunction(value)} key={value.id}>

                                <td>{value.id}</td>
                                <td>{value.phone}</td>
                                <td>{value?.country?.name}</td>
                            </tr>
                            {
                                showModelC ? <ModelC modelData={dataForModel} showModelC={showModelC} setShowModelC={setShowModelC} /> : <></>
                            }
                        </>)
                    }
                </tbody>
            </table>

            <div className='check-div'>
                <input onClick={getEvenData} onChange={(e) => setCheck(e.target.checked)} type="checkbox" name="check" id="check" />
                <label onClick={getEvenData} htmlFor="check" style={{marginLeft: ".5rem"}}>Even only</label>
            </div>
                </> : <><p style={{fontSize: "20px", textAlign: "center"}}>Loading...</p></>
            }
        </div>
    </>
  )
}

export default React.memo(ModelB)
