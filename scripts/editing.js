// Функция сохранения
function saveSchedule() {
    const schedule = {
        time: document.getElementById('time').value,
        groupe: document.getElementById('groupe').value,
        examination1: document.getElementById('examination1').value,
        examination2: document.getElementById('examination2').value,
        examination3: document.getElementById('examination3').value,
        examination4: document.getElementById('examination4').value,
        examination5: document.getElementById('examination5').value,
        examination6: document.getElementById('examination6').value,
        examination7: document.getElementById('examination7').value,
        examination8: document.getElementById('examination8').value,
        examination9: document.getElementById('examination9').value,
        examination10: document.getElementById('examination10').value,
    };
    localStorage.setItem('mySchedule', JSON.stringify(schedule));
    alert("Сохранено!");
    
    
    displaySchedule();
}





