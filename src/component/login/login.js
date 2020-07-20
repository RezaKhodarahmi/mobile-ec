import React, { Component } from "react";
import styled from "styled-components";
import './login.css';

import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context";


export default class Login extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
         
         const {loginClose,openLogin } = value;
        
         if (!openLogin) {
           return null;
         } else {
           return (
              <LoginContainer>
                
                <div className="login-wrap">
                  
	<div className="login-html">
  <button className="btn btn-danger close  btn-lg" onClick={()=>value.closeLogin()}>&times;</button>
		<input id="tab-1" type="radio" name="tab" className="sign-in"  checked /><label for="tab-1" className="tab" >Sign In</label>
		<input id="tab-2" type="radio" name="tab" className="sign-up" /><label for="tab-2" className="tab" >Sign Up</label>
		<div className="login-form">
			<div className="sign-in-htm">
				<div className="group">
					<label for="user" className="label">Username</label>
					<input id="user" type="text" className="input" />
				</div>
				<div className="group">
					<label for="pass" className="label">Password</label>
					<input id="pass" type="password" className="input" data-type="password" />
				</div>
				<div className="group">
					<input id="check" type="checkbox" className="check" checked />
					<label for="check"><span className="icon"></span> Keep me Signed in</label>
				</div>
				<div class="group">
					<input type="submit" className="button" value="Sign In" onClick={()=>value.closeLogin()} />
				</div>
				<div className="hr"></div>
				<div className="foot-lnk">
					<a href="#forgot">Forgot Password?</a>
					

				</div>
			</div>
			
		</div>
	</div>
</div>
              </LoginContainer>
               );
              }
            }}
              </ProductConsumer>
    );
  }
}

const LoginContainer = styled.div`
  position: fixed;
  top: 3rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  align-content: center;
  z-index:10;
  #modal {
    background-color: var(--mainWhite);
  }
  .close{
position:static;
top:0;
left:0;
  }
  
`;
