import React from 'react'
import Input from '../utils/Input'
import SelectInput from '../utils/SelectInput'
import "../assets/style/addemployee.css"

export default function AddEmployee() {

    const options1 = ["HR", "Manager", "Sales"];
    const options2 = ["Male", "Female"];
    const options3 = ["BCA", "MCA", "BSC"];
    

  return (
    <div class="login-form1">
    <form action="" method="post">
        <h2 class="text-center">Add Employee</h2>       
        <div class="form-group">
           <Input data={{type: 'text', name:'Enter your name', required:'required'}} />
        </div>
        <div class="form-group">
            <Input data={{type: 'email', name:'Enter your email', required:'required'}} />
        </div>
        <div class="form-group">
            <Input data={{type: 'mobile', name:'Enter your number', required:''}} />
        </div>
        <div class="form-group">
            <SelectInput options={options1} />
        </div>
        <div class="form-group">
            <SelectInput options={options2} />
        </div>
        <div class="form-group">
            <SelectInput options={options3} />
        </div>
        <div class="form-group">
            <Input data={{type: 'file', name:'Img Upload', required:'required'}} />
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block">Log in</button>
        </div>
        <div class="clearfix">
            <label class="float-left form-check-label px-2"><input type="checkbox" /> Remember me</label>
            <a href="#" class="float-right">Forgot Password?</a>
        </div>        
    </form>
    <p class="text-center"><a href="#">Create an Account</a></p>
</div>
  )
}
