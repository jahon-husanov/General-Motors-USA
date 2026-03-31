import { useState } from 'react'
import { useLang } from '../i18n/LangContext'
const CURR = { USD:{s:'$',r:1}, RUB:{s:'₽',r:92}, UZS:{s:"so'm",r:12700}, EUR:{s:'€',r:0.92} }
export default function VehicleDetailPage({ vehicle, setPage, onAddCompare, compareList }) {
  const { lang } = useLang()
  const [img, setImg] = useState(0)
  const [trim, setTrim] = useState(0)
  const [curr, setCurr] = useState('USD')
  const [tab, setTab] = useState('overview')
  const c = CURR[curr]
  const fmt = (u) => `${c.s}${Math.round(u*c.r).toLocaleString()}`
  const inCmp = compareList?.some(v=>v.id===vehicle.id)
  const tabs=[
    {id:'overview',l:lang==='ru'?'Обзор':lang==='uz'?"Ko'rinish":'Overview'},
    {id:'specs',l:lang==='ru'?'Характеристики':lang==='uz'?'Texnik':'Specs'},
    {id:'trims',l:lang==='ru'?'Комплектации':lang==='uz'?'Komplekt':'Trims'},
    {id:'gallery',l:lang==='ru'?'Галерея':lang==='uz'?'Galereya':'Gallery'},
  ]
  return (
    <div className="page-enter">
      <div className="vd-hero" style={{backgroundImage:`url(${vehicle.galleryImgs[img]})`}}>
        <div className="vd-hero-overlay" style={{background:`linear-gradient(to top,#0a0a0a 0%,rgba(10,10,10,.5) 50%,transparent 100%)`}}/>
        <div className="vd-breadcrumb">
          <span onClick={()=>setPage('home')} style={{cursor:'pointer',opacity:.5}}>VM</span>
          <span style={{opacity:.3}}> / </span>
          <span onClick={()=>setPage('vehicles')} style={{cursor:'pointer',opacity:.5}}>{lang==='ru'?'Автомобили':lang==='uz'?'Avtomobillar':'Vehicles'}</span>
          <span style={{opacity:.3}}> / </span>
          <span style={{color:vehicle.accentColor}}>{vehicle.name}</span>
        </div>
        <div className="vd-hero-content">
          <div className="vd-hero-left">
            {vehicle.badge&&<div className="vd-badge" style={{background:vehicle.accentColor}}>{vehicle.badge}</div>}
            <div className="vd-brand">{vehicle.brand} · {vehicle.year}</div>
            <h1 className="vd-title">{vehicle.name}</h1>
            <p className="vd-tagline">"{vehicle.tagline}"</p>
            <div className="vd-hero-price-row">
              <div>
                <div style={{fontSize:'.6rem',letterSpacing:'3px',color:'rgba(255,255,255,.4)',marginBottom:'4px'}}>{lang==='ru'?'ЦЕНА ОТ':lang==='uz'?'NARXI':'STARTING AT'}</div>
                <div className="vd-hero-price" style={{color:vehicle.accentColor}}>{fmt(vehicle.price)}</div>
              </div>
              <div className="vd-currency-mini">
                {Object.keys(CURR).map(k=>(
                  <button key={k} className={`lang-btn ${curr===k?'lang-active':''}`} onClick={()=>setCurr(k)}>{k}</button>
                ))}
              </div>
            </div>
            <div className="vd-hero-actions">
              <button className="btn btn-primary" onClick={()=>setPage('calculator')}>{lang==='ru'?'🧮 Рассчитать':lang==='uz'?"🧮 Hisoblash":'🧮 Calculate'}</button>
              <button className={`btn ${inCmp?'btn-accent':'btn-outline'}`} onClick={()=>onAddCompare&&onAddCompare(vehicle)}>
                {inCmp?(lang==='ru'?'✓ В сравнении':'✓ Compare'):(lang==='ru'?'⚖️ Сравнить':'⚖️ Compare')}
              </button>
            </div>
          </div>
          <div className="vd-quick-specs">
            {Object.entries(vehicle.specs).slice(0,4).map(([k,v])=>(
              <div className="vd-qs-item" key={k}>
                <div className="vd-qs-val" style={{color:vehicle.accentColor}}>{v}</div>
                <div className="vd-qs-key">{k==='zeroSixty'?'0–60':k}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="vd-thumbs">
          {vehicle.galleryImgs.map((src,i)=>(
            <div key={i} className={`vd-thumb ${img===i?'vd-thumb-active':''}`}
              style={{backgroundImage:`url(${src})`,borderColor:img===i?vehicle.accentColor:'transparent'}}
              onClick={()=>setImg(i)}/>
          ))}
        </div>
      </div>
      <div className="vd-tabs-bar">
        {tabs.map(t=>(
          <button key={t.id} className={`vd-tab ${tab===t.id?'vd-tab-active':''}`}
            style={tab===t.id?{borderBottomColor:vehicle.accentColor,color:'#fff'}:{}}
            onClick={()=>setTab(t.id)}>{t.l}</button>
        ))}
      </div>
      <div className="section" style={{paddingTop:'60px',minHeight:'60vh'}}>
        {tab==='overview'&&(
          <div className="vd-overview">
            <div className="vd-description-col">
              <p className="section-label">{lang==='ru'?'О МОДЕЛИ':lang==='uz'?'MODEL HAQIDA':'ABOUT'}</p>
              <h2 className="section-title" style={{fontSize:'2.5rem'}}>{vehicle.name}</h2>
              {vehicle.description.split('\n\n').map((p,i)=>(
                <p key={i} style={{fontSize:'.95rem',color:'rgba(255,255,255,.65)',lineHeight:1.9,marginBottom:'24px',fontWeight:300}}>{p}</p>
              ))}
              {vehicle.awards?.length>0&&(
                <div className="vd-awards">
                  <div style={{fontSize:'.65rem',letterSpacing:'3px',color:'rgba(255,255,255,.3)',marginBottom:'12px'}}>{lang==='ru'?'🏆 НАГРАДЫ':'🏆 AWARDS'}</div>
                  {vehicle.awards.map((a,i)=><div key={i} className="vd-award-chip">🏆 {a}</div>)}
                </div>
              )}
            </div>
            <div className="vd-features-col">
              <p className="section-label">{lang==='ru'?'ОСОБЕННОСТИ':'KEY FEATURES'}</p>
              {vehicle.features.map((f,i)=>(
                <div className="vd-feature-card" key={i} style={{borderLeftColor:vehicle.accentColor}}>
                  <div className="vd-feature-icon">{f.icon}</div>
                  <div><div className="vd-feature-title">{f.title}</div><div className="vd-feature-desc">{f.desc}</div></div>
                </div>
              ))}
              <div style={{marginTop:'40px'}}>
                <p className="section-label">{lang==='ru'?'ЦВЕТА':'COLORS'}</p>
                <div className="vd-colors">{vehicle.colors.map((col,i)=><div key={i} className="vd-color-chip">{col}</div>)}</div>
              </div>
            </div>
          </div>
        )}
        {tab==='specs'&&(
          <div className="vd-specs-grid">
            <div>
              <p className="section-label">{lang==='ru'?'ТЕХНИЧЕСКИЕ ДАННЫЕ':'SPECIFICATIONS'}</p>
              <h2 className="section-title" style={{fontSize:'2.5rem',marginBottom:'40px'}}>{vehicle.name} <span style={{color:vehicle.accentColor}}>{vehicle.year}</span></h2>
              <div className="vd-specs-table">
                {Object.entries(vehicle.specs).map(([k,v])=>(
                  <div className="vd-spec-row" key={k}>
                    <div className="vd-spec-key">{k==='zeroSixty'?'0–60 mph':k.replace(/([A-Z])/g,' $1').trim()}</div>
                    <div className="vd-spec-val" style={{color:vehicle.accentColor}}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="vd-stat-bars">
              <p className="section-label">{lang==='ru'?'РЕЙТИНГ':'PERFORMANCE RATING'}</p>
              {[
                {l:lang==='ru'?'Мощность':'Power', v:Math.min(100,parseInt(vehicle.specs.hp)/10)},
                {l:lang==='ru'?'Разгон':'Acceleration', v:vehicle.specs.zeroSixty?Math.max(5,100-parseFloat(vehicle.specs.zeroSixty)*10):60},
                {l:lang==='ru'?'Комфорт':'Comfort', v:vehicle.category==='Luxury'?95:vehicle.category==='Trucks'?70:80},
                {l:lang==='ru'?'Технологии':'Technology', v:vehicle.badge==='EV'?95:80},
                {l:lang==='ru'?'Ценность':'Value', v:Math.max(40,100-(vehicle.price/4000))},
              ].map(({l,v})=>(
                <div key={l} className="vd-stat-bar-item">
                  <div className="vd-stat-bar-label"><span>{l}</span><span style={{color:vehicle.accentColor}}>{Math.round(v)}/100</span></div>
                  <div className="vd-stat-bar-track"><div className="vd-stat-bar-fill" style={{width:`${v}%`,background:vehicle.accentColor}}/></div>
                </div>
              ))}
            </div>
          </div>
        )}
        {tab==='trims'&&(
          <div>
            <p className="section-label">{lang==='ru'?'КОМПЛЕКТАЦИИ':'TRIM LEVELS'}</p>
            <h2 className="section-title" style={{fontSize:'2.5rem',marginBottom:'48px'}}>{lang==='ru'?'Выберите свою':'Choose Yours'}</h2>
            <div className="vd-trims-grid">
              {vehicle.trims.map((t,i)=>(
                <div key={t.name} className={`vd-trim-card ${trim===i?'vd-trim-active':''}`}
                  style={trim===i?{borderColor:vehicle.accentColor,boxShadow:`0 0 40px ${vehicle.accentColor}22`}:{}}
                  onClick={()=>setTrim(i)}>
                  {i===Math.floor(vehicle.trims.length/2)&&(
                    <div className="vd-trim-popular" style={{background:vehicle.accentColor}}>{lang==='ru'?'ПОПУЛЯРНЫЙ':'POPULAR'}</div>
                  )}
                  <div className="vd-trim-name">{t.name}</div>
                  <div className="vd-trim-price" style={{color:vehicle.accentColor}}>{fmt(t.price)}</div>
                  <div className="vd-trim-features">
                    {t.features.map((f,fi)=><div key={fi} className="vd-trim-feature"><span style={{color:vehicle.accentColor}}>✓</span> {f}</div>)}
                  </div>
                  {trim===i&&(
                    <button className="btn btn-primary" style={{marginTop:'20px',width:'100%',background:vehicle.accentColor}} onClick={(e)=>{e.stopPropagation();setPage('calculator')}}>
                      {lang==='ru'?'Рассчитать':'Calculate'}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        {tab==='gallery'&&(
          <div>
            <p className="section-label">{lang==='ru'?'ГАЛЕРЕЯ':'GALLERY'}</p>
            <h2 className="section-title" style={{fontSize:'2.5rem',marginBottom:'40px'}}>{vehicle.name} — {lang==='ru'?'Все ракурсы':'Every Angle'}</h2>
            <img src={vehicle.galleryImgs[img]} alt={vehicle.name} style={{width:'100%',maxHeight:'70vh',objectFit:'cover',display:'block'}}/>
            <div className="vd-gallery-strip">
              {vehicle.galleryImgs.map((src,i)=>(
                <div key={i} className={`vd-gallery-thumb ${img===i?'vd-gallery-thumb-active':''}`}
                  style={{backgroundImage:`url(${src})`,borderColor:img===i?vehicle.accentColor:'transparent'}}
                  onClick={()=>setImg(i)}/>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="vd-cta-strip" style={{background:vehicle.accentColor+'18',borderTop:`1px solid ${vehicle.accentColor}33`}}>
        <span style={{opacity:.7,fontSize:'.8rem',letterSpacing:'2px'}}>{lang==='ru'?'ДРУГИЕ МОДЕЛИ':'MORE MODELS'}</span>
        <button className="btn btn-outline" onClick={()=>setPage('vehicles')}>{lang==='ru'?'← Все':'← All Vehicles'}</button>
        <button className="btn btn-primary" style={{background:vehicle.accentColor}} onClick={()=>setPage('compare')}>{lang==='ru'?'⚖️ Сравнить':'⚖️ Compare'}</button>
      </div>
    </div>
  )
}
