const form = document.getElementById('message-form');
const success = document.getElementsByClassName('success')[0];
const alert = document.getElementsByClassName('alert')[0];

form.addEventListener('submit', getFormValue);

function getFormValue(e) {
    e.preventDefault()
    const data = {
        name: e.target.name.value,
        topic: e.target.topic.value,
        message: e.target.message.value
    }
        
    fetch('/message', {
        method: 'POST', 
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json'
    })}).then((res) => {
        if (res.status == 201) {
            success.style.display = 'block';
            setTimeout(() => success.style.display = 'none', 3000);
        } else {
            alert.style.display = 'block';
            setTimeout(() => alert.style.display = 'none', 3000);
        };
    }).catch(e => console.log(e));
};
