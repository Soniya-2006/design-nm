function checkAccess() {
    let username = document.getElementById("username").value;
    let role = document.getElementById("role").value;
    let device = document.getElementById("device").value;
    let location = document.getElementById("location").value;
    let risk = document.getElementById("risk").value;

    let result = "";
    let statusClass = "";

    if(username === ""){
        result = "Enter Username";
        statusClass = "danger";
    }
    else if(role === "admin" && device === "secure" && location === "office" && risk === "low"){
        result = "Full Access Granted";
        statusClass = "success";  // green
    }
    else if(role === "user" && device === "secure" && risk === "low"){
        result = "Limited Access";
        statusClass = "warning";  // orange
    }
    else{
        result = "Access Denied";
        statusClass = "danger";   // red
    }

    let resultBox = document.getElementById("result");
    resultBox.classList.remove('success', 'warning', 'danger');
    resultBox.classList.add(statusClass);
    resultBox.innerText = result;

    addLog(username, result);
}

function addLog(user, status){
    let table = document.getElementById("logTable");
    let row = document.createElement("tr");
    let time = new Date().toLocaleTimeString();
    row.innerHTML = "<td>" + time + "</td><td>" + user + "</td><td>" + status + "</td>";
    table.appendChild(row);
}

function clearLog(){
    document.getElementById("logTable").innerHTML = "";
    document.getElementById("result").innerText = "";
    document.getElementById("result").classList.remove('success','warning','danger');
}