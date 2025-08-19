document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   const btn = document.getElementById('button');

   btn.value = 'Enviando Solicitud...';

   const serviceID = 'default_service';
   const templateID = 'template_8s2b7gk';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Envio Exitoso';
      alert('Mensaje Enviado!');
    }, (err) => {
      btn.value = 'Enviar Solicitud';
      alert(JSON.stringify(err));
    });
});


