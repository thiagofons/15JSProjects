// Set initial count
let count = 0;

// Select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;

        // Value
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('reset')){
            count = 0;
        }
        else{
            count++;
        }

        // Colors
        if(count < 0){
            value.style.color = 'red';
        }
        if(count == 0){
            value.style.color = '#222';
        }
        if(count > 0){
            value.style.color = 'green';
        }


        value.textContent = count;
    });
});



