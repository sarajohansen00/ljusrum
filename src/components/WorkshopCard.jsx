import './WorkshopCard.css'

export function WorkshopCard({
  title = 'Fotografera i kvällsljus',
  date = '12 december · kl. 15–17',
  description = 'Vi övar på att hitta riktat ljus och välja utsnitt under en fotopromenad.',
}) {
  return (
    <article className="workshop-card">
      <p className="workshop-date">{date}</p>
      <h2>{title}</h2>
      <details>
        <summary>Om workshopen</summary>
        <p>{description}</p>
      </details>
    </article>
  )
}
