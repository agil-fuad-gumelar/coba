import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="bg-amber-500 pt-20 relative w-full h-screen ">
            <div className="bg-white flex flex-col justify-items-center w-8/12 h-[80vh] mx-auto rounded-3xl">
                <h1 className="text-4xl text-center pt-10">Registration</h1>
                <h4 className="text-center text-lg">isi daftar diri anda</h4>
                <div className="grid mx-16 justify-items-center grid-cols-2 gap-2">
                    <div className="flex-col flex ">
                        <label className="text-left " htmlFor="name">Name</label>
                        <input type="text" id="name" className="border-2 border-black rounded-lg w-12/12"/>
                        <p className="text-grey-500 text-left ">First Name</p>
                    </div>
                    <div className="flex-col-reverse flex">
                        <p className="text-grey-500 text-left ">Last Name</p>
                        <input type="text" id="lastName" className="border-2 border-black rounded-lg w-8/12"/>
                    </div>
                    <div className="flex-col flex ">
                        <label className="text-left " htmlFor="name">Name</label>
                        <input type="text" id="name" className="border-2 border-black rounded-lg w-12/12"/>
                        <p className="text-grey-500 text-left ">First Name</p>
                    </div>
                    <div className="flex-col-reverse flex">
                        <p className="text-grey-500 text-left ">Last Name</p>
                        <input type="text" id="lastName" className="border-2 border-black rounded-lg w-8/12"/>
                    </div>
                    <div className="flex-col flex ">
                        <label className="text-left " htmlFor="name">Name</label>
                        <input type="text" id="name" className="border-2 border-black rounded-lg w-12/12"/>
                        <p className="text-grey-500 text-left ">First Name</p>
                    </div>
                    <div className="flex-col-reverse flex">
                        <p className="text-grey-500 text-left ">Last Name</p>
                        <input type="text" id="lastName" className="border-2 border-black rounded-lg w-8/12"/>
                    </div>
                </div>
                <button className="bg-blue-500 mx-auto text-white w-8/12 rounded-lg py-2 mt-10">Submit</button>
            </div>
        </div>
    </div>
  );
}

export default App;
