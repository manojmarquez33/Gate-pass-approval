const form = document.querySelector('#leave-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const name = document.querySelector('#name').value;
    const roll = document.querySelector('#roll').value;
    const date = document.querySelector('#date').value;
    const time = document.querySelector('#time').value;
    const chairperson = document.querySelector('#chairperson').value;

    // Construct WhatsApp message
    const message = `Gate Pass Approval%0A%0AStudent Name: ${name}%0ARoll Number: ${roll}%0ADate: ${date}%0ATime: ${time}%0AChairperson Name: ${chairperson}%0AI request you to approve me.%0AThankyou%0AYour's Obediently ${name}`;

    // Send message to WhatsApp
    window.open(`https://api.whatsapp.com/send?phone=6369202829&text=${message}`);
    notification.innerText = "Your message has been sent!";
});


