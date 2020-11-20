let empPayrollList=new Array();

window.addEventListener("DOMContentLoaded", (event) => {
    empPayrollList = getEmpDataFromLocalStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHTML();
    localStorage.removeItem("editEmp");
});

function getEmpDataFromLocalStorage(){
    return localStorage.getItem("EmployeePayrollList") ?
        JSON.parse(localStorage.getItem("EmployeePayrollList")) : [];
};

function createInnerHTML(){
    const headerHTML=
        "<th></th>"+
        "<th>Emp Name</th>"+
        "<th>Gender</th>"+
        "<th>Department</th>"+
        "<th>Salary</th>"+
        "<th>Start Date</th>"+
        "<th>Actions</th>";

    if (empPayrollList.length==0){
        console.log("No data found in Local Storage")
        return;
    }
    let innerHTML=`${headerHTML}`;
    for(const empData of empPayrollList){
        innerHTML=`${innerHTML}
        <tr>
            <td><img class="profile" src="${empData._profilePic}" alt="Profile Pic"></td>
            <td>${empData._name}</td>
            <td>${empData._gender}</td>
            <td>${getDeptHTML(empData._department)}</td>
            <td>RS ${empData._salary}</td>
            <td>${(empData._startDate).slice(0,10)}</td>
            <td>
                <img id="${empData._id}" onclick="remove()" alt="delete" src="./Assets/icons/delete-black-18dp.svg">
                <img id="${empData._id}" onclick="update()" alt="edit" src="./Assets/icons/create-black-18dp.svg">
            </td>
        </tr>
        `;
    }
    document.querySelector('#table-display').innerHTML = innerHTML;
}

function getDeptHTML(deptList){
    let deptHTML = '';
    for(const dept of deptList){
        deptHTML = `${deptHTML}<div class="dept-label">${dept}</div>`
    }
    return deptHTML;
}

function createEmployeePayrollJson(){
    let empPayrollLocalList = [
        {
            _name:'Suyash',
            _gender:'Male',
            _department:['Engineering'],
            _salary:'500000',
            _startDate:'29 Oct 2020',
            _note:'',
            _id: new Date().getTime(),
            _profilePic:'./Assets/profile-images/Ellipse -5.png'
        },
        {
            _name:'Google Assistant',
            _gender:'Female',
            _department:['Sales'],
            _salary:'400000',
            _startDate:'20 Nov 2020',
            _note:'',
            _id: new Date().getTime()+1,
            _profilePic:'./Assets/profile-images/Ellipse -7.png'
        }
    ]
    return empPayrollLocalList;
}
