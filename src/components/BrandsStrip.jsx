export default function BrandsStrip() {
  return (
    <div className="brands-strip">
      {['VELO Sport', 'VELO EV', 'VELO Luxe', 'VELO Pro', 'VELO Fleet', 'VELO Connect'].map(b => (
        <div key={b} className="brand-name">{b}</div>
      ))}
    </div>
  )
}
