window.addEventListener('DOMContentLoaded',(event)=>{
    createInnerHTML();
})

function createInnerHTML(){
    const headerHTML=
        "<th></th>"+
        "<th>Emp Name</th>"+
        "<th>Gender</th>"+
        "<th>Department</th>"+
        "<th>Salary</th>"+
        "<th>Start Date</th>"+
        "<th>Actions</th>";

    let innerHTML=`${headerHTML}`;
    let empPayrollList = createEmployeePayrollJson();
    for(const empData of empPayrollList){
        innerHTML=`${innerHTML}
        <tr>
            <td><img class="profile" src="${empData._profilePic}" alt="Profile Pic"></td>
            <td>${empData._name}</td>
            <td>${empData._gender}</td>
            <td>${getDeptHTML(empData._department)}</td>
            <td>RS ${empData._salary}</td>
            <td>${empData._startDate}</td>
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
            _name:'Google Assitant',
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
