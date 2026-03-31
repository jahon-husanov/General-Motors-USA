import { useLang } from '../i18n/LangContext'
const CURR = { USD:{s:'$',r:1}, RUB:{s:'₽',r:92}, UZS:{s:"so'm",r:12700}, EUR:{s:'€',r:0.92} }
import { useState } from 'react'
export default function WishlistPage({ wishlist, setWishlist, setPage, setCurrentVehicle }) {
  const { lang } = useLang()
  const [curr, setCurr] = useState('USD')
  const c = CURR[curr]
  const fmt = (u) => `${c.s}${Math.round(u*c.r).toLocaleString()}`
  const remove = (id) => setWishlist(p=>p.filter(v=>v.id!==id))
  const total = wishlist.reduce((sum,v)=>sum+v.price,0)
  return (
    <div className="page-enter">
      <div className="page-hero" style={{backgroundImage:"url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1600&q=80')",minHeight:'35vh'}}>
        <div className="page-hero-content">
          <p className="page-hero-tag">VELO Motors · {lang==='ru'?'Избранное':lang==='uz'?'Sevimlilar':'Wishlist'}</p>
          <h1 className="page-hero-title">❤️ <span>{lang==='ru'?'Мои автомобили':lang==='uz'?'Mening avtomobillarim':'My Vehicles'}</span></h1>
        </div>
      </div>
      <section className="section">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'40px',flexWrap:'wrap',gap:'16px'}}>
          <p className="section-label" style={{margin:0}}>{wishlist.length} {lang==='ru'?'АВТОМОБИЛЕЙ В ИЗБРАННОМ':'VEHICLES SAVED'}</p>
          <div style={{display:'flex',gap:'8px',alignItems:'center'}}>
            {Object.keys(CURR).map(k=><button key={k} className={`lang-btn ${curr===k?'lang-active':''}`} onClick={()=>setCurr(k)}>{k}</button>)}
          </div>
        </div>
        {wishlist.length===0?(
          <div style={{textAlign:'center',padding:'80px 0',opacity:.4}}>
            <div style={{fontSize:'4rem',marginBottom:'16px'}}>❤️</div>
            <p style={{fontSize:'1.2rem',fontFamily:"'Bebas Neue',sans-serif",letterSpacing:'3px'}}>
              {lang==='ru'?'Список пуст':lang==='uz'?"Ro'yxat bo'm-bo'sh":'YOUR WISHLIST IS EMPTY'}
            </p>
            <button className="btn btn-primary" style={{marginTop:'24px'}} onClick={()=>setPage('vehicles')}>{lang==='ru'?'Смотреть автомобили':'Browse Vehicles'}</button>
          </div>
        ):(
          <>
            <div className="vehicles-grid">
              {wishlist.map(v=>(
                <div className="vehicle-card" key={v.id} style={{position:'relative'}}>
                  <img src={v.heroImg} alt={v.name}/>
                  {v.badge&&<div className="vehicle-badge">{v.badge}</div>}
                  <button onClick={()=>remove(v.id)} style={{position:'absolute',top:'12px',right:'12px',background:'rgba(239,68,68,.9)',border:'none',color:'#fff',width:'28px',height:'28px',cursor:'pointer',borderRadius:'50%',fontSize:'0.8rem',fontWeight:700,zIndex:2}}>✕</button>
                  <div className="vehicle-info">
                    <div className="vehicle-brand">{v.brand}</div>
                    <div className="vehicle-name">{v.name}</div>
                    <div style={{marginTop:'12px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                      <span style={{fontSize:'.75rem',color:v.accentColor||'var(--gm-accent)',fontWeight:600}}>{fmt(v.price)}</span>
                      <span style={{fontSize:'.65rem',color:'rgba(255,255,255,.4)',letterSpacing:'1px'}}>{v.specs?.hp} HP</span>
                    </div>
                    <div style={{display:'flex',gap:'8px',marginTop:'12px'}}>
                      <button className="btn btn-primary" style={{flex:1,padding:'8px',fontSize:'.65rem'}} onClick={()=>{setCurrentVehicle(v);setPage('vehicle-detail')}}>{lang==='ru'?'Подробнее':'View'}</button>
                      <button className="btn btn-outline" style={{padding:'8px 12px',fontSize:'.65rem'}} onClick={()=>setPage('calculator')}>🧮</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {wishlist.length>1&&(
              <div style={{marginTop:'60px',background:'rgba(255,255,255,.03)',border:'1px solid rgba(255,255,255,.06)',padding:'32px',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'16px'}}>
                <div>
                  <div style={{fontSize:'.65rem',letterSpacing:'3px',color:'rgba(255,255,255,.4)',marginBottom:'8px'}}>{lang==='ru'?'ОБЩАЯ СТОИМОСТЬ ИЗБРАННОГО':'TOTAL WISHLIST VALUE'}</div>
                  <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'2.5rem',color:'var(--gm-accent)'}}>{fmt(total)}</div>
                </div>
                <button className="btn btn-outline" onClick={()=>setWishlist([])} style={{borderColor:'#ef4444',color:'#ef4444'}}>{lang==='ru'?'Очистить всё':'Clear All'}</button>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  )
}
