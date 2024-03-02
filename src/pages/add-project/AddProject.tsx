import React, { useState } from 'react'

function AddProject() {
    const [projectName, setProjectName] = useState('')
    const [projectDescription, setProjectDescription] = useState('')
    const [projectCategory, setProjectCategory] = useState('' as 'farming' | 'gardening')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
  return (
    <div className='px-8 mt-24'>
        <h1 className='text-2xl mt-8 m-auto'>Add Project</h1>
        <form className='flex flex-col gap-4 w-[60%] p-8 mt-4 m-auto' onSubmit={handleSubmit}>
            <div className='flex gap-2 items-center'>
                <label htmlFor="projectName">Project Title</label>
                <input value={projectName} type="text" id="projectName" name="projectName" className="border border-gray-400 rounded-lg p-2 outline-none" 
                onChange={(e) => setProjectName(e.target.value)}
                />
            </div>
            <div className='flex gap-2'>
                <label htmlFor="projectDescription">Project Description</label>
                <textarea value={projectDescription} id="projectDescription" name="projectDescription" className='border border-gray-400'
                onChange={(e) => setProjectDescription(e.target.value)}
                />
            </div>
            <div className='flex gap-2 items-center'>
                <label htmlFor="projectCategory">Project Category</label>
                <select name="projectCategory" id="projectCategory" className='border border-gray-400 rounded-lg p-2 outline-none'
                    value={projectCategory}
                    onChange={(e) => setProjectCategory(e.target.value as 'farming' | 'gardening')}
                >
                    <option value="farming">Farming</option>
                    <option value="gardening">Gardening</option>
                </select>
            </div>
            <button type="submit" className='bg-gray-200 w-fit'>Add Project</button>
        </form>
    </div>
  )
}

export default AddProject
