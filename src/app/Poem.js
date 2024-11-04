const poem = {
  lines: [
    'Escribo, borro y reescribo',
    'Borro de nuevo, y luego',
    'Florece una amapola.'
  ]
};

export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) => (
        <div key={index}>
          <p>{line}</p>
          {index < poem.lines.length - 1 && <hr />}
        </div>
      ))}
    </article>
  );
}