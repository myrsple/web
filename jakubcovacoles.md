# SEO Audit

**Jakubcová Coles Reality – jakubcovacoles.cz**

---

## Intro

Web Jakubcová Coles Reality má jasnou značkovou polohu – rodinná realitní kancelář s tradicí od roku 1992, specializovaná na pražská sídliště. Obsahově je na tom nejlépe stránka FAQ a blogové články, které přesně pokrývají otázky, jaké si majitelé bytů reálně kladou. Technicky má ale web několik nedotažeností, které ho drží pod jeho skutečným potenciálem: duplicitní a starší URL z různých fází webu, generické title tagy, homepage, která pro vyhledávače i pro AI nese málo textové substance, a chybějící strukturovaná data pro lokální realitní entitu. Níže najdete konkrétní nálezy a co s nimi udělat.

---

## 1. Základní technické problémy

### 1.1 Duplicitní a legacy URL ředí autoritu

Web nese stopy několika fází vývoje a v navigaci i interním linkování zůstaly staré slugy, které se obsahově překrývají s novějšími stránkami:

| URL | Stav | Cílové řešení |
| --- | --- | --- |
| `/about-5` („Osobní sdělení") | Samostatná stránka v navigaci, obsahově se překrývá s O nás | Konsolidovat do `/onas` a 301 přesměrovat |
| `/about-1` | Mix „O nás", osobního sdělení a týmové sekce | Konsolidovat do `/onas` a 301 přesměrovat |
| `/webinar-registration` | Starý slug, který se teď přesměrovává na `/specialistenasidliste` | V interních odkazech nahradit finální URL, aby neexistoval zbytečný mezikrok |

V blogovém článku o prodeji bytu na sídlišti vede interní odkaz přes `/webinar-registration` a odkazuje na `/about-1`. To je přesně typ struktury, která mate crawlery, tříští signály mezi duplicitními stránkami a zbytečně rozmělňuje relevanci. Pro uživatele to zase znamená dvojí kliknutí a občas zmatek, kde vlastně konkrétní obsah žije.

**Řešení:** rozhodnout, která URL je kanonická pro „O nás" a která pro „Co pro vás uděláme / Specialisté na sídliště". Staré slugy 301 přesměrovat na finální cíle, z navigace je odstranit a v blogu přepsat interní odkazy tak, aby vedly rovnou na správnou stránku. Na Wixu se redirecty nastavují v `SEO → URL Redirect Manager`.

### 1.2 AI generované vizuály snižují důvěryhodnost

Na homepage a dalších klíčových stránkách jsou použité obrázky s názvy souborů typu `Gemini_Generated...` a `ChatGPT Image...`. Technicky to není SEO chyba, ale pro realitní kancelář, jejíž celý obchodní model stojí na osobní důvěře a lokální znalosti, je to zbytečný trust leak. Návštěvník, který hledá „rodinnou firmu s tradicí od roku 1992", chce vidět skutečné tváře, skutečnou kancelář a skutečné reference.

**Řešení:** nahradit hlavní brandové a týmové vizuály reálnými fotkami. Ideálně fotka rodinného týmu, kanceláře na Korunní, vybraných referenčních bytů nebo lokalit na Praze 3, 4 a 10. U drobných servisních ikon na tom tolik nezáleží, ale hero a sekce s lidmi by měly působit autenticky.

---

## 2. SERP Metadata (titles a descriptions)

Title tagy hlavních stránek jsou vyplněné, ale velmi generické – nesou jen název sekce a značku:

| Stránka | Současný title | Lepší title |
| --- | --- | --- |
| Homepage | Jakubcová Coles Reality \| Byty na sídlišti \| Praha | Prodej bytu na pražském sídlišti – rodinná realitka od 1992 \| Jakubcová Coles Reality |
| O nás | O nás \| Jakubcová Coles Reality | O nás – rodinná realitní kancelář v Praze 3 \| Jakubcová Coles Reality |
| FAQ | FAQ \| Jakubcová Coles Reality | Časté dotazy k prodeji bytu na sídlišti v Praze \| Jakubcová Coles Reality |
| Kontakt | Kontakt \| Jakubcová Coles Reality | Kontakt – realitní kancelář Praha 3, Korunní \| Jakubcová Coles Reality |
| Co pro vás uděláme | Co pro vás uděláme – Jakubcová Coles Reality | Prodej bytu na sídlišti – co pro vás uděláme \| Jakubcová Coles Reality |

Titulky jsou nejsilnější ranking a CTR signál. Současné verze neodlišují stránky v SERPu, nezachycují lokalitu a nepomáhají Googlu ani AI systémům pochopit, že se specializujete právě na sídlištní byty v Praze. Přepis titulů je jedna z nejrychlejších výher.

### Meta descriptions

Na hlavních stránkách jsou meta descriptions buď zcela prázdné, nebo Google bere úryvky z nevhodných bloků – z patičky, z formuláře, z widgetu „Nejnovější příspěvky" nebo dokonce z komentářové sekce pod článkem. To je nejvíc vidět u homepage a u článku „Jak prodat byt na sídlišti v Praze", kde snippet sklouzává k recirkulačním blokům místo k čistému úvodu.

**Řešení:** ručně vyplnit meta descriptions pro všechny klíčové stránky a top články. Délka 120–155 znaků, zaměřit na to, o čem stránka je a pro koho. Na Wixu se nastavuje v panelu `Page Settings → SEO Basics → Description`.

Příklady:

* **Homepage:** „Rodinná realitní kancelář specializovaná na prodej bytů na pražských sídlištích. Tradice od roku 1992, bezpečný prodej a maximalizace ceny."
* **FAQ:** „Odpovědi na nejčastější otázky k prodeji bytu na sídlišti v Praze – od přípravy podkladů přes fond oprav po právní servis."
* **Kontakt:** „Kontakt na realitní kancelář Jakubcová Coles Reality – Korunní, Praha 3. Zavolejte, napište, nebo se zastavte."

### Snippet hygiene

U některých článků a homepage se do snippetu propisují komentáře, recirkulační bloky („Nejnovější příspěvky") nebo formulářové fragmenty. Důvod je, že tyto bloky se v DOM objevují dřív, než by měly, a Googlu působí jako hlavní obsah. Pro blog je řešení zajistit, aby prvních 150–200 znaků hlavního textu pod titulkem tvořil čistý, popisný úvod – tím se snippet stabilizuje a krade prostor recirkulaci.

---

## 3. Struktura obsahu a sémantika

### Homepage je značkově silná, ale textově tenká

Homepage dnes nese hlavní positioning – „Jsme specialisté na pražská sídliště" a krátké představení rodinné firmy od roku 1992. Pro brand návštěvníka to stačí. Pro vyhledávače a AI systémy ale textové substance není dost – velkou část viewportu zabírá hero, formulář a kontaktní blok, takže crawlovatelného popisného textu je minimum.

**Řešení:** přidat na homepage jeden explicitní entitní odstavec, který jednou větou zodpoví: kdo jste, kde působíte, na co se specializujete a pro koho. Například:

> *Jakubcová Coles Reality je rodinná realitní kancelář se sídlem v Praze 3. Od roku 1992 pomáháme majitelům bytů prodávat nemovitosti na pražských sídlištích – bezpečně, s důrazem na maximalizaci ceny a kompletní právní servis.*

Pod tím ideálně tři krátké bloky, které to rozvedou: lokality, kde působíte (Jižní Město, Černý Most, Prosek, Háje, Barrandov atd.), jak probíhá spolupráce krok po kroku a důvody důvěry (tradice, reference, rodinný přístup). Tohle je typ obsahu, který současně pomáhá Google rankingu i AI systémům, aby vás mohly správně citovat v odpovědích typu „realitka specializovaná na pražská sídliště".

### FAQ je nejsilnější stránka webu

FAQ stránka řeší přesně to, co si lidé před prodejem bytu kladou: nejčastější chyby, postup, přípravu podkladů, otázky kolem SVJ a fondu oprav, právní servis. Je dohledatelná ve vyhledávání a obsahově patří k tomu nejsilnějšímu, co máte. Právě tenhle typ obsahu dnes AI systémy s oblibou citují.

Stojí za to FAQ rozvinout o další long-tail dotazy (např. „Kdy je nejlepší čas prodat byt?", „Co když mám na bytě hypotéku?", „Jak dlouho trvá prodej?") a propojit ji interními odkazy s kontaktem a relevantními blogovými články.

---

## 4. Indexovatelnost

Web je v Googlu dohledatelný v podstatně větším rozsahu, než by napovídaly první dojmy – indexuje se FAQ, Kontakt, Blog, stránka Specialisté na sídlišti, GDPR/cookies i část blogových článků. Indexace tedy není hlavní problém, je ale nekonzistentní a zaslouží si systematickou kontrolu.

**Řešení:**

1. V Google Search Console projít report `Pages → Indexing` a zkontrolovat, kolik URL je skutečně indexovaných, které jsou ve stavu „Crawled – currently not indexed" nebo „Duplicate without user-selected canonical" a proč.
2. Ověřit, že sitemap na `/sitemap.xml` je aktuální (Wix ji generuje automaticky) a že je v GSC nahlášená.
3. Po provedení URL konsolidace z bodu 1.1 v GSC požádat o re-crawl hlavních stránek přes nástroj `URL Inspection`.

### Prázdné nebo málo obsahové stránky

Některé stránky v struktuře webu nesou minimum obsahu nad rámec šablony. Doporučuji projít menu a u každé sekundární stránky se rozhodnout: buď doplnit obsah, který ji ospravedlní, nebo ji z indexu vyloučit přes `noindex` v Page Settings → SEO → Advanced na Wixu.

---

## 5. Strukturovaná data

Žádná z klíčových stránek – homepage, FAQ, Kontakt, blog – v tuto chvíli nenese zachytitelná JSON-LD strukturovaná data. U lokální realitní kanceláře je to promarněná šance. Web přitom má všechny potřebné údaje viditelně uvedené (firma, adresa v Korunní, Praha 3, telefon, e-mail, IČ).

### Co implementovat

**`RealEstateAgent` na homepage a kontaktu** – dává Googlu a AI jasně najevo, o jaký typ firmy jde:

```json
{
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Jakubcová Coles Reality",
  "url": "https://www.jakubcovacoles.cz",
  "description": "Rodinná realitní kancelář specializovaná na prodej bytů na pražských sídlištích. Tradice od roku 1992.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Korunní [doplnit č.p.]",
    "addressLocality": "Praha 3",
    "postalCode": "[doplnit]",
    "addressCountry": "CZ"
  },
  "telephone": "[doplnit]",
  "email": "[doplnit]",
  "areaServed": [
    "Praha 3", "Praha 4", "Praha 10", "Praha 11", "Praha 14"
  ],
  "foundingDate": "1992"
}
```

**`FAQPage` na `/faq`** – AI systémy a Google si z něj můžou přímo brát Q&A páry. Tohle je na Wixu nejjednodušší přes Custom Code v Page Settings, nebo přes vestavěné strukturované markup.

**`Organization`** s vyplněným logem a social profily na homepage.

**`Article`** na blogových článcích s autorem, datem a popisem.

---

## 6. AI & LLM objevitelnost

Pro realitní kancelář je tohle dnes stejně důležitý kanál jako klasický Google. Lidé se před prodejem čím dál častěji ptají ChatGPT nebo Perplexity „jakou realitku vybrat v Praze 3 / na Jižním Městě" a výsledky těchto dotazů rozhodují o prvním kontaktu. Dobrou zprávou je, že obsahově máte na stole silné karty – FAQ, blogové články o prodeji na sídlišti, jasný positioning rodinné firmy. Je potřeba to jen zpřístupnit AI systémům ve formátu, který umí zpracovat.

### Silné stránky

* FAQ stránka s jasnými Q&A páry – přesně to, co AI systémy preferují pro přímé odpovědi.
* Blogové články o prodeji, SVJ, fondu oprav – dobrá thematic authority kolem jasně vymezeného tématu.
* Jasná specializace (pražská sídliště) a jasná entita (rodinná firma od 1992) – AI systémy tohle umí zachytit, pokud je to napsané v čistých větách.

### Prostor ke zlepšení

* Na homepage chybí jediná věta, která by jednoznačně definovala, co firma dělá a kde. AI se proto musí dohadovat z útržků.
* Chybí strukturovaná data, která by AI řekla „tohle je realitní kancelář v Praze 3".
* Členové týmu a role jsou uvedené bez explicitního kontextu – AI nedokáže určit, kdo firmu vede, kdo je realitní makléř, kdo zajišťuje právní servis.

### Konkrétní kroky

1. **Rozšířit FAQ** o dalších 5–10 dotazů, které pokryjí typický cyklus před prodejem („Kdy je nejlepší čas prodávat?", „Jak dlouho trvá prodej bytu na sídlišti?", „Co když mám hypotéku?", „Kolik stojí služby realitní kanceláře?").
2. **Na homepage a stránce O nás** psát v celých větách: „Jakubcová Coles Reality je rodinná realitní kancelář v Praze 3. Založena v roce 1992. Specializuje se na prodej bytů na pražských sídlištích." AI systémy tohle extrahují doslova.
3. **U týmu uvést role** – kdo je jednatel, kdo makléř, kdo má na starosti právní servis a financování. Celé věty, ne jen jména pod fotkami.
4. **Budovat brand mentions** na realitních portálech, v regionálních médiích a na odborných platformách. V AI vyhledávání dnes brand mentions váží víc než klasické backlinky.

---

## 7. Další zjištění

### Blog – struktura a interní prolinkování

Blog je obsahově velmi dobrý a tematicky konzistentní (prodej bytu, sídliště, SVJ, fond oprav). Tři rychlé úpravy, které ho zvednou:

* V každém článku doplnit jasný úvodní odstavec (150–200 znaků), aby se zafixoval kvalitní snippet.
* Kategorizovat články do 3–4 clusterů (Prodej bytu, SVJ a fond oprav, Lokality Praha, Právní servis) a vzájemně je prolinkovat.
* V rámci článků linkovat na `/faq` a na kontakt, ne zpátky na starou URL přes `/webinar-registration`.

### Obrázky a alt texty

Portfolio snímků bytů a lokalit je silný obsahový asset, který dnes nevyužíváte v plné šíři. Doporučuji procházet média a u každého obrázku vyplňovat alt text ve formátu „prodej bytu 3+1 Jižní Město – kuchyň" nebo „realitní kancelář Praha 3, Korunní". Pro vizuální byznys jsou to snadné body navíc v Google Image Search.

### Social sharing (OG tagy)

Stojí za to projít hlavní stránky a ověřit, že každá má vyplněný `og:title`, `og:description` a `og:image`. Na Wixu se OG tagy dají nastavit v `Page Settings → SEO → Social Share`. Pokud je og:image jen logo, návštěvník při sdílení dostane fádní náhled – lepší je nastavit konkrétní obrázek relevantní k obsahu stránky.

---

## Action steps priority

**Rychlé výhry**

1. Přepsat title tagy na homepage, O nás, FAQ, Kontaktu a stránce Co pro vás uděláme podle návrhů v sekci 2.
2. Doplnit meta descriptions pro všechny hlavní stránky a top 5 blogových článků.
3. Přidat na homepage jeden entitní odstavec (viz sekce 3).
4. Přepsat interní odkazy z blogu tak, aby nevedly přes `/webinar-registration` a `/about-1`.

**Střední úsilí**

5. Konsolidovat `/about-1` a `/about-5` do jedné kanonické stránky O nás a nastavit 301 přesměrování v Wix URL Redirect Manageru.
6. Nasadit `RealEstateAgent` a `FAQPage` schema na relevantní stránky.
7. Projít v Google Search Console `Pages` report, potvrdit počty indexovaných URL a vyčistit případné duplicity.
8. Rozšířit FAQ o dalších 5–10 dotazů pokrývajících celý cyklus prodeje.

**Dlouhodoběji**

9. Nahradit AI generované vizuály reálnými fotkami týmu, kanceláře a referenčních bytů.
10. Doplnit alt texty k obrázkům – při nahrávání nových rovnou vyplňovat.
11. Rozvíjet blog kolem clusterů (sídliště, SVJ, fond oprav, lokality Praha) a budovat interní prolinkování mezi články.
12. Aktivně pracovat na brand mentions v realitních médiích a na odborných portálech – klíčové pro AI viditelnost.

---

## Závěr

Web má obsahově silné základy – jasný positioning rodinné firmy, výbornou FAQ stránku a blog, který přesně míří na reálné otázky majitelů bytů. Hlavní prostor k růstu je v technické hygieně: konsolidovat staré URL, přepsat titulky a meta descriptions, přidat strukturovaná data a na homepagi doplnit textovou substanci, která pomůže Googlu i AI systémům pochopit, kdo jste a v čem jste specialisté.

Po provedení rychlých výher (metadata, entitní odstavec, konsolidace URL) lze očekávat znatelnější posun v kvalitě SERP zobrazení i v tom, jak web vnímají AI nástroje. Střednědobé kroky – schema, rozšířené FAQ, čisté interní linkování – pak postaví základ, na kterém se dá dlouhodobě budovat pozice „rodinná specialistka na pražská sídliště" jako první asociace v celém segmentu.

[kovarik.xyz](https://kovarik.xyz)
