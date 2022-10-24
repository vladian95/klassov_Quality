function SendMail() {
  let = params = {
    from_name: document.getElementById('inpName').value,
    email_id: document.getElementById('emailId').value,
    message: document.getElementById('message').value,
  };

  emailjs
    .send('service_4pk5vtu', 'template_9tzjkpt', params)
    .then(function (res) {
      alert('success ' + res.status);
    });
}
