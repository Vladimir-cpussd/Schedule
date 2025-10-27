const saved = localStorage.getItem("mySchedule");
if(saved) {
    const schedule = JSON.parse(saved);

    document.getElementById('groupe').innerHTML = `<p>${schedule.groupe}</p>`;
    document.getElementById('time').innerHTML = `<p>${schedule.time}</p>`;
    document.getElementById("scheduleView").innerHTML = `
    <div>
        <p>1. ${schedule.examination1}</p>
        <p>2. ${schedule.examination2}</p>
        <p>3. ${schedule.examination3}</p>
        <p>4. ${schedule.examination4}</p>
        <p>5. ${schedule.examination5}</p>
        <p>6. ${schedule.examination6}</p>
        <p>7. ${schedule.examination7}</p>
        <p>8. ${schedule.examination8}</p>
        <p>9. ${schedule.examination9}</p>
        <p>10. ${schedule.examination10}</p>
    </div>`
} else {
    document.getElementById("scheduleView").textContent = 'расписание не найдено';
}

