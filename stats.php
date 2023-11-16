<?php
    try{
        //$connex=new PDO("mysql:host=217.182.158.103;dbname=T360","enqueteopinion","UTc99@vLaaR");
        $connex=new PDO("mysql:host=localhost;port=3308;dbname=rs;charset=utf8","root","");
        $connex->exec("set names utf8");
        $sql = "SELECT platform,count(*) as nb FROM rs1 GROUP BY platform";
        $stmt = $connex->query($sql);
        $sql2 = "SELECT platform,count(*) as nb FROM visitor_log GROUP BY platform";
        $stmt2 = $connex->query($sql2);
    }
    catch(PDOException $e){
        echo $e->getMessage();
    }
    $countR=0;
    $countV=0;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nombre de réalisation par platforme</title>
    <link rel="icon" type="image/x-icon" href="./favicon.png">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>
</head>
<body>
    <div class="container mb-5">
        <div class="row mt-5">
            <div class="col-6">
                <h3 class="my-5 text-center">Nombre de visiteurs par platforme</h3>
                <table class="table mt-5">
                    <thead >
                        <th class="text-center">Platform</th>
                        <th class="text-center">Nombre de visiteurs</th>
                    </thead>
                    <tbody>
                    <?php while($row = $stmt2->fetch(PDO::FETCH_ASSOC)) : ?>
                        <tr>
                            <td class="text-center"><?php echo htmlspecialchars($row['platform']); ?></td>
                            <td class="text-center"><?php echo htmlspecialchars($row['nb']); $countV+=$row['nb']; ?></td>
                        </tr>
                    <?php endwhile; ?>
                    <tr class="bg-dark text-white"><td class="text-center">Total</td> <td class="text-center"><?php echo $countV;?></td></tr>
                    </tbody>
                </table>
            </div>
            <div class="col-6">
                <h3 class="my-5 text-center">Nombre de réalisation par platforme</h3>
                <table class="table mt-5">
                    <thead >
                        <th class="text-center">Platform</th>
                        <th class="text-center">Nombre de réalisation</th>
                    </thead>
                    <tbody>
                    <?php while($row = $stmt->fetch(PDO::FETCH_ASSOC)) : ?>
                        <tr>
                            <td class="text-center"><?php echo htmlspecialchars($row['platform']); ?></td>
                            <td class="text-center"><?php echo htmlspecialchars($row['nb']); $countR+=$row['nb']; ?></td>
                        </tr>
                    <?php endwhile; ?>
                    <tr class="bg-dark text-white"><td class="text-center">Total</td> <td class="text-center"><?php echo $countR;?></td></tr>
                    </tbody>
                </table>
            </div>
            
        </div>
        <div class="row">
            <div class="col-12 text-center">
                <a href="excel.php" class="btn btn-primary">Exporter</a>
            </div>
        </div>
    </div>
    
</body>
</html>