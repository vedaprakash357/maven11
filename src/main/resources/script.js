
function addStudent() {

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;

    if (name === "" || age === "" || course === "") {
        alert("Please fill all details!");
        return;
    }

    let table = document.getElementById("studentList");

    let row = table.insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = age;
    row.insertCell(2).innerHTML = course;

    let actionCell = row.insertCell(3);

    let deleteButton = document.createElement("button");

    deleteButton.innerHTML = "Delete";
    deleteButton.className = "delete-btn";

    deleteButton.onclick = function() {
        row.remove();
    };

    actionCell.appendChild(deleteButton);

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";
}
