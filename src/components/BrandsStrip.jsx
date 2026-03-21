export default function BrandsStrip() {
  return (
    <div className="brands-strip">
      {['Chevrolet', 'GMC', 'Buick', 'Cadillac', 'BrightDrop', 'OnStar'].map(b => (
        <div key={b} className="brand-name">{b}</div>
      ))}
    </div>
  )
}
