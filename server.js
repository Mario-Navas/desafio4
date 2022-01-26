
// ---------------------- Modulos ----------------------
const express = require('express');
const bodyParser = require('body-parser');

// ---------------------- Instancia de express ----------------------/
const app = express();

// ---------------------- Middlewares ---------------------- /
app.use(express.static('public'));
// para que utilice body-parser como método de parseo de las request
app.use(express.json())   
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const productos=[]

// ---------------------- Rutas ----------------------/
const routerRutas1 = express.Router();
app.use('/api/productos', routerRutas1);


//  Muestra producto segun la id que recibe   /
routerRutas1.get('/:id', (req, res)=>{
    for (const producto of Object.keys(productos)) {
        for (const producto of Object.keys(productos)) {
            console.log(producto.id)
            if (producto.id=2) {
                res.status(200).json({msg:'Producto ', producto})
            }
        }
        }
    })

// Muestra todos los productos
routerRutas1.get('/', (req, res)=>{
    res.status(200).json({msg:'Total de Productos ingresados', productos});
});

//   Obtiene nuevo producto del formulario de entrada 
//   genera su id y lo agrega al array existente   
routerRutas1.post('/guardar', (req, res)=>{
    // obtengo el ultimo id
    let orden = 1;
    for (const producto of Object.keys(productos)) {
        orden += 1;
    }
    console.log(orden)
    // obtiene producto de formulario html
    let producto = {
        titulo: req.body.titulo,
        precio: req.body.precio,
        miniatura: req.body.miniatura,
        Id: orden
    }
    res.status(200).json({msg:'Producto  recibido', producto: producto});
    // Agrega producto recibido al array de productos
    productos.push(producto);
    res.status(200).json({msg:'Total de Productos ', productos});
//console.log(productos)

});


//  Elimina un producto por su id
routerRutas1.delete(':id', (req, res)=>{
    const borrar = productos.find((m) => m.id == id)
    if (borrar=0) {
         res.send('Producto no encontrado')    
    } else {
        productos.splice(borrar, 1); 
    }
})


// Recibe un Producto y actualiza
routerRutas1.put(':id', (req, res)=>{
    const buscar = productos.find((m) => m.id == id)
    for (const producto of Object.keys(productos)) {
    }
    if (borrar=0) {
        res.send('Producto no encontrado')    
    } else {

        let producto = {
            titulo: req.body.titulo,
            precio: req.body.precio,
            miniatura: req.body.miniatura,
            Id: orden
        }
    }
})

// ---------------------- Servidor ----------------------
const PORT = 8080;
const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en puerto ${PORT}`);
})
server.on('error', error=>{
    console.error(`Error en el servidor ${error}`);
})