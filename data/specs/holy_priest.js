if (typeof ALL_SPECS === 'undefined') window.ALL_SPECS = [];
const SPEC_HOLY_PRIEST = {
  id:'holy_priest', icon:'🌟', class:'Priest',
  spec:{nl:'Holy',en:'Holy',da:'Holy'},
  role:'heal', armor:'Cloth',
  weapon:{nl:'Staf of eenhandig + offhand',en:'Staff or one-hand + offhand',da:'Stav eller enhånds + offhand'},
  resource:'Mana',
  patch:'1.0', color:'#FFFFFF',
  summary:{nl:"Holy Priest is de traditionele healer — directe heals, HoTs en Chakra systeem. Eenvoudiger dan Disc maar met uitstekende throughput. Beste raid healer in het spel.",en:"Holy Priest is the traditional healer — direct heals, HoTs and Chakra system. Simpler than Disc but with excellent throughput. Best raid healer in the game.",da:"Holy Priest er den traditionelle healer — direkte heals, HoTs og Chakra-system. Enklere end Disc men med fremragende throughput. Bedste raid-healer i spillet."},
  pros:{nl:["Beste AoE healing in het spel", "Eenvoudiger dan Discipline", "Prayer of Healing is enorm in grote packs", "Divine Hymn = krachtigste groepsCD"],en:["Best AoE healing in the game", "Simpler than Discipline", "Prayer of Healing is massive in large packs", "Divine Hymn = most powerful group CD"],da:["Bedste AoE-healing i spillet", "Enklere end Discipline", "Prayer of Healing er massiv i store grupper", "Divine Hymn = kraftigste gruppe-CD"]},
  cons:{nl:["Minder sterk in preventieve healing", "Minder utility dan Disc", "Kwetsbaar bij sterk movement fights"],en:["Weaker in preventative healing", "Less utility than Disc", "Vulnerable in heavy movement fights"],da:["Svagere i forebyggende healing", "Mindre utility end Disc", "Sårbar i kampe med meget bevægelse"]},
  cheatsheet:{
    nl:{opener:'Zie rotation tab',single:'Zie rotation tab',aoe:'Zie rotation tab',rules:['Volg de rotatie tab voor gedetailleerde stappen','Gebruik cooldowns op CD','Houd resources in de gaten']},
    en:{opener:'See rotation tab',single:'See rotation tab',aoe:'See rotation tab',rules:['Follow the rotation tab for detailed steps','Use cooldowns on CD','Watch your resources']},
    da:{opener:'Se rotationstab',single:'Se rotationstab',aoe:'Se rotationstab',rules:['Følg rotationsfanen for detaljerede trin','Brug cooldowns på CD','Hold øje med dine ressourcer']},
  },
  rotation:{
    nl:{apex_tip:'💡 Volg je klasse-specifieke rotatie en gebruik cooldowns consistent op CD.',opener:[{spell:'Hoofd aanval',why:'Start de fight'}],single:[{spell:'Cooldown rotatie',why:'Zie tips tab'}],aoe:[{spell:'AoE aanval',why:'Raakt meerdere targets'}]},
    en:{apex_tip:'💡 Follow your class-specific rotation and use cooldowns consistently on CD.',opener:[{spell:'Main attack',why:'Start the fight'}],single:[{spell:'Cooldown rotation',why:'See tips tab'}],aoe:[{spell:'AoE attack',why:'Hits multiple targets'}]},
    da:{apex_tip:'💡 Følg din klassespecifikke rotation og brug cooldowns konsekvent på CD.',opener:[{spell:'Hoved angreb',why:'Start kampen'}],single:[{spell:'Cooldown rotation',why:'Se tips-fane'}],aoe:[{spell:'AoE-angreb',why:'Rammer flere mål'}]},
  },
  stats:{
    nl:{tip:'Focus op je primaire stat en relevante secondary stats.',list:[{rank:1,stat:'Primaire stat',bars:5,note:'Altijd #1'},{rank:2,stat:'Haste',bars:4,note:'Verkort CDs'},{rank:3,stat:'Critical Strike',bars:3,note:'Grotere hits'},{rank:4,stat:'Mastery',bars:2,note:'Spec-specifiek'},{rank:5,stat:'Versatility',bars:1,note:'Laagste prio'}]},
    en:{tip:'Focus on your primary stat and relevant secondary stats.',list:[{rank:1,stat:'Primary stat',bars:5,note:'Always #1'},{rank:2,stat:'Haste',bars:4,note:'Reduces CDs'},{rank:3,stat:'Critical Strike',bars:3,note:'Bigger hits'},{rank:4,stat:'Mastery',bars:2,note:'Spec-specific'},{rank:5,stat:'Versatility',bars:1,note:'Lowest prio'}]},
    da:{tip:'Fokus på din primære stat og relevante sekundære stats.',list:[{rank:1,stat:'Primær stat',bars:5,note:'Altid #1'},{rank:2,stat:'Haste',bars:4,note:'Reducerer CDs'},{rank:3,stat:'Critical Strike',bars:3,note:'Større træf'},{rank:4,stat:'Mastery',bars:2,note:'Spec-specifik'},{rank:5,stat:'Versatility',bars:1,note:'Lavest prio'}]},
  },
  cooldowns:{
    nl:[{spell:'Grote cooldown',cd:'3 min',effect:'Significante boost',when:'Op pull of grote pack'}],
    en:[{spell:'Major cooldown',cd:'3 min',effect:'Significant boost',when:'On pull or major pack'}],
    da:[{spell:'Stor cooldown',cd:'3 min',effect:'Markant boost',when:'På pull eller stor gruppe'}],
  },
  utility:{
    nl:[{spell:'Interrupt',type:'Interrupt',note:'Onderbreekt enemy casts'}],
    en:[{spell:'Interrupt',type:'Interrupt',note:'Interrupts enemy casts'}],
    da:[{spell:'Interrupt',type:'Interrupt',note:'Afbryder fjendtlige casts'}],
  },
  tips:{
    nl:[{icon:'🌟',title:'Holy speeltips',text:'Leer je klasse stap voor stap. Begin met de basisrotatie en voeg complexiteit toe zodra je comfortabel bent. Gebruik de Cheat Sheet tab als geheugensteun.'},{icon:'📊',title:'Stat prioriteit',text:'Zorg dat je primaire stat altijd zo hoog mogelijk is. Secondary stats kun je balanceren via gear upgrades en gems/enchants.'},{icon:'🎯',title:'Cooldown gebruik',text:'Gebruik grote cooldowns consistent op cooldown — niet bewaren voor de perfecte situatie die misschien nooit komt.'},{icon:'💡',title:'M+ tips',text:'Communiceer met je groep over interrupts en CC. Weet welke trash casts gevaarlijk zijn en spread de verantwoordelijkheid.'},{icon:'📈',title:'Verbeter jezelf',text:'Gebruik Warcraft Logs om je eigen performance te analyseren. Vergelijk met top-spelers van jouw spec voor concrete verbeterpunten.'}],
    en:[{icon:'🌟',title:'Holy tips',text:'Learn your class step by step. Start with the basic rotation and add complexity once comfortable. Use the Cheat Sheet tab as a reminder.'},{icon:'📊',title:'Stat priority',text:'Make sure your primary stat is always as high as possible. Secondary stats can be balanced via gear upgrades and gems/enchants.'},{icon:'🎯',title:'Cooldown usage',text:'Use major cooldowns consistently on cooldown — don\'t save them for the perfect situation that might never come.'},{icon:'💡',title:'M+ tips',text:'Communicate with your group about interrupts and CC. Know which trash casts are dangerous and spread the responsibility.'},{icon:'📈',title:'Improve yourself',text:'Use Warcraft Logs to analyze your own performance. Compare with top players of your spec for concrete improvement points.'}],
    da:[{icon:'🌟',title:'Holy tips',text:'Lær din klasse trin for trin. Begynd med grundrotationen og tilføj kompleksitet når du er komfortabel. Brug Snydeark-fanen som påmindelse.'},{icon:'📊',title:'Stat-prioritet',text:'Sørg for at din primære stat altid er så høj som mulig. Sekundære stats kan balanceres via gear-opgraderinger og gems/enchants.'},{icon:'🎯',title:'Cooldown-brug',text:'Brug store cooldowns konsekvent på cooldown — gem dem ikke til den perfekte situation der måske aldrig kommer.'},{icon:'💡',title:'M+-tips',text:'Kommunikér med din gruppe om interrupts og CC. Kend hvilke trash-casts der er farlige og spred ansvaret.'},{icon:'📈',title:'Forbedr dig selv',text:'Brug Warcraft Logs til at analysere din egen præstation. Sammenlign med topspillere i din spec for konkrete forbedringspunkter.'}],
  },
  macros:{
    nl:[{name:'Grote CD',code:'/cast [Grote cooldown naam]',note:'Bindeer op makkelijke knop.'}],
    en:[{name:'Major CD',code:'/cast [Major cooldown name]',note:'Bind to easy key.'}],
    da:[{name:'Stor CD',code:'/cast [Stor cooldown navn]',note:'Bind til nem tast.'}],
  },
  resource_info:{
    nl:{intro:'Beheers je resource door efficiënt te genereren en te spenden.',generate:['Hoofdaanval — resource generatie','Cooldowns — boost resource generatie'],spend:['Krachtige finisher — resource dump','Defensieve spell — resource gebruik'],pet_tip:'💡 Houd je resource niet vol — dump regelmatig voor maximale schade.',pets:[]},
    en:{intro:'Master your resource by generating and spending efficiently.',generate:['Main attack — resource generation','Cooldowns — boost resource generation'],spend:['Powerful finisher — resource dump','Defensive spell — resource use'],pet_tip:'💡 Keep dumping resources regularly — never let them hit the cap!',pets:[]},
    da:{intro:'Mestrer din ressource ved at generere og bruge den effektivt.',generate:['Hoved angreb — ressourcegenerering','Cooldowns — boost ressourcegenerering'],spend:['Kraftfuld finisher — ressource-dump','Defensiv trylleformel — ressourceforbrug'],pet_tip:'💡 Hold ikke din ressource fuld — dump regelmæssigt for maksimal skade.',pets:[]},
  },
  consumables:{
    nl:[{type:'flask',name:'Flask of the Focused Dream',effect:'Verhoogt primaire stat voor 1 uur.',note:'Altijd actief'},{type:'pot',name:'Tempered Potion',effect:'Grote stat boost 25 sec.',note:'Op pull'},{type:'food',name:'The Sushi Special (Feast)',effect:'+Stats via groepsfeast.',note:'Feast vragen'},{type:'food',name:'Soulfood backup',effect:'Solo food.',note:'Backup'},{type:'rune',name:'Crystalline Augment Rune',effect:'+Primaire stat 1 uur.',note:'Altijd'}],
    en:[{type:'flask',name:'Flask of the Focused Dream',effect:'Increases primary stat for 1 hour.',note:'Always active'},{type:'pot',name:'Tempered Potion',effect:'Large stat boost 25 sec.',note:'On pull'},{type:'food',name:'The Sushi Special (Feast)',effect:'+Stats via group feast.',note:'Ask for feast'},{type:'food',name:'Solo food backup',effect:'Solo food.',note:'Backup'},{type:'rune',name:'Crystalline Augment Rune',effect:'+Primary stat 1 hour.',note:'Always'}],
    da:[{type:'flask',name:'Flask of the Focused Dream',effect:'Øger primær stat i 1 time.',note:'Altid aktiv'},{type:'pot',name:'Tempered Potion',effect:'Stor stat-boost i 25 sek.',note:'På pull'},{type:'food',name:'The Sushi Special (Feast)',effect:'+Stats via gruppefeast.',note:'Bed om feast'},{type:'food',name:'Solo-mad backup',effect:'Solo-mad.',note:'Backup'},{type:'rune',name:'Crystalline Augment Rune',effect:'+Primær stat 1 time.',note:'Altid'}],
  },
};
ALL_SPECS.push(SPEC_HOLY_PRIEST);
