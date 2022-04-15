

// const smtpTrans = createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     auth: {
//         user: 'jimmyknigth@gmail.com',
//         pass: 'Jimmy@2001',
//     },
//     tls: {
//         // do not fail on invalid certs
//         rejectUnauthorized: false,
//     },
// });
// //Attempt to send the mail
// smtpTrans.sendMail(mailOptions, (err, res) => {
//     err ? console.log(err) : console.log('success');
// });


// // export default SendMailToClient;

// export default smtpTrans

// const finalNames = names.filter((name) => name.length !== 0);
		// const members = finalNames.map((name) => '<br />' + name).join(',');
		// // window.Email.send({
		// // 	Host: 'smtp.elasticemail.com',
		// // 	port: 2525,
		// // 	Username: 'jimmyknigth@gmail.com',
		// // 	Password: '2ACC5EF9BE423D405953ADBA2305D3FEF5BB',
		// // 	To: 'nehalughade1221@gmail.com',
		// // 	From: 'jimmyknigth@gmail.com',
		// // 	Subject: `Confirmation of your trip to ${data.city.toUpperCase()} `,
		// // 	Body: Message,
		// // }).then((message) => console.log(message));
		// //Instantiate the SMTP server