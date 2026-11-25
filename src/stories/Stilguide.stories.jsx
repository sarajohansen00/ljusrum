export default { title: 'Stilguide' }

const colors = {
  Sidbakgrund: '--color-page',
  Kortyta: '--color-surface',
  Text: '--color-text',
  Accent: '--color-accent',
  Kantlinje: '--color-line',
}

export const Farger = {
  name: 'Färger',
  render: () => (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {Object.entries(colors).map(([label, token]) => (
        <li key={token} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <span aria-hidden="true" style={{
            width: '2rem', height: '2rem', background: 'var(' + token + ')',
            border: '1px solid var(--color-line)', borderRadius: '50%',
          }} />
          <span>{label} <code>{token}</code></span>
        </li>
      ))}
    </ul>
  ),
}

export const Textroller = {
  render: () => (
    <>
      <h1>Sidans huvudrubrik</h1>
      <h2>Rubrik på ett workshopkort</h2>
      <p>Brödtexten berättar vad deltagaren behöver veta om workshopen.</p>
    </>
  ),
}
