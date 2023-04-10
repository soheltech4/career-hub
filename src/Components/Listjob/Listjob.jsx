import React from 'react';

const Listjob = ({job}) => {
    const {id, company_logo, company_name, jobs_available} = job
    return (
        <div className='bg-purple-50 border rounded justify-between p-8 text-left hover:border-blue-800 container mx-auto'>
            <img className='w-20 bg-purple-100 border rounded mb-3 p-3' src={company_logo} alt="" />
            <h1 className='text-xl font-semibold'>{company_name}</h1>
            <h1 className='text-lg'>{jobs_available} Jobs Available</h1>
        </div>
    );
};

export default Listjob;