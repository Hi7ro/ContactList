let names = ['Hans Wurscht', 'Friedericke Bauer']
let phoneNumbers = ['0660 123 123 123', '123 510823 12']
load();

function render() {
  let content = document.getElementById('content');
  content.innerHTML = '';
  content.innerHTML += `
  <h1>My Contact's</h1>
  <div> 
    <input class="myInput" placeholder="Name">
    <input class="myInput" placeholder="Adress">
    <button onclick="addContact()">add</button>
  </div> 
  `;
  for (let i = 0; i < names.length; i++) {
    content.innerHTML += `
    <div class="card-box">
      <div>
        Name: ${names[i]} <br>
        Adress: ${phoneNumbers[i]}
      </div>
      <i class="fas fa-trash" onclick="remove()"></i>
    </div>
    `;
  }

}

function addContact() {
  let name = document.getElementsByClassName('myInput')[0];
  let number = document.getElementsByClassName('myInput')[1];

  names.push(name.value);
  phoneNumbers.push(number.value);
  render();
  save();
}

function remove(i) {
  names.splice(i, 1);
  phoneNumbers.splice(i, 1);
  render();
  save();

}

function save() {
  let namesAsText = JSON.stringify(names);
  let phoneAsText = JSON.stringify(phoneNumbers);

  localStorage.setItem('name', namesAsText);
  localStorage.setItem('tel', phoneAsText);
}

function load() {
  let namesAsText = localStorage.getItem('name');
  let phoneAsText = localStorage.getItem('tel');

  if (namesAsText && phoneAsText) {
    names = JSON.parse(namesAsText);
    phoneNumbers = JSON.parse(phoneAsText);
  }

}