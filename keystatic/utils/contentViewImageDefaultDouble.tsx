import { Uint8Array } from './Unit8Image.tsx'

export const contentViewImageDefaultDouble = (props: any) => {
  if (props.value.src)
    return (
      <div>
        <small style={{ color: 'gray' }}>
          *Positionierung und Seitenverhältnis sind in der Vorschau nicht korrekt dargestellt
        </small>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '49% 49%',
            width: '100%',
          }}
        >
          <figure>
            <div style={{ height: '250px' }}>
              <Uint8Array data={props.value.src?.data} />
            </div>
            <figcaption>{props.value.caption}</figcaption>
          </figure>
          <figure>
            <div style={{ height: '250px' }}>
              <Uint8Array data={props.value.srcSecond?.data} />
            </div>
            <figcaption>{props.value.captionSecond}</figcaption>
          </figure>
        </div>
      </div>
    )
  return <p>Füge ein Bild hinzu über "Edit"</p>
}
