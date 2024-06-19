import brevo from "@getbrevo/brevo";

const apiInstance = new brevo.TransactionalEmailsApi();

apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY
);

async function sendEmail() {

    try {
        const sendSmtpEmail = new brevo.SendSmtpEmail();

        sendSmtpEmail.subject = "Hello, World!";
        sendSmtpEmail.to = [
          { email: "infinitygoat.en@gmail.com", name: "Infinity xD" },
        ];
        sendSmtpEmail.htmlContent =
          "<html><body><h1>Hello, world!</h1><p>This is a test email</p><a href='https://github.com/SkivaDev'>Go to my repository</a></body></html>";
      
        sendSmtpEmail.sender = {
          name: "SkivaDev",
          email: "fabrizioortizo.main@gmail.com",
        };
      
        const result = await apiInstance.sendTransacEmail(sendSmtpEmail);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

sendEmail();
