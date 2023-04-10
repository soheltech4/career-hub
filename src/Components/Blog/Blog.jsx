import React from 'react';

const Blog = () => {
    return (
        <div className='p-5'>
            <div className='bg-blue-100 container mx-auto p-10 mt-10 rounded'>
            <h1 className='bg-blue-500 text-2xl p-3 border rounded text-white'>When should you use context API?</h1>
            <p className='text-xl p-5 mb-5'>Many times it is seen that the data has to be passed from the parent component to other components. To pass this data from parent to other parent. To make it very easy the person passing the buck sets up an antenna that anyone can receive.</p>

            <h1 className='bg-blue-500 text-2xl p-3 border rounded text-white'>What is a custom hook?</h1>
            <p className='text-xl p-5 mb-5'>Custom Hooks The hooks that are written in the React functional component are called custom hooks. These hooks allow users to write their own custom logic. These hooks act as a reusable component and do not have to repeat the code in each component to perform the same task again.</p>

            <h1 className='bg-blue-500 text-2xl p-3 border rounded text-white'>What is useRef?</h1>
            <p className='text-xl p-5 mb-5'>useRef is a React hook. It is used to give a reference. It works with references, which are not related to a specific DOM node.</p>

            <h1 className='bg-blue-500 text-2xl p-3 border rounded text-white'>What is useMemo?</h1>
            <p className='text-xl p-5 mb-5'>useMemo is a React hook that implements memorization. It returns the previous value without creating a new value during component rendering. It is not changing during repetition.</p>
        </div>
        </div>
    );
};

export default Blog;