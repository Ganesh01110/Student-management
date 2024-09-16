// script.js

// Function to open a new HTML page
function openNewPage() {
    // Open a new window with the specified URL
    window.open('newpage.html', 'width=400,height=400');
}

// script.js

// Function to save data to localStorage
function saveData() {
    // Get form values
    var ID = document.getElementById('ID').value;
    var name = document.getElementById('name').value;
    var number = document.getElementById('number').value;
    var country = document.getElementById('country').value;

    // Retrieve existing data from localStorage or initialize an empty array
    var existingData = JSON.parse(localStorage.getItem('userData')) || [];

    // Add new data to the array
    existingData.push({ ID:ID ,name: name, number: number ,country:country });

    // Save the updated array back to localStorage
    localStorage.setItem('userData', JSON.stringify(existingData));

    // Clear the form fields
    document.getElementById('ID').value = '';
    document.getElementById('name').value = '';
    document.getElementById('number').value = '';
    document.getElementById('country').value = '';

    // Prevent the form from submitting and refreshing the page
    return false;
}

// display.js

// Function to display data from localStorage
function displayData() {
    // Retrieve data from localStorage
    var userData = JSON.parse(localStorage.getItem('userData')) || [];

    // Get the table
    var table = document.getElementById('dataTable');

    // Populate the table with data
    userData.forEach(function(user) {
        var row = table.insertRow(table.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        cell1.innerHTML = user.ID;
        cell2.innerHTML = user.name;
        cell3.innerHTML = user.number;
        cell4.innerHTML = user.country;
        cell5.innerHTML = <button onclick="showDetails(${index})">Details</button>
       /* cell5.innerHTML = `
            <button onclick="showDetails(${index})">Details</button>
           <button onclick="updateData(${index})">Update</button>
            <button onclick="deleteData(${index})">Delete</button>
        `;*/
    });
}

// Call the displayData function when the page loads
window.onload = displayData;

// details.js

// Function to display detailed information for a user
function showDetails(index) {
    // Retrieve data from localStorage
    var userData = JSON.parse(localStorage.getItem('userData')) || [];

    // Get the details container
    var detailsContainer = document.getElementById('detailsContainer');

    // Display detailed information for the selected user
    var user = userData[index];
    detailsContainer.innerHTML = `
        <p><strong>Name:</strong> ${user.ID}</p>
        <p><strong>Age:</strong> ${user.name}</p>
        <p><strong>Age:</strong> ${user.number}</p>
        <p><strong>Age:</strong> ${user.country}</p>
        <button onclick="goBack()">Go Back</button>
    `;
}

// Function to go back to the display page
function goBack() {
    window.location.href = 'index.html';
}

// display.js

// Function to update data for a user
function updateData(index) {
    // Retrieve data from localStorage
    var userData = JSON.parse(localStorage.getItem('userData')) || [];

    // Get the new data from the user
    var newID = prompt('Enter new ID:', userData[index].ID);
    var newName = prompt('Enter new name:', userData[index].name);
    var newNumber = prompt('Enter new number:', userData[index].number);
    var newcountry = prompt('Enter new country:', userData[index].country);

    // Update the data in the array
    userData[index].ID = newID;
    userData[index].name = newName;
    userData[index].number = newNumber;
    userData[index].country = newcountry;

    // Save the updated array back to localStorage
    localStorage.setItem('userData', JSON.stringify(userData));

    // Reload the display page to reflect the changes
    window.location.reload();
}

// Function to delete data for a user
function deleteData(index) {
    // Retrieve data from localStorage
    var userData = JSON.parse(localStorage.getItem('userData')) || [];

    // Confirm deletion with the user
    var confirmDelete = confirm('Are you sure you want to delete this entry?');

    if (confirmDelete) {
        // Remove the user from the array
        userData.splice(index, 1);

        // Save the updated array back to localStorage
        localStorage.setItem('userData', JSON.stringify(userData));

        // Reload the display page to reflect the changes
        window.location.reload();
    }
}
