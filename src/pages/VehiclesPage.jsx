import { useState } from 'react'
import { useLang } from '../i18n/LangContext'
import { VEHICLES_DB } from '../data/vehicles'
const CURR = { USD:{s:'$',r:1}, RUB:{s:'₽',r:92}, UZS:{s:"so'm",r:12700}, EUR:{s:'€',r:0.92} }
const CAT_EN = { 'All':'All','Trucks':'Trucks','SUVs':'SUVs','Cars':'Cars','Electric':'Electric','Luxury':'Luxury','Все':'All','Пикапы':'Trucks','Внедорожники':'SUVs','Седаны':'Cars','Электро':'Electric','Люкс':'Luxury','Hammasi':'All','Yuk mashinalari':'Trucks','SUV':'SUVs','Sedanlar':'Cars','Elektr':'Electric','Lyuks':'Luxury' }
export default function VehiclesPage({ setPage, setCurrentVehicle, wishlist, onWishlist }) {
  const { t, lang } = useLang()
  const v = t.vehicles
  const [filter, setFilter] = useState(v.categories[0])
  const [curr, setCurr] = useState('USD')
  const [sort, setSort] = useState('default')
  const c = CURR[curr]
  const fmt = (u) => `${c.s}${Math.round(u*c.r).toLocaleString()}`
  const enCat = CAT_EN[filter] || 'All'
  let filtered = enCat==='All' ? VEHICLES_DB : VEHICLES_DB.filter(x=>x.category===enCat)
  if(sort==='price-asc') filtered=[...filtered].sort((a,b)=>a.price-b.price)
  if(sort==='price-desc') filtered=[...filtered].sort((a,b)=>b.price-a.price)
  if(sort==='hp') filtered=[...filtered].sort((a,b)=>parseInt(b.specs.hp)-parseInt(a.specs.hp))
  return (
    <div className="page-enter">
      <div className="page-hero" style={{backgroundImage:"url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80')"}}>
        <div className="page-hero-content">
          <p className="page-hero-tag">{v.heroTag}</p>
          <h1 className="page-hero-title">{v.heroTitle1}<br/><span>{v.heroTitle2}</span><br/>{v.heroTitle3}</h1>
          <p className="page-hero-sub">{v.heroSub}</p>
        </div>
      </div>
      <div style={{background:'#0d0d0d',padding:'24px 8vw',display:'flex',gap:'12px',flexWrap:'wrap',borderBottom:'1px solid rgba(255,255,255,.06)',alignItems:'center',justifyContent:'space-between'}}>
        <div style={{display:'flex',gap:'10px',flexWrap:'wrap'}}>
          {v.categories.map(cat=>(
            <button key={cat} onClick={()=>setFilter(cat)} className={`btn ${filter===cat?'btn-primary':'btn-outline'}`} style={{padding:'10px 24px',fontSize:'.7rem'}}>{cat}</button>
          ))}
        </div>
        <div style={{display:'flex',gap:'12px',alignItems:'center',flexWrap:'wrap'}}>
          <select value={sort} onChange={e=>setSort(e.target.value)} style={{background:'rgba(255,255,255,.05)',border:'1px solid rgba(255,255,255,.1)',color:'#fff',padding:'8px 14px',fontSize:'.7rem',letterSpacing:'1px',cursor:'pointer'}}>
            <option value="default">{lang==='ru'?'Порядок по умолчанию':lang==='uz'?'Standart tartib':'Default Order'}</option>
            <option value="price-asc">{lang==='ru'?'Цена: по возрастанию':lang==='uz'?'Narx: o\'sish tartibida':'Price: Low to High'}</option>
            <option value="price-desc">{lang==='ru'?'Цена: по убыванию':lang==='uz'?'Narx: kamayish tartibida':'Price: High to Low'}</option>
            <option value="hp">{lang==='ru'?'Мощность':'Power (HP)'}</option>
          </select>
          <div style={{display:'flex',gap:'6px'}}>
            {Object.keys(CURR).map(k=><button key={k} className={`lang-btn ${curr===k?'lang-active':''}`} onClick={()=>setCurr(k)}>{k}</button>)}
          </div>
        </div>
      </div>
      <section className="section" style={{paddingTop:'48px'}}>
        <div className="vehicles-grid">
          {filtered.map(vehicle=>(
            <div className="vehicle-card" key={vehicle.id} style={{cursor:'pointer',position:'relative'}} onClick={()=>{setCurrentVehicle(vehicle);setPage('vehicle-detail')}}>
              <img src={vehicle.heroImg} alt={vehicle.name}/>
              {vehicle.badge&&<div className="vehicle-badge" style={{background:vehicle.accentColor||'var(--gm-blue)'}}>{vehicle.badge}</div>}
              <button
                className="wishlist-heart-btn"
                style={{position:'absolute',top:'12px',right:'12px',background:wishlist?.find(w=>w.id===vehicle.id)?'rgba(239,68,68,.9)':'rgba(0,0,0,.5)',border:'1px solid rgba(255,255,255,.2)',color:'#fff',width:'32px',height:'32px',cursor:'pointer',borderRadius:'50%',fontSize:'1rem',zIndex:2,transition:'all .2s'}}
                onClick={e=>{e.stopPropagation();onWishlist&&onWishlist(vehicle)}}
                title={lang==='ru'?'В избранное':lang==='uz'?'Sevimlilar':  'Add to Wishlist'}
              >
                {wishlist?.find(w=>w.id===vehicle.id)?'❤️':'🤍'}
              </button>
              <div className="vehicle-info">
                <div className="vehicle-brand">{vehicle.brand}</div>
                <div className="vehicle-name">{vehicle.name}</div>
                <div className="vehicle-tag">{vehicle.tagline}</div>
                <div style={{marginTop:'12px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  <span style={{fontSize:'.75rem',color:vehicle.accentColor||'var(--gm-accent)',fontWeight:600}}>{v.fromPrice} {fmt(vehicle.price)}</span>
                  <span style={{fontSize:'.65rem',color:'rgba(255,255,255,.4)',letterSpacing:'1px'}}>{vehicle.specs.hp} HP</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="stats-section">
        {v.statsItems.map(([n,d])=>(
          <div className="stat-item" key={d}><div className="stat-num">{n}</div><div className="stat-desc">{d}</div></div>
        ))}
      </div>
    </div>
  )
}
