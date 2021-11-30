import React, { useState, useEffect } from 'react'
import TopBar from '../TopBar'
import CertificationCard from './CertificationCard'
import moment from 'moment';


function Certifications({ tab }) {

    const [searchKey, setsearchKey] = useState('');
    const [Certifications, setCertifications] = useState([]);
    const [refresh, setrefresh] = useState(false);
    const [date, setdate] = useState('Today');
    const [statusSelector, setstatusSelector] = useState('Pending');

    const reload = () => {
        setrefresh(!refresh);
    }

    useEffect(() => {

        setsearchKey('');
        setCertifications(
            [

                {
                    customerId: 'Fahad Ali',
                    //who reported? customer or service provider
                    reportedBy: 'Customer',
                    jobId: 'Cleaning',
                    serviceProvidersId: 'Imran Ahmed',
                    Certificationsubject: 'House Robbery',
                    ReportText: 'The Helper was here at my house for fixing the sink and as soon as he left i noticed that my mobile phone was missing, there was no one at the house except us. Im damn sure he did it. I have reported to the police and reporting here also so that this doesnt happen to anyone else.',
                    createdAt: 'September 30, 2021',
                    status: 'Pending'
                },

                {
                    customerId: 'Fahad Ali',
                    //who reported? customer or service provider
                    reportedBy: 'Customer',
                    jobId: 'Cleaning',
                    serviceProvidersId: 'Imran Ahmed',
                    Certificationsubject: 'House Robbery',
                    ReportText: 'The Helper was here at my house for fixing the sink and as soon as he left i noticed that my mobile phone was missing, there was no one at the house except us. Im damn sure he did it. I have reported to the police and reporting here also so that this doesnt happen to anyone else.',
                    createdAt: 'September 30, 2021',
                    status: 'Responded'
                },

                {
                    customerId: 'Fahad Ali',
                    //who reported? customer or service provider
                    reportedBy: 'Customer',
                    jobId: 'Cleaning',
                    serviceProvidersId: 'Imran Ahmed',
                    Certificationsubject: 'House Robbery',
                    ReportText: 'The Helper was here at my house for fixing the sink and as soon as he left i noticed that my mobile phone was missing, there was no one at the house except us. Im damn sure he did it. I have reported to the police and reporting here also so that this doesnt happen to anyone else.',
                    createdAt: 'September 30, 2021',
                    status: 'Responded'
                },

                {
                    customerId: 'Fahad Ali',
                    //who reported? customer or service provider
                    reportedBy: 'Customer',
                    jobId: 'Cleaning',
                    serviceProvidersId: 'Imran Ahmed',
                    Certificationsubject: 'House Robbery',
                    ReportText: 'The Helper was here at my house for fixing the sink and as soon as he left i noticed that my mobile phone was missing, there was no one at the house except us. Im damn sure he did it. I have reported to the police and reporting here also so that this doesnt happen to anyone else.',
                    createdAt: 'September 29, 2021',
                    status: 'Pending'
                },

                {
                    customerId: 'Fahad Ali',
                    //who reported? customer or service provider
                    reportedBy: 'Customer',
                    jobId: 'Cleaning',
                    serviceProvidersId: 'Imran Ahmed',
                    Certificationsubject: 'House Robbery',
                    ReportText: 'The Helper was here at my house for fixing the sink and as soon as he left i noticed that my mobile phone was missing, there was no one at the house except us. Im damn sure he did it. I have reported to the police and reporting here also so that this doesnt happen to anyone else.',
                    createdAt: 'September 25, 2021',
                    status: 'Pending'
                },

                {
                    customerId: 'Fahad Ali',
                    //who reported? customer or service provider
                    reportedBy: 'Customer',
                    jobId: 'Cleaning',
                    serviceProvidersId: 'Imran Ahmed',
                    Certificationsubject: 'House Robbery',
                    ReportText: 'The Helper was here at my house for fixing the sink and as soon as he left i noticed that my mobile phone was missing, there was no one at the house except us. Im damn sure he did it. I have reported to the police and reporting here also so that this doesnt happen to anyone else.',
                    createdAt: 'September 25, 2021',
                    status: 'Responded'
                },

                {
                    customerId: 'Fahad Ali',
                    //who reported? customer or service provider
                    reportedBy: 'Customer',
                    jobId: 'Cleaning',
                    serviceProvidersId: 'Imran Ahmed',
                    Certificationsubject: 'House Robbery',
                    ReportText: 'The Helper was here at my house for fixing the sink and as soon as he left i noticed that my mobile phone was missing, there was no one at the house except us. Im damn sure he did it. I have reported to the police and reporting here also so that this doesnt happen to anyone else.',
                    createdAt: 'September 20, 2021',
                    status: 'Pending'
                },



            ]
        )

    }, [tab, refresh])


    const findDate = (status) => {

        if (status == 'Today') {
          return moment(new Date()).format('L')
        }
        else if (status == 'Yesterday') {
          return moment(new Date((new Date()).valueOf() - 1000 * 60 * 60 * 24)).format('L')
        }

        else if (status == 'This Week') {
            return moment(new Date((new Date()).valueOf() - 1000 * 60 * 60 * 168)).format('L')
        }

        else {
          return moment(new Date((new Date()).valueOf() - 1000 * 60 * 60 * 720)).format('L')
        }
    
      }
    

    return (
        <div style={{ width: '100%', height: '100%' }}>

            <TopBar heading={tab} searchKey={searchKey} setsearchKey={setsearchKey} />

            {/* Body */}


                    {/* selectors */}
                    <div style={{ height: '30px', margin: '10px', display: 'flex', justifyContent: 'space-between', padding: '10px' }}>


                    <select style={{
                        border: '1px solid #2575c0', borderRadius : '5px' , width : '120px' , color : '#2575c0'
                    }} name="datePicker" value={date} onChange={(e)=>{setdate(e.target.value)}}>
                        <option value="All">All</option>
                        <option value="Today">Today</option>
                        <option value="Yesterday">Yesterday</option>
                        <option value="This Week">This Week</option>
                        <option value="This Month">This Month</option>
                    </select>


                    <select style={{
                        border: '1px solid #2575c0', borderRadius : '5px' , width : '120px' , color : '#2575c0'
                    }} name="statusPicker" value={statusSelector} onChange={(e)=>{setstatusSelector(e.target.value)}}>
                        <option value="All">All</option>
                        <option value="Pending">Pending</option>
                        <option value="Responded">Certified</option>
                    </select>

                    </div>
                    
                    
                    
                    {/* Results */}
                    <div style={{ height: '70%', maxHeight: '650px', margin: '10px', display: 'flex', flexWrap: 'wrap', overflowY: 'scroll', justifyContent: 'flex-start', padding: '10px' }}>

                        

                        {
                            Certifications.length == 0 ?
                                <p style={{ textAlign: 'center', marginTop: '22%', color: '#2575c0' }}> No results found </p> :
                                Certifications.map((item) => {
                                    if (searchKey == '' || item.first_name.toLowerCase().includes(searchKey.toLowerCase()) || item.last_name.toLowerCase().includes(searchKey.toLowerCase()) )
                                    {
                                        if ( date == 'All' || (date != 'All' && findDate(date) <= moment((item.createdAt).valueOf()).format('L')) ) {

                                            if (statusSelector == 'All' || (statusSelector != 'All' && statusSelector == item.status)) {
                                                return <CertificationCard item={item} />
                                            }
                                            
                                        }
                                      
                                    }
                                    else{
                                      return null
                                    }

                                }

                                )
                        }

                    </div>

            

        </div>
    )
}

export default Certifications
