const fs = require("fs").promises;

const  productManager= new ProductManager();
productManager.addProduct("Impresora Hp","Impresora multifuncion 2700",3800,"impresora.jpg","HP2700",2000);
productManager.addProduct("Auriculares gammer","Gammer360 grados",360,"Auriculares.jpg","Sirie780",100);
productManager.addProduct("Teclado Gammer","Teclado Ultra",500,"Teclado.jpg","Tec548",10)
  
 crearProducts = async(product) =>{
    try{
        const productsNew = await this.readProducts();
        productsNew.push(product);
        await this.guardarProducts(productsNew);

    } catch( error){
       console.log("Error al crear el usuario",error);
    }
}
 

const archivoProduct = "./archivoProduct.json";

const guardarArchivos = async() => {
    try{

    await fs.promises.writeFile(archivoProducto,json.stringify(productManager, null, 2));
 } catch(error){
   console.log("Error al guardar",error);
 }
} 
guardarArchivos();

const leerArchivoProductos = async() =>{
    try{  
   const content = await fs.promises.readFile(archivoProduct,"utf-8");
   const arraystNew = JSON.parse( content) ;
   } catch (error){

   console.log("Error al leer los products",error);
   }
}






