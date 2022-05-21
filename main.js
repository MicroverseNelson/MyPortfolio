const navlinks = document.querySelector('.nav-links');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');



openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
    navlinks.style.display = 'flex';
    navlinks.style.top = '0';
}

function close(){
    navlinks.style.top = '-100%';
}

document.querySelectorAll('.nav-links').forEach((link)=>{
    link.addEventListener('click', ()=>{
        navlinks.style.top = '-100%';
        
    });
});

/*Form validation begin */

// form validation 
const form=document.querySelector('#my-form');

form.addEventListener('submit', (e)=>{
    const email=document.querySelector('#email').value;
    const error=document.querySelector('#error');
    if (email!== email.toLowerCase()) {
        e.preventDefault();
        error.style.display='block';
    }


});

/*End form validation */

/* user browser storage */

const fullnames=document.querySelector('#fullnames');
const email=document.querySelector('#email');
const message=document.querySelector('#message');

function store(){
let formData={
    'fullnames':fullnames.value,
    'email':email.value,
    'message':message.value
}
localStorage.setItem('form-data',JSON.stringify(formData)); 
}

function retrievedata(){
    let data=localStorage.getItem('form-data');
    if(data){
        fetch=JSON.parse(data);
        fullnames.value = fetch.fullnames;
        email.value = fetch.email;
        message.text = fetch.messsage;
    }
}

window.onload = () => {
    fullnames.addEventListener('input',  store());
    email.addEventListener('input',  store());
    message.addEventListener('input',  store());

    retrievedata();
  };