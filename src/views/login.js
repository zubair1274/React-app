import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Checkbox } from 'semantic-ui-react'
import axios from 'axios';


class Login extends React.Component{
    constructor(props) {
       super(props);
       this.state = {
        logintoken:''
       }
     }
     handlesubmit = (e) => {
       e.preventDefault();
      //  console.log(e.currentTarget.username.value)
      //  console.log(e.currentTarget.password.value)
       axios.post('http://192.168.100.90/login', {
        email:e.currentTarget.username.value,
        password:e.currentTarget.password.value,
        type:'admin'
      })
      .then(function (res) {
        localStorage.setItem('logintoken',res.data.token);
        
     
      })
      .catch(function (error) {
        console.log(error);
      });

       this.setState({
      logintoken:localStorage.getItem('logintoken')
       })
   
       console.log(this.state.logintoken);
       

  //     axios({
  //       method: 'post',
  //       url: 'http://192.168.100.90/login',
  //       data: {
  //         email:'ows@gmail.com',
  //       password:'asdfas'
  //       }
  //     }).then(function (response) {
  //        console.log('Working');
  // console.log(response);
  //     })

      //  this.setState({
      //    username: e.currentTarget.username.value,
      //    password: e.currentTarget.password.value
      //  })
   
      
     }
render(){
  return(
  
    
<div class="ui container">
{
 this.state.logintoken.length > 0  ?
 
<div class="ui green message">Success...</div>:<div class="ui red message">incorrect Password</div>
}
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
     
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='red' textAlign='center'>
          <Image src='/logo192.png' /> Log-in to your account
  </Header>
  
        <Form onSubmit={this.handlesubmit}  size='large' >
          <Segment stacked>
            <Form.Input fluid icon='user' name="username" iconPosition='left' placeholder='E-mail address' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              name="password"
            />
<h1>hghhghghg</h1>
            <Button color='red' fluid size='large'>
              Login
      </Button>

          </Segment>
        </Form>
        <Message>
          <Checkbox label='Remember Me' />
          &nbsp;&nbsp;&nbsp;<a href='#'>Forget Password?</a>
        </Message>
      </Grid.Column>
    </Grid>
  
</div>

)
}
}


export default Login