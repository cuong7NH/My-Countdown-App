



//------ Handel input title birthday + bc + font family----- \\
// ------------------------------------------------------------\\


const inputTitle = document.getElementById('title-birthday');

const titleBirthdayText = document.querySelector('.title-birthday-text');

const birthdayInput = document.querySelector('#birthday-input');

const titleFont = document.querySelector('#title-font');

const titleBc = document.querySelector('#title-bc');

const countdownBtn = document.querySelector('#countdown-btn');

const msg = document.querySelector('.msg');


// change title from input
function writeTitle() {
    titleBirthdayText.textContent = inputTitle.value;
    titleBirthdayText.style.backgroundColor = '#F97F51';

    if(inputTitle.value ==='') {
        titleBirthdayText.textContent = 'Happy Birthday!!!!';
        titleBirthdayText.style.backgroundColor = '#EA2027';
    }

}

inputTitle.addEventListener('keyup', writeTitle);

//  change font + bc from select



function fontTitle() {

}
titleFont.addEventListener('change', () => {
    const classFontTitle = 'title-birthday-text--' + titleFont.value;
    titleBirthdayText.className = 'title-birthday-text';
    titleBirthdayText.classList.add(classFontTitle);
});

// ------------------------------------------------------------\\
// ------------------------------------------------------------\\


    const daysEl = document.querySelector('.days-el');
    const hoursEl = document.querySelector('.hours-el');
    const minutesEl = document.querySelector('.minutes-el');
    const secondsEl = document.querySelector('.seconds-el');



countdownBtn.addEventListener('click', (e) => {
    e.preventDefault();

    //  layout and text change
    const countdownArea = document.querySelector('#countdown-area');
    const resetBtn = document.querySelector('#reset-btn');
    countdownArea.classList.add('countdown-area--show');
    resetBtn.style.display = 'inline-block';

    // change title
    msg.textContent = inputTitle.value;
    if(inputTitle.value === '') {
        msg.textContent = 'Your Birthday Eve!!';
    }


    // change font
    const fontClass = 'title-birthday-text--' +titleFont.value;
    msg.className = 'msg';
    msg.classList.add(fontClass)


    // change bc


    countdownArea.style.backgroundImage  = `url(../img/${titleBc.value}.jpg)`;




    
    // Clock Countdown

    const birthday = new Date(birthdayInput.value);

    function countdown() {
        const currentDate = new Date();
    
        ms = birthday - currentDate;

    
        days = Math.floor((ms / 1000) / (3600 * 24));
        hours = Math.floor(((ms/1000) / 3600) % 24);
        minutes = Math.floor(((ms / 1000) / 60 ) % 60);
        seconds = Math.floor((ms / 1000)% 60);
    
    
        daysEl.innerHTML = formatTime(days);
        hoursEl.innerHTML = formatTime(hours);
        minutesEl.innerHTML = formatTime(minutes);
        secondsEl.innerHTML = formatTime(seconds);
    
        if(ms === 0) {
            clearInterval(run);
        }
    
    
    }
    

    

    const run = setInterval(countdown, 1000);



    

});
// FormatTime
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}



