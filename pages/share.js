import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import {useRouter} from 'next/router' 
import axios from 'axios'


export default function upload(props) {
    const router = useRouter()
    const [url , setUrl] = useState("")
    const baseURL = 'http://localhost:3000/download/'
    const serverBaseUrl = 'http://localhost:5000'
    const [copiedMessage , setCopiedMessage] = useState(false)

    const handleCopyClick = () => { 
        navigator.clipboard.writeText(url)
        setCopiedMessage(true)

        setTimeout(()=>{
        setCopiedMessage(false)
        } , 2000)
    }

    useEffect(() => {
        if(!router.isReady) return;
      const {fileId} = router.query
      const url = baseURL + fileId
        let shorturl ;
      axios({
        method : "post" , 
        url : serverBaseUrl + '/short-url', 
        data : {fullURL : url},
      })
      .then(res=>{
        console.log("res= " , res.data.shortUrl);
        setUrl(serverBaseUrl + '/su/' + res.data.shortUrl)
      })
      .catch(err=>{
        console.log(err.message)
      })
    }, [router.isReady])
    
  return (
    <div className='w-[100%]'>
        <NavBar/>
        <div className='max-w-[1400px] m-auto '>
            <div className='w-[70%] m-auto '>
                <div className='mark h-[280px] m-[20px] p-[20px] rounded-[10px] '> 
                <h1 className='text-[30px] font-seminbold '>File Share</h1>
                <div className='h-[85%] flex justify-center items-center'>
                    <div className='w-[100%] my-auto flex flex-col justify-between items-center  h-[80%] ' > 
                        <h1>Your file  has been uplaoded successfully ! Here is the url !</h1>
                        <div className='form-group w-[90%]  flex justify-between relative'>
                            <label for="url " className='w-[14%] text-[1.2rem] flex items-center '>Url :</label>
                            <input id = "url" name ="url" type="url"  className='w-[85%] border-[2px] border-cyan-200 rounded-[5px] p-[10px]' value={url ? url : ""}/>
                            {url!="" && <button className = "w-[fit-content] absolute right-[0.5rem] top-[0.25rem] border-[2px] rounded-[5px] p-[10px] bg-cyan-200 text-[1rem] font-medium cursor-pointer" onClick={handleCopyClick}> 
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='h-[1rem]'><path d="M21 10v10a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1zM6 14H5V5h9v1a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2z"/></svg>
                            </button>}

                            { copiedMessage && 
                            <div className='bg-cyan-200 w-[fit-content] p-[10px] font-semibold rounded-[10px] absolute bottom-[53px] right-[-0.05rem] '>
                                Copied
                            </div>}
                        </div>
                        
                        <button className='w-[50%] border-[2px] rounded-[5px] p-[10px] bg-cyan-200 text-[1rem] font-medium' onClick={() => router.push('/')}>Share more files</button>
                    </div>

                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
