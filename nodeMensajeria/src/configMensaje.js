const nodemailer = require('nodemailer');

module.exports = (formulario) => {

  const transporter = nodemailer.createTransport({
    port: 25,
    host: "smtp.gmail.com",
    secure: false,
   requireTLS: true,
    service: 'Gmail',
    auth: {
      type: 'OAuth2',
    user: 'depetrinicolas@gmail.com',
    clientId: '285446649062-0dqmulcote5d2gp4or44vqr02bhn2654.apps.googleusercontent.com',
    clientSecret: 'T1l5x9EYanhQ_fUjQJ3Hoy_n',
    refreshToken: '1/jxrvHOjsIAUPl99ctJSlO6LU8XwdJ4IZqXTrpAZU_9g',
    accessToken: 'ya29.GlsfBidjOBUCXmaYOWSsVjRmFlpre-CqTDXxoAJgj8Df6Dy5KurkwimSxtC1iuTKWvYAg7t8vFA3Rm9Y-RFbsHtCQuCrUqocGAuRn7TApnqZJjVPsME5WSuRBsEM',
    },
    tls: {ciphers: "SSLv3"}
  });
  let mailOptions = {
    from: '"Pagina Serviprynt" <depetrnicolas@gmail.com>',
    to: "serviprynt@gmail.com", 
    subject: formulario.firstName,
    html: `
    <strong>Nombre:</strong> ${formulario.firstName} <br/>
    <strong>E-mail:</strong> ${formulario.email}  <br/>
  <strong>Mensaje:</strong> ${formulario.mensaje}
    `
  };

  
  transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
      return console.log(error);
    }
    console.log('Mensaje Enviado Correctamente de ' + formulario.firstName );
  })
} ;  