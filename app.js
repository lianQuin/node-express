//servidor

const express = require("express");
const app = express();

//aca pongo los arch estaticos
app.use(express.static('public'))

//ruta a travez del metodo get,los calback aca reciben un request y respond responde con el texto q ponemos 
app.get('/',(req,res)=>{res.send('Hola express')});

//otra ruta esta seria para contacto
 app.get('/contacto',(req,res)=>{res.send('contacto')})

/*ruta absoluta para cosas que no quiero que se vean usandoc  dirname q trae la info de la carpeta actual relacionada a la maquina donde va a estar 
app.get('/nosotros',(req,res)=>{
   res.sendFile(__dirname+ "./nosotros.html"); 
})*/
 //el purto que siempre esta escuchando
const PORT =3000;
app.listen(PORT,()=> console.log(`http://localhost:${PORT}`));

