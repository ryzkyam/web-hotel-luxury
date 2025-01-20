<?php
// Database configuration
$host = 'localhost';
$user = 'root';
$password = 'ramadhan1900';
$database = 'hotels_luxury';

// Create connection
$conn = new mysqli($host, $user, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected to database.<br>";

// API endpoint
if ($_SERVER['REQUEST_METHOD'] === 'GET' && $_SERVER['REQUEST_URI'] === '/api') {
    echo "Server is running";
}
    
// Close connection
$conn->close();
?>