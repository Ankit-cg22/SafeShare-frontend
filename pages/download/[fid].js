import React , {useEffect, useState} from 'react'
import NavBar from '../../components/NavBar'
import { useRouter } from 'next/router'
import axios from 'axios'
import CircularLoader from '../../components/CircularLoader'
var fileDownload = require('js-file-download');
import { baseServerUrl } from '../../utils/constants'

export default function FileDownload(props) {
    const router = useRouter()
    const baseURL = baseServerUrl + '/download/'
    const [fileId, setFileId] = useState()
    const [password , setPassword] = useState("")
    const [passwordNeeded , setPasswordNeeded] = useState(false)
    const handleFilePassword = (e) => {
        setPassword(e.target.value)
    }
    const [fileName , setFileName] = useState()
    const [errorMessage , setErrorMessge] = useState("");
    const [loading , setLoading] = useState(false)

    const handleDownloadClick =(e) => {
        e.preventDefault()
        const formData = {password : password}
        const url =  baseURL + fileId
        console.log(formData)
        setLoading(true)
        axios.post(url, {
            password: password,
            responseType: "blob"
        })
        .then((response) => {
            setLoading(false)
            // console.log(response.data);

            if(response.data.message)
            {
                setErrorMessge(response.data.message)
            }
            else {
                setLoading(false)
                setErrorMessge("")
                fileDownload(response.data , fileName )
            }
        });
    }

    useEffect(()=>{
        if(!router.isReady) return;
        const fid = router.query.fid
        const url = baseServerUrl + "/file/" + fid 
        setFileId(fid)
        axios({
            method : "get",
            url : url ,
        })
        .then(res=>{
            const passwordNeeded = res.data.passwordNeeded
            setPasswordNeeded(passwordNeeded)
            setFileName(res.data.originalName)
        })
        .catch(err=>{
            console.log(err.message)
        })
    } ,[router.isReady])

  return (
    <div className='w-[100%] '>
        <NavBar/>
        <div className='max-w-[1400px] m-auto w-[100%] '>
            <div className='w-[70%] m-auto mainBox  '>
                <div className='mark h-[fit-content] min-h-[280px] m-[20px] p-[20px] rounded-[10px] '> 
                <h1 className='text-[30px] font-seminbold mb-[20px]'>File Download</h1>
                <div className='h-[100%] flex justify-center items-center mb-[20px]  my-auto '>
                    <div className='w-[100%] my-auto flex flex-col justify-between items-center  min-h-[120px] ' > 

                        {passwordNeeded && 
                        <div className='form-group  w-[90%]  flex justify-between  flex-col md:flex-row mb-[10px] md:mb-[0px]' >
                            <label htmlFor="pasword" className='md:w-[15%] text-[1.2rem] flex items-center w-[50%] '> Password :</label>
                            <input className=" w-[100%] md:w-[84%] border-[2px] border-cyan-200 rounded-[5px] p-[10px]" id = "pasword" name ="pasword" type="pasword"  onChange={(e) => handleFilePassword(e)}/>
                        </div>}
                        <button className='w-[90%] border-[2px] rounded-[5px] p-[10px] bg-cyan-200 text-[1rem] font-medium flex justify-center items-center' onClick={(e) => handleDownloadClick(e)}>
                            {loading ? 
                                <CircularLoader/>
                            :
                                <div className='flex justify-between items-center'>
                                <p>Download File</p>
                                <svg className="h-[1.2rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path d="m18.294 16.793-5.293 5.293V1h-1v21.086l-5.295-5.294-.707.707L12.501 24l6.5-6.5-.707-.707z"/></svg>    
                                </div>
                            }   
                        </button>

                        
                    </div>

                </div>
                   {errorMessage!="" && 
                    <div className='bg-red-300 width-[90%] flex justify-center items-center rounded-[10px] p-[20px] mt-[10px]'>
                        {errorMessage}
                    </div>}
                </div>
            </div>
        </div>
    </div>
  )
}
