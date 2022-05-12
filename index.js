function showTime({hours, minutes, seconds, zone}) {

    if (minutes / 10 < 1) {
        minutes = "0" + minutes;
      }
      if (seconds / 10 < 1) {
        seconds = "0" + seconds;
      }
    return`${hours}:${minutes}:${seconds} ${zone}`
    
};

function renderTime() {
    var currentTime = document.getElementById("Digital");

    const currentDate = new Date();

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var zone = hours >= 12 ? "PM" : "AM";

    if(hours > 12)
    {
        hours = hours%12;
    }

    const timeString = showTime({hours, minutes, seconds, zone});

    currentTime.innerHTML= timeString;
};
  
  // Update time every second

  setInterval(renderTime, 1000);

  const alarmString = null;

  function hadlesubmit(event) {

    event.preventDefault();

    const {hour,minute,second,zone}=document.form[0];

    alarmString = showTime({hours: hour.value, minutes:minute.value, seconds:second.value });

    document.form[0].reset();

  };
  
  document.form[0].addEventListener("submit", hadlesubmit());

  // Initialize alarm sound
alarmAudio.src = "http://soundbible.com/grab.php?id=1252&type=mp3";
alarmAudio.load();

// Function to check if alarm needs to be triggered
function checkAlarm (timeString) {
  if (alarmString === timeString) {
    alarmAudio.play();
  }
};

function renderTime() {
  var currentTime = document.getElementById("Digital");

  const currentDate = new Date();

  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
  var zone = hours >= 12 ? "PM" : "AM";

  if(hours > 12)
  {
      hours = hours%12;
  }

  const timeString = showTime({hours, minutes, seconds, zone});
  checkAlarm(timeString);

  currentTime.innerHTML= timeString;
};