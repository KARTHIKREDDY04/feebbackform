document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting normally
  
    // Get form values
    const pname = document.getElementById('pname').value;
    const rating = document.getElementById('rating').value;
    const feedback = document.getElementById('feedback').value;
    const email = document.getElementById('email').value;
  
    // Validate the form
    if (pname === "" || rating === "" || feedback === "" || email === "") {
      alert("Please fill in all fields.");
      return;
    }
  
    // Process the form data (this is where you could send it to a server)
    // For now, just simulate a successful submission.
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.style.color = 'green';
    responseMessage.textContent = 'Thank you for your feedback!';
  
    // Clear the form
    document.getElementById('feedbackForm').reset();
  });
  