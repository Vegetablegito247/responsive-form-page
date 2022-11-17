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