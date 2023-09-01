// const keyConatainers = document.querySelectorAll('.keys');
// const textArea = document.querySelectorAll('.display textarea');
// // console.log(keyConatainers);
// // console.log(keyConatainers[0]);
// // console.log(keyConatainers[0].children);

// keyConatainers.forEach (function (key) {
//     key.addEventListener ('click', function (e) {
//         // console.log(e);
//         // console.log(e.target);
//         // console.log(e.target.value);

//         if (!e.path[0].value) return;

//         let keyClicked = e.path[0].value.toLowerCase();
//         textArea.value += keyClicked;
//     });
// });

const keyContainers = document.querySelectorAll('.keys');
const textArea = document.querySelector('.display textarea'); // Changed querySelectorAll to querySelector

keyContainers.forEach(function (key) {
    key.addEventListener('click', function (e) {
        if (!e.target.value) return;

        let keyClicked = e.target.value.toLowerCase();
        textArea.value += keyClicked;
    });
});
