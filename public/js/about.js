const newsLatter = document.getElementById('newslatter');

// styling (remove duble border)
newsLatter.parentElement.parentElement.style.borderTop = 'none';

newsLatter.addEventListener('submit', getSubscribe);

function getSubscribe(e) {
    e.preventDefault();
    let email = e.target.email;
    fetch('/subscribe', {
        method: 'POST', 
        body: JSON.stringify({email: email.value}),
        headers: new Headers({
            'Content-Type': 'application/json'
    })}).then((data) => {
        if (data.status == 201) {
            email.value = 'Thanks';
            setTimeout(() => email.value = '', 2500);
            
        } else if (data.status == 406) {
            email.value = 'email is not valid!!!';
            setTimeout(() => email.value = '',  2500);
        }
    }).catch(e => {
       console.log(e);
    });     
};