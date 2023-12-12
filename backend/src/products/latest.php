<?php
require_once "../_lib/utility.php";
require_once "../_lib/database.php";

function handler(): array
{
    // Existing code for creating a new product goes here

    // Additional logic for getting the 10 most latest products
    $DB_CONN = connect("products");

    // Assuming you have a column for the creation timestamp (adjust the column name accordingly)
    $SQL = "SELECT * FROM products ORDER BY created_at DESC LIMIT 10";
    $RESULT = mysqli_query($DB_CONN, $SQL);

    if ($RESULT) {
        $STST = 200;
        $DATA = [
            "status" => $STST,
            "message" => "Products retrieved successfully",
            "data" => []
        ];

        while ($row = mysqli_fetch_assoc($RESULT)) {
            $DATA['data'][] = [
                'title' => $row['title'],
                'price' => $row['price'],
                'description' => $row['description'],
                'image' => $row['image'],
            ];
        }
    } else {
        $STST = 400;
        $DATA = [
            "status" => $STST,
            "error" => "Failed to retrieve latest products"
        ];
    }

    return [$STST, $DATA];
}

echo json_encode(...handler());
?>