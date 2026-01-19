const searchInput = document.getElementById("search");
const sortSelect = document.getElementById("sort");
if (!localStorage.getItem("loggedIn")) {
  window.location.href = "login.html";
}


let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
localStorage.setItem("contacts", JSON.stringify(contacts));

const list = document.getElementById("contactList");
const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const indexInput = document.getElementById("index");

/* Generate Avatar Initial */
function avatarLetter(name) {
  return name.charAt(0).toUpperCase();
}

/* Display Contacts */
function displayContacts(data = contacts) {
  list.innerHTML = "";

  data.forEach((c, i) => {
    list.innerHTML += `
      <tr class="fade-in">
        <td>
          <div class="avatar-circle">${c.name.charAt(0).toUpperCase()}</div>
        </td>
        <td>${c.name}</td>
        <td>${c.phone}</td>
        <td>${c.email}</td>
        <td>
          <button onclick="editContact(${i})">Edit</button>
          <button onclick="deleteContact(${i})">Delete</button>
        </td>
      </tr>
    `;
  });
}
/* Search Contacts */
searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  const filtered = contacts.filter(c =>
    c.name.toLowerCase().includes(value) ||
    c.phone.includes(value)
  );

  applySort(filtered);
});
/* Sort COntacts */
sortSelect.addEventListener("change", () => {
  applySort();
});

function applySort(data = contacts) {
  let sorted = [...data];

  if (sortSelect.value === "az") {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
  } 
  else if (sortSelect.value === "za") {
    sorted.sort((a, b) => b.name.localeCompare(a.name));
  }

  displayContacts(sorted);
}


/* Add / Update Contact */
form.addEventListener("submit", e => {
  e.preventDefault();

  const contact = {
    name: nameInput.value.trim(),
    phone: phoneInput.value.trim(),
    email: emailInput.value.trim()
  };

  if (indexInput.value === "") {
    contacts.push(contact);
  } else {
    contacts[indexInput.value] = contact;
  }

  localStorage.setItem("contacts", JSON.stringify(contacts));
  form.reset();
  indexInput.value = "";
  displayContacts();
});

/* Edit Contact */
function editContact(i) {
  nameInput.value = contacts[i].name;
  phoneInput.value = contacts[i].phone;
  emailInput.value = contacts[i].email;
  indexInput.value = i;
}

/* Delete Contact */
function deleteContact(i) {
  if (confirm("Delete contact?")) {
    contacts.splice(i, 1);
    localStorage.setItem("contacts", JSON.stringify(contacts));
    displayContacts();
  }
}

applySort();

