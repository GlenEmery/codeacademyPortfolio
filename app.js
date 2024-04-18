document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav ol');
    const button = document.getElementById('button')

    if (!nav) {
        console.error("Nav element not found!");
        return; // Exit the function if nav element is not found
    }

    button.addEventListener('click', function() {
        if (nav.classList.contains('hidden')) {
            nav.classList.remove('hidden');
        } else {
            nav.classList.add('hidden');
        }
    });

    console.log("DOMContentLoaded event fired successfully!");
});
