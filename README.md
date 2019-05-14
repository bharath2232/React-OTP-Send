# React OTP  Verification app

One top password verification code app made with react.js and textlocal.com api(sms service provider)

## Working
* Enter any Indian Phone number you have and click on send otp 
* You will receive a text message with a unique code.
* Enter the code and click on Verify 
* If you enter the invalid code  you will get Invalid OTP Error
* if you did not get the OTP check the console log, You will see the OTP and the Json response from the Textlocal api Sms provider
 
![alt text](https://labs.bharath.fr/reactotp.gif)



## Installation

* Clone the GitHub repository [React OTP Verification app](https://github.com/bharath2232/React_Native-France-Shipping/) to local machine or server
```bash
git clone https://github.com/bharath2232/React-OTP-Send
```
* Buy some SMS credits from textlocal.com(they provide SMS service for all over the world)
* Copy the API key from the dashboard textlocal.com

## Usage
* Change the API Key with XXXXXXX in sendOtpHandler() 

```javascript
  sendOtpHandler = () => {
        console.log('logged', this.state.name)

        console.log('otp', this.state.otp);

        const params = {
            apikey: 'XXXXXXXXXXX',
            numbers: '91' + this.state.phoneNo,
            message: 'Your OTP is ' + this.state.otp
        }
        axios.get('https://api.textlocal.in/send/', {params: params})
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
