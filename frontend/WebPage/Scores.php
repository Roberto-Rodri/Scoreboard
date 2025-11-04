<?php
    // With the next link I can open this file: http://localhost/phpmyadmin/index.php?route=/table/structure&db=scoreboard&table=scoreboards
    // Connects to the database 
    include 'database.php';
?>

<!DOCTYPE html>
<html>
    <head>
        <title>BEST SCORES</title>
        <link rel="stylesheet" href="styles.css"> 
    </head>

    <body>
        <h1>List of scores:</h1>

        <ul>
            <?php
                // Before, we must check if the connection from database.php worked
                if ($connection) {

                    // Get the top 10 scores
                    $sql = "SELECT nickname, timee FROM scoreboards ORDER BY timee ASC LIMIT 10";

                    // Run the query on the database
                    $result = mysqli_query($connection, $sql);

                    // Check if the query returned any results at all
                    if (mysqli_num_rows($result) > 0) {
                        
                        // Loop through each row of the results
                        while ($row = mysqli_fetch_assoc($result)) {
                            
                            // Use 'echo' to print an <li> for each row
                            echo "<li>" . $row['nickname'] . " - " . $row['timee'] . "</li>";
                        }
                    } else {
                        // This runs if the 'scores' table is empty
                        echo "<li>No scores yet! Be the first!</li>";
                    }
                } else {
                    // This runs if database.php failed to connect
                    echo "<li>Error: Could not connect to database.</li>";
                }
            ?>
        </ul>

        <script src="Scores.js"></script>
    </body>
</html>

