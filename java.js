document.querySelectorAll('.signPage').forEach((signIn) => {
    const item = document.querySelectorAll('.caro');
    const btnsHtml = Array.from(item, () => {
        return `<div class="spans"><span class="span span-selected"></span></div>`
    });

    signIn.insertAdjacentHTML('beforeend', `
    <div class='span-btn'>${btnsHtml}</div>
    `);

    const btns = document.querySelectorAll('.span');
    btns.forEach((butt, i) => {
        butt.addEventListener('click', () => {
            item.forEach(it => it.classList.remove('caro-selected'));
            btns.forEach(butt => butt.classList.remove('span-selected'));

            item[i].classList.add('caro-selected');
            btns[i].classList.add('span-selected');
        });
    });
    item[0].classList.add('caro-selected');
    btns[0].classList.add('span-selected');
});

let users = [];
document.querySelector('#signUp').addEventListener('submit', (e) => {
    e.preventDefault();
    let user = {
        fName: document.getElementById('fName').value,
        lName: document.getElementById('lName').value,
        emailSignUp: document.getElementById('emailUp').value,
        pswordUp: document.getElementById('psWord1').value,
        pswordUpConfirm: document.getElementById('psWord2').value,
        signUpBtn: document.getElementById('signUpBtn').value
    };    
    users.push(user);

    document.querySelector('#signUp').reset();

    localStorage.setItem('users', JSON.stringify(users));
});

// let usersStorage = localStorage.getItem('users')
// ? JSON.parse(localStorage.getItem('users')) : [];

// signUp.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let formData = new FormData(signUp);
//     console.log(formData);

//     let obj = Object.fromEntries(formData);
//     console.log(obj);

//     // usersStorage.push(obj);n
//     localStorage.setItem('users', JSON.stringify(usersStorage));
// })