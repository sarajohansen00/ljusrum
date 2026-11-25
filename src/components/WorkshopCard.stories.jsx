import { WorkshopCard } from './WorkshopCard'

export default {
  title: 'Komponenter/Workshopkort',
  component: WorkshopCard,
  args: {
    title: 'Fotografera i kvällsljus',
    date: '12 december · kl. 15–17',
    description: 'Ta med en kamera eller en mobil till fotopromenaden.',
  },
  argTypes: {
    title: { control: 'text', name: 'Rubrik' },
    date: { control: 'text', name: 'Datum' },
    description: { control: 'text', name: 'Beskrivning' },
  },
}

export const Standard = {}
export const LangRubrik = {
  name: 'Lång rubrik i smal vy',
  args: { title: 'Fotografera stadens människor och mötesplatser i vinterns sista kvällsljus' },
  decorators: [(Story) => <div style={{ maxWidth: '20rem' }}><Story /></div>],
}
