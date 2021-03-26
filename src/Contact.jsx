import React, { useState } from 'react';

const Contact=()=>{

    //useState here
    const [data,setData]=useState({
        fullname:'',
        phone:'',
        email:'',
        msg:''
    });

    const InputEvent=(event)=>{
        const{name,value}=event.target;
        //setdata with the help of previos value
        setData((preval)=>{
            return{
                ...preval,
                [name]:value,
                
            }
        })
    }
    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`Hello ${data.fullname}.\nYour Number is: ${data.phone} \nYour email id id ${data.email}.\nThanks for your message which is : ${data.msg}`);

    };

    return (
        <>
        <div className="my-5">
            <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={formSubmit}>
                    <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Full Name"  name="fullname"  value={data.fullname}  onChange={InputEvent}  
                    //Value taken fo useState
                       />

                    </div>
                    <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Contact Number</label>
                    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Mobile Number" name="phone"  value={data.phone}  onChange={InputEvent}/>
                    </div>
                    <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email"  value={data.email}  onChange={InputEvent}/>
                    </div>
                    <div class="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg"  value={data.msg}  onChange={InputEvent}></textarea>
                    </div>
                    <div class="col-12">
                    <button class="btn btn-outline-primary" type="submit">Submit form</button>
                    </div>
                 </form>
                </div>
            </div>

        </div>
        </>
    );
};

export default Contact;