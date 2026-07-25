// data.js
// This file acts as your "database". 
// Anyone in the community can add a new event here, submit a PR, and the site updates automatically!

const siteData = {
  // Update this to the exact GitHub repository for SourceAzeroth to pull live contributors!
  siteRepo: "Hextv/source-azeroth",

    timeline: [
    {
      id: "event-alpha-leak-2003",
      category: "core",
      icon: "fa-solid fa-user-ninja",
      date: "Late 2003",
      title: "The World of Warcraft Alpha Leak",
      paragraphs: [
        "It all began with Skull's ambition to obtain the internal World of Warcraft Alpha client. Rumored to have made contact inside Blizzard, the restricted alpha client leaked to warez circles and torrent networks worldwide.",
        "While thousands downloaded the client, there were no servers to play on, prompting Blizzard to issue an official statement acknowledging the leak and launching investigations against those involved."
      ],
      tag: "Ancient History"
    },
    {
      id: "event-stormcraft-sandbox-2003",
      category: "core",
      icon: "fa-solid fa-cube",
      date: "Late 2003 - Early 2004",
      title: "Lax & StormCraft Sandbox",
      paragraphs: [
        "Lax reverse-engineered the WoW client using only raw packet logs captured during alpha testing. He created the very first WoW Sandbox (later released as StormCraft Sandbox by ColdIce), allowing players to spawn into the world and explore as a character named Lax.",
        "Lax then architected StormCraft 'Town Hall', the first functional server emulator capable of spell handling and pathfinding, hosting public tests on stormcraft.nl with over 200 concurrent players in a single area."
      ],
      tag: "Ancient History"
    },
    {
      id: "event-gotwow-era-2004",
      category: "web",
      icon: "fa-solid fa-globe",
      date: "Early 2004",
      title: "The Golden Age of GotWoW.Net",
      paragraphs: [
        "GotWoW.Net became the central hub for Skull's Hack Site and Team Stormcraft, rapidly growing to over 40,000 members.",
        "A vibrant ecosystem of specialized subdomains emerged, including Wolk's 'WoW Places' (world showcase), xccmx's 'Technetium' (BLP2 texture converters), and VJeux's server connection loaders."
      ],
      tag: "Community Hubs"
    },
    {
      id: "event-early-emulators-2004",
      category: "core",
      icon: "fa-solid fa-code-fork",
      date: "Early - Mid 2004",
      title: "The Expansion of Early Emulators",
      paragraphs: [
        "Multiple independent development teams pioneered distinct server architectures: AlexM built 'Rift' in Visual Basic, Stanz & Larael built 'Future WoW' (FWoW) in Delphi, Foole & Scar built 'Team 0x90' in C#, and Fr3DBr/Nicoli_s developed 'EX3' (Abyss-X).",
        "Concurrently, Zite created 'zClient', a text-based alternative WoW client capable of connecting to retail 1.3.x servers to automate tasks and interact with vendors."
      ],
      tag: "Core Emulators"
    },
    {
      id: "event-team-python-wowdaemon-2004",
      category: "core",
      icon: "fa-brands fa-python",
      date: "Mid 2004",
      title: "Team Python & WoWDaemon Open Source",
      paragraphs: [
        "Codemonkey launched 'WoWDaemon' (C#), one of the earliest fully-scriptable open-source server projects, which later evolved into 'WoWCraft' (featuring XML database management).",
        "Meanwhile, 'Team Python' (C++) released their source code under the GPL license on SourceForge, reaching #2 in platform activity and paving the way for future open-source projects like WSD and WOWD."
      ],
      tag: "Core Emulators"
    },
    {
      id: "event-gotwow-crackdown-2004",
      category: "web",
      icon: "fa-solid fa-gavel",
      date: "August 8, 2004",
      title: "Blizzard Legal Action & GotWoW Shutdown",
      paragraphs: [
        "Just prior to World of Warcraft's official launch, Blizzard's legal team issued cease-and-desist actions against emulator developers and host servers.",
        "GotWoW, StormCraft, Khaos, and Vibe were forced to shut down and hand over their source code to Blizzard. The disoriented community migrated to Blizzhackers as their new home."
      ],
      tag: "Legal Milestone"
    },
    {
      id: "event-wowd-wowcraft-2004",
      category: "core",
      icon: "fa-solid fa-code-merge",
      date: "Late 2004",
      title: "WoWDaemon, WoWCraft & WOWD",
      paragraphs: [
        "Codemonkey's WoWDaemon spawned several major branches. Following his departure, the community team AnGrA, Phaze, and Afinda formed 'WoWCraft', implementing advanced XML databases and achieving functional death-worlds, combat, and spawning systems.",
        "Simultaneously, members from the recently defunct Team Python regrouped underground. They rewrote the entire Python base into what became 'WOWD', intending to eventually merge with OpenWOW before legal threats halted the plans."
      ],
      tag: "Dark Ages"
    },
    {
      id: "event-wowemu-rise-2005",
      category: "core",
      icon: "fa-solid fa-lock",
      date: "2005",
      title: "The Dominance of WoWEmu",
      paragraphs: [
        "During the 'Dark Ages' of emulation, a Russian developer named WAD released 'WoWEmu'. Unlike other projects, WoWEmu was closed-source and monetized, aggressively protected by ASPack to prevent reverse-engineering.",
        "Despite community backlash, WoWEmu became the most popular emulator of its time, hosting an estimated 500,000 players across 25,000 private servers. WAD eventually ceased development, passing the source to a Chinese team (MarsWOW)."
      ],
      tag: "Dark Ages"
    },
    {
      id: "event-blizzhackers-era-2005",
      category: "web",
      icon: "fa-solid fa-users",
      date: "2005 - Onward",
      title: "The Blizzhackers Migration",
      paragraphs: [
        "Following the shutdown of GotWoW.Net, the dispersed modding community sought refuge at Blizzhackers.com, an established site for hacking older Blizzard titles.",
        "Internal hosting conflicts later caused a schism, splitting the community into two competing domains (.us and .ws), though it remained the central hub for WoW emulation discussions for years."
      ],
      tag: "Community Hubs"
    },
    {
      id: "event-nox-wowwow-2005",
      category: "core",
      icon: "fa-solid fa-laptop-code",
      date: "2005 - 2006",
      title: "NOX & The Rise of WoWWoW",
      paragraphs: [
        "Kolie introduced 'NOX', a highly ambitious C# server featuring on-the-fly script compiling. Before its disappearance, Kolie released the crucial WOWSRP6 authentication library to the public.",
        "Dr.Nexus utilized this library to launch 'WoWWoW', a massive C# project that reached beta stages by late 2005. Despite developer drama and sudden disappearances, WoWWoW laid significant groundwork for C# emulation."
      ],
      tag: "Dark Ages"
    },
    {
      id: "event-openwow-crackdown-2006",
      category: "core",
      icon: "fa-solid fa-shield-halved",
      date: "2006",
      title: "OpenWOW & The Second Crackdown",
      paragraphs: [
        "M4rku5, Joker, and Power2All formed 'OpenWOW', attempting to completely rewrite the Team Python core into a stable, open-source C++ framework. A merger with WOWD was planned to combine their superior core with WOWD's features.",
        "Before the merge could happen, Blizzard launched a second wave of aggressive legal actions. Lawyers visited developers' homes, forcing the team to sign strict non-disclosure agreements, effectively terminating OpenWOW."
      ],
      tag: "Legal Milestone"
    },
    {
      id: "event-wddg-blackstorm-2005",
      category: "core",
      icon: "fa-solid fa-fire",
      date: "Early 2005",
      title: "WDDG vs Blackstorm",
      paragraphs: [
        "As the community sought a comprehensive database for WoWEmu, two major groups emerged: WDDG and Blackstorm. Blackstorm, starting slightly earlier, peaked at 68 active members directly contributing to the database before transferring leadership and ultimately dissolving.",
        "WDDG, led by RaymerJacques, rapidly grew but became a polarizing force in the community. Their ambitions to launch their own 'Ludmilla' emulator eventually sparked massive drama and infighting across the scene."
      ],
      tag: "Flaming Blizzhackers"
    },
    {
      id: "event-ludmilla-drama-2005",
      category: "core",
      icon: "fa-solid fa-bomb",
      date: "Mid 2005",
      title: "The Ludmilla Leak & Flame Wars",
      paragraphs: [
        "WDDG's secretive 'Ludmilla' emulator binaries were leaked by community members (Phaser and Shouji), revealing that it heavily relied on the GPL-licensed WOWD source code—something WDDG had fiercely denied.",
        "In retaliation, WDDG leaked the WOWD sources they had obtained for testing. The resulting flame wars fractured the community, ultimately causing the IRPG team to leave WDDG and forcing WDDG to temporarily shut down their public presence."
      ],
      tag: "Flaming Blizzhackers"
    },
    {
      id: "event-runwow-ukraine-2005",
      category: "core",
      icon: "fa-solid fa-lock",
      date: "2005",
      title: "RunWoW & Euro-Asiatic Emulation",
      paragraphs: [
        "While Western communities fought, an independent Ukrainian team developed 'RunWoW' (C#). Using Kolie's SRP.dll and their own script compiler, it remained entirely closed-source, providing a private localized WoW experience.",
        "Simultaneously, overseas developers modified WoWWoW and WOWDaemon to create Chinese-centric emulators like 'RunWOW' (unrelated to the Ukrainian version) and 'WOWDragon', demonstrating the global, decentralized nature of early emulation."
      ],
      tag: "Euro-Asiatic WoW"
    },
    {
      id: "event-pandoras-box-2006",
      category: "core",
      icon: "fa-solid fa-box-open",
      date: "Early 2006",
      title: "Pandora's Box",
      paragraphs: [
        "Following WDDG's fallout, developers Dameon, Burlex, Brian, and Forsaken attempted to create 'Pandora', a spiritual successor to Ludmilla. The project suffered severe instability, attempting ports to Java and Dawn of Light (DOL) architecture.",
        "Due to immense pressure and a lack of coders, Dameon formally resigned, effectively closing Pandora's Box shortly after it opened."
      ],
      tag: "Times Are Going Mad"
    },
    {
      id: "event-ludmilla-release-2006",
      category: "core",
      icon: "fa-solid fa-code",
      date: "March 2006",
      title: "The Official Release of Ludmilla",
      paragraphs: [
        "After multiple declarations of its death, Ludmilla (under the codename 'Kobold') finally saw a public beta release by MasterM. It boasted features like stealth, an honor system, dynamic DB saving, and support for 500 players.",
        "While highly anticipated and widely debated across the Blizzhackers forums, it required further development to reach its promised potential."
      ],
      tag: "Flaming Blizzhackers"
    },
    {
      id: "event-third-crackdown-2006",
      category: "web",
      icon: "fa-solid fa-scale-balanced",
      date: "2006",
      title: "The Third Blizzard Crackdown",
      paragraphs: [
        "Blizzard escalated their legal pursuit, deploying investigators (including Forensic Investigations Technology and Vivendi representatives) directly to developers' homes, including PavkaM and RaymerJacques in South Africa.",
        "The targeted physical intimidation forced the definitive retirement of several key figures and severely crippled the WDDG team. Warnings circulated that prominent open-source projects like MaNGOS and WoWWoW were next on the target list."
      ],
      tag: "Legal Milestone"
    },
    {
      id: "event-mangos-2005",
      category: "core",
      icon: "fa-solid fa-server",
      date: "August 2005",
      title: "The Birth of MaNGOS",
      paragraphs: [
        "MaNGOS (Massive Network Game Object Server) was formally announced as a public open-source project by theLuda. It became the grandfather of modern WoW emulation, giving the community a full-featured Authentication and World content server daemon.",
        "Almost all major C++ WoW emulators today, including TrinityCore, CMaNGOS, and AzerothCore, trace their lineage directly back to this foundational project and its early open-source ethos."
      ],
      tag: "Core Emulators",
      githubRepo: "mangos/mangos"
    },
    {
      id: "event-trinitycore-2008",
      category: "core",
      icon: "fa-brands fa-github",
      date: "2008",
      title: "TrinityCore Fork & Standardization",
      paragraphs: [
        "TrinityCore was formed as a major fork from MaNGOS. Driven by the community's desire for different architectural decisions and faster development cycles, the project rapidly gained traction.",
        "It went on to become the absolute industry standard for 3.3.5a (Wrath of the Lich King) emulation, serving as the base for thousands of servers and heavily dictating the future of C++ WoW development."
      ],
      tag: "Core Emulators",
      githubRepo: "TrinityCore/TrinityCore"
    },
    {
      id: "event-noggit-era",
      category: "tools",
      icon: "fa-solid fa-map",
      date: "Mid 2000s - 2010s",
      title: "Noggit & Custom Map Editing",
      paragraphs: [
        "Noggit emerged as the premier open-source world builder and map editor for the World of Warcraft client. Built by dedicated community reverse-engineers, it unlocked the ability to manipulate the game's ADT map files.",
        "It allowed modders to sculpt terrain, paint textures, place WMOs and M2s (3D models), and completely overhaul the physical world of Azeroth, cementing itself as the backbone of custom client-side modding."
      ],
      tag: "Development Tools",
      githubRepo: "wowdev/noggit"
    },
    {
      id: "event-mangos-origins-2005",
      category: "core",
      icon: "fa-solid fa-leaf",
      date: "August 2005",
      title: "The True Origins of MaNGOS",
      paragraphs: [
        "MaNGOS was born from the leaked WOWD source code. Kronos, chance, and theLuda originally created a project named 'WOWSP' (WOW Single Player) to divert Blizzard's attention from Ludmilla. To avoid copyright issues, the team voted to rename it to MaNGOS on August 28, 2005.",
        "With a strict policy against including copyrighted client data to remain legal under European law, MaNGOS attracted top developers like sioully, mmcs, and captnoord, evolving from a distraction into a massively successful open-source framework."
      ],
      tag: "Core Emulators",
      githubRepo: "cmangos/mangos-classic"
    },
    {
      id: "event-udb-modb-sdb",
      category: "tools",
      icon: "fa-solid fa-database",
      date: "2006 - 2007",
      title: "MoDB, SDB, and the Birth of UDB",
      paragraphs: [
        "As MaNGOS refused to host database content for legal reasons, external projects like MoDB (MaNGOS Owns DB) and SDB stepped up. MoDB started from the 'Cindy' and 'PeachDB' bases, focusing heavily on adapting core mechanics alongside data.",
        "To prevent fragmented efforts and hostility, developers from both MoDB and SDB (including Neo2003, Brian, and Cyrex) negotiated a merger. This resulted in the Unified Database (UDB), which became the premier database for MaNGOS."
      ],
      tag: "Databases",
      githubRepo: "cmangos/classic-db"
    },
    {
      id: "event-minor-emus-2006",
      category: "core",
      icon: "fa-solid fa-microchip",
      date: "2006 - 2007",
      title: "Alternative Languages: Delphi & VB",
      paragraphs: [
        "Developers continually experimented with non-C++ languages. Projects like DelphiEmu (later Delfin) and YAWE pushed the limits of Delphi in MMO server emulation.",
        "Simultaneously, Warden's 'Fusion' and its successor 'vWoW' proved that Visual Basic 6.0 could handle WoW emulation, branching out into 'Modern WoWe' using VB.NET."
      ],
      tag: "Experimental Cores"
    },
    {
      id: "event-panthera-picasso",
      category: "core",
      icon: "fa-solid fa-cat",
      date: "2006",
      title: "Panthera & PiCaSsOeMu",
      paragraphs: [
        "Panthera (originally Thanatos) was a secretive attempt to revive and modernize the ancient StormCraft code by nneonneo and Spacey, but it ultimately fractured due to leadership quarrels and deep-rooted core weaknesses.",
        "Around the same time, a dramatic saga unfolded with 'PiCaSsOeMu', an allegedly stolen C# emulator. The project ended abruptly when its self-proclaimed creator was hacked by Warden, who leaked the sources to expose the deception."
      ],
      tag: "Times Are Going Mad"
    },
    {
      id: "event-antrix-ascent-2007",
      category: "core",
      icon: "fa-solid fa-fire-flame-curved",
      date: "2007 - 2008",
      title: "From WOWD to Antrix and Ascent",
      paragraphs: [
        "Burlex rewrote the WOWD core, achieving massive performance gains. After a dramatic leak of the source and the MMORPG4Free database, Burlex officially established the project as 'Antrix', a highly optimized, multi-threaded C++ emulator.",
        "Due to donation controversies and internal drama, Antrix was later rebranded as 'Ascent'. The community eventually fractured further into massive spin-offs like ArcEmu, Open Ascent, and AspireCore."
      ],
      tag: "Core Emulators",
      githubRepo: "arcemu/arcemu"
    },
    {
      id: "event-trinity-schism-2008",
      category: "core",
      icon: "fa-solid fa-bolt",
      date: "2008",
      title: "The Schism: Detailed Birth of TrinityCore",
      paragraphs: [
        "Frustrated by MaNGOS's slow patch acceptance and lack of database support, members of the UDB community proposed a new project. This led to the creation of TrinityCore, aimed at uniting the core, database (TrinityDB), and scripts (TrinityScript).",
        "The schism resulted in fierce rivalry, with independent database developers spinning off 'DivinityDB'. This internal rebellion ultimately shaped the modern landscape, cementing TrinityCore as the industry standard for WotLK emulation."
      ],
      tag: "Core Emulators",
      githubRepo: "TrinityCore/TrinityCore"
    },
    {
      id: "event-wcell-foundations",
      category: "core",
      icon: "fa-brands fa-windows",
      date: "2006 - 2007",
      title: "WCell & The C# Revolution",
      paragraphs: [
        "Built entirely from the ground up in C#, WCell began development three years into WOWD's lifespan. The core team initially consisted of mgX, Craigen, biceps, and tobz, later joined by key figures like Ralek (who masterfully disassembled the WoW client) and Domi as project leader.",
        "WCell 0.5 was the last major versioned release before the team transitioned to a continuous improvement model. Although barely playable in its infancy, it established a highly modular foundation distinctly separate from the dominant C++ emulators."
      ],
      tag: "Core Emulators",
      githubRepo: "WCell/WCell"
    },
    {
      id: "event-wcell-innovations-2009",
      category: "core",
      icon: "fa-solid fa-server",
      date: "2008 - 2009",
      title: "WCell 3.0 Support & The 2009 Disaster",
      paragraphs: [
        "WCell achieved a massive milestone by becoming the first emulator to support the World of Warcraft 3.0 retail client. It introduced a highly modular Add-on system and utilized NHibernate for its database layer, natively supporting .NET scripting languages like C# and VB.NET.",
        "The project also introduced powerful, overlooked tools like the Packet Analyzer. However, progress was severely derailed in early 2009 when a catastrophic hardware failure at their hosting facility destroyed the team's wiki and forums, temporarily throwing the community into disarray."
      ],
      tag: "Core Emulators",
      githubRepo: "WCell/WCell"
    },
    {
      id: "event-azerothcore-release-2016",
      category: "core",
      icon: "fa-solid fa-server",
      date: "Q3 2016",
      title: "The Release of AzerothCore",
      paragraphs: [
        "AzerothCore was initially released in Q3 2016 as version 0.x \"Sunwell\", originating as a major fork from SunwellCore. It was built with a strong focus on community collaboration, modular architecture, and open-source development.",
        "Over the years, it evolved into one of the most active and widely adopted 3.3.5a (Wrath of the Lich King) emulators in the world, featuring an extensive modular catalog and a robust contributor community centered around its GitHub repository."
      ],
      tag: "Core Emulators",
      githubRepo: "azerothcore/azerothcore-wotlk"
    },
    {
      id: "event-tswow-release-2020",
      category: "tools",
      icon: "fa-brands fa-js",
      date: "December 28, 2020",
      title: "The Release of TSWoW (TypeScript WoW)",
      paragraphs: [
        "TSWoW (TypeScript World of Warcraft) was initially released to the public on December 28, 2020. The toolchain went open-source with an official announcement and trailer on the r/wowservers community.",
        "It provides a revolutionary TypeScript-based modding framework built on top of the TrinityCore emulator for the 3.3.5a (Wrath of the Lich King) expansion, allowing developers to write custom spells, scripts, and data modifications using modern web tooling."
      ],
      tag: "Development Tools",
      githubRepo: "tswow/tswow"
    },
    {
      id: "event-turtle-wow-leak-2024",
      category: "core",
      icon: "fa-solid fa-unlock-keyhole",
      date: "September 2024",
      title: "The Turtle WoW Core & Git Repository Leak",
      paragraphs: [
        "In September 2024, a historically significant leak occurred when a comprehensive Git repository dump containing Turtle WoW's proprietary server-side and client-side code (up to version 1.17) was published online and heavily mirrored across GitHub and RaGEZONE.",
        "The leak effectively democratized years of custom \"Classic+\" development, enabling other developers to spin up rival variants and allowing players to run offline single-player repacks. Concurrently, security advisories warned the community that certain client patching systems and Warden anti-cheat vulnerabilities in the leaked files could be manipulated to execute remote code payloads."
      ],
      tag: "Source Leak"
    },
    {
      id: "event-stormforge-shutdown-2026",
      category: "web",
      icon: "fa-solid fa-scale-balanced",
      date: "May 14, 2026",
      title: "The Shutdown of Stormforge",
      paragraphs: [
        "Stormforge officially shut down on May 14, 2026, following direct legal intervention from Blizzard Entertainment. Occurring in tandem with the massive Turtle WoW legal crackdown, the closure ended over four years of highly regarded emulation services.",
        "Formed as a landmark merger between the Tauri and Atlantiss development teams, Stormforge combined Tauri's industry-leading Mists of Pandaria (MoP) core architecture with Atlantiss's highly optimized The Burning Crusade (TBC) framework, widely recognized by the community for achieving some of the highest scripting quality in the scene."
      ],
      tag: "Legal Milestone"
    },
    {
      id: "event-turtle-wow-shutdown-2026",
      category: "web",
      icon: "fa-solid fa-gavel",
      date: "May 15, 2026",
      title: "The Shutdown of Turtle WoW",
      paragraphs: [
        "The popular custom \"Classic+\" private server Turtle WoW officially shut down on May 15, 2026, concluding nearly eight years of operation after a major federal copyright infringement lawsuit in California (Blizzard Entertainment, Inc. v. Turtle Wow).",
        "The lawsuit uniquely escalated by leveraging the RICO Act against individual developers and community managers while aggressively subpoenaing Discord, hosts, and payment processors. After the court ruled in Blizzard's favor on April 13, 2026, Turtle WoW agreed to a binding permanent injunction and permanently closed its servers."
      ],
      tag: "Legal Milestone"
    },
    {
      id: "event-bfa-havencore-2026",
      category: "core",
      icon: "fa-solid fa-server",
      date: "July 7, 2026",
      title: "WoW Haven Announces BFA-HavenCore",
      paragraphs: [
        "Hex and the WoW Haven team officially announced their first major open-source project: HavenCore BFA. After months of maintaining the project, fixing core issues, improving scripts, and polishing gameplay, the repository was made fully open-source to the public.",
        "Aiming to build one of the most complete and Blizzlike Battle for Azeroth emulators, the team established open collaboration while working toward launching a future polished BFA server, dedicating a special thanks to the WMC community for their ongoing support and motivation."
      ],
      tag: "Core Emulators",
      githubRepo: "Hextv/BFA-HavenCore"
    },
    {
      id: "event-warcraftxl-2026",
      category: "tools",
      icon: "fa-solid fa-wand-magic-sparkles",
      date: "July 11, 2026",
      title: "IThorgrim and his team announce WarcraftXL",
      paragraphs: [
        "IThorgrim and his team introduced WarcraftXL, a revolutionary modular client patcher that allows the Wrath of the Lich King (3.3.5a) client to natively run assets and technologies from modern WoW expansions up to Midnight without manual backporting.",
        "Featuring simple drag-and-drop translation of modern file formats (M2, BLP, WMO, ADT, WDT, WDL), the project supports modern particle systems, ribbons, grass physics, and wind effects while utilizing an open module ecosystem inspired by AzerothCore."
      ],
      tag: "Client Modding",
      githubRepo: "WarcraftXL/wxl-core"
    }
],

  blog: [
    {
      id: "blog-1",
      title: "Welcome to SourceAzeroth",
      author: "Hex",
      date: "July 25, 2026",
      paragraphs: [
        "SourceAzeroth was created to document and preserve the history of WoW emulation, custom core development, and community tools.",
        "As the modding scene continues to evolve, keeping track of major milestones, framework shifts, and client tools becomes vital. Stay tuned for developer insights, architectural breakdowns, and updates across our projects!"
      ]
    }
  ]
};
