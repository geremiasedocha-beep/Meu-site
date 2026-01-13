document.addEventListener('DOMContentLoaded', function(){
  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');

  form.addEventListener('submit', function(e){
    e.preventDefault();
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    // Aqui você pode integrar com um backend ou serviço de formulário.
    // Por enquanto apenas simula envio e limpa o formulário.
    status.textContent = 'Enviando...';
    setTimeout(function(){
      status.textContent = 'Mensagem enviada! Obrigado, ' + (name || 'visitante') + '.';
      form.reset();
    }, 800);
  });
});
