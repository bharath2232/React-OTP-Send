import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import InputAdornment from '@material-ui/core/InputAdornment';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import idGenerator from 'react-id-generator';



const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class SendOtp extends Component {

  state = {
    phoneNo: '',
    age: '',
    multiline: 'Controlled',
    enterOtp: '',
    otp:idGenerator("REACTOTP"),
    verified: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

sendOtpHandler = () => {
console.log('logged',this.state.name)

console.log('otp',this.state.otp);

const params = {
  apikey : 'P+uEzfbqb0I-5LZubEfVBlAa41jcKaE9N7LbHUUM71',
  numbers: '91'+this.state.phoneNo,
  message:'Your OTP is ' + this.state.otp
  }
axios.get('https://api.textlocal.in/send/',{params:params})
  .then( (response)=> {
    console.log(response);
  })
  .catch( (error) => {
    console.log(error);
  });
}
verifiyOtpHandler=()=>{
if(this.state.enterOtp === this.state.otp){
  return this.setState({verified:true});
}
if(this.state.enterOtp !== this.state.otp){
  return this.setState({verified:false});
}
}


  render() {
    const { classes } = this.props;
    return (
      <div style={{margin:250}}>
      <TextField
          id="outlined-name"
          label="Phone Number"
          value={this.state.phoneNo}
          onChange={this.handleChange('phoneNo')}
          margin="normal"
          variant="outlined"
          InputProps={{
            startAdornment: <InputAdornment position="start">+91</InputAdornment>,
          }}
        />  

        <Button style={{margin: 10,marginTop:25}}  variant="contained" onClick={this.sendOtpHandler} color="primary">
       Send otp        
      </Button>

      <TextField
          id="outlined-name"
          label="ENTER OTP"
          value={this.state.enterOtp}
          onChange={this.handleChange('enterOtp')}
          margin="normal"
          variant="outlined"
        />  
        <Button style={{margin: 10,marginTop:25}} variant="contained" onClick={this.verifiyOtpHandler} color="primary">
          Verifiy
      </Button>
      <div>
         <Card className={classes.card}>   
      {this.state.verified === true ? <Typography>OTP Verified </Typography>:<Typography></Typography>}
      {this.state.verified === false ? <Typography>Invalid Otp</Typography>:<Typography></Typography>}


    </Card>
    <Typography>Only Indian Number</Typography>
      </div>
      </div>
     
    );
  }
}

export default withStyles(styles)(SendOtp);
