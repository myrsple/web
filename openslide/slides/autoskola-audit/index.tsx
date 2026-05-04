import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import noindexImg from './assets/noindex-screenshot.png';
import serpAutoskolaImg from './assets/serp-autoskola.png';
import serpAutoskolagoImg from './assets/serp-autoskolago.png';
import designLogoImg from './assets/design-logo.png';
import designBrandBarvyImg from './assets/design-brand-barvy.png';
import designNavigaceImg from './assets/design-navigace.png';
import designFontyImg from './assets/design-fonty.png';
import designJazykoveMutaceImg from './assets/design-jazykove-mutace.png';
import logoWImg from './assets/logow.png';
import logoRndImg from './assets/li-profile.png';
const h1VideoUrl = new URL('./assets/autoskola-h1.mov', import.meta.url).href;

export const design: DesignSystem = {
  palette: {
    bg: '#0a0a0a',
    text: '#f2f2f2',
    accent: '#e8552a',
  },
  fonts: {
    display: '"Inter", system-ui, -apple-system, sans-serif',
    body: '"Inter", system-ui, -apple-system, sans-serif',
  },
  typeScale: { hero: 160, body: 38 },
  radius: 4,
};

const muted = '#6e6e6e';
const surface = '#141414';
const border = 'rgba(255,255,255,0.08)';
const green = '#5e9e6e';

const ANIM = `
  @keyframes wn-fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes wn-fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`;

const fill: React.CSSProperties = {
  width: '100%',
  height: '100%',
  background: 'var(--osd-bg)',
  color: 'var(--osd-text)',
  fontFamily: 'var(--osd-font-body)',
  overflow: 'hidden',
  position: 'relative',
};

const anim = (delay = 0, type: 'wn-fadeUp' | 'wn-fadeIn' = 'wn-fadeUp'): React.CSSProperties => ({
  animation: `${type} 0.5s ease-out ${delay}ms both`,
});

const eyebrow = (delay = 0): React.CSSProperties => ({
  ...anim(delay),
  fontSize: 22,
  letterSpacing: '0.2em',
  color: 'var(--osd-accent)',
  textTransform: 'uppercase',
  marginBottom: 20,
});

const heading = (delay = 80): React.CSSProperties => ({
  ...anim(delay),
  fontFamily: 'var(--osd-font-display)',
  fontSize: 80,
  fontWeight: 800,
  lineHeight: 1.1,
  margin: '0 0 56px',
  letterSpacing: '-0.02em',
});

const dot: React.CSSProperties = {
  width: 7,
  height: 7,
  borderRadius: '50%',
  background: 'var(--osd-accent)',
  flexShrink: 0,
};

const accentBar: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  right: 0,
  width: 6,
  height: '100%',
  background: 'var(--osd-accent)',
};

const mediaSlide: React.CSSProperties = {
  ...fill,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const mediaFit: React.CSSProperties = {
  maxWidth: 'calc(100% - 160px)',
  maxHeight: 'calc(100% - 120px)',
  objectFit: 'contain',
  borderRadius: 6,
  border: `1px solid ${border}`,
};

const withLogoMark = (P: Page): Page => () => (
  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
    <P />
    <img src={logoRndImg} alt="" style={{ position: 'absolute', bottom: 60, right: 72, height: 104, width: 'auto', objectFit: 'contain', pointerEvents: 'none' } as React.CSSProperties} />
  </div>
);

// ─── Page 1: Cover ────────────────────────────────────────────────────────────
const Cover: Page = () => (
  <div style={{ ...fill, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 160px' }}>
    <style>{ANIM}</style>
    <div style={{ ...anim(0), fontSize: 22, letterSpacing: '0.2em', color: muted, textTransform: 'uppercase', marginBottom: 40 }}>
      Wicked Nice × Autoškola.cz
    </div>
    <h1 style={{
      ...anim(100),
      fontFamily: 'var(--osd-font-display)',
      fontSize: 148,
      fontWeight: 900,
      lineHeight: 1.0,
      margin: '0 0 28px',
      letterSpacing: '-0.04em',
    }}>
      autoskola.cz
    </h1>
    <div style={{ ...anim(200), fontSize: 60, fontWeight: 300, lineHeight: 1.2, marginBottom: 56 }}>SEO a designový audit</div>
    <img src={logoWImg} alt="Wicked Nice" style={{ ...anim(300, 'wn-fadeIn'), width: '100%', height: 'auto', objectFit: 'contain' } as React.CSSProperties} />
    <div style={{ ...anim(0, 'wn-fadeIn'), ...accentBar }} />
  </div>
);

// ─── Page 2: SEO Overview (section opener) ────────────────────────────────────
const SeoOverview: Page = () => (
  <div style={{ ...fill, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 160px' }}>
    <style>{ANIM}</style>
    <div style={{ ...anim(0), fontSize: 22, letterSpacing: '0.2em', color: muted, textTransform: 'uppercase', marginBottom: 32 }}>
      01 / SEO
    </div>
    <h2 style={{ ...anim(100), fontFamily: 'var(--osd-font-display)', fontSize: 110, fontWeight: 900, lineHeight: 1.0, margin: '0 0 72px', letterSpacing: '-0.03em' }}>
      Klíčové výstupy z auditu
    </h2>
    <div style={{ ...anim(200), display: 'flex', gap: 16, flexWrap: 'nowrap' }}>
      {([
        'Indexace',
        'Metadata',
        'Čtení stroji',
        'Označování firmy',
      ]).map((item, i) => (
        <div key={item} style={{
          padding: '14px 28px',
          background: surface,
          border: `1px solid ${border}`,
          borderRadius: 4,
          fontSize: 28,
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          whiteSpace: 'nowrap',
        }}>
          <span style={{ color: 'var(--osd-accent)', fontWeight: 700, fontSize: 20 }}>0{i + 1}</span>
          {item}
        </div>
      ))}
    </div>
    <div style={{ ...anim(0, 'wn-fadeIn'), ...accentBar }} />
  </div>
);

// ─── Page 3: #1 Finding — noindex ─────────────────────────────────────────────
const FindingNoindex: Page = () => (
  <div style={{ ...fill, padding: '120px 160px' }}>
    <style>{ANIM}</style>
    <div style={eyebrow()}>SEO / Nález č. 1</div>
    <h2 style={{ ...anim(80), fontFamily: 'var(--osd-font-display)', fontSize: 72, fontWeight: 800, lineHeight: 1.1, margin: '0 0 52px', letterSpacing: '-0.02em' }}>
      Web je neviditelný pro Google
    </h2>
    <div style={{ ...anim(160), display: 'inline-block', background: surface, border: `1px solid rgba(232,85,42,0.3)`, borderLeft: '4px solid var(--osd-accent)', padding: '16px 32px', borderRadius: 4, marginBottom: 44 }}>
      <code style={{ fontFamily: '"JetBrains Mono", "SF Mono", ui-monospace, monospace', fontSize: 28, color: 'var(--osd-accent)' }}>
        &lt;meta name=&quot;robots&quot; content=&quot;noindex, nofollow&quot;&gt;
      </code>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {([
        [220, 'WordPress aktivně brání indexaci webu.'],
        [340, 'Google ani AI modely vás nezmíní, protože web nemůžou číst.'],
      ] as [number, string][]).map(([delay, text]) => (
        <div key={text} style={{ ...anim(delay), display: 'flex', alignItems: 'flex-start', gap: 20 }}>
          <div style={{ ...dot, marginTop: 15 }} />
          <div style={{ fontSize: 36, lineHeight: 1.5 }}>{text}</div>
        </div>
      ))}
    </div>
  </div>
);

// ─── Page 3: SERP & Social Preview ────────────────────────────────────────────
const SerpSocial: Page = () => (
  <div style={{ ...fill, padding: '120px 160px' }}>
    <style>{ANIM}</style>
    <div style={eyebrow()}>SEO / Nález č. 2</div>
    <h2 style={heading()}>SERP &amp; Social Preview</h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {([
        [160, 'Meta description', 'Chybí. Google vezme text cookie banneru a zobrazí ho jako popis firmy ve výsledcích.'],
        [220, 'Open Graph tagy', 'Chybí. Odkaz sdílený ve WhatsApp nebo Messengeru vypadá jako prázdná URL.'],
      ] as [number, string, string][]).map(([delay, label, text]) => (
        <div key={label} style={{ ...anim(delay), display: 'flex', gap: 0, alignItems: 'flex-start' }}>
          <div style={{ minWidth: 260, fontSize: 26, fontWeight: 700, color: 'var(--osd-accent)', paddingTop: 4, paddingRight: 32 }}>
            {label}
          </div>
          <div style={{ fontSize: 34, lineHeight: 1.55, borderLeft: `2px solid ${border}`, paddingLeft: 32, color: 'var(--osd-text)' }}>
            {text}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ─── Page 4: Machine Readability ──────────────────────────────────────────────
const MachineReadability: Page = () => (
  <div style={{ ...fill, padding: '120px 160px' }}>
    <style>{ANIM}</style>
    <div style={eyebrow()}>SEO / Nález č. 3</div>
    <h2 style={heading()}>Strojová čitelnost</h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
      {([
        [160, '01', 'Schema.org JSON-LD', 'Chybí. Google ani Claude nevědí, kdo jste, kde sídlíte, co nabízíte.'],
        [220, '02', '7× H1 místo jednoho', 'Hero text je rozbit do 3 H1 tagů. Sekční nadpisy také H1. Správně: 1× H1, ostatní H2/H3.'],
        [280, '03', '88 obrázků, ~0 s alt textem', 'Google Images je nevidí. Screen readery nemají co číst.'],
      ] as [number, string, string, string][]).map(([delay, num, label, text]) => (
        <div key={num} style={{ ...anim(delay), display: 'flex', gap: 28, alignItems: 'flex-start' }}>
          <div style={{ fontSize: 24, fontWeight: 800, color: 'var(--osd-accent)', minWidth: 32, paddingTop: 4 }}>{num}</div>
          <div>
            <div style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>{label}</div>
            <div style={{ fontSize: 32, lineHeight: 1.5, color: '#b0b0b0' }}>{text}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ─── Page 5: Brand Consistency ────────────────────────────────────────────────
// Budget: eyebrow 42 + heading 136 + intro 28+36 + 4 rows × (44+14) + fix 28 = 42+136+64+232+56+28 = 558px ✅
const BrandConsistency: Page = () => (
  <div style={{ ...fill, padding: '120px 160px' }}>
    <style>{ANIM}</style>
    <div style={eyebrow()}>SEO / Nález č. 4</div>
    <h2 style={{ ...heading(), margin: '0 0 40px' }}>Brand konzistence</h2>
    <div style={{ ...anim(140), fontSize: 28, color: '#b0b0b0', marginBottom: 28 }}>
      Jedna firma, IČO 48318787. Tři různé názvy napříč kanály:
    </div>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {([
        [180, 'Web & logo', 'autoskola.cz'],
        [220, 'Facebook', 'Autoškola Novovysočanská'],
        [260, 'Firmy.cz (2× duplicitní zápis)', 'Autoškola CZ / Autoškola Novovysočanská'],
        [300, 'Vsechny-autoskoly.cz, Penize.cz', 'Autoškola Novovysočanská'],
      ] as [number, string, string][]).map(([delay, channel, name], i, arr) => (
        <div key={channel} style={{
          ...anim(delay),
          display: 'flex',
          alignItems: 'center',
          padding: '14px 0',
          borderBottom: `1px solid ${border}`,
          borderTop: i === 0 ? `1px solid ${border}` : undefined,
        }}>
          <div style={{ minWidth: 440, fontSize: 26, color: muted }}>{channel}</div>
          <div style={{ fontSize: 32, fontWeight: 600 }}>{name}</div>
        </div>
      ))}
    </div>
    <div style={{ ...anim(360), marginTop: 36, fontSize: 27, color: green }}>
      Řešení: sjednotit na &ldquo;Autoškola.cz&rdquo;. Odpovídá doméně. Snadno zapamatovatelné.
    </div>
  </div>
);

// ─── Page 6: Diagnosis — blockers + opportunities ────────────────────────────
// Budget (padding 100px T/B, budget 880px):
//   eyebrow 44 + heading 119 = 163px. Remaining 717px.
//   Col header 51px. Left 5 tiles (75px ea, gap 10): 375+40=415. Total L: 466px ✅
//   Right 6 tiles: 450+50=500. Total R: 551px ✅
const ActionPlan: Page = () => (
  <div style={{ ...fill, padding: '100px 140px' }}>
    <style>{ANIM}</style>
    <div style={{ ...eyebrow(), letterSpacing: '0.2em', marginBottom: 16 }}>SEO</div>
    <h2 style={{ ...anim(80), fontFamily: 'var(--osd-font-display)', fontSize: 68, fontWeight: 800, lineHeight: 1.1, margin: '0 0 44px', letterSpacing: '-0.02em' }}>
      Kde jsme a kam můžeme růst?
    </h2>
    <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
      {/* Left: blockers */}
      <div style={{ ...anim(160), flex: 1 }}>
        <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--osd-accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>
          Prioritní opravy
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {([
            'Povolení indexace',
            'Meta a socials popisky',
            'Obsahová struktura',
            'Doplnění alt textů',
            'Sjednocení názvů firmy',
          ]).map((item, i) => (
            <div key={item} style={{
              ...anim(160 + i * 40),
              background: 'rgba(232,85,42,0.05)',
              border: `1px solid rgba(232,85,42,0.2)`,
              borderRadius: 6,
              padding: '16px 22px',
              display: 'flex',
              gap: 14,
              alignItems: 'flex-start',
            }}>
              <div style={{ ...dot, width: 5, height: 5, marginTop: 11, background: 'var(--osd-accent)', flexShrink: 0 }} />
              <div style={{ fontSize: 25, lineHeight: 1.4 }}>{item}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Right: opportunities */}
      <div style={{ ...anim(220), flex: 1 }}>
        <div style={{ fontSize: 22, fontWeight: 700, color: green, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>
          Maximalizace vyhledatelnosti
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {([
            'Google Business Profile',
            'FAQ a obsahové stránky pro zachycení klíčových slov',
            'Dokončení lokalizací EN a RU',
            'Optimizace rychlosti',
            'robots.txt, sitemapa a Google Search Console',
          ]).map((item, i) => (
            <div key={item} style={{
              ...anim(220 + i * 40),
              background: surface,
              border: `1px solid ${border}`,
              borderRadius: 6,
              padding: '16px 22px',
              display: 'flex',
              gap: 14,
              alignItems: 'flex-start',
            }}>
              <div style={{ ...dot, width: 5, height: 5, marginTop: 11, background: green, flexShrink: 0 }} />
              <div style={{ fontSize: 25, lineHeight: 1.4 }}>{item}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// ─── Page 7: Design Overview (section divider + 5 topics) ─────────────────────
// Budget: label 24+32 + heading 120+72 + chips row 44 = 292px ✅
const DesignOverview: Page = () => (
  <div style={{ ...fill, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 160px' }}>
    <style>{ANIM}</style>
    <div style={{ ...anim(0), fontSize: 22, letterSpacing: '0.2em', color: muted, textTransform: 'uppercase', marginBottom: 32 }}>
      02 / Design
    </div>
    <h2 style={{ ...anim(100), fontFamily: 'var(--osd-font-display)', fontSize: 110, fontWeight: 900, lineHeight: 1.0, margin: '0 0 72px', letterSpacing: '-0.03em' }}>
      Přehled výstupů z auditu
    </h2>
    <div style={{ ...anim(200), display: 'flex', gap: 16, flexWrap: 'nowrap' }}>
      {(['Logo', 'Brand barvy', 'Navigace', 'Typografie', 'Jazykové mutace'] as const).map((item, i) => (
        <div key={item} style={{
          padding: '14px 28px',
          background: surface,
          border: `1px solid ${border}`,
          borderRadius: 4,
          fontSize: 28,
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          whiteSpace: 'nowrap',
        }}>
          <span style={{ color: 'var(--osd-accent)', fontWeight: 700, fontSize: 20 }}>0{i + 1}</span>
          {item}
        </div>
      ))}
    </div>
    <div style={{ ...anim(0, 'wn-fadeIn'), ...accentBar }} />
  </div>
);

// ─── Page 8: Logo ─────────────────────────────────────────────────────────────
const LogoSlide: Page = () => (
  <div style={{ ...fill, padding: '80px 160px', display: 'flex', flexDirection: 'column' }}>
    <style>{ANIM}</style>
    <div>
      <div style={eyebrow()}>Design / 01</div>
      <h2 style={heading()}>Logo</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
        {([
          [160, 'AI generované – název souboru ChatGPT-Image-15.-2.-2026.'],
          [220, '3D efekt nefunguje na tiskovinách a malých formátech.'],
          [280, 'Jiný font než zbytek webu – nesoulad na první pohled.'],
          [340, 'Barvy loga nesedí s barvami webu.'],
        ] as [number, string][]).map(([delay, text]) => (
          <div key={text} style={{ ...anim(delay), display: 'flex', alignItems: 'flex-start', gap: 22 }}>
            <div style={{ ...dot, marginTop: 16 }} />
            <div style={{ fontSize: 36, lineHeight: 1.5 }}>{text}</div>
          </div>
        ))}
      </div>
    </div>
    <div style={{ flex: 1, minHeight: 0, marginTop: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src={designLogoImg} alt="" style={{ ...anim(400, 'wn-fadeIn'), maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' } as React.CSSProperties} />
    </div>
  </div>
);

// ─── Page 9: Brand Colors ─────────────────────────────────────────────────────
const BrandColors: Page = () => (
  <div style={{ ...fill, padding: '80px 160px', display: 'flex', flexDirection: 'column' }}>
    <style>{ANIM}</style>
    <div>
      <div style={eyebrow()}>Design / 02</div>
      <h2 style={heading()}>Brand barvy</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
        <div style={anim(160)}>
          <div style={{ fontSize: 26, fontWeight: 700, color: 'var(--osd-accent)', marginBottom: 12 }}>Kontrast</div>
          <div style={{ fontSize: 36, lineHeight: 1.5 }}>
            Bílá na světle modré je méně čitelná. V delších textech to vadí.
          </div>
        </div>
        <div style={anim(240)}>
          <div style={{ fontSize: 26, fontWeight: 700, color: 'var(--osd-accent)', marginBottom: 12 }}>Harmonie a kontrast</div>
          <div style={{ fontSize: 36, lineHeight: 1.5 }}>
            Barvy potřebují lehký posun. Oranžová má být výraznější, teď splývá se zbytkem.
          </div>
        </div>
      </div>
    </div>
    <div style={{ flex: 1, minHeight: 0, marginTop: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src={designBrandBarvyImg} alt="" style={{ ...anim(320, 'wn-fadeIn'), maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' } as React.CSSProperties} />
    </div>
  </div>
);

// ─── Page 10: Navigation ──────────────────────────────────────────────────────
const Navigation: Page = () => (
  <div style={{ ...fill, padding: '80px 160px', display: 'flex', flexDirection: 'column' }}>
    <style>{ANIM}</style>
    <div>
      <div style={eyebrow()}>Design / 03</div>
      <h2 style={heading()}>Navigace</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        {([
          [160, 'Velikosti fontů zhoršují čitelnost menu.'],
          [220, 'Kategorie netřeba podtrhávat – lze řešit čistěji.'],
          [280, 'Ruská vlajka splývá s bílým pozadím, na první pohled to vypadá jako bug.'],
        ] as [number, string][]).map(([delay, text]) => (
          <div key={text} style={{ ...anim(delay), display: 'flex', alignItems: 'flex-start', gap: 22 }}>
            <div style={{ ...dot, marginTop: 20 }} />
            <div style={{ fontSize: 38, lineHeight: 1.5 }}>{text}</div>
          </div>
        ))}
      </div>
    </div>
    <div style={{ flex: 1, minHeight: 0, marginTop: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src={designNavigaceImg} alt="" style={{ ...anim(360, 'wn-fadeIn'), maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' } as React.CSSProperties} />
    </div>
  </div>
);

// ─── Page 11: Typography ──────────────────────────────────────────────────────
const Typography: Page = () => (
  <div style={{ ...fill, padding: '80px 160px', display: 'flex', flexDirection: 'column' }}>
    <style>{ANIM}</style>
    <div>
      <div style={eyebrow()}>Design / 04</div>
      <h2 style={heading()}>Typografie</h2>
      <div style={{ display: 'flex', gap: 80, alignItems: 'flex-start' }}>
        <div style={anim(160)}>
          <div style={{ fontSize: 164, fontWeight: 900, color: 'var(--osd-accent)', lineHeight: 1, letterSpacing: '-0.05em' }}>5</div>
          <div style={{ fontSize: 26, color: muted, marginTop: 8 }}>fontů na webu</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32, paddingTop: 20, flex: 1 }}>
          {([
            [200, '5 různých fontů tříští pozornost.'],
            [260, 'Stačí dva. Jasná hierarchie – nadpis a odstavec.'],
          ] as [number, string][]).map(([delay, text]) => (
            <div key={text} style={{ ...anim(delay), display: 'flex', gap: 22, alignItems: 'flex-start' }}>
              <div style={{ ...dot, marginTop: 20 }} />
              <div style={{ fontSize: 36, lineHeight: 1.5 }}>{text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div style={{ flex: 1, minHeight: 0, marginTop: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src={designFontyImg} alt="" style={{ ...anim(320, 'wn-fadeIn'), maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' } as React.CSSProperties} />
    </div>
  </div>
);

// ─── Page 12: Language Versions ───────────────────────────────────────────────
const LanguageVersions: Page = () => (
  <div style={{ ...fill, padding: '80px 160px', display: 'flex', flexDirection: 'column' }}>
    <style>{ANIM}</style>
    <div>
      <div style={eyebrow()}>Design / 05</div>
      <h2 style={heading()}>Jazykové mutace</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        {([
          [160, 'EN a RU verze nepřekládají ty nejdůležitější odkazy na webu.'],
        ] as [number, string][]).map(([delay, text]) => (
          <div key={text} style={{ ...anim(delay), display: 'flex', alignItems: 'flex-start', gap: 22 }}>
            <div style={{ ...dot, marginTop: 20 }} />
            <div style={{ fontSize: 38, lineHeight: 1.5 }}>{text}</div>
          </div>
        ))}
      </div>
    </div>
    <div style={{ flex: 1, minHeight: 0, marginTop: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src={designJazykoveMutaceImg} alt="" style={{ ...anim(300, 'wn-fadeIn'), maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' } as React.CSSProperties} />
    </div>
  </div>
);

// ─── Page 13: Closing ─────────────────────────────────────────────────────────
// Budget: label 24+36 + headline 176 + 3 bullets 228 + gap 64 + contact 80 = 608px ✅
const Closing: Page = () => (
  <div style={{ ...fill, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 160px' }}>
    <style>{ANIM}</style>
    <div style={{ ...anim(0), fontSize: 22, letterSpacing: '0.2em', color: muted, textTransform: 'uppercase', marginBottom: 36 }}>
      Shrnutí &amp; Další kroky
    </div>
    <h2 style={{ ...anim(80), fontFamily: 'var(--osd-font-display)', fontSize: 80, fontWeight: 900, lineHeight: 1.1, margin: '0 0 56px', letterSpacing: '-0.02em', maxWidth: 1300 }}>
      Co jde opravit dnes.<br />A co dál.
    </h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 64 }}>
      {([
        [160, 'Noindex: 1 minuta a web jde do indexace.'],
        [200, 'Akční plán ve 3 fázích. Od dnešního dne po 2 měsíce.'],
        [240, 'Celý audit máte v písemné podobě.'],
      ] as [number, string][]).map(([delay, text]) => (
        <div key={text} style={{ ...anim(delay), display: 'flex', gap: 22, alignItems: 'center' }}>
          <div style={{ ...dot, width: 8, height: 8 }} />
          <div style={{ fontSize: 36, lineHeight: 1.5 }}>{text}</div>
        </div>
      ))}
    </div>
    <div style={{ ...anim(320), borderTop: `1px solid ${border}`, paddingTop: 40 }}>
      <div style={{ fontSize: 28, color: muted, marginBottom: 10 }}>Wicked Nice</div>
      <div style={{ fontSize: 32, color: 'var(--osd-text)' }}>tomas@kovarik.xyz</div>
    </div>
    <div style={{ ...anim(0, 'wn-fadeIn'), ...accentBar }} />
  </div>
);

export const meta: SlideMeta = { title: 'Autoškola.cz — Audit & Doporučení' };
export default [
  Cover,
  withLogoMark(SeoOverview),
  withLogoMark(FindingNoindex),
  withLogoMark(SerpSocial),
  withLogoMark(MachineReadability),
  withLogoMark(BrandConsistency),
  withLogoMark(ActionPlan),
  withLogoMark(DesignOverview),
  withLogoMark(LogoSlide),
  withLogoMark(BrandColors),
  withLogoMark(Navigation),
  withLogoMark(Typography),
  withLogoMark(LanguageVersions),
  withLogoMark(Closing),
] satisfies Page[];
