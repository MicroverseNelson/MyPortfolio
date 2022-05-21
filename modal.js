// Modal begin
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}
function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}
openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});
overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});
closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});
const projects = [
  {
    name: 'Multi-Post Stories',
    description: `A daily selection of privately personalized reads; no accounts or
            sign-ups required. has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a standard dummy text..`,
    featuredImage: './images/modalImg.png',
    technology: ['html', 'Bootstrap', 'Ruby on Rails'],
    liveVersion: 'https://microversenelson.github.io/MyPortfolio/',
    sourceCode: 'https://github.com/MicroverseNelson/MyPortfolio',
  },
  {
    name: 'Professional Art Printing Data',
    description: ` A daily selection of privately personalized reads; no accounts or
            sign-ups required. has been the industry's standard`,
    featuredImage: './modal-images/project5.png',
    technology: ['html', 'bootstrap', 'Ruby on Rails'],
    liveVersion: 'https://microversenelson.github.io/MyPortfolio/',
    sourceCode: 'https://github.com/MicroverseNelson/MyPortfolio',
  },
];
const seeProjectBtn = document.querySelectorAll('.cards-btn');
seeProjectBtn.forEach((button, i) => {
  button.addEventListener('click', () => {
    const modalMenu = document.querySelector('.modal');
    const project = projects[i];
    const title = modalMenu.querySelector('.modal h4');
    title.textContent = project.name;
    const description = modalMenu.querySelector('.modal-body');
    description.textContent = project.description;
    const projectImage = modalMenu.querySelector('.modal img');
    projectImage.src = project.featuredImage;
    const liveLink = modalMenu.querySelector('.modal-footer .see-live');
    liveLink.href = project.liveVersion;
    const seeSource = modalMenu.querySelector('.modal-footer .see-source');
    seeSource.href = project.sourceCode;
    const techs = modalMenu.querySelectorAll('.modal-tech-lists');
    techs.forEach((tech, idx) => {
      tech.innerHTML = project.technology[idx];
    });

    modalMenu.classList.add('active');
  });
});

const form = document.querySelector('#my-form');
form.addEventListener('submit', (e) => {
  const email = document.querySelector('#email').value;
  const errorMessage = document.querySelector('.error-msg');
  if (email !== email.toLowerCase()) {
    e.preventDefault();
    errorMessage.style.display = 'flex';
  }
});
// LOCAL STORAGE
let formInfo = {};
function addToLocalStorage() {
  formInfo = {
    fullName: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  localStorage.setItem('FORM_DATA', JSON.stringify(formInfo));
}
function getFromLocalStorage() {
  let data = localStorage.getItem('FORM_DATA');

  if (data) {
    data = JSON.parse(data);
    form.name.value = data.fullName;
    form.email.value = data.email;
    form.message.value = data.message;
  }
}
window.onload = () => {
  form.name.addEventListener('input', addToLocalStorage);
  form.email.addEventListener('input', addToLocalStorage);
  form.message.addEventListener('input', addToLocalStorage);

  getFromLocalStorage();
};
