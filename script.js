/* ==========================
   EstateSpark — Compassish black/white style
   ========================== */
:root{
  --bg:#0b0b0b;
  --white:#ffffff;
  --muted:#a8a8a8;
  --accent:#000000;
  --card-bg:#111111;
  --container:1100px;
}

/* Global */
*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  font-family:'Poppins',system-ui,-apple-system,Segoe UI,Roboto,"Helvetica Neue",Arial;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  color:var(--white);
  background:var(--bg);
  line-height:1.5;
}

/* Layout container */
.container{
  max-width:var(--container);
  margin:0 auto;
  padding:0 22px;
}

/* Header */
.site-header{
  border-bottom:1px solid rgba(255,255,255,0.06);
  background:var(--bg);
  position:sticky;
  top:0;
  z-index:60;
}
.header-inner{
  display:flex;
  gap:20px;
  align-items:center;
  justify-content:space-between;
  padding:18px 0;
}
.brand .brand-name{
  font-weight:700;
  font-size:18px;
  letter-spacing:0.4px;
  color:var(--white);
}
.brand .brand-sub{
  color:var(--muted);
  font-size:12px;
}

/* Nav */
.nav ul{display:flex;gap:18px;list-style:none;margin:0;padding:0}
.nav a{color:var(--muted);text-decoration:none;font-weight:500;font-size:14px}
.nav a:hover{color:var(--white)}

/* Buttons */
.btn{
  display:inline-block;
  text-decoration:none;
  border:0;
  cursor:pointer;
  font-weight:600;
  border-radius:8px;
  padding:10px 16px;
}
.btn.primary{background:var(--white);color:var(--bg);box-shadow:0 6px 24px rgba(0,0,0,0.6)}
.btn.primary.large{padding:14px 28px;font-size:16px}
.btn.secondary{background:transparent;color:var(--white);border:1px solid rgba(255,255,255,0.08)}

/* HERO */
.hero-section{
  display:flex;
  gap:40px;
  align-items:center;
  padding:48px 0;
  border-bottom:1px solid rgba(255,255,255,0.03);
}
.hero-inner{display:flex;gap:40px;align-items:center;justify-content:space-between;flex-wrap:wrap}
.vsl-wrap{position:relative;border-radius:12px;overflow:hidden;min-width:380px;max-width:720px;height:420px;background:#000}
.vsl-video{width:100%;height:100%;object-fit:cover;display:block}
.vsl-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none}
.vsl-overlay .btn{pointer-events:auto;opacity:0.95}

/* hero text */
.hero-summary{flex:1;min-width:320px;max-width:520px}
.hero-head{font-size:28px;margin:0 0 12px 0;color:var(--white);font-weight:700}
.hero-sub{color:var(--muted);margin-bottom:20px;font-size:15px}

/* INTRO split */
.intro-section{padding:44px 0;border-bottom:1px solid rgba(255,255,255,0.03)}
.split{display:flex;gap:28px;align-items:flex-start;flex-wrap:wrap}
.split-left{flex:0 0 280px}
.profile-card{background:#0f0f0f;padding:18px;border-radius:12px;text-align:center}
.profile-img{width:100%;height:280px;object-fit:cover;border-radius:8px;display:block;margin-bottom:12px}
.split-right{flex:1;color:var(--muted)}
.section-head{color:var(--white);font-weight:600;margin-bottom:8px}
.lead{color:var(--muted);margin-bottom:10px}
.objection{background:rgba(255,255,255,0.02);padding:12px;border-radius:10px;margin:14px 0}

/* BLACK WHY section */
.why-section{background:#000;padding:56px 0;border-top:1px solid rgba(255,255,255,0.03)}
.why-head{color:var(--white);font-size:22px;margin-bottom:18px;text-align:left}
.why-text{color:var(--white);font-size:15px;max-width:920px;line-height:1.7}

/* CTA big */
.cta-big{padding:40px 0;border-bottom:1px solid rgba(255,255,255,0.03)}
.cta-inner{display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap}
.cta-micro{color:var(--muted);font-size:13px}
.cta-big h3{font-size:20px;color:var(--white)}

/* CASE STUDY + CRM */
.case-section{padding:56px 0;border-bottom:1px solid rgba(255,255,255,0.03)}
.case-inner{display:flex;gap:30px;align-items:flex-start;flex-wrap:wrap}
.case-left{flex:1;min-width:320px}
.client-box{display:flex;gap:12px;align-items:center;background:rgba(255,255,255,0.02);padding:12px;border-radius:10px;margin-bottom:18px}
.client-avatar{width:72px;height:72px;background:#222;border-radius:8px;display:flex;align-items:center;justify-content:center;font-weight:700}
.case-points ul{color:var(--muted);list-style:disc;margin-left:18px}
.case-cta{margin-top:18px}
.case-right{flex:0 0 420px}
.crm-card{background:#0f0f0f;padding:16px;border-radius:12px;border:1px solid rgba(255,255,255,0.03)}
.crm-header{font-weight:700;margin-bottom:12px}
.crm-img{width:100%;height:220px;object-fit:cover;border-radius:8px;display:block}
.crm-note{color:var(--muted);font-size:13px;margin-top:10px}

/* PROOF CTA / FINAL */
.proof-section{padding:44px 0;border-top:1px solid rgba(255,255,255,0.03);border-bottom:1px solid rgba(255,255,255,0.03)}
.proof-inner{display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap}
.proof-left p{color:var(--muted);max-width:600px}

/* FOOTER */
.site-footer{background:#070707;padding:24px 0;border-top:1px solid rgba(255,255,255,0.02)}
.footer-inner{display:flex;justify-content:space-between;color:var(--muted);font-size:13px;flex-wrap:wrap;gap:8px}

/* Utility + animations */
.hidden{opacity:0;transform:translateY(18px);transition:all .7s ease}
.fade-in{opacity:1;transform:none}

/* Responsive */
@media (max-width:980px){
  .hero-head{font-size:22px}
  .vsl-wrap{height:300px}
  .split{flex-direction:column}
  .case-inner{flex-direction:column-reverse}
  .case-right{flex:1}
  .crm-img{height:180px}
}
@media (max-width:560px){
  .nav ul{display:none}
  .header-inner{gap:10px}
  .vsl-wrap{min-width:100%}
  .hero-section{padding:28px 0}
  .hero-head{font-size:20px}
  .crm-img{height:160px}
  .contact-form{width:100%}
}
