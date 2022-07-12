
import Image from 'next/image'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'
import {useRouter} from 'next/router' 

export default function Home() {
  const router = useRouter()
  return (
  <div className='w-[100%]'>

    <NavBar/>

    <div  className='w-[100%] max-w-[1400px] m-auto h-[100vh] flex '>
      <div className='w-[30%] mark px-[15px] py-[20px]'>
        <h1 className='text-[20px] font-[400]'>Welcome to SafeShare</h1>
        <h1 className='mb-[10px]'>This platform provides you with service to share all types of files protected by a password .</h1>

        <h1 className='mb-[10px]'><span className='text-[20px] font-[400]'>Step 1 :</span> Upload your file</h1>
        <h1 className='mb-[10px]'><span className='text-[20px] font-[400]'>Step 2 :</span> Set a password ! You can choose not to but we recommend to do so . You can use our password generator to generate a safe password .</h1>
        <h1 className='mb-[10px]'><span className='text-[20px] font-[400]'>Step 3 :</span> You receive a shortened URL . Share the password and url with whoever you want to share the file with.</h1>
        
      </div>

      <div className='w-[70%]  '>
        <div className='mark h-[280px] m-[20px] p-[20px] rounded-[10px] '> 
          <h1 className='text-[30px] font-seminbold '>File Upload</h1>
          <div className='h-[85%] flex justify-center items-center'>
              <div className='w-[100%] my-auto flex flex-col justify-between items-center  h-[80%] ' > 
                <div className='form-group w-[90%]  flex justify-between'>
                  <label for="file " className='w-[14%] text-[1.2rem] flex items-center '>File : </label>
                  <input id = "file" name ="file" type="file"  className='w-[85%] '/>
                </div>
                <div className='form-group  w-[90%]  flex justify-between'>
                  <label for="pasword" className='w-[14%] text-[1.2rem] flex items-center '> Password :</label>
                  <input className="w-[85%] border-[2px] border-cyan-200 rounded-[5px] p-[10px]" id = "pasword" name ="pasword" type="pasword" />
                </div>

                <button className='w-[90%] border-[2px] rounded-[5px] p-[10px] bg-cyan-200 text-[1rem] font-medium' onClick={() => router.push('/share')}>Share</button>
              </div>

          </div>
        </div>
        <div className='mark h-[250px] m-[20px] p-[20px] rounded-[10px]'>
          <h1 className='text-[30px] font-seminbold '>Password Generator</h1>
          <div className='flex justify-center items-center h-[90%]'>
            <div className='w-full flex flex-col justify-between items-center h-[63%] my-auto '>
                <input className='w-[90%] border-[2px] border-cyan-200 rounded-[5px] p-[10px]'/>
                <button className='w-[90%] border-[2px] rounded-[5px] p-[10px] bg-cyan-200 text-[1rem] font-medium'>Generate Password</button>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
   
  )
}
