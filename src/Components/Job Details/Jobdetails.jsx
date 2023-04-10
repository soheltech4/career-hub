import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Jobdetails = () => {
    const dynamic = useParams()
    const [Jobs, setJobs] = useState([])

    useEffect(()=>{
        fetch('/public/fetatures.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])

    console.log(dynamic, Jobs)

    return (
        <div>
            <h1 className='text-center text-2xl font-semibold mt-10'>Job Details</h1>
            
            
        </div>
    );
};

export default Jobdetails;