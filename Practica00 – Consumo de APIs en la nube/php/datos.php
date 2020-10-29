<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" >
    
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/diseno.css">
    <title>Document</title>
</head>
<body style="background-color: #575757;">

    <header  class="container-fluid" id="cabecera">
        <div class="row" >
            <div class="col-xs-6">
                <img src="../imagenes/logos2.png"  id="logo">
            </div>
        </div>
        
        
    </header>

    <?php 

        $ID = $_GET['ID']; 
        $AUTOR = $_GET['AUTOR']; 
        $IMAGEN = $_GET['IMAGEN']; 

        $TITULO = $_GET['TITULO']; 
        $DESCARGA = $_GET['DESCARGA']; 
        $PAGINAS = $_GET['PAGINAS']; 

        $EDITPRIAL = $_GET['EDITPRIAL']; 
        $LENGUAJE = $_GET['LENGUAJE']; 
 
    ?> 

    <div class="container-fluid"> 
        <div class="row" id="datitos">
            <div class="col-xs-4" >
                <img src="<?php echo"$IMAGEN" ?>" alt="" >   
            </div>
            <div class="col-xs-8"  >
                <p><strong>Titulo:</strong> <?php echo "$TITULO" ?></p>
                <p><strong>Autor:</strong> <?php echo "$AUTOR" ?></p>
                <p><strong>Identificador:</strong> <?php echo "$ID" ?></p>
                <p><strong>Numero de Paginas:</strong> <?php echo "$PAGINAS" ?></p>
                <p><strong>Editorial:</strong> <?php echo "$EDITPRIAL" ?></p>
                <p><strong>Lenguaje:</strong> <?php echo "$LENGUAJE" ?></p>
                <p><strong>Descargar::</strong> <<a href="<?php echo "$DESCARGA" ?>">Pulsa Aqui</a></p>
            </div>
        </div>
    </div>

    

    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="../js/controlador.js"></script>
    
</body>

<!--
<script src="../js/jquery.js"></script>
<script src="../js/bootstrap.js"></script>
-->
</html>


