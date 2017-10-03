document.addEventListener("DOMContentLoaded", function(event) { 
    let form = document.querySelector('form.fibonacci'),
        result = document.querySelector('section.result');

    initFibonacci(form, result);
});

function initFibonacci(form, result) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        e.stopPropagation();

        let count = document.querySelector('form.fibonacci input.count').value;
        let html = '<ul>';

        let first = 0,
            second = 1,
            current = 0;

        for (let i = 0; i < count; i++) {
            html += '<li>' + current + '</li>';

            current = first + second;
            second = first;
            first = current;
        }

        html += '</ul>';
        result.innerHTML += html;
        document.body.classList.add("submitted");

    });
}