function SendMail() {
  let = params = {
    from_name: document.getElementById('inpName').value,
    from_phone: document.getElementById('inpPhone').value,
    from_email: document.getElementById('inpEmail').value,
  };

  emailjs
    .send('service_hezibfo', 'template_29h2bag', params)
    .then(function (res) {
      alert('Спасибо! форма успешно отправлена =) ' + res.status);
    });
}
