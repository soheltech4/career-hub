import React, { useEffect, useState } from 'react';
import { getAppliedJob } from '../../Utils/fakedb';
import { useLoaderData } from 'react-router-dom';
import JobApplied from '../JobApplied/JobApplied';

const AppliedJobs = () => {
    const Data = useLoaderData()

    const AppliedJob = getAppliedJob()

    let AllAppliedJob = []
    for (const id in AppliedJob){
    const FoundJob = Data.find(Job => Job.id == id)
    if(FoundJob){
        AllAppliedJob.push(FoundJob)
        }
    }

    console.log(Data)

    return (
        <div>
            <h1 className='text-center text-3xl font-semibold mt-10 mb-20'>Applied Jobs</h1>
            <div className='grid gap-10'>
                {
                    AllAppliedJob.map(Job => <JobApplied Job={Job} key={Job.id}></JobApplied>)
                }
            </div>
            
        </div>
    );
};

export default AppliedJobs;