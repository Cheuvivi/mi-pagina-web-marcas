var imagenes = ['img/flores3.jpg','img/flores2.jpg', 'img/flores4.jpg' ,'img/flores5.jpg','img/flores6.jpg']
cont = 0; 
/*array de texto vinculado */
var textos = ["Cake Flowers","Purple Rain", "Caramel Flowers", "Fruit Salad Flowers","Bright Flowers"]

/*Array de subtexto vinculado */

var subtextos = ["Sorprende con dulzura. Nuestros ramos de Cake Flowers combinan la belleza de las flores con el encanto de los pasteles. Regala un toque delicioso a tus seres queridos con una experiencia floral única y dulcemente inolvidable. Nuestras flores Cake desprenden un dulzor único e inigualable.",
"¡Descubre la magia de Purple Rain y dale color a tus momentos especiales! Sumérgete en un mar de sensaciones con nuestro exquisito ramo de rosas. Sus pétalos morados, cautivantes y seductores, evocan la pasión y la elegancia en cada entrega. Regala amor y seduce con el encanto único de nuestras rosas. ",
"Envuélvete en el cálido abrazo de la naturaleza. Nuestros ramos de Caramel Flowers son como suaves caramelos que endulzan el alma. Disfruta de la combinación perfecta entre la elegancia floral y la dulzura de los caramelo. Una experiencia cautivadora para los amantes de los detalles exquisitos.", 
"Una explosión de frescura y color para tus sentidos. Nuestros ramos de Fruit Salad Flowers son una deliciosa mezcla de sabores y tonalidades vibrantes. Deleita tus ojos con la exuberancia de la naturaleza y regala alegría en cada pétalo. Descubre la frescura de un jardín frutal en cada arreglo floral.", 
"Ilumina tus días con la luminosidad de nuestras flores. Los ramos de Bright Flowers destellan con colores vivos y radiantes, llenando cualquier espacio de energía positiva. Deja que la belleza florezca en cada rincón y regala sonrisas con el regalo perfecto para celebrar momentos especiales."]

function carrousel (contenedor) {
	contenedor.addEventListener('click', e=> {
	let atras = contenedor.querySelector('.atras'),
	adelante = contenedor.querySelector ('.adelante'),
	img = contenedor.querySelector('#imagen'),
	tgt = e.target ;

	var texto = document.getElementById('frases');
	texto.textContent = textos[cont];

	var subtxt = document.getElementById('subtexto') ; 
	subtxt.textContent = subtextos[cont] ;

		if(tgt == atras) {
			if(cont > 0 ){
				img.src = imagenes [cont -1];
				cont -- ;
			}else {
				img.src = imagenes [imagenes.length - 1];
				cont = imagenes.length -1 ;
			}

		}else if(tgt == adelante){
			if(cont < imagenes.length - 1 ){
				img.src = imagenes [cont + 1];
				cont ++ ;
			}else {
				img.src = imagenes [0];
				cont = 0 ;
			}

		}
		/*ARRAY DE TEXTO VINCULADO */
	var texto = document.getElementById('frases');
    texto.textContent = textos[cont];

		/*subtextos*/ 
	var subtext =document.getElementById('subtexto');
	subtext.textContent = subtextos[cont];
	

	});
}



document.addEventListener("DOMContentLoaded", () => {
	let contenedor = document.querySelector('.contenedor')
	carrousel(contenedor);
});

function anyadir () {
	var inputQuantity = document.getElementById("inputQuantity").value;

	// Validar que se haya ingresado un número válido
	if (isNaN(inputQuantity) || inputQuantity <= 0) {
	  alert("Por favor, ingresa una cantidad válida.");
	  return;
	}
  
  
	
	document.getElementById("inputQuantity").value = 1;
  
	// Actualizar el contenido del elemento <span> con la cantidad actualizada
	var cartBadge = document.querySelector(".badge");
	var currentQuantity = parseInt(cartBadge.textContent);
	var newQuantity = currentQuantity + parseInt(inputQuantity);
	cartBadge.textContent = newQuantity;
  
	// Mostrar un mensaje de éxito
	if(inputQuantity<2){
		alert("¡El producto se ha añadido al carrito! Ha añadido " + inputQuantity + " unidad.");
	}else{
		alert("¡El producto se ha añadido al carrito! Ha añadido " + inputQuantity + " unidades.");
	}
	
	micarrito.prompt(inputQuantity);

}


  