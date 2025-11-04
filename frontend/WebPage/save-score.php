<?php

// Connect to the database
include 'database.php';

// Check if the connection was successful
if (!$connection) {
    die("Database connection failed."); // Stop if we can't connect
}

// Get the data from the POST request
// We use $_POST to receive them
$nickname = $_POST['nickname'];
$timee = $_POST['finalTime'];

// We use "?" as placeholders to prevent SQL Injection attacks.
$sql = "INSERT INTO scoreboards (nickname, timee) VALUES (?, ?)";

// Prepare the statement
$stmt = mysqli_prepare($connection, $sql);

// Bind the variables
// "ss" means we are binding two strings (s)
mysqli_stmt_bind_param($stmt, "ss", $nickname, $timee);

// Execute the statement and check for success
if (mysqli_stmt_execute($stmt)) {
    echo "New score saved successfully!";
} else {
    echo "Error: Could not save score.";
}

// Close the statement and connection
mysqli_stmt_close($stmt);
mysqli_close($connection);

?>