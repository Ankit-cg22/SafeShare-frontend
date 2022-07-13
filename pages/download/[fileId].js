import React , {useState} from 'react'
import NavBar from '../../components/NavBar'
import { useRouter } from 'next/router'

export default function FileDownload() {
    const router = useRouter()
    const baseURL = 'http://localhost:5000/download/'
    const [password , setPassword] = useState("")
    const handleFilePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleDownloadClick =(e) => {
        const {fileId} = router.query
        const url = baseURL + fileId 
        alert(url)
    }

  return (
    <div className='w-[100%]'>
        <NavBar/>
        <div className='max-w-[1400px] m-auto '>
            <div className='w-[70%] m-auto '>
                <div className='mark h-[280px] m-[20px] p-[20px] rounded-[10px] '> 
                <h1 className='text-[30px] font-seminbold '>File Download</h1>
                <div className='h-[85%] flex justify-center items-center'>
                    <div className='w-[90%] my-auto flex flex-col justify-between items-center  h-[60%] ' > 

                         <div className='form-group  w-[90%]  flex justify-between'>
                            <label for="pasword" className='w-[14%] text-[1.2rem] flex items-center '> Password :</label>
                            <input className="w-[85%] border-[2px] border-cyan-200 rounded-[5px] p-[10px]" id = "pasword" name ="pasword" type="pasword"  onChange={(e) => handleFilePassword(e)}/>
                        </div>
                        <button className='w-[90%] border-[2px] rounded-[5px] p-[10px] bg-cyan-200 text-[1rem] font-medium flex justify-between px-[260px] items-center' onClick={(e) => handleDownloadClick(e)}>
                            Download File
                            <svg className="h-[1.2rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path d="m18.294 16.793-5.293 5.293V1h-1v21.086l-5.295-5.294-.707.707L12.501 24l6.5-6.5-.707-.707z"/></svg>    
                        </button>
                    </div>

                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
