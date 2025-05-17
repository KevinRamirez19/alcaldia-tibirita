import './Mision_vision.css';

const MisionVision = () => {
  return (
    <div className="container">
      <header className="institutional-header">
        <img src="https://unpscolombia2015.com/wp-content/uploads/2023/01/Alcaldia-San-Juan-De-Arama.jpg" alt="Escudo Tibirita" className="logo" />
        <h1 className="page-title">Misión y Visión</h1>
      </header>

      <div className="card mission animate-fade">
        <img src="https://www.ienh.edu.co/wp-content/uploads/2023/04/MISION-PISANDO-FIRME.png" alt="Misión" className="card-image" />
        <h2>Misión</h2>
        <p>
        De acuerdo con el artículo 311 de la Constitución Nacional, al municipio, como entidad fundamental de la división político-administrativa del Estado, le corresponde prestar los servicios públicos determinados por la ley, construir las obras que demande el progreso local, ordenar el desarrollo de su territorio, promover la participación comunitaria, el mejoramiento social y cultural de sus habitantes, y cumplir las demás funciones asignadas por la Constitución y las leyes. Esta Administración se enfocará especialmente en el desarrollo humano y social; sus actuaciones estarán orientadas a la gestión para lograr grandes resultados. Se impulsará la productividad, desarrollando las potencialidades del Municipio y asegurando el bienestar y el equilibrio del medio ambiente para las futuras generaciones.
        </p>
      </div>

      <div className="card vision animate-fade">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7g-heFrtwCbfKA8mFLdLqYGvBRhpzVtLN3g&s" alt="Visión" className="card-image" />
        <h2>Visión</h2>
        <p>
        Al finalizar el año 2027, Tibirita será reconocido como un municipio defensor y promotor de procesos ambientales, agropecuarios, sociales y culturales, enfocados en lograr la sostenibilidad, el bienestar y el progreso de su población.
        </p>
      </div>

      <div className="social-buttons">
        <a href="https://www.facebook.com/AlcTibirita?locale=es_LA" target="_blank" rel="noopener noreferrer" className="social fb">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social tw">Twitter</a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social yt">YouTube</a>
      </div>
    </div>
  );
}

export default MisionVision;
