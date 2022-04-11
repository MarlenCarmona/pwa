
export default function Inicio() {
    return (
      <>
        <main>
          <h2>Marlen Carmona Lopez</h2>
          <p>INFORMACION</p>
          <img src={process.env.PUBLIC_URL + '/mar.jpeg'} alt="imagen-prueba" height="250px"/>
          <h1>Alumna de Desarrolo y gestion de software</h1>
        </main>
      </>
    );
  }