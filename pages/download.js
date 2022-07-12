import React from 'react'
import NavBar from '../components/NavBar'
import {useRouter} from 'next/router' 
export default function upload() {
    const router = useRouter()
  return (
    <div className='w-[100%]'>
        <NavBar/>
        <div className="max-w-[1400px] m-auto">
            <div className='w-[70%] m-auto '>
                <div className='mark h-[280px] m-[20px] p-[20px] rounded-[10px] '>
                <h1 className='text-[30px] font-seminbold '>File Download</h1>
                <div className='h-[85%] flex justify-center items-center'>
                    <div className='w-[100%] my-auto flex flex-col justify-between items-center  h-[80%] ' >
                        <h1>Your file is ready to be downloaded !</h1>
                        <div className='form-group  w-[90%]  flex justify-between'>
                            <label for="pasword" className='w-[14%] text-[1.2rem] flex items-center '> Password :</label>
                            <input className="w-[85%] border-[2px] border-cyan-200 rounded-[5px] p-[10px]" id = "pasword" name ="pasword" type="pasword" />
                        </div>
                        <button className='w-[90%] border-[2px] rounded-[5px] p-[10px] bg-cyan-200 text-[1rem] font-medium' onClick={() => router.push('/')}>Download</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
