import React, { useState, useEffect } from 'react';
import axios from "axios";
import moment from 'moment';

const JobRequestDetails = ({ item, setListVisible, setreloadList }) => {

    let id = localStorage.getItem('user');

    //UPDATE JOB STATUS
    const update = async (url) => {
        let res = await axios.patch(url, { jobStatus: "Hired" });
        return res.data;
    };

    let sendJobStatus = async () => {

        const url = `http://localhost:8000/v1/JobPostRoutes?id=${item._id}`;
        const newData = await update(url);
    };


    //Create hired Helper
    const add = async (url) => {
        let res = await axios.post(url,
            {
                serviceProviderId: id,
                jobId: item._id,
                customerId: item.customerId._id,
                payment: item.Budget,
                startDate: moment(new Date()).format('L'),
            }
        );
        return res.data;
    };

    let addHiredJob = async () => {

        const url = `http://localhost:8000/v1/HiredJobs`;
        const newData = await add(url);

    };
    const arr = item.skills.map(x => x);

    return (


        // des
        <div style={{ width: "100%", minHeight: '300px' }}>
            <div style={{ width: "100%", minHeight: '200px', backgroundColor: "lightblue" }}>
                

                <div style={{
                    padding: "2%",
                    backgroundColor: "#fff",
                    height: "100%",
                    border: "1px solid transparent",
                    WebkitBoxShadow: "0 1px 1px rgb(0 0 0 / 5%)",
                    display: "flex",
                    flexDirection: "column"

                }}>

                    <div style={{
                        padding: "2%",
                        fontWeight: "300px",
                        marginBottom: "20px",
                        borderTop: "5px solid var(--main-yellow-color)",
                        backgroundColor: "#fff",
                        color: "black"

                    }}>
                        <div style={{ display: "inline-flex", justifyContent: "space-between", width: "100%" }}>


                            <h1 style={{
                                fontSize: "22px",
                                fontWeight: 600,
                                margin: "0 0 20px",
                                fontFamily: "Roboto ,serif",
                                color: "#2575c0"

                            }}>
                                Job Detail

                            </h1>

                            <button onClick={() => { setListVisible(true); }} style={{
                                width: "80px",
                                height: '40px',
                                fontSize: '15px',
                                borderRadius: '10px',
                                backgroundColor: '#2575c0',
                                border: "none",
                                color: '#ffffff',
                                alignSelf: "flex-end"
                            }}> Back </button>

                        </div>

                        <div className="row" style={{ paddingLeft: "20%" }}>
                            <div style={{
                                width: "50%",
                                float: "left",
                                marginBottom: "10px",
                                padding: "0px 15px"
                            }}>
                                <p style={{
                                    fontSize: "16px"
                                }}><span style={{
                                    width: "100px",
                                    display: "inline-block",
                                    fontSize: "16px"
                                }}>
                                        Job title
                                    </span>
                                    :{item.title}
                                </p>
                            </div>
                            <div style={{
                                width: "50%",
                                float: "left",
                                marginBottom: "10px",
                                padding: "0 15px"
                            }}>
                                <p style={{
                                    fontSize: "16px"
                                }}><span style={{
                                    width: "100px",
                                    display: "inline-block",
                                    fontSize: "16px"
                                }}>
                                        Type
                                    </span>
                                    : {item.jobType}</p>
                            </div>
                            <div style={{
                                width: "50%",
                                float: "left",
                                marginBottom: "10px",
                                padding: "0 15px"
                            }}>
                                <p style={{
                                    fontSize: "16px"
                                }}><span style={{
                                    width: "100px",
                                    display: "inline-block",
                                    fontSize: "16px"
                                }}>
                                        Posted by
                                    </span>
                                    : {item.customerId.first_name.capitalize()} {item.customerId.last_name.capitalize()}</p>
                            </div>
                            <div style={{
                                width: "50%",
                                float: "left",
                                marginBottom: "10px",
                                padding: "0 15px"
                            }}>
                                <p style={{
                                    fontSize: "16px"
                                }}><span style={{
                                    width: "100px",
                                    display: "inline-block",
                                    fontSize: "16px"
                                }}>
                                        Started date
                                    </span>
                                    : {moment(item.createdAt).format("LL")} </p>
                            </div>
                            <div style={{
                                width: "50%",
                                float: "left",
                                marginBottom: "10px",
                                padding: "0 15px"
                            }}>
                                <p style={{
                                    fontSize: "16px"
                                }}><span style={{
                                    width: "100px",
                                    display: "inline-block",
                                    fontSize: "16px"
                                }}>
                                        Budget
                                    </span>
                                    : {item.Budget}</p>
                            </div>
                            <div style={{
                                width: "50%",
                                float: "left",
                                marginBottom: "10px",
                                padding: "0 15px"
                            }}>
                                <p style={{
                                    fontSize: "16px"
                                }}><span style={{
                                    width: "100px",
                                    display: "inline-block",
                                    fontSize: "16px"
                                }}>
                                        Status
                                    </span>
                                    : {item.jobStatus}</p>
                            </div>
                            <div style={{
                                width: "50%",
                                float: "left",
                                marginBottom: "10px",
                                padding: "0 15px"
                            }}>
                                <p style={{
                                    fontSize: "16px"
                                }}><span style={{
                                    width: "100px",
                                    display: "inline-block",
                                    fontSize: "16px"
                                }}>
                                        Required skills
                                    </span>
                                    : {arr.map(x => x + " , ")}</p>
                            </div>
                        </div>
                        <div><h1 style={{
                            fontSize: "16px",
                            margin: "0 0 20px",
                            fontWeight: "bold"

                        }}>
                            Job Description:

                        </h1>
                            <p ><span style={{
                                width: "90%",
                                height: "200px",
                                display: "inline-block",
                                fontSize: "16px",

                                borderRadius: "5px",
                                marginLeft: "5%",
                            }}>
                                {item.Description}
                            </span>
                            </p>
                        </div>
                    </div>
                    <button onClick={() => {
                        sendJobStatus();
                        addHiredJob();
                        setListVisible(true);
                        setreloadList();
                    }} style={{
                        width: "140px",
                        height: '40px',
                        fontSize: '15px',
                        borderRadius: '10px',
                        backgroundColor: '#2575c0',
                        border: "none",
                        color: '#ffffff',
                        alignSelf: "center"
                    }}>
                        Accept Job </button>

                </div>





            </div>
        </div>
    )
}


export default JobRequestDetails
