const otpGenerate = require("../utils/otpGenerator");


// send OTP
const sendOtp = async (req,res) => {
    const {phoneNumber,phoneSuffix,email} = req.body;
    const otp = otpGenerate();
    const expiry = new Date(Date.now())

}