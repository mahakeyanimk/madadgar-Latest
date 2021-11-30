import React from "react";
import { useState, useEffect } from 'react';


function CertificationCard({ item, setselected }) {

    const [fullCard, setfullCard] = useState(false);

    const toggleCard = () => {
        setfullCard(!fullCard)
    }

    
    return (

        <div style={{ width: '100%', borderBottom: '1px solid #69a8e2', borderRadius: "0px", padding: "10px", marginBottom: "10px", backgroundColor: fullCard ? '#2575c0' : '#ffffff' }}>

            <div style={{ backgroundColor: fullCard ? '#2575c0' : '#ffffff', width: "100%", display: 'flex', flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }}>

                <div style={{ marginLeft: '10px', display: 'inline', width: "20%" }}>
                    <h4 style={{ color: fullCard ? '#ffffff' : '#2575c0', fontSize: "15px", fontWeight: '700', letterSpacing: '1px', margin: '0' }}>
                        {item.ReportSubject}
                    </h4>
                </div>

                <div style={{ display: 'inline', textAlign: 'center' }}>
                    <h3 style={{ color: fullCard ? '#ffffff' : '#2575c0', fontSize: "12px", fontWeight: '700', letterSpacing: '1px', margin: '0' }}>
                        Posted By
                    </h3>
                    <h3 style={{ color: fullCard ? '#ffffff' : '#2575c0', fontSize: "12px", fontWeight: '400', letterSpacing: '1px', margin: '0' }}>
                        {item.reportedBy == 'Customer' ? item.customerId : item.serviceProvidersId}
                    </h3>
                </div>

                <div style={{ display: 'inline', textAlign: 'center' }}>
                    <h4 style={{ color: fullCard ? '#ffffff' : '#2575c0', fontSize: "12px", fontWeight: '700', letterSpacing: '1px', margin: '0' }}>
                        Against
                    </h4>
                    <h4 style={{ color: fullCard ? '#ffffff' : '#2575c0', fontSize: "12px", fontWeight: '400', letterSpacing: '1px', margin: '0' }}>
                        {item.reportedBy == 'Helper' ? item.customerId : item.serviceProvidersId}
                    </h4>
                </div>

                <div style={{ display: 'inline', textAlign: 'center' }}>
                    <h4 style={{ color: fullCard ? '#ffffff' : '#2575c0', fontSize: "12px", fontWeight: '400', letterSpacing: '1px', margin: '0' }}>
                        {item.createdAt}
                    </h4>
                </div>

               {fullCard ? null : <div style={{width : '100px', display: 'inline', textAlign: 'center' }}>
                    <h4 style={{ color: item.status == 'Pending' ? '#FF7F7F' : '#2575c0', fontSize: "12px", fontWeight: '400', letterSpacing: '1px', margin: '0' }}>
                        {item.status}
                    </h4>
                </div>}

                <div style={{ display: 'flex', flexDirection: 'row', alignItems: "center", justifyContent: 'space-around' }}>

                   {fullCard ? <button disabled={item.status == 'Responded'} onClick={() => { 
                       if (item.status == 'Pending')
                       {
                        //    call api
                       }

                    }} style={{marginRight : '5px', width: "90px", height: '30px', fontSize: '12px', borderRadius: '10px', backgroundColor: fullCard ? '#ffffff' : '#2575c0', border: "none", color: fullCard ? '#2575c0' : '#ffffff' }}>
                        {item.status == 'Pending' ? 'Respond' : 'Responded'} </button> : null}

                    <button onClick={() => { toggleCard() }} style={{ width: "70px", height: '30px', fontSize: '12px', borderRadius: '10px', backgroundColor: fullCard ? '#ffffff' : '#2575c0', border: "none", color: fullCard ? '#2575c0' : '#ffffff' }}>
                        {fullCard ? 'Hide' : 'View'} </button>

                </div>

            </div>

            {fullCard ? <div style={{ display: 'inline', textAlign: 'left', padding: '8px' }}>
                <h4 style={{ color: fullCard ? '#ffffff' : '#2575c0', fontSize: "12px", fontWeight: '700', letterSpacing: '1px', margin: '0', marginLeft: '10px' }}>
                    Description
                </h4>
                <h4 style={{ color: fullCard ? '#ffffff' : '#2575c0', fontSize: "12px", fontWeight: '400', letterSpacing: '1px', margin: '0', marginLeft: '10px' }}>
                    {item.ReportText}
                </h4>
            </div> : null}
        </div>
    )
}


export default CertificationCard;