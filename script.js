function validateForm() {
  const name = document.getElementById('name').value;
  const rating = document.querySelector('input[name="rating"]:checked');
  const feature = document.querySelectorAll('input[name="feature"]:checked');
  const category = document.getElementById('category').value;

  if (name === "" || !rating || feature.length === 0) {
    alert("Please fill in all required fields.");
  } else {
    // Simulate database submission (replace this with your server-side code)
    submitToDatabase({ name, rating: rating.value, features: Array.from(feature).map(f => f.value), category });

    // Display confirmation message
    document.getElementById('surveyForm').style.display = 'none';
    document.getElementById('confirmation').style.display = 'block';
  }
}

function submitToDatabase(data) {
  fetch('submit_feedback.php', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(data),
  })
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.error('Error:', error));
}
