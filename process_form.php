<?php
    session_start();
    $jsonData = $_POST['data'];
    $formData = json_decode($jsonData, true);
    $rs1 = $formData['rs1'];
    $rs2 = $formData['rs2'];
    $rs3 = $formData['rs3'];
    $rs4 = $formData['rs4'];
    $rs4_rec= $formData['rs4_rec'];
    $rs5 = $formData['rs5'];
    $rs6 = $formData['rs6'];
    $rs7 = $formData['rs7'];
    $rs8 = $formData['rs8'];
    $q1 = $formData['q1'];
    $q2 = $formData['q2'];
    $q3 = $formData['q3'];
    $q4 = $formData['q4'];
    $q5 = $formData['q5'];
    $q6 = $formData['q6'];
    $q7 = $formData['q7'];
    $q8 = $formData['q8'];
    $q9 = $formData['q9'];
    $platform = $formData['platform'];


    $rs2_rec="";
    if($rs2 >= 18 && $rs2 <= 24)
    {
        $rs2_rec="18 - 24 ans";
    }else if($rs2 >= 25 && $rs2 <= 34)
    {
        $rs2_rec="25 - 34 ans";
    }
    else if($rs2 >= 35 && $rs2 <= 49)
    {
        $rs2_rec="35 - 49 ans";
    }
    else if($rs2 >= 50 && $rs2 <= 64)
    {
        $rs2_rec="50 - 64 ans";
    }else if($rs2 >= 65)
    {
        $rs2_rec="65 ans et plus";
    }


    $rs4_r="";
    if($rs4==1)
    {
        $rs4_r="Agriculteurs exploitants";
    }else if($rs4==2)
    {
        $rs4_r="Artisans, commerçants, chefs entreprise";
    }else if($rs4==3 || $rs4==4 || $rs4==5)
    {
        $rs4_r="Cadres, professions intellectuelles sup., professions libérales";
    }else if($rs4==6 || $rs4==7 || $rs4==8 || $rs4==9 || $rs4==10)
    {
        $rs4_r="Professions intermédiaires";
    }else if($rs4==11 || $rs4==12 || $rs4==13 || $rs4==14 || $rs4==15)
    {
        $rs4_r="Employés";
    }else if($rs4==16 || $rs4==17 || $rs4==18)
    {
        $rs4_r="Ouvriers";
    }
    else if($rs4=="null" && $rs3=="3")
    {
        $rs4_r="Retraités";
    }
    else if($rs4_rec=="null" && ($rs3==4 || $rs3==5 || $rs3==6 || $rs3==7))
    {
        $rs4_r="Autres sans activité professionnelle";
    }

    

    // Connect to the database (replace the placeholders with your database credentials)
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "rs2";
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Prepare and execute the insert query
    // $query = $conn->prepare("INSERT INTO rs1 (rs1, rs2, rs3, rs4, q1, q2, q3, q3Autre, q4, q4Autre, q5, q6, q7, q8, q9, q10, q11, email, platform) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
    // $query->bind_param( $rs1, $rs2, $rs3, $rs4, $q1, $q2, $q3, $q3Autre, $q4, $q4Autre, $q5, $q6, $q7, $q8, $q9, $q10, $q11, $email, $platform);
    $sql = "INSERT INTO `reponse`(`rs1`, `rs2`, `rs2_rec`, `rs3`, `rs4`, `rs4_rec`, `rs5`, `rs5_uda`, `rs5_region15`, `rs5_cagg`, `rs6`, `rs7`, `rs8`, `q1`, `q2`, `q3`, `q4`, `q5`, `q6`, `q7`, `q8`, `q9`) VALUES ('$rs1', '$rs2','$rs2_rec', '$rs3', '$rs4','$rs4_r', '$rs5', '$rs5_uda', '$rs5_region15','$rs5_cagg','$rs6','$rs7','$rs8', '$q1', '$q2', '$q3','$q4', '$q5', '$q6', '$q7', '$q8', '$q9' )";
    $conn->query($sql);
    $_SESSION['form_submitted'] = true;
    //$query->execute();
    //$query->close();
    $conn->close();
    echo "Success";
?>
