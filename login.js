document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await axios.post('http://localhost:3000/auth/login', {
            email:email,
            password:password
        });
        if (response.status === 200) {
            alert('Login successful. Redirecting to home page.');
            window.localStorage.setItem('token', response.data.token); // Store the token
            //window.location.href = 'expense.html'; // Redirect to expense page
        }
    } catch (error) {
        console.error('Error during login:', error);
        alert('Login failed. Please try again.');
    }
});