import React from 'react';
import { PieChart, Pie, Tooltip} from 'recharts';

const Statistics = () => {
    const data = [
        {name : "Assignment-1", value: 60},
        {name : "Assignment-2", value: 58},
        {name : "Assignment-3", value: 57},
        {name : "Assignment-4", value: 60},
        {name : "Assignment-5", value: 60},
        {name : "Assignment-6", value: 48},
        {name : "Assignment-7", value: 60},
        {name : "Assignment-8", value: 60},
    ]
      
    return (
        <div className='container mx-auto text-center'>
            <h1 className='text-2xl font-semibold'>My Assigment Result Pie Chart</h1>
            <PieChart width={1500} height={500}>
            <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>      
        </div>
    );
};

export default Statistics;