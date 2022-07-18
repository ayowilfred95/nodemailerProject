const nodemailer = require('nodemailer')


const transport = nodemailer.createTransport(
    {
    service:'gmail',
    auth:{
        user:'ayowilfred1995@gmail.com',
        pass:'yqtykyfydvaurfrk'
        }
    }
);

// send out email

const mailOptions = {
    from:'ayowilfred1995@gmail.com',
    to:'ayomidewilfred1995@gmail.com',
    subject:'Recruitment',
    text:'Dear wilfred. I am pleased to inform you that you have successfully passed our interview process and you have been shortlisted as one of the best candidate for this position'
};

transport.sendMail(mailOptions, function(error,info){
    if(error){
        console.log(error);
    }else{
        console.log("Email sent" + info.response);
    }
});