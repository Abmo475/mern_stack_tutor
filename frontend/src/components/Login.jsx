
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from "react";
import axios from 'axios';
const Login=()=>{
    const [email,setEmail]=useState();
    const [pass,setPass]=useState();
    const sendData=async()=>{
        try{
        const config={
            "Content-Type":"application/json"
        }
    const {data}=await axios.post("http://localhost:4001/login",{email,pass},config)
    console.log(data.success)
        }catch(error){
            alert(error)
        }
    }
    return (
        <div className="login mx-auto">
        <Form > 
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={e=>setEmail(e.target.value)} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={e=>setPass(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="button" onClick={sendData}>  
            Submit
          </Button>

        </Form>
        </div>
      );
    }
export default Login;



 
 