// WoW Midnight — floor maps, screenshots, spec tips, glossary
const FLOOR_MAPS = {
  'windrunner': `<svg class="fp-svg" viewBox="0 0 345 230" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="fp_windrunner" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
    <polygon points="0,1 7,3.5 0,6" fill="#e8c840"/>
  </marker>
  <pattern id="fp_stone_windrunner" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
    <rect width="16" height="16" fill="#161c2a"/>
    <rect x="0" y="0" width="7" height="7" fill="#171d2c" opacity=".5"/>
    <rect x="9" y="9" width="7" height="7" fill="#181e2d" opacity=".5"/>
  </pattern>
  <pattern id="fp_boss_windrunner" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
    <rect width="16" height="16" fill="#1a1400"/>
    <rect x="0" y="0" width="7" height="7" fill="#1b1500" opacity=".5"/>
    <rect x="9" y="9" width="7" height="7" fill="#1c1600" opacity=".5"/>
  </pattern>
</defs>
<rect width="100%" height="100%" fill="#0a0c12"/>

<!-- Outer bg -->
<!-- Entrance bottom-left -->
<rect x="15" y="155" width="75" height="55" rx="5" fill="#0d1a0d" stroke="rgba(64,200,112,.45)" stroke-width="1.5"/>
<text x="52" y="180" font-family="Rajdhani,sans-serif" font-size="8" font-weight="700" fill="rgba(64,200,112,.7)" text-anchor="middle">🚪</text>
<text x="52" y="192" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(64,200,112,.55)" text-anchor="middle">INGANG</text>
<!-- corridor up -->
<rect x="35" y="105" width="30" height="52" rx="2" fill="#131928"/>
<!-- West wing trash -->
<rect x="12" y="55" width="80" height="52" rx="5" fill="url(#fp_stone_windrunner)" stroke="#2a3050" stroke-width="1"/>
<text x="52" y="84" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(255,255,255,.28)" text-anchor="middle">WEST WING</text>
<!-- corridor to boss1 -->
<rect x="35" y="18" width="30" height="38" rx="2" fill="#131928"/>
<!-- Boss 1 top-left -->
<rect x="12" y="8" width="90" height="32" rx="5" fill="url(#fp_boss_windrunner)" stroke="rgba(200,168,75,.55)" stroke-width="1.5"/>
<text x="57" y="27" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.7)" text-anchor="middle">Emberdawn</text>
<!-- top corridor right -->
<rect x="98" y="10" width="140" height="22" rx="2" fill="#131928"/>
<!-- Boss 2 top-right -->
<rect x="232" y="8" width="95" height="32" rx="5" fill="url(#fp_boss_windrunner)" stroke="rgba(200,168,75,.55)" stroke-width="1.5"/>
<text x="279" y="27" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.7)" text-anchor="middle">Derelict Duo</text>
<!-- right corridor down -->
<rect x="306" y="38" width="22" height="75" rx="2" fill="#131928"/>
<!-- Trash right -->
<rect x="240" y="104" width="90" height="45" rx="5" fill="url(#fp_stone_windrunner)" stroke="#2a3050" stroke-width="1"/>
<text x="285" y="130" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(255,255,255,.28)" text-anchor="middle">EAST WING</text>
<!-- corridor to boss3 -->
<rect x="306" y="147" width="22" height="45" rx="2" fill="#131928"/>
<!-- Boss 3 bottom-right -->
<rect x="240" y="185" width="90" height="35" rx="5" fill="url(#fp_boss_windrunner)" stroke="rgba(200,168,75,.55)" stroke-width="1.5"/>
<text x="285" y="205" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.7)" text-anchor="middle">Kroluk</text>
<!-- bottom corridor left -->
<rect x="85" y="190" width="158" height="22" rx="2" fill="#131928"/>
<!-- Boss 4 bottom-left FINAL -->
<rect x="12" y="180" width="78" height="38" rx="5" fill="url(#fp_boss_windrunner)" stroke="rgba(200,168,75,.85)" stroke-width="2"/>
<text x="51" y="200" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.8)" text-anchor="middle">Restless</text>
<text x="51" y="210" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.8)" text-anchor="middle">Heart</text>
<!-- ROUTE -->
<polyline fill="none" stroke="#e8c840" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity=".9" filter="url(#glow)" marker-mid="url(#fp_windrunner)" marker-end="url(#fp_windrunner)"
  points="52,182 52,130 52,105 52,78 52,40 57,21 98,21 170,21 232,21 279,21 317,38 317,112 317,148 317,185 285,200 243,200 170,200 85,200 51,200"/>
<circle cx="52" cy="178" r="12" fill="#40c870" opacity=".2"/>
<circle cx="52" cy="178" r="9" fill="#40c870" opacity=".9"/>
<text x="52" y="182" font-family="Rajdhani,sans-serif" font-size="8" font-weight="800" fill="#000" text-anchor="middle">🚪</text><circle cx="52" cy="104" r="14" fill="#ff6622" opacity=".2"/>
<circle cx="52" cy="104" r="11" fill="#ff6622" opacity=".9"/>
<text x="52" y="108" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#fff" text-anchor="middle">1🔥</text><circle cx="57" cy="21" r="14" fill="#ffd040" opacity=".2"/>
<circle cx="57" cy="21" r="11" fill="#ffd040" opacity=".9"/>
<text x="57" y="25" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#000" text-anchor="middle">B1</text><circle cx="279" cy="21" r="14" fill="#ff6622" opacity=".2"/>
<circle cx="279" cy="21" r="11" fill="#ff6622" opacity=".9"/>
<text x="279" y="25" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#fff" text-anchor="middle">B2🔥</text><circle cx="317" cy="125" r="12" fill="#60b8ff" opacity=".2"/>
<circle cx="317" cy="125" r="9" fill="#60b8ff" opacity=".9"/>
<text x="317" y="129" font-family="Rajdhani,sans-serif" font-size="8" font-weight="800" fill="#fff" text-anchor="middle">2</text><circle cx="317" cy="185" r="14" fill="#ffd040" opacity=".2"/>
<circle cx="317" cy="185" r="11" fill="#ffd040" opacity=".9"/>
<text x="317" y="189" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#000" text-anchor="middle">B3</text><circle cx="51" cy="200" r="14" fill="#ff6622" opacity=".2"/>
<circle cx="51" cy="200" r="11" fill="#ff6622" opacity=".9"/>
<text x="51" y="204" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#fff" text-anchor="middle">B4🔥</text>
</svg>`,
  'magisters': `<svg class="fp-svg" viewBox="0 0 455 215" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="fp_magisters" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
    <polygon points="0,1 7,3.5 0,6" fill="#e8c840"/>
  </marker>
  <pattern id="fp_stone_magisters" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
    <rect width="16" height="16" fill="#161c2a"/>
    <rect x="0" y="0" width="7" height="7" fill="#171d2c" opacity=".5"/>
    <rect x="9" y="9" width="7" height="7" fill="#181e2d" opacity=".5"/>
  </pattern>
  <pattern id="fp_boss_magisters" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
    <rect width="16" height="16" fill="#1a1400"/>
    <rect x="0" y="0" width="7" height="7" fill="#1b1500" opacity=".5"/>
    <rect x="9" y="9" width="7" height="7" fill="#1c1600" opacity=".5"/>
  </pattern>
</defs>
<rect width="100%" height="100%" fill="#0a0c12"/>

<!-- Entrance bottom-left -->
<rect x="15" y="155" width="70" height="48" rx="5" fill="#0d1a0d" stroke="rgba(64,200,112,.45)" stroke-width="1.5"/>
<text x="50" y="177" font-family="Rajdhani,sans-serif" font-size="8" font-weight="700" fill="rgba(64,200,112,.7)" text-anchor="middle">🚪 INGANG</text>
<!-- corridor north -->
<rect x="30" y="108" width="28" height="48" rx="2" fill="#131928"/>
<!-- West wing -->
<rect x="12" y="58" width="72" height="52" rx="5" fill="url(#fp_stone_magisters)" stroke="#2a3050" stroke-width="1"/>
<text x="48" y="85" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(255,255,255,.28)" text-anchor="middle">WEST WING</text>
<!-- corridor east -->
<rect x="82" y="78" width="60" height="22" rx="2" fill="#131928"/>
<!-- Library / buff -->
<rect x="138" y="62" width="80" height="48" rx="5" fill="#0d180d" stroke="rgba(64,200,112,.35)" stroke-dasharray="4,3" stroke-width="1.5"/>
<text x="178" y="85" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(64,200,112,.6)" text-anchor="middle">📖 BIBLIOTHEEK</text>
<text x="178" y="96" font-family="Rajdhani,sans-serif" font-size="6" font-weight="700" fill="rgba(64,200,112,.45)" text-anchor="middle">Arcane Tome!</text>
<!-- corridor east to courtyard -->
<rect x="215" y="78" width="35" height="22" rx="2" fill="#131928"/>
<!-- Central courtyard -->
<rect x="245" y="48" width="100" height="90" rx="6" fill="url(#fp_stone_magisters)" stroke="#2a3050" stroke-width="1"/>
<circle cx="295" cy="93" r="28" fill="none" stroke="#2a3050" stroke-width="1" opacity=".4"/>
<circle cx="295" cy="93" r="12" fill="#0f1420" stroke="#252d42" stroke-width="1" opacity=".5"/>
<text x="295" y="97" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(255,255,255,.22)" text-anchor="middle">PLEIN</text>
<!-- north corridor to boss1 -->
<rect x="278" y="12" width="24" height="38" rx="2" fill="#131928"/>
<!-- Boss 1 top -->
<rect x="228" y="5" width="130" height="30" rx="5" fill="url(#fp_boss_magisters)" stroke="rgba(200,168,75,.55)" stroke-width="1.5"/>
<text x="293" y="24" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.7)" text-anchor="middle">Arcanotron Custos</text>
<!-- east corridor -->
<rect x="342" y="68" width="42" height="20" rx="2" fill="#131928"/>
<!-- Boss 2 right -->
<rect x="380" y="28" width="60" height="80" rx="5" fill="url(#fp_boss_magisters)" stroke="rgba(200,168,75,.55)" stroke-width="1.5"/>
<text x="410" y="62" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.7)" text-anchor="middle">Seranel</text>
<text x="410" y="73" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.7)" text-anchor="middle">Sunlash</text>
<!-- south-east trash -->
<rect x="330" y="160" width="110" height="40" rx="5" fill="url(#fp_stone_magisters)" stroke="#2a3050" stroke-width="1"/>
<text x="385" y="183" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(255,255,255,.28)" text-anchor="middle">TRASH 4</text>
<!-- east down corridor -->
<rect x="388" y="105" width="22" height="58" rx="2" fill="#131928"/>
<!-- Boss 3 bottom-right -->
<rect x="330" y="135" width="80" height="30" rx="5" fill="url(#fp_boss_magisters)" stroke="rgba(200,168,75,.55)" stroke-width="1.5"/>
<text x="370" y="153" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.7)" text-anchor="middle">Gemellus</text>
<!-- south corridor -->
<rect x="278" y="138" width="55" height="20" rx="2" fill="#131928"/>
<rect x="278" y="155" width="22" height="45" rx="2" fill="#131928"/>
<!-- Boss 4 bottom FINAL -->
<rect x="135" y="155" width="148" height="42" rx="5" fill="url(#fp_boss_magisters)" stroke="rgba(200,168,75,.85)" stroke-width="2"/>
<text x="209" y="178" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.8)" text-anchor="middle">Degentrius — Final boss</text>
<!-- ROUTE -->
<polyline fill="none" stroke="#e8c840" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity=".9" marker-mid="url(#fp_magisters)" marker-end="url(#fp_magisters)"
  points="50,178 44,130 44,88 82,88 138,88 178,88 215,88 245,88 290,88 290,48 290,18 293,13 360,13 410,13 410,28 410,78 342,78 295,78 295,138 295,158 295,175 250,175 209,175"/>
<circle cx="50" cy="175" r="12" fill="#40c870" opacity=".2"/>
<circle cx="50" cy="175" r="9" fill="#40c870" opacity=".9"/>
<text x="50" y="179" font-family="Rajdhani,sans-serif" font-size="8" font-weight="800" fill="#000" text-anchor="middle">🚪</text><circle cx="44" cy="104" r="14" fill="#ff6622" opacity=".2"/>
<circle cx="44" cy="104" r="11" fill="#ff6622" opacity=".9"/>
<text x="44" y="108" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#fff" text-anchor="middle">1🔥</text><circle cx="160" cy="88" r="12" fill="#40c870" opacity=".2"/>
<circle cx="160" cy="88" r="9" fill="#40c870" opacity=".9"/>
<text x="160" y="92" font-family="Rajdhani,sans-serif" font-size="8" font-weight="800" fill="#000" text-anchor="middle">✦</text><circle cx="293" cy="13" r="14" fill="#ffd040" opacity=".2"/>
<circle cx="293" cy="13" r="11" fill="#ffd040" opacity=".9"/>
<text x="293" y="17" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#000" text-anchor="middle">B1</text><circle cx="410" cy="28" r="14" fill="#ff6622" opacity=".2"/>
<circle cx="410" cy="28" r="11" fill="#ff6622" opacity=".9"/>
<text x="410" y="32" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#fff" text-anchor="middle">B2🔥</text><circle cx="370" cy="147" r="14" fill="#ffd040" opacity=".2"/>
<circle cx="370" cy="147" r="11" fill="#ffd040" opacity=".9"/>
<text x="370" y="151" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#000" text-anchor="middle">B3</text><circle cx="385" cy="175" r="12" fill="#60b8ff" opacity=".2"/>
<circle cx="385" cy="175" r="9" fill="#60b8ff" opacity=".9"/>
<text x="385" y="179" font-family="Rajdhani,sans-serif" font-size="8" font-weight="800" fill="#fff" text-anchor="middle">3</text><circle cx="209" cy="175" r="14" fill="#ff6622" opacity=".2"/>
<circle cx="209" cy="175" r="11" fill="#ff6622" opacity=".9"/>
<text x="209" y="179" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#fff" text-anchor="middle">B4🔥</text>
</svg>`,
  'maisara': `<svg class="fp-svg" viewBox="0 0 370 200" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="fp_maisara" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
    <polygon points="0,1 7,3.5 0,6" fill="#e8c840"/>
  </marker>
  <pattern id="fp_stone_maisara" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
    <rect width="16" height="16" fill="#161c2a"/>
    <rect x="0" y="0" width="7" height="7" fill="#171d2c" opacity=".5"/>
    <rect x="9" y="9" width="7" height="7" fill="#181e2d" opacity=".5"/>
  </pattern>
  <pattern id="fp_boss_maisara" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
    <rect width="16" height="16" fill="#1a1400"/>
    <rect x="0" y="0" width="7" height="7" fill="#1b1500" opacity=".5"/>
    <rect x="9" y="9" width="7" height="7" fill="#1c1600" opacity=".5"/>
  </pattern>
</defs>
<rect width="100%" height="100%" fill="#0a0c12"/>

<rect x="15" y="70" width="65" height="50" rx="5" fill="#0d1a0d" stroke="rgba(64,200,112,.45)" stroke-width="1.5"/>
<text x="47" y="95" font-family="Rajdhani,sans-serif" font-size="8" font-weight="700" fill="rgba(64,200,112,.7)" text-anchor="middle">🚪</text>
<text x="47" y="107" font-family="Rajdhani,sans-serif" font-size="7" fill="rgba(64,200,112,.55)" text-anchor="middle" font-weight="700">INGANG</text>
<rect x="78" y="83" width="60" height="24" rx="2" fill="#131928"/>
<rect x="135" y="60" width="85" height="55" rx="5" fill="url(#fp_stone_maisara)" stroke="#2a3050" stroke-width="1"/>
<text x="177" y="91" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(255,255,255,.28)" text-anchor="middle">TRASH 1</text>
<rect x="217" y="83" width="40" height="24" rx="2" fill="#131928"/>
<rect x="254" y="52" width="90" height="52" rx="5" fill="url(#fp_boss_maisara)" stroke="rgba(200,168,75,.55)" stroke-width="1.5"/>
<text x="299" y="76" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.7)" text-anchor="middle">Venomblight</text>
<text x="299" y="87" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.7)" text-anchor="middle">Matriarch</text>
<rect x="320" y="102" width="22" height="60" rx="2" fill="#131928"/>
<rect x="210" y="135" width="115" height="42" rx="5" fill="url(#fp_stone_maisara)" stroke="#2a3050" stroke-width="1"/>
<text x="267" y="159" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(255,255,255,.28)" text-anchor="middle">TRASH 2</text>
<rect x="100" y="143" width="113" height="24" rx="2" fill="#131928"/>
<rect x="18" y="130" width="88" height="55" rx="5" fill="url(#fp_boss_maisara)" stroke="rgba(200,168,75,.85)" stroke-width="2"/>
<text x="62" y="155" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.8)" text-anchor="middle">Skarthrix</text>
<text x="62" y="166" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.8)" text-anchor="middle">Soulrender</text>
<polyline fill="none" stroke="#e8c840" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity=".9" marker-mid="url(#fp_maisara)" marker-end="url(#fp_maisara)"
  points="47,98 78,95 135,95 217,95 254,78 299,78 331,78 331,135 331,156 267,156 213,155 100,155 62,155"/>
<circle cx="47" cy="95" r="12" fill="#40c870" opacity=".2"/>
<circle cx="47" cy="95" r="9" fill="#40c870" opacity=".9"/>
<text x="47" y="99" font-family="Rajdhani,sans-serif" font-size="8" font-weight="800" fill="#000" text-anchor="middle">🚪</text><circle cx="165" cy="90" r="14" fill="#ff6622" opacity=".2"/>
<circle cx="165" cy="90" r="11" fill="#ff6622" opacity=".9"/>
<text x="165" y="94" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#fff" text-anchor="middle">1🔥</text><circle cx="299" cy="78" r="14" fill="#ffd040" opacity=".2"/>
<circle cx="299" cy="78" r="11" fill="#ffd040" opacity=".9"/>
<text x="299" y="82" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#000" text-anchor="middle">B1</text><circle cx="267" cy="156" r="12" fill="#60b8ff" opacity=".2"/>
<circle cx="267" cy="156" r="9" fill="#60b8ff" opacity=".9"/>
<text x="267" y="160" font-family="Rajdhani,sans-serif" font-size="8" font-weight="800" fill="#fff" text-anchor="middle">2</text><circle cx="62" cy="155" r="14" fill="#ff6622" opacity=".2"/>
<circle cx="62" cy="155" r="11" fill="#ff6622" opacity=".9"/>
<text x="62" y="159" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#fff" text-anchor="middle">B2🔥</text>
</svg>`,
  'nexus': `<svg class="fp-svg" viewBox="0 0 420 192" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="fp_nexus_point_xenas" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
    <polygon points="0,1 7,3.5 0,6" fill="#e8c840"/>
  </marker>
  <pattern id="fp_stone_nexus_point_xenas" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
    <rect width="16" height="16" fill="#161c2a"/>
    <rect x="0" y="0" width="7" height="7" fill="#171d2c" opacity=".5"/>
    <rect x="9" y="9" width="7" height="7" fill="#181e2d" opacity=".5"/>
  </pattern>
  <pattern id="fp_boss_nexus_point_xenas" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
    <rect width="16" height="16" fill="#1a1400"/>
    <rect x="0" y="0" width="7" height="7" fill="#1b1500" opacity=".5"/>
    <rect x="9" y="9" width="7" height="7" fill="#1c1600" opacity=".5"/>
  </pattern>
</defs>
<rect width="100%" height="100%" fill="#0a0c12"/>

<rect x="10" y="55" width="60" height="48" rx="5" fill="#0d1a0d" stroke="rgba(64,200,112,.45)" stroke-width="1.5"/>
<text x="40" y="77" font-family="Rajdhani,sans-serif" font-size="8" font-weight="700" fill="rgba(64,200,112,.7)" text-anchor="middle">🚪</text>
<text x="40" y="89" font-family="Rajdhani,sans-serif" font-size="7" fill="rgba(64,200,112,.55)" text-anchor="middle" font-weight="700">INGANG</text>
<rect x="68" y="71" width="45" height="20" rx="2" fill="#131928"/>
<rect x="110" y="50" width="75" height="44" rx="5" fill="url(#fp_stone_nexus_point_xenas)" stroke="#2a3050" stroke-width="1"/>
<text x="147" y="75" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(255,255,255,.28)" text-anchor="middle">TRASH</text>
<rect x="183" y="71" width="35" height="20" rx="2" fill="#131928"/>
<rect x="215" y="42" width="80" height="44" rx="5" fill="url(#fp_boss_nexus_point_xenas)" stroke="rgba(200,168,75,.55)" stroke-width="1.5"/>
<text x="255" y="62" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.7)" text-anchor="middle">Xenas Prime</text>
<rect x="293" y="60" width="30" height="18" rx="2" fill="#131928"/>
<rect x="320" y="42" width="80" height="44" rx="5" fill="url(#fp_boss_nexus_point_xenas)" stroke="rgba(200,168,75,.55)" stroke-width="1.5"/>
<text x="360" y="62" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.7)" text-anchor="middle">Void Drifter</text>
<rect x="360" y="85" width="20" height="55" rx="2" fill="#131928"/>
<rect x="220" y="135" width="165" height="42" rx="5" fill="url(#fp_boss_nexus_point_xenas)" stroke="rgba(200,168,75,.85)" stroke-width="2"/>
<text x="302" y="159" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.8)" text-anchor="middle">Null Sentinel · Nexus Core</text>
<polyline fill="none" stroke="#e8c840" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity=".9" marker-mid="url(#fp_nexus_point_xenas)" marker-end="url(#fp_nexus_point_xenas)"
  points="40,82 68,81 110,72 183,72 215,64 255,64 293,69 320,64 360,64 370,85 370,140 302,156"/>
<circle cx="40" cy="79" r="12" fill="#40c870" opacity=".2"/>
<circle cx="40" cy="79" r="9" fill="#40c870" opacity=".9"/>
<text x="40" y="83" font-family="Rajdhani,sans-serif" font-size="8" font-weight="800" fill="#000" text-anchor="middle">🚪</text><circle cx="142" cy="68" r="14" fill="#ff6622" opacity=".2"/>
<circle cx="142" cy="68" r="11" fill="#ff6622" opacity=".9"/>
<text x="142" y="72" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#fff" text-anchor="middle">1🔥</text><circle cx="255" cy="64" r="14" fill="#ffd040" opacity=".2"/>
<circle cx="255" cy="64" r="11" fill="#ffd040" opacity=".9"/>
<text x="255" y="68" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#000" text-anchor="middle">B1</text><circle cx="360" cy="64" r="14" fill="#ffd040" opacity=".2"/>
<circle cx="360" cy="64" r="11" fill="#ffd040" opacity=".9"/>
<text x="360" y="68" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#000" text-anchor="middle">B2</text><circle cx="302" cy="156" r="14" fill="#ff6622" opacity=".2"/>
<circle cx="302" cy="156" r="11" fill="#ff6622" opacity=".9"/>
<text x="302" y="160" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#fff" text-anchor="middle">B🔥</text>
</svg>`,
  'murderrow': `<svg class="fp-svg" viewBox="0 0 395 188" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="fp_murder_row" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
    <polygon points="0,1 7,3.5 0,6" fill="#e8c840"/>
  </marker>
  <pattern id="fp_stone_murder_row" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
    <rect width="16" height="16" fill="#161c2a"/>
    <rect x="0" y="0" width="7" height="7" fill="#171d2c" opacity=".5"/>
    <rect x="9" y="9" width="7" height="7" fill="#181e2d" opacity=".5"/>
  </pattern>
  <pattern id="fp_boss_murder_row" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
    <rect width="16" height="16" fill="#1a1400"/>
    <rect x="0" y="0" width="7" height="7" fill="#1b1500" opacity=".5"/>
    <rect x="9" y="9" width="7" height="7" fill="#1c1600" opacity=".5"/>
  </pattern>
</defs>
<rect width="100%" height="100%" fill="#0a0c12"/>

<rect x="10" y="60" width="60" height="48" rx="5" fill="#0d1a0d" stroke="rgba(64,200,112,.45)" stroke-width="1.5"/>
<text x="40" y="82" font-family="Rajdhani,sans-serif" font-size="8" font-weight="700" fill="rgba(64,200,112,.7)" text-anchor="middle">🚪</text>
<text x="40" y="94" font-family="Rajdhani,sans-serif" font-size="7" fill="rgba(64,200,112,.55)" text-anchor="middle" font-weight="700">INGANG</text>
<rect x="68" y="76" width="55" height="20" rx="2" fill="#131928"/>
<rect x="120" y="55" width="90" height="50" rx="5" fill="url(#fp_stone_murder_row)" stroke="#2a3050" stroke-width="1"/>
<text x="165" y="83" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(255,255,255,.28)" text-anchor="middle">TRASH</text>
<rect x="208" y="76" width="40" height="20" rx="2" fill="#131928"/>
<rect x="245" y="45" width="100" height="52" rx="5" fill="url(#fp_boss_murder_row)" stroke="rgba(200,168,75,.55)" stroke-width="1.5"/>
<text x="295" y="68" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.7)" text-anchor="middle">Kel'ar</text>
<rect x="343" y="70" width="22" height="60" rx="2" fill="#131928"/>
<rect x="245" y="125" width="120" height="45" rx="5" fill="url(#fp_boss_murder_row)" stroke="rgba(200,168,75,.85)" stroke-width="2"/>
<text x="305" y="150" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.8)" text-anchor="middle">Murder Master — Final boss</text>
<polyline fill="none" stroke="#e8c840" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity=".9" marker-mid="url(#fp_murder_row)" marker-end="url(#fp_murder_row)"
  points="40,86 68,86 120,82 208,82 245,71 295,71 354,71 354,128 305,148"/>
<circle cx="40" cy="83" r="12" fill="#40c870" opacity=".2"/>
<circle cx="40" cy="83" r="9" fill="#40c870" opacity=".9"/>
<text x="40" y="87" font-family="Rajdhani,sans-serif" font-size="8" font-weight="800" fill="#000" text-anchor="middle">🚪</text><circle cx="150" cy="77" r="14" fill="#ff6622" opacity=".2"/>
<circle cx="150" cy="77" r="11" fill="#ff6622" opacity=".9"/>
<text x="150" y="81" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#fff" text-anchor="middle">1🔥</text><circle cx="295" cy="71" r="14" fill="#ffd040" opacity=".2"/>
<circle cx="295" cy="71" r="11" fill="#ffd040" opacity=".9"/>
<text x="295" y="75" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#000" text-anchor="middle">B1</text><circle cx="305" cy="148" r="14" fill="#ff6622" opacity=".2"/>
<circle cx="305" cy="148" r="11" fill="#ff6622" opacity=".9"/>
<text x="305" y="152" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#fff" text-anchor="middle">B2🔥</text>
</svg>`,
  'blindingvale': `<svg class="fp-svg" viewBox="0 0 420 192" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="fp_the_blinding_vale" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
    <polygon points="0,1 7,3.5 0,6" fill="#e8c840"/>
  </marker>
  <pattern id="fp_stone_the_blinding_vale" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
    <rect width="16" height="16" fill="#161c2a"/>
    <rect x="0" y="0" width="7" height="7" fill="#171d2c" opacity=".5"/>
    <rect x="9" y="9" width="7" height="7" fill="#181e2d" opacity=".5"/>
  </pattern>
  <pattern id="fp_boss_the_blinding_vale" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
    <rect width="16" height="16" fill="#1a1400"/>
    <rect x="0" y="0" width="7" height="7" fill="#1b1500" opacity=".5"/>
    <rect x="9" y="9" width="7" height="7" fill="#1c1600" opacity=".5"/>
  </pattern>
</defs>
<rect width="100%" height="100%" fill="#0a0c12"/>

<rect x="10" y="55" width="60" height="48" rx="5" fill="#0d1a0d" stroke="rgba(64,200,112,.45)" stroke-width="1.5"/>
<text x="40" y="77" font-family="Rajdhani,sans-serif" font-size="8" font-weight="700" fill="rgba(64,200,112,.7)" text-anchor="middle">🚪</text>
<text x="40" y="89" font-family="Rajdhani,sans-serif" font-size="7" fill="rgba(64,200,112,.55)" text-anchor="middle" font-weight="700">INGANG</text>
<rect x="68" y="71" width="45" height="20" rx="2" fill="#131928"/>
<rect x="110" y="50" width="75" height="44" rx="5" fill="url(#fp_stone_the_blinding_vale)" stroke="#2a3050" stroke-width="1"/>
<text x="147" y="75" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(255,255,255,.28)" text-anchor="middle">TRASH</text>
<rect x="183" y="71" width="35" height="20" rx="2" fill="#131928"/>
<rect x="215" y="42" width="80" height="44" rx="5" fill="url(#fp_boss_the_blinding_vale)" stroke="rgba(200,168,75,.55)" stroke-width="1.5"/>
<text x="255" y="62" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.7)" text-anchor="middle">Mist Weaver</text>
<rect x="293" y="60" width="30" height="18" rx="2" fill="#131928"/>
<rect x="320" y="42" width="80" height="44" rx="5" fill="url(#fp_boss_the_blinding_vale)" stroke="rgba(200,168,75,.55)" stroke-width="1.5"/>
<text x="360" y="62" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.7)" text-anchor="middle">Pale Watcher</text>
<rect x="360" y="85" width="20" height="55" rx="2" fill="#131928"/>
<rect x="220" y="135" width="165" height="42" rx="5" fill="url(#fp_boss_the_blinding_vale)" stroke="rgba(200,168,75,.85)" stroke-width="2"/>
<text x="302" y="159" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.8)" text-anchor="middle">Blinding Horror · Veilkeeper</text>
<polyline fill="none" stroke="#e8c840" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity=".9" marker-mid="url(#fp_the_blinding_vale)" marker-end="url(#fp_the_blinding_vale)"
  points="40,82 68,81 110,72 183,72 215,64 255,64 293,69 320,64 360,64 370,85 370,140 302,156"/>
<circle cx="40" cy="79" r="12" fill="#40c870" opacity=".2"/>
<circle cx="40" cy="79" r="9" fill="#40c870" opacity=".9"/>
<text x="40" y="83" font-family="Rajdhani,sans-serif" font-size="8" font-weight="800" fill="#000" text-anchor="middle">🚪</text><circle cx="142" cy="68" r="14" fill="#ff6622" opacity=".2"/>
<circle cx="142" cy="68" r="11" fill="#ff6622" opacity=".9"/>
<text x="142" y="72" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#fff" text-anchor="middle">1🔥</text><circle cx="255" cy="64" r="14" fill="#ffd040" opacity=".2"/>
<circle cx="255" cy="64" r="11" fill="#ffd040" opacity=".9"/>
<text x="255" y="68" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#000" text-anchor="middle">B1</text><circle cx="360" cy="64" r="14" fill="#ffd040" opacity=".2"/>
<circle cx="360" cy="64" r="11" fill="#ffd040" opacity=".9"/>
<text x="360" y="68" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#000" text-anchor="middle">B2</text><circle cx="302" cy="156" r="14" fill="#ff6622" opacity=".2"/>
<circle cx="302" cy="156" r="11" fill="#ff6622" opacity=".9"/>
<text x="302" y="160" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#fff" text-anchor="middle">B🔥</text>
</svg>`,
  'nalorakk': `<svg class="fp-svg" viewBox="0 0 395 188" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="fp_den_of_nalorakk" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
    <polygon points="0,1 7,3.5 0,6" fill="#e8c840"/>
  </marker>
  <pattern id="fp_stone_den_of_nalorakk" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
    <rect width="16" height="16" fill="#161c2a"/>
    <rect x="0" y="0" width="7" height="7" fill="#171d2c" opacity=".5"/>
    <rect x="9" y="9" width="7" height="7" fill="#181e2d" opacity=".5"/>
  </pattern>
  <pattern id="fp_boss_den_of_nalorakk" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
    <rect width="16" height="16" fill="#1a1400"/>
    <rect x="0" y="0" width="7" height="7" fill="#1b1500" opacity=".5"/>
    <rect x="9" y="9" width="7" height="7" fill="#1c1600" opacity=".5"/>
  </pattern>
</defs>
<rect width="100%" height="100%" fill="#0a0c12"/>

<rect x="10" y="60" width="60" height="48" rx="5" fill="#0d1a0d" stroke="rgba(64,200,112,.45)" stroke-width="1.5"/>
<text x="40" y="82" font-family="Rajdhani,sans-serif" font-size="8" font-weight="700" fill="rgba(64,200,112,.7)" text-anchor="middle">🚪</text>
<text x="40" y="94" font-family="Rajdhani,sans-serif" font-size="7" fill="rgba(64,200,112,.55)" text-anchor="middle" font-weight="700">INGANG</text>
<rect x="68" y="76" width="55" height="20" rx="2" fill="#131928"/>
<rect x="120" y="55" width="90" height="50" rx="5" fill="url(#fp_stone_den_of_nalorakk)" stroke="#2a3050" stroke-width="1"/>
<text x="165" y="83" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(255,255,255,.28)" text-anchor="middle">TRASH</text>
<rect x="208" y="76" width="40" height="20" rx="2" fill="#131928"/>
<rect x="245" y="45" width="100" height="52" rx="5" fill="url(#fp_boss_den_of_nalorakk)" stroke="rgba(200,168,75,.55)" stroke-width="1.5"/>
<text x="295" y="68" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.7)" text-anchor="middle">Nalorakk</text>
<rect x="343" y="70" width="22" height="60" rx="2" fill="#131928"/>
<rect x="245" y="125" width="120" height="45" rx="5" fill="url(#fp_boss_den_of_nalorakk)" stroke="rgba(200,168,75,.85)" stroke-width="2"/>
<text x="305" y="150" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.8)" text-anchor="middle">Feral King — Final boss</text>
<polyline fill="none" stroke="#e8c840" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity=".9" marker-mid="url(#fp_den_of_nalorakk)" marker-end="url(#fp_den_of_nalorakk)"
  points="40,86 68,86 120,82 208,82 245,71 295,71 354,71 354,128 305,148"/>
<circle cx="40" cy="83" r="12" fill="#40c870" opacity=".2"/>
<circle cx="40" cy="83" r="9" fill="#40c870" opacity=".9"/>
<text x="40" y="87" font-family="Rajdhani,sans-serif" font-size="8" font-weight="800" fill="#000" text-anchor="middle">🚪</text><circle cx="150" cy="77" r="14" fill="#ff6622" opacity=".2"/>
<circle cx="150" cy="77" r="11" fill="#ff6622" opacity=".9"/>
<text x="150" y="81" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#fff" text-anchor="middle">1🔥</text><circle cx="295" cy="71" r="14" fill="#ffd040" opacity=".2"/>
<circle cx="295" cy="71" r="11" fill="#ffd040" opacity=".9"/>
<text x="295" y="75" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#000" text-anchor="middle">B1</text><circle cx="305" cy="148" r="14" fill="#ff6622" opacity=".2"/>
<circle cx="305" cy="148" r="11" fill="#ff6622" opacity=".9"/>
<text x="305" y="152" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#fff" text-anchor="middle">B2🔥</text>
</svg>`,
  'voidscar': `<svg class="fp-svg" viewBox="0 0 395 188" xmlns="http://www.w3.org/2000/svg">
<defs>
  <marker id="fp_voidscar_arena" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
    <polygon points="0,1 7,3.5 0,6" fill="#e8c840"/>
  </marker>
  <pattern id="fp_stone_voidscar_arena" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
    <rect width="16" height="16" fill="#161c2a"/>
    <rect x="0" y="0" width="7" height="7" fill="#171d2c" opacity=".5"/>
    <rect x="9" y="9" width="7" height="7" fill="#181e2d" opacity=".5"/>
  </pattern>
  <pattern id="fp_boss_voidscar_arena" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
    <rect width="16" height="16" fill="#1a1400"/>
    <rect x="0" y="0" width="7" height="7" fill="#1b1500" opacity=".5"/>
    <rect x="9" y="9" width="7" height="7" fill="#1c1600" opacity=".5"/>
  </pattern>
</defs>
<rect width="100%" height="100%" fill="#0a0c12"/>

<rect x="10" y="60" width="60" height="48" rx="5" fill="#0d1a0d" stroke="rgba(64,200,112,.45)" stroke-width="1.5"/>
<text x="40" y="82" font-family="Rajdhani,sans-serif" font-size="8" font-weight="700" fill="rgba(64,200,112,.7)" text-anchor="middle">🚪</text>
<text x="40" y="94" font-family="Rajdhani,sans-serif" font-size="7" fill="rgba(64,200,112,.55)" text-anchor="middle" font-weight="700">INGANG</text>
<rect x="68" y="76" width="55" height="20" rx="2" fill="#131928"/>
<rect x="120" y="55" width="90" height="50" rx="5" fill="url(#fp_stone_voidscar_arena)" stroke="#2a3050" stroke-width="1"/>
<text x="165" y="83" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(255,255,255,.28)" text-anchor="middle">TRASH</text>
<rect x="208" y="76" width="40" height="20" rx="2" fill="#131928"/>
<rect x="245" y="45" width="100" height="52" rx="5" fill="url(#fp_boss_voidscar_arena)" stroke="rgba(200,168,75,.55)" stroke-width="1.5"/>
<text x="295" y="68" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.7)" text-anchor="middle">Gladiator Prime</text>
<rect x="343" y="70" width="22" height="60" rx="2" fill="#131928"/>
<rect x="245" y="125" width="120" height="45" rx="5" fill="url(#fp_boss_voidscar_arena)" stroke="rgba(200,168,75,.85)" stroke-width="2"/>
<text x="305" y="150" font-family="Rajdhani,sans-serif" font-size="7" font-weight="700" fill="rgba(200,168,75,.8)" text-anchor="middle">Voidscar Master — Final boss</text>
<polyline fill="none" stroke="#e8c840" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity=".9" marker-mid="url(#fp_voidscar_arena)" marker-end="url(#fp_voidscar_arena)"
  points="40,86 68,86 120,82 208,82 245,71 295,71 354,71 354,128 305,148"/>
<circle cx="40" cy="83" r="12" fill="#40c870" opacity=".2"/>
<circle cx="40" cy="83" r="9" fill="#40c870" opacity=".9"/>
<text x="40" y="87" font-family="Rajdhani,sans-serif" font-size="8" font-weight="800" fill="#000" text-anchor="middle">🚪</text><circle cx="150" cy="77" r="14" fill="#ff6622" opacity=".2"/>
<circle cx="150" cy="77" r="11" fill="#ff6622" opacity=".9"/>
<text x="150" y="81" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#fff" text-anchor="middle">1🔥</text><circle cx="295" cy="71" r="14" fill="#ffd040" opacity=".2"/>
<circle cx="295" cy="71" r="11" fill="#ffd040" opacity=".9"/>
<text x="295" y="75" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#000" text-anchor="middle">B1</text><circle cx="305" cy="148" r="14" fill="#ff6622" opacity=".2"/>
<circle cx="305" cy="148" r="11" fill="#ff6622" opacity=".9"/>
<text x="305" y="152" font-family="Rajdhani,sans-serif" font-size="9" font-weight="800" fill="#fff" text-anchor="middle">B2🔥</text>
</svg>`,
};

// ── ROUTE_SCREENSHOTS ──
const ROUTE_SCREENSHOTS = {
  'magisters': 'https://raw.githubusercontent.com/huijting/midnight_guide/main/data/screenshots/route_magisters.png',
  'maisara': 'https://raw.githubusercontent.com/huijting/midnight_guide/main/data/screenshots/route_maisara.png',
  'nexus': 'https://raw.githubusercontent.com/huijting/midnight_guide/main/data/screenshots/route_nexus.png',
  'windrunner': 'https://raw.githubusercontent.com/huijting/midnight_guide/main/data/screenshots/route_windrunner.png',
  'algethar': 'https://raw.githubusercontent.com/huijting/midnight_guide/main/data/screenshots/route_algethar.png',
  'pitofsaron': 'https://raw.githubusercontent.com/huijting/midnight_guide/main/data/screenshots/route_pitofsaron.png',
  'triumvirate': 'https://raw.githubusercontent.com/huijting/midnight_guide/main/data/screenshots/route_triumvirate.png',
  'skyreach': 'https://raw.githubusercontent.com/huijting/midnight_guide/main/data/screenshots/route_skyreach.png',
};

// ── FLOOR_SCREENSHOTS ──
const FLOOR_SCREENSHOTS = {
  'murderrow': [
    {label:'Murder Row', img:'https://raw.githubusercontent.com/huijting/midnight_guide/main/data/screenshots/floor_murderrow_0_murder_row.png'},
    {label:'The Illicit Rain', img:'https://raw.githubusercontent.com/huijting/midnight_guide/main/data/screenshots/floor_murderrow_1_the_illicit_rain.png'},
  ],
  'nalorakk': [
    {label:'The Foraging', img:'https://raw.githubusercontent.com/huijting/midnight_guide/main/data/screenshots/floor_nalorakk_0_the_foraging.png'},
    {label:'The Heart of Rage', img:'https://raw.githubusercontent.com/huijting/midnight_guide/main/data/screenshots/floor_nalorakk_1_the_heart_of_rage.png'},
  ],
  'blindingvale': [
    {label:'The Blinding Vale', img:'https://raw.githubusercontent.com/huijting/midnight_guide/main/data/screenshots/floor_blindingvale_0_the_blinding_vale.png'},
  ],
  'voidscar': [
    {label:'Halls of Spite', img:'https://raw.githubusercontent.com/huijting/midnight_guide/main/data/screenshots/floor_voidscar_0_halls_of_spite.png'},
    {label:'Voidscar Arena', img:'https://raw.githubusercontent.com/huijting/midnight_guide/main/data/screenshots/floor_voidscar_1_voidscar_arena.png'},
  ],
};

const SPEC_TIPS = {
  // ── WINDRUNNER SPIRE ── boss 0 ──
  'windrunner-spire:0:tank': {
    'paladin-protection': {
      nl:["Avenger's Shield onderbreekt de vuurtoren-cast direct — gebruik hem zodra hij begint.",
          "Shield of the Righteous uptime is cruciaal: haar melee-aanvallen zijn zwaar tijdens Flame Surge.",
          "Ardent Defender bewaren voor Flame Surge als je healer bezet is."],
      en:["Avenger's Shield interrupts the firetower cast directly — use it as soon as it starts.",
          "Shield of the Righteous uptime is critical: her melee hits hard during Flame Surge.",
          "Save Ardent Defender for Flame Surge when your healer is occupied."]}
  ,
    'demonhunter-vengeance': {
      nl:["Sigil of Silence op de adds bij spawn voor een snelle lockdown.",
          "Fiery Brand op de boss tijdens Flame Surge voor 40% schade-reductie.",
          "Metamorphosis bewaren voor de zwaarste adds-golf — niet verspillen op opener."],
      en:["Sigil of Silence on the adds at spawn for a quick lockdown.",
          "Fiery Brand on the boss during Flame Surge for 40% damage reduction.",
          "Save Metamorphosis for the heaviest add wave — don't waste it on the opener."]},
    'druid-guardian': {
      nl:["Incapacitating Roar om adds even te stoppen bij spawn — Guardian heeft goede AoE-CC.",
          "Survival Instincts tijdens Flame Surge als de schade te hoog oploopt.",
          "Maul spam tijdens hoge Rage om schade-reductie van Ironfur te maximaliseren."],
      en:["Incapacitating Roar to briefly stop adds at spawn — Guardian has good AoE CC.",
          "Survival Instincts during Flame Surge if damage spikes too high.",
          "Spam Maul during high Rage to maximize Ironfur damage reduction."]},
    'warrior-protection': {
      nl:["Spell Reflection op de vuurtoren-cast voor volledige spell-immuniteit.",
          "Shield Block uptime is cruciaal — houd hem zo constant mogelijk actief.",
          "Last Stand bij Flame Surge als noodrem; Rallying Cry voor de groep."],
      en:["Spell Reflection on the firetower cast for full spell immunity.",
          "Shield Block uptime is critical — keep it active as consistently as possible.",
          "Last Stand during Flame Surge as emergency; Rallying Cry for the group."]},
    'monk-brewmaster': {
      nl:["Spear Hand Strike op de vuurtoren-cast — gecombineerd met hoge mobiliteit altijd bereikbaar.",
          "Stagger is jouw kernmechaniek — Purifying Brew gebruiken als Stagger rood wordt.",
          "Fortifying Brew bij Flame Surge als primaire tank-cooldown."],
      en:["Spear Hand Strike on the firetower cast — combined with high mobility always reachable.",
          "Stagger is your core mechanic — use Purifying Brew when Stagger turns red.",
          "Fortifying Brew during Flame Surge as primary tank cooldown."]},
    'deathknight-blood': {
      nl:["Mind Freeze op de vuurtoren-cast — gecombineerd met Death Grip altijd bereikbaar.",
          "Death Strike is jouw kernmechaniek — gebruik hem wanneer je schade hebt opgelopen voor maximale healing.",
          "Vampiric Blood bij Flame Surge als primaire tank-cooldown."],
      en:["Mind Freeze on the firetower cast — combined with Death Grip always reachable.",
          "Death Strike is your core mechanic — use it after taking damage for maximum self-healing.",
          "Vampiric Blood during Flame Surge as primary tank cooldown."]}},
  'windrunner-spire:0:heal': {
    'druid-restoration': {
      nl:["Pre-HoT de tank met Rejuvenation + Lifebloom vóór elke Flame Surge.",
          "Ironbark op de tank bij Flame Surge — dit is het gevaarlijkste moment.",
          "Typhoon of Incapacitating Roar om de adds te stoppen als ze spawnen."],
      en:["Pre-HoT the tank with Rejuvenation + Lifebloom before every Flame Surge.",
          "Ironbark on the tank during Flame Surge — this is the most dangerous moment.",
          "Typhoon or Incapacitating Roar to stop adds when they spawn."]}
  ,
    'paladin-holy': {
      nl:["Avenging Wrath vroeg poppen voor Dawnlight-healing burst op de groep.",
          "Blinding Light om adds even te stoppen als ze spawnen — jouw enige AoE stop.",
          "Beacon of Light permanent op de tank, Divine Toll bij Flame Surge voor nood-HP."],
      en:["Pop Avenging Wrath early for Dawnlight healing burst on the group.",
          "Blinding Light to briefly stop adds when they spawn — your only AoE stop.",
          "Keep Beacon of Light on the tank, Divine Toll on Flame Surge for emergency HP."]},
    'monk-mistweaver': {
      nl:["Revival bij Flame Surge voor massale groeps-healing in één global.",
          "Spinnende Crane Kick + Vivify voor efficiënte AoE healing tijdens hoge schade.",
          "Life Cocoon op de tank bij de zwaarste aanvallen — unieke absorb-cooldown."],
      en:["Revival during Flame Surge for massive group healing in one global.",
          "Spinning Crane Kick + Vivify for efficient AoE healing during high damage.",
          "Life Cocoon on the tank during the heaviest hits — unique absorb cooldown."]},
    'priest-discipline': {
      nl:["Disc speelt proactief — Atonement vóór Flame Surge op de hele groep plaatsen.",
          "Power Word: Barrier bij Flame Surge voor groeps-schade-reductie.",
          "Schism + Penance voor burst healing via Atonement op meerdere targets tegelijk."],
      en:["Disc plays proactively — place Atonement on the entire group before Flame Surge.",
          "Power Word: Barrier during Flame Surge for group damage reduction.",
          "Schism + Penance for burst healing via Atonement on multiple targets simultaneously."]},

    'evoker-preservation': {
      nl:["Rescue of Hover om snel weg te komen van Flame Surge-mechanics.",
          "Rewind bewaren voor de zwaarste groepsschade — unieke time-reversal healing.",
          "Dream Breath voor AoE healing op meerdere spelers tegelijk."],
      en:["Rescue or Hover to quickly escape Flame Surge mechanics.",
          "Save Rewind for the heaviest group damage — unique time-reversal healing.",
          "Dream Breath for AoE healing on multiple players simultaneously."]},

    'priest-holy': {
      nl:["Symbol of Hope bij Flame Surge voor groeps-mana-recovery — uniek voor Holy Priest.",
          "Holy Word: Sanctify voor instant AoE healing bij hoge schadepieken.",
          "Guardian Spirit op de tank bij kritieke momenten — voorkomt dodelijke klap."],
      en:["Symbol of Hope during Flame Surge for group mana recovery — unique to Holy Priest.",
          "Holy Word: Sanctify for instant AoE healing during high damage spikes.",
          "Guardian Spirit on the tank at critical moments — prevents a killing blow."]},

    'shaman-restoration': {
      nl:["Healing Rain permanent neerleggen op de groep — jouw basis AoE-healing.",
          "Spirit Link Totem bij Flame Surge voor groeps-schade-egalisering — uniek in het spel.",
          "Ancestral Protection Totem bewaren voor de zwaarste pull — tweede kans op leven."],
      en:["Keep Healing Rain permanently on the group — your baseline AoE healing.",
          "Spirit Link Totem during Flame Surge for group damage equalization — unique in the game.",
          "Save Ancestral Protection Totem for the hardest pull — second chance at life."]}},
  'windrunner-spire:0:dps': {
    'hunter-beastmastery': {
      nl:["Counter Shot op de vuurtoren-cast — jij bent volledig mobiel, neem de interrupt-verantwoordelijkheid.",
          "Bestial Wrath bij de pull en direct Primal Rage als de tank dat aangeeft.",
          "Tar Trap bij de adds die spawnen om de tank te helpen kiten."],
      en:["Counter Shot on the firetower cast — you are fully mobile, take interrupt responsibility.",
          "Bestial Wrath on pull and immediately Primal Rage when the tank signals.",
          "Tar Trap on spawning adds to help the tank kite."]},
    'shaman-elemental': {
      nl:["Wind Shear op de vuurtoren-cast — korte cooldown, gebruik hem consequent.",
          "Ascendance bewaren voor Bloodlust-moment of grote pull.",
          "Static Field Totem om adds op hun plek te houden bij spawn."],
      en:["Wind Shear on the firetower cast — short cooldown, use it consistently.",
          "Save Ascendance for Bloodlust moment or big pull.",
          "Static Field Totem to keep adds in place when they spawn."]}
  ,
    'demonhunter-havoc': {
      nl:["Disrupt op de vuurtoren-cast — jij hebt een van de kortste interrupt-cooldowns.",
          "Fel Rush en Vengeful Retreat nooit in frontal abilities — positional awareness is cruciaal.",
          "Eye Beam + Essence Break op de pull; The Hunt op de boss zodra beschikbaar."],
      en:["Disrupt on the firetower cast — you have one of the shortest interrupt cooldowns.",
          "Never Fel Rush or Vengeful Retreat into frontal abilities — positional awareness is critical.",
          "Eye Beam + Essence Break on pull; The Hunt on the boss as soon as available."]},
    'druid-balance': {
      nl:["Typhoon of Incapacitating Roar om de vuurtoren-cast te onderbreken.",
          "Starsurge op de boss, Starfall op de adds die spawnen.",
          "Convoke bewaren voor het Bloodlust-window."],
      en:["Typhoon or Incapacitating Roar to interrupt the firetower cast.",
          "Starsurge on the boss, Starfall on spawning adds.",
          "Save Convoke for the Bloodlust window."]},
    'paladin-retribution': {
      nl:["Rebuke op de vuurtoren-cast zodra je in meleebereik bent.",
          "Avenging Wrath + Wake of Ashes op de pull voor maximale burst.",
          "Execution Sentence op de boss voor single-target funnel schade."],
      en:["Rebuke on the firetower cast as soon as you are in melee range.",
          "Avenging Wrath + Wake of Ashes on pull for maximum burst.",
          "Execution Sentence on the boss for single-target funnel damage."]},
    'warrior-fury': {
      nl:["Pummel op de vuurtoren-cast — korte cooldown, gebruik hem consequent.",
          "Recklessness + Bladestorm op de grote pulls voor maximale AoE burst.",
          "Rallying Cry voor de groep bij Flame Surge — één van de beste groeps-cooldowns in het spel."],
      en:["Pummel on the firetower cast — short cooldown, use it consistently.",
          "Recklessness + Bladestorm on big pulls for maximum AoE burst.",
          "Rallying Cry for the group during Flame Surge — one of the best group cooldowns in the game."]},
    'warrior-arms': {
      nl:["Pummel op de vuurtoren-cast — wissel af met de tank.",
          "Bladestorm op de adds die spawnen cluster voor AoE cleave.",
          "Rallying Cry voor de groep bij Flame Surge als groeps-defensief."],
      en:["Pummel on the firetower cast — rotate with the tank.",
          "Bladestorm on the adds that spawn cluster for AoE cleave.",
          "Rallying Cry for the group during Flame Surge as group defensive."]},
    'mage-frost': {
      nl:["Counterspell op de vuurtoren-cast — jouw interrupt is onmisbaar.",
          "Frozen Orb + Blizzard op de adds die spawnen cluster voor maximale AoE.",
          "Ice Block bij Flame Surge als persoonlijke noodimuniteit."],
      en:["Counterspell on the firetower cast — your interrupt is essential.",
          "Frozen Orb + Blizzard on the adds that spawn cluster for maximum AoE.",
          "Ice Block during Flame Surge as personal emergency immunity."]},
    'rogue-outlaw': {
      nl:["Kick op de vuurtoren-cast — wissel af met andere interrupts.",
          "Blade Flurry voor AoE cleave op de adds die spawnen cluster.",
          "Crimson Vial + Feint bij Flame Surge voor personal survival."],
      en:["Kick on the firetower cast — rotate with other interrupts.",
          "Blade Flurry for AoE cleave on the adds that spawn cluster.",
          "Crimson Vial + Feint during Flame Surge for personal survival."]},
    'monk-windwalker': {
      nl:["Spear Hand Strike op de vuurtoren-cast — gecombineerd met jouw hoge mobiliteit altijd bereikbaar.",
          "Spinning Crane Kick + Fist of the White Tiger op de adds die spawnen cluster voor burst AoE.",
          "Diffuse Magic of Dampen Harm bij Flame Surge voor personal defensive."],
      en:["Spear Hand Strike on the firetower cast — combined with your high mobility always reachable.",
          "Spinning Crane Kick + Fist of the White Tiger on the adds that spawn cluster for burst AoE.",
          "Diffuse Magic or Dampen Harm during Flame Surge for personal defensive."]},
    'shaman-enhancement': {
      nl:["Wind Shear op de vuurtoren-cast — korte cooldown, neem interrupt-verantwoordelijkheid.",
          "Feral Spirit + Doom Winds op de grote pulls voor maximale AoE burst.",
          "Astral Shift bij Flame Surge als persoonlijk defensief."],
      en:["Wind Shear on the firetower cast — short cooldown, take interrupt responsibility.",
          "Feral Spirit + Doom Winds on big pulls for maximum AoE burst.",
          "Astral Shift during Flame Surge as personal defensive."]},
    'hunter-marksmanship': {
      nl:["Counter Shot op de vuurtoren-cast — volledig ranged, altijd in bereik.",
          "Volley + Rapid Fire op de adds die spawnen cluster voor massale ranged AoE.",
          "Aspect of the Turtle bij Flame Surge als volledige immuniteit."],
      en:["Counter Shot on the firetower cast — fully ranged, always in range.",
          "Volley + Rapid Fire on the adds that spawn cluster for massive ranged AoE.",
          "Aspect of the Turtle during Flame Surge for full immunity."]},
    'deathknight-unholy': {
      nl:["Mind Freeze op de vuurtoren-cast — jouw interrupt.",
          "Army of the Dead + Apocalypse voor maximale AoE burst op de adds die spawnen cluster.",
          "Anti-Magic Shell bij Flame Surge voor magische schade-immuniteit."],
      en:["Mind Freeze on the firetower cast — your interrupt.",
          "Army of the Dead + Apocalypse for maximum AoE burst on the adds that spawn cluster.",
          "Anti-Magic Shell during Flame Surge for magic damage immunity."]},

    'deathknight-frost': {
      nl:["Mind Freeze op de vuurtoren-cast — jouw interrupt.",
          "Pillar of Frost + Frostwyrm's Fury op de adds cluster voor AoE burst.",
          "Anti-Magic Shell bij Flame Surge voor magische schade-immuniteit."],
      en:["Mind Freeze on the firetower cast — your interrupt.",
          "Pillar of Frost + Frostwyrm's Fury on the adds cluster for AoE burst.",
          "Anti-Magic Shell during Flame Surge for magic damage immunity."]},

    'demonhunter-devourer': {
      nl:["Disrupt op de vuurtoren-cast — je bent semi-ranged, altijd in bereik.",
          "Hurl Glaive + Fel Barrage op de adds cluster voor ranged AoE burst.",
          "Blur bij Flame Surge als primair defensief — twee charges met Demonic Resilience."],
      en:["Disrupt on the firetower cast — you are semi-ranged, always in range.",
          "Hurl Glaive + Fel Barrage on the adds cluster for ranged AoE burst.",
          "Blur during Flame Surge as primary defensive — two charges with Demonic Resilience."]},

    'druid-feral': {
      nl:["Skull Bash op de vuurtoren-cast — korte cooldown, altijd in melee.",
          "Primal Wrath of Swipe voor AoE cleave op de adds cluster.",
          "Survival Instincts bij Flame Surge als persoonlijk defensief — twee charges."],
      en:["Skull Bash on the firetower cast — short cooldown, always in melee.",
          "Primal Wrath or Swipe for AoE cleave on the adds cluster.",
          "Survival Instincts during Flame Surge as personal defensive — two charges."]},

    'evoker-augmentation': {
      nl:["Tail Swipe of Wing Buffet op de vuurtoren-cast — Evoker CC-toolkit.",
          "Ebon Might + Breath of Eons activeren op de grote pull voor maximale groepsbuff.",
          "Obsidian Scales bij Flame Surge als persoonlijk defensief."],
      en:["Tail Swipe or Wing Buffet on the firetower cast — Evoker CC toolkit.",
          "Activate Ebon Might + Breath of Eons on the big pull for maximum group buff.",
          "Obsidian Scales during Flame Surge as personal defensive."]},

    'evoker-devastation': {
      nl:["Tail Swipe of Wing Buffet op de vuurtoren-cast — Evoker CC-toolkit.",
          "Dragonrage + Eternity Surge op de grote pull voor maximale burst.",
          "Obsidian Scales bij Flame Surge als persoonlijk defensief."],
      en:["Tail Swipe or Wing Buffet on the firetower cast — Evoker CC toolkit.",
          "Dragonrage + Eternity Surge on the big pull for maximum burst.",
          "Obsidian Scales during Flame Surge as personal defensive."]},

    'hunter-survival': {
      nl:["Counter Shot op de vuurtoren-cast — jij bent mobiel en hebt altijd een ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb voor burst AoE op de adds cluster.",
          "Aspect of the Turtle bij Flame Surge als noodimuniteit."],
      en:["Counter Shot on the firetower cast — you are mobile and always have a ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb for burst AoE on the adds cluster.",
          "Aspect of the Turtle during Flame Surge as emergency immunity."]},

    'mage-arcane': {
      nl:["Counterspell op de vuurtoren-cast — jij hebt de beste interrupt van alle mages.",
          "Arcane Surge bewaren voor de grote pulls of Bloodlust-window voor maximale burst.",
          "Ice Block bij Flame Surge als noodimuniteit — Arcane Mages zijn glaskanon, gebruik het goed."],
      en:["Counterspell on the firetower cast — you have the best interrupt of all mages.",
          "Save Arcane Surge for big pulls or Bloodlust window for maximum burst.",
          "Ice Block during Flame Surge as emergency immunity — Arcane Mages are glass cannons, use it wisely."]},

    'mage-fire': {
      nl:["Counterspell op de vuurtoren-cast — essentieel voor elke Mage.",
          "Combustion + Pyroclasm voor maximale burst op de grote pulls.",
          "Ice Block bij Flame Surge als noodimuniteit."],
      en:["Counterspell on the firetower cast — essential for every Mage.",
          "Combustion + Pyroclasm for maximum burst on big pulls.",
          "Ice Block during Flame Surge as emergency immunity."]},

    'priest-shadow': {
      nl:["Silence op de vuurtoren-cast — gecombineerd met Mind Blast als melee-interrupt.",
          "Void Eruption + Devouring Plague voor burst op de grote pulls.",
          "Dispersion bij Flame Surge voor 75% schade-reductie — beste persoonlijke defensief van alle clothies."],
      en:["Silence on the firetower cast — combined with Mind Blast as a ranged interrupt.",
          "Void Eruption + Devouring Plague for burst on big pulls.",
          "Dispersion during Flame Surge for 75% damage reduction — best personal defensive of all clothies."]},

    'rogue-assassination': {
      nl:["Kick op de vuurtoren-cast — wissel af met andere melee-interrupts.",
          "Deathmark + Shiv voor maximale single-target burst; Fan of Knives voor AoE.",
          "Evasion bij Flame Surge voor 100% melee-ontwijking."],
      en:["Kick on the firetower cast — rotate with other melee interrupts.",
          "Deathmark + Shiv for maximum single-target burst; Fan of Knives for AoE.",
          "Evasion during Flame Surge for 100% melee dodge."]},

    'rogue-subtlety': {
      nl:["Kick op de vuurtoren-cast — wissel af met andere melee-interrupts.",
          "Shadow Blades + Symbols of Death voor maximale burst in het Stealth-window.",
          "Evasion bij Flame Surge voor 100% melee-ontwijking."],
      en:["Kick on the firetower cast — rotate with other melee interrupts.",
          "Shadow Blades + Symbols of Death for maximum burst in the Stealth window.",
          "Evasion during Flame Surge for 100% melee dodge."]},

    'warlock-affliction': {
      nl:["Spell Lock (via Felhunter) op de vuurtoren-cast — jouw enige betrouwbare interrupt.",
          "Malefic Rapture voor AoE burst als meerdere targets vol DoTs zitten.",
          "Unending Resolve bij Flame Surge voor 40% schade-reductie en interrupt-immuniteit."],
      en:["Spell Lock (via Felhunter) on the firetower cast — your only reliable interrupt.",
          "Malefic Rapture for AoE burst when multiple targets are full of DoTs.",
          "Unending Resolve during Flame Surge for 40% damage reduction and interrupt immunity."]},

    'warlock-demonology': {
      nl:["Spell Lock (via Felhunter) op de vuurtoren-cast — essentieel in hoge keys.",
          "Summon Demonic Tyrant + Implosion voor maximale AoE burst op de adds cluster.",
          "Unending Resolve bij Flame Surge voor 40% schade-reductie."],
      en:["Spell Lock (via Felhunter) on the firetower cast — essential in high keys.",
          "Summon Demonic Tyrant + Implosion for maximum AoE burst on the adds cluster.",
          "Unending Resolve during Flame Surge for 40% damage reduction."]},

    'warlock-destruction': {
      nl:["Spell Lock (via Felhunter) op de vuurtoren-cast — jouw enige interrupt.",
          "Summon Infernal + Channel Demonfire voor burst op de grote pulls.",
          "Unending Resolve bij Flame Surge voor 40% schade-reductie."],
      en:["Spell Lock (via Felhunter) on the firetower cast — your only interrupt.",
          "Summon Infernal + Channel Demonfire for burst on big pulls.",
          "Unending Resolve during Flame Surge for 40% damage reduction."]}},
  // ── WINDRUNNER SPIRE ── boss 1 ──
  'windrunner-spire:1:tank': {
    'paladin-protection': {
      nl:["Kalis en Latch gescheiden houden — Avenger's Shield om Kalis's Shadowbolt te onderbreken én silencen.",
          "Blessing of Spellwarding op jezelf tijdens Shadow Overload.",
          "Divine Shield als noodrem als Broken Bond debuff op jou staat en de schade piekt."],
      en:["Keep Kalis and Latch apart — Avenger's Shield interrupts and silences Kalis's Shadowbolt.",
          "Blessing of Spellwarding on yourself during Shadow Overload.",
          "Divine Shield as emergency if Broken Bond debuff lands on you and damage spikes."]}
  ,
    'warrior-protection': {
      nl:["Spell Reflection op de banish-cast voor volledige spell-immuniteit.",
          "Shield Block uptime is cruciaal — houd hem zo constant mogelijk actief.",
          "Last Stand bij Shadow Crash als noodrem; Rallying Cry voor de groep."],
      en:["Spell Reflection on the banish cast for full spell immunity.",
          "Shield Block uptime is critical — keep it active as consistently as possible.",
          "Last Stand during Shadow Crash as emergency; Rallying Cry for the group."]},
    'monk-brewmaster': {
      nl:["Spear Hand Strike op de banish-cast — gecombineerd met hoge mobiliteit altijd bereikbaar.",
          "Stagger is jouw kernmechaniek — Purifying Brew gebruiken als Stagger rood wordt.",
          "Fortifying Brew bij Shadow Crash als primaire tank-cooldown."],
      en:["Spear Hand Strike on the banish cast — combined with high mobility always reachable.",
          "Stagger is your core mechanic — use Purifying Brew when Stagger turns red.",
          "Fortifying Brew during Shadow Crash as primary tank cooldown."]},
    'deathknight-blood': {
      nl:["Mind Freeze op de banish-cast — gecombineerd met Death Grip altijd bereikbaar.",
          "Death Strike is jouw kernmechaniek — gebruik hem wanneer je schade hebt opgelopen voor maximale healing.",
          "Vampiric Blood bij Shadow Crash als primaire tank-cooldown."],
      en:["Mind Freeze on the banish cast — combined with Death Grip always reachable.",
          "Death Strike is your core mechanic — use it after taking damage for maximum self-healing.",
          "Vampiric Blood during Shadow Crash as primary tank cooldown."]}},
  'windrunner-spire:1:heal': {
    'druid-restoration': {
      nl:["Curse of Darkness direct dispellen — een 12 seconden fixate van Dark Entity is dodelijk.",
          "Wild Growth + Flourish tijdens de Shadow Overload fase.",
          "Stampeding Roar zodat iedereen snel weg kan uit de schaduwen."],
      en:["Dispel Curse of Darkness immediately — a 12-second Dark Entity fixate is lethal.",
          "Wild Growth + Flourish during the Shadow Overload phase.",
          "Stampeding Roar so everyone can quickly escape the shadows."]}
  ,
    'monk-mistweaver': {
      nl:["Revival bij Shadow Crash voor massale groeps-healing in één global.",
          "Spinnende Crane Kick + Vivify voor efficiënte AoE healing tijdens hoge schade.",
          "Life Cocoon op de tank bij de zwaarste aanvallen — unieke absorb-cooldown."],
      en:["Revival during Shadow Crash for massive group healing in one global.",
          "Spinning Crane Kick + Vivify for efficient AoE healing during high damage.",
          "Life Cocoon on the tank during the heaviest hits — unique absorb cooldown."]},
    'priest-discipline': {
      nl:["Disc speelt proactief — Atonement vóór Shadow Crash op de hele groep plaatsen.",
          "Power Word: Barrier bij Shadow Crash voor groeps-schade-reductie.",
          "Schism + Penance voor burst healing via Atonement op meerdere targets tegelijk."],
      en:["Disc plays proactively — place Atonement on the entire group before Shadow Crash.",
          "Power Word: Barrier during Shadow Crash for group damage reduction.",
          "Schism + Penance for burst healing via Atonement on multiple targets simultaneously."]},

    'evoker-preservation': {
      nl:["Rescue of Hover om snel weg te komen van Shadow Crash-mechanics.",
          "Rewind bewaren voor de zwaarste groepsschade — unieke time-reversal healing.",
          "Dream Breath voor AoE healing op meerdere spelers tegelijk."],
      en:["Rescue or Hover to quickly escape Shadow Crash mechanics.",
          "Save Rewind for the heaviest group damage — unique time-reversal healing.",
          "Dream Breath for AoE healing on multiple players simultaneously."]},

    'priest-holy': {
      nl:["Symbol of Hope bij Shadow Crash voor groeps-mana-recovery — uniek voor Holy Priest.",
          "Holy Word: Sanctify voor instant AoE healing bij hoge schadepieken.",
          "Guardian Spirit op de tank bij kritieke momenten — voorkomt dodelijke klap."],
      en:["Symbol of Hope during Shadow Crash for group mana recovery — unique to Holy Priest.",
          "Holy Word: Sanctify for instant AoE healing during high damage spikes.",
          "Guardian Spirit on the tank at critical moments — prevents a killing blow."]},

    'shaman-restoration': {
      nl:["Healing Rain permanent neerleggen op de groep — jouw basis AoE-healing.",
          "Spirit Link Totem bij Shadow Crash voor groeps-schade-egalisering — uniek in het spel.",
          "Ancestral Protection Totem bewaren voor de zwaarste pull — tweede kans op leven."],
      en:["Keep Healing Rain permanently on the group — your baseline AoE healing.",
          "Spirit Link Totem during Shadow Crash for group damage equalization — unique in the game.",
          "Save Ancestral Protection Totem for the hardest pull — second chance at life."]}},
  'windrunner-spire:1:dps': {
    'hunter-beastmastery': {
      nl:["Counter Shot elke Kalis Shadowbolt cast — jouw interrupt is hier de betrouwbaarste.",
          "Misdirection naar de tank als Latch te ver wegloopt.",
          "Bestial Wrath als both bosses onder 30% zijn — burst ze gelijktijdig neer."],
      en:["Counter Shot every Kalis Shadowbolt cast — your interrupt is the most reliable here.",
          "Misdirection to tank if Latch wanders too far.",
          "Bestial Wrath when both bosses drop below 30% — burst them down together."]},
    'shaman-elemental': {
      nl:["Wind Shear op Kalis's Shadowbolt — hoge prioriteit, missen is dodelijk.",
          "Purge Shadow Overload buff van Latch zo snel mogelijk.",
          "Earthquake tussen de bosses in voor constante AoE-schade."],
      en:["Wind Shear on Kalis's Shadowbolt — high priority, missing is lethal.",
          "Purge Shadow Overload buff from Latch as quickly as possible.",
          "Earthquake between the bosses for constant AoE damage."]}
  ,
    'warrior-fury': {
      nl:["Pummel op de banish-cast — korte cooldown, gebruik hem consequent.",
          "Recklessness + Bladestorm op de grote pulls voor maximale AoE burst.",
          "Rallying Cry voor de groep bij Shadow Crash — één van de beste groeps-cooldowns in het spel."],
      en:["Pummel on the banish cast — short cooldown, use it consistently.",
          "Recklessness + Bladestorm on big pulls for maximum AoE burst.",
          "Rallying Cry for the group during Shadow Crash — one of the best group cooldowns in the game."]},
    'warrior-arms': {
      nl:["Pummel op de banish-cast — wissel af met de tank.",
          "Bladestorm op de shadow adds cluster voor AoE cleave.",
          "Rallying Cry voor de groep bij Shadow Crash als groeps-defensief."],
      en:["Pummel on the banish cast — rotate with the tank.",
          "Bladestorm on the shadow adds cluster for AoE cleave.",
          "Rallying Cry for the group during Shadow Crash as group defensive."]},
    'mage-frost': {
      nl:["Counterspell op de banish-cast — jouw interrupt is onmisbaar.",
          "Frozen Orb + Blizzard op de shadow adds cluster voor maximale AoE.",
          "Ice Block bij Shadow Crash als persoonlijke noodimuniteit."],
      en:["Counterspell on the banish cast — your interrupt is essential.",
          "Frozen Orb + Blizzard on the shadow adds cluster for maximum AoE.",
          "Ice Block during Shadow Crash as personal emergency immunity."]},
    'rogue-outlaw': {
      nl:["Kick op de banish-cast — wissel af met andere interrupts.",
          "Blade Flurry voor AoE cleave op de shadow adds cluster.",
          "Crimson Vial + Feint bij Shadow Crash voor personal survival."],
      en:["Kick on the banish cast — rotate with other interrupts.",
          "Blade Flurry for AoE cleave on the shadow adds cluster.",
          "Crimson Vial + Feint during Shadow Crash for personal survival."]},
    'monk-windwalker': {
      nl:["Spear Hand Strike op de banish-cast — gecombineerd met jouw hoge mobiliteit altijd bereikbaar.",
          "Spinning Crane Kick + Fist of the White Tiger op de shadow adds cluster voor burst AoE.",
          "Diffuse Magic of Dampen Harm bij Shadow Crash voor personal defensive."],
      en:["Spear Hand Strike on the banish cast — combined with your high mobility always reachable.",
          "Spinning Crane Kick + Fist of the White Tiger on the shadow adds cluster for burst AoE.",
          "Diffuse Magic or Dampen Harm during Shadow Crash for personal defensive."]},
    'shaman-enhancement': {
      nl:["Wind Shear op de banish-cast — korte cooldown, neem interrupt-verantwoordelijkheid.",
          "Feral Spirit + Doom Winds op de grote pulls voor maximale AoE burst.",
          "Astral Shift bij Shadow Crash als persoonlijk defensief."],
      en:["Wind Shear on the banish cast — short cooldown, take interrupt responsibility.",
          "Feral Spirit + Doom Winds on big pulls for maximum AoE burst.",
          "Astral Shift during Shadow Crash as personal defensive."]},
    'hunter-marksmanship': {
      nl:["Counter Shot op de banish-cast — volledig ranged, altijd in bereik.",
          "Volley + Rapid Fire op de shadow adds cluster voor massale ranged AoE.",
          "Aspect of the Turtle bij Shadow Crash als volledige immuniteit."],
      en:["Counter Shot on the banish cast — fully ranged, always in range.",
          "Volley + Rapid Fire on the shadow adds cluster for massive ranged AoE.",
          "Aspect of the Turtle during Shadow Crash for full immunity."]},
    'deathknight-unholy': {
      nl:["Mind Freeze op de banish-cast — jouw interrupt.",
          "Army of the Dead + Apocalypse voor maximale AoE burst op de shadow adds cluster.",
          "Anti-Magic Shell bij Shadow Crash voor magische schade-immuniteit."],
      en:["Mind Freeze on the banish cast — your interrupt.",
          "Army of the Dead + Apocalypse for maximum AoE burst on the shadow adds cluster.",
          "Anti-Magic Shell during Shadow Crash for magic damage immunity."]},

    'deathknight-frost': {
      nl:["Mind Freeze op de banish-cast — jouw interrupt.",
          "Pillar of Frost + Frostwyrm's Fury op de shadow adds cluster voor AoE burst.",
          "Anti-Magic Shell bij Shadow Crash voor magische schade-immuniteit."],
      en:["Mind Freeze on the banish cast — your interrupt.",
          "Pillar of Frost + Frostwyrm's Fury on the shadow adds cluster for AoE burst.",
          "Anti-Magic Shell during Shadow Crash for magic damage immunity."]},

    'demonhunter-devourer': {
      nl:["Disrupt op de banish-cast — je bent semi-ranged, altijd in bereik.",
          "Hurl Glaive + Fel Barrage op de shadow adds cluster voor ranged AoE burst.",
          "Blur bij Shadow Crash als primair defensief — twee charges met Demonic Resilience."],
      en:["Disrupt on the banish cast — you are semi-ranged, always in range.",
          "Hurl Glaive + Fel Barrage on the shadow adds cluster for ranged AoE burst.",
          "Blur during Shadow Crash as primary defensive — two charges with Demonic Resilience."]},

    'druid-feral': {
      nl:["Skull Bash op de banish-cast — korte cooldown, altijd in melee.",
          "Primal Wrath of Swipe voor AoE cleave op de shadow adds cluster.",
          "Survival Instincts bij Shadow Crash als persoonlijk defensief — twee charges."],
      en:["Skull Bash on the banish cast — short cooldown, always in melee.",
          "Primal Wrath or Swipe for AoE cleave on the shadow adds cluster.",
          "Survival Instincts during Shadow Crash as personal defensive — two charges."]},

    'evoker-augmentation': {
      nl:["Tail Swipe of Wing Buffet op de banish-cast — Evoker CC-toolkit.",
          "Ebon Might + Breath of Eons activeren op de grote pull voor maximale groepsbuff.",
          "Obsidian Scales bij Shadow Crash als persoonlijk defensief."],
      en:["Tail Swipe or Wing Buffet on the banish cast — Evoker CC toolkit.",
          "Activate Ebon Might + Breath of Eons on the big pull for maximum group buff.",
          "Obsidian Scales during Shadow Crash as personal defensive."]},

    'evoker-devastation': {
      nl:["Tail Swipe of Wing Buffet op de banish-cast — Evoker CC-toolkit.",
          "Dragonrage + Eternity Surge op de grote pull voor maximale burst.",
          "Obsidian Scales bij Shadow Crash als persoonlijk defensief."],
      en:["Tail Swipe or Wing Buffet on the banish cast — Evoker CC toolkit.",
          "Dragonrage + Eternity Surge on the big pull for maximum burst.",
          "Obsidian Scales during Shadow Crash as personal defensive."]},

    'hunter-survival': {
      nl:["Counter Shot op de banish-cast — jij bent mobiel en hebt altijd een ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb voor burst AoE op de shadow adds cluster.",
          "Aspect of the Turtle bij Shadow Crash als noodimuniteit."],
      en:["Counter Shot on the banish cast — you are mobile and always have a ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb for burst AoE on the shadow adds cluster.",
          "Aspect of the Turtle during Shadow Crash as emergency immunity."]},

    'mage-arcane': {
      nl:["Counterspell op de banish-cast — jij hebt de beste interrupt van alle mages.",
          "Arcane Surge bewaren voor de grote pulls of Bloodlust-window voor maximale burst.",
          "Ice Block bij Shadow Crash als noodimuniteit — Arcane Mages zijn glaskanon, gebruik het goed."],
      en:["Counterspell on the banish cast — you have the best interrupt of all mages.",
          "Save Arcane Surge for big pulls or Bloodlust window for maximum burst.",
          "Ice Block during Shadow Crash as emergency immunity — Arcane Mages are glass cannons, use it wisely."]},

    'mage-fire': {
      nl:["Counterspell op de banish-cast — essentieel voor elke Mage.",
          "Combustion + Pyroclasm voor maximale burst op de grote pulls.",
          "Ice Block bij Shadow Crash als noodimuniteit."],
      en:["Counterspell on the banish cast — essential for every Mage.",
          "Combustion + Pyroclasm for maximum burst on big pulls.",
          "Ice Block during Shadow Crash as emergency immunity."]},

    'priest-shadow': {
      nl:["Silence op de banish-cast — gecombineerd met Mind Blast als melee-interrupt.",
          "Void Eruption + Devouring Plague voor burst op de grote pulls.",
          "Dispersion bij Shadow Crash voor 75% schade-reductie — beste persoonlijke defensief van alle clothies."],
      en:["Silence on the banish cast — combined with Mind Blast as a ranged interrupt.",
          "Void Eruption + Devouring Plague for burst on big pulls.",
          "Dispersion during Shadow Crash for 75% damage reduction — best personal defensive of all clothies."]},

    'rogue-assassination': {
      nl:["Kick op de banish-cast — wissel af met andere melee-interrupts.",
          "Deathmark + Shiv voor maximale single-target burst; Fan of Knives voor AoE.",
          "Evasion bij Shadow Crash voor 100% melee-ontwijking."],
      en:["Kick on the banish cast — rotate with other melee interrupts.",
          "Deathmark + Shiv for maximum single-target burst; Fan of Knives for AoE.",
          "Evasion during Shadow Crash for 100% melee dodge."]},

    'rogue-subtlety': {
      nl:["Kick op de banish-cast — wissel af met andere melee-interrupts.",
          "Shadow Blades + Symbols of Death voor maximale burst in het Stealth-window.",
          "Evasion bij Shadow Crash voor 100% melee-ontwijking."],
      en:["Kick on the banish cast — rotate with other melee interrupts.",
          "Shadow Blades + Symbols of Death for maximum burst in the Stealth window.",
          "Evasion during Shadow Crash for 100% melee dodge."]},

    'warlock-affliction': {
      nl:["Spell Lock (via Felhunter) op de banish-cast — jouw enige betrouwbare interrupt.",
          "Malefic Rapture voor AoE burst als meerdere targets vol DoTs zitten.",
          "Unending Resolve bij Shadow Crash voor 40% schade-reductie en interrupt-immuniteit."],
      en:["Spell Lock (via Felhunter) on the banish cast — your only reliable interrupt.",
          "Malefic Rapture for AoE burst when multiple targets are full of DoTs.",
          "Unending Resolve during Shadow Crash for 40% damage reduction and interrupt immunity."]},

    'warlock-demonology': {
      nl:["Spell Lock (via Felhunter) op de banish-cast — essentieel in hoge keys.",
          "Summon Demonic Tyrant + Implosion voor maximale AoE burst op de shadow adds cluster.",
          "Unending Resolve bij Shadow Crash voor 40% schade-reductie."],
      en:["Spell Lock (via Felhunter) on the banish cast — essential in high keys.",
          "Summon Demonic Tyrant + Implosion for maximum AoE burst on the shadow adds cluster.",
          "Unending Resolve during Shadow Crash for 40% damage reduction."]},

    'warlock-destruction': {
      nl:["Spell Lock (via Felhunter) op de banish-cast — jouw enige interrupt.",
          "Summon Infernal + Channel Demonfire voor burst op de grote pulls.",
          "Unending Resolve bij Shadow Crash voor 40% schade-reductie."],
      en:["Spell Lock (via Felhunter) on the banish cast — your only interrupt.",
          "Summon Infernal + Channel Demonfire for burst on big pulls.",
          "Unending Resolve during Shadow Crash for 40% damage reduction."]}},
  // ── MAGISTERS' TERRACE ── boss 0 ──
  'magisters-terrace:0:tank': {
    'paladin-protection': {
      nl:["Divine Toll voor AoE-taunt op de arcane constructs bij de pull.",
          "Shield of the Righteous spam tijdens Arcane Surge — dit is de schade-piek.",
          "Avenger's Shield om Arcane Channeling te onderbreken."],
      en:["Divine Toll for AoE taunt on the arcane constructs at the pull.",
          "Shield of the Righteous spam during Arcane Surge — this is the damage spike.",
          "Avenger's Shield to interrupt Arcane Channeling."]}
  ,
    'warrior-protection': {
      nl:["Spell Reflection op de arcane cast voor volledige spell-immuniteit.",
          "Shield Block uptime is cruciaal — houd hem zo constant mogelijk actief.",
          "Last Stand bij Arcane Barrage als noodrem; Rallying Cry voor de groep."],
      en:["Spell Reflection on the arcane cast for full spell immunity.",
          "Shield Block uptime is critical — keep it active as consistently as possible.",
          "Last Stand during Arcane Barrage as emergency; Rallying Cry for the group."]},
    'monk-brewmaster': {
      nl:["Spear Hand Strike op de arcane cast — gecombineerd met hoge mobiliteit altijd bereikbaar.",
          "Stagger is jouw kernmechaniek — Purifying Brew gebruiken als Stagger rood wordt.",
          "Fortifying Brew bij Arcane Barrage als primaire tank-cooldown."],
      en:["Spear Hand Strike on the arcane cast — combined with high mobility always reachable.",
          "Stagger is your core mechanic — use Purifying Brew when Stagger turns red.",
          "Fortifying Brew during Arcane Barrage as primary tank cooldown."]},
    'deathknight-blood': {
      nl:["Mind Freeze op de arcane cast — gecombineerd met Death Grip altijd bereikbaar.",
          "Death Strike is jouw kernmechaniek — gebruik hem wanneer je schade hebt opgelopen voor maximale healing.",
          "Vampiric Blood bij Arcane Barrage als primaire tank-cooldown."],
      en:["Mind Freeze on the arcane cast — combined with Death Grip always reachable.",
          "Death Strike is your core mechanic — use it after taking damage for maximum self-healing.",
          "Vampiric Blood during Arcane Barrage as primary tank cooldown."]}},
  'magisters-terrace:0:heal': {
    'druid-restoration': {
      nl:["Efflorescence permanent onder de melee-cluster — constante AoE healing tijdens arcane ticks.",
          "Ironbark op de tank tijdens Arcane Surge.",
          "Switch naar Cat Form tijdens lage-schade fasen voor extra damage."],
      en:["Keep Efflorescence permanently under the melee cluster — constant AoE healing during arcane ticks.",
          "Ironbark on tank during Arcane Surge.",
          "Switch to Cat Form during low-damage phases for extra damage."]}
  ,
    'monk-mistweaver': {
      nl:["Revival bij Arcane Barrage voor massale groeps-healing in één global.",
          "Spinnende Crane Kick + Vivify voor efficiënte AoE healing tijdens hoge schade.",
          "Life Cocoon op de tank bij de zwaarste aanvallen — unieke absorb-cooldown."],
      en:["Revival during Arcane Barrage for massive group healing in one global.",
          "Spinning Crane Kick + Vivify for efficient AoE healing during high damage.",
          "Life Cocoon on the tank during the heaviest hits — unique absorb cooldown."]},
    'priest-discipline': {
      nl:["Disc speelt proactief — Atonement vóór Arcane Barrage op de hele groep plaatsen.",
          "Power Word: Barrier bij Arcane Barrage voor groeps-schade-reductie.",
          "Schism + Penance voor burst healing via Atonement op meerdere targets tegelijk."],
      en:["Disc plays proactively — place Atonement on the entire group before Arcane Barrage.",
          "Power Word: Barrier during Arcane Barrage for group damage reduction.",
          "Schism + Penance for burst healing via Atonement on multiple targets simultaneously."]},

    'evoker-preservation': {
      nl:["Rescue of Hover om snel weg te komen van Arcane Barrage-mechanics.",
          "Rewind bewaren voor de zwaarste groepsschade — unieke time-reversal healing.",
          "Dream Breath voor AoE healing op meerdere spelers tegelijk."],
      en:["Rescue or Hover to quickly escape Arcane Barrage mechanics.",
          "Save Rewind for the heaviest group damage — unique time-reversal healing.",
          "Dream Breath for AoE healing on multiple players simultaneously."]},

    'priest-holy': {
      nl:["Symbol of Hope bij Arcane Barrage voor groeps-mana-recovery — uniek voor Holy Priest.",
          "Holy Word: Sanctify voor instant AoE healing bij hoge schadepieken.",
          "Guardian Spirit op de tank bij kritieke momenten — voorkomt dodelijke klap."],
      en:["Symbol of Hope during Arcane Barrage for group mana recovery — unique to Holy Priest.",
          "Holy Word: Sanctify for instant AoE healing during high damage spikes.",
          "Guardian Spirit on the tank at critical moments — prevents a killing blow."]},

    'shaman-restoration': {
      nl:["Healing Rain permanent neerleggen op de groep — jouw basis AoE-healing.",
          "Spirit Link Totem bij Arcane Barrage voor groeps-schade-egalisering — uniek in het spel.",
          "Ancestral Protection Totem bewaren voor de zwaarste pull — tweede kans op leven."],
      en:["Keep Healing Rain permanently on the group — your baseline AoE healing.",
          "Spirit Link Totem during Arcane Barrage for group damage equalization — unique in the game.",
          "Save Ancestral Protection Totem for the hardest pull — second chance at life."]}},
  'magisters-terrace:0:dps': {
    'hunter-beastmastery': {
      nl:["Volledig mobiel bij arcane explosions — jij hebt nul DPS-verlies bij bewegen.",
          "Counter Shot op Arcane Channeling.",
          "Bestial Wrath + Primal Rage op de pull voor maximale openingsschade."],
      en:["Fully mobile during arcane explosions — you have zero DPS loss while moving.",
          "Counter Shot on Arcane Channeling.",
          "Bestial Wrath + Primal Rage on the pull for maximum opening damage."]},
    'shaman-elemental': {
      nl:["Wind Shear op Arcane Channeling — interrupt met hoge prioriteit.",
          "Spiritwalker's Grace gebruiken tijdens bewegingsintensieve fasen.",
          "Stormkeeper bewaren voor het Bloodlust-venster voor de beste AoE."],
      en:["Wind Shear on Arcane Channeling — high priority interrupt.",
          "Use Spiritwalker's Grace during movement-heavy phases.",
          "Save Stormkeeper for the Bloodlust window for best AoE."]}
  ,
    'warrior-fury': {
      nl:["Pummel op de arcane cast — korte cooldown, gebruik hem consequent.",
          "Recklessness + Bladestorm op de grote pulls voor maximale AoE burst.",
          "Rallying Cry voor de groep bij Arcane Barrage — één van de beste groeps-cooldowns in het spel."],
      en:["Pummel on the arcane cast — short cooldown, use it consistently.",
          "Recklessness + Bladestorm on big pulls for maximum AoE burst.",
          "Rallying Cry for the group during Arcane Barrage — one of the best group cooldowns in the game."]},
    'warrior-arms': {
      nl:["Pummel op de arcane cast — wissel af met de tank.",
          "Bladestorm op de mana adds cluster voor AoE cleave.",
          "Rallying Cry voor de groep bij Arcane Barrage als groeps-defensief."],
      en:["Pummel on the arcane cast — rotate with the tank.",
          "Bladestorm on the mana adds cluster for AoE cleave.",
          "Rallying Cry for the group during Arcane Barrage as group defensive."]},
    'mage-frost': {
      nl:["Counterspell op de arcane cast — jouw interrupt is onmisbaar.",
          "Frozen Orb + Blizzard op de mana adds cluster voor maximale AoE.",
          "Ice Block bij Arcane Barrage als persoonlijke noodimuniteit."],
      en:["Counterspell on the arcane cast — your interrupt is essential.",
          "Frozen Orb + Blizzard on the mana adds cluster for maximum AoE.",
          "Ice Block during Arcane Barrage as personal emergency immunity."]},
    'rogue-outlaw': {
      nl:["Kick op de arcane cast — wissel af met andere interrupts.",
          "Blade Flurry voor AoE cleave op de mana adds cluster.",
          "Crimson Vial + Feint bij Arcane Barrage voor personal survival."],
      en:["Kick on the arcane cast — rotate with other interrupts.",
          "Blade Flurry for AoE cleave on the mana adds cluster.",
          "Crimson Vial + Feint during Arcane Barrage for personal survival."]},
    'monk-windwalker': {
      nl:["Spear Hand Strike op de arcane cast — gecombineerd met jouw hoge mobiliteit altijd bereikbaar.",
          "Spinning Crane Kick + Fist of the White Tiger op de mana adds cluster voor burst AoE.",
          "Diffuse Magic of Dampen Harm bij Arcane Barrage voor personal defensive."],
      en:["Spear Hand Strike on the arcane cast — combined with your high mobility always reachable.",
          "Spinning Crane Kick + Fist of the White Tiger on the mana adds cluster for burst AoE.",
          "Diffuse Magic or Dampen Harm during Arcane Barrage for personal defensive."]},
    'shaman-enhancement': {
      nl:["Wind Shear op de arcane cast — korte cooldown, neem interrupt-verantwoordelijkheid.",
          "Feral Spirit + Doom Winds op de grote pulls voor maximale AoE burst.",
          "Astral Shift bij Arcane Barrage als persoonlijk defensief."],
      en:["Wind Shear on the arcane cast — short cooldown, take interrupt responsibility.",
          "Feral Spirit + Doom Winds on big pulls for maximum AoE burst.",
          "Astral Shift during Arcane Barrage as personal defensive."]},
    'hunter-marksmanship': {
      nl:["Counter Shot op de arcane cast — volledig ranged, altijd in bereik.",
          "Volley + Rapid Fire op de mana adds cluster voor massale ranged AoE.",
          "Aspect of the Turtle bij Arcane Barrage als volledige immuniteit."],
      en:["Counter Shot on the arcane cast — fully ranged, always in range.",
          "Volley + Rapid Fire on the mana adds cluster for massive ranged AoE.",
          "Aspect of the Turtle during Arcane Barrage for full immunity."]},
    'deathknight-unholy': {
      nl:["Mind Freeze op de arcane cast — jouw interrupt.",
          "Army of the Dead + Apocalypse voor maximale AoE burst op de mana adds cluster.",
          "Anti-Magic Shell bij Arcane Barrage voor magische schade-immuniteit."],
      en:["Mind Freeze on the arcane cast — your interrupt.",
          "Army of the Dead + Apocalypse for maximum AoE burst on the mana adds cluster.",
          "Anti-Magic Shell during Arcane Barrage for magic damage immunity."]},

    'deathknight-frost': {
      nl:["Mind Freeze op de arcane cast — jouw interrupt.",
          "Pillar of Frost + Frostwyrm's Fury op de mana adds cluster voor AoE burst.",
          "Anti-Magic Shell bij Arcane Barrage voor magische schade-immuniteit."],
      en:["Mind Freeze on the arcane cast — your interrupt.",
          "Pillar of Frost + Frostwyrm's Fury on the mana adds cluster for AoE burst.",
          "Anti-Magic Shell during Arcane Barrage for magic damage immunity."]},

    'demonhunter-devourer': {
      nl:["Disrupt op de arcane cast — je bent semi-ranged, altijd in bereik.",
          "Hurl Glaive + Fel Barrage op de mana adds cluster voor ranged AoE burst.",
          "Blur bij Arcane Barrage als primair defensief — twee charges met Demonic Resilience."],
      en:["Disrupt on the arcane cast — you are semi-ranged, always in range.",
          "Hurl Glaive + Fel Barrage on the mana adds cluster for ranged AoE burst.",
          "Blur during Arcane Barrage as primary defensive — two charges with Demonic Resilience."]},

    'druid-feral': {
      nl:["Skull Bash op de arcane cast — korte cooldown, altijd in melee.",
          "Primal Wrath of Swipe voor AoE cleave op de mana adds cluster.",
          "Survival Instincts bij Arcane Barrage als persoonlijk defensief — twee charges."],
      en:["Skull Bash on the arcane cast — short cooldown, always in melee.",
          "Primal Wrath or Swipe for AoE cleave on the mana adds cluster.",
          "Survival Instincts during Arcane Barrage as personal defensive — two charges."]},

    'evoker-augmentation': {
      nl:["Tail Swipe of Wing Buffet op de arcane cast — Evoker CC-toolkit.",
          "Ebon Might + Breath of Eons activeren op de grote pull voor maximale groepsbuff.",
          "Obsidian Scales bij Arcane Barrage als persoonlijk defensief."],
      en:["Tail Swipe or Wing Buffet on the arcane cast — Evoker CC toolkit.",
          "Activate Ebon Might + Breath of Eons on the big pull for maximum group buff.",
          "Obsidian Scales during Arcane Barrage as personal defensive."]},

    'evoker-devastation': {
      nl:["Tail Swipe of Wing Buffet op de arcane cast — Evoker CC-toolkit.",
          "Dragonrage + Eternity Surge op de grote pull voor maximale burst.",
          "Obsidian Scales bij Arcane Barrage als persoonlijk defensief."],
      en:["Tail Swipe or Wing Buffet on the arcane cast — Evoker CC toolkit.",
          "Dragonrage + Eternity Surge on the big pull for maximum burst.",
          "Obsidian Scales during Arcane Barrage as personal defensive."]},

    'hunter-survival': {
      nl:["Counter Shot op de arcane cast — jij bent mobiel en hebt altijd een ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb voor burst AoE op de mana adds cluster.",
          "Aspect of the Turtle bij Arcane Barrage als noodimuniteit."],
      en:["Counter Shot on the arcane cast — you are mobile and always have a ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb for burst AoE on the mana adds cluster.",
          "Aspect of the Turtle during Arcane Barrage as emergency immunity."]},

    'mage-arcane': {
      nl:["Counterspell op de arcane cast — jij hebt de beste interrupt van alle mages.",
          "Arcane Surge bewaren voor de grote pulls of Bloodlust-window voor maximale burst.",
          "Ice Block bij Arcane Barrage als noodimuniteit — Arcane Mages zijn glaskanon, gebruik het goed."],
      en:["Counterspell on the arcane cast — you have the best interrupt of all mages.",
          "Save Arcane Surge for big pulls or Bloodlust window for maximum burst.",
          "Ice Block during Arcane Barrage as emergency immunity — Arcane Mages are glass cannons, use it wisely."]},

    'mage-fire': {
      nl:["Counterspell op de arcane cast — essentieel voor elke Mage.",
          "Combustion + Pyroclasm voor maximale burst op de grote pulls.",
          "Ice Block bij Arcane Barrage als noodimuniteit."],
      en:["Counterspell on the arcane cast — essential for every Mage.",
          "Combustion + Pyroclasm for maximum burst on big pulls.",
          "Ice Block during Arcane Barrage as emergency immunity."]},

    'priest-shadow': {
      nl:["Silence op de arcane cast — gecombineerd met Mind Blast als melee-interrupt.",
          "Void Eruption + Devouring Plague voor burst op de grote pulls.",
          "Dispersion bij Arcane Barrage voor 75% schade-reductie — beste persoonlijke defensief van alle clothies."],
      en:["Silence on the arcane cast — combined with Mind Blast as a ranged interrupt.",
          "Void Eruption + Devouring Plague for burst on big pulls.",
          "Dispersion during Arcane Barrage for 75% damage reduction — best personal defensive of all clothies."]},

    'rogue-assassination': {
      nl:["Kick op de arcane cast — wissel af met andere melee-interrupts.",
          "Deathmark + Shiv voor maximale single-target burst; Fan of Knives voor AoE.",
          "Evasion bij Arcane Barrage voor 100% melee-ontwijking."],
      en:["Kick on the arcane cast — rotate with other melee interrupts.",
          "Deathmark + Shiv for maximum single-target burst; Fan of Knives for AoE.",
          "Evasion during Arcane Barrage for 100% melee dodge."]},

    'rogue-subtlety': {
      nl:["Kick op de arcane cast — wissel af met andere melee-interrupts.",
          "Shadow Blades + Symbols of Death voor maximale burst in het Stealth-window.",
          "Evasion bij Arcane Barrage voor 100% melee-ontwijking."],
      en:["Kick on the arcane cast — rotate with other melee interrupts.",
          "Shadow Blades + Symbols of Death for maximum burst in the Stealth window.",
          "Evasion during Arcane Barrage for 100% melee dodge."]},

    'warlock-affliction': {
      nl:["Spell Lock (via Felhunter) op de arcane cast — jouw enige betrouwbare interrupt.",
          "Malefic Rapture voor AoE burst als meerdere targets vol DoTs zitten.",
          "Unending Resolve bij Arcane Barrage voor 40% schade-reductie en interrupt-immuniteit."],
      en:["Spell Lock (via Felhunter) on the arcane cast — your only reliable interrupt.",
          "Malefic Rapture for AoE burst when multiple targets are full of DoTs.",
          "Unending Resolve during Arcane Barrage for 40% damage reduction and interrupt immunity."]},

    'warlock-demonology': {
      nl:["Spell Lock (via Felhunter) op de arcane cast — essentieel in hoge keys.",
          "Summon Demonic Tyrant + Implosion voor maximale AoE burst op de mana adds cluster.",
          "Unending Resolve bij Arcane Barrage voor 40% schade-reductie."],
      en:["Spell Lock (via Felhunter) on the arcane cast — essential in high keys.",
          "Summon Demonic Tyrant + Implosion for maximum AoE burst on the mana adds cluster.",
          "Unending Resolve during Arcane Barrage for 40% damage reduction."]},

    'warlock-destruction': {
      nl:["Spell Lock (via Felhunter) op de arcane cast — jouw enige interrupt.",
          "Summon Infernal + Channel Demonfire voor burst op de grote pulls.",
          "Unending Resolve bij Arcane Barrage voor 40% schade-reductie."],
      en:["Spell Lock (via Felhunter) on the arcane cast — your only interrupt.",
          "Summon Infernal + Channel Demonfire for burst on big pulls.",
          "Unending Resolve during Arcane Barrage for 40% damage reduction."]}},
  // ── MAISARA CAVERNS ── boss 0 ──
  'maisara-caverns:0:tank': {
    'paladin-protection': {
      nl:["Mun'jin en Neloax scheiden — Avenger's Shield silencet de caster (Neloax) direct.",
          "Blessing of Protection op een DPS-speler die een gevaarlijk debuff heeft.",
          "Guardian of Ancient Kings tijdens de gecombineerde aanvalsfase."],
      en:["Separate Mun'jin and Neloax — Avenger's Shield silences the caster (Neloax) directly.",
          "Blessing of Protection on a DPS player with a dangerous debuff.",
          "Guardian of Ancient Kings during the combined attack phase."]}
  ,
    'warrior-protection': {
      nl:["Spell Reflection op de gift-cast voor volledige spell-immuniteit.",
          "Shield Block uptime is cruciaal — houd hem zo constant mogelijk actief.",
          "Last Stand bij Toxic Spew als noodrem; Rallying Cry voor de groep."],
      en:["Spell Reflection on the poison cast for full spell immunity.",
          "Shield Block uptime is critical — keep it active as consistently as possible.",
          "Last Stand during Toxic Spew as emergency; Rallying Cry for the group."]},
    'monk-brewmaster': {
      nl:["Spear Hand Strike op de gift-cast — gecombineerd met hoge mobiliteit altijd bereikbaar.",
          "Stagger is jouw kernmechaniek — Purifying Brew gebruiken als Stagger rood wordt.",
          "Fortifying Brew bij Toxic Spew als primaire tank-cooldown."],
      en:["Spear Hand Strike on the poison cast — combined with high mobility always reachable.",
          "Stagger is your core mechanic — use Purifying Brew when Stagger turns red.",
          "Fortifying Brew during Toxic Spew as primary tank cooldown."]},
    'deathknight-blood': {
      nl:["Mind Freeze op de gift-cast — gecombineerd met Death Grip altijd bereikbaar.",
          "Death Strike is jouw kernmechaniek — gebruik hem wanneer je schade hebt opgelopen voor maximale healing.",
          "Vampiric Blood bij Toxic Spew als primaire tank-cooldown."],
      en:["Mind Freeze on the poison cast — combined with Death Grip always reachable.",
          "Death Strike is your core mechanic — use it after taking damage for maximum self-healing.",
          "Vampiric Blood during Toxic Spew as primary tank cooldown."]}},
  'maisara-caverns:0:heal': {
    'druid-restoration': {
      nl:["Pre-HoT alle spelers vóór de gecombineerde aanvalsfase.",
          "Tranquility als both bosses tegelijk hun abilities gebruiken.",
          "Cyclone op Neloax als ze onbeheersbare schade maakt."],
      en:["Pre-HoT all players before the combined attack phase.",
          "Tranquility when both bosses use abilities simultaneously.",
          "Cyclone on Neloax if she is dealing uncontrollable damage."]}
  ,
    'monk-mistweaver': {
      nl:["Revival bij Toxic Spew voor massale groeps-healing in één global.",
          "Spinnende Crane Kick + Vivify voor efficiënte AoE healing tijdens hoge schade.",
          "Life Cocoon op de tank bij de zwaarste aanvallen — unieke absorb-cooldown."],
      en:["Revival during Toxic Spew for massive group healing in one global.",
          "Spinning Crane Kick + Vivify for efficient AoE healing during high damage.",
          "Life Cocoon on the tank during the heaviest hits — unique absorb cooldown."]},
    'priest-discipline': {
      nl:["Disc speelt proactief — Atonement vóór Toxic Spew op de hele groep plaatsen.",
          "Power Word: Barrier bij Toxic Spew voor groeps-schade-reductie.",
          "Schism + Penance voor burst healing via Atonement op meerdere targets tegelijk."],
      en:["Disc plays proactively — place Atonement on the entire group before Toxic Spew.",
          "Power Word: Barrier during Toxic Spew for group damage reduction.",
          "Schism + Penance for burst healing via Atonement on multiple targets simultaneously."]},

    'evoker-preservation': {
      nl:["Rescue of Hover om snel weg te komen van Toxic Spew-mechanics.",
          "Rewind bewaren voor de zwaarste groepsschade — unieke time-reversal healing.",
          "Dream Breath voor AoE healing op meerdere spelers tegelijk."],
      en:["Rescue or Hover to quickly escape Toxic Spew mechanics.",
          "Save Rewind for the heaviest group damage — unique time-reversal healing.",
          "Dream Breath for AoE healing on multiple players simultaneously."]},

    'priest-holy': {
      nl:["Symbol of Hope bij Toxic Spew voor groeps-mana-recovery — uniek voor Holy Priest.",
          "Holy Word: Sanctify voor instant AoE healing bij hoge schadepieken.",
          "Guardian Spirit op de tank bij kritieke momenten — voorkomt dodelijke klap."],
      en:["Symbol of Hope during Toxic Spew for group mana recovery — unique to Holy Priest.",
          "Holy Word: Sanctify for instant AoE healing during high damage spikes.",
          "Guardian Spirit on the tank at critical moments — prevents a killing blow."]},

    'shaman-restoration': {
      nl:["Healing Rain permanent neerleggen op de groep — jouw basis AoE-healing.",
          "Spirit Link Totem bij Toxic Spew voor groeps-schade-egalisering — uniek in het spel.",
          "Ancestral Protection Totem bewaren voor de zwaarste pull — tweede kans op leven."],
      en:["Keep Healing Rain permanently on the group — your baseline AoE healing.",
          "Spirit Link Totem during Toxic Spew for group damage equalization — unique in the game.",
          "Save Ancestral Protection Totem for the hardest pull — second chance at life."]}},
  'maisara-caverns:0:dps': {
    'hunter-beastmastery': {
      nl:["Both bosses gelijkmatig aanvallen — Hunter's Mark op de boss met meer HP.",
          "Counter Shot op Neloax haar casts.",
          "Binding Shot om both bosses even stil te houden voor AoE-burst."],
      en:["Attack both bosses evenly — Hunter's Mark on the boss with more HP.",
          "Counter Shot on Neloax's casts.",
          "Binding Shot to briefly root both bosses for AoE burst."]},
    'shaman-elemental': {
      nl:["Earthquake tussen de two bosses voor maximale AoE-waarde.",
          "Wind Shear op Neloax — wissel af met de tank voor maximale uptime.",
          "Purge eventuele buffs van Mun'jin direct."],
      en:["Earthquake between the two bosses for maximum AoE value.",
          "Wind Shear on Neloax — alternate with the tank to maximise uptime.",
          "Purge any buffs from Mun'jin immediately."]}
  ,
    'warrior-fury': {
      nl:["Pummel op de gift-cast — korte cooldown, gebruik hem consequent.",
          "Recklessness + Bladestorm op de grote pulls voor maximale AoE burst.",
          "Rallying Cry voor de groep bij Toxic Spew — één van de beste groeps-cooldowns in het spel."],
      en:["Pummel on the poison cast — short cooldown, use it consistently.",
          "Recklessness + Bladestorm on big pulls for maximum AoE burst.",
          "Rallying Cry for the group during Toxic Spew — one of the best group cooldowns in the game."]},
    'warrior-arms': {
      nl:["Pummel op de gift-cast — wissel af met de tank.",
          "Bladestorm op de venomous adds cluster voor AoE cleave.",
          "Rallying Cry voor de groep bij Toxic Spew als groeps-defensief."],
      en:["Pummel on the poison cast — rotate with the tank.",
          "Bladestorm on the venomous adds cluster for AoE cleave.",
          "Rallying Cry for the group during Toxic Spew as group defensive."]},
    'mage-frost': {
      nl:["Counterspell op de gift-cast — jouw interrupt is onmisbaar.",
          "Frozen Orb + Blizzard op de venomous adds cluster voor maximale AoE.",
          "Ice Block bij Toxic Spew als persoonlijke noodimuniteit."],
      en:["Counterspell on the poison cast — your interrupt is essential.",
          "Frozen Orb + Blizzard on the venomous adds cluster for maximum AoE.",
          "Ice Block during Toxic Spew as personal emergency immunity."]},
    'rogue-outlaw': {
      nl:["Kick op de gift-cast — wissel af met andere interrupts.",
          "Blade Flurry voor AoE cleave op de venomous adds cluster.",
          "Crimson Vial + Feint bij Toxic Spew voor personal survival."],
      en:["Kick on the poison cast — rotate with other interrupts.",
          "Blade Flurry for AoE cleave on the venomous adds cluster.",
          "Crimson Vial + Feint during Toxic Spew for personal survival."]},
    'monk-windwalker': {
      nl:["Spear Hand Strike op de gift-cast — gecombineerd met jouw hoge mobiliteit altijd bereikbaar.",
          "Spinning Crane Kick + Fist of the White Tiger op de venomous adds cluster voor burst AoE.",
          "Diffuse Magic of Dampen Harm bij Toxic Spew voor personal defensive."],
      en:["Spear Hand Strike on the poison cast — combined with your high mobility always reachable.",
          "Spinning Crane Kick + Fist of the White Tiger on the venomous adds cluster for burst AoE.",
          "Diffuse Magic or Dampen Harm during Toxic Spew for personal defensive."]},
    'shaman-enhancement': {
      nl:["Wind Shear op de gift-cast — korte cooldown, neem interrupt-verantwoordelijkheid.",
          "Feral Spirit + Doom Winds op de grote pulls voor maximale AoE burst.",
          "Astral Shift bij Toxic Spew als persoonlijk defensief."],
      en:["Wind Shear on the poison cast — short cooldown, take interrupt responsibility.",
          "Feral Spirit + Doom Winds on big pulls for maximum AoE burst.",
          "Astral Shift during Toxic Spew as personal defensive."]},
    'hunter-marksmanship': {
      nl:["Counter Shot op de gift-cast — volledig ranged, altijd in bereik.",
          "Volley + Rapid Fire op de venomous adds cluster voor massale ranged AoE.",
          "Aspect of the Turtle bij Toxic Spew als volledige immuniteit."],
      en:["Counter Shot on the poison cast — fully ranged, always in range.",
          "Volley + Rapid Fire on the venomous adds cluster for massive ranged AoE.",
          "Aspect of the Turtle during Toxic Spew for full immunity."]},
    'deathknight-unholy': {
      nl:["Mind Freeze op de gift-cast — jouw interrupt.",
          "Army of the Dead + Apocalypse voor maximale AoE burst op de venomous adds cluster.",
          "Anti-Magic Shell bij Toxic Spew voor magische schade-immuniteit."],
      en:["Mind Freeze on the poison cast — your interrupt.",
          "Army of the Dead + Apocalypse for maximum AoE burst on the venomous adds cluster.",
          "Anti-Magic Shell during Toxic Spew for magic damage immunity."]},

    'deathknight-frost': {
      nl:["Mind Freeze op de gift-cast — jouw interrupt.",
          "Pillar of Frost + Frostwyrm's Fury op de venomous adds cluster voor AoE burst.",
          "Anti-Magic Shell bij Toxic Spew voor magische schade-immuniteit."],
      en:["Mind Freeze on the poison cast — your interrupt.",
          "Pillar of Frost + Frostwyrm's Fury on the venomous adds cluster for AoE burst.",
          "Anti-Magic Shell during Toxic Spew for magic damage immunity."]},

    'demonhunter-devourer': {
      nl:["Disrupt op de gift-cast — je bent semi-ranged, altijd in bereik.",
          "Hurl Glaive + Fel Barrage op de venomous adds cluster voor ranged AoE burst.",
          "Blur bij Toxic Spew als primair defensief — twee charges met Demonic Resilience."],
      en:["Disrupt on the poison cast — you are semi-ranged, always in range.",
          "Hurl Glaive + Fel Barrage on the venomous adds cluster for ranged AoE burst.",
          "Blur during Toxic Spew as primary defensive — two charges with Demonic Resilience."]},

    'druid-feral': {
      nl:["Skull Bash op de gift-cast — korte cooldown, altijd in melee.",
          "Primal Wrath of Swipe voor AoE cleave op de venomous adds cluster.",
          "Survival Instincts bij Toxic Spew als persoonlijk defensief — twee charges."],
      en:["Skull Bash on the poison cast — short cooldown, always in melee.",
          "Primal Wrath or Swipe for AoE cleave on the venomous adds cluster.",
          "Survival Instincts during Toxic Spew as personal defensive — two charges."]},

    'evoker-augmentation': {
      nl:["Tail Swipe of Wing Buffet op de gift-cast — Evoker CC-toolkit.",
          "Ebon Might + Breath of Eons activeren op de grote pull voor maximale groepsbuff.",
          "Obsidian Scales bij Toxic Spew als persoonlijk defensief."],
      en:["Tail Swipe or Wing Buffet on the poison cast — Evoker CC toolkit.",
          "Activate Ebon Might + Breath of Eons on the big pull for maximum group buff.",
          "Obsidian Scales during Toxic Spew as personal defensive."]},

    'evoker-devastation': {
      nl:["Tail Swipe of Wing Buffet op de gift-cast — Evoker CC-toolkit.",
          "Dragonrage + Eternity Surge op de grote pull voor maximale burst.",
          "Obsidian Scales bij Toxic Spew als persoonlijk defensief."],
      en:["Tail Swipe or Wing Buffet on the poison cast — Evoker CC toolkit.",
          "Dragonrage + Eternity Surge on the big pull for maximum burst.",
          "Obsidian Scales during Toxic Spew as personal defensive."]},

    'hunter-survival': {
      nl:["Counter Shot op de gift-cast — jij bent mobiel en hebt altijd een ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb voor burst AoE op de venomous adds cluster.",
          "Aspect of the Turtle bij Toxic Spew als noodimuniteit."],
      en:["Counter Shot on the poison cast — you are mobile and always have a ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb for burst AoE on the venomous adds cluster.",
          "Aspect of the Turtle during Toxic Spew as emergency immunity."]},

    'mage-arcane': {
      nl:["Counterspell op de gift-cast — jij hebt de beste interrupt van alle mages.",
          "Arcane Surge bewaren voor de grote pulls of Bloodlust-window voor maximale burst.",
          "Ice Block bij Toxic Spew als noodimuniteit — Arcane Mages zijn glaskanon, gebruik het goed."],
      en:["Counterspell on the poison cast — you have the best interrupt of all mages.",
          "Save Arcane Surge for big pulls or Bloodlust window for maximum burst.",
          "Ice Block during Toxic Spew as emergency immunity — Arcane Mages are glass cannons, use it wisely."]},

    'mage-fire': {
      nl:["Counterspell op de gift-cast — essentieel voor elke Mage.",
          "Combustion + Pyroclasm voor maximale burst op de grote pulls.",
          "Ice Block bij Toxic Spew als noodimuniteit."],
      en:["Counterspell on the poison cast — essential for every Mage.",
          "Combustion + Pyroclasm for maximum burst on big pulls.",
          "Ice Block during Toxic Spew as emergency immunity."]},

    'priest-shadow': {
      nl:["Silence op de gift-cast — gecombineerd met Mind Blast als melee-interrupt.",
          "Void Eruption + Devouring Plague voor burst op de grote pulls.",
          "Dispersion bij Toxic Spew voor 75% schade-reductie — beste persoonlijke defensief van alle clothies."],
      en:["Silence on the poison cast — combined with Mind Blast as a ranged interrupt.",
          "Void Eruption + Devouring Plague for burst on big pulls.",
          "Dispersion during Toxic Spew for 75% damage reduction — best personal defensive of all clothies."]},

    'rogue-assassination': {
      nl:["Kick op de gift-cast — wissel af met andere melee-interrupts.",
          "Deathmark + Shiv voor maximale single-target burst; Fan of Knives voor AoE.",
          "Evasion bij Toxic Spew voor 100% melee-ontwijking."],
      en:["Kick on the poison cast — rotate with other melee interrupts.",
          "Deathmark + Shiv for maximum single-target burst; Fan of Knives for AoE.",
          "Evasion during Toxic Spew for 100% melee dodge."]},

    'rogue-subtlety': {
      nl:["Kick op de gift-cast — wissel af met andere melee-interrupts.",
          "Shadow Blades + Symbols of Death voor maximale burst in het Stealth-window.",
          "Evasion bij Toxic Spew voor 100% melee-ontwijking."],
      en:["Kick on the poison cast — rotate with other melee interrupts.",
          "Shadow Blades + Symbols of Death for maximum burst in the Stealth window.",
          "Evasion during Toxic Spew for 100% melee dodge."]},

    'warlock-affliction': {
      nl:["Spell Lock (via Felhunter) op de gift-cast — jouw enige betrouwbare interrupt.",
          "Malefic Rapture voor AoE burst als meerdere targets vol DoTs zitten.",
          "Unending Resolve bij Toxic Spew voor 40% schade-reductie en interrupt-immuniteit."],
      en:["Spell Lock (via Felhunter) on the poison cast — your only reliable interrupt.",
          "Malefic Rapture for AoE burst when multiple targets are full of DoTs.",
          "Unending Resolve during Toxic Spew for 40% damage reduction and interrupt immunity."]},

    'warlock-demonology': {
      nl:["Spell Lock (via Felhunter) op de gift-cast — essentieel in hoge keys.",
          "Summon Demonic Tyrant + Implosion voor maximale AoE burst op de venomous adds cluster.",
          "Unending Resolve bij Toxic Spew voor 40% schade-reductie."],
      en:["Spell Lock (via Felhunter) on the poison cast — essential in high keys.",
          "Summon Demonic Tyrant + Implosion for maximum AoE burst on the venomous adds cluster.",
          "Unending Resolve during Toxic Spew for 40% damage reduction."]},

    'warlock-destruction': {
      nl:["Spell Lock (via Felhunter) op de gift-cast — jouw enige interrupt.",
          "Summon Infernal + Channel Demonfire voor burst op de grote pulls.",
          "Unending Resolve bij Toxic Spew voor 40% schade-reductie."],
      en:["Spell Lock (via Felhunter) on the poison cast — your only interrupt.",
          "Summon Infernal + Channel Demonfire for burst on big pulls.",
          "Unending Resolve during Toxic Spew for 40% damage reduction."]}},
  // ── MAISARA CAVERNS ── final boss (index 2) ──
  'maisara-caverns:2:tank': {
    'paladin-protection': {
      nl:["Vessel of Souls heeft zware interrupt-behoefte — Divine Toll voor meerdere interrupts tegelijk.",
          "Blessing of Spellwarding op jezelf voor de magische burst-fase.",
          "Ardent Defender bewaren voor Fase 2 wanneer add-druk het hoogst is."],
      en:["Vessel of Souls has heavy interrupt needs — Divine Toll for multiple interrupts simultaneously.",
          "Blessing of Spellwarding on yourself for the magic burst phase.",
          "Save Ardent Defender for Phase 2 when add pressure is highest."]}
  ,
    'demonhunter-vengeance': {
      nl:["Sigil of Silence op de soul-adds voor een directe groeps-lockdown.",
          "Fiery Brand op de Vessel zelf voor tank-survival tijdens hoge stacks.",
          "Metamorphosis bewaren voor Fase 2 — dan is de schade het zwaarst."],
      en:["Sigil of Silence on the soul adds for an immediate group lockdown.",
          "Fiery Brand on the Vessel itself for tank survival during high stacks.",
          "Save Metamorphosis for Phase 2 — that is when damage is heaviest."]},
    'druid-guardian': {
      nl:["Incapacitating Roar op de soul-adds bij spawn voor een snelle stop.",
          "Survival Instincts in Fase 2 wanneer de schade piekt.",
          "Maim op een single add die dreigt te ontsnappen naar de healer."],
      en:["Incapacitating Roar on soul adds at spawn for a quick stop.",
          "Survival Instincts in Phase 2 when damage spikes.",
          "Maim on a single add that threatens to escape to the healer."]},
    'warrior-protection': {
      nl:["Spell Reflection op soul casts voor volledige spell-immuniteit.",
          "Shield Block uptime is cruciaal — houd hem zo constant mogelijk actief.",
          "Last Stand bij Fase 2 als noodrem; Rallying Cry voor de groep."],
      en:["Spell Reflection on soul casts for full spell immunity.",
          "Shield Block uptime is critical — keep it active as consistently as possible.",
          "Last Stand during Phase 2 as emergency; Rallying Cry for the group."]},
    'monk-brewmaster': {
      nl:["Spear Hand Strike op soul casts — gecombineerd met hoge mobiliteit altijd bereikbaar.",
          "Stagger is jouw kernmechaniek — Purifying Brew gebruiken als Stagger rood wordt.",
          "Fortifying Brew bij Fase 2 als primaire tank-cooldown."],
      en:["Spear Hand Strike on soul casts — combined with high mobility always reachable.",
          "Stagger is your core mechanic — use Purifying Brew when Stagger turns red.",
          "Fortifying Brew during Phase 2 as primary tank cooldown."]},
    'deathknight-blood': {
      nl:["Mind Freeze op soul casts — gecombineerd met Death Grip altijd bereikbaar.",
          "Death Strike is jouw kernmechaniek — gebruik hem wanneer je schade hebt opgelopen voor maximale healing.",
          "Vampiric Blood bij Fase 2 als primaire tank-cooldown."],
      en:["Mind Freeze on soul casts — combined with Death Grip always reachable.",
          "Death Strike is your core mechanic — use it after taking damage for maximum self-healing.",
          "Vampiric Blood during Phase 2 as primary tank cooldown."]}},
  'maisara-caverns:2:heal': {
    'druid-restoration': {
      nl:["Tranquility bewaren voor Fase 2 — het grootste healing-moment van de dungeon.",
          "Ironbark op de tank bij Soul Corruption stacks.",
          "Stampeding Roar om snel weg te komen van zielplassen."],
      en:["Save Tranquility for Phase 2 — the biggest healing moment of the dungeon.",
          "Ironbark on tank during Soul Corruption stacks.",
          "Stampeding Roar to quickly move away from soul puddles."]}
  ,
    'paladin-holy': {
      nl:["Aura Mastery bewaren voor Fase 2 — de zwaarste groepsschade van de dungeon.",
          "Divine Toll op de tank bij hoge Soul Corruption stacks voor directe HP-recovery.",
          "Blessing of Protection op een speler die per ongeluk een zielsplas instapt."],
      en:["Save Aura Mastery for Phase 2 — the heaviest group damage of the dungeon.",
          "Divine Toll on the tank with high Soul Corruption stacks for immediate HP recovery.",
          "Blessing of Protection on a player who accidentally steps in a soul puddle."]},
    'monk-mistweaver': {
      nl:["Revival bij Fase 2 voor massale groeps-healing in één global.",
          "Spinnende Crane Kick + Vivify voor efficiënte AoE healing tijdens hoge schade.",
          "Life Cocoon op de tank bij de zwaarste aanvallen — unieke absorb-cooldown."],
      en:["Revival during Phase 2 for massive group healing in one global.",
          "Spinning Crane Kick + Vivify for efficient AoE healing during high damage.",
          "Life Cocoon on the tank during the heaviest hits — unique absorb cooldown."]},
    'priest-discipline': {
      nl:["Disc speelt proactief — Atonement vóór Fase 2 op de hele groep plaatsen.",
          "Power Word: Barrier bij Fase 2 voor groeps-schade-reductie.",
          "Schism + Penance voor burst healing via Atonement op meerdere targets tegelijk."],
      en:["Disc plays proactively — place Atonement on the entire group before Phase 2.",
          "Power Word: Barrier during Phase 2 for group damage reduction.",
          "Schism + Penance for burst healing via Atonement on multiple targets simultaneously."]},

    'evoker-preservation': {
      nl:["Rescue of Hover om snel weg te komen van Fase 2-mechanics.",
          "Rewind bewaren voor de zwaarste groepsschade — unieke time-reversal healing.",
          "Dream Breath voor AoE healing op meerdere spelers tegelijk."],
      en:["Rescue or Hover to quickly escape Phase 2 mechanics.",
          "Save Rewind for the heaviest group damage — unique time-reversal healing.",
          "Dream Breath for AoE healing on multiple players simultaneously."]},

    'priest-holy': {
      nl:["Symbol of Hope bij Fase 2 voor groeps-mana-recovery — uniek voor Holy Priest.",
          "Holy Word: Sanctify voor instant AoE healing bij hoge schadepieken.",
          "Guardian Spirit op de tank bij kritieke momenten — voorkomt dodelijke klap."],
      en:["Symbol of Hope during Phase 2 for group mana recovery — unique to Holy Priest.",
          "Holy Word: Sanctify for instant AoE healing during high damage spikes.",
          "Guardian Spirit on the tank at critical moments — prevents a killing blow."]},

    'shaman-restoration': {
      nl:["Healing Rain permanent neerleggen op de groep — jouw basis AoE-healing.",
          "Spirit Link Totem bij Fase 2 voor groeps-schade-egalisering — uniek in het spel.",
          "Ancestral Protection Totem bewaren voor de zwaarste pull — tweede kans op leven."],
      en:["Keep Healing Rain permanently on the group — your baseline AoE healing.",
          "Spirit Link Totem during Phase 2 for group damage equalization — unique in the game.",
          "Save Ancestral Protection Totem for the hardest pull — second chance at life."]}},
  'maisara-caverns:2:dps': {
    'hunter-beastmastery': {
      nl:["Counter Shot op elke soul cast — hoge prioriteit.",
          "Adds direct killen met Bestial Wrath AoE.",
          "Aspect of the Turtle als noodrem bij hoge Soul Corruption stacks."],
      en:["Counter Shot on every soul cast — high priority.",
          "Kill adds immediately using Bestial Wrath AoE.",
          "Aspect of the Turtle as emergency when Soul Corruption stacks are high."]},
    'shaman-elemental': {
      nl:["Wind Shear afwisselen met de tank voor maximale interrupt-uptime.",
          "Astral Shift tijdens hoge Soul Corruption stacks.",
          "Capacitor Totem op de adds voor een groepsstun — maakt het killen veel sneller."],
      en:["Rotate Wind Shear with the tank for maximum interrupt uptime.",
          "Astral Shift during high Soul Corruption stacks.",
          "Capacitor Totem on the adds for a group stun — makes killing them much faster."]}
  ,
    'demonhunter-havoc': {
      nl:["Disrupt op soul casts — je hebt de snelste melee-interrupt in het spel.",
          "Adds met Eye Beam AoE burst neerleggen zodra ze verschijnen.",
          "Netherwalk als noodrem bij hoge Soul Corruption stacks — volledige immuniteit."],
      en:["Disrupt on soul casts — you have the fastest melee interrupt in the game.",
          "Kill adds with Eye Beam AoE burst as soon as they appear.",
          "Netherwalk as emergency with high Soul Corruption stacks — full immunity."]},
    'druid-balance': {
      nl:["Typhoon of Mass Entanglement om adds neer te zetten bij spawn.",
          "Starfall op de adds cluster voor constante AoE-schade.",
          "Barkskin bij hoge Soul Corruption stacks als persoonlijk defensief."],
      en:["Typhoon or Mass Entanglement to pin adds at spawn.",
          "Starfall on the add cluster for constant AoE damage.",
          "Barkskin with high Soul Corruption stacks as personal defensive."]},
    'paladin-retribution': {
      nl:["Rebuke op soul casts zodra je in bereik bent.",
          "Divine Storm op de adds cluster voor snelle AoE-kills.",
          "Divine Shield als noodrem bij hoge Soul Corruption stacks."],
      en:["Rebuke on soul casts as soon as you are in range.",
          "Divine Storm on the add cluster for fast AoE kills.",
          "Divine Shield as emergency with high Soul Corruption stacks."]},
    'warrior-fury': {
      nl:["Pummel op soul casts — korte cooldown, gebruik hem consequent.",
          "Recklessness + Bladestorm op de grote pulls voor maximale AoE burst.",
          "Rallying Cry voor de groep bij Fase 2 — één van de beste groeps-cooldowns in het spel."],
      en:["Pummel on soul casts — short cooldown, use it consistently.",
          "Recklessness + Bladestorm on big pulls for maximum AoE burst.",
          "Rallying Cry for the group during Phase 2 — one of the best group cooldowns in the game."]},
    'warrior-arms': {
      nl:["Pummel op soul casts — wissel af met de tank.",
          "Bladestorm op de soul adds cluster voor AoE cleave.",
          "Rallying Cry voor de groep bij Fase 2 als groeps-defensief."],
      en:["Pummel on soul casts — rotate with the tank.",
          "Bladestorm on the soul adds cluster for AoE cleave.",
          "Rallying Cry for the group during Phase 2 as group defensive."]},
    'mage-frost': {
      nl:["Counterspell op soul casts — jouw interrupt is onmisbaar.",
          "Frozen Orb + Blizzard op de soul adds cluster voor maximale AoE.",
          "Ice Block bij Fase 2 als persoonlijke noodimuniteit."],
      en:["Counterspell on soul casts — your interrupt is essential.",
          "Frozen Orb + Blizzard on the soul adds cluster for maximum AoE.",
          "Ice Block during Phase 2 as personal emergency immunity."]},
    'rogue-outlaw': {
      nl:["Kick op soul casts — wissel af met andere interrupts.",
          "Blade Flurry voor AoE cleave op de soul adds cluster.",
          "Crimson Vial + Feint bij Fase 2 voor personal survival."],
      en:["Kick on soul casts — rotate with other interrupts.",
          "Blade Flurry for AoE cleave on the soul adds cluster.",
          "Crimson Vial + Feint during Phase 2 for personal survival."]},
    'monk-windwalker': {
      nl:["Spear Hand Strike op soul casts — gecombineerd met jouw hoge mobiliteit altijd bereikbaar.",
          "Spinning Crane Kick + Fist of the White Tiger op de soul adds cluster voor burst AoE.",
          "Diffuse Magic of Dampen Harm bij Fase 2 voor personal defensive."],
      en:["Spear Hand Strike on soul casts — combined with your high mobility always reachable.",
          "Spinning Crane Kick + Fist of the White Tiger on the soul adds cluster for burst AoE.",
          "Diffuse Magic or Dampen Harm during Phase 2 for personal defensive."]},
    'shaman-enhancement': {
      nl:["Wind Shear op soul casts — korte cooldown, neem interrupt-verantwoordelijkheid.",
          "Feral Spirit + Doom Winds op de grote pulls voor maximale AoE burst.",
          "Astral Shift bij Fase 2 als persoonlijk defensief."],
      en:["Wind Shear on soul casts — short cooldown, take interrupt responsibility.",
          "Feral Spirit + Doom Winds on big pulls for maximum AoE burst.",
          "Astral Shift during Phase 2 as personal defensive."]},
    'hunter-marksmanship': {
      nl:["Counter Shot op soul casts — volledig ranged, altijd in bereik.",
          "Volley + Rapid Fire op de soul adds cluster voor massale ranged AoE.",
          "Aspect of the Turtle bij Fase 2 als volledige immuniteit."],
      en:["Counter Shot on soul casts — fully ranged, always in range.",
          "Volley + Rapid Fire on the soul adds cluster for massive ranged AoE.",
          "Aspect of the Turtle during Phase 2 for full immunity."]},
    'deathknight-unholy': {
      nl:["Mind Freeze op soul casts — jouw interrupt.",
          "Army of the Dead + Apocalypse voor maximale AoE burst op de soul adds cluster.",
          "Anti-Magic Shell bij Fase 2 voor magische schade-immuniteit."],
      en:["Mind Freeze on soul casts — your interrupt.",
          "Army of the Dead + Apocalypse for maximum AoE burst on the soul adds cluster.",
          "Anti-Magic Shell during Phase 2 for magic damage immunity."]},

    'deathknight-frost': {
      nl:["Mind Freeze op soul casts — jouw interrupt.",
          "Pillar of Frost + Frostwyrm's Fury op de soul adds cluster voor AoE burst.",
          "Anti-Magic Shell bij Fase 2 voor magische schade-immuniteit."],
      en:["Mind Freeze on soul casts — your interrupt.",
          "Pillar of Frost + Frostwyrm's Fury on the soul adds cluster for AoE burst.",
          "Anti-Magic Shell during Phase 2 for magic damage immunity."]},

    'demonhunter-devourer': {
      nl:["Disrupt op soul casts — je bent semi-ranged, altijd in bereik.",
          "Hurl Glaive + Fel Barrage op de soul adds cluster voor ranged AoE burst.",
          "Blur bij Fase 2 als primair defensief — twee charges met Demonic Resilience."],
      en:["Disrupt on soul casts — you are semi-ranged, always in range.",
          "Hurl Glaive + Fel Barrage on the soul adds cluster for ranged AoE burst.",
          "Blur during Phase 2 as primary defensive — two charges with Demonic Resilience."]},

    'druid-feral': {
      nl:["Skull Bash op soul casts — korte cooldown, altijd in melee.",
          "Primal Wrath of Swipe voor AoE cleave op de soul adds cluster.",
          "Survival Instincts bij Fase 2 als persoonlijk defensief — twee charges."],
      en:["Skull Bash on soul casts — short cooldown, always in melee.",
          "Primal Wrath or Swipe for AoE cleave on the soul adds cluster.",
          "Survival Instincts during Phase 2 as personal defensive — two charges."]},

    'evoker-augmentation': {
      nl:["Tail Swipe of Wing Buffet op soul casts — Evoker CC-toolkit.",
          "Ebon Might + Breath of Eons activeren op de grote pull voor maximale groepsbuff.",
          "Obsidian Scales bij Fase 2 als persoonlijk defensief."],
      en:["Tail Swipe or Wing Buffet on soul casts — Evoker CC toolkit.",
          "Activate Ebon Might + Breath of Eons on the big pull for maximum group buff.",
          "Obsidian Scales during Phase 2 as personal defensive."]},

    'evoker-devastation': {
      nl:["Tail Swipe of Wing Buffet op soul casts — Evoker CC-toolkit.",
          "Dragonrage + Eternity Surge op de grote pull voor maximale burst.",
          "Obsidian Scales bij Fase 2 als persoonlijk defensief."],
      en:["Tail Swipe or Wing Buffet on soul casts — Evoker CC toolkit.",
          "Dragonrage + Eternity Surge on the big pull for maximum burst.",
          "Obsidian Scales during Phase 2 as personal defensive."]},

    'hunter-survival': {
      nl:["Counter Shot op soul casts — jij bent mobiel en hebt altijd een ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb voor burst AoE op de soul adds cluster.",
          "Aspect of the Turtle bij Fase 2 als noodimuniteit."],
      en:["Counter Shot on soul casts — you are mobile and always have a ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb for burst AoE on the soul adds cluster.",
          "Aspect of the Turtle during Phase 2 as emergency immunity."]},

    'mage-arcane': {
      nl:["Counterspell op soul casts — jij hebt de beste interrupt van alle mages.",
          "Arcane Surge bewaren voor de grote pulls of Bloodlust-window voor maximale burst.",
          "Ice Block bij Fase 2 als noodimuniteit — Arcane Mages zijn glaskanon, gebruik het goed."],
      en:["Counterspell on soul casts — you have the best interrupt of all mages.",
          "Save Arcane Surge for big pulls or Bloodlust window for maximum burst.",
          "Ice Block during Phase 2 as emergency immunity — Arcane Mages are glass cannons, use it wisely."]},

    'mage-fire': {
      nl:["Counterspell op soul casts — essentieel voor elke Mage.",
          "Combustion + Pyroclasm voor maximale burst op de grote pulls.",
          "Ice Block bij Fase 2 als noodimuniteit."],
      en:["Counterspell on soul casts — essential for every Mage.",
          "Combustion + Pyroclasm for maximum burst on big pulls.",
          "Ice Block during Phase 2 as emergency immunity."]},

    'priest-shadow': {
      nl:["Silence op soul casts — gecombineerd met Mind Blast als melee-interrupt.",
          "Void Eruption + Devouring Plague voor burst op de grote pulls.",
          "Dispersion bij Fase 2 voor 75% schade-reductie — beste persoonlijke defensief van alle clothies."],
      en:["Silence on soul casts — combined with Mind Blast as a ranged interrupt.",
          "Void Eruption + Devouring Plague for burst on big pulls.",
          "Dispersion during Phase 2 for 75% damage reduction — best personal defensive of all clothies."]},

    'rogue-assassination': {
      nl:["Kick op soul casts — wissel af met andere melee-interrupts.",
          "Deathmark + Shiv voor maximale single-target burst; Fan of Knives voor AoE.",
          "Evasion bij Fase 2 voor 100% melee-ontwijking."],
      en:["Kick on soul casts — rotate with other melee interrupts.",
          "Deathmark + Shiv for maximum single-target burst; Fan of Knives for AoE.",
          "Evasion during Phase 2 for 100% melee dodge."]},

    'rogue-subtlety': {
      nl:["Kick op soul casts — wissel af met andere melee-interrupts.",
          "Shadow Blades + Symbols of Death voor maximale burst in het Stealth-window.",
          "Evasion bij Fase 2 voor 100% melee-ontwijking."],
      en:["Kick on soul casts — rotate with other melee interrupts.",
          "Shadow Blades + Symbols of Death for maximum burst in the Stealth window.",
          "Evasion during Phase 2 for 100% melee dodge."]},

    'warlock-affliction': {
      nl:["Spell Lock (via Felhunter) op soul casts — jouw enige betrouwbare interrupt.",
          "Malefic Rapture voor AoE burst als meerdere targets vol DoTs zitten.",
          "Unending Resolve bij Fase 2 voor 40% schade-reductie en interrupt-immuniteit."],
      en:["Spell Lock (via Felhunter) on soul casts — your only reliable interrupt.",
          "Malefic Rapture for AoE burst when multiple targets are full of DoTs.",
          "Unending Resolve during Phase 2 for 40% damage reduction and interrupt immunity."]},

    'warlock-demonology': {
      nl:["Spell Lock (via Felhunter) op soul casts — essentieel in hoge keys.",
          "Summon Demonic Tyrant + Implosion voor maximale AoE burst op de soul adds cluster.",
          "Unending Resolve bij Fase 2 voor 40% schade-reductie."],
      en:["Spell Lock (via Felhunter) on soul casts — essential in high keys.",
          "Summon Demonic Tyrant + Implosion for maximum AoE burst on the soul adds cluster.",
          "Unending Resolve during Phase 2 for 40% damage reduction."]},

    'warlock-destruction': {
      nl:["Spell Lock (via Felhunter) op soul casts — jouw enige interrupt.",
          "Summon Infernal + Channel Demonfire voor burst op de grote pulls.",
          "Unending Resolve bij Fase 2 voor 40% schade-reductie."],
      en:["Spell Lock (via Felhunter) on soul casts — your only interrupt.",
          "Summon Infernal + Channel Demonfire for burst on big pulls.",
          "Unending Resolve during Phase 2 for 40% damage reduction."]}},
  // ── NEXUS-POINT XENAS ── final boss (index 2) ──
  'nexus-point-xenas:2:tank': {
    'paladin-protection': {
      nl:["Lothravion heeft zware magische aanvallen — Blessing of Spellwarding voor immuniteit.",
          "Avenger's Shield op void-adds zodra ze spawnen voor AoE-silence.",
          "Divine Shield als noodrem bij Void Implosion."],
      en:["Lothravion deals heavy magic damage — Blessing of Spellwarding for immunity.",
          "Avenger's Shield on void adds as soon as they spawn for AoE silence.",
          "Divine Shield as emergency during Void Implosion."]}
  ,
    'demonhunter-vengeance': {
      nl:["Sigil of Silence op void-adds bij spawn voor directe lockdown.",
          "Fiery Brand op Lothravion tijdens zware magische burst.",
          "Metamorphosis bewaren voor de finale burn-fase."],
      en:["Sigil of Silence on void adds at spawn for immediate lockdown.",
          "Fiery Brand on Lothravion during heavy magic burst.",
          "Save Metamorphosis for the final burn phase."]},
    'druid-guardian': {
      nl:["Void Implosion is magische schade — Barkskin + Survival Instincts afwisselen.",
          "Stampeding Roar om de groep snel te laten bewegen uit void-zones.",
          "Thrash + Moonfire voor threat op meerdere void-adds tegelijk."],
      en:["Void Implosion is magic damage — alternate Barkskin and Survival Instincts.",
          "Stampeding Roar to quickly move the group out of void zones.",
          "Thrash + Moonfire for threat on multiple void adds simultaneously."]},
    'warrior-protection': {
      nl:["Spell Reflection op Void Channeling voor volledige spell-immuniteit.",
          "Shield Block uptime is cruciaal — houd hem zo constant mogelijk actief.",
          "Last Stand bij Void Implosion als noodrem; Rallying Cry voor de groep."],
      en:["Spell Reflection on Void Channeling for full spell immunity.",
          "Shield Block uptime is critical — keep it active as consistently as possible.",
          "Last Stand during Void Implosion as emergency; Rallying Cry for the group."]},
    'monk-brewmaster': {
      nl:["Spear Hand Strike op Void Channeling — gecombineerd met hoge mobiliteit altijd bereikbaar.",
          "Stagger is jouw kernmechaniek — Purifying Brew gebruiken als Stagger rood wordt.",
          "Fortifying Brew bij Void Implosion als primaire tank-cooldown."],
      en:["Spear Hand Strike on Void Channeling — combined with high mobility always reachable.",
          "Stagger is your core mechanic — use Purifying Brew when Stagger turns red.",
          "Fortifying Brew during Void Implosion as primary tank cooldown."]},
    'deathknight-blood': {
      nl:["Mind Freeze op Void Channeling — gecombineerd met Death Grip altijd bereikbaar.",
          "Death Strike is jouw kernmechaniek — gebruik hem wanneer je schade hebt opgelopen voor maximale healing.",
          "Vampiric Blood bij Void Implosion als primaire tank-cooldown."],
      en:["Mind Freeze on Void Channeling — combined with Death Grip always reachable.",
          "Death Strike is your core mechanic — use it after taking damage for maximum self-healing.",
          "Vampiric Blood during Void Implosion as primary tank cooldown."]}},
  'nexus-point-xenas:2:heal': {
    'druid-restoration': {
      nl:["Pre-HoTs vóór elke Void Implosion — massale groepsschade.",
          "Ironbark op de tank tijdens de Void Surge.",
          "Ursol's Vortex om de void-adds te groeperen voor AoE-kill."],
      en:["Pre-HoTs before every Void Implosion — massive group damage.",
          "Ironbark on tank during Void Surge.",
          "Ursol's Vortex to group the void adds for AoE kill."]}
  ,
    'paladin-holy': {
      nl:["Aura Mastery bewaren voor Void Implosion — de zwaarste AoE van de boss.",
          "Divine Toll op de tank bij Void Surge voor directe HP.",
          "Blinding Light om void-adds te stoppen als ze naar de groep rennen."],
      en:["Save Aura Mastery for Void Implosion — the boss heaviest AoE.",
          "Divine Toll on the tank during Void Surge for immediate HP.",
          "Blinding Light to stop void adds if they run toward the group."]},
    'monk-mistweaver': {
      nl:["Revival bij Void Implosion voor massale groeps-healing in één global.",
          "Spinnende Crane Kick + Vivify voor efficiënte AoE healing tijdens hoge schade.",
          "Life Cocoon op de tank bij de zwaarste aanvallen — unieke absorb-cooldown."],
      en:["Revival during Void Implosion for massive group healing in one global.",
          "Spinning Crane Kick + Vivify for efficient AoE healing during high damage.",
          "Life Cocoon on the tank during the heaviest hits — unique absorb cooldown."]},
    'priest-discipline': {
      nl:["Disc speelt proactief — Atonement vóór Void Implosion op de hele groep plaatsen.",
          "Power Word: Barrier bij Void Implosion voor groeps-schade-reductie.",
          "Schism + Penance voor burst healing via Atonement op meerdere targets tegelijk."],
      en:["Disc plays proactively — place Atonement on the entire group before Void Implosion.",
          "Power Word: Barrier during Void Implosion for group damage reduction.",
          "Schism + Penance for burst healing via Atonement on multiple targets simultaneously."]},

    'evoker-preservation': {
      nl:["Rescue of Hover om snel weg te komen van Void Implosion-mechanics.",
          "Rewind bewaren voor de zwaarste groepsschade — unieke time-reversal healing.",
          "Dream Breath voor AoE healing op meerdere spelers tegelijk."],
      en:["Rescue or Hover to quickly escape Void Implosion mechanics.",
          "Save Rewind for the heaviest group damage — unique time-reversal healing.",
          "Dream Breath for AoE healing on multiple players simultaneously."]},

    'priest-holy': {
      nl:["Symbol of Hope bij Void Implosion voor groeps-mana-recovery — uniek voor Holy Priest.",
          "Holy Word: Sanctify voor instant AoE healing bij hoge schadepieken.",
          "Guardian Spirit op de tank bij kritieke momenten — voorkomt dodelijke klap."],
      en:["Symbol of Hope during Void Implosion for group mana recovery — unique to Holy Priest.",
          "Holy Word: Sanctify for instant AoE healing during high damage spikes.",
          "Guardian Spirit on the tank at critical moments — prevents a killing blow."]},

    'shaman-restoration': {
      nl:["Healing Rain permanent neerleggen op de groep — jouw basis AoE-healing.",
          "Spirit Link Totem bij Void Implosion voor groeps-schade-egalisering — uniek in het spel.",
          "Ancestral Protection Totem bewaren voor de zwaarste pull — tweede kans op leven."],
      en:["Keep Healing Rain permanently on the group — your baseline AoE healing.",
          "Spirit Link Totem during Void Implosion for group damage equalization — unique in the game.",
          "Save Ancestral Protection Totem for the hardest pull — second chance at life."]}},
  'nexus-point-xenas:2:dps': {
    'hunter-beastmastery': {
      nl:["Void-adds direct killen bij spawn — Bestial Wrath voor AoE burst.",
          "Volledig mobiel bij Void Implosion — beweeg zonder enig DPS-verlies.",
          "Counter Shot op Void Channeling."],
      en:["Kill void adds immediately on spawn — Bestial Wrath for AoE burst.",
          "Fully mobile during Void Implosion — move without any DPS loss.",
          "Counter Shot on Void Channeling."]},
    'shaman-elemental': {
      nl:["Earthquake + Chain Lightning op de void-adds cluster.",
          "Astral Shift bij hoge void-corruptie stacks.",
          "Wind Shear op Void Channeling — hoge prioriteit."],
      en:["Earthquake + Chain Lightning on the void add cluster.",
          "Astral Shift during high void corruption stacks.",
          "Wind Shear on Void Channeling — high priority."]}
  ,
    'demonhunter-havoc': {
      nl:["Disrupt op Void Channeling — snelste melee-interrupt.",
          "Eye Beam op de void-adds cluster voor snelle AoE burst.",
          "Netherwalk bij Void Implosion als je er niet op tijd uitkwam."],
      en:["Disrupt on Void Channeling — fastest melee interrupt.",
          "Eye Beam on the void add cluster for quick AoE burst.",
          "Netherwalk during Void Implosion if you did not get out in time."]},
    'druid-balance': {
      nl:["Starfall op de void-adds cluster voor constante AoE-schade.",
          "Typhoon om void-adds te groeperen of weg te stoten.",
          "Barkskin bij hoge void-corruptie als persoonlijk defensief."],
      en:["Starfall on the void add cluster for constant AoE damage.",
          "Typhoon to group void adds together or push them away.",
          "Barkskin with high void corruption as personal defensive."]},
    'paladin-retribution': {
      nl:["Rebuke op Void Channeling zodra je in bereik bent.",
          "Divine Storm op void-adds voor snelle AoE-kills.",
          "Divine Shield als noodrem bij Void Implosion."],
      en:["Rebuke on Void Channeling as soon as you are in range.",
          "Divine Storm on void adds for fast AoE kills.",
          "Divine Shield as emergency during Void Implosion."]},
    'warrior-fury': {
      nl:["Pummel op Void Channeling — korte cooldown, gebruik hem consequent.",
          "Recklessness + Bladestorm op de grote pulls voor maximale AoE burst.",
          "Rallying Cry voor de groep bij Void Implosion — één van de beste groeps-cooldowns in het spel."],
      en:["Pummel on Void Channeling — short cooldown, use it consistently.",
          "Recklessness + Bladestorm on big pulls for maximum AoE burst.",
          "Rallying Cry for the group during Void Implosion — one of the best group cooldowns in the game."]},
    'warrior-arms': {
      nl:["Pummel op Void Channeling — wissel af met de tank.",
          "Bladestorm op de void adds cluster voor AoE cleave.",
          "Rallying Cry voor de groep bij Void Implosion als groeps-defensief."],
      en:["Pummel on Void Channeling — rotate with the tank.",
          "Bladestorm on the void adds cluster for AoE cleave.",
          "Rallying Cry for the group during Void Implosion as group defensive."]},
    'mage-frost': {
      nl:["Counterspell op Void Channeling — jouw interrupt is onmisbaar.",
          "Frozen Orb + Blizzard op de void adds cluster voor maximale AoE.",
          "Ice Block bij Void Implosion als persoonlijke noodimuniteit."],
      en:["Counterspell on Void Channeling — your interrupt is essential.",
          "Frozen Orb + Blizzard on the void adds cluster for maximum AoE.",
          "Ice Block during Void Implosion as personal emergency immunity."]},
    'rogue-outlaw': {
      nl:["Kick op Void Channeling — wissel af met andere interrupts.",
          "Blade Flurry voor AoE cleave op de void adds cluster.",
          "Crimson Vial + Feint bij Void Implosion voor personal survival."],
      en:["Kick on Void Channeling — rotate with other interrupts.",
          "Blade Flurry for AoE cleave on the void adds cluster.",
          "Crimson Vial + Feint during Void Implosion for personal survival."]},
    'monk-windwalker': {
      nl:["Spear Hand Strike op Void Channeling — gecombineerd met jouw hoge mobiliteit altijd bereikbaar.",
          "Spinning Crane Kick + Fist of the White Tiger op de void adds cluster voor burst AoE.",
          "Diffuse Magic of Dampen Harm bij Void Implosion voor personal defensive."],
      en:["Spear Hand Strike on Void Channeling — combined with your high mobility always reachable.",
          "Spinning Crane Kick + Fist of the White Tiger on the void adds cluster for burst AoE.",
          "Diffuse Magic or Dampen Harm during Void Implosion for personal defensive."]},
    'shaman-enhancement': {
      nl:["Wind Shear op Void Channeling — korte cooldown, neem interrupt-verantwoordelijkheid.",
          "Feral Spirit + Doom Winds op de grote pulls voor maximale AoE burst.",
          "Astral Shift bij Void Implosion als persoonlijk defensief."],
      en:["Wind Shear on Void Channeling — short cooldown, take interrupt responsibility.",
          "Feral Spirit + Doom Winds on big pulls for maximum AoE burst.",
          "Astral Shift during Void Implosion as personal defensive."]},
    'hunter-marksmanship': {
      nl:["Counter Shot op Void Channeling — volledig ranged, altijd in bereik.",
          "Volley + Rapid Fire op de void adds cluster voor massale ranged AoE.",
          "Aspect of the Turtle bij Void Implosion als volledige immuniteit."],
      en:["Counter Shot on Void Channeling — fully ranged, always in range.",
          "Volley + Rapid Fire on the void adds cluster for massive ranged AoE.",
          "Aspect of the Turtle during Void Implosion for full immunity."]},
    'deathknight-unholy': {
      nl:["Mind Freeze op Void Channeling — jouw interrupt.",
          "Army of the Dead + Apocalypse voor maximale AoE burst op de void adds cluster.",
          "Anti-Magic Shell bij Void Implosion voor magische schade-immuniteit."],
      en:["Mind Freeze on Void Channeling — your interrupt.",
          "Army of the Dead + Apocalypse for maximum AoE burst on the void adds cluster.",
          "Anti-Magic Shell during Void Implosion for magic damage immunity."]},

    'deathknight-frost': {
      nl:["Mind Freeze op Void Channeling — jouw interrupt.",
          "Pillar of Frost + Frostwyrm's Fury op de void adds cluster voor AoE burst.",
          "Anti-Magic Shell bij Void Implosion voor magische schade-immuniteit."],
      en:["Mind Freeze on Void Channeling — your interrupt.",
          "Pillar of Frost + Frostwyrm's Fury on the void adds cluster for AoE burst.",
          "Anti-Magic Shell during Void Implosion for magic damage immunity."]},

    'demonhunter-devourer': {
      nl:["Disrupt op Void Channeling — je bent semi-ranged, altijd in bereik.",
          "Hurl Glaive + Fel Barrage op de void adds cluster voor ranged AoE burst.",
          "Blur bij Void Implosion als primair defensief — twee charges met Demonic Resilience."],
      en:["Disrupt on Void Channeling — you are semi-ranged, always in range.",
          "Hurl Glaive + Fel Barrage on the void adds cluster for ranged AoE burst.",
          "Blur during Void Implosion as primary defensive — two charges with Demonic Resilience."]},

    'druid-feral': {
      nl:["Skull Bash op Void Channeling — korte cooldown, altijd in melee.",
          "Primal Wrath of Swipe voor AoE cleave op de void adds cluster.",
          "Survival Instincts bij Void Implosion als persoonlijk defensief — twee charges."],
      en:["Skull Bash on Void Channeling — short cooldown, always in melee.",
          "Primal Wrath or Swipe for AoE cleave on the void adds cluster.",
          "Survival Instincts during Void Implosion as personal defensive — two charges."]},

    'evoker-augmentation': {
      nl:["Tail Swipe of Wing Buffet op Void Channeling — Evoker CC-toolkit.",
          "Ebon Might + Breath of Eons activeren op de grote pull voor maximale groepsbuff.",
          "Obsidian Scales bij Void Implosion als persoonlijk defensief."],
      en:["Tail Swipe or Wing Buffet on Void Channeling — Evoker CC toolkit.",
          "Activate Ebon Might + Breath of Eons on the big pull for maximum group buff.",
          "Obsidian Scales during Void Implosion as personal defensive."]},

    'evoker-devastation': {
      nl:["Tail Swipe of Wing Buffet op Void Channeling — Evoker CC-toolkit.",
          "Dragonrage + Eternity Surge op de grote pull voor maximale burst.",
          "Obsidian Scales bij Void Implosion als persoonlijk defensief."],
      en:["Tail Swipe or Wing Buffet on Void Channeling — Evoker CC toolkit.",
          "Dragonrage + Eternity Surge on the big pull for maximum burst.",
          "Obsidian Scales during Void Implosion as personal defensive."]},

    'hunter-survival': {
      nl:["Counter Shot op Void Channeling — jij bent mobiel en hebt altijd een ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb voor burst AoE op de void adds cluster.",
          "Aspect of the Turtle bij Void Implosion als noodimuniteit."],
      en:["Counter Shot on Void Channeling — you are mobile and always have a ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb for burst AoE on the void adds cluster.",
          "Aspect of the Turtle during Void Implosion as emergency immunity."]},

    'mage-arcane': {
      nl:["Counterspell op Void Channeling — jij hebt de beste interrupt van alle mages.",
          "Arcane Surge bewaren voor de grote pulls of Bloodlust-window voor maximale burst.",
          "Ice Block bij Void Implosion als noodimuniteit — Arcane Mages zijn glaskanon, gebruik het goed."],
      en:["Counterspell on Void Channeling — you have the best interrupt of all mages.",
          "Save Arcane Surge for big pulls or Bloodlust window for maximum burst.",
          "Ice Block during Void Implosion as emergency immunity — Arcane Mages are glass cannons, use it wisely."]},

    'mage-fire': {
      nl:["Counterspell op Void Channeling — essentieel voor elke Mage.",
          "Combustion + Pyroclasm voor maximale burst op de grote pulls.",
          "Ice Block bij Void Implosion als noodimuniteit."],
      en:["Counterspell on Void Channeling — essential for every Mage.",
          "Combustion + Pyroclasm for maximum burst on big pulls.",
          "Ice Block during Void Implosion as emergency immunity."]},

    'priest-shadow': {
      nl:["Silence op Void Channeling — gecombineerd met Mind Blast als melee-interrupt.",
          "Void Eruption + Devouring Plague voor burst op de grote pulls.",
          "Dispersion bij Void Implosion voor 75% schade-reductie — beste persoonlijke defensief van alle clothies."],
      en:["Silence on Void Channeling — combined with Mind Blast as a ranged interrupt.",
          "Void Eruption + Devouring Plague for burst on big pulls.",
          "Dispersion during Void Implosion for 75% damage reduction — best personal defensive of all clothies."]},

    'rogue-assassination': {
      nl:["Kick op Void Channeling — wissel af met andere melee-interrupts.",
          "Deathmark + Shiv voor maximale single-target burst; Fan of Knives voor AoE.",
          "Evasion bij Void Implosion voor 100% melee-ontwijking."],
      en:["Kick on Void Channeling — rotate with other melee interrupts.",
          "Deathmark + Shiv for maximum single-target burst; Fan of Knives for AoE.",
          "Evasion during Void Implosion for 100% melee dodge."]},

    'rogue-subtlety': {
      nl:["Kick op Void Channeling — wissel af met andere melee-interrupts.",
          "Shadow Blades + Symbols of Death voor maximale burst in het Stealth-window.",
          "Evasion bij Void Implosion voor 100% melee-ontwijking."],
      en:["Kick on Void Channeling — rotate with other melee interrupts.",
          "Shadow Blades + Symbols of Death for maximum burst in the Stealth window.",
          "Evasion during Void Implosion for 100% melee dodge."]},

    'warlock-affliction': {
      nl:["Spell Lock (via Felhunter) op Void Channeling — jouw enige betrouwbare interrupt.",
          "Malefic Rapture voor AoE burst als meerdere targets vol DoTs zitten.",
          "Unending Resolve bij Void Implosion voor 40% schade-reductie en interrupt-immuniteit."],
      en:["Spell Lock (via Felhunter) on Void Channeling — your only reliable interrupt.",
          "Malefic Rapture for AoE burst when multiple targets are full of DoTs.",
          "Unending Resolve during Void Implosion for 40% damage reduction and interrupt immunity."]},

    'warlock-demonology': {
      nl:["Spell Lock (via Felhunter) op Void Channeling — essentieel in hoge keys.",
          "Summon Demonic Tyrant + Implosion voor maximale AoE burst op de void adds cluster.",
          "Unending Resolve bij Void Implosion voor 40% schade-reductie."],
      en:["Spell Lock (via Felhunter) on Void Channeling — essential in high keys.",
          "Summon Demonic Tyrant + Implosion for maximum AoE burst on the void adds cluster.",
          "Unending Resolve during Void Implosion for 40% damage reduction."]},

    'warlock-destruction': {
      nl:["Spell Lock (via Felhunter) op Void Channeling — jouw enige interrupt.",
          "Summon Infernal + Channel Demonfire voor burst op de grote pulls.",
          "Unending Resolve bij Void Implosion voor 40% schade-reductie."],
      en:["Spell Lock (via Felhunter) on Void Channeling — your only interrupt.",
          "Summon Infernal + Channel Demonfire for burst on big pulls.",
          "Unending Resolve during Void Implosion for 40% damage reduction."]}},
  // ── MURDER ROW ── boss 1 ──
  'murder-row:1:tank': {
    'paladin-protection': {
      nl:["Zaen Bladesorrow heeft zware bleed-aanvallen — Guardian of Ancient Kings voor de tankbusters.",
          "Avenger's Shield op zijn blade-casts voor interrupt + silence.",
          "Blessing of Sacrifice op de healer als de schade te hoog wordt."],
      en:["Zaen Bladesorrow has heavy bleed attacks — Guardian of Ancient Kings for tankbusters.",
          "Avenger's Shield on his blade casts for interrupt + silence.",
          "Blessing of Sacrifice on the healer if damage becomes too high."]}
  ,
    'demonhunter-vengeance': {
      nl:["Demon Spikes rotatie is essentieel — bleed-aanvallen stapelen snel op.",
          "Fiery Brand op de boss bij zware blade-combo's voor 40% reductie.",
          "Soul Cleave spam om Soul Fragments te consumeren en jezelf te healen."],
      en:["Demon Spikes rotation is essential — bleed attacks stack up quickly.",
          "Fiery Brand on the boss during heavy blade combos for 40% reduction.",
          "Soul Cleave spam to consume Soul Fragments and self-heal."]},
    'druid-guardian': {
      nl:["Ironfur permanent uptime — bleed-aanvallen zijn fysiek, armor telt mee.",
          "Survival Instincts bij de zwaarste blade-combo.",
          "Thrash + Swipe voor dreigings-opbouw op de extra adds."],
      en:["Keep Ironfur permanently active — bleed attacks are physical, armor counts.",
          "Survival Instincts during the heaviest blade combo.",
          "Thrash + Swipe for threat generation on the extra adds."]},
    'warrior-protection': {
      nl:["Spell Reflection op blade-casts voor volledige spell-immuniteit.",
          "Shield Block uptime is cruciaal — houd hem zo constant mogelijk actief.",
          "Last Stand bij zware blade-combo als noodrem; Rallying Cry voor de groep."],
      en:["Spell Reflection on blade casts for full spell immunity.",
          "Shield Block uptime is critical — keep it active as consistently as possible.",
          "Last Stand during heavy blade combo as emergency; Rallying Cry for the group."]},
    'monk-brewmaster': {
      nl:["Spear Hand Strike op blade-casts — gecombineerd met hoge mobiliteit altijd bereikbaar.",
          "Stagger is jouw kernmechaniek — Purifying Brew gebruiken als Stagger rood wordt.",
          "Fortifying Brew bij zware blade-combo als primaire tank-cooldown."],
      en:["Spear Hand Strike on blade casts — combined with high mobility always reachable.",
          "Stagger is your core mechanic — use Purifying Brew when Stagger turns red.",
          "Fortifying Brew during heavy blade combo as primary tank cooldown."]},
    'deathknight-blood': {
      nl:["Mind Freeze op blade-casts — gecombineerd met Death Grip altijd bereikbaar.",
          "Death Strike is jouw kernmechaniek — gebruik hem wanneer je schade hebt opgelopen voor maximale healing.",
          "Vampiric Blood bij zware blade-combo als primaire tank-cooldown."],
      en:["Mind Freeze on blade casts — combined with Death Grip always reachable.",
          "Death Strike is your core mechanic — use it after taking damage for maximum self-healing.",
          "Vampiric Blood during heavy blade combo as primary tank cooldown."]}},
  'murder-row:1:heal': {
    'druid-restoration': {
      nl:["Bleed-schade is constant — Efflorescence permanent neerleggen op de groep.",
          "Ironbark op de tank bij de zware blade-combo.",
          "Swiftmend + Wild Growth bij plotselinge schadepieken."],
      en:["Bleed damage is constant — keep Efflorescence permanently on the group.",
          "Ironbark on tank during the heavy blade combo.",
          "Swiftmend + Wild Growth for sudden damage spikes."]}
  ,
    'paladin-holy': {
      nl:["Bleed-schade is continu — Word of Glory spam om bleeding targets stabiel te houden.",
          "Avenging Wrath bij de zwaarste blade-combo voor burst-healing.",
          "Blessing of Protection verwijdert bloedingen — gebruik het op een DPS met hoge stacks."],
      en:["Bleed damage is continuous — spam Word of Glory to keep bleeding targets stable.",
          "Avenging Wrath during the heaviest blade combo for burst healing.",
          "Blessing of Protection removes bleeds — use it on a DPS with high stacks."]},
    'monk-mistweaver': {
      nl:["Revival bij zware blade-combo voor massale groeps-healing in één global.",
          "Spinnende Crane Kick + Vivify voor efficiënte AoE healing tijdens hoge schade.",
          "Life Cocoon op de tank bij de zwaarste aanvallen — unieke absorb-cooldown."],
      en:["Revival during heavy blade combo for massive group healing in one global.",
          "Spinning Crane Kick + Vivify for efficient AoE healing during high damage.",
          "Life Cocoon on the tank during the heaviest hits — unique absorb cooldown."]},
    'priest-discipline': {
      nl:["Disc speelt proactief — Atonement vóór zware blade-combo op de hele groep plaatsen.",
          "Power Word: Barrier bij zware blade-combo voor groeps-schade-reductie.",
          "Schism + Penance voor burst healing via Atonement op meerdere targets tegelijk."],
      en:["Disc plays proactively — place Atonement on the entire group before heavy blade combo.",
          "Power Word: Barrier during heavy blade combo for group damage reduction.",
          "Schism + Penance for burst healing via Atonement on multiple targets simultaneously."]},

    'evoker-preservation': {
      nl:["Rescue of Hover om snel weg te komen van zware blade-combo-mechanics.",
          "Rewind bewaren voor de zwaarste groepsschade — unieke time-reversal healing.",
          "Dream Breath voor AoE healing op meerdere spelers tegelijk."],
      en:["Rescue or Hover to quickly escape heavy blade combo mechanics.",
          "Save Rewind for the heaviest group damage — unique time-reversal healing.",
          "Dream Breath for AoE healing on multiple players simultaneously."]},

    'priest-holy': {
      nl:["Symbol of Hope bij zware blade-combo voor groeps-mana-recovery — uniek voor Holy Priest.",
          "Holy Word: Sanctify voor instant AoE healing bij hoge schadepieken.",
          "Guardian Spirit op de tank bij kritieke momenten — voorkomt dodelijke klap."],
      en:["Symbol of Hope during heavy blade combo for group mana recovery — unique to Holy Priest.",
          "Holy Word: Sanctify for instant AoE healing during high damage spikes.",
          "Guardian Spirit on the tank at critical moments — prevents a killing blow."]},

    'shaman-restoration': {
      nl:["Healing Rain permanent neerleggen op de groep — jouw basis AoE-healing.",
          "Spirit Link Totem bij zware blade-combo voor groeps-schade-egalisering — uniek in het spel.",
          "Ancestral Protection Totem bewaren voor de zwaarste pull — tweede kans op leven."],
      en:["Keep Healing Rain permanently on the group — your baseline AoE healing.",
          "Spirit Link Totem during heavy blade combo for group damage equalization — unique in the game.",
          "Save Ancestral Protection Totem for the hardest pull — second chance at life."]}},
  'murder-row:1:dps': {
    'hunter-beastmastery': {
      nl:["Counter Shot op blade-casts.",
          "Bestial Wrath bij de pull + Primal Rage in de execute-fase.",
          "Freezing Trap als extra CC als de tank het lastig heeft."],
      en:["Counter Shot on blade casts.",
          "Bestial Wrath on pull + Primal Rage in the execute phase.",
          "Freezing Trap as extra CC if the tank is struggling."]},
    'shaman-elemental': {
      nl:["Wind Shear op blade-casts — coördineer met de tank.",
          "Astral Shift bij hoge bleed-stacks.",
          "Thunderstorm als positioneringstool als adds te dicht bij de healer komen."],
      en:["Wind Shear on blade casts — coordinate with the tank.",
          "Astral Shift with high bleed stacks.",
          "Thunderstorm as a positional tool if adds get too close to the healer."]}
  ,
    'demonhunter-havoc': {
      nl:["Disrupt op blade-casts — met jouw mobiliteit ben je altijd in bereik.",
          "Fel Rush nooit door een frontal ability — positie altijd achter de boss.",
          "Darkness plaatsen voor de groep bij zware blade-combo's."],
      en:["Disrupt on blade casts — with your mobility you are always in range.",
          "Never Fel Rush through a frontal ability — always position yourself behind the boss.",
          "Place Darkness for the group during heavy blade combos."]},
    'druid-balance': {
      nl:["Typhoon om Zaen even weg te stoten als de melee-groep moet uitwijken.",
          "Starfall voor constante cleave-schade op de boss + adds.",
          "Barkskin bij hoge bleed-stacks als persoonlijk defensief."],
      en:["Typhoon to briefly knock Zaen away if the melee group needs to move.",
          "Starfall for constant cleave damage on the boss and adds.",
          "Barkskin with high bleed stacks as personal defensive."]},
    'paladin-retribution': {
      nl:["Rebuke op blade-casts zodra je in bereik bent.",
          "Execution Sentence op de boss voor maximale single-target schade.",
          "Divine Shield als noodrem bij hoge bleed-stacks."],
      en:["Rebuke on blade casts as soon as you are in range.",
          "Execution Sentence on the boss for maximum single-target damage.",
          "Divine Shield as emergency with high bleed stacks."]},
    'warrior-fury': {
      nl:["Pummel op blade-casts — korte cooldown, gebruik hem consequent.",
          "Recklessness + Bladestorm op de grote pulls voor maximale AoE burst.",
          "Rallying Cry voor de groep bij zware blade-combo — één van de beste groeps-cooldowns in het spel."],
      en:["Pummel on blade casts — short cooldown, use it consistently.",
          "Recklessness + Bladestorm on big pulls for maximum AoE burst.",
          "Rallying Cry for the group during heavy blade combo — one of the best group cooldowns in the game."]},
    'warrior-arms': {
      nl:["Pummel op blade-casts — wissel af met de tank.",
          "Bladestorm op de adds cluster voor AoE cleave.",
          "Rallying Cry voor de groep bij zware blade-combo als groeps-defensief."],
      en:["Pummel on blade casts — rotate with the tank.",
          "Bladestorm on the adds cluster for AoE cleave.",
          "Rallying Cry for the group during heavy blade combo as group defensive."]},
    'mage-frost': {
      nl:["Counterspell op blade-casts — jouw interrupt is onmisbaar.",
          "Frozen Orb + Blizzard op de adds cluster voor maximale AoE.",
          "Ice Block bij zware blade-combo als persoonlijke noodimuniteit."],
      en:["Counterspell on blade casts — your interrupt is essential.",
          "Frozen Orb + Blizzard on the adds cluster for maximum AoE.",
          "Ice Block during heavy blade combo as personal emergency immunity."]},
    'rogue-outlaw': {
      nl:["Kick op blade-casts — wissel af met andere interrupts.",
          "Blade Flurry voor AoE cleave op de adds cluster.",
          "Crimson Vial + Feint bij zware blade-combo voor personal survival."],
      en:["Kick on blade casts — rotate with other interrupts.",
          "Blade Flurry for AoE cleave on the adds cluster.",
          "Crimson Vial + Feint during heavy blade combo for personal survival."]},
    'monk-windwalker': {
      nl:["Spear Hand Strike op blade-casts — gecombineerd met jouw hoge mobiliteit altijd bereikbaar.",
          "Spinning Crane Kick + Fist of the White Tiger op de adds cluster voor burst AoE.",
          "Diffuse Magic of Dampen Harm bij zware blade-combo voor personal defensive."],
      en:["Spear Hand Strike on blade casts — combined with your high mobility always reachable.",
          "Spinning Crane Kick + Fist of the White Tiger on the adds cluster for burst AoE.",
          "Diffuse Magic or Dampen Harm during heavy blade combo for personal defensive."]},
    'shaman-enhancement': {
      nl:["Wind Shear op blade-casts — korte cooldown, neem interrupt-verantwoordelijkheid.",
          "Feral Spirit + Doom Winds op de grote pulls voor maximale AoE burst.",
          "Astral Shift bij zware blade-combo als persoonlijk defensief."],
      en:["Wind Shear on blade casts — short cooldown, take interrupt responsibility.",
          "Feral Spirit + Doom Winds on big pulls for maximum AoE burst.",
          "Astral Shift during heavy blade combo as personal defensive."]},
    'hunter-marksmanship': {
      nl:["Counter Shot op blade-casts — volledig ranged, altijd in bereik.",
          "Volley + Rapid Fire op de adds cluster voor massale ranged AoE.",
          "Aspect of the Turtle bij zware blade-combo als volledige immuniteit."],
      en:["Counter Shot on blade casts — fully ranged, always in range.",
          "Volley + Rapid Fire on the adds cluster for massive ranged AoE.",
          "Aspect of the Turtle during heavy blade combo for full immunity."]},
    'deathknight-unholy': {
      nl:["Mind Freeze op blade-casts — jouw interrupt.",
          "Army of the Dead + Apocalypse voor maximale AoE burst op de adds cluster.",
          "Anti-Magic Shell bij zware blade-combo voor magische schade-immuniteit."],
      en:["Mind Freeze on blade casts — your interrupt.",
          "Army of the Dead + Apocalypse for maximum AoE burst on the adds cluster.",
          "Anti-Magic Shell during heavy blade combo for magic damage immunity."]},

    'deathknight-frost': {
      nl:["Mind Freeze op blade-casts — jouw interrupt.",
          "Pillar of Frost + Frostwyrm's Fury op de adds cluster voor AoE burst.",
          "Anti-Magic Shell bij zware blade-combo voor magische schade-immuniteit."],
      en:["Mind Freeze on blade casts — your interrupt.",
          "Pillar of Frost + Frostwyrm's Fury on the adds cluster for AoE burst.",
          "Anti-Magic Shell during heavy blade combo for magic damage immunity."]},

    'demonhunter-devourer': {
      nl:["Disrupt op blade-casts — je bent semi-ranged, altijd in bereik.",
          "Hurl Glaive + Fel Barrage op de adds cluster voor ranged AoE burst.",
          "Blur bij zware blade-combo als primair defensief — twee charges met Demonic Resilience."],
      en:["Disrupt on blade casts — you are semi-ranged, always in range.",
          "Hurl Glaive + Fel Barrage on the adds cluster for ranged AoE burst.",
          "Blur during heavy blade combo as primary defensive — two charges with Demonic Resilience."]},

    'druid-feral': {
      nl:["Skull Bash op blade-casts — korte cooldown, altijd in melee.",
          "Primal Wrath of Swipe voor AoE cleave op de adds cluster.",
          "Survival Instincts bij zware blade-combo als persoonlijk defensief — twee charges."],
      en:["Skull Bash on blade casts — short cooldown, always in melee.",
          "Primal Wrath or Swipe for AoE cleave on the adds cluster.",
          "Survival Instincts during heavy blade combo as personal defensive — two charges."]},

    'evoker-augmentation': {
      nl:["Tail Swipe of Wing Buffet op blade-casts — Evoker CC-toolkit.",
          "Ebon Might + Breath of Eons activeren op de grote pull voor maximale groepsbuff.",
          "Obsidian Scales bij zware blade-combo als persoonlijk defensief."],
      en:["Tail Swipe or Wing Buffet on blade casts — Evoker CC toolkit.",
          "Activate Ebon Might + Breath of Eons on the big pull for maximum group buff.",
          "Obsidian Scales during heavy blade combo as personal defensive."]},

    'evoker-devastation': {
      nl:["Tail Swipe of Wing Buffet op blade-casts — Evoker CC-toolkit.",
          "Dragonrage + Eternity Surge op de grote pull voor maximale burst.",
          "Obsidian Scales bij zware blade-combo als persoonlijk defensief."],
      en:["Tail Swipe or Wing Buffet on blade casts — Evoker CC toolkit.",
          "Dragonrage + Eternity Surge on the big pull for maximum burst.",
          "Obsidian Scales during heavy blade combo as personal defensive."]},

    'hunter-survival': {
      nl:["Counter Shot op blade-casts — jij bent mobiel en hebt altijd een ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb voor burst AoE op de adds cluster.",
          "Aspect of the Turtle bij zware blade-combo als noodimuniteit."],
      en:["Counter Shot on blade casts — you are mobile and always have a ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb for burst AoE on the adds cluster.",
          "Aspect of the Turtle during heavy blade combo as emergency immunity."]},

    'mage-arcane': {
      nl:["Counterspell op blade-casts — jij hebt de beste interrupt van alle mages.",
          "Arcane Surge bewaren voor de grote pulls of Bloodlust-window voor maximale burst.",
          "Ice Block bij zware blade-combo als noodimuniteit — Arcane Mages zijn glaskanon, gebruik het goed."],
      en:["Counterspell on blade casts — you have the best interrupt of all mages.",
          "Save Arcane Surge for big pulls or Bloodlust window for maximum burst.",
          "Ice Block during heavy blade combo as emergency immunity — Arcane Mages are glass cannons, use it wisely."]},

    'mage-fire': {
      nl:["Counterspell op blade-casts — essentieel voor elke Mage.",
          "Combustion + Pyroclasm voor maximale burst op de grote pulls.",
          "Ice Block bij zware blade-combo als noodimuniteit."],
      en:["Counterspell on blade casts — essential for every Mage.",
          "Combustion + Pyroclasm for maximum burst on big pulls.",
          "Ice Block during heavy blade combo as emergency immunity."]},

    'priest-shadow': {
      nl:["Silence op blade-casts — gecombineerd met Mind Blast als melee-interrupt.",
          "Void Eruption + Devouring Plague voor burst op de grote pulls.",
          "Dispersion bij zware blade-combo voor 75% schade-reductie — beste persoonlijke defensief van alle clothies."],
      en:["Silence on blade casts — combined with Mind Blast as a ranged interrupt.",
          "Void Eruption + Devouring Plague for burst on big pulls.",
          "Dispersion during heavy blade combo for 75% damage reduction — best personal defensive of all clothies."]},

    'rogue-assassination': {
      nl:["Kick op blade-casts — wissel af met andere melee-interrupts.",
          "Deathmark + Shiv voor maximale single-target burst; Fan of Knives voor AoE.",
          "Evasion bij zware blade-combo voor 100% melee-ontwijking."],
      en:["Kick on blade casts — rotate with other melee interrupts.",
          "Deathmark + Shiv for maximum single-target burst; Fan of Knives for AoE.",
          "Evasion during heavy blade combo for 100% melee dodge."]},

    'rogue-subtlety': {
      nl:["Kick op blade-casts — wissel af met andere melee-interrupts.",
          "Shadow Blades + Symbols of Death voor maximale burst in het Stealth-window.",
          "Evasion bij zware blade-combo voor 100% melee-ontwijking."],
      en:["Kick on blade casts — rotate with other melee interrupts.",
          "Shadow Blades + Symbols of Death for maximum burst in the Stealth window.",
          "Evasion during heavy blade combo for 100% melee dodge."]},

    'warlock-affliction': {
      nl:["Spell Lock (via Felhunter) op blade-casts — jouw enige betrouwbare interrupt.",
          "Malefic Rapture voor AoE burst als meerdere targets vol DoTs zitten.",
          "Unending Resolve bij zware blade-combo voor 40% schade-reductie en interrupt-immuniteit."],
      en:["Spell Lock (via Felhunter) on blade casts — your only reliable interrupt.",
          "Malefic Rapture for AoE burst when multiple targets are full of DoTs.",
          "Unending Resolve during heavy blade combo for 40% damage reduction and interrupt immunity."]},

    'warlock-demonology': {
      nl:["Spell Lock (via Felhunter) op blade-casts — essentieel in hoge keys.",
          "Summon Demonic Tyrant + Implosion voor maximale AoE burst op de adds cluster.",
          "Unending Resolve bij zware blade-combo voor 40% schade-reductie."],
      en:["Spell Lock (via Felhunter) on blade casts — essential in high keys.",
          "Summon Demonic Tyrant + Implosion for maximum AoE burst on the adds cluster.",
          "Unending Resolve during heavy blade combo for 40% damage reduction."]},

    'warlock-destruction': {
      nl:["Spell Lock (via Felhunter) op blade-casts — jouw enige interrupt.",
          "Summon Infernal + Channel Demonfire voor burst op de grote pulls.",
          "Unending Resolve bij zware blade-combo voor 40% schade-reductie."],
      en:["Spell Lock (via Felhunter) on blade casts — your only interrupt.",
          "Summon Infernal + Channel Demonfire for burst on big pulls.",
          "Unending Resolve during heavy blade combo for 40% damage reduction."]}},
  // ── THE BLINDING VALE ── boss 1 ──
  'the-blinding-vale:1:tank': {
    'paladin-protection': {
      nl:["Feuzz schiet dodelijke pijlen — gebruik Line of Sight waar mogelijk.",
          "Avenger's Shield op zijn Light Beam cast voor interrupt + silence.",
          "Ardent Defender bewaren voor de volley-fase."],
      en:["Feuzz fires deadly arrows — use Line of Sight where possible.",
          "Avenger's Shield on his Light Beam cast for interrupt + silence.",
          "Save Ardent Defender for the volley phase."]}
  ,
    'warrior-protection': {
      nl:["Spell Reflection op de blindness-cast voor volledige spell-immuniteit.",
          "Shield Block uptime is cruciaal — houd hem zo constant mogelijk actief.",
          "Last Stand bij Blinding Flash als noodrem; Rallying Cry voor de groep."],
      en:["Spell Reflection on the blindness cast for full spell immunity.",
          "Shield Block uptime is critical — keep it active as consistently as possible.",
          "Last Stand during Blinding Flash as emergency; Rallying Cry for the group."]},
    'monk-brewmaster': {
      nl:["Spear Hand Strike op de blindness-cast — gecombineerd met hoge mobiliteit altijd bereikbaar.",
          "Stagger is jouw kernmechaniek — Purifying Brew gebruiken als Stagger rood wordt.",
          "Fortifying Brew bij Blinding Flash als primaire tank-cooldown."],
      en:["Spear Hand Strike on the blindness cast — combined with high mobility always reachable.",
          "Stagger is your core mechanic — use Purifying Brew when Stagger turns red.",
          "Fortifying Brew during Blinding Flash as primary tank cooldown."]},
    'deathknight-blood': {
      nl:["Mind Freeze op de blindness-cast — gecombineerd met Death Grip altijd bereikbaar.",
          "Death Strike is jouw kernmechaniek — gebruik hem wanneer je schade hebt opgelopen voor maximale healing.",
          "Vampiric Blood bij Blinding Flash als primaire tank-cooldown."],
      en:["Mind Freeze on the blindness cast — combined with Death Grip always reachable.",
          "Death Strike is your core mechanic — use it after taking damage for maximum self-healing.",
          "Vampiric Blood during Blinding Flash as primary tank cooldown."]}},
  'the-blinding-vale:1:heal': {
    'druid-restoration': {
      nl:["Tank heeft constante Rejuvenation + Lifebloom nodig vanwege pijlschade.",
          "Ironbark op de speler die getarget is door Light Strike.",
          "Gebruik Barkskin tijdens de volley — ook jij wordt geraakt."],
      en:["Tank needs constant Rejuvenation + Lifebloom because of arrow damage.",
          "Ironbark on the player targeted by Light Strike.",
          "Use Barkskin during the volley — you get hit too."]}
  ,
    'monk-mistweaver': {
      nl:["Revival bij Blinding Flash voor massale groeps-healing in één global.",
          "Spinnende Crane Kick + Vivify voor efficiënte AoE healing tijdens hoge schade.",
          "Life Cocoon op de tank bij de zwaarste aanvallen — unieke absorb-cooldown."],
      en:["Revival during Blinding Flash for massive group healing in one global.",
          "Spinning Crane Kick + Vivify for efficient AoE healing during high damage.",
          "Life Cocoon on the tank during the heaviest hits — unique absorb cooldown."]},
    'priest-discipline': {
      nl:["Disc speelt proactief — Atonement vóór Blinding Flash op de hele groep plaatsen.",
          "Power Word: Barrier bij Blinding Flash voor groeps-schade-reductie.",
          "Schism + Penance voor burst healing via Atonement op meerdere targets tegelijk."],
      en:["Disc plays proactively — place Atonement on the entire group before Blinding Flash.",
          "Power Word: Barrier during Blinding Flash for group damage reduction.",
          "Schism + Penance for burst healing via Atonement on multiple targets simultaneously."]},

    'evoker-preservation': {
      nl:["Rescue of Hover om snel weg te komen van Blinding Flash-mechanics.",
          "Rewind bewaren voor de zwaarste groepsschade — unieke time-reversal healing.",
          "Dream Breath voor AoE healing op meerdere spelers tegelijk."],
      en:["Rescue or Hover to quickly escape Blinding Flash mechanics.",
          "Save Rewind for the heaviest group damage — unique time-reversal healing.",
          "Dream Breath for AoE healing on multiple players simultaneously."]},

    'priest-holy': {
      nl:["Symbol of Hope bij Blinding Flash voor groeps-mana-recovery — uniek voor Holy Priest.",
          "Holy Word: Sanctify voor instant AoE healing bij hoge schadepieken.",
          "Guardian Spirit op de tank bij kritieke momenten — voorkomt dodelijke klap."],
      en:["Symbol of Hope during Blinding Flash for group mana recovery — unique to Holy Priest.",
          "Holy Word: Sanctify for instant AoE healing during high damage spikes.",
          "Guardian Spirit on the tank at critical moments — prevents a killing blow."]},

    'shaman-restoration': {
      nl:["Healing Rain permanent neerleggen op de groep — jouw basis AoE-healing.",
          "Spirit Link Totem bij Blinding Flash voor groeps-schade-egalisering — uniek in het spel.",
          "Ancestral Protection Totem bewaren voor de zwaarste pull — tweede kans op leven."],
      en:["Keep Healing Rain permanently on the group — your baseline AoE healing.",
          "Spirit Link Totem during Blinding Flash for group damage equalization — unique in the game.",
          "Save Ancestral Protection Totem for the hardest pull — second chance at life."]}},
  'the-blinding-vale:1:dps': {
    'hunter-beastmastery': {
      nl:["Counter Shot op Light Beam — hoge prioriteit.",
          "Aspect of the Turtle bij Light Strike als je getarget wordt.",
          "Volledig mobiel — ideale spec voor deze boss met veel beweging."],
      en:["Counter Shot on Light Beam — high priority.",
          "Aspect of the Turtle on Light Strike if you are targeted.",
          "Fully mobile — ideal spec for this high-movement boss."]},
    'shaman-elemental': {
      nl:["Wind Shear op Light Beam.",
          "Spiritwalker's Grace voor onafgebroken schade tijdens de volley.",
          "Astral Shift bij Light Strike als je getarget wordt."],
      en:["Wind Shear on Light Beam.",
          "Spiritwalker's Grace for uninterrupted damage during the volley.",
          "Astral Shift on Light Strike if you are targeted."]}
  ,
    'warrior-fury': {
      nl:["Pummel op de blindness-cast — korte cooldown, gebruik hem consequent.",
          "Recklessness + Bladestorm op de grote pulls voor maximale AoE burst.",
          "Rallying Cry voor de groep bij Blinding Flash — één van de beste groeps-cooldowns in het spel."],
      en:["Pummel on the blindness cast — short cooldown, use it consistently.",
          "Recklessness + Bladestorm on big pulls for maximum AoE burst.",
          "Rallying Cry for the group during Blinding Flash — one of the best group cooldowns in the game."]},
    'warrior-arms': {
      nl:["Pummel op de blindness-cast — wissel af met de tank.",
          "Bladestorm op de vale adds cluster voor AoE cleave.",
          "Rallying Cry voor de groep bij Blinding Flash als groeps-defensief."],
      en:["Pummel on the blindness cast — rotate with the tank.",
          "Bladestorm on the vale adds cluster for AoE cleave.",
          "Rallying Cry for the group during Blinding Flash as group defensive."]},
    'mage-frost': {
      nl:["Counterspell op de blindness-cast — jouw interrupt is onmisbaar.",
          "Frozen Orb + Blizzard op de vale adds cluster voor maximale AoE.",
          "Ice Block bij Blinding Flash als persoonlijke noodimuniteit."],
      en:["Counterspell on the blindness cast — your interrupt is essential.",
          "Frozen Orb + Blizzard on the vale adds cluster for maximum AoE.",
          "Ice Block during Blinding Flash as personal emergency immunity."]},
    'rogue-outlaw': {
      nl:["Kick op de blindness-cast — wissel af met andere interrupts.",
          "Blade Flurry voor AoE cleave op de vale adds cluster.",
          "Crimson Vial + Feint bij Blinding Flash voor personal survival."],
      en:["Kick on the blindness cast — rotate with other interrupts.",
          "Blade Flurry for AoE cleave on the vale adds cluster.",
          "Crimson Vial + Feint during Blinding Flash for personal survival."]},
    'monk-windwalker': {
      nl:["Spear Hand Strike op de blindness-cast — gecombineerd met jouw hoge mobiliteit altijd bereikbaar.",
          "Spinning Crane Kick + Fist of the White Tiger op de vale adds cluster voor burst AoE.",
          "Diffuse Magic of Dampen Harm bij Blinding Flash voor personal defensive."],
      en:["Spear Hand Strike on the blindness cast — combined with your high mobility always reachable.",
          "Spinning Crane Kick + Fist of the White Tiger on the vale adds cluster for burst AoE.",
          "Diffuse Magic or Dampen Harm during Blinding Flash for personal defensive."]},
    'shaman-enhancement': {
      nl:["Wind Shear op de blindness-cast — korte cooldown, neem interrupt-verantwoordelijkheid.",
          "Feral Spirit + Doom Winds op de grote pulls voor maximale AoE burst.",
          "Astral Shift bij Blinding Flash als persoonlijk defensief."],
      en:["Wind Shear on the blindness cast — short cooldown, take interrupt responsibility.",
          "Feral Spirit + Doom Winds on big pulls for maximum AoE burst.",
          "Astral Shift during Blinding Flash as personal defensive."]},
    'hunter-marksmanship': {
      nl:["Counter Shot op de blindness-cast — volledig ranged, altijd in bereik.",
          "Volley + Rapid Fire op de vale adds cluster voor massale ranged AoE.",
          "Aspect of the Turtle bij Blinding Flash als volledige immuniteit."],
      en:["Counter Shot on the blindness cast — fully ranged, always in range.",
          "Volley + Rapid Fire on the vale adds cluster for massive ranged AoE.",
          "Aspect of the Turtle during Blinding Flash for full immunity."]},
    'deathknight-unholy': {
      nl:["Mind Freeze op de blindness-cast — jouw interrupt.",
          "Army of the Dead + Apocalypse voor maximale AoE burst op de vale adds cluster.",
          "Anti-Magic Shell bij Blinding Flash voor magische schade-immuniteit."],
      en:["Mind Freeze on the blindness cast — your interrupt.",
          "Army of the Dead + Apocalypse for maximum AoE burst on the vale adds cluster.",
          "Anti-Magic Shell during Blinding Flash for magic damage immunity."]},

    'deathknight-frost': {
      nl:["Mind Freeze op de blindness-cast — jouw interrupt.",
          "Pillar of Frost + Frostwyrm's Fury op de vale adds cluster voor AoE burst.",
          "Anti-Magic Shell bij Blinding Flash voor magische schade-immuniteit."],
      en:["Mind Freeze on the blindness cast — your interrupt.",
          "Pillar of Frost + Frostwyrm's Fury on the vale adds cluster for AoE burst.",
          "Anti-Magic Shell during Blinding Flash for magic damage immunity."]},

    'demonhunter-devourer': {
      nl:["Disrupt op de blindness-cast — je bent semi-ranged, altijd in bereik.",
          "Hurl Glaive + Fel Barrage op de vale adds cluster voor ranged AoE burst.",
          "Blur bij Blinding Flash als primair defensief — twee charges met Demonic Resilience."],
      en:["Disrupt on the blindness cast — you are semi-ranged, always in range.",
          "Hurl Glaive + Fel Barrage on the vale adds cluster for ranged AoE burst.",
          "Blur during Blinding Flash as primary defensive — two charges with Demonic Resilience."]},

    'druid-feral': {
      nl:["Skull Bash op de blindness-cast — korte cooldown, altijd in melee.",
          "Primal Wrath of Swipe voor AoE cleave op de vale adds cluster.",
          "Survival Instincts bij Blinding Flash als persoonlijk defensief — twee charges."],
      en:["Skull Bash on the blindness cast — short cooldown, always in melee.",
          "Primal Wrath or Swipe for AoE cleave on the vale adds cluster.",
          "Survival Instincts during Blinding Flash as personal defensive — two charges."]},

    'evoker-augmentation': {
      nl:["Tail Swipe of Wing Buffet op de blindness-cast — Evoker CC-toolkit.",
          "Ebon Might + Breath of Eons activeren op de grote pull voor maximale groepsbuff.",
          "Obsidian Scales bij Blinding Flash als persoonlijk defensief."],
      en:["Tail Swipe or Wing Buffet on the blindness cast — Evoker CC toolkit.",
          "Activate Ebon Might + Breath of Eons on the big pull for maximum group buff.",
          "Obsidian Scales during Blinding Flash as personal defensive."]},

    'evoker-devastation': {
      nl:["Tail Swipe of Wing Buffet op de blindness-cast — Evoker CC-toolkit.",
          "Dragonrage + Eternity Surge op de grote pull voor maximale burst.",
          "Obsidian Scales bij Blinding Flash als persoonlijk defensief."],
      en:["Tail Swipe or Wing Buffet on the blindness cast — Evoker CC toolkit.",
          "Dragonrage + Eternity Surge on the big pull for maximum burst.",
          "Obsidian Scales during Blinding Flash as personal defensive."]},

    'hunter-survival': {
      nl:["Counter Shot op de blindness-cast — jij bent mobiel en hebt altijd een ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb voor burst AoE op de vale adds cluster.",
          "Aspect of the Turtle bij Blinding Flash als noodimuniteit."],
      en:["Counter Shot on the blindness cast — you are mobile and always have a ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb for burst AoE on the vale adds cluster.",
          "Aspect of the Turtle during Blinding Flash as emergency immunity."]},

    'mage-arcane': {
      nl:["Counterspell op de blindness-cast — jij hebt de beste interrupt van alle mages.",
          "Arcane Surge bewaren voor de grote pulls of Bloodlust-window voor maximale burst.",
          "Ice Block bij Blinding Flash als noodimuniteit — Arcane Mages zijn glaskanon, gebruik het goed."],
      en:["Counterspell on the blindness cast — you have the best interrupt of all mages.",
          "Save Arcane Surge for big pulls or Bloodlust window for maximum burst.",
          "Ice Block during Blinding Flash as emergency immunity — Arcane Mages are glass cannons, use it wisely."]},

    'mage-fire': {
      nl:["Counterspell op de blindness-cast — essentieel voor elke Mage.",
          "Combustion + Pyroclasm voor maximale burst op de grote pulls.",
          "Ice Block bij Blinding Flash als noodimuniteit."],
      en:["Counterspell on the blindness cast — essential for every Mage.",
          "Combustion + Pyroclasm for maximum burst on big pulls.",
          "Ice Block during Blinding Flash as emergency immunity."]},

    'priest-shadow': {
      nl:["Silence op de blindness-cast — gecombineerd met Mind Blast als melee-interrupt.",
          "Void Eruption + Devouring Plague voor burst op de grote pulls.",
          "Dispersion bij Blinding Flash voor 75% schade-reductie — beste persoonlijke defensief van alle clothies."],
      en:["Silence on the blindness cast — combined with Mind Blast as a ranged interrupt.",
          "Void Eruption + Devouring Plague for burst on big pulls.",
          "Dispersion during Blinding Flash for 75% damage reduction — best personal defensive of all clothies."]},

    'rogue-assassination': {
      nl:["Kick op de blindness-cast — wissel af met andere melee-interrupts.",
          "Deathmark + Shiv voor maximale single-target burst; Fan of Knives voor AoE.",
          "Evasion bij Blinding Flash voor 100% melee-ontwijking."],
      en:["Kick on the blindness cast — rotate with other melee interrupts.",
          "Deathmark + Shiv for maximum single-target burst; Fan of Knives for AoE.",
          "Evasion during Blinding Flash for 100% melee dodge."]},

    'rogue-subtlety': {
      nl:["Kick op de blindness-cast — wissel af met andere melee-interrupts.",
          "Shadow Blades + Symbols of Death voor maximale burst in het Stealth-window.",
          "Evasion bij Blinding Flash voor 100% melee-ontwijking."],
      en:["Kick on the blindness cast — rotate with other melee interrupts.",
          "Shadow Blades + Symbols of Death for maximum burst in the Stealth window.",
          "Evasion during Blinding Flash for 100% melee dodge."]},

    'warlock-affliction': {
      nl:["Spell Lock (via Felhunter) op de blindness-cast — jouw enige betrouwbare interrupt.",
          "Malefic Rapture voor AoE burst als meerdere targets vol DoTs zitten.",
          "Unending Resolve bij Blinding Flash voor 40% schade-reductie en interrupt-immuniteit."],
      en:["Spell Lock (via Felhunter) on the blindness cast — your only reliable interrupt.",
          "Malefic Rapture for AoE burst when multiple targets are full of DoTs.",
          "Unending Resolve during Blinding Flash for 40% damage reduction and interrupt immunity."]},

    'warlock-demonology': {
      nl:["Spell Lock (via Felhunter) op de blindness-cast — essentieel in hoge keys.",
          "Summon Demonic Tyrant + Implosion voor maximale AoE burst op de vale adds cluster.",
          "Unending Resolve bij Blinding Flash voor 40% schade-reductie."],
      en:["Spell Lock (via Felhunter) on the blindness cast — essential in high keys.",
          "Summon Demonic Tyrant + Implosion for maximum AoE burst on the vale adds cluster.",
          "Unending Resolve during Blinding Flash for 40% damage reduction."]},

    'warlock-destruction': {
      nl:["Spell Lock (via Felhunter) op de blindness-cast — jouw enige interrupt.",
          "Summon Infernal + Channel Demonfire voor burst op de grote pulls.",
          "Unending Resolve bij Blinding Flash voor 40% schade-reductie."],
      en:["Spell Lock (via Felhunter) on the blindness cast — your only interrupt.",
          "Summon Infernal + Channel Demonfire for burst on big pulls.",
          "Unending Resolve during Blinding Flash for 40% damage reduction."]}},
  // ── DEN OF NALORAKK ── final boss (index 2) ──
  'den-of-nalorakk:2:tank': {
    'paladin-protection': {
      nl:["Nalorakk heeft Rampage — wissel Ardent Defender en Guardian of Ancient Kings af voor coverage.",
          "Avenger's Shield op de adds die spawnen tijdens tussenfasen.",
          "Blessing of Freedom op jezelf bij Nalorakk's Chains."],
      en:["Nalorakk has Rampage — alternate Ardent Defender and Guardian of Ancient Kings for coverage.",
          "Avenger's Shield on adds spawning during intermissions.",
          "Blessing of Freedom on yourself during Nalorakk's Chains."]}
  ,
    'demonhunter-vengeance': {
      nl:["Metamorphosis voor de eerste Rampage — dit is de meest gevaarlijke fase.",
          "Sigil of Silence op de add-wave bij elke tussenfase voor groeps-lockdown.",
          "Darkness voor de groep bij de tweede Rampage als Metamorphosis op cooldown is."],
      en:["Metamorphosis for the first Rampage — this is the most dangerous phase.",
          "Sigil of Silence on the add wave during every intermission for group lockdown.",
          "Darkness for the group during the second Rampage if Metamorphosis is on cooldown."]},
    'druid-guardian': {
      nl:["Survival Instincts bij de eerste Rampage; Barkskin voor de tweede.",
          "Stampeding Roar voor elke tussenfase zodat iedereen de zones verlaat.",
          "Thrash + Swipe voor dreigings-opbouw op alle adds tegelijk."],
      en:["Survival Instincts on the first Rampage; Barkskin for the second.",
          "Stampeding Roar before every intermission so everyone leaves zones.",
          "Thrash + Swipe for threat generation on all adds simultaneously."]},
    'warrior-protection': {
      nl:["Spell Reflection op de roar-cast voor volledige spell-immuniteit.",
          "Shield Block uptime is cruciaal — houd hem zo constant mogelijk actief.",
          "Last Stand bij Rampage als noodrem; Rallying Cry voor de groep."],
      en:["Spell Reflection on the roar cast for full spell immunity.",
          "Shield Block uptime is critical — keep it active as consistently as possible.",
          "Last Stand during Rampage as emergency; Rallying Cry for the group."]},
    'monk-brewmaster': {
      nl:["Spear Hand Strike op de roar-cast — gecombineerd met hoge mobiliteit altijd bereikbaar.",
          "Stagger is jouw kernmechaniek — Purifying Brew gebruiken als Stagger rood wordt.",
          "Fortifying Brew bij Rampage als primaire tank-cooldown."],
      en:["Spear Hand Strike on the roar cast — combined with high mobility always reachable.",
          "Stagger is your core mechanic — use Purifying Brew when Stagger turns red.",
          "Fortifying Brew during Rampage as primary tank cooldown."]},
    'deathknight-blood': {
      nl:["Mind Freeze op de roar-cast — gecombineerd met Death Grip altijd bereikbaar.",
          "Death Strike is jouw kernmechaniek — gebruik hem wanneer je schade hebt opgelopen voor maximale healing.",
          "Vampiric Blood bij Rampage als primaire tank-cooldown."],
      en:["Mind Freeze on the roar cast — combined with Death Grip always reachable.",
          "Death Strike is your core mechanic — use it after taking damage for maximum self-healing.",
          "Vampiric Blood during Rampage as primary tank cooldown."]}},
  'den-of-nalorakk:2:heal': {
    'druid-restoration': {
      nl:["Pre-HoT de hele groep vóór elke Rampage — de schade is massaal.",
          "Tranquility bewaren voor de tweede Rampage als je geen andere cooldown meer hebt.",
          "Stampeding Roar zodat iedereen snel de mechanic-zones kan verlaten."],
      en:["Pre-HoT the entire group before every Rampage — the damage is massive.",
          "Save Tranquility for the second Rampage if you have no other cooldowns left.",
          "Stampeding Roar so everyone can quickly leave mechanic zones."]}
  ,
    'paladin-holy': {
      nl:["Aura Mastery bij de eerste Rampage — de zwaarste groepsschade.",
          "Avenging Wrath bewaren voor de tweede Rampage als back-up cooldown.",
          "Blessing of Freedom op spelers die vastkomen in Nalorakk's Chains."],
      en:["Aura Mastery on the first Rampage — the heaviest group damage.",
          "Save Avenging Wrath for the second Rampage as a backup cooldown.",
          "Blessing of Freedom on players caught in Nalorakk's Chains."]},
    'monk-mistweaver': {
      nl:["Revival bij Rampage voor massale groeps-healing in één global.",
          "Spinnende Crane Kick + Vivify voor efficiënte AoE healing tijdens hoge schade.",
          "Life Cocoon op de tank bij de zwaarste aanvallen — unieke absorb-cooldown."],
      en:["Revival during Rampage for massive group healing in one global.",
          "Spinning Crane Kick + Vivify for efficient AoE healing during high damage.",
          "Life Cocoon on the tank during the heaviest hits — unique absorb cooldown."]},
    'priest-discipline': {
      nl:["Disc speelt proactief — Atonement vóór Rampage op de hele groep plaatsen.",
          "Power Word: Barrier bij Rampage voor groeps-schade-reductie.",
          "Schism + Penance voor burst healing via Atonement op meerdere targets tegelijk."],
      en:["Disc plays proactively — place Atonement on the entire group before Rampage.",
          "Power Word: Barrier during Rampage for group damage reduction.",
          "Schism + Penance for burst healing via Atonement on multiple targets simultaneously."]},

    'evoker-preservation': {
      nl:["Rescue of Hover om snel weg te komen van Rampage-mechanics.",
          "Rewind bewaren voor de zwaarste groepsschade — unieke time-reversal healing.",
          "Dream Breath voor AoE healing op meerdere spelers tegelijk."],
      en:["Rescue or Hover to quickly escape Rampage mechanics.",
          "Save Rewind for the heaviest group damage — unique time-reversal healing.",
          "Dream Breath for AoE healing on multiple players simultaneously."]},

    'priest-holy': {
      nl:["Symbol of Hope bij Rampage voor groeps-mana-recovery — uniek voor Holy Priest.",
          "Holy Word: Sanctify voor instant AoE healing bij hoge schadepieken.",
          "Guardian Spirit op de tank bij kritieke momenten — voorkomt dodelijke klap."],
      en:["Symbol of Hope during Rampage for group mana recovery — unique to Holy Priest.",
          "Holy Word: Sanctify for instant AoE healing during high damage spikes.",
          "Guardian Spirit on the tank at critical moments — prevents a killing blow."]},

    'shaman-restoration': {
      nl:["Healing Rain permanent neerleggen op de groep — jouw basis AoE-healing.",
          "Spirit Link Totem bij Rampage voor groeps-schade-egalisering — uniek in het spel.",
          "Ancestral Protection Totem bewaren voor de zwaarste pull — tweede kans op leven."],
      en:["Keep Healing Rain permanently on the group — your baseline AoE healing.",
          "Spirit Link Totem during Rampage for group damage equalization — unique in the game.",
          "Save Ancestral Protection Totem for the hardest pull — second chance at life."]}},
  'den-of-nalorakk:2:dps': {
    'hunter-beastmastery': {
      nl:["Adds direct killen bij spawn — Bestial Wrath voor snelle AoE.",
          "Tar Trap om adds te vertragen als de tank kitet.",
          "Primal Rage + Bestial Wrath voor de eindfase van Nalorakk."],
      en:["Kill adds immediately on spawn — Bestial Wrath for fast AoE.",
          "Tar Trap to slow adds if the tank is kiting.",
          "Primal Rage + Bestial Wrath for Nalorakk's final phase."]},
    'shaman-elemental': {
      nl:["Earthquake + Chain Lightning op de add-clusters bij elke tussenfase.",
          "Capacitor Totem om adds te stunnen zodat de tank ze kan groeperen.",
          "Astral Shift tijdens Rampage als je toch schade oploopt."],
      en:["Earthquake + Chain Lightning on add clusters during every intermission.",
          "Capacitor Totem to stun adds so the tank can group them.",
          "Astral Shift during Rampage if you take damage anyway."]}
  ,
    'demonhunter-havoc': {
      nl:["Eye Beam AoE op de add-clusters bij elke tussenfase.",
          "Fel Rush nooit weg van de groep bij Rampage — stay dicht bij de tank.",
          "Darkness plaatsen voor de groep bij Rampage als groeps-defensief."],
      en:["Eye Beam AoE on add clusters during every intermission.",
          "Never Fel Rush away from the group during Rampage — stay close to the tank.",
          "Place Darkness for the group during Rampage as group defensive."]},
    'druid-balance': {
      nl:["Starfall op de add-clusters — perfect voor tussenfase schade.",
          "Typhoon om adds samen te stoten voor efficiënte AoE.",
          "Barkskin tijdens Rampage als persoonlijk defensief."],
      en:["Starfall on add clusters — perfect for intermission damage.",
          "Typhoon to cluster adds together for efficient AoE.",
          "Barkskin during Rampage as personal defensive."]},
    'paladin-retribution': {
      nl:["Wake of Ashes + Divine Storm op de add-clusters bij tussenfase.",
          "Execution Sentence op Nalorakk zelf voor single-target funnel.",
          "Divine Shield bij Rampage als noodrem."],
      en:["Wake of Ashes + Divine Storm on add clusters during intermission.",
          "Execution Sentence on Nalorakk himself for single-target funnel.",
          "Divine Shield during Rampage as emergency."]},
    'warrior-fury': {
      nl:["Pummel op de roar-cast — korte cooldown, gebruik hem consequent.",
          "Recklessness + Bladestorm op de grote pulls voor maximale AoE burst.",
          "Rallying Cry voor de groep bij Rampage — één van de beste groeps-cooldowns in het spel."],
      en:["Pummel on the roar cast — short cooldown, use it consistently.",
          "Recklessness + Bladestorm on big pulls for maximum AoE burst.",
          "Rallying Cry for the group during Rampage — one of the best group cooldowns in the game."]},
    'warrior-arms': {
      nl:["Pummel op de roar-cast — wissel af met de tank.",
          "Bladestorm op de tussenfase adds cluster voor AoE cleave.",
          "Rallying Cry voor de groep bij Rampage als groeps-defensief."],
      en:["Pummel on the roar cast — rotate with the tank.",
          "Bladestorm on the intermission adds cluster for AoE cleave.",
          "Rallying Cry for the group during Rampage as group defensive."]},
    'mage-frost': {
      nl:["Counterspell op de roar-cast — jouw interrupt is onmisbaar.",
          "Frozen Orb + Blizzard op de tussenfase adds cluster voor maximale AoE.",
          "Ice Block bij Rampage als persoonlijke noodimuniteit."],
      en:["Counterspell on the roar cast — your interrupt is essential.",
          "Frozen Orb + Blizzard on the intermission adds cluster for maximum AoE.",
          "Ice Block during Rampage as personal emergency immunity."]},
    'rogue-outlaw': {
      nl:["Kick op de roar-cast — wissel af met andere interrupts.",
          "Blade Flurry voor AoE cleave op de tussenfase adds cluster.",
          "Crimson Vial + Feint bij Rampage voor personal survival."],
      en:["Kick on the roar cast — rotate with other interrupts.",
          "Blade Flurry for AoE cleave on the intermission adds cluster.",
          "Crimson Vial + Feint during Rampage for personal survival."]},
    'monk-windwalker': {
      nl:["Spear Hand Strike op de roar-cast — gecombineerd met jouw hoge mobiliteit altijd bereikbaar.",
          "Spinning Crane Kick + Fist of the White Tiger op de tussenfase adds cluster voor burst AoE.",
          "Diffuse Magic of Dampen Harm bij Rampage voor personal defensive."],
      en:["Spear Hand Strike on the roar cast — combined with your high mobility always reachable.",
          "Spinning Crane Kick + Fist of the White Tiger on the intermission adds cluster for burst AoE.",
          "Diffuse Magic or Dampen Harm during Rampage for personal defensive."]},
    'shaman-enhancement': {
      nl:["Wind Shear op de roar-cast — korte cooldown, neem interrupt-verantwoordelijkheid.",
          "Feral Spirit + Doom Winds op de grote pulls voor maximale AoE burst.",
          "Astral Shift bij Rampage als persoonlijk defensief."],
      en:["Wind Shear on the roar cast — short cooldown, take interrupt responsibility.",
          "Feral Spirit + Doom Winds on big pulls for maximum AoE burst.",
          "Astral Shift during Rampage as personal defensive."]},
    'hunter-marksmanship': {
      nl:["Counter Shot op de roar-cast — volledig ranged, altijd in bereik.",
          "Volley + Rapid Fire op de tussenfase adds cluster voor massale ranged AoE.",
          "Aspect of the Turtle bij Rampage als volledige immuniteit."],
      en:["Counter Shot on the roar cast — fully ranged, always in range.",
          "Volley + Rapid Fire on the intermission adds cluster for massive ranged AoE.",
          "Aspect of the Turtle during Rampage for full immunity."]},
    'deathknight-unholy': {
      nl:["Mind Freeze op de roar-cast — jouw interrupt.",
          "Army of the Dead + Apocalypse voor maximale AoE burst op de tussenfase adds cluster.",
          "Anti-Magic Shell bij Rampage voor magische schade-immuniteit."],
      en:["Mind Freeze on the roar cast — your interrupt.",
          "Army of the Dead + Apocalypse for maximum AoE burst on the intermission adds cluster.",
          "Anti-Magic Shell during Rampage for magic damage immunity."]},

    'deathknight-frost': {
      nl:["Mind Freeze op de roar-cast — jouw interrupt.",
          "Pillar of Frost + Frostwyrm's Fury op de adds cluster voor AoE burst.",
          "Anti-Magic Shell bij Rampage voor magische schade-immuniteit."],
      en:["Mind Freeze on the roar cast — your interrupt.",
          "Pillar of Frost + Frostwyrm's Fury on the adds cluster for AoE burst.",
          "Anti-Magic Shell during Rampage for magic damage immunity."]},

    'demonhunter-devourer': {
      nl:["Disrupt op de roar-cast — je bent semi-ranged, altijd in bereik.",
          "Hurl Glaive + Fel Barrage op de adds cluster voor ranged AoE burst.",
          "Blur bij Rampage als primair defensief — twee charges met Demonic Resilience."],
      en:["Disrupt on the roar cast — you are semi-ranged, always in range.",
          "Hurl Glaive + Fel Barrage on the adds cluster for ranged AoE burst.",
          "Blur during Rampage as primary defensive — two charges with Demonic Resilience."]},

    'druid-feral': {
      nl:["Skull Bash op de roar-cast — korte cooldown, altijd in melee.",
          "Primal Wrath of Swipe voor AoE cleave op de adds cluster.",
          "Survival Instincts bij Rampage als persoonlijk defensief — twee charges."],
      en:["Skull Bash on the roar cast — short cooldown, always in melee.",
          "Primal Wrath or Swipe for AoE cleave on the adds cluster.",
          "Survival Instincts during Rampage as personal defensive — two charges."]},

    'evoker-augmentation': {
      nl:["Tail Swipe of Wing Buffet op de roar-cast — Evoker CC-toolkit.",
          "Ebon Might + Breath of Eons activeren op de grote pull voor maximale groepsbuff.",
          "Obsidian Scales bij Rampage als persoonlijk defensief."],
      en:["Tail Swipe or Wing Buffet on the roar cast — Evoker CC toolkit.",
          "Activate Ebon Might + Breath of Eons on the big pull for maximum group buff.",
          "Obsidian Scales during Rampage as personal defensive."]},

    'evoker-devastation': {
      nl:["Tail Swipe of Wing Buffet op de roar-cast — Evoker CC-toolkit.",
          "Dragonrage + Eternity Surge op de grote pull voor maximale burst.",
          "Obsidian Scales bij Rampage als persoonlijk defensief."],
      en:["Tail Swipe or Wing Buffet on the roar cast — Evoker CC toolkit.",
          "Dragonrage + Eternity Surge on the big pull for maximum burst.",
          "Obsidian Scales during Rampage as personal defensive."]},

    'hunter-survival': {
      nl:["Counter Shot op de roar-cast — jij bent mobiel en hebt altijd een ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb voor burst AoE op de adds cluster.",
          "Aspect of the Turtle bij Rampage als noodimuniteit."],
      en:["Counter Shot on the roar cast — you are mobile and always have a ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb for burst AoE on the adds cluster.",
          "Aspect of the Turtle during Rampage as emergency immunity."]},

    'mage-arcane': {
      nl:["Counterspell op de roar-cast — jij hebt de beste interrupt van alle mages.",
          "Arcane Surge bewaren voor de grote pulls of Bloodlust-window voor maximale burst.",
          "Ice Block bij Rampage als noodimuniteit — Arcane Mages zijn glaskanon, gebruik het goed."],
      en:["Counterspell on the roar cast — you have the best interrupt of all mages.",
          "Save Arcane Surge for big pulls or Bloodlust window for maximum burst.",
          "Ice Block during Rampage as emergency immunity — Arcane Mages are glass cannons, use it wisely."]},

    'mage-fire': {
      nl:["Counterspell op de roar-cast — essentieel voor elke Mage.",
          "Combustion + Pyroclasm voor maximale burst op de grote pulls.",
          "Ice Block bij Rampage als noodimuniteit."],
      en:["Counterspell on the roar cast — essential for every Mage.",
          "Combustion + Pyroclasm for maximum burst on big pulls.",
          "Ice Block during Rampage as emergency immunity."]},

    'priest-shadow': {
      nl:["Silence op de roar-cast — gecombineerd met Mind Blast als melee-interrupt.",
          "Void Eruption + Devouring Plague voor burst op de grote pulls.",
          "Dispersion bij Rampage voor 75% schade-reductie — beste persoonlijke defensief van alle clothies."],
      en:["Silence on the roar cast — combined with Mind Blast as a ranged interrupt.",
          "Void Eruption + Devouring Plague for burst on big pulls.",
          "Dispersion during Rampage for 75% damage reduction — best personal defensive of all clothies."]},

    'rogue-assassination': {
      nl:["Kick op de roar-cast — wissel af met andere melee-interrupts.",
          "Deathmark + Shiv voor maximale single-target burst; Fan of Knives voor AoE.",
          "Evasion bij Rampage voor 100% melee-ontwijking."],
      en:["Kick on the roar cast — rotate with other melee interrupts.",
          "Deathmark + Shiv for maximum single-target burst; Fan of Knives for AoE.",
          "Evasion during Rampage for 100% melee dodge."]},

    'rogue-subtlety': {
      nl:["Kick op de roar-cast — wissel af met andere melee-interrupts.",
          "Shadow Blades + Symbols of Death voor maximale burst in het Stealth-window.",
          "Evasion bij Rampage voor 100% melee-ontwijking."],
      en:["Kick on the roar cast — rotate with other melee interrupts.",
          "Shadow Blades + Symbols of Death for maximum burst in the Stealth window.",
          "Evasion during Rampage for 100% melee dodge."]},

    'warlock-affliction': {
      nl:["Spell Lock (via Felhunter) op de roar-cast — jouw enige betrouwbare interrupt.",
          "Malefic Rapture voor AoE burst als meerdere targets vol DoTs zitten.",
          "Unending Resolve bij Rampage voor 40% schade-reductie en interrupt-immuniteit."],
      en:["Spell Lock (via Felhunter) on the roar cast — your only reliable interrupt.",
          "Malefic Rapture for AoE burst when multiple targets are full of DoTs.",
          "Unending Resolve during Rampage for 40% damage reduction and interrupt immunity."]},

    'warlock-demonology': {
      nl:["Spell Lock (via Felhunter) op de roar-cast — essentieel in hoge keys.",
          "Summon Demonic Tyrant + Implosion voor maximale AoE burst op de adds cluster.",
          "Unending Resolve bij Rampage voor 40% schade-reductie."],
      en:["Spell Lock (via Felhunter) on the roar cast — essential in high keys.",
          "Summon Demonic Tyrant + Implosion for maximum AoE burst on the adds cluster.",
          "Unending Resolve during Rampage for 40% damage reduction."]},

    'warlock-destruction': {
      nl:["Spell Lock (via Felhunter) op de roar-cast — jouw enige interrupt.",
          "Summon Infernal + Channel Demonfire voor burst op de grote pulls.",
          "Unending Resolve bij Rampage voor 40% schade-reductie."],
      en:["Spell Lock (via Felhunter) on the roar cast — your only interrupt.",
          "Summon Infernal + Channel Demonfire for burst on big pulls.",
          "Unending Resolve during Rampage for 40% damage reduction."]}},
  // ── VOIDSCAR ARENA ── final boss (index 2) ──
  'voidscar-arena:2:tank': {
    'paladin-protection': {
      nl:["Chaomus heeft Void Eruption — Divine Shield voor volledige immuniteit op het ergste moment.",
          "Avenger's Shield op Void Constructs voor silence + interrupt.",
          "Guardian of Ancient Kings in de finale burn-fase."],
      en:["Chaomus has Void Eruption — Divine Shield for full immunity at the worst moment.",
          "Avenger's Shield on Void Constructs for silence + interrupt.",
          "Guardian of Ancient Kings in the final burn phase."]}
  ,
    'demonhunter-vengeance': {
      nl:["Metamorphosis bewaren voor Void Eruption — op dat moment is AoE-tanken het moeilijkst.",
          "Sigil of Silence op Void Constructs bij spawn voor directe lockdown.",
          "Fiery Brand op Chaomus tijdens de finale burn-fase."],
      en:["Save Metamorphosis for Void Eruption — that is when AoE tanking is hardest.",
          "Sigil of Silence on Void Constructs at spawn for immediate lockdown.",
          "Fiery Brand on Chaomus during the final burn phase."]},
    'druid-guardian': {
      nl:["Survival Instincts bij Void Eruption als primair defensief.",
          "Stampeding Roar zodat DPS snel de void-zones kan verlaten.",
          "Thrash + Moonfire voor threat op de Void Constructs."],
      en:["Survival Instincts during Void Eruption as primary defensive.",
          "Stampeding Roar so DPS can quickly leave void zones.",
          "Thrash + Moonfire for threat on the Void Constructs."]},
    'warrior-protection': {
      nl:["Spell Reflection op Void Channeling voor volledige spell-immuniteit.",
          "Shield Block uptime is cruciaal — houd hem zo constant mogelijk actief.",
          "Last Stand bij Void Eruption als noodrem; Rallying Cry voor de groep."],
      en:["Spell Reflection on Void Channeling for full spell immunity.",
          "Shield Block uptime is critical — keep it active as consistently as possible.",
          "Last Stand during Void Eruption as emergency; Rallying Cry for the group."]},
    'monk-brewmaster': {
      nl:["Spear Hand Strike op Void Channeling — gecombineerd met hoge mobiliteit altijd bereikbaar.",
          "Stagger is jouw kernmechaniek — Purifying Brew gebruiken als Stagger rood wordt.",
          "Fortifying Brew bij Void Eruption als primaire tank-cooldown."],
      en:["Spear Hand Strike on Void Channeling — combined with high mobility always reachable.",
          "Stagger is your core mechanic — use Purifying Brew when Stagger turns red.",
          "Fortifying Brew during Void Eruption as primary tank cooldown."]},
    'deathknight-blood': {
      nl:["Mind Freeze op Void Channeling — gecombineerd met Death Grip altijd bereikbaar.",
          "Death Strike is jouw kernmechaniek — gebruik hem wanneer je schade hebt opgelopen voor maximale healing.",
          "Vampiric Blood bij Void Eruption als primaire tank-cooldown."],
      en:["Mind Freeze on Void Channeling — combined with Death Grip always reachable.",
          "Death Strike is your core mechanic — use it after taking damage for maximum self-healing.",
          "Vampiric Blood during Void Eruption as primary tank cooldown."]}},
  'voidscar-arena:2:heal': {
    'druid-restoration': {
      nl:["Tranquility bij Void Eruption — het grootste healing-moment van de dungeon.",
          "Ironbark op de tank bij Void Slam.",
          "Cyclone op een Void Construct als de tank er eentje kwijtraakt."],
      en:["Tranquility on Void Eruption — the biggest healing moment in the dungeon.",
          "Ironbark on tank during Void Slam.",
          "Cyclone on a Void Construct if the tank loses one."]}
  ,
    'paladin-holy': {
      nl:["Aura Mastery bij Void Eruption — de zwaarste AoE van de boss.",
          "Divine Toll op de tank bij Void Slam voor directe nood-HP.",
          "Blinding Light om Void Constructs te stoppen als ze niet snel genoeg sterven."],
      en:["Aura Mastery during Void Eruption — the boss heaviest AoE.",
          "Divine Toll on the tank during Void Slam for immediate emergency HP.",
          "Blinding Light to stop Void Constructs if they do not die fast enough."]},
    'monk-mistweaver': {
      nl:["Revival bij Void Eruption voor massale groeps-healing in één global.",
          "Spinnende Crane Kick + Vivify voor efficiënte AoE healing tijdens hoge schade.",
          "Life Cocoon op de tank bij de zwaarste aanvallen — unieke absorb-cooldown."],
      en:["Revival during Void Eruption for massive group healing in one global.",
          "Spinning Crane Kick + Vivify for efficient AoE healing during high damage.",
          "Life Cocoon on the tank during the heaviest hits — unique absorb cooldown."]},
    'priest-discipline': {
      nl:["Disc speelt proactief — Atonement vóór Void Eruption op de hele groep plaatsen.",
          "Power Word: Barrier bij Void Eruption voor groeps-schade-reductie.",
          "Schism + Penance voor burst healing via Atonement op meerdere targets tegelijk."],
      en:["Disc plays proactively — place Atonement on the entire group before Void Eruption.",
          "Power Word: Barrier during Void Eruption for group damage reduction.",
          "Schism + Penance for burst healing via Atonement on multiple targets simultaneously."]},

    'evoker-preservation': {
      nl:["Rescue of Hover om snel weg te komen van Void Eruption-mechanics.",
          "Rewind bewaren voor de zwaarste groepsschade — unieke time-reversal healing.",
          "Dream Breath voor AoE healing op meerdere spelers tegelijk."],
      en:["Rescue or Hover to quickly escape Void Eruption mechanics.",
          "Save Rewind for the heaviest group damage — unique time-reversal healing.",
          "Dream Breath for AoE healing on multiple players simultaneously."]},

    'priest-holy': {
      nl:["Symbol of Hope bij Void Eruption voor groeps-mana-recovery — uniek voor Holy Priest.",
          "Holy Word: Sanctify voor instant AoE healing bij hoge schadepieken.",
          "Guardian Spirit op de tank bij kritieke momenten — voorkomt dodelijke klap."],
      en:["Symbol of Hope during Void Eruption for group mana recovery — unique to Holy Priest.",
          "Holy Word: Sanctify for instant AoE healing during high damage spikes.",
          "Guardian Spirit on the tank at critical moments — prevents a killing blow."]},

    'shaman-restoration': {
      nl:["Healing Rain permanent neerleggen op de groep — jouw basis AoE-healing.",
          "Spirit Link Totem bij Void Eruption voor groeps-schade-egalisering — uniek in het spel.",
          "Ancestral Protection Totem bewaren voor de zwaarste pull — tweede kans op leven."],
      en:["Keep Healing Rain permanently on the group — your baseline AoE healing.",
          "Spirit Link Totem during Void Eruption for group damage equalization — unique in the game.",
          "Save Ancestral Protection Totem for the hardest pull — second chance at life."]}},
  'voidscar-arena:2:dps': {
    'hunter-beastmastery': {
      nl:["Void Constructs direct killen — Bestial Wrath AoE.",
          "Counter Shot op Void Channeling.",
          "Aspect of the Turtle bij Void Eruption als je er niet op tijd uit bent."],
      en:["Kill Void Constructs immediately — Bestial Wrath AoE.",
          "Counter Shot on Void Channeling.",
          "Aspect of the Turtle during Void Eruption if you are not out in time."]},
    'shaman-elemental': {
      nl:["Wind Shear op Void Channeling — hoge prioriteit.",
          "Capacitor Totem op de Void Constructs voor een groepsstun.",
          "Astral Shift bij Void Eruption als defensief."],
      en:["Wind Shear on Void Channeling — high priority.",
          "Capacitor Totem on Void Constructs for a group stun.",
          "Astral Shift during Void Eruption as a defensive."]}
  ,
    'demonhunter-havoc': {
      nl:["Disrupt op Void Channeling — snelste melee-interrupt.",
          "Eye Beam op de Void Construct cluster voor snelle AoE burst.",
          "Netherwalk bij Void Eruption als extra immuniteit."],
      en:["Disrupt on Void Channeling — fastest melee interrupt.",
          "Eye Beam on the Void Construct cluster for quick AoE burst.",
          "Netherwalk during Void Eruption as extra immunity."]},
    'druid-balance': {
      nl:["Starfall op de Void Constructs voor constante AoE-schade.",
          "Typhoon om Void Constructs te groeperen voor efficiënte kill.",
          "Barkskin bij Void Eruption als persoonlijk defensief."],
      en:["Starfall on the Void Constructs for constant AoE damage.",
          "Typhoon to group Void Constructs for efficient kill.",
          "Barkskin during Void Eruption as personal defensive."]},
    'paladin-retribution': {
      nl:["Rebuke op Void Channeling zodra je in bereik bent.",
          "Wake of Ashes + Divine Storm op de Void Construct cluster.",
          "Divine Shield bij Void Eruption als noodrem."],
      en:["Rebuke on Void Channeling as soon as you are in range.",
          "Wake of Ashes + Divine Storm on the Void Construct cluster.",
          "Divine Shield during Void Eruption as emergency."]},
    'warrior-fury': {
      nl:["Pummel op Void Channeling — korte cooldown, gebruik hem consequent.",
          "Recklessness + Bladestorm op de grote pulls voor maximale AoE burst.",
          "Rallying Cry voor de groep bij Void Eruption — één van de beste groeps-cooldowns in het spel."],
      en:["Pummel on Void Channeling — short cooldown, use it consistently.",
          "Recklessness + Bladestorm on big pulls for maximum AoE burst.",
          "Rallying Cry for the group during Void Eruption — one of the best group cooldowns in the game."]},
    'warrior-arms': {
      nl:["Pummel op Void Channeling — wissel af met de tank.",
          "Bladestorm op de Void Constructs cluster voor AoE cleave.",
          "Rallying Cry voor de groep bij Void Eruption als groeps-defensief."],
      en:["Pummel on Void Channeling — rotate with the tank.",
          "Bladestorm on the Void Constructs cluster for AoE cleave.",
          "Rallying Cry for the group during Void Eruption as group defensive."]},
    'mage-frost': {
      nl:["Counterspell op Void Channeling — jouw interrupt is onmisbaar.",
          "Frozen Orb + Blizzard op de Void Constructs cluster voor maximale AoE.",
          "Ice Block bij Void Eruption als persoonlijke noodimuniteit."],
      en:["Counterspell on Void Channeling — your interrupt is essential.",
          "Frozen Orb + Blizzard on the Void Constructs cluster for maximum AoE.",
          "Ice Block during Void Eruption as personal emergency immunity."]},
    'rogue-outlaw': {
      nl:["Kick op Void Channeling — wissel af met andere interrupts.",
          "Blade Flurry voor AoE cleave op de Void Constructs cluster.",
          "Crimson Vial + Feint bij Void Eruption voor personal survival."],
      en:["Kick on Void Channeling — rotate with other interrupts.",
          "Blade Flurry for AoE cleave on the Void Constructs cluster.",
          "Crimson Vial + Feint during Void Eruption for personal survival."]},
    'monk-windwalker': {
      nl:["Spear Hand Strike op Void Channeling — gecombineerd met jouw hoge mobiliteit altijd bereikbaar.",
          "Spinning Crane Kick + Fist of the White Tiger op de Void Constructs cluster voor burst AoE.",
          "Diffuse Magic of Dampen Harm bij Void Eruption voor personal defensive."],
      en:["Spear Hand Strike on Void Channeling — combined with your high mobility always reachable.",
          "Spinning Crane Kick + Fist of the White Tiger on the Void Constructs cluster for burst AoE.",
          "Diffuse Magic or Dampen Harm during Void Eruption for personal defensive."]},
    'shaman-enhancement': {
      nl:["Wind Shear op Void Channeling — korte cooldown, neem interrupt-verantwoordelijkheid.",
          "Feral Spirit + Doom Winds op de grote pulls voor maximale AoE burst.",
          "Astral Shift bij Void Eruption als persoonlijk defensief."],
      en:["Wind Shear on Void Channeling — short cooldown, take interrupt responsibility.",
          "Feral Spirit + Doom Winds on big pulls for maximum AoE burst.",
          "Astral Shift during Void Eruption as personal defensive."]},
    'hunter-marksmanship': {
      nl:["Counter Shot op Void Channeling — volledig ranged, altijd in bereik.",
          "Volley + Rapid Fire op de Void Constructs cluster voor massale ranged AoE.",
          "Aspect of the Turtle bij Void Eruption als volledige immuniteit."],
      en:["Counter Shot on Void Channeling — fully ranged, always in range.",
          "Volley + Rapid Fire on the Void Constructs cluster for massive ranged AoE.",
          "Aspect of the Turtle during Void Eruption for full immunity."]},
    'deathknight-unholy': {
      nl:["Mind Freeze op Void Channeling — jouw interrupt.",
          "Army of the Dead + Apocalypse voor maximale AoE burst op de Void Constructs cluster.",
          "Anti-Magic Shell bij Void Eruption voor magische schade-immuniteit."],
      en:["Mind Freeze on Void Channeling — your interrupt.",
          "Army of the Dead + Apocalypse for maximum AoE burst on the Void Constructs cluster.",
          "Anti-Magic Shell during Void Eruption for magic damage immunity."]},

    'deathknight-frost': {
      nl:["Mind Freeze op Void Channeling — jouw interrupt.",
          "Pillar of Frost + Frostwyrm's Fury op de Void Constructs cluster voor AoE burst.",
          "Anti-Magic Shell bij Void Eruption voor magische schade-immuniteit."],
      en:["Mind Freeze on Void Channeling — your interrupt.",
          "Pillar of Frost + Frostwyrm's Fury on the Void Constructs cluster for AoE burst.",
          "Anti-Magic Shell during Void Eruption for magic damage immunity."]},

    'demonhunter-devourer': {
      nl:["Disrupt op Void Channeling — je bent semi-ranged, altijd in bereik.",
          "Hurl Glaive + Fel Barrage op de Void Constructs cluster voor ranged AoE burst.",
          "Blur bij Void Eruption als primair defensief — twee charges met Demonic Resilience."],
      en:["Disrupt on Void Channeling — you are semi-ranged, always in range.",
          "Hurl Glaive + Fel Barrage on the Void Constructs cluster for ranged AoE burst.",
          "Blur during Void Eruption as primary defensive — two charges with Demonic Resilience."]},

    'druid-feral': {
      nl:["Skull Bash op Void Channeling — korte cooldown, altijd in melee.",
          "Primal Wrath of Swipe voor AoE cleave op de Void Constructs cluster.",
          "Survival Instincts bij Void Eruption als persoonlijk defensief — twee charges."],
      en:["Skull Bash on Void Channeling — short cooldown, always in melee.",
          "Primal Wrath or Swipe for AoE cleave on the Void Constructs cluster.",
          "Survival Instincts during Void Eruption as personal defensive — two charges."]},

    'evoker-augmentation': {
      nl:["Tail Swipe of Wing Buffet op Void Channeling — Evoker CC-toolkit.",
          "Ebon Might + Breath of Eons activeren op de grote pull voor maximale groepsbuff.",
          "Obsidian Scales bij Void Eruption als persoonlijk defensief."],
      en:["Tail Swipe or Wing Buffet on Void Channeling — Evoker CC toolkit.",
          "Activate Ebon Might + Breath of Eons on the big pull for maximum group buff.",
          "Obsidian Scales during Void Eruption as personal defensive."]},

    'evoker-devastation': {
      nl:["Tail Swipe of Wing Buffet op Void Channeling — Evoker CC-toolkit.",
          "Dragonrage + Eternity Surge op de grote pull voor maximale burst.",
          "Obsidian Scales bij Void Eruption als persoonlijk defensief."],
      en:["Tail Swipe or Wing Buffet on Void Channeling — Evoker CC toolkit.",
          "Dragonrage + Eternity Surge on the big pull for maximum burst.",
          "Obsidian Scales during Void Eruption as personal defensive."]},

    'hunter-survival': {
      nl:["Counter Shot op Void Channeling — jij bent mobiel en hebt altijd een ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb voor burst AoE op de Void Constructs cluster.",
          "Aspect of the Turtle bij Void Eruption als noodimuniteit."],
      en:["Counter Shot on Void Channeling — you are mobile and always have a ranged interrupt.",
          "Coordinated Assault + Wildfire Bomb for burst AoE on the Void Constructs cluster.",
          "Aspect of the Turtle during Void Eruption as emergency immunity."]},

    'mage-arcane': {
      nl:["Counterspell op Void Channeling — jij hebt de beste interrupt van alle mages.",
          "Arcane Surge bewaren voor de grote pulls of Bloodlust-window voor maximale burst.",
          "Ice Block bij Void Eruption als noodimuniteit — Arcane Mages zijn glaskanon, gebruik het goed."],
      en:["Counterspell on Void Channeling — you have the best interrupt of all mages.",
          "Save Arcane Surge for big pulls or Bloodlust window for maximum burst.",
          "Ice Block during Void Eruption as emergency immunity — Arcane Mages are glass cannons, use it wisely."]},

    'mage-fire': {
      nl:["Counterspell op Void Channeling — essentieel voor elke Mage.",
          "Combustion + Pyroclasm voor maximale burst op de grote pulls.",
          "Ice Block bij Void Eruption als noodimuniteit."],
      en:["Counterspell on Void Channeling — essential for every Mage.",
          "Combustion + Pyroclasm for maximum burst on big pulls.",
          "Ice Block during Void Eruption as emergency immunity."]},

    'priest-shadow': {
      nl:["Silence op Void Channeling — gecombineerd met Mind Blast als melee-interrupt.",
          "Void Eruption + Devouring Plague voor burst op de grote pulls.",
          "Dispersion bij Void Eruption voor 75% schade-reductie — beste persoonlijke defensief van alle clothies."],
      en:["Silence on Void Channeling — combined with Mind Blast as a ranged interrupt.",
          "Void Eruption + Devouring Plague for burst on big pulls.",
          "Dispersion during Void Eruption for 75% damage reduction — best personal defensive of all clothies."]},

    'rogue-assassination': {
      nl:["Kick op Void Channeling — wissel af met andere melee-interrupts.",
          "Deathmark + Shiv voor maximale single-target burst; Fan of Knives voor AoE.",
          "Evasion bij Void Eruption voor 100% melee-ontwijking."],
      en:["Kick on Void Channeling — rotate with other melee interrupts.",
          "Deathmark + Shiv for maximum single-target burst; Fan of Knives for AoE.",
          "Evasion during Void Eruption for 100% melee dodge."]},

    'rogue-subtlety': {
      nl:["Kick op Void Channeling — wissel af met andere melee-interrupts.",
          "Shadow Blades + Symbols of Death voor maximale burst in het Stealth-window.",
          "Evasion bij Void Eruption voor 100% melee-ontwijking."],
      en:["Kick on Void Channeling — rotate with other melee interrupts.",
          "Shadow Blades + Symbols of Death for maximum burst in the Stealth window.",
          "Evasion during Void Eruption for 100% melee dodge."]},

    'warlock-affliction': {
      nl:["Spell Lock (via Felhunter) op Void Channeling — jouw enige betrouwbare interrupt.",
          "Malefic Rapture voor AoE burst als meerdere targets vol DoTs zitten.",
          "Unending Resolve bij Void Eruption voor 40% schade-reductie en interrupt-immuniteit."],
      en:["Spell Lock (via Felhunter) on Void Channeling — your only reliable interrupt.",
          "Malefic Rapture for AoE burst when multiple targets are full of DoTs.",
          "Unending Resolve during Void Eruption for 40% damage reduction and interrupt immunity."]},

    'warlock-demonology': {
      nl:["Spell Lock (via Felhunter) op Void Channeling — essentieel in hoge keys.",
          "Summon Demonic Tyrant + Implosion voor maximale AoE burst op de Void Constructs cluster.",
          "Unending Resolve bij Void Eruption voor 40% schade-reductie."],
      en:["Spell Lock (via Felhunter) on Void Channeling — essential in high keys.",
          "Summon Demonic Tyrant + Implosion for maximum AoE burst on the Void Constructs cluster.",
          "Unending Resolve during Void Eruption for 40% damage reduction."]},

    'warlock-destruction': {
      nl:["Spell Lock (via Felhunter) op Void Channeling — jouw enige interrupt.",
          "Summon Infernal + Channel Demonfire voor burst op de grote pulls.",
          "Unending Resolve bij Void Eruption voor 40% schade-reductie."],
      en:["Spell Lock (via Felhunter) on Void Channeling — your only interrupt.",
          "Summon Infernal + Channel Demonfire for burst on big pulls.",
          "Unending Resolve during Void Eruption for 40% damage reduction."]}}

};


// ── GLOSSARY ──
const GLOSSARY = [
  {
    term:{nl:"Interrupt",en:"Interrupt"},
    def:{nl:"Een ability die een cast van een vijand onderbreekt en stopt. Elke spec heeft er één. Cruciaal: als een cast niet geïnterrupt wordt, gaat er iets ergs gebeuren.",
         en:"An ability that stops an enemy's spell while it's being cast. Every spec has one. Crucial: if a cast isn't interrupted, something bad will happen."}
  },
  {
    term:{nl:"Soak",en:"Soak"},
    def:{nl:"Bewust in een aanval of zone gaan staan zodat jij de schade opvangt voor de groep. Soaken = jij neemt de klap voor het team, zodat de rest er niet in hoeft te staan.",
         en:"Deliberately standing in an attack or zone to absorb the damage yourself for the group. Soaking = you take the hit for the team, so the rest don't have to stand in it."}
  },
  {
    term:{nl:"Frontal / Frontal ability",en:"Frontal / Frontal ability"},
    def:{nl:"Een aanval die alles in een kegel vóór de boss raakt. Als DPS of healer: nooit voor de boss staan. Als tank: keer de boss weg van de groep.",
         en:"An attack that hits everything in a cone in front of the boss. As DPS or healer: never stand in front of the boss. As tank: face the boss away from the group."}
  },
  {
    term:{nl:"DoT (Damage over Time)",en:"DoT (Damage over Time)"},
    def:{nl:"Een debuff die je elke paar seconden schade geeft. Je staat er niet in — hij zit op jou. Sommige DoTs zijn te verwijderen (dispel), andere niet.",
         en:"A debuff that deals damage to you every few seconds. You're not standing in it — it's on you. Some DoTs can be removed (dispel), others cannot."}
  },
  {
    category: "tank",
    term:{nl:"Kite / Kiten",en:"Kite / Kiting"},
    def:{nl:"Vijanden op afstand houden terwijl je wegrent om schade te vermijden wanneer defensives op zijn.",
         en:"Keep enemies at range while you run away to avoid damage when your defensives are on cooldown."}
  },
  {
    term:{nl:"Taunt swap",en:"Taunt swap"},
    def:{nl:"Wanneer de tank een stapelende debuff heeft, taunt de tweede tank de boss over zodat de eerste tank kan herstellen. Tanks wisselen zo af. Niet iets wat DPS of healers hoeven te doen.",
         en:"When the tank has a stacking debuff, the second tank taunts the boss over so the first tank can recover. Tanks alternate this way. Not something DPS or healers need to worry about."}
  },
  {
    category: "tank",
    term:{nl:"LoS (Line of Sight)",en:"LoS (Line of Sight)"},
    def:{nl:"Uit het zicht van vijanden stappen (achter een muur/pilaar) om casters naar je toe te trekken.",
         en:"Break line of sight (behind a wall or pillar) to pull casters toward you."}
  },
  {
    term:{nl:"Defensive / Cooldown",en:"Defensive / Cooldown"},
    def:{nl:"Een krachtige ability met een lange herlaadtijd. 'Gebruik je defensive' betekent: druk op je survivability-ability om een zware klap te overleven. Elke spec heeft er minstens één.",
         en:"A powerful ability with a long recharge time. 'Use your defensive' means: press your survivability ability to survive a big hit. Every spec has at least one."}
  },
  {
    term:{nl:"AoE (Area of Effect)",en:"AoE (Area of Effect)"},
    def:{nl:"Schade of effect dat een gebied raakt — niet één doelwit, maar alles in de buurt. 'AoE de adds' betekent: gebruik een ability die meerdere vijanden tegelijk raakt.",
         en:"Damage or effect that hits an area — not one target, but everything nearby. 'AoE the adds' means: use an ability that hits multiple enemies at once."}
  },
  {
    term:{nl:"Adds",en:"Adds"},
    def:{nl:"Extra vijanden die tijdens een boss fight spawnen. Bijna altijd: dood ze eerst voordat je verder op de boss focust. Ze heten zo omdat het toevoegingen ('additions') zijn.",
         en:"Extra enemies that spawn during a boss fight. Almost always: kill them first before refocusing on the boss. They're called adds because they're additions to the fight."}
  },
  {
    category: "tank",
    term:{nl:"Tank Buster",en:"Tank Buster"},
    def:{nl:"Een specifieke aanval van een boss die extreem veel schade doet en een grote defensive cooldown vereist.",
         en:"A specific boss attack that deals extreme damage and requires a major defensive cooldown."}
  },
  {
    term:{nl:"Dispel",en:"Dispel"},
    def:{nl:"Een ability die een negatief effect (debuff) van een medespeler verwijdert. Niet elke spec kan dit. Wordt in de guide aangegeven met 'dispel direct'.",
         en:"An ability that removes a negative effect (debuff) from a teammate. Not every spec can do this. Indicated in the guide with 'dispel immediately'."}
  },
  {
    term:{nl:"Purge",en:"Purge"},
    def:{nl:"Hetzelfde als dispel maar dan voor positieve effecten (buffs) op vijanden. Je verwijdert een buff van een vijand. Slechts een paar specs kunnen dit.",
         en:"Same as dispel but for positive effects (buffs) on enemies. You remove a buff from an enemy. Only a few specs can do this."}
  },
  {
    term:{nl:"Bloodlust / Lust / Heroism",en:"Bloodlust / Lust / Heroism"},
    def:{nl:"De krachtigste groepsbuff: iedereen aanvalt 30% sneller voor 40 seconden. Wordt één keer per gevecht gebruikt. De guide geeft aan wanneer dit het beste moment is.",
         en:"The most powerful group buff: everyone attacks 30% faster for 40 seconds. Used once per fight. The guide indicates the best moment to use it."}
  },
  {
    term:{nl:"Burst-venster",en:"Burst window"},
    def:{nl:"Een kort moment waarop de boss extra kwetsbaar is of jij extra schade doet. Bewaar je krachtigste offensive abilities voor dit moment — gebruik ze niet gewoon zodra ze beschikbaar zijn.",
         en:"A brief window when the boss is extra vulnerable or you deal extra damage. Save your most powerful offensive abilities for this moment — don't just use them as soon as they're available."}
  },
  {
    term:{nl:"Stack / Spreiden",en:"Stack / Spread"},
    def:{nl:"Stack = alle spelers gaan dicht bij elkaar staan. Spreiden = spelers gaan juist uit elkaar staan. Wanneer dit nodig is staat het in de boss-tips — het hangt af van de mechanic.",
         en:"Stack = all players stand close together. Spread = players move apart. When this is needed it's stated in the boss tips — it depends on the mechanic."}
  },
  {
    category: "tank",
    term:{nl:"Snap-points",en:"Snap-points"},
    def:{nl:"Specifieke plekken op de kaart waar vijanden naartoe \"teleporteren\" als je ze daarheen trekt voor een compacte pull.",
         en:"Specific spots on the map where enemies snap or teleport when you pull them there, for a tight pack."}
  },
  {
    category: "tank",
    term:{nl:"Percent / Count",en:"Percent / Count"},
    def:{nl:"De hoeveelheid trash (vijanden) die je moet doden om de dungeon-meter (voor de boss) te vullen.",
         en:"How much trash (enemies) you must kill to fill the dungeon progress bar before the boss."}
  },
  {
    category: "tank",
    term:{nl:"Affix-prioriteit",en:"Affix Priority"},
    def:{nl:"De vijand die deze week extra gevaarlijk is door actieve modifiers zoals Fortified.",
         en:"The enemy or pack that is especially dangerous this week because of active affixes like Fortified."}
  }
];
