import { useState } from 'react'
import { useLang } from '../i18n/LangContext'
import { VEHICLES_DB } from '../data/vehicles'
const CURR = { USD:{s:'$',r:1}, RUB:{s:'₽',r:92}, UZS:{s:"so'm",r:12700}, EUR:{s:'€',r:0.92} }
const MAX = 3
export default function ComparePage({ compareList, setCompareList, setPage, setCurrentVehicle }) {
  const { lang } = useLang()
  const [curr, setCurr] = useState('USD')
  const [picking, setPicking] = useState(false)
  const c = CURR[curr]
  const fmt = (u) => `${c.s}${Math.round(u*c.r).toLocaleString()}`
  const slots = [...compareList, ...Array(Math.max(0,MAX-compareList.length)).fill(null)]
  const remove = (id) => setCompareList(p=>p.filter(v=>v.id!==id))
  const add = (v) => { if(compareList.length<MAX&&!compareList.find(x=>x.id===v.id)) setCompareList(p=>[...p,v]); setPicking(false) }
  const specKeys = compareList.length>0 ? Object.keys(compareList[0].specs) : ['hp','torque','zeroSixty','drivetrain']
  return (
    <div className="page-enter">
      <div className="page-hero" style={{backgroundImage:"url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80')",minHeight:'35vh'}}>
        <div className="page-hero-content">
          <p className="page-hero-tag">VELO Motors · {lang==='ru'?'Сравнение':lang==='uz'?'Taqqoslash':'Compare'}</p>
          <h1 className="page-hero-title">⚖️ <span>{lang==='ru'?'Сравнить модели':lang==='uz'?'Modellarni taqqoslash':'Compare Models'}</span></h1>
        </div>
      </div>
      <section className="section">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'48px',flexWrap:'wrap',gap:'16px'}}>
          <p className="section-label" style={{margin:0}}>{compareList.length}/{MAX} {lang==='ru'?'ВЫБРАНО':'SELECTED'}</p>
          <div style={{display:'flex',gap:'8px',alignItems:'center'}}>
            <span style={{fontSize:'.65rem',color:'rgba(255,255,255,.4)',letterSpacing:'2px'}}>{lang==='ru'?'ВАЛЮТА':'CURRENCY'}</span>
            {Object.keys(CURR).map(k=>(
              <button key={k} className={`lang-btn ${curr===k?'lang-active':''}`} onClick={()=>setCurr(k)}>{k}</button>
            ))}
          </div>
        </div>
        <div className="compare-grid" style={{gridTemplateColumns:`180px repeat(${MAX},1fr)`}}>
          <div/>
          {slots.map((v,i)=>(
            <div key={i} className="compare-vehicle-header">
              {v?(
                <div className="compare-vehicle-card" style={{borderColor:v.accentColor+'44'}}>
                  <img src={v.heroImg} alt={v.name} className="compare-vehicle-img"/>
                  {v.badge&&<div className="compare-vehicle-badge" style={{background:v.accentColor}}>{v.badge}</div>}
                  <div className="compare-vehicle-brand">{v.brand}</div>
                  <div className="compare-vehicle-name">{v.name}</div>
                  <div className="compare-vehicle-price" style={{color:v.accentColor}}>{fmt(v.price)}</div>
                  <div style={{display:'flex',gap:'8px',marginTop:'12px'}}>
                    <button className="btn btn-outline" style={{padding:'6px 10px',fontSize:'.6rem'}} onClick={()=>{setCurrentVehicle(v);setPage('vehicle-detail')}}>{lang==='ru'?'Подробнее':'Details'}</button>
                    <button className="btn btn-outline" style={{padding:'6px 10px',fontSize:'.6rem',borderColor:'#ef4444',color:'#ef4444'}} onClick={()=>remove(v.id)}>✕</button>
                  </div>
                </div>
              ):(
                <div className="compare-add-slot" onClick={()=>setPicking(true)}>
                  <div className="compare-add-icon">+</div>
                  <div style={{fontSize:'.7rem',letterSpacing:'2px',opacity:.5}}>{lang==='ru'?'ДОБАВИТЬ':'ADD'}</div>
                </div>
              )}
            </div>
          ))}
          {specKeys.map(key=>[
            <div key={`l-${key}`} className="compare-spec-label">{key==='zeroSixty'?'0–60 mph':key.replace(/([A-Z])/g,' $1').trim()}</div>,
            ...slots.map((v,i)=>{
              if(!v) return <div key={`e-${i}`} className="compare-spec-cell" style={{opacity:.2}}>—</div>
              const val=v.specs[key]
              const allNums=compareList.map(x=>parseFloat(x.specs[key])).filter(n=>!isNaN(n))
              const n=parseFloat(val)
              const best=allNums.length>1&&!isNaN(n)&&(['hp','range','towing'].includes(key)?n===Math.max(...allNums):n===Math.min(...allNums))
              return (
                <div key={`v-${i}`} className={`compare-spec-cell ${best?'compare-best':''}`} style={best?{color:v.accentColor,fontWeight:700}:{}}>
                  {val||'—'}
                  {best&&<span className="compare-best-badge" style={{background:v.accentColor}}>{lang==='ru'?'ЛУЧШИЙ':'BEST'}</span>}
                </div>
              )
            })
          ])}
          <div className="compare-spec-label" style={{color:'#fff',fontWeight:700}}>{lang==='ru'?'Цена':'Price'}</div>
          {slots.map((v,i)=>(
            <div key={`p-${i}`} className="compare-spec-cell" style={v?{color:v.accentColor,fontWeight:700,fontSize:'1.1rem'}:{opacity:.2}}>{v?fmt(v.price):'—'}</div>
          ))}
        </div>
      </section>
      {picking&&(
        <div className="compare-modal-overlay" onClick={()=>setPicking(false)}>
          <div className="compare-modal" onClick={e=>e.stopPropagation()}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'24px'}}>
              <h3 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'1.5rem',letterSpacing:'3px'}}>{lang==='ru'?'Выбери автомобиль':'Select Vehicle'}</h3>
              <button onClick={()=>setPicking(false)} style={{background:'none',border:'none',color:'#fff',fontSize:'1.5rem',cursor:'pointer'}}>✕</button>
            </div>
            <div className="compare-pick-grid">
              {VEHICLES_DB.filter(v=>!compareList.find(c=>c.id===v.id)).map(v=>(
                <div key={v.id} className="compare-pick-card" onClick={()=>add(v)}>
                  <img src={v.heroImg} alt={v.name} style={{width:'100%',height:'80px',objectFit:'cover'}}/>
                  <div style={{padding:'10px 12px'}}>
                    <div style={{fontSize:'.6rem',color:'rgba(255,255,255,.4)',letterSpacing:'2px'}}>{v.brand}</div>
                    <div style={{fontFamily:"'Bebas Neue',sans-serif",letterSpacing:'2px',marginTop:'2px'}}>{v.name}</div>
                    <div style={{fontSize:'.75rem',color:v.accentColor,marginTop:'4px'}}>${v.price.toLocaleString()}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
