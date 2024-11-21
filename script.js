function submitForm(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get form data
    const visitorName = document.getElementById('visitorName').value;
    const noOfPersons = document.getElementById('noOfPersons').value;
    const purpose = document.getElementById('purpose').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const visitDate = document.getElementById('visitDate').value;  // Get date
    const visitTime = document.getElementById('visitTime').value;  // Get time

    // Create a message
    const message = `Visitor: ${visitorName} \n
                     Number of Persons: ${noOfPersons} \n
                     Purpose of Visit: ${purpose} \n
                     Contact Number: ${contactNumber} \n
                     Date of Visit: ${visitDate} \n
                     Time of Visit: ${visitTime}`;

    // Display a success message
    document.getElementById('formMessage').innerHTML = `
        <div class="success-message">
            <p>Form submitted successfully!</p>
            <p>${message}</p>
        </div>
    `;
}
