import React from 'react'
import { latestProjects } from '../data/data'

const PreviousProjects = () => {
  return (
    <>
    
    <div className='max-w-6xl mx-auto'>
        <div className='text-center'>
            <h2 className='text-4xl font-bold my-6'>Previous Projects</h2>
            <p className='text-gray-600 mt-2'>Here are some of our previous projects</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 '>
            {latestProjects.map((project) => (
                <div className='border-1 rounded-sm px-4 my-6' key={project.id}>
                    <img src={project.image} alt={project.title} className='w-full h-48 object-cover' />
                    <h3 className='text-xl font-bold'>{project.title}</h3>
                    <p className='text-gray-600'>{project.description}</p>
                </div>
            ))}
        </div>

        </div>
    
    
    
    
    </>
  )
}

export default PreviousProjects