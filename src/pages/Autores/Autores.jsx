import React from 'react';
//import "./Autores.css";


function Autores() {
  const autores = [
    {
      imagen: 'https://cdn-3.expansion.mx/dims4/default/63a551c/2147483647/strip/true/crop/1000x1368+0+0/resize/1200x1642!/format/webp/quality/60/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F0d%2F68%2F9897cac047dc80218fa427068f22%2Fgettyimages-1061365848.jpg',
      nombre: 'J.K. Rowling',
      descripcion: 'Joanne Rowling, quien escribe bajo los seudónimos de J.K. Rowling y Robert Galbraith, es una escritora, productora de cine y guionista británica, conocida por ser la autora de la serie de libros Harry Potter, que han superado los quinientos millones de ejemplares vendidos.'
    },
    {
      imagen: 'https://www.planetadelibros.com.mx/usuaris/autores/fotos/83/original/000082695_1_RebeccaYarros_202307122140.jpg',
      nombre: 'Rebecca Yarros',
      descripcion: 'Rebecca Yarros es una autora estadounidense. Es mejor conocida por la serie de libros de fantasía Empyrean, que se adaptará a una serie de televisión con Amazon. El primer libro de la serie Empyrean, Fourth Wing, fue publicado en abril de 2023 por Red Tower Books. En mayo, ocupó el cuarto lugar en la lista de libros más vendidos de Libro.fm. A finales de junio, era un éxito de ventas número uno en Amazon. En septiembre de 2023, el libro había pasado 18 semanas en la lista de los más vendidos del New York Times, incluso en la primera posición.'
    },
    {
      imagen: 'https://m.media-amazon.com/images/S/amzn-author-media-prod/80rvrf599r2ernjs2f4qf8ne70.jpg',
      nombre: 'Taylor Jenkins Reid',
      descripcion: 'Taylor Jenkins Reid es una escritora, productora de televisión y guionista estadounidense. Escribe principalmente romance y sus obras más destacadas son Los siete maridos de Evelyn Hugo y Todos quieren a Daisy Jones. '
    },
    // Agrega más autores si es necesario
  ];

  return (
    <div>
      <h1 style={{ fontSize: '50px', color: '#ffff', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>Autores reconocidos </h1>
      {autores.map((autor, index) => (
        <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '30px' }}>
          <img src={autor.imagen} alt={autor.nombre} style={{ width: '150px', borderRadius: '50%', marginBottom: '15px' }} />
          <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ margin: '20', fontSize: '26px', color: '#000000' }}>{autor.nombre}</h2>
            <p style={{ margin: '50px 0 0', fontSize: '20px', color: '#000000' }}>{autor.descripcion}</p>
          </div>
        </div>
      ))}
    </div>
  );
}


export default Autores