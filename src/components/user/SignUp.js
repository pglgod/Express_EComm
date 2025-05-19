import React from 'react'

export default function SignUp() {
  return (
    <div className=' w-full h-auto flex  ' >
      <div className="  w-1/2 ">
        <img className=' ' src={require('../../assets/img/Group 3.png')} alt="" />
      </div>
      <div className=" flex-1 flex items-center justify-center ">

        <div className="">
          <p>Create an account</p>
          <p>Enter your details below</p>

          <form action="" method="post" className=' w-72 flex flex-col gap-2' >
            <div className=" w-full ">
              <input type="text" name='name' placeholder='Name' className=' px-4 py-1 w-full   border-b-2 border-red-500 ' />
            </div>
          </form>

        </div>

      </div>
    </div>
  )
}
