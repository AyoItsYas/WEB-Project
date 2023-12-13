<?php
require_once "../_lib/utility.php";
require_once "../_lib/database.php";

function handler(): array
{
    $DB_CONN = connect();

    $SQL = "SELECT p.*, p.visits, p.total_purchases, (p.visits + p.total_purchases) AS score
    FROM products p
    ORDER BY score DESC
    LIMIT 50
    ";

    $RESULT = mysqli_query($DB_CONN, $SQL);

    if ($RESULT) {
        $PRODUCTS = [];
        while ($PRODUCT = mysqli_fetch_assoc($RESULT)) {
            $PRODUCTS[] = $PRODUCT;
        }

        $STST = 200;
        $DATA = [
            "status" => $STST,
            "data" => $PRODUCTS,
            "message" => "Products retrieved successfully",
        ];
    } else {
        $STST = 400;
        $DATA = [
            "status" => $STST,
            "error" => "Failed to retrieve latest products"
        ];
    }

    return [$STST, $DATA];
}

respond(...handler());
?>