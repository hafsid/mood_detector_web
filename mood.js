function saveMood(mood, moodText) {
    let moods = JSON.parse(localStorage.getItem('moodData')) || [];
    
    let now = new Date();
    let dateTime = now.toLocaleString(); // Gets date and time in readable format

    moods.push({ dateTime: dateTime, moodValue: mood, moodText: moodText });

    localStorage.setItem('moodData', JSON.stringify(moods));
}

// Example: Add event listeners for all emojis
document.getElementById('happyEmoji').addEventListener('click', function () {
    saveMood(10, "Happy 😊");
});

document.getElementById('sadEmoji').addEventListener('click', function () {
    saveMood(3, "Sad 😢");
});

document.getElementById('angryEmoji').addEventListener('click', function () {
    saveMood(2, "Angry 😡");
});

document.getElementById('excitedEmoji').addEventListener('click', function () {
    saveMood(9, "Excited 🤩");
});

document.getElementById('boredEmoji').addEventListener('click', function () {
    saveMood(4, "Bored 😐");
});

document.getElementById('lovedEmoji').addEventListener('click', function () {
    saveMood(8, "Loved ❤️");
});

document.getElementById('surprisedEmoji').addEventListener('click', function () {
    saveMood(7, "Surprised 😲");
});

document.getElementById('sleepyEmoji').addEventListener('click', function () {
    saveMood(5, "Sleepy 😴");
});

document.getElementById('confusedEmoji').addEventListener('click', function () {
    saveMood(4, "Confused 😕");
});

document.getElementById('frustratedEmoji').addEventListener('click', function () {
    saveMood(3, "Frustrated 😖");
});
