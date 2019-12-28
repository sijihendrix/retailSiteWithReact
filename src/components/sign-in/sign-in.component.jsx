import React from "react";

import "./sign-in.styles.scss";

import FormInput from "../form-input/form-input.component";

import CustomButton from "../custom-button/custom-button.component";

import {auth, SignInWithGoogle} from "../../firebase/firebase.utils";

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: ""
        }

    }

    handleSubmit = async e =>{
        e.preventDefault();
       const {email, password } = this.state;
       try{
           await auth.signInWithEmailAndPassword();
           this.setState({email:"",password:""});
       }catch(error){
           console.log(error);
           
       }

        this.setState({email:"", password:""});
    }

    handleChange = (e) =>{
        const {value , name } = e.target;
        this.setState({[name]: value});
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account.</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}> 
                    <FormInput 
                    type="email" 
                    name="email" 
                    value={this.state.email} 
                    handleChange={this.handleChange} 
                    label ="email"
                    required />

              

                    <FormInput 
                    type="password" 
                    name="password" 
                    value={this.state.password} 
                    handleChange={this.handleChange} 
                    label ="password"
                    required/>

            <div className="buttons">
              <CustomButton type="submit" value="Submit form"> SIGN IN</CustomButton>

                    <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>
                    {" "} SIGN IN With Google
                    {" "}
                    
                    </CustomButton>
            </div>
           
                </form>

            </div>
        )
    }

};

export default SignIn;