<?php 
    session_start();
    $heure=date("H");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Merci pour votre participation</title>
    <link rel="icon" type="image/x-icon" href="./favicon.png">
    <link rel="stylesheet" href="style2.css">
    <script src="https://code.jquery.com/jquery-3.7.0.js" integrity="sha256-JlqSTELeR4TLqP0OG9dxM7yDPqX1ox/HfgiSLBj8+kM=" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/7628dcf41c.js" crossorigin="anonymous"></script>
</head>
<body>
    <div class="main">
        <div class="success-checkmark">
            <div class="check-icon">
              <span class="icon-line line-tip"></span>
              <span class="icon-line line-long"></span>
              <div class="icon-circle"></div>
              <div class="icon-fix"></div>
            </div>
        </div>
        <div class="title">Le questionnaire est terminé</div>
        <div class="description">Nous vous remercions de votre participation à cette étude et nous vous souhaitons une bonne <?php if($heure >= 6 && $heure < 18){ echo "fin de journée";}else{echo "soirée";} ?>.<br><br><i class="fa-solid fa-face-smile emoji"></i> </div>
    </div>
     <script>
        $(document).ready(function() {
            history.pushState(null, null, location.href);
            window.onpopstate = function(event) {
                history.go(1);
            };
        });
     </script>
</body>
</html>