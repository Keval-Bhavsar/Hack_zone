// function openEventForm() {
//     document.getElementById("eventFormModal").style.display = "block";
// }

// function closeEventForm() {
//     document.getElementById("eventFormModal").style.display = "none";
// }




// // Example JavaScript function to dynamically populate the devices dropdown
// function fetchAndPopulateDevices() {
//     // Placeholder for fetching logic
//     fetch('path/to/api/getDevices')
//         .then(response => response.json())
//         .then(data => {
//             const selectElement = document.getElementById('eventDevices');
//             data.forEach(device => {
//                 const option = new Option(device.name, device.id);
//                 selectElement.add(option);
//             });
//         })
//         .catch(error => console.error('Error fetching devices:', error));
// }

// // Call this function when the form is displayed or when the page loads
// fetchAndPopulateDevices();


// script.js

function showEventForm() {
    document.getElementById('eventForm').style.display = 'block';
}

function hideEventForm() {
    document.getElementById('eventForm').style.display = 'none';
}

// Assuming you have a form submission function
document.querySelector('.event-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual form submission

    // Here, you would handle the form data, possibly using AJAX to submit to the server
    console.log('Form submitted!');

    // After submission, you might want to hide the form again
    hideEventForm();

    // Optionally, refresh or update the event cards to include the new event
});




function deleteEvent(eventID) {
    // Confirmation dialog to make sure the user wants to delete the event
    const isConfirmed = confirm("Are you sure you want to delete this event and all related data?");

    if (isConfirmed) {
        // Here, you would typically make an AJAX request to your server-side script to delete the event
        console.log("Deleting event with ID:", eventID);

        // Example: Remove the event element from the DOM
        // This is just for demonstration; in a real application, the page might be refreshed or dynamically updated after deletion
        document.querySelector(`.event[data-event-id="${eventID}"]`).remove();
    }
}











document.addEventListener('DOMContentLoaded', () => {
    const deleteButtons = document.querySelectorAll('.delete-btn');
    
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const memberRow = this.parentNode.parentNode;
            const memberId = memberRow.getAttribute('data-member-id');
            const isConfirmed = confirm('Are you sure you want to delete this member?');
            
            if (isConfirmed) {
                // Here you would typically make an AJAX call to your server to delete the member
                console.log(`Deleting member with ID: ${memberId}`);
                // For demonstration, remove the row from the table
                memberRow.remove();
            }
        });
    });
});










document.addEventListener('DOMContentLoaded', () => {
    const avatar = document.querySelector('.avatar-container img');
    const modal = document.getElementById('profilePhotoModal');
    const deleteBtn = document.getElementById('deletePhotoBtn');

    // Show the modal when the avatar is clicked
    avatar.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Close the modal on delete (or perform actual delete action)
    deleteBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        alert('Photo would be deleted!');
        // Implement actual deletion logic here
    });

    // Click anywhere outside of the modal content to close it
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});
