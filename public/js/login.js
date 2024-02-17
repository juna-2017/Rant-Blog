const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const username = document.querySelector('#user-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      // Send a POST request to the API user endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the main page showing the posts
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    // const firstName = document.querySelector('#first-name-signup').value.trim();
    // const lastName = document.querySelector('#last-name-signup').value.trim();
    const username = document.querySelector('#user-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/posts');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  