var fullScreenDiv = document.getElementById("full-screen");
fullScreenDiv.style.height = window.innerHeight + "px";


var menuButton = document.getElementById("menu-btn");

menuButton.addEventListener("click", function() {
  alert("Button clicked!");
});



// Fetch data from a JSON file
fetch('DBFilesJSON.zip')
  .then(response => response.json())
  .then(data => {
    // Populate the users list with the fetched data
    const usersList = document.getElementById('users-list');
    data.forEach(user => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
      `;
      usersList.appendChild(row);
    });
  })
  .catch(error => console.error(error));


// ---------
