const clockLabel = document.getElementById("clock");
const dateLabel = document.getElementById("date");

update();
setInterval(update, 1000);

function update()
{
    let date = new Date();

    clockLabel.innerHTML = formatTime(date);
    dateLabel.innerHTML = formatDate(date);

    function formatTime(date)
    {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        let amPm = hours >= 12 ? "PM" : "AM";
        hours = (hours % 12) || 12;

        hours = formatZeros(hours);
        minutes = formatZeros(minutes);
        seconds = formatZeros(seconds);

        return `${hours}:${minutes}:${seconds} ${amPm}`;
    }

    function formatZeros(time)
    {
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    }

    function formatDate(date)
    {
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let dayName = dayNames[date.getDay()];

        return `${dayName} ${month} / ${day} / ${year}`;
    }
}