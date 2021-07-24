
const form1 = document.getElementById("form1");
const btnBottom = document.getElementById("btn-bottom");
const btnTop = document.getElementById("btn-top");

btnBottom.onmouseover = e => {
    form1.setAttribute("onsubmit", "return bottomRow(event)");
}
btnTop.onmouseover = e => {
    form1.setAttribute("onsubmit", "return topRow(event)");
}
let person = [];
const table = document.getElementById("myTable");
const tableBody = document.getElementById("table-body");
const row = document.getElementsByClassName("row");

function data(first, last, city, country) {
    this.first = first;
    this.last = last;
    this.city = city;
    this.country = country;
}
const init = () => {
    person.push(new data("Pratistha", "Chaudhary", "Gwalior", "India"));
    person.push(new data("Gajendra Singh ", "yadav", "Hyderabad", "India"));
    person.push(new data("Divya", "Kushwah", "Bhind", "India"));
    person.push(new data("Shivani", "Parmar", "Banglore", "India"));
    person.push(new data("Boby", "Sharma", "Pune", "India"));
}

function print(per) {
    const tr = document.createElement("tr");
    tr.setAttribute("class", "row");
    const td = document.createElement("td");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const node1 = document.createTextNode(per.first);
    const node2 = document.createTextNode(per.last);
    const node3 = document.createTextNode(per.city);
    const node4 = document.createTextNode(per.country);
    td1.appendChild(node1);
    td2.appendChild(node2);
    td3.appendChild(node3);
    td4.appendChild(node4);
    tr.appendChild(td);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tableBody.appendChild(tr);
}
init();

for (let per of person) {
    print(per);
}


const bottomRow = (e) => {
    const form = new FormData(e.target);
    const first = form.get("first");
    const last = form.get("last");
    const city = form.get("city");
    const country = form.get("country");
    person.push(new data(first, last, city, country));
    let lastIndex = person.length - 1;
    print(person[lastIndex]);
    serialNoInit();
    return false;
};
const topRow = (e) => {
    const form = new FormData(e.target);
    const first = form.get("first");
    const last = form.get("last");
    const city = form.get("city");
    const country = form.get("country");
    person.unshift(new data(first, last, city, country));
    rePrint(person[0]);
    serialNoInit();
    return false;
};

function rePrint(per) {
    const tr = document.createElement("tr");
    tr.setAttribute("class", "row");
    const td = document.createElement("td");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const node1 = document.createTextNode(per.first);
    const node2 = document.createTextNode(per.last);
    const node3 = document.createTextNode(per.city);
    const node4 = document.createTextNode(per.country);
    td1.appendChild(node1);
    td2.appendChild(node2);
    td3.appendChild(node3);
    td4.appendChild(node4);
    tr.appendChild(td);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tableBody.insertBefore(tr, tableBody.childNodes[0]);
}



function serialNoInit() {
    let i = 1;
    for (let r of row) {
        r.firstChild.innerHTML = i;
        i++;
    }
}

serialNoInit();