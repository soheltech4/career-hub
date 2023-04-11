import React, { useEffect, useState } from 'react';
import {useLoaderData, useParams } from 'react-router-dom';

const Jobdetails = () => {
    const {id} = useParams()
    const [Job, setJobs] = useState("")
    useEffect(()=>{
        fetch('/fetatures.json')
        .then(res => res.json())
        .then(data => {
            const All = data.find(d=> d.id ==id)
            setJobs(All)
        })
      },[])
    const {jobDescription, jobResponsibility, educationalRequirements, experiences, jobTitle, salary, contactInformation} = Job
    console.log(Job)
    return (
        <div>
            <h1 className='text-center text-3xl font-semibold mt-10 mb-10'>Job Details</h1>
            <div className='container mx-auto md:flex justify-between p-5'>
                <div className='gap-10'>
                    <h1 className='text-xl mb-3'><span className='text-2xl font-semibold'>Job Description :</span> {jobDescription}</h1>
                    <h1 className='text-xl mb-5'><span className='text-2xl font-semibold'>Job Responsibility :</span> {jobResponsibility}</h1>
                    <h1 className='text-xl mb-5'><span className='text-2xl font-semibold'>Educational Requirements:</span><br /> {educationalRequirements}</h1>
                    <h1 className='text-xl mb-3'><span className='text-2xl font-semibold'>Experiences:</span><br /> {experiences}</h1>
                </div>
                <div>
                <div className='bg-blue-200 rounded p-10'>
                    <h1 className='text-2xl font-semibold mb-5'>Job Details</h1>
                    <h1 className='text-xl mt-3'><span className='text-xl font-semibold'>Salary :</span> {salary}</h1>
                    <h1 className='text-xl mt-3'><span className='text-xl font-semibold'>Job Title :</span> {jobTitle}</h1>

                    <h1 className='text-2xl font-semibold mt-10 mb-5'>Contact Details</h1>
                    <h1 className='text-xl mt-3'><span className='text-xl font-semibold'>Phone:</span> {contactInformation?.phone}</h1>
                    <h1 className='text-xl mt-3'><span className='text-xl font-semibold'>Email:</span> {contactInformation?.email}</h1>
                </div>
                <button className='text-xl mt-5 w-full bg-blue-400 rounded text-white font-semibold p-2 hover:bg-blue-500'>Apply Now</button>
                </div>

            </div>
        </div>
    );
};

export default Jobdetails;