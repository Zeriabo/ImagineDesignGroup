const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const formidable = require('formidable');
const fileUpload = require('express-fileupload');
const cors = require('cors');
var multer = require('multer');
var fs = require('fs');
const { join } = require('path');
const path = require('path');
const { notDeepStrictEqual } = require('assert');
const app = express();
const port = 4444;
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json({ limit: '50mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true ,parameterLimit: 1000000}))
app.use(cors());
app.listen(port, () => {console.log('We are live on port 4444');});
app.use(fileUpload());
app.get('/', (req, res) => {res.send('Welcome to my api');})

const DIR = './uploads/';

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, DIR);
    },

    // By default, multer removes file extensions so let's add them back
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
/***
 *  Change Files Objects to array of Objects which are the files
 */
function makeArray(files) 
{
    var ar = [];
    for (const [key, value] of Object.entries(files)) {
        value.encoding = 'base64'
        value.content = value.data
        value.contentType  = value.mimetype
        value.mv(`${__dirname}/uploads/${value.name}`, function (err) {
            if (err) {
                console.log(err)
                
            }
            
            // returing the response with file path and name
            console.log("Done")
        });
        
        ar.push(value)
      }
  console.log("ar",ar)
  return ar
}




app.post('/contact', (req, res) => {
   

    var data = req;
  
    // var smtpTransport = nodemailer.createTransport(
    //     {service: 'Gmail',port: 587,auth: {user:" zeriab.chiah@gmail.com",pass: "YourwordsR=Lies244"}});
    // var mailOptions = {
    //     from: data.email,replyto: data.email,to: 'zeriab@hotmail.com',
    // subject:'A Message from Creative Design',
    // attachments: [{filename: data.title + ".jpg",contentType:  'image/jpeg',
    // content: new Buffer.from(req.body.image.split("base64,")[1], "base64"),}]};
    // smtpTransport.sendMail(mailOptions,(error, response) => 
    // {
    //     if (error) {res.status(400).send(error)
    //     console.log(error)}
    //      else {res.send('Success')}smtpTransport.close();});
})

app.post('/uploads', (req, res) => 
{

/***
 * req body {
  Name: 'Zeriab Chiah',
  Email: 'Zeriab@hotmail.com',
  color0: '#514f4f',
  color1: '#b8e986',
  color2: '#50e3c2',
  color3: '#4a90e2',
  color4: '#f5a623',
  Theme: 'New Classic',
  AdditionalInfo: 'bla bla '
}

 */
let name, email,theme,info = '';
let colors=[];
name = req.body.Name
email = req.body.Email
theme = req.body.Theme
info = req.body.AdditionalInfo
colors.push(req.body.color0)
colors.push(req.body.color1)
colors.push(req.body.color2)
colors.push(req.body.color3)
colors.push(req.body.color4)


    var arrayFiles = makeArray(req.files)
    var upload = multer({ storage: storage }).array('arrayFiles')
    // First the files must be moved to public folder then send 
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
 
   return res.status(200).send(arrayFiles)

 })
 

    var smtpTransport = nodemailer.createTransport({service: 'Gmail',port: 465,auth:
 {user: 'zeriab.chiah@gmail.com',pass: "YourwordsR=Lies244"}});
var mailOptions = 
{from: req.body.Email,replyto: req.body.Email,to: 'zeriab@hotmail.com',
subject: "A Message from Creative Group",
html: `<p>This request has been made on Creative Design Website from ${name}</p>
<p>Email: ${email}</p>
<p>Additional Informations: ${info}</p>
<p>Theme: ${theme}</p>
<br />
<table border ='1'>
<tr><th colspan='2'> Colors </th></tr>
<tr><td>Color 1: </td> <td>${colors[0]}</td></tr>
<tr><td>Color 2: </td> <td>${colors[1]}</td></tr>
<tr><td>Color 3: </td> <td>${colors[2]}</td></tr>
<tr><td>Color 4: </td> <td>${colors[3]}</td></tr>
<tr><td>Color 5: </td> <td>${colors[4]}</td></tr>

</table>


`,
attachments: arrayFiles,

};
smtpTransport.sendMail(mailOptions,(error, response) => {
    if (error) {console.log(error)} 
else {res.send('Success')}smtpTransport.close();});

})

// file upload api
app.post('/upload', (req, res) => {    if (!req.files) {
    return res.status(500).send({ msg: "file is not found" })
}
    // accessing the file
const myFile = req.files.file;    //  mv() method places the file inside public directory
myFile.mv(`${__dirname}/uploads/${myFile.name}`, function (err) {
    if (err) {
        console.log(err)
        return res.status(500).send({ msg: "Error occured" });
    }
    // returing the response with file path and name
    return res.send({name: myFile.name, path: `/${myFile.name}`});
});
})
