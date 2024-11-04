import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  // Filtro de los químicos y a los demás
  const quimicos = people.filter(person => person.profession === 'químico');
  const resto = people.filter(person => person.profession !== 'químico');

  // Mapeo de los químicos a elementos de lista
  const quimicos_Items = quimicos.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        conocido/a por {person.accomplishment}
      </p>
    </li>
  );

  // Mapeo de los no químicos a elementos de lista
  const resto_Items = resto.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        conocido/a por {person.accomplishment}
      </p>
    </li>
  );

  return (
    <article>
      <h1>Químicos</h1>
      <ul>{quimicos_Items}</ul>
      <h1>Todos los demás</h1>
      <ul>{resto_Items}</ul>
    </article>
  );
}