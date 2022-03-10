<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>https.calcls</title>
    <link rel="icon" type="image/x-icon" href="https://c.tenor.com/gQV5VzHLWQIAAAAd/among-us-sus.gif">
    <style>
        header {
            background-color: #84a5d9;
            padding: 10px;

        }
        body {
            margin: 0;
        }

        header h1 {
            color: blanchedalmond;
        }

        .container {
            border: 1px solid #84a5d9;
            border-radius: 25px;
            margin: 30px;
            padding: 5px;
        }
        input{
            margin-top: 16px;
            width: 98%;
            padding: 8px;
            border: 1px  solid #6147d6;
        }

        input:hover{
            background-color: cadetblue;
        }
        button {
            padding: 8px;
            margin: 8px;
            width: 20%;
        
        }
    </style>
</head>
<body>
    
    <header>
        <h1 align="center">Calculadora Simples </h1>
    </header>

    <div class="container">
      <input type="number" id="x" placeholder="valor de x">
      <input type="number" id="y" placeholder="valor de y">
      <input type="number" id="z" placeholder="resultado" readonly>
      <button type="button" onclick="somar()">+</button>
      <button type="button" onclick="subtrair()">-</button>
      <button type="button" onclick="dividir()">/</button>
      <button type="button" onclick="multiplicar()">*</button>
    </div>


    <script>
        const somar = function(){
            let x = document.getElementById('x').value 
            let y = document.getElementById('y').value 
            z = parseFloat(x) + parseFloat(y) 
            document.getElementById('z').value = z
            console.log(z)

        }
        const subtrair= function(){
            let x = document.getElementById('x').value 
            let y = document.getElementById('y').value 
            z = parseFloat(x) - parseFloat(y) 
            document.getElementById('z').value = z
            console.log(z)
        }
            const dividir = function(){
            let x = document.getElementById('x').value 
            let y = document.getElementById('y').value 
            z = parseFloat(x) / parseFloat(y) 
            document.getElementById('z').value = z
            console.log(z)   
        }
        const multiplicar = function(){
            let x = document.getElementById('x').value 
            let y = document.getElementById('y').value 
            z = parseFloat(x) * parseFloat(y) 
            document.getElementById('z').value = z
            console.log(z)
        }
    </script>
</body>
</html>
