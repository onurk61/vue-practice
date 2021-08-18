const people = [
    {
        id:'1',
        firstName: 'Onur',
        lastName: 'Kanca',
        phoneNumber: '5436834231'
    },
    {
        id:'2',
        firstName: 'Uğur',
        lastName: 'Mamak',
        phoneNumber: '6666666666'
    },
    {
        id:'3',
        firstName: 'Tunay',
        lastName: 'Çelik',
        phoneNumber: '4444444444'
    },
    {
        id:'4',
        firstName: 'Ömer',
        lastName: 'Şanver',
        phoneNumber: '5555555555'
    }
]

let ul = document.querySelector("ul");


function addItem(){
    let fname = document.getElementById("fname").value,
        lname = document.getElementById("lname").value,
        pnumber = document.getElementById("pnumber").value;

        if(fname === "" || lname === "" || pnumber === "") return;

        people.push({"firstName": fname, "lastName": lname, "phoneNumber": pnumber})
        document.getElementById("myForm").reset();
        ul.innerHTML = "";
        document.getElementsByClassName("btn-success")[0].setAttribute("disabled","true");
        return people.map((item,index) => {
        ul.innerHTML += `
        <li class="list-group-item d-flex align-items-center justify-content-between">
            <span>Name: <strong>${item.firstName}</strong></span>
            <span>Last Name: <strong>${item.lastName}</strong></span>
            <span>Phone Number: <strong>${item.phoneNumber}</strong></span>
            <button type="button" class="btn btn-sm btn-warning" data-toggle="modal" data-target="#exampleModal" onclick="updateItem(event,${index})">Update</button>
            <button type="button" class="btn btn-sm btn-danger" onclick="deleteItem(event,${index})">Delete</button>
        </li>
    `;
    })
}

function listItems(arr){
    document.getElementsByClassName("btn-success")[0].setAttribute("disabled","true");
    document.getElementsByClassName("btn-outline-primary")[0].style.display = "none";
    return arr.map((item,index) => {
    ul.innerHTML += `
    <li class="list-group-item d-flex align-items-center justify-content-between">
        <span>Name: <strong>${item.firstName}</strong></span>
        <span>Last Name: <strong>${item.lastName}</strong></span>
        <span>Phone Number: <strong>${item.phoneNumber}</strong></span>
        <button type="button" class="btn btn-sm btn-warning" data-toggle="modal" data-target="#exampleModal" onclick="updateItem(event,${index})">Update</button>
        <button type="button" class="btn btn-sm btn-danger" onclick="deleteItem(event,${index})">Delete</button>
    </li>
`;
   })
}

function disableButton(event){
    let den = document.querySelectorAll("input");
    let i = 1;

    if(!den[i].value || !den[i+1].value || !den[i+2].value || (den[i+2].value.length !== 10)){
        document.getElementsByClassName("disabled-message")[0].style.display="block";
        document.getElementsByClassName("btn-success")[0].setAttribute("disabled","true");
    } else {
        document.getElementsByClassName("disabled-message")[0].style.display="none";
        document.getElementsByClassName("btn-success")[0].removeAttribute("disabled","true");
    }
}

function deleteItem(event,index){
    event.preventDefault();
    people.splice(index,1);
    ul.innerHTML = "";
    listItems(people);
}

function updateItem(event,index){
    event.preventDefault();
    document.getElementsByClassName("btn-outline-primary")[0].style.display= "block";
    document.getElementsByClassName("btn-success")[0].style.display= "none";
    document.getElementById("fname").value = people[index].firstName;
    document.getElementById("lname").value = people[index].lastName;
    document.getElementById("pnumber").value = people[index].phoneNumber;
    document.getElementById("itemsIndex").value = index;
}

function saveItem(){
    let fname = document.getElementById("fname").value,
        lname = document.getElementById("lname").value,
        pnumber = document.getElementById("pnumber").value,
        itemIndex = document.getElementById("itemsIndex").value;
        document.getElementsByClassName("btn-success")[0].style.display= "block";

        if(fname === "" || lname === "" || pnumber === "") {
            document.getElementsByClassName("btn-success")[0].style.display= "none";
            return;
        }

    people[itemIndex] ={"firstName": fname, "lastName": lname, "phoneNumber": pnumber};
    document.getElementById("myForm").reset();
    ul.innerHTML = "";
    listItems(people);
}


listItems(people);


