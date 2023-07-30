// Função para criar um efeito de rolagem suave ao clicar nos links do menu de navegação
const linksNavegacao = document.querySelectorAll('nav a');

function rolagemSuave(event) {
  event.preventDefault();
  const destino = document.querySelector(event.target.hash);
  destino.scrollIntoView({ behavior: 'smooth' });
}

linksNavegacao.forEach(link => {
  link.addEventListener('click', rolagemSuave);
});

// Função para exibir um menu de navegação responsivo em telas menores
const btnMenu = document.querySelector('.btn-menu');
const navMenu = document.querySelector('nav ul');

function mostrarMenu() {
  navMenu.classList.toggle('show');
}

btnMenu.addEventListener('click', mostrarMenu);

// Função para validar o formulário de contato
const formulario = document.getElementById('formulario');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const mensagemInput = document.getElementById('mensagem');

function exibirMensagemSucesso() {
    const mensagemSucesso = document.createElement('div');
    mensagemSucesso.classList.add('mensagem-sucesso');
    mensagemSucesso.textContent = 'Mensagem enviada com sucesso!';
    formulario.appendChild(mensagemSucesso);

    setTimeout(() => {
        mensagemSucesso.remove();
    }, 3000);
}

function validarFormulario(event) {
    event.preventDefault();

    if (nomeInput.value.trim() === '' || emailInput.value.trim() === '' || mensagemInput.value.trim() === '') {
        alert('Por favor, preencha todos os campos do formulário.');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }

    exibirMensagemSucesso();
    formulario.reset();
}

formulario.addEventListener('submit', validarFormulario);
