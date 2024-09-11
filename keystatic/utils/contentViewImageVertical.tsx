import { Uint8Array } from './Unit8Image.tsx'

export const contentViewImageVertical = (props: any) => {
  if (props.value.src)
    return (
      <div>
        <small style={{ color: 'gray' }}>
          *Positionierung und Seitenverhältnis sind in der Vorschau nicht korrekt dargestellt
        </small>
        <figure>
          <div style={{ height: '300px', width: '200px' }}>
            <Uint8Array data={props.value.src?.data} />
          </div>
          <figcaption>{props.value.caption}</figcaption>
        </figure>
      </div>
    )
  return <p>Füge ein Bild hinzu über "Edit"</p>
}
