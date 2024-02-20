import React from 'react'

export default function ModelC({modelData, showModelC, setShowModelC}) {
  return (
    <div className='modelc-container'>
        <div>
            <h5>ID</h5>
            <p>{modelData.id}</p>
            <h5>Phone</h5>
            <p>{modelData.phone}</p>
            <h5>Country</h5>
            <p>{modelData.country.name}</p>

            <p style={{
                background: "#333",
                color: "white",
                padding: "0.2rem .5rem",
                borderRadius: "0.5rem",
                cursor: "pointer"
            }} onClick={() => setShowModelC(false)}>Cancel</p>
        </div>
    </div>
  )
}
