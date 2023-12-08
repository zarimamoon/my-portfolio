import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
<form method="POST" action="https://getform.io/f/6698a1d1-ff67-4bca-a95b-c41a60a3f0ed" className="flex flex-col max-w-[600px] w-full">
    <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-[#0abab5] text-[#8892b0]">Contact</p>
        <p className="text-[#8892b0] py-4">Submit the form below or shoot me an email - zarima1991@yahoo.com</p>
    </div>
<input className="bg-[#ccd6f6] p-2 rounded-lg" type="text" placeholder="Name" name="name" />
<input className="my-4 p-2 bg-[#ccd6f6] rounded-lg" type="email" placeholder="Email" name="email" />
<textarea className="bg-[#ccd6f6] p-2 rounded-lg" name="message" rows="10" placeholder="Message"></textarea>
<button className="text-white border-2 rounded-lg hover:bg-[#0abab5] hover:border-[#0abab5] px-4 py-3 my-8 mx-auto flex items-center">Let's Collaborate</button>
</form>
    </div>
  )
}

export default Contact