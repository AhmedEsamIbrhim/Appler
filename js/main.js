// Start Send From 
let url      = 'prossed.php';
let btn_sub  = document.querySelector(".send-form");
let msg_form = document.querySelector(".msg-form");
// Start Function If click the Btn Submit Form
function send_form(btn_sub) {
    if (btn_sub) {
        btn_sub.addEventListener('click', (e) => {
            msg_form.style.display = 'block';
            msg_form.textContent = 'Your Massege Is Sended';
        });
    }
}
send_form(btn_sub);