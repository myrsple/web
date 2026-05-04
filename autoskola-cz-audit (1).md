# SEO Audit

**Autoškola.cz – autoskola.cz**

---

## Intro

Autoškola.cz vlastní jednu z nejcennějších přesných doménových názvů ve své branži v ČR. Vizuálně je web čistý a moderní, brand má jasnou nabídku (skupina B v manuálu i automatu, kurz pro studenty za 20 900 Kč, splátky, výuka v ČJ/EN/RU), provozovna sedí dvě minuty od metra Českomoravská hned vedle O2 areny. Trustindex widget na homepage zobrazuje deset Google recenzí s průměrem 5,0 a recenzenti oslovují instruktory jménem (Marcel Zeman, David Biskup, Lucie Červenková) — silný signál kvalitní výuky.

Technicky má web ale jeden zásadní blokátor a několik nedotažeností, které ho drží daleko pod jeho potenciálem. Nejdůležitější nález je prostý: homepage má v HTML hlavičce `<meta name="robots" content="noindex, nofollow">`, což je explicitní pokyn pro vyhledávače, aby stránku vůbec neindexovaly. Je to typický pozůstatek z fáze vývoje webu, který se po spuštění zapomněl vypnout. Vysvětluje to, proč `site:autoskola.cz` v Googlu nevrací homepage, proč neexistuje žádná organická viditelnost a proč AI asistenti vás při dotazech na pražské autoškoly nezmíní. Oprava je doslova jeden checkbox v administraci WordPressu.

Vedle toho web postrádá meta description, Open Graph tagy, strukturovaná data, používá sedm `<h1>` tagů místo jednoho a všechny obsahové fotky mají prázdný `alt`. Tohle jsou věci, které dohromady určují, jak strojové systémy (Google, Bing, ChatGPT, Claude, Perplexity) chápou, kdo jste a co nabízíte. Níže najdete konkrétní nálezy a co s nimi udělat, seřazené podle dopadu.

---

## 1. Indexovatelnost — homepage je pro Google neviditelná

V `<head>` homepage je tento meta tag:

```html
<meta name="robots" content="noindex, nofollow">
```

Tento řádek říká Googlu, Bingu i ostatním vyhledávačům dvě věci současně: (1) tuto stránku do indexu nezařazuj, (2) odkazy z této stránky nesleduj. Druhá direktiva navíc znamená, že podstránky (`/cenik/`, `/ridicsky-prukaz-skupiny-b/`, `/kondicni-jizdy/` atd.) nedostávají z homepage žádný signál autority — i kdyby byly indexovány samostatně.

Téměř jistě jde o pozůstatek z fáze výroby webu. WordPress má v Nastavení → Čtení checkbox „Žádat vyhledávače, aby tento web neindexovaly", který se rutinně zaškrtává při výrobě na staging URL a po spuštění se má odškrtnout. U tohoto webu (spuštěn pravděpodobně v lednu 2026, podle dat ve filename cestě uploadovaných souborů) se na to při launchi zapomnělo. Je to nejčastější příčina „nový web a nikdo ho v Googlu nenajde" v celém WordPress světě.

**Řešení:**

1. Přihlásit se do `https://autoskola.cz/wp-admin/`, jít do **Nastavení → Čtení**, najít položku **„Viditelnost ve vyhledávačích"** a **odškrtnout** checkbox.
2. Uložit, otevřít https://autoskola.cz/, View Source, vyhledat slovo `noindex` — pokud se nic nenajde, je hotovo.
3. Ověřit doménu v Google Search Console (DNS TXT verifikace). Použít nástroj **URL Inspection** pro homepage a hlavní podstránky, kliknout na **„Request Indexing"** u každé. Současně podat XML sitemap (typicky `https://autoskola.cz/wp-sitemap.xml` u WordPressu, jinak generuje plugin).

Reindexace v Googlu obvykle trvá 1–14 dní. Stabilizace pozic v žebříčku pro klíčová slova pak 1–3 měsíce — to je standardní časový rámec pro organické SEO.

---

## 2. SERP a sociální preview

Homepage má korektní title (49 znaků, `autoškola.cz | Vaše cesta k řidičáku začíná u nás`), ale:

- meta description **chybí**
- Open Graph tagy (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`) **chybí všechny**
- Twitter Card tagy **chybí všechny**

### 2.1 Meta description a riziko cookie banneru ve snippetu

Když po opravě indexovatelnosti začne Google homepage zobrazovat ve výsledcích vyhledávání, nebude mít z čeho vyrobit popisek pod nadpisem. Vyrobí ho automaticky z prvního dostupného textu na stránce — a v případě tohoto webu je první obsahový blok DOM cookie banner od CookieYes, který začíná textem „Pomocí cookies vylepšujeme příjemnost prohlížení, nabízíme na míru přizpůsobené reklamy či obsah a analyzujeme návštěvnost stránky." To je text, který se může uživatelům zobrazit jako popis vaší firmy ve výsledcích Googlu — což je špatný první dojem a podstatně sníží proklikovost.

**Řešení:** Doplnit do `<head>` tag s popisem do 155 znaků. Návrh:

```html
<meta name="description" content="Autoškola v Praze 9 u metra Českomoravská. Řidičák skupiny B (manuál i automat), výuka v ČJ, EN i RU, splátky, studentská cena 20 900 Kč. Zápis online.">
```

Klíčové prvky popisu: lokalita (Praha 9, metro Českomoravská), nabídka (skupina B, automat), benefity (jazyky, splátky, cena), call to action (zápis online). 153 znaků.

Stejný princip platí pro nejdůležitější podstránky (`/cenik/`, `/ridicsky-prukaz-skupiny-b/`, `/kondicni-jizdy/`, `/vraceni-ridicskeho-opravneni/`), kde každá by měla mít vlastní unikátní description odpovídající jejímu obsahu.

### 2.2 Title tag — využít lokalitu a klíčová slova

Aktuální title je čistě brandový. Pro lokální službu, která soutěží o dotazy „autoškola praha 9", „autoškola českomoravská", „řidičák praha cena", chybí v titlu lokalita i typ služby.

| Aktuální | Návrh |
| --- | --- |
| `autoškola.cz \| Vaše cesta k řidičáku začíná u nás` | `Autoškola Praha 9 — Libeň, Českomoravská \| Řidičák sk. B \| autoskola.cz` |

Alternativa, která zachovává brandový claim: `Autoškola Praha 9 | Řidičák sk. B u metra Českomoravská | autoskola.cz` (70 znaků, vejde se).

### 2.3 Open Graph a Twitter Cards — sdílení v chatu a na sociálních sítích

Bez OG tagů vypadá sdílený odkaz v každé aplikaci (WhatsApp, Messenger, Slack, LinkedIn, e-mailová signatura) jen jako prázdná textová URL. U autoškoly, kde marketing významně závisí na doporučeních (rodič přepošle dítěti, kamarádka napíše do skupinového chatu), je to tichý zabiják konverzí.

**Řešení:** Doplnit do `<head>` minimálně:

```html
<meta property="og:title" content="Autoškola.cz — řidičák v Praze 9 u metra Českomoravská">
<meta property="og:description" content="Řidičák skupiny B v Praze 9. Výuka v ČJ, EN i RU, splátky, kurz pro studenty 20 900 Kč.">
<meta property="og:image" content="https://autoskola.cz/wp-content/uploads/2026/XX/og-image.jpg">
<meta property="og:url" content="https://autoskola.cz/">
<meta property="og:type" content="website">
<meta property="og:locale" content="cs_CZ">
<meta name="twitter:card" content="summary_large_image">
```

OG image musí být přesně 1200×630 px. Doporučuju připravit ji jako fotku reálného cvičného vozu Dacia s polepem autoskola.cz, ne jako AI generovaný hero (k tomu viz sekce 5). V Divi téma se OG tagy řeší nejjednodušeji přes plugin Yoast SEO nebo Rank Math, kde se vyplní v editoru každé stránky.

---

## 3. Strojová čitelnost — schema, headings, alt text, hreflang

### 3.1 Strukturovaná data (Schema.org JSON-LD)

V HTML není žádný `<script type="application/ld+json">` blok. Schema.org markup je standardizovaný způsob, jak strojově sdělit vyhledávačům a AI asistentům, kdo jste, kde sídlíte, jaké služby nabízíte a v jakých jazycích.

Pro váš typ podnikání je správný typ `LocalBusiness`. Schema.org sice formálně nemá specifický subtyp pro autoškoly, ale `LocalBusiness` s detailně vyplněnými atributy (services, areaServed, availableLanguage, openingHours) plně postačuje a Google Rich Results Test ho akceptuje jako lokální entitu.

**Řešení:** Přidat do `<head>` (nebo před `</body>`) tento blok:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Autoškola.cz",
  "image": "https://autoskola.cz/wp-content/uploads/2026/01/cropped-logo_white-180x180.png",
  "url": "https://autoskola.cz/",
  "telephone": "+420792361315",
  "email": "info@autoskola.cz",
  "priceRange": "20900–25000 Kč",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Českomoravská 1181/21",
    "addressLocality": "Praha 9 — Libeň",
    "postalCode": "19000",
    "addressCountry": "CZ"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 50.1029405,
    "longitude": 14.4965083
  },
  "areaServed": "Praha",
  "availableLanguage": ["cs", "en", "ru"],
  "sameAs": [
    "https://www.facebook.com/p/Auto%C5%A1kola-Novovyso%C4%8Dansk%C3%A1-100083288113242/",
    "https://www.firmy.cz/detail/13363891-autoskola-cz-praha-liben.html"
  ]
}
</script>
```

Po nasazení ověřit přes [Google Rich Results Test](https://search.google.com/test/rich-results) a [Schema.org Validator](https://validator.schema.org/).

**Krátká poznámka k recenzím:** Trustindex widget na homepage zobrazuje 10 Google recenzí s průměrem 5,0. Mohlo by být lákavé doplnit do schemy `aggregateRating` a doufat v hvězdičky ve výsledcích Googlu. Toto bohužel nefunguje — Google explicitně neuznává „self-serving reviews" (recenze o firmě umístěné na vlastním webu firmy, včetně embedded widgetů třetích stran) jako podklad pro rich results s hvězdičkami. Hvězdičky ve výsledcích se zobrazí pouze u recenzí na nezávislých platformách (Google Business Profile, Firmy.cz). To ale nesnižuje hodnotu ostatních prvků schemy — strukturovaná data zůstávají klíčový signál pro pochopení entity ze strany vyhledávačů a AI.

### 3.2 Heading struktura — sedm H1 místo jednoho

Homepage obsahuje sedm `<h1>` tagů:

| H1 | Text | Co by mělo být |
| --- | --- | --- |
| 1 | AUTOŠKOLA.CZ | Logo, není potřeba H1 — odstranit nebo na obyčejný odstavec |
| 2 | VAŠE CESTA | Část jednoho hero claimu — sloučit s #3 a #4 |
| 3 | k řidičáku | Část jednoho hero claimu |
| 4 | začíná u nás | Část jednoho hero claimu |
| 5 | Špičkové podmínky pro výcvik | Sekční nadpis, má být H2 |
| 6 | Spokojení studenti mluví za vše | Sekční nadpis, má být H2 |
| 7 | Máš dotaz? Napiš nám! | Sekční nadpis, má být H2 |

H1 #2, #3 a #4 jsou ve skutečnosti jedna hero věta („VAŠE CESTA k řidičáku začíná u nás") rozdělená do tří samostatných H1 tagů — typický artefakt Divi page builderu, kde každý Text Module dostane H1, pokud designer nezadá jinak. Současně hierarchie přeskakuje úroveň H3 — z H2 se skáče rovnou na H4 („Raději nám chcete zavolat?").

**Řešení:** V Divi editoru projít každý Text Module na homepage a v Settings → Design → Header level upravit:

- Hero ("VAŠE CESTA k řidičáku začíná u nás") sjednotit do jednoho H1.
- "AUTOŠKOLA.CZ" změnit na obyčejný odstavec nebo H2.
- Sekční nadpisy ("Špičkové podmínky pro výcvik", "Spokojení studenti mluví za vše", "Máš dotaz? Napiš nám!") přepnout na H2.
- "01. Individuální přístup", "02. Moderní vozy" atd. (aktuálně H2) přepnout na H3.
- "Raději nám chcete zavolat?" přepnout z H4 na H3.

Cílová struktura: 1× H1 + 3× H2 + 4× H3.

### 3.3 Alt texty u obrázků

Z 88 `<img>` tagů na stránce má prakticky žádný obsahový obrázek vyplněný `alt` atribut. Konkrétně bez popisku jsou: hero obrázek, tři menší ilustrační fotky, velká fotka instruktorů u auta, devět fotografií v sekci instruktorů. Vlajka EN dokonce postrádá `alt` atribut úplně. Naopak fotografie recenzentů z Trustindex widgetu mají alt vyplněný automaticky pluginem.

Důsledky jsou tři. (1) Google Image Search prakticky ignoruje obrázky bez alt atributu, takže přicházíte o sekundární kanál návštěvnosti („autoškola Praha 9 fotky", „Dacia autoškola"). (2) Screen readery pro nevidomé nemají co předčítat — porušení WCAG 2.1 level A. (3) AI asistenti používají alt texty jako kontext při popisování firmy.

**Řešení:** V Media Library WordPressu (`Wp-admin → Média`) projít obsahové obrázky a vyplnit pole „Alternativní text". Doporučení:

| Obrázek | Návrh alt textu |
| --- | --- |
| Hero | „Hero ilustrace autoškoly autoskola.cz v Praze 9" |
| `driving-school7.jpg` | „Instruktor autoškoly s žákyní u cvičného vozu" |
| `2148510585.jpg` a podobné | „Moderní cvičné vozidlo autoškoly autoskola.cz" |
| Fotografie v sekci instruktorů | Konkrétně podle obsahu fotky („Cvičný vůz Dacia Sandero s polepem autoskola.cz", „Učebna autoškoly", apod.) |
| `en_flag.jpg` | „English version of the website" + doplnit chybějící atribut, ne jen vyplnit prázdný |

Alt má popisovat, co je na obrázku doopravdy. Mechanické vkládání klíčových slov („autoškola Praha 9 řidičák kondiční jízdy") je kontraproduktivní — Google si všimne nesouladu mezi obrazem a popisem.

### 3.4 Jazykové verze bez hreflang

Web má anglickou (`/en/`) a ruskou (`/ru/`) jazykovou verzi, na které vedou odkazy v hlavní navigaci. Chybí ale `<link rel="alternate" hreflang="...">` tagy v `<head>`, které říkají Googlu, že tyto URL jsou jazykovou variantou téhož obsahu. Bez nich Google jazykové variace nepoznává nebo si je vykládá jako duplicitní obsah.

**Řešení:** Doplnit do `<head>` všech tří verzí (cs/en/ru):

```html
<link rel="alternate" hreflang="cs" href="https://autoskola.cz/">
<link rel="alternate" hreflang="en" href="https://autoskola.cz/en/">
<link rel="alternate" hreflang="ru" href="https://autoskola.cz/ru/">
<link rel="alternate" hreflang="x-default" href="https://autoskola.cz/">
```

Po opravě sekce 1 zkontrolovat, jestli `/en/` a `/ru/` také nemají `noindex` (pravděpodobně mají, protože sdílejí stejné WordPress nastavení).

---

## 4. Lokální entita a brand konzistence

Jedna autoškola (IČO 48318787, Českomoravská 1181/21, telefon +420 792 361 315) vystupuje pod několika různými názvy napříč kanály:

| Kanál | Název |
| --- | --- |
| Web a logo | autoškoLa.cz |
| Facebook stránka | Autoškola Novovysočanská |
| Firmy.cz vizitka A | Autoškola CZ |
| Firmy.cz vizitka B | Autoškola Novovysočanská *(samostatná duplicitní vizitka se stejným IČO)* |
| Vsechny-autoskoly.cz, Penize.cz, Doautoskoly.cz | Autoškola Novovysočanská |
| Vlastní recenze na webu | Dva recenzenti (Jiří Vorliček, Matthew Koča) odkazují na firmu jako „Autoškola Novovysočanská" |

Google a AI asistenti budují tzv. entitní graf — propojují signály o jedné firmě (web, recenze, citace, sociální sítě) přes konzistentní NAP (Name, Address, Phone). Když se značka liší, signály se rozdělí mezi více „domnělých" entit a žádná z nich není dostatečně silná. Konkrétní důsledek: dvě Firmy.cz vizitky znamenají rozdělené hodnocení a rozdělenou pozici v žebříčcích, vyšší cenu za PPL prezentaci. Pro AI asistenty: když se uživatel zeptá na „Autoškola Novovysočanská", Claude/ChatGPT najde Facebook a starý katalogový zápis, ale nedopojí to k aktuálnímu webu autoskola.cz.

**Řešení:** Rozhodnout se pro jeden brand (doporučuju „Autoškola.cz" — přirozeně odpovídá doméně, snadno se pamatuje, je to plnohodnotný název) a sjednotit ho:

- Přejmenovat Facebook stránku na „Autoškola.cz".
- Kontaktovat Seznam.cz / Firmy.cz s žádostí o sloučení dvou duplicitních vizitek (umí to na požádání, hodnocení migrují).
- Aktualizovat profily na Vsechny-autoskoly.cz, Penize.cz, Doautoskoly.cz, Idatabaze.cz.
- Aktualizovat (nebo založit) Google Business Profile — pro lokální službu nejdůležitější jednotlivý SEO asset, určuje pozici v Google Maps i v Local Pack ve výsledcích vyhledávání.

Vyřízení formulářů a komunikace s portály trvá obvykle 1–2 týdny.

---

## 5. Drobnější technické nálezy

### 5.1 Tel link postrádá mezinárodní prefix

Na homepage jsou dva `tel:` odkazy. Jeden má správný formát (`tel:+420792361315` v patičce), ale tlačítko „Raději nám chcete zavolat?" má `tel:792361315` — bez prefixu. Pro návštěvníky verze /en/ a /ru/ ze zahraničí se telefon nedovolá. Sjednotit všechny `tel:` linky na formát s `+420`.

### 5.2 Generický anchor text „zde"

V hero promo banneru je odkaz na `/automaticka-prevodovka/` s textem „(zde)". Změnit na popisný text typu „více o automatu" nebo přepsat větu na „Nabízíme i výuku s automatickou převodovkou" se stejným odkazem. Anchor text je signál pro Google i pro screen readery.

### 5.3 WordPress Sample Page nebyla smazána

V hlavičce homepage je odkaz na `/sample-page/feed/`, což znamená, že defaultní WordPress stránka „Sample Page" stále existuje. Smazat v `Wp-admin → Stránky → Vše`.

### 5.4 xmlrpc.php je aktivní

V hlavičce: `<link rel="pingback" href="https://autoskola.cz/xmlrpc.php">`. xmlrpc je legacy WordPress endpoint zneužívaný pro DDoS amplifikaci a brute-force útoky. Zakázat přes `.htaccess` nebo plugin Wordfence.

### 5.5 Viewport zakazuje pinch-zoom

`<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">` — atributy `maximum-scale=1.0, user-scalable=0` brání uživatelům na mobilu pinch-zoomovat. Porušení WCAG 2.1 Success Criterion 1.4.4. Lidé se zhoršeným zrakem nebo starší uživatelé jsou tím poškozeni. Odstranit poslední dva atributy, nechat jen `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.

### 5.6 Hero obrázek z ChatGPT

Filename hero obrázku `ChatGPT-Image-15.-2.-2026-13_32_4` napovídá, že byl vygenerován v ChatGPT 15. února 2026. SEO problém to není, ale brandově k zvážení: pro službu, jejíž důvěryhodnost stojí na realitě (učíte řídit skutečné auto, ne AI auto), může mít fotografie reálného vozového parku silnější emoční dopad. Ze screenshotu mám dojem, že máte reálnou bílou Daciu Sandero s polepem autoskola.cz a SPZ „VTB 2980" — kvalitní profesionální fotka tohoto vozu z různých úhlů by mohla AI hero nahradit a působit autenticky. Brandové rozhodnutí, ne technická chyba.

---

## 6. Subdomény a DNS — co prověřit

Při vyhledávání `site:autoskola.cz` v Googlu se aktuálně nezobrazuje váš web (důsledek nálezu v sekci 1), ale objevují se v indexu některé legacy subdomény jako `kalvoda.autoskola.cz` a další patterny, které vypadají jako parkovací stránky. Bez přístupu k DNS panelu domény nemůžu definitivně potvrdit, co přesně tam běží, ale stojí za to ověřit:

- DNS záznamy u registrátora — odstranit jakýkoli wildcard `*` A nebo CNAME záznam, pokud existuje.
- SSL certifikát — pokud používáte Let's Encrypt, nasadit wildcard certifikát pro `*.autoskola.cz`, aby všechny subdomény běžely přes HTTPS bez chyb.
- Po konfiguraci Google Search Console (sekce 1 krok 3) podat žádost o odstranění zastaralých URL přes „Removals" tool.

Pokud se ukáže, že subdomény skutečně hostí parkovací nebo spamový obsah, je to brandové i bezpečnostní riziko — někdo cizí může na vašich subdoménách hostovat phishing, který se připíše vaší doméně.

---

## 7. Obsahová příležitost — FAQ a tým

Aktuální struktura webu má 6 obsahových stránek: `/`, `/ridicsky-prukaz-skupiny-b/`, `/kondicni-jizdy/`, `/vraceni-ridicskeho-opravneni/`, `/cenik/`, `/online-prihlaska/`, `/automaticka-prevodovka/` (plus jazykové verze). Pro lokální službu je to základní minimum. Pro skutečnou organickou viditelnost — zejména v AI vyhledávání — je největší ušlá příležitost FAQ stránka.

### 7.1 FAQ — jediný nejúčinnější AEO asset

AI asistenti (Claude, ChatGPT, Perplexity) generují odpovědi z webových stránek, které mají jasně formulované otázky a odpovědi v přirozeném jazyce. FAQ formát je pro ně nativní. Když se uživatel zeptá AI „kolik stojí řidičák v Praze 2026", AI hledá stránky, kde je tato otázka přímo položena a odpověděna — a doporučí firmu, jejíž stránka takovou odpověď obsahuje.

Konkurenční autoškoly v lokalitě (např. dřívější web Novovysočanské) mají FAQ sekce s otázkami typu zahájení kurzu, strach z řízení, tlumočník, délka kurzu, dokumenty. Pro autoskola.cz doporučuju FAQ s minimálně těmito otázkami:

- Kolik stojí řidičák v Praze 2026?
- Jak dlouho trvá kurz v autoškole?
- Co potřebuju ke zápisu do autoškoly?
- Mohu platit na splátky?
- Jaký je rozdíl mezi výukou na manuál a automat?
- Co když u zkoušky propadnu?
- Kdy a kde se konají zkoušky?
- Učíme cizince — jak probíhá výuka v angličtině/ruštině?
- Mohu přestoupit z jiné autoškoly?
- Co je kondiční jízda a pro koho je vhodná?

Po implementaci FAQ doplnit také JSON-LD typu `FAQPage` — Google ho v některých případech zobrazí jako rozšířený výsledek s rozkliknutelnými otázkami přímo v SERPu.

### 7.2 Stránka O nás / Tým

Recenze na homepage zmiňují konkrétní lidi jménem (Marcel Zeman, David Biskup, Lucie Červenková) — to je silný důkaz důvěryhodnosti a autenticity. Aktuálně ale není stránka, kde by se potenciální žák o instruktorech dočetl víc. Doporučuju vytvořit stránku `/o-nas/` (nebo `/tym/`) s krátkým profilem každého instruktora, fotografií, počtem let praxe a specializací (manuál/automat, výuka v cizím jazyce). Pro AI asistenty to je opět snadno extrahovatelná struktura, pro lidi to je ujištění, že nejdou do anonymního „aparátu", ale k konkrétním lidem.

---

## 8. Co tento audit nepokrývá

Audit se zaměřil na homepage. Pro úplný site-wide audit doporučuju projít stejnou metodikou:

- `/cenik/` — kritické pro konverze a long-tail dotazy „kolik stojí řidičák praha"
- `/ridicsky-prukaz-skupiny-b/`, `/kondicni-jizdy/`, `/vraceni-ridicskeho-opravneni/`, `/automaticka-prevodovka/`
- `/online-prihlaska/` — formulář, ověřit funkčnost odesílání, návratovou stránku, GDPR souhlas
- `/en/` a `/ru/` — kvalita překladu, vlastní meta tagy, hreflang

Současně doporučuju:

- **PageSpeed Insights** pro homepage + 1–2 podstránky (mobile + desktop) pro Core Web Vitals (LCP, CLS, INP).
- **Robots.txt audit** — obsah `/robots.txt`, jestli povoluje AI crawlery (GPTBot, ClaudeBot, PerplexityBot).
- **Google Search Console** verifikace + analýza pokrytí indexem, dotazů, kliků (po stabilizaci indexu po opravě sekce 1).
- **Sitemap audit** — generuje WordPress / Yoast / Rank Math, jaké URL obsahuje.
- **AEO baseline test** — screenshotnout aktuální výsledky pro testovací dotazy v ChatGPT / Claude / Perplexity / Gemini, opakovat za 3 měsíce po opravách a porovnat.

---

## 9. Akční plán

**Fáze 1 — okamžité kroky (≤1 den):**

1. Odškrtnout WordPress checkbox „Žádat vyhledávače, aby tento web neindexovaly" v Nastavení → Čtení.
2. Smazat WordPress Sample Page.
3. Opravit `tel:` link v tlačítku „Raději nám chcete zavolat?" na formát s `+420`.
4. Změnit anchor text „(zde)" za smysluplnější text.
5. Odstranit `maximum-scale=1.0, user-scalable=0` z viewport meta tagu.

**Fáze 2 — vysoký dopad, střední úsilí (1–2 týdny):**

6. Doplnit meta description pro homepage a hlavní podstránky.
7. Doplnit Open Graph + Twitter Card tagy a vyrobit OG image 1200×630.
8. Naimplementovat Schema.org JSON-LD (`LocalBusiness`).
9. Opravit heading strukturu — jeden H1, ostatní H2/H3.
10. Doplnit alt texty u všech obsahových obrázků.
11. Aktualizovat title tag homepage na lokálně-relevantní variantu.
12. Verifikovat doménu v Google Search Console, podat URL k indexaci, přidat sitemap.

**Fáze 3 — strategické (2–8 týdnů):**

13. Sjednotit brandovou identitu na „Autoškola.cz" napříč Facebook, Firmy.cz, katalogy, Google Business Profile.
14. Prověřit a vyčistit DNS subdomén.
15. Doplnit hreflang tagy pro /en/ a /ru/ verze.
16. Vytvořit FAQ stránku (10 otázek) a stránku O nás / Tým (s profily Marcela Zemana, Davida Biskupa, Lucie Červenkové a dalších instruktorů).
17. Deaktivovat xmlrpc.php pingback.
18. Po stabilizaci indexu spustit AEO testy a porovnat s baseline.

---

*Audit zpracoval Tomáš Kovařík, [kovarik.xyz](https://kovarik.xyz). Kontakt: tomas@kovarik.xyz.*
