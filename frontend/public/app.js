const API_BASE = 'http://localhost:3000';

async function handleRequest(endpoint, username, password) {
    try {
        const response = await fetch(`${API_BASE}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        });

        const text = await response.text();
        
        if (!response.ok) {
            throw new Error(text || 'Request failed');
        }

        alert(text);
    } catch (error) {
        alert(error.message);
    }
}

function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    handleRequest('/login', username, password);
}

function handleSignup() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    handleRequest('/signup', username, password);
}

function handleForgot() {
    const username = document.getElementById('username').value;
    if (!username) {
        alert('Please enter your username to reset password');
        return;
    }
    // This would typically call a password reset endpoint
    alert(`Password reset instructions would be sent to ${username}`);
}
