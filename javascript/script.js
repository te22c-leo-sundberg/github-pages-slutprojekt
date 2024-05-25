document.querySelector('button').addEventListener('click', function () {
    document.body.classList.toggle('dark');
    document.querySelector('.container h1').classList.toggle('dark');
    document.querySelector('.float-child-info').classList.toggle('dark');
    document.querySelector('.profile').classList.toggle('dark');
    document.querySelector('.picture').classList.toggle('dark');
})