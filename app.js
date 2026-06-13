'use strict';

// ─────────────────────────────────────────────
//  PRINTING IDENTIFICATION DATABASE
//  300+ RPG titles across all major game lines
// ─────────────────────────────────────────────
const PRINT_GUIDES = {

  // ══════════════════════════════════════════
  //  OD&D ORIGINAL (1974)
  // ══════════════════════════════════════════
  "dungeons & dragons": {
    system: "OD&D", publisher: "TSR",
    tips: [
      { title: "Woodgrain box vs white box", text: "The very first printing came in a brown woodgrain-patterned box (late 1973/early 1974) and is extremely rare. The white cardboard box replaced it almost immediately. A woodgrain box is a top-tier collector's item." },
      { title: "Booklet cover fonts", text: "1st printing booklets use a simple sans-serif font on plain covers with no interior art credits. Later printings added art credits and revised cover layouts." },
      { title: "Copyright notice", text: "The 1st printing reads copyright 1974 with no additional printing notice. Check all three booklets — Men & Magic, Monsters & Treasure, and Underworld & Wilderness Adventures — they should all match era." },
      { title: "Price on box", text: "The original set was priced at $10.00. The box should still show the printed base price even if stickers have been added over it." }
    ]
  },
  "greyhawk supplement i": {
    system: "OD&D", publisher: "TSR",
    tips: [
      { title: "Supplement I identifier", text: "Cover reads 'Supplement I: Greyhawk'. The 1st printing (1975) has a plain tan/orange cover. Later printings changed the cover color and layout slightly." },
      { title: "Interior paper", text: "1st printing uses off-white newsprint-style paper. Later printings used brighter white stock with better print quality." },
      { title: "ISBN and price", text: "No ISBN on early printings. Cover price $5.00 on the earliest copies. ISBNs appear only on later printings." }
    ]
  },
  "blackmoor supplement ii": {
    system: "OD&D", publisher: "TSR",
    tips: [
      { title: "Supplement II identifier", text: "Cover reads 'Supplement II: Blackmoor'. The 1st printing (1975) has a simple illustrated cover. Cover price $5.00 on earliest copies." },
      { title: "Temple of the Frog content", text: "The 1st printing contains the original Temple of the Frog adventure with the unrevised dungeon layout — collectors specifically seek this version." },
      { title: "Copyright and ISBN", text: "1975 copyright. No ISBN on early printings. Later printings added ISBN and revised the back cover description." }
    ]
  },
  "eldritch wizardry supplement iii": {
    system: "OD&D", publisher: "TSR",
    tips: [
      { title: "Censored vs uncensored cover", text: "The original cover featured a nude female figure on an altar. This was quickly revised to a censored version. An uncensored cover immediately identifies an early printing and commands a significant collector premium." },
      { title: "Copyright page", text: "1976 copyright. No ISBN on earliest printings. Cross-reference with the cover art version to confirm printing era." }
    ]
  },
  "gods demigods heroes supplement iv": {
    system: "OD&D", publisher: "TSR",
    tips: [
      { title: "Licensed content", text: "The most valuable printings include the Cthulhu Mythos and Elric/Melnibone pantheons — content removed after licensing disputes. Check the table of contents for these sections." },
      { title: "Page count indicator", text: "The original printings with licensed content are longer than revised printings. A noticeably thicker copy may indicate the complete unrevised version." },
      { title: "Cover price", text: "1st printing (1976) shows $5.00. Sticker prices may obscure the original printed price." }
    ]
  },

  // ══════════════════════════════════════════
  //  AD&D 1ST EDITION — CORE BOOKS
  // ══════════════════════════════════════════
  "player's handbook": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "Back cover price", text: "The 1st printing lists $9.95 on the back cover. The 2nd printing shows $10.00, and later printings rose to $12.00 and higher. This is the single fastest check." },
      { title: "Number line on copyright page", text: "From the 3rd printing onward, a descending number line appears (e.g. '10 9 8 7 6 5 4 3'). The lowest number shown is the printing. No number line means 1st or 2nd printing — cross-check with cover price." },
      { title: "TSR logo and cover art", text: "The 1st and 2nd printings use the original Trampier cover without the revised TSR logo badge. A badge added to the lower-right corner of the cover indicates the 4th printing or later." },
      { title: "Spine text", text: "The earliest printings spell out 'ADVANCED DUNGEONS & DRAGONS' in full on the spine. Later printings abbreviated this to 'AD&D'." }
    ]
  },
  "dungeon master's guide": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "Back cover price", text: "The 1st printing shows $12.00. Later printings show $15.00 and then higher. The 1st printing is the only one without an ISBN on the back cover." },
      { title: "Number line", text: "Check the copyright page for a descending number line. The 1st and 2nd printings have none; printings 3 onward include it. The lowest digit is the printing number." },
      { title: "Art credits page layout", text: "The 1st printing lists art credits in a single column on page 4. Later printings changed this to two columns." },
      { title: "Erol Otus cover", text: "All 1st edition DMG printings use the Erol Otus cover. A different cover means a different edition entirely." }
    ]
  },
  "monster manual": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "Cover price", text: "The 1st printing is priced at $9.95, 2nd printing $10.00. Later printings show $12.00 and above. No ISBN appears on the earliest printings." },
      { title: "Number line", text: "A number line was added starting with the 3rd printing. No number line plus $9.95 cover price strongly suggests a 1st printing." },
      { title: "Interior paper stock", text: "The earliest printings used slightly off-white paper. Bright white interior pages indicate a later printing or reprint." }
    ]
  },
  "monster manual ii": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "1983 publication", text: "Published in 1983. All printings have ISBNs since this postdates early TSR publishing. Use the copyright page number line — lowest digit equals printing number." },
      { title: "Jeff Easley cover", text: "All printings use the Jeff Easley cover. The number line is the most reliable identifier for this book." }
    ]
  },
  "fiend folio": {
    system: "AD&D 1st Edition", publisher: "TSR / Games Workshop",
    tips: [
      { title: "UK vs US publisher", text: "Originally published by Games Workshop in the UK in 1981, then by TSR in the US. UK editions show a pound sterling price; US editions show USD. The UK printing is generally considered the 1st printing." },
      { title: "Number line", text: "US TSR printings include a number line from the 1st US printing onward. The lowest digit identifies the printing number." },
      { title: "Don Turnbull foreword", text: "The UK first printing includes a foreword by Don Turnbull. Some US printings omitted this. Check the opening pages." }
    ]
  },
  "unearthed arcana": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "1st printing errors", text: "The 1st printing is notorious for printing errors and cutoff text. A book with visible errors is almost certainly a 1st printing." },
      { title: "Cover price", text: "The 1st printing lists $12.00. Later printings show $15.00." },
      { title: "Page 124 test", text: "A well-known 1st printing error appears on page 124 where a table is misaligned or cut off. A complete, clean table suggests a later corrected printing." }
    ]
  },
  "oriental adventures": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "1985 first printing", text: "Published in 1985. Shows $15.00 on the back cover. Jeff Easley cover art on all printings." },
      { title: "Number line", text: "Copyright page number line — lowest digit equals printing number." }
    ]
  },
  "dungeoneer's survival guide": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "1986 first printing", text: "Published in 1986. Shows $15.00 on the back. All printings use the same Jeff Easley cover." },
      { title: "Number line", text: "Use the copyright page number line to identify printing. This book had fewer printings than core books." }
    ]
  },
  "wilderness survival guide": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "1986 companion to Dungeoneer's Guide", text: "Published in 1986 alongside the Dungeoneer's Survival Guide. $15.00 on back cover for 1st printing." },
      { title: "Number line", text: "Copyright page number line identifies printing. Limited print runs compared to core books." }
    ]
  },
  "deities & demigods": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "Licensed content test", text: "The most valuable printing includes Cthulhu Mythos and Elric/Melnibone pantheons removed after licensing disputes. Check the table of contents for these sections." },
      { title: "Page count", text: "Printings with full licensed content run 144 pages. The revised printing without the licensed pantheons runs 128 pages. Page count is an instant identifier." },
      { title: "Cover price", text: "The 1st printing shows $12.00. The revised shorter edition was initially priced at $10.00." }
    ]
  },
  "legends & lore": {
    system: "AD&D 1st/2nd Edition", publisher: "TSR",
    tips: [
      { title: "Deities & Demigods rename", text: "Legends & Lore is a revised and renamed version of Deities & Demigods. The 1st edition retitle appeared in 1984. The 2nd edition Legends & Lore (1990) is a further revision with different art." },
      { title: "Edition identifier", text: "Check the cover art and copyright year. The 1984 edition uses older TSR art; the 1990 edition has 2nd edition era production values." }
    ]
  },

  // ══════════════════════════════════════════
  //  AD&D 1ST EDITION — MODULES
  // ══════════════════════════════════════════
  "keep on the borderlands": {
    system: "AD&D / Basic D&D", publisher: "TSR",
    tips: [
      { title: "Module code B2", text: "The earliest printings were included in the Basic D&D boxed set before standalone copies were sold. A copy without a module code on the cover is one of the very earliest versions." },
      { title: "Cover variants", text: "Several cover variants exist. Original printings lack the TSR logo badge. A badge on the lower-right corner indicates a later printing." },
      { title: "Back cover price", text: "Early printings show $4.99 or $5.49. Later printings show $6.50 and higher. No barcode on the earliest copies." }
    ]
  },
  "tomb of horrors": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "Module code S1", text: "The original 1978 tournament module had a plain cardstock cover with minimal art. The retail 1st printing (1978) is different from the later 1981 revision with new cover art." },
      { title: "Map format", text: "The earliest printings included a separate color map sheet. Maps printed inside the module itself indicate a later printing." }
    ]
  },
  "against the giants": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "Individual vs combined", text: "Originally three separate modules (G1, G2, G3) published in 1978. A combined G1-2-3 edition was published in 1981. Individual modules are generally more valuable." },
      { title: "Cover identification", text: "G1 has an orange cover, G2 and G3 have different color covers. The combined edition uses unified cover art." }
    ]
  },
  "queen of the spiders": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "GDQ1-7 compilation (1986)", text: "This super-module compiles the entire Giant-Drow-Demonweb series. It is not a first printing of any individual module — individual original modules are typically more valuable." },
      { title: "Number line", text: "Use the copyright page number line. Jeff Easley cover on all printings." }
    ]
  },
  "ravenloft": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "Module code I6", text: "Ravenloft carries module code I6. The 1st printing (1983) has a distinctive cover with Count Strahd. Check for the original Keith Parkinson cover art." },
      { title: "Poster map completeness", text: "The original included a large poster map of Castle Ravenloft. A copy with the original unfolded map in good condition is significantly more valuable." },
      { title: "Back cover", text: "Early printings show a lower price. Check for the TSR catalog number and compare cover price to known print runs." }
    ]
  },
  "expedition to the barrier peaks": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "Module code S3", text: "Originally a 1976 tournament module, the retail version (1980) has module code S3. The cover features a science fiction spaceship setting unique among early D&D modules." },
      { title: "Illustration booklet", text: "The original included a separate illustration booklet. A complete copy with the illustration booklet intact is worth more than one missing it." }
    ]
  },
  "lost caverns of tsojcanth": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "Module code S4", text: "Module code S4. Originally a 1976 tournament module. The retail version was published in 1982 with two booklets and maps." },
      { title: "Two-booklet format", text: "The original retail version comes as two stapled booklets (adventure and monsters/magic) in a folder. A complete two-booklet set is the full original product." }
    ]
  },
  "white plume mountain": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "Module code S2", text: "S2 module, published 1979. One of the most popular early TSR modules. The cover price and number line on the copyright page identify the printing." },
      { title: "Cover art", text: "Original cover has a distinctive illustration of the eponymous mountain. Compare cover price to known pricing tiers for this module." }
    ]
  },
  "palace of the silver princess": {
    system: "Basic D&D", publisher: "TSR",
    tips: [
      { title: "Orange vs green cover", text: "The original orange-cover version (1981) was recalled almost immediately due to controversial interior art and replaced with a green-cover version. The orange cover version is extremely rare and highly sought after." },
      { title: "Module code B3", text: "Both versions carry module code B3. The cover color is the instant identifier — orange equals the recalled version, green equals the replacement." }
    ]
  },

  // ══════════════════════════════════════════
  //  AD&D 2ND EDITION — CORE BOOKS
  // ══════════════════════════════════════════
  "player's handbook 2nd edition": {
    system: "AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "Original (1989) vs revised (1995)", text: "The original 1989 PHB has a Jeff Easley cover. The 1995 Revised edition has different cover art and updated rules. These are distinct products — check the copyright year." },
      { title: "Black spine indicator", text: "Early 2nd edition printings often have a black spine with gold text. Later printings shifted to a different spine treatment." },
      { title: "ISBN check", text: "Original 1989 PHB: ISBN 0-88038-716-5. Revised 1995: different ISBN. Always check the copyright page." }
    ]
  },
  "dungeon master guide 2nd edition": {
    system: "AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "Original (1989) vs revised (1995)", text: "The original 1989 DMG and the 1995 revised edition have different cover art and content. Original ISBN: 0-88038-729-7." },
      { title: "Number line", text: "Copyright page number line identifies printing for the 1989 edition. Lowest digit = printing number." }
    ]
  },
  "monstrous compendium": {
    system: "AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "Loose-leaf binder format", text: "The original Monstrous Compendium (1989) came as loose sheets in a three-ring binder — completely unlike any other RPG product. A complete copy needs the binder and all original sheets." },
      { title: "Volume I vs II", text: "Volume I and Volume II (both 1989) use the same binder format. Later the Monstrous Manual (1993) replaced this as a traditional hardcover." },
      { title: "Completeness value", text: "Loose-leaf format means sheets are frequently missing. A complete set with all original sheets in the original binder is significantly more valuable than an incomplete copy." }
    ]
  },
  "monstrous manual": {
    system: "AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1993 hardcover replacement", text: "The Monstrous Manual (1993) replaced the loose-leaf Monstrous Compendium. The 1st printing has Tony DiTerlizzi cover art." },
      { title: "Number line", text: "Copyright page number line — this book had many printings. 1st printing has all digits in the sequence present." }
    ]
  },
  "complete fighter's handbook": {
    system: "AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "PHBR1 series", text: "First in the Player's Handbook Rules series (PHBR1). Published 1989. The series has consistent cover design elements. Check the PHBR number on the cover to identify which volume you have." },
      { title: "Number line", text: "Copyright page number line identifies printing." }
    ]
  },
  "complete thief's handbook": {
    system: "AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "PHBR2 series", text: "Second in the Player's Handbook Rules series (PHBR2). Published 1989. Check for PHBR2 designation on cover." },
      { title: "Number line", text: "Copyright page number line. This supplement had good print runs due to popularity of the thief class." }
    ]
  },
  "complete priest's handbook": {
    system: "AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "PHBR3 identifier", text: "Third in the PHBR series. Published 1990. Check the PHBR3 designation on the cover or spine." }
    ]
  },
  "complete wizard's handbook": {
    system: "AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "PHBR4 identifier", text: "Fourth in the PHBR series. Published 1990. The series is easily confused at a distance — always check the PHBR number." }
    ]
  },

  // ══════════════════════════════════════════
  //  D&D BASIC / BECMI / RULES CYCLOPEDIA
  // ══════════════════════════════════════════
  "dungeons & dragons basic set": {
    system: "D&D Basic", publisher: "TSR",
    tips: [
      { title: "Holmes vs Moldvay vs Mentzer", text: "Three completely different Basic Sets exist: Holmes (1977-1979, blue cover), Moldvay (1981, red Otus cover), Mentzer (1983, red Elmore cover). These are entirely different products." },
      { title: "Holmes Basic", text: "Blue cover, edited by J. Eric Holmes. The 1st printing (1977) differs from later printings in cover art details and lacks certain interior content." },
      { title: "Moldvay Basic", text: "Red cover with Erol Otus art, 1981. Use the number line on the copyright page." },
      { title: "Mentzer Basic", text: "Red cover with Larry Elmore art, 1983. Came with an introductory solo adventure booklet. Both booklets should be present for a complete copy." }
    ]
  },
  "dungeons & dragons expert set": {
    system: "D&D Basic / Expert", publisher: "TSR",
    tips: [
      { title: "Cook/Marsh (1981) vs Mentzer (1983)", text: "Cook/Marsh Expert has a blue Otus cover (1981). Mentzer Expert has a Larry Elmore blue dragon cover (1983). The copyright year immediately distinguishes them." }
    ]
  },
  "rules cyclopedia": {
    system: "D&D BECMI", publisher: "TSR",
    tips: [
      { title: "1991 BECMI compilation", text: "Compiled the BECMI rules into a single hardcover. All printings have the same cover art. Use the copyright page number line to identify printing." },
      { title: "DM Screen bundle", text: "Some copies were sold with a separate DM Screen accessory. A copy still shrinkwrapped with the screen is worth considerably more." }
    ]
  },

  // ══════════════════════════════════════════
  //  D&D 3RD / 3.5 / 4TH / 5TH EDITIONS
  // ══════════════════════════════════════════
  "player's handbook 3rd edition": {
    system: "D&D 3rd Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "3.0 vs 3.5 distinction", text: "The 3.0 edition (2000) and the revised 3.5 edition (2003) are distinct products with different cover art. The 3.0 cover features a warrior; 3.5 has an updated composition. The copyright year instantly distinguishes them." },
      { title: "Number line", text: "WotC used a number line on the copyright page. 1st printing has all digits in the sequence." }
    ]
  },
  "player's handbook 5th edition": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "Alternate covers", text: "WotC released multiple alternate covers including Target-exclusive, hobby store-exclusive, and anniversary editions. These are limited print runs that command premiums over the standard cover." },
      { title: "Errata versions", text: "Several printings corrected rules errata. Some collectors specifically want the 1st printing (2014) for its original unrevised stat blocks. Number line on copyright page." }
    ]
  },
  "dungeon master's guide 5th edition": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "Alternate covers exist", text: "Hobby store exclusive alternate covers were produced. Check the cover art to determine which version you have." },
      { title: "Number line", text: "Copyright page number line. 1st printing 2014, all digits present." }
    ]
  },
  "monster manual 5th edition": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "Alternate covers", text: "Hobby store exclusive alternate cover editions exist. The standard cover is the most common." },
      { title: "Number line", text: "Copyright page number line. 1st printing 2014. Later printings corrected minor stat errors." }
    ]
  },
  "xanathar's guide to everything": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2017 first printing", text: "Published November 2017. Alternate hobby store covers were produced. The standard cover features Xanathar the beholder. Number line on copyright page." }
    ]
  },
  "tasha's cauldron of everything": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2020 first printing", text: "Published November 2020. Standard and alternate hobby store covers exist. Number line on copyright page." }
    ]
  },

  // ══════════════════════════════════════════
  //  CALL OF CTHULHU — ALL EDITIONS
  // ══════════════════════════════════════════
  "call of cthulhu": {
    system: "Call of Cthulhu", publisher: "Chaosium",
    tips: [
      { title: "ISBN presence", text: "The true 1st printing of the 1st edition (1981) has no ISBN. An ISBN means 2nd printing or later." },
      { title: "Cover art evolution", text: "The cover has been redesigned for each major edition. Compare the cover art to known edition images — the 1st edition, 5th edition, 6th edition, and 7th edition all have distinct covers." },
      { title: "Interior paper", text: "The earliest printings used cream or off-white paper. Later print runs switched to brighter white stock." },
      { title: "Copyright page wording", text: "The 1st printing states 'First Printing' explicitly. Later printings added a number line." }
    ]
  },
  "masks of nyarlathotep": {
    system: "Call of Cthulhu", publisher: "Chaosium",
    tips: [
      { title: "1984 original edition", text: "The original 1984 edition has a specific cover composition. Later extensively revised editions have different covers. Check the copyright year to identify which version you have." },
      { title: "Handout completeness", text: "Masks is famous for its extensive handout package. A complete copy with all original handouts intact and unpunched is worth significantly more than an incomplete copy." },
      { title: "Separate map sheets", text: "The original included separate map sheets frequently missing from used copies." }
    ]
  },
  "shadows of yog-sothoth": {
    system: "Call of Cthulhu", publisher: "Chaosium",
    tips: [
      { title: "1982 first printing", text: "One of the earliest CoC supplements. The 1st printing (1982) lacks a barcode. A copy without a barcode on the back is almost certainly an early printing." }
    ]
  },
  "horror on the orient express": {
    system: "Call of Cthulhu", publisher: "Chaosium",
    tips: [
      { title: "Original 1991 box set", text: "The original Horror on the Orient Express was a large box set published in 1991. It contained multiple booklets, props, and handouts. Completeness is critical — individual components are frequently missing." },
      { title: "2014 Kickstarter edition", text: "A massively expanded 2-volume hardcover edition was produced via Kickstarter in 2014. This is a completely different product from the 1991 box set — check the year and format." }
    ]
  },
  "arkham horror supplement": {
    system: "Call of Cthulhu", publisher: "Chaosium",
    tips: [
      { title: "1987 RPG supplement vs board game", text: "The original Arkham Horror (1987) was a Chaosium RPG supplement — not the Fantasy Flight board game of the same name. Ensure you have the correct product. Check for 'Chaosium' and 'Basic Roleplaying' on the cover." }
    ]
  },
  "dreamlands": {
    system: "Call of Cthulhu", publisher: "Chaosium",
    tips: [
      { title: "1986 first edition", text: "The original Dreamlands supplement (1986) covers Lovecraft's dream cycle. Multiple revised editions exist with updated rules. Compare copyright dates — the 1986 edition is the most collectible." }
    ]
  },
  "cthulhu by gaslight": {
    system: "Call of Cthulhu", publisher: "Chaosium",
    tips: [
      { title: "1986 vs 1988 editions", text: "The 1st printing (1986) has a different cover from the 1988 revised edition. Copyright year is the key identifier." }
    ]
  },
  "the fungi from yuggoth": {
    system: "Call of Cthulhu", publisher: "Chaosium",
    tips: [
      { title: "1984 campaign module", text: "One of the earliest CoC campaign modules, published 1984. Later reprinted as 'Day of the Beast'. The original title on the cover is the simplest identifier." }
    ]
  },

  // ══════════════════════════════════════════
  //  SHADOWRUN — ALL EDITIONS
  // ══════════════════════════════════════════
  "shadowrun": {
    system: "Shadowrun", publisher: "FASA",
    tips: [
      { title: "Cover art version", text: "The 1st edition 1st printing features a specific urban street scene cover. FASA revised the cover art for the 2nd printing. Compare figures and cityscape." },
      { title: "Catalog number", text: "FASA catalog number 7001 on the 1st edition 1st printing — the most reliable identifier." },
      { title: "Spiral vs perfect bound", text: "Some very early copies of the 1st printing were spiral-bound. A spiral-bound copy is almost certainly a 1st printing." },
      { title: "Copyright year", text: "1st printing copyright 1989. 2nd printing 1990. Cross-reference with catalog number." }
    ]
  },
  "shadowrun 2nd edition": {
    system: "Shadowrun", publisher: "FASA",
    tips: [
      { title: "1992 release", text: "The 2nd edition (1992) has significantly revised rules and new cover art. FASA catalog number 7901." }
    ]
  },
  "shadowrun 3rd edition": {
    system: "Shadowrun", publisher: "FASA",
    tips: [
      { title: "1998 final FASA edition", text: "The 3rd edition (1998) was FASA's final Shadowrun edition before the line was sold. Check copyright year." }
    ]
  },
  "shadowrun 4th edition": {
    system: "Shadowrun", publisher: "FanPro / Catalyst",
    tips: [
      { title: "FanPro vs Catalyst printings", text: "Published by FanPro (2005) then Catalyst Game Labs. FanPro and Catalyst printings have different copyright notices and logos on the spine." },
      { title: "20th Anniversary edition", text: "A 20th Anniversary Edition (2009) by Catalyst has different cover art from the original 4th edition." }
    ]
  },
  "shadowrun 5th edition": {
    system: "Shadowrun", publisher: "Catalyst Game Labs",
    tips: [
      { title: "2013 Catalyst edition", text: "Published 2013. Limited alternate covers exist. Check back cover for edition information and number line for printing." }
    ]
  },
  "shadowrun 6th edition": {
    system: "Shadowrun", publisher: "Catalyst Game Labs",
    tips: [
      { title: "2019 Sixth World edition", text: "Published 2019 as 'Shadowrun: Sixth World'. Multiple limited editions with alternate covers. The 1st printing has specific errata in the combat chapter." }
    ]
  },

  // ══════════════════════════════════════════
  //  WARHAMMER FANTASY ROLEPLAY — ALL EDITIONS
  // ══════════════════════════════════════════
  "warhammer fantasy roleplay": {
    system: "Warhammer Fantasy Roleplay", publisher: "Games Workshop / Hogshead",
    tips: [
      { title: "Publisher identifies era", text: "Games Workshop published the 1st edition 1st printing in 1986. Later printings were handled by Hogshead Publishing. The publisher name on spine and cover is the first thing to check." },
      { title: "John Sibbick cover art", text: "The original GW printing features the iconic John Sibbick cover. Hogshead reprints used the same art with slightly different cover layout." },
      { title: "Price and barcode", text: "The GW printing has a UK price only. Hogshead printings added international pricing. Absence of any barcode indicates a very early copy." }
    ]
  },
  "warhammer fantasy roleplay 2nd edition": {
    system: "Warhammer Fantasy Roleplay", publisher: "Black Industries / Green Ronin",
    tips: [
      { title: "2005 Black Industries edition", text: "Published by Black Industries (a GW imprint) in 2005. Green Ronin handled North American distribution. Check the publisher on the spine." }
    ]
  },
  "warhammer fantasy roleplay 4th edition": {
    system: "Warhammer Fantasy Roleplay", publisher: "Cubicle 7",
    tips: [
      { title: "2018 Cubicle 7 edition", text: "Published by Cubicle 7 in 2018. Standard and collector's editions exist. A slipcase edition with additional booklets was also produced — check for the slipcase." }
    ]
  },

  // ══════════════════════════════════════════
  //  VAMPIRE & WORLD OF DARKNESS — WHITE WOLF
  // ══════════════════════════════════════════
  "vampire the masquerade": {
    system: "Vampire: The Masquerade", publisher: "White Wolf",
    tips: [
      { title: "1st edition black cover (1991)", text: "The original 1st edition has a solid black cover with minimal text. White Wolf catalog number WW 2000, copyright 1991." },
      { title: "2nd edition (1992)", text: "Red tint cover with vampire imagery. Catalog number WW 2003, copyright 1992." },
      { title: "Revised edition (1998)", text: "Different cover with updated rules. Catalog number WW 2300. The three editions are easily distinguished by cover art and copyright year." },
      { title: "V20 Anniversary Edition (2011)", text: "Large-format deluxe hardcover. Kickstarter backer editions have slightly different covers from retail copies." }
    ]
  },
  "vampire the masquerade 5th edition": {
    system: "Vampire: The Masquerade", publisher: "Modiphius / Renegade",
    tips: [
      { title: "Modiphius (2018) vs Renegade", text: "Published by Modiphius in 2018. Publishing rights transferred to Renegade Game Studios for later printings. Check the publisher on the spine." }
    ]
  },
  "werewolf the apocalypse": {
    system: "World of Darkness", publisher: "White Wolf",
    tips: [
      { title: "Three editions", text: "1st edition (1992, catalog WW 3000), 2nd edition (1994, catalog WW 3003), and Revised (2000). Check cover art and copyright year to distinguish." }
    ]
  },
  "mage the ascension": {
    system: "World of Darkness", publisher: "White Wolf",
    tips: [
      { title: "Three editions", text: "1st edition (1993, catalog WW 4000), 2nd edition (1995), and Revised (2000). The Phil Hale cover art on the 1st edition is distinctive." }
    ]
  },
  "wraith the oblivion": {
    system: "World of Darkness", publisher: "White Wolf",
    tips: [
      { title: "1994 first edition", text: "Distinctive dark cover art. Catalog WW 6000. One of the rarer core World of Darkness 1st edition books. Copyright 1994." }
    ]
  },
  "changeling the dreaming": {
    system: "World of Darkness", publisher: "White Wolf",
    tips: [
      { title: "1995 first edition", text: "The last major classic WoD game. Distinctive colorful cover unlike other WoD books. Catalog WW 7000. 2nd edition (1997) is more common." }
    ]
  },
  "hunter the reckoning": {
    system: "World of Darkness", publisher: "White Wolf",
    tips: [
      { title: "1999 first edition", text: "Published 1999 during the late classic WoD era. White Wolf catalog number. The 2nd edition Revised and the new World of Darkness Hunter: The Vigil are entirely different products." }
    ]
  },
  "world of darkness": {
    system: "New World of Darkness", publisher: "White Wolf",
    tips: [
      { title: "Classic vs new WoD", text: "The 'World of Darkness' core book (2004) launched the New World of Darkness line — it is a completely different product from the classic WoD line that began in 1991. New WoD was later rebranded as 'Chronicles of Darkness'." }
    ]
  },

  // ══════════════════════════════════════════
  //  TRAVELLER — ALL PUBLISHERS
  // ══════════════════════════════════════════
  "traveller": {
    system: "Traveller", publisher: "GDW",
    tips: [
      { title: "Little Black Books (LBBs)", text: "The original Traveller (1977) came as three small black booklets in a black box — the famous 'Little Black Books'. A complete boxed set with all three booklets is the most valuable format." },
      { title: "Box variants", text: "The original box has a specific design. Later reprintings changed the box art. Check the box copyright year." },
      { title: "GDW catalog number 0201", text: "The original set carries GDW catalog number 0201. This is the most reliable identifier for the original printing." }
    ]
  },
  "megatraveller": {
    system: "Traveller", publisher: "GDW",
    tips: [
      { title: "1987 revised edition", text: "MegaTraveller (1987) is a revised and expanded version with a different format from the LBBs. Check copyright year and GDW catalog number." }
    ]
  },
  "traveller the new era": {
    system: "Traveller", publisher: "GDW",
    tips: [
      { title: "1993 GDW final edition", text: "Traveller: The New Era (1993) was a dramatic rules revision and one of GDW's last major releases before the company closed." }
    ]
  },
  "mongoose traveller": {
    system: "Traveller", publisher: "Mongoose Publishing",
    tips: [
      { title: "1st vs 2nd Mongoose edition", text: "Mongoose published a 1st edition Traveller in 2008 and a revised 2nd edition in 2016. The 2nd edition is a significant revision. Check the copyright year." }
    ]
  },

  // ══════════════════════════════════════════
  //  RUNEQUEST — ALL PUBLISHERS
  // ══════════════════════════════════════════
  "runequest": {
    system: "RuneQuest", publisher: "Chaosium / Avalon Hill / Design Mechanism",
    tips: [
      { title: "1st edition (1978)", text: "The original RuneQuest is a slim softcover. Very few 1st printings survive in good condition. 1978 copyright with Chaosium's early catalog number." },
      { title: "2nd edition (1979)", text: "Significantly expanded rules, different cover. Chaosium catalog number 2002." },
      { title: "3rd edition Avalon Hill (1984)", text: "Published by Avalon Hill — not Chaosium — with a very different cover and boxed format. The publisher name is the instant identifier." },
      { title: "RuneQuest: Roleplaying in Glorantha (2018)", text: "The modern Chaosium edition. A large hardcover with all-new cover art and revised rules." }
    ]
  },
  "glorantha the second age": {
    system: "RuneQuest", publisher: "Mongoose Publishing",
    tips: [
      { title: "Mongoose RuneQuest era", text: "Mongoose Publishing licensed RuneQuest and published a range of books set in Glorantha (Second Age) starting around 2006. These have the Mongoose logo and are distinct from Chaosium and Avalon Hill editions." }
    ]
  },

  // ══════════════════════════════════════════
  //  PALLADIUM BOOKS
  // ══════════════════════════════════════════
  "palladium fantasy role-playing game": {
    system: "Palladium Fantasy", publisher: "Palladium Books",
    tips: [
      { title: "Saddle-stitched 1st edition (1983)", text: "The original 1st edition was a saddle-stitched (stapled) softcover — distinct from all later perfect-bound editions. Saddle-stitched binding equals 1st edition." },
      { title: "2nd edition (1984) onward", text: "Switched to perfect-bound. Multiple revised printings exist. Check copyright year and Palladium catalog number on the back cover." }
    ]
  },
  "rifts": {
    system: "Rifts", publisher: "Palladium Books",
    tips: [
      { title: "1st edition (1990)", text: "Original Rifts Core Rulebook (1990). Kevin Long cover art. Palladium catalog number 800." },
      { title: "Multiple printings since 1990", text: "In continuous print since 1990. Copyright page lists printing number and revision history." },
      { title: "Ultimate Edition (2005)", text: "The Rifts Ultimate Edition is a substantially revised and expanded version with different cover art — a separate product from the original." }
    ]
  },
  "teenage mutant ninja turtles rpg": {
    system: "Palladium / TMNT", publisher: "Palladium Books",
    tips: [
      { title: "1985 pre-cartoon first printing", text: "The TMNT RPG (1985) predates the cartoon and toy craze. Early printings are significantly rarer and command high prices." },
      { title: "Cover variants by era", text: "Multiple cover variants reflect different eras of TMNT popularity. The original 1985 cover has a specific composition distinct from later cartoon-era printings (1988-1992)." }
    ]
  },
  "heroes unlimited": {
    system: "Palladium / Heroes Unlimited", publisher: "Palladium Books",
    tips: [
      { title: "1st edition (1984) vs 2nd edition (1998)", text: "The 1st edition (1984) and the significantly revised 2nd edition (1998) have different cover art. Check copyright year and catalog number 526 for the 2nd edition." }
    ]
  },
  "robotech rpg": {
    system: "Robotech", publisher: "Palladium Books",
    tips: [
      { title: "1986 first printing", text: "Published 1986. Palladium catalog number 550. Mecha from the Macross saga on the cover. The original core book is the most collectible Robotech RPG product." }
    ]
  },
  "beyond the supernatural": {
    system: "Palladium / Beyond the Supernatural", publisher: "Palladium Books",
    tips: [
      { title: "1st edition (1987) vs 2nd edition (2005)", text: "The original 1987 edition and the 2005 2nd edition have very different covers and rules. Check copyright year." }
    ]
  },

  // ══════════════════════════════════════════
  //  STAR WARS RPG — WEST END GAMES
  // ══════════════════════════════════════════
  "star wars the roleplaying game": {
    system: "Star Wars RPG (D6)", publisher: "West End Games",
    tips: [
      { title: "1st edition (1987)", text: "WEG's original Star Wars RPG (1987). The D6 system. WEG catalog number 40001. This is the edition that popularized the Expanded Universe." },
      { title: "2nd edition (1992)", text: "Revised rules and different cover. WEG catalog number 40120." },
      { title: "2nd edition revised (1996)", text: "A further revision. Check the edition statement on the copyright page." },
      { title: "Out of print status", text: "WEG lost the Star Wars license in 1998 when they went bankrupt. All WEG Star Wars books are out of print and increasingly collectible." }
    ]
  },
  "star wars saga edition": {
    system: "Star Wars RPG (Saga)", publisher: "Wizards of the Coast",
    tips: [
      { title: "2007 WotC Saga edition", text: "WotC's final Star Wars RPG used the Saga system. Published 2007. The license expired in 2010 and the book went out of print. Number line on copyright page." }
    ]
  },

  // ══════════════════════════════════════════
  //  MARVEL & DC SUPERHERO RPGs
  // ══════════════════════════════════════════
  "marvel super heroes": {
    system: "Marvel Super Heroes", publisher: "TSR",
    tips: [
      { title: "Basic Set (1984)", text: "The original red box Basic Set (1984). TSR catalog number 6870. Includes cardboard counters and a map — completeness matters significantly." },
      { title: "Advanced Set (1986)", text: "The Advanced Set has a different box and expanded rules. A separate product from the Basic Set." }
    ]
  },
  "dc heroes": {
    system: "DC Heroes", publisher: "Mayfair Games",
    tips: [
      { title: "1st edition (1985) vs later editions", text: "The original DC Heroes (1985) has a specific cover featuring Superman. 2nd edition (1989) and 3rd edition (1993) have different covers. The 3rd edition was also sold as 'Blood of Heroes' after the DC license expired." }
    ]
  },
  "mutants & masterminds": {
    system: "Mutants & Masterminds", publisher: "Green Ronin",
    tips: [
      { title: "Three editions (2002, 2005, 2011)", text: "Published by Green Ronin. 1st edition (2002), 2nd edition (2005), and 3rd edition (2011) have distinct cover art. Check the edition statement on the cover." }
    ]
  },

  // ══════════════════════════════════════════
  //  GAMMA WORLD — ALL EDITIONS
  // ══════════════════════════════════════════
  "gamma world": {
    system: "Gamma World", publisher: "TSR / Wizards",
    tips: [
      { title: "1st edition box set (1978)", text: "Original TSR post-apocalyptic box set. Catalog number 7011. Contains booklets and maps." },
      { title: "2nd edition (1983)", text: "Revised rules and different box art. The box format changed significantly from the 1st edition." },
      { title: "Multiple editions exist", text: "Gamma World went through 7+ editions across multiple publishers. The 1st and 2nd edition TSR box sets are the most collectible." }
    ]
  },

  // ══════════════════════════════════════════
  //  TWILIGHT 2000 — GDW / FREE LEAGUE
  // ══════════════════════════════════════════
  "twilight 2000": {
    system: "Twilight 2000", publisher: "GDW / Free League",
    tips: [
      { title: "1st edition (1984)", text: "Original GDW box set. Catalog number 500." },
      { title: "2nd edition (1990)", text: "Completely revised rules and different box design. Check copyright year." },
      { title: "Free League edition (2021)", text: "A new edition from Free League Publishing (2021) with entirely different production. The 1984 and 1990 GDW editions are the collectible versions." }
    ]
  },

  // ══════════════════════════════════════════
  //  CYBERPUNK — R. TALSORIAN
  // ══════════════════════════════════════════
  "cyberpunk 2020": {
    system: "Cyberpunk", publisher: "R. Talsorian Games",
    tips: [
      { title: "Cyberpunk 2013 vs 2020", text: "The original edition was 'Cyberpunk 2013' (1988). The revised and expanded 2nd edition 'Cyberpunk 2020' (1990) is the most commonly collected edition. The title on the cover is the simplest identifier." },
      { title: "Cyberpunk RED (2020)", text: "A new edition published in 2020. Completely different rules and cover art from the 2020 edition." }
    ]
  },
  "cyberpunk red": {
    system: "Cyberpunk", publisher: "R. Talsorian Games",
    tips: [
      { title: "2020 publication", text: "Cyberpunk RED was published in 2020. Standard and Jumpstart Kit versions exist. The Jumpstart Kit is a smaller introductory product." }
    ]
  },

  // ══════════════════════════════════════════
  //  GURPS — STEVE JACKSON GAMES
  // ══════════════════════════════════════════
  "gurps basic set": {
    system: "GURPS", publisher: "Steve Jackson Games",
    tips: [
      { title: "Four editions (1986-2004)", text: "1st edition (1986, SJG 6000), 2nd edition (1987), 3rd edition (1988), and 4th edition (2004). The 4th edition split into two hardcover volumes (Characters and Campaigns). Format alone distinguishes the editions." },
      { title: "3rd edition revised", text: "The 3rd edition received extensive revision over its run. Check the copyright page for the printing and revision number." }
    ]
  },

  // ══════════════════════════════════════════
  //  PARANOIA — WEST END / MONGOOSE / FREE LEAGUE
  // ══════════════════════════════════════════
  "paranoia": {
    system: "Paranoia", publisher: "West End Games / Mongoose",
    tips: [
      { title: "1st edition WEG (1984)", text: "Original WEG edition with distinctive red/yellow cover. WEG catalog number 21001." },
      { title: "2nd edition WEG (1987)", text: "Revised rules. Check copyright year and catalog number." },
      { title: "Mongoose editions (2004+)", text: "Mongoose Publishing revived the line starting 2004 with completely different cover art and production values." },
      { title: "Red Clearance Edition (2017)", text: "Crowdfunded new edition from Mongoose with a modern redesign." }
    ]
  },

  // ══════════════════════════════════════════
  //  ROLEMASTER & MERP — ICE
  // ══════════════════════════════════════════
  "rolemaster": {
    system: "Rolemaster", publisher: "Iron Crown Enterprises",
    tips: [
      { title: "Arms Law & Claw Law origin (1980)", text: "The earliest Rolemaster product was Arms Law & Claw Law (1980). Check ICE catalog number and copyright year." },
      { title: "Rolemaster Standard System (RMSS) 1994", text: "The RMSS (1994) reorganized the game into multiple books. A significant rules revision distinct from earlier editions." }
    ]
  },
  "middle earth role playing": {
    system: "MERP", publisher: "Iron Crown Enterprises",
    tips: [
      { title: "1984 original box set", text: "Original MERP box set (1984). ICE catalog number 2000. Tolkien estate licensing makes all MERP products particularly collectible now that ICE is defunct." },
      { title: "ICE lost license in 1999", text: "ICE lost the Tolkien license in 1999. All MERP products are permanently out of print. Originals in good condition are increasingly valuable." }
    ]
  },

  // ══════════════════════════════════════════
  //  EARTHDAWN — FASA / REDBRICK
  // ══════════════════════════════════════════
  "earthdawn": {
    system: "Earthdawn", publisher: "FASA / Redbrick",
    tips: [
      { title: "FASA edition (1993-1999)", text: "Original FASA edition (1993). Catalog number 6000. FASA logo on the spine." },
      { title: "Redbrick edition (2009+)", text: "After FASA closed, the line went to Redbrick Limited. Redbrick editions have different cover art and the Redbrick logo on the spine." }
    ]
  },

  // ══════════════════════════════════════════
  //  BATTLETECH / MECHWARRIOR — FASA
  // ══════════════════════════════════════════
  "battletech": {
    system: "BattleTech", publisher: "FASA",
    tips: [
      { title: "BattleDroids 1st edition (1984)", text: "Originally 'BattleDroids' before a licensing dispute forced the name change. A BattleDroids copy is significantly rarer than BattleTech editions." },
      { title: "BattleTech 1st edition (1985)", text: "First BattleTech edition (1985). FASA catalog number 1604." },
      { title: "Catalyst Game Labs era", text: "After FASA closed, CGL took over. Modern BattleTech has the CGL logo and modern cover art." }
    ]
  },
  "mechwarrior": {
    system: "MechWarrior RPG", publisher: "FASA",
    tips: [
      { title: "1st edition (1986)", text: "The original MechWarrior RPG (1986). FASA catalog number. Check copyright year to distinguish 1st edition from the 2nd edition (1991) and 3rd edition (1999)." }
    ]
  },

  // ══════════════════════════════════════════
  //  PATHFINDER — PAIZO
  // ══════════════════════════════════════════
  "pathfinder core rulebook": {
    system: "Pathfinder 1st Edition", publisher: "Paizo",
    tips: [
      { title: "2009 first printing", text: "The original Pathfinder Core Rulebook (2009). Number line on copyright page — lowest number is the printing. The 1st printing has specific uncorrected errata." },
      { title: "Pocket edition", text: "A smaller pocket edition with the same content exists. Check physical size — standard is large format, pocket edition is noticeably smaller." }
    ]
  },
  "pathfinder bestiary": {
    system: "Pathfinder 1st Edition", publisher: "Paizo",
    tips: [
      { title: "Number line identification", text: "Paizo uses a number line on the copyright page. Lowest number = printing. The Bestiary series ran through five volumes in 1st edition." }
    ]
  },
  "pathfinder 2nd edition core rulebook": {
    system: "Pathfinder 2nd Edition", publisher: "Paizo",
    tips: [
      { title: "2019 first printing", text: "Pathfinder 2nd Edition launched 2019. Number line on copyright page identifies printing." },
      { title: "Remaster edition (2023)", text: "The Pathfinder Remaster (2023) updated rules and removed OGL content. Player Core and GM Core replaced the original 2e books — these are distinct products." }
    ]
  },

  // ══════════════════════════════════════════
  //  STARFINDER — PAIZO
  // ══════════════════════════════════════════
  "starfinder core rulebook": {
    system: "Starfinder", publisher: "Paizo",
    tips: [
      { title: "2017 first printing", text: "Starfinder launched 2017. Number line on copyright page. 1st printing has all digits present." },
      { title: "Pocket edition", text: "Pocket edition exists with identical content in a smaller format." }
    ]
  },

  // ══════════════════════════════════════════
  //  OSR — OLD SCHOOL RENAISSANCE
  // ══════════════════════════════════════════
  "osric": {
    system: "OSR / OSRIC", publisher: "Knights & Knaves / Various",
    tips: [
      { title: "Multiple print publishers", text: "OSRIC is an open game printed by multiple publishers. Check the back cover for the specific publisher. The most common print edition was distributed by Lulu." }
    ]
  },
  "labyrinth lord": {
    system: "OSR / Labyrinth Lord", publisher: "Goblinoid Games",
    tips: [
      { title: "Original (2007) vs revised (2009)", text: "Original and revised edition differ in layout and minor rules. Check the edition statement on the copyright page." },
      { title: "Illustrated vs non-illustrated", text: "Both an illustrated and a plain-text version were sold. Presence of interior art identifies the illustrated edition." }
    ]
  },
  "swords & wizardry": {
    system: "OSR / Swords & Wizardry", publisher: "Mythmere Games / Frog God",
    tips: [
      { title: "WhiteBox vs Core vs Complete", text: "Three distinct versions exist: WhiteBox (OD&D emulation), Core Rules (OD&D + Greyhawk), Complete (broader compilation). The subtitle on the cover identifies the version." },
      { title: "Mythmere vs Frog God", text: "Started as Mythmere Games, later distributed by Frog God Games. Publisher on the spine identifies the print era." }
    ]
  },
  "castles & crusades": {
    system: "Castles & Crusades", publisher: "Troll Lord Games",
    tips: [
      { title: "Explicitly labeled printings", text: "Troll Lord explicitly labels printings (1st printing, 2nd printing, etc.) on the copyright page — identification is straightforward compared to other games." }
    ]
  },
  "basic fantasy rpg": {
    system: "OSR / Basic Fantasy", publisher: "Basic Fantasy Project",
    tips: [
      { title: "Multiple revised editions", text: "Basic Fantasy RPG has been through multiple free/low-cost editions. The edition number is printed on the cover. Check the cover for the current edition number." }
    ]
  },
  "old school essentials": {
    system: "OSR / Old School Essentials", publisher: "Necrotic Gnome",
    tips: [
      { title: "Classic Fantasy vs Advanced Fantasy", text: "Two versions exist: Classic Fantasy (B/X rules) and Advanced Fantasy (adds additional classes and spells). Check the subtitle. Multiple hardcover and box set formats were produced." }
    ]
  },
  "dolmenwood": {
    system: "OSR / Dolmenwood", publisher: "Necrotic Gnome",
    tips: [
      { title: "Kickstarter 2023 campaign", text: "The Dolmenwood campaign setting books were crowdfunded in 2023. Kickstarter backer copies may have a colophon distinguishing them from retail copies." }
    ]
  },

  // ══════════════════════════════════════════
  //  PIRATE BORG
  // ══════════════════════════════════════════
  "pirate borg": {
    system: "Pirate Borg", publisher: "Limithron",
    tips: [
      { title: "Crowdfunded origin", text: "Pirate Borg was funded via Kickstarter and BackerKit. Backer editions often have variant covers or additional content compared to retail copies." },
      { title: "Check colophon for edition", text: "Check the inside cover or colophon for any backer edition markers. Retail copies distributed through game stores typically have a standard cover." },
      { title: "Print quality indicator", text: "Offset-printed copies have richer color saturation than print-on-demand copies. Offset printing is the standard for retail copies." }
    ]
  },

  // ══════════════════════════════════════════
  //  MÖRK BORG
  // ══════════════════════════════════════════
  "mork borg": {
    system: "Mörk Borg", publisher: "Free League Publishing",
    tips: [
      { title: "Swedish vs English editions", text: "Originally published in Swedish. The English edition by Free League has the same visual design. Check the language to identify which edition you have." },
      { title: "Standard vs Cult Edition", text: "The 'Cult Edition' has expanded content. Check the cover for the edition name." },
      { title: "Crowdfunding backer copies", text: "Original Kickstarter backers received an early printing. Backer copies may have a thank-you page absent from retail editions." }
    ]
  },

  // ══════════════════════════════════════════
  //  BLADES IN THE DARK
  // ══════════════════════════════════════════
  "blades in the dark": {
    system: "Blades in the Dark", publisher: "One Seven Design / Evil Hat",
    tips: [
      { title: "Kickstarter (2017) vs retail", text: "The original Kickstarter edition (2017) and retail edition have minor differences. Backer editions noted in the colophon." },
      { title: "Evil Hat distribution", text: "Evil Hat Products handled retail distribution. The Evil Hat logo appears on retail copies; early backer copies may only show One Seven Design branding." }
    ]
  },

  // ══════════════════════════════════════════
  //  DELTA GREEN
  // ══════════════════════════════════════════
  "delta green": {
    system: "Delta Green", publisher: "Arc Dream Publishing",
    tips: [
      { title: "Pagan Publishing supplements (1997-2007)", text: "Original Delta Green was published by Pagan Publishing as a Call of Cthulhu supplement — not a standalone game. Softcover format with Pagan Publishing logo." },
      { title: "Arc Dream standalone RPG (2017)", text: "Arc Dream released Delta Green as a standalone RPG in 2017. The Agent's Handbook and Handler's Guide are the core books. Check for the Arc Dream logo." },
      { title: "Slipcase collector's sets", text: "Arc Dream released collector's slipcase editions. Check whether the slipcase and both books are present for a complete set." }
    ]
  },

  // ══════════════════════════════════════════
  //  PENDRAGON — CHAOSIUM / GREEN KNIGHT
  // ══════════════════════════════════════════
  "pendragon": {
    system: "King Arthur Pendragon", publisher: "Chaosium / Green Knight",
    tips: [
      { title: "1st edition Chaosium (1985)", text: "Original Pendragon by Chaosium (1985). Distinctive Arthurian cover. Chaosium catalog number." },
      { title: "Publisher evolution", text: "Later editions: Green Knight Publishing, briefly White Wolf, then back to Chaosium. Publisher on the spine identifies the era." },
      { title: "6th edition (2023)", text: "Chaosium reclaimed the line and published the 6th edition (2023) with modern production values." }
    ]
  },

  // ══════════════════════════════════════════
  //  ARS MAGICA — ATLAS GAMES
  // ══════════════════════════════════════════
  "ars magica": {
    system: "Ars Magica", publisher: "Lion Rampant / White Wolf / Atlas",
    tips: [
      { title: "Publisher tracks edition", text: "1st edition: Lion Rampant (1987). 2nd/3rd edition: White Wolf (early 1990s). 4th edition (1996) and 5th edition (2004): Atlas Games. The publisher name instantly identifies the era." },
      { title: "5th edition large hardcover", text: "The 5th edition (2004) is a large hardcover with distinctive cover art. All earlier editions were smaller softcovers." }
    ]
  },

  // ══════════════════════════════════════════
  //  FATE — EVIL HAT
  // ══════════════════════════════════════════
  "fate core": {
    system: "Fate", publisher: "Evil Hat Productions",
    tips: [
      { title: "Kickstarter 2013 vs retail", text: "Fate Core was Kickstarted in 2013. The backer and retail editions have the same content. Backer copies may have a Kickstarter acknowledgment in the colophon." },
      { title: "Free PDF availability", text: "Fate Core is available as a free PDF, making physical copies the collectible format. Check for the Evil Hat logo and copyright year." }
    ]
  },
  "fate accelerated": {
    system: "Fate", publisher: "Evil Hat Productions",
    tips: [
      { title: "Smaller companion volume", text: "Fate Accelerated (FAE) is a shorter, simpler version of Fate Core published simultaneously in 2013. Check the title — it is a distinct product from Fate Core." }
    ]
  },

  // ══════════════════════════════════════════
  //  NUMENERA — MONTE COOK GAMES
  // ══════════════════════════════════════════
  "numenera": {
    system: "Numenera", publisher: "Monte Cook Games",
    tips: [
      { title: "2013 Kickstarter edition", text: "Numenera launched via Kickstarter in 2013. Backer copies have a colophon noting backer status." },
      { title: "Discovery and Destiny (2018)", text: "The revised edition split into two books: Discovery and Destiny — distinct products from the original core book." }
    ]
  },
  "the strange": {
    system: "The Strange", publisher: "Monte Cook Games",
    tips: [
      { title: "2014 Kickstarter", text: "The Strange (2014) uses the Cypher System. Kickstarter backer copies have a colophon. Retail copies have the standard Monte Cook Games branding." }
    ]
  },

  // ══════════════════════════════════════════
  //  THE ONE RING
  // ══════════════════════════════════════════
  "the one ring": {
    system: "The One Ring", publisher: "Cubicle 7 / Free League",
    tips: [
      { title: "Cubicle 7 1st edition (2011)", text: "Original box set by Cubicle 7 (2011). Contains multiple booklets. Set in the Wilderland region." },
      { title: "2nd edition Free League (2021)", text: "Free League released the 2nd edition (2021) as a hardcover with revised rules and new cover art." },
      { title: "Tolkien licensing premium", text: "The Tolkien license makes all editions collectible. A complete Cubicle 7 box set in good condition is particularly desirable." }
    ]
  },
  "adventures in middle earth": {
    system: "Adventures in Middle-earth", publisher: "Cubicle 7",
    tips: [
      { title: "D&D 5e system (2016-2019)", text: "Adventures in Middle-earth (2016) adapted The One Ring to the D&D 5e system. Published by Cubicle 7. The license expired in 2019 — all books are out of print and increasingly collectible." }
    ]
  },

  // ══════════════════════════════════════════
  //  BURNING WHEEL — BURNING WHEEL HQ
  // ══════════════════════════════════════════
  "burning wheel": {
    system: "Burning Wheel", publisher: "Burning Wheel HQ",
    tips: [
      { title: "Gold edition vs earlier editions", text: "The Burning Wheel Gold edition (2011) is the current standard. Earlier editions have different covers and rules. Check the edition name on the cover." },
      { title: "Small press limited runs", text: "Burning Wheel is a small-press game with limited print runs. Earlier editions are increasingly difficult to find." }
    ]
  },
  "torchbearer": {
    system: "Torchbearer", publisher: "Burning Wheel HQ",
    tips: [
      { title: "1st vs 2nd edition", text: "Torchbearer 1st edition (2013) and 2nd edition (2021) have different cover art and revised rules. Check the copyright page." }
    ]
  },

  // ══════════════════════════════════════════
  //  IRONSWORN / STARFORGED
  // ══════════════════════════════════════════
  "ironsworn": {
    system: "Ironsworn", publisher: "Shawn Tomkin",
    tips: [
      { title: "Free PDF vs print editions", text: "Ironsworn is available as a free PDF. Physical copies are printed through print-on-demand or special runs. A deluxe hardcover Kickstarter edition was produced — check for a Kickstarter colophon." }
    ]
  },
  "starforged": {
    system: "Starforged", publisher: "Shawn Tomkin",
    tips: [
      { title: "2022 Kickstarter edition", text: "Starforged was Kickstarted in 2022. Standard and deluxe editions with different covers were produced. Check the colophon for the edition type." }
    ]
  },

  // ══════════════════════════════════════════
  //  ALIEN RPG — FREE LEAGUE
  // ══════════════════════════════════════════
  "alien the roleplaying game": {
    system: "Alien RPG", publisher: "Free League Publishing",
    tips: [
      { title: "Standard vs Collector's Edition", text: "Both a standard hardcover and a collector's edition in a slipcase with additional content were released. Check whether a slipcase is present." },
      { title: "Cinematic Starter Set", text: "A separate Cinematic Starter Set box was also released — a different product from the core rulebook." }
    ]
  },

  // ══════════════════════════════════════════
  //  DRAGONBANE — FREE LEAGUE
  // ══════════════════════════════════════════
  "dragonbane": {
    system: "Dragonbane", publisher: "Free League Publishing",
    tips: [
      { title: "Swedish origins", text: "Dragonbane is a reimagining of the Swedish classic Drakar och Demoner. The English Free League edition (2023) has different cover art." },
      { title: "Boxed set vs core rulebook", text: "A boxed set with dice, maps, and adventures was the primary format. A standalone core rulebook was also released. Check all box components for completeness." }
    ]
  },

  // ══════════════════════════════════════════
  //  MÖRK BORG ADJACENT / BORG GAMES
  // ══════════════════════════════════════════
  "cy_borg": {
    system: "CY_BORG", publisher: "Free League Publishing",
    tips: [
      { title: "Cyberpunk Mörk Borg (2022)", text: "CY_BORG is a standalone cyberpunk game using the Mörk Borg engine. Published by Free League in 2022. Crowdfunding backer editions may have variant covers." }
    ]
  },
  "cairn": {
    system: "Cairn / OSR", publisher: "Yochai Gal",
    tips: [
      { title: "Free PDF vs print editions", text: "Cairn is available as a free PDF. The 1st and 2nd print editions have different cover art. Check the version number on the copyright page." }
    ]
  },

  // ══════════════════════════════════════════
  //  DUNGEON WORLD / PbtA
  // ══════════════════════════════════════════
  "dungeon world": {
    system: "Dungeon World / PbtA", publisher: "Sage Kobold Productions",
    tips: [
      { title: "Kickstarter (2012) vs retail", text: "Original Dungeon World Kickstarter (2012). Kickstarter backer copies have different cover treatments from retail printings." },
      { title: "Sage Kobold vs Indie Press Revolution", text: "Different distributors handled different print runs. The copyright page and back cover distributor information can help identify the source printing." }
    ]
  },
  "apocalypse world": {
    system: "Apocalypse World / PbtA", publisher: "Lumpley Games",
    tips: [
      { title: "1st edition (2010) vs 2nd edition (2016)", text: "The 1st edition (2010) is a shorter softcover. The 2nd edition (2016) has different cover art and revised rules." }
    ]
  },
  "monsterhearts": {
    system: "Monsterhearts / PbtA", publisher: "Buried Without Ceremony",
    tips: [
      { title: "1st (2012) vs 2nd edition (2017)", text: "Monsterhearts 1st and 2nd editions have different cover art and rules. Check the copyright page." }
    ]
  },
  "urban shadows": {
    system: "Urban Shadows / PbtA", publisher: "Magpie Games",
    tips: [
      { title: "1st (2015) vs 2nd edition (2021)", text: "Different cover art and expanded rules between editions. Check the copyright page." }
    ]
  },

  // ══════════════════════════════════════════
  //  KIDS ON BIKES / FORGED IN THE DARK
  // ══════════════════════════════════════════
  "kids on bikes": {
    system: "Kids on Bikes", publisher: "Renegade Game Studios",
    tips: [
      { title: "Original vs expanded edition", text: "The original Kids on Bikes (2018) and the expanded edition have slightly different cover art. Check the edition statement on the copyright page." }
    ]
  },
  "scum and villainy": {
    system: "Scum and Villainy / FitD", publisher: "Magpie Games",
    tips: [
      { title: "Forged in the Dark space opera", text: "Scum and Villainy (2018) uses the Blades in the Dark engine. Published by Magpie Games. Check for the Magpie logo on the spine." }
    ]
  },
  "band of blades": {
    system: "Band of Blades / FitD", publisher: "Off Guard Games",
    tips: [
      { title: "Kickstarter 2019", text: "Band of Blades was Kickstarted in 2019. Backer copies may have edition markers. Retail copies distributed through game stores." }
    ]
  },

  // ══════════════════════════════════════════
  //  SHADOWDARK — ARCANE LIBRARY
  // ══════════════════════════════════════════
  "shadowdark": {
    system: "Shadowdark", publisher: "The Arcane Library",
    tips: [
      { title: "2023 Kickstarter", text: "One of the most successful RPG crowdfunding campaigns. Kickstarter backer copies have a colophon or backer acknowledgment." },
      { title: "Standard vs special edition", text: "Multiple cover variants were produced for Kickstarter backers. Retail copies have a standard cover. Check the colophon." }
    ]
  },

  // ══════════════════════════════════════════
  //  SAVAGE WORLDS — PINNACLE
  // ══════════════════════════════════════════
  "savage worlds": {
    system: "Savage Worlds", publisher: "Pinnacle Entertainment",
    tips: [
      { title: "Multiple editions (2003 onward)", text: "Savage Worlds has gone through several editions: original (2003), Revised (2011), Deluxe (2012), and Adventure Edition (2019). The edition name is printed on the cover." },
      { title: "Adventure Edition is current", text: "The Adventure Edition (2019) is the current standard edition. Deluxe and earlier editions are out of print." }
    ]
  },

  // ══════════════════════════════════════════
  //  WARHAMMER 40K RPGs — FANTASY FLIGHT / CUBICLE 7
  // ══════════════════════════════════════════
  "dark heresy": {
    system: "Warhammer 40K RPG", publisher: "Black Industries / Fantasy Flight",
    tips: [
      { title: "Black Industries 1st edition (2008)", text: "The original Dark Heresy was published by Black Industries (a GW imprint) in 2008. Fantasy Flight Games acquired the line and published a 2nd edition (2014). Check the publisher on the spine." }
    ]
  },
  "rogue trader": {
    system: "Warhammer 40K RPG", publisher: "Fantasy Flight Games",
    tips: [
      { title: "Fantasy Flight 2009 edition", text: "Published by Fantasy Flight Games in 2009. All FFG 40K RPGs (Dark Heresy, Rogue Trader, Deathwatch, Black Crusade, Only War) share the same Warhammer 40,000 Roleplay branding." }
    ]
  },
  "warhammer 40000 roleplay wrath and glory": {
    system: "Warhammer 40K RPG", publisher: "Ulisses Spiele / Cubicle 7",
    tips: [
      { title: "Ulisses vs Cubicle 7 editions", text: "Wrath & Glory was originally published by Ulisses Spiele (2018), then revised and republished by Cubicle 7 (2021). The publisher on the spine and copyright page identifies which version you have." }
    ]
  },

  // ══════════════════════════════════════════
  //  KULT — METROPOLIS LTD / HELMGAST
  // ══════════════════════════════════════════
  "kult": {
    system: "Kult", publisher: "Metropolis Ltd / Helmgast",
    tips: [
      { title: "Swedish original vs English editions", text: "Kult was originally published in Swedish by Target Games. The English translation by Metropolis Ltd (1993) has a distinctive controversial cover." },
      { title: "Divinity Lost (2018)", text: "The modern edition 'Kult: Divinity Lost' was crowdfunded in 2018 by Helmgast. Completely different production values and rules from the original." }
    ]
  },

  // ══════════════════════════════════════════
  //  CTHULHUTECH — WILDFIRE
  // ══════════════════════════════════════════
  "cthulhutech": {
    system: "CthulhuTech", publisher: "Wildfire",
    tips: [
      { title: "1st edition (2008)", text: "Published by Wildfire in 2008. Later distributed by Catalyst Game Labs. Check the publisher/distributor on the spine." }
    ]
  },

  // ══════════════════════════════════════════
  //  FELLOWSHIP / IRONSWORN ADJACENT
  // ══════════════════════════════════════════
  "fellowship": {
    system: "Fellowship", publisher: "Liberi Gothica Games",
    tips: [
      { title: "2nd edition (2017)", text: "Fellowship 2nd edition was a significant revision from the original. Check the edition statement on the copyright page." }
    ]
  },

  // ══════════════════════════════════════════
  //  EXALTED — WHITE WOLF / ONYX PATH
  // ══════════════════════════════════════════
  "exalted": {
    system: "Exalted", publisher: "White Wolf / Onyx Path",
    tips: [
      { title: "Three editions", text: "1st edition (2001, White Wolf), 2nd edition (2006, White Wolf), and 3rd edition (2016, Onyx Path via Kickstarter). The publisher and copyright year distinguish the editions." },
      { title: "3rd edition Kickstarter variants", text: "The 3rd edition had backer-exclusive cover variants. Check the colophon for backer edition status." }
    ]
  },

  // ══════════════════════════════════════════
  //  LEGEND OF THE FIVE RINGS
  // ══════════════════════════════════════════
  "legend of the five rings": {
    system: "Legend of the Five Rings", publisher: "AEG / Fantasy Flight",
    tips: [
      { title: "AEG editions (1997-2015)", text: "AEG published L5R from 1997 through multiple editions. The 4th edition (2010) is the final AEG edition." },
      { title: "Fantasy Flight 5th edition (2018)", text: "Fantasy Flight Games published the 5th edition (2018) with completely redesigned rules. Very different from all AEG editions." }
    ]
  },

  // ══════════════════════════════════════════
  //  MISC MODERN RPGs
  // ══════════════════════════════════════════
  "mothership": {
    system: "Mothership", publisher: "Tuesday Knight Games",
    tips: [
      { title: "Zine format 1st edition vs boxed 2nd edition", text: "The original Mothership was published in a distinctive zine format. The 2nd edition (Warden's Operations Manual, 2023) is a larger boxed set — easily distinguished by physical format." }
    ]
  },
  "into the odd": {
    system: "Into the Odd", publisher: "Chris McDowall / Free League",
    tips: [
      { title: "Original (2014) vs Remastered (2022)", text: "The original Into the Odd (2014) was a small print run softcover. The Remastered edition (2022) by Free League is a larger hardcover with new art. Format and size alone distinguish them." }
    ]
  },
  "electric bastionland": {
    system: "Electric Bastionland", publisher: "Chris McDowall",
    tips: [
      { title: "Kickstarter 2020", text: "Electric Bastionland was Kickstarted in 2020. Backer edition and retail editions have slightly different cover treatments. Check the colophon." }
    ]
  },
  "troika": {
    system: "Troika!", publisher: "Melsonian Arts Council",
    tips: [
      { title: "Multiple printings", text: "Troika has gone through several printings with updated content. The edition or printing number is noted in the colophon on the final page." }
    ]
  },
  "forbidden lands": {
    system: "Forbidden Lands", publisher: "Free League Publishing",
    tips: [
      { title: "Boxed set vs standalone books", text: "Forbidden Lands launched as a Kickstarter boxed set (2018). Standalone books (Player's Handbook and Gamemaster's Guide) were sold separately. Check whether you have the box or individual books." }
    ]
  },
  "symbaroum": {
    system: "Symbaroum", publisher: "Järnringen / Free League",
    tips: [
      { title: "Swedish original vs English editions", text: "Symbaroum was originally published in Swedish by Järnringen. The English edition was distributed by Modiphius and later Free League. Check the publisher on the spine." }
    ]
  },
  "zweihander": {
    system: "ZWEIHÄNDER", publisher: "Grim & Perilous Studios",
    tips: [
      { title: "Original (2017) vs Revised Core (2019)", text: "The original ZWEIHÄNDER (2017) and the revised/rebranded editions have different covers. The 'Revised Core Rulebook' edition is an update with corrected content." },
      { title: "Grim & Perilous vs Andrews McMeel", text: "The book was licensed to Andrews McMeel Publishing for retail distribution. Andrews McMeel printings have their logo on the spine." }
    ]
  },
  "lancer": {
    system: "Lancer", publisher: "Massif Press",
    tips: [
      { title: "Print edition vs free PDF", text: "Lancer is available as a free PDF. The physical 1st printing (2021) is distinguishable by the Massif Press logo. A Kickstarter edition with alternate cover art also exists." }
    ]
  },
  "gubat banwa": {
    system: "Gubat Banwa", publisher: "Makapatag",
    tips: [
      { title: "Small press Kickstarter edition", text: "A Filipino-inspired small-press RPG from Makapatag. Kickstarter backer editions are the primary physical distribution. Check colophon for edition details." }
    ]
  },

  // ══════════════════════════════════════════
  //  KNAVE / CAIRN ADJACENT
  // ══════════════════════════════════════════
  "knave": {
    system: "OSR / Knave", publisher: "Questing Beast",
    tips: [
      { title: "Zine (1st ed) vs softcover (2nd ed)", text: "The 1st edition is a small zine-format booklet. The 2nd edition (2023 Kickstarter) is a larger softcover. Physical size and format immediately distinguish them." }
    ]
  },

  // ══════════════════════════════════════════
  //  GENERAL TSR FALLBACK
  // ══════════════════════════════════════════

  // ══════════════════════════════════════════
  //  DUNGEON CRAWL CLASSICS — GOODMAN GAMES
  // ══════════════════════════════════════════
  "dungeon crawl classics rpg": {
    system: "Dungeon Crawl Classics", publisher: "Goodman Games",
    tips: [
      { title: "Standard vs limited editions", text: "Goodman Games regularly releases limited edition versions of DCC products with different covers, often in very small print runs (500-1000 copies). The standard edition and limited edition are distinct products. Check the back cover or colophon for edition information." },
      { title: "Kickstarter vs retail printings", text: "Many DCC products are crowdfunded before retail release. Kickstarter backer copies often have a backer colophon or different cover treatment from the retail version." },
      { title: "Folio vs digest size", text: "DCC modules come in a distinctive 8.5x11 folio format, while some products use a smaller digest format. The physical size is part of the product identity — check which format you have." },
      { title: "Purple cover core rulebook", text: "The DCC core rulebook (2012) has a distinctive purple cover with Otus-style art. The original printing and later printings can be distinguished by the number line on the copyright page. A gold-foil variant cover was also produced." }
    ]
  },
  "dungeon crawl classics module": {
    system: "Dungeon Crawl Classics", publisher: "Goodman Games",
    tips: [
      { title: "DCC module numbering", text: "Pre-RPG DCC modules are numbered (e.g. DCC #51, #67). Post-RPG modules use a different numbering system starting from #66.5. The module number on the cover identifies the era and system." },
      { title: "Limited vs standard print runs", text: "Goodman Games routinely produces limited-edition covers for their modules. A non-standard cover art usually signals a limited printing. Check the back cover for a print run number." },
      { title: "Tournament vs retail versions", text: "Some DCC modules were originally released as Gen Con tournament modules with different covers or content from the retail version. A tournament copy is typically more rare." }
    ]
  },

  // ══════════════════════════════════════════
  //  BRINDLEWOOD BAY — GAUNTLET PUBLISHING
  // ══════════════════════════════════════════
  "brindlewood bay": {
    system: "Brindlewood Bay", publisher: "Gauntlet Publishing",
    tips: [
      { title: "Kickstarter 2021 edition", text: "Brindlewood Bay was crowdfunded via Kickstarter in 2021 by Jason Cordova and published through Gauntlet Publishing. Kickstarter backer copies have a colophon or acknowledgment section distinguishing them from retail copies." },
      { title: "Retail vs direct editions", text: "Retail copies distributed through game stores have the standard cover. Check the inside cover or final pages for any backer edition marker." },
      { title: "The Between connection", text: "Brindlewood Bay spawned The Between (a companion game) using the same system. If you are unsure which book you have, check the title page — they share visual design elements." }
    ]
  },

  // ══════════════════════════════════════════
  //  BURNING WHEEL — BURNING WHEEL HQ
  // ══════════════════════════════════════════
  "burning wheel gold": {
    system: "Burning Wheel", publisher: "Burning Wheel HQ",
    tips: [
      { title: "Gold vs earlier editions", text: "The Burning Wheel Gold edition (2011) is the definitive current edition with a black hardcover. Earlier editions (Classic, Revised) are smaller softcovers with different covers. The Gold edition is immediately recognizable by its larger format and black hardcover." },
      { title: "Gold revised printing", text: "A revised printing of Gold was released with corrections. Check the copyright page for any printing notation or revision statement." },
      { title: "Hub and Spokes structure", text: "Earlier BWR editions split content across multiple booklets. The Gold edition combines everything into one book. If you have multiple booklets, you have an earlier edition." }
    ]
  },
  "mouse guard rpg": {
    system: "Mouse Guard / Burning Wheel", publisher: "Archaia",
    tips: [
      { title: "1st edition boxed set (2008)", text: "The original Mouse Guard RPG was published by Archaia in 2008 as a hardcover book. A boxed set edition with extras was also produced. Check for the Archaia logo." },
      { title: "2nd edition (2012)", text: "The 2nd edition revised the rules and has different cover art. Check the copyright year and edition statement." }
    ]
  },

  // ══════════════════════════════════════════
  //  TORCHBEARER — BURNING WHEEL HQ
  // ══════════════════════════════════════════
  "torchbearer": {
    system: "Torchbearer", publisher: "Burning Wheel HQ",
    tips: [
      { title: "1st edition (2013) vs 2nd edition (2021)", text: "Torchbearer 1st edition (2013) is a digest-sized softcover. The 2nd edition (2021) is a larger format hardcover with revised rules and expanded content. Format and size alone distinguish them." },
      { title: "2nd edition Kickstarter vs retail", text: "The 2nd edition was Kickstarted in 2020. Backer copies may have a colophon. Retail copies have standard Burning Wheel HQ branding." }
    ]
  },

  // ══════════════════════════════════════════
  //  MICROSCOPE / KINGDOM / ECHO — LAME MAGE
  // ══════════════════════════════════════════
  "microscope": {
    system: "Microscope", publisher: "Lame Mage Productions",
    tips: [
      { title: "Original (2011) vs Explorer's Edition", text: "The original Microscope (2011) and the later Explorer's Edition have slightly different cover art and layout. Check the edition name on the cover." },
      { title: "Small press print runs", text: "Microscope is a small-press game with limited print runs. The print run number may appear in the colophon." }
    ]
  },

  // ══════════════════════════════════════════
  //  FOR THE QUEEN / FOR THE CROWN — EVIL HAT
  // ══════════════════════════════════════════
  "for the queen": {
    system: "For the Queen", publisher: "Evil Hat Productions",
    tips: [
      { title: "Original zine vs Evil Hat edition", text: "The original For the Queen by Alex Roberts was a small zine. The Evil Hat Productions edition (2019) is a larger card deck game. The two formats are immediately visually distinct." }
    ]
  },

  // ══════════════════════════════════════════
  //  RYUUTAMA — JAPANESE RPG / KOTODAMA HEAVY
  // ══════════════════════════════════════════
  "ryuutama": {
    system: "Ryuutama", publisher: "Kotodama Heavy Industries",
    tips: [
      { title: "Japanese original vs English edition", text: "Ryuutama was originally published in Japanese. The English edition by Kotodama Heavy Industries (2015) has the same art but different text. Check the language of the text." },
      { title: "Kickstarter vs retail printings", text: "The English edition was crowdfunded. Backer copies may have a colophon distinguishing them from retail copies." }
    ]
  },

  // ══════════════════════════════════════════
  //  TENRA BANSHO ZERO
  // ══════════════════════════════════════════
  "tenra bansho zero": {
    system: "Tenra Bansho Zero", publisher: "Kotodama Heavy Industries",
    tips: [
      { title: "Japanese original vs English edition", text: "TBZ was a landmark Japanese RPG released in English via Kickstarter (2013). The English edition is a very large two-volume hardcover set. Check whether both volumes are present." },
      { title: "Heaven and Earth volumes", text: "The English edition comes as two books: Heaven and Earth. A complete set has both volumes. Individual volumes circulate separately — check for completeness." }
    ]
  },

  // ══════════════════════════════════════════
  //  GOLDEN SKY STORIES
  // ══════════════════════════════════════════
  "golden sky stories": {
    system: "Golden Sky Stories", publisher: "Star Line Publishing",
    tips: [
      { title: "Japanese original vs English edition", text: "Originally published in Japan. The English edition was crowdfunded and published by Star Line Publishing. Check the publisher on the spine." }
    ]
  },

  // ══════════════════════════════════════════
  //  MAID RPG
  // ══════════════════════════════════════════
  "maid rpg": {
    system: "Maid RPG", publisher: "Ryo Kamiya / Cuore Soft",
    tips: [
      { title: "Japanese original vs English edition", text: "The English translation was published by Cuore Soft. The Japanese original and English edition have different covers. Check the language and publisher." }
    ]
  },

  // ══════════════════════════════════════════
  //  DUNGEON DEGENERATES — GOBLINKO
  // ══════════════════════════════════════════
  "dungeon degenerates": {
    system: "Dungeon Degenerates", publisher: "Goblinko",
    tips: [
      { title: "Hand of Doom board game vs RPG supplements", text: "Dungeon Degenerates: Hand of Doom is a board game; associated RPG supplements exist. Check whether you have the board game or a standalone RPG product." },
      { title: "Kickstarter limited editions", text: "Goblinko regularly produces Kickstarter editions with unique art and extras. Check the colophon for print run information." }
    ]
  },

  // ══════════════════════════════════════════
  //  WOLF-PACKS AND WINTER SNOW / NEOCLASSICAL GEEK REVIVAL
  // ══════════════════════════════════════════
  "neoclassical geek revival": {
    system: "Neoclassical Geek Revival", publisher: "Zzarchov Kowolski",
    tips: [
      { title: "Multiple small-press editions", text: "NGR has gone through several self-published editions. The edition number is typically noted in the colophon. Earlier editions are digest-sized zines; later editions are larger softcovers." }
    ]
  },

  // ══════════════════════════════════════════
  //  THE EXCELLENTS / WANDERHOME / SLEEPAWAY
  // ══════════════════════════════════════════
  "wanderhome": {
    system: "Wanderhome", publisher: "Possum Creek Games",
    tips: [
      { title: "Kickstarter 2021 vs retail", text: "Wanderhome by Jay Dragon was Kickstarted in 2021 and published by Possum Creek Games. Kickstarter backer copies have a colophon. The book is notable for its hand-sewn binding in the deluxe edition." },
      { title: "Standard vs deluxe edition", text: "A deluxe hand-sewn binding edition was produced alongside the standard edition. The binding style immediately distinguishes them." }
    ]
  },
  "sleepaway": {
    system: "Sleepaway", publisher: "Possum Creek Games",
    tips: [
      { title: "Kickstarter 2022 edition", text: "Sleepaway by Jay Dragon was Kickstarted in 2022. Backer and retail copies may differ in cover treatment. Check the colophon." }
    ]
  },

  // ══════════════════════════════════════════
  //  DIALECT — THORNY GAMES
  // ══════════════════════════════════════════
  "dialect": {
    system: "Dialect", publisher: "Thorny Games",
    tips: [
      { title: "Kickstarter 2018 vs retail", text: "Dialect: A Game About Language and How It Dies was Kickstarted in 2018. The backer edition and retail edition have the same content. Check the colophon for edition information." }
    ]
  },

  // ══════════════════════════════════════════
  //  GENRE DIVERSION / LEGACY: LIFE AMONG THE RUINS
  // ══════════════════════════════════════════
  "legacy life among the ruins": {
    system: "Legacy: Life Among the Ruins", publisher: "UFO Press",
    tips: [
      { title: "1st vs 2nd edition", text: "Legacy: Life Among the Ruins 1st edition (2015) and 2nd edition (2018) have different covers and significantly revised rules. Check the copyright year and edition statement." }
    ]
  },

  // ══════════════════════════════════════════
  //  ROOT RPG — MAGPIE GAMES
  // ══════════════════════════════════════════
  "root the roleplaying game": {
    system: "Root RPG", publisher: "Magpie Games",
    tips: [
      { title: "Kickstarter 2020 vs retail", text: "Root: The Roleplaying Game was Kickstarted in 2020 by Magpie Games, based on the Leder Games board game. Backer copies may have a colophon. Check for the Magpie Games logo on the spine." }
    ]
  },

  // ══════════════════════════════════════════
  //  AVATAR LEGENDS — MAGPIE GAMES
  // ══════════════════════════════════════════
  "avatar legends": {
    system: "Avatar Legends", publisher: "Magpie Games",
    tips: [
      { title: "Record-breaking Kickstarter (2021)", text: "Avatar Legends was one of the highest-funded RPG Kickstarters ever, launched in 2021. Kickstarter backer copies have a colophon. The standard and deluxe editions have different cover treatments." },
      { title: "Nickelodeon licensing", text: "The Nickelodeon license makes this a unique licensed product. Check that the Nickelodeon trademark appears on the copyright page — counterfeits of popular RPG books do exist." }
    ]
  },

  // ══════════════════════════════════════════
  //  GIRL BY MOONLIGHT — ANDREW GILLIS
  // ══════════════════════════════════════════
  "girl by moonlight": {
    system: "Girl by Moonlight", publisher: "Gillis Game Design",
    tips: [
      { title: "Kickstarter 2022 edition", text: "Girl by Moonlight was Kickstarted in 2022. Standard and deluxe editions with different cover treatments were produced. Check the colophon for the edition type." }
    ]
  },

  // ══════════════════════════════════════════
  //  FELLOWSHIP — LIBERI GOTHICA
  // ══════════════════════════════════════════
  "fellowship rpg": {
    system: "Fellowship", publisher: "Liberi Gothica Games",
    tips: [
      { title: "1st (2016) vs 2nd edition (2017)", text: "The 1st and 2nd editions of Fellowship have different covers and revised rules. The 2nd edition is the widely distributed version. Check the copyright year." }
    ]
  },

  // ══════════════════════════════════════════
  //  HIKES AND HARNESS / OUTDOOR SPORTS RPGs
  // ══════════════════════════════════════════
  "vast & starlit": {
    system: "Vast & Starlit", publisher: "Epidiah Ravachol",
    tips: [
      { title: "Zine format small press", text: "Vast & Starlit is a small single-page or short zine-format RPG. Multiple printings exist. Check the zine number or version on the cover or first page." }
    ]
  },

  // ══════════════════════════════════════════
  //  ULTRAVIOLET GRASSLANDS — LOOTTHE ROOM
  // ══════════════════════════════════════════
  "ultraviolet grasslands": {
    system: "Ultraviolet Grasslands", publisher: "Loot The Room",
    tips: [
      { title: "Kickstarter 2020 vs retail", text: "UVG was Kickstarted in 2020 by Wizard Lizard (Loot The Room). Kickstarter backer copies have a colophon. A 'Black Book Edition' with expanded content was also produced — check the cover title." },
      { title: "Black Book Edition", text: "The expanded Black Book Edition (2021) has additional content and a different cover from the original. Check for 'Black Book Edition' on the cover." }
    ]
  },

  // ══════════════════════════════════════════
  //  ELECTRIC UNDERGROUND / ACID DEATH FANTASY
  // ══════════════════════════════════════════
  "acid death fantasy": {
    system: "Acid Death Fantasy", publisher: "SoulMuppet Publishing",
    tips: [
      { title: "Kickstarter 2022 edition", text: "Acid Death Fantasy was crowdfunded in 2022 by SoulMuppet Publishing. Limited backer editions with variant covers were produced. Check the colophon." }
    ]
  },

  // ══════════════════════════════════════════
  //  WARPSTAR! / WARPLAND
  // ══════════════════════════════════════════
  "warpstar": {
    system: "Warpstar!", publisher: "Handiwork Games",
    tips: [
      { title: "Small press UK edition", text: "Warpstar! is a UK small-press RPG from Handiwork Games. Check the colophon for print run and edition information." }
    ]
  },

  // ══════════════════════════════════════════
  //  WHITEHACK — +1 FORWARD
  // ══════════════════════════════════════════
  "whitehack": {
    system: "Whitehack", publisher: "Christian Mehrstam",
    tips: [
      { title: "Multiple slim editions", text: "Whitehack is a compact OSR game that has gone through several short editions (1st, 2nd, 3rd). Each edition is a slim booklet. The edition number is printed on the cover." }
    ]
  },

  // ══════════════════════════════════════════
  //  BLACK HACK — GOLD PIECE PUBLICATIONS
  // ══════════════════════════════════════════
  "the black hack": {
    system: "The Black Hack", publisher: "Gold Piece Publications",
    tips: [
      { title: "1st vs 2nd edition", text: "The Black Hack 1st edition (2016) is a short digest-sized zine. The 2nd edition (2018) is an expanded softcover with revised rules. Size and format immediately distinguish them." },
      { title: "Collector's edition", text: "A deluxe collector's edition of the 2nd edition was produced with higher production values. Check the cover material and colophon." }
    ]
  },

  // ══════════════════════════════════════════
  //  SILENT TITANS / VEINS OF THE EARTH — PATRICK STUART
  // ══════════════════════════════════════════
  "veins of the earth": {
    system: "OSR / Veins of the Earth", publisher: "False Machine Publishing",
    tips: [
      { title: "Lamentations of the Flame Princess edition", text: "Veins of the Earth was published by Lamentations of the Flame Princess (2017). Check for the LotFP logo and catalog number on the spine." },
      { title: "Art-heavy production", text: "The book is notable for Scrap Princess's distinctive art. Print quality can vary between printings — the LotFP 1st printing is the most sought after." }
    ]
  },
  "silent titans": {
    system: "OSR / Silent Titans", publisher: "False Machine Publishing",
    tips: [
      { title: "Self-published by Patrick Stuart (2019)", text: "Silent Titans was self-published by Patrick Stuart. The Kickstarter backer edition and retail copies have different production details. Check the colophon." }
    ]
  },

  // ══════════════════════════════════════════
  //  LAMENTATIONS OF THE FLAME PRINCESS
  // ══════════════════════════════════════════
  "lamentations of the flame princess": {
    system: "LotFP", publisher: "Lamentations of the Flame Princess",
    tips: [
      { title: "Weird Fantasy Roleplaying (2010)", text: "The LotFP core book is titled 'Weird Fantasy Roleplaying'. The original boxed set (2010) contained separate booklets. A hardcover single-volume edition followed." },
      { title: "Grindhouse vs later editions", text: "The 'Grindhouse Edition' has distinctive controversial art. Later printings revised some art. Check the edition name on the cover or title page." },
      { title: "Free RPG Day editions", text: "LotFP produced special Free RPG Day editions of several products. These are identifiable by the Free RPG Day logo on the cover and are typically less common than retail copies." }
    ]
  },
  "death frost doom": {
    system: "LotFP", publisher: "Lamentations of the Flame Princess",
    tips: [
      { title: "1st edition (2009) vs revised (2014)", text: "The original Death Frost Doom (2009) and the extensively revised 2014 edition by Zak S. have different cover art and substantially different content. The 2009 original is the more collectible version." }
    ]
  },

  // ══════════════════════════════════════════
  //  CARCOSA — GEOF McKINNEY
  // ══════════════════════════════════════════
  "carcosa": {
    system: "OSR / Carcosa", publisher: "Geof McKinney / LotFP",
    tips: [
      { title: "Original digest (2008) vs LotFP hardcover (2011)", text: "The original Carcosa was a self-published digest pamphlet (2008). The LotFP-published hardcover (2011) is a completely revised and expanded version with new cover art. Format alone distinguishes them." },
      { title: "Controversial content", text: "Both versions contain controversial content. The LotFP hardcover is the standard collectible edition." }
    ]
  },

  // ══════════════════════════════════════════
  //  YOON-SUIN — TROIKA CONNECTIONS
  // ══════════════════════════════════════════
  "yoon-suin": {
    system: "OSR / Yoon-Suin", publisher: "David McGrogan",
    tips: [
      { title: "1st edition self-published (2015)", text: "The original Yoon-Suin (2015) was self-published by David McGrogan through Lulu. The 2nd edition (2022) has different cover art and revised content." },
      { title: "1st vs 2nd edition", text: "The 1st edition cover features a specific painted illustration. The 2nd edition has a different cover. Check the copyright year." }
    ]
  },

  // ══════════════════════════════════════════
  //  NUMENERA ADJACENT / CYPHER SYSTEM
  // ══════════════════════════════════════════
  "cypher system rulebook": {
    system: "Cypher System", publisher: "Monte Cook Games",
    tips: [
      { title: "Original (2015) vs revised (2019)", text: "The original Cypher System Rulebook (2015) and the revised edition (2019) have different cover art and updated content. Check the copyright year." }
    ]
  },

  // ══════════════════════════════════════════
  //  INVISIBLE SUN — MONTE COOK GAMES
  // ══════════════════════════════════════════
  "invisible sun": {
    system: "Invisible Sun", publisher: "Monte Cook Games",
    tips: [
      { title: "Black Cube Kickstarter set", text: "Invisible Sun was funded via Kickstarter (2017) as a premium Black Cube boxed set retailing for $197. The Black Cube contains multiple books and accessories. A complete set with all components is important for value." },
      { title: "Sanctum Explorers Edition", text: "A more affordable 'Sanctum Explorers Edition' boxed set was later released. Check the box title — the Black Cube and Sanctum editions are distinct products." }
    ]
  },

  // ══════════════════════════════════════════
  //  SPIRE / HEART — ROWAN ROOK AND DECARD
  // ══════════════════════════════════════════
  "spire the city must fall": {
    system: "Spire", publisher: "Rowan, Rook and Decard",
    tips: [
      { title: "1st vs 2nd edition", text: "Spire: The City Must Fall 1st and 2nd editions have different covers and revised rules. The 2nd edition is the more widely distributed version. Check the copyright page." },
      { title: "Kickstarter vs retail printings", text: "Both editions were crowdfunded. Backer copies may have a colophon. Check the inside cover for edition details." }
    ]
  },
  "heart the city beneath": {
    system: "Heart / Spire", publisher: "Rowan, Rook and Decard",
    tips: [
      { title: "Companion to Spire (2021)", text: "Heart: The City Beneath (2021) is a standalone companion game to Spire. Kickstarter backer copies have a colophon. Check for the RRaD logo on the spine." }
    ]
  },

  // ══════════════════════════════════════════
  //  ERRANT — ZZARCHOV KOWOLSKI ADJACENT
  // ══════════════════════════════════════════
  "errant": {
    system: "Errant / OSR", publisher: "Kill Jester",
    tips: [
      { title: "Kickstarter 2022 edition", text: "Errant was Kickstarted in 2022 by Kill Jester. Backer and retail copies may differ in cover treatment. Check the colophon." }
    ]
  },

  // ══════════════════════════════════════════
  //  WARLOCK! — FIRE RUBY DESIGNS
  // ══════════════════════════════════════════
  "warlock": {
    system: "Warlock!", publisher: "Fire Ruby Designs",
    tips: [
      { title: "UK small-press zine origins", text: "Warlock! started as a zine-format game inspired by the original Warhammer Fantasy Roleplay. The zine issues and the later compiled softcover editions are distinct products." },
      { title: "Hardcover omnibus vs zines", text: "A hardcover omnibus edition compiled multiple zine issues. If you have individual zines, they are the original format. Check whether you have individual issues or the compiled edition." }
    ]
  },

  // ══════════════════════════════════════════
  //  DEGENESIS — SIXMOREVODKA
  // ══════════════════════════════════════════
  "degenesis rebirth": {
    system: "Degenesis", publisher: "SIXMOREVODKA",
    tips: [
      { title: "German original vs English Rebirth Edition", text: "Degenesis was originally a German RPG by SIXMOREVODKA. The English 'Rebirth Edition' (2015) is a premium two-volume hardcover set. Check for the English text and the Rebirth Edition designation." },
      { title: "Free PDF availability", text: "The Rebirth Edition PDFs are free from the publisher. Physical copies are the premium collectible format. The print run was limited." },
      { title: "Two-volume set completeness", text: "The Rebirth Edition comes as two books: Primal Punk and Katharsys. Check that both volumes are present for a complete set." }
    ]
  },

  // ══════════════════════════════════════════
  //  MYTHRAS — DESIGN MECHANISM
  // ══════════════════════════════════════════
  "mythras": {
    system: "Mythras / RuneQuest 6", publisher: "The Design Mechanism",
    tips: [
      { title: "RuneQuest 6 vs Mythras", text: "Mythras was originally published as 'RuneQuest 6' (2012) by The Design Mechanism. After licensing changes, it was renamed Mythras (2016). The content is largely identical — check the cover title." },
      { title: "Hardcover vs softcover editions", text: "Both hardcover and softcover versions have been produced. The hardcover is the standard collectible edition." }
    ]
  },

  // ══════════════════════════════════════════
  //  HARNMASTER — COLUMBIA GAMES
  // ══════════════════════════════════════════
  "harnmaster": {
    system: "HârnMaster", publisher: "Columbia Games",
    tips: [
      { title: "Multiple editions (1986 onward)", text: "HârnMaster has been in print since 1986 with multiple editions. The 1st edition is a box set; later editions are softcovers. Check the cover for the edition name." },
      { title: "Loose-leaf format", text: "Many HârnWorld products use a distinctive loose-leaf format designed to be filed in binders. This format is unique to the Hârn product line and immediately identifies them." }
    ]
  },

  // ══════════════════════════════════════════
  //  HACKMASTER — KENZERCO
  // ══════════════════════════════════════════
  "hackmaster": {
    system: "HackMaster", publisher: "Kenzer & Company",
    tips: [
      { title: "4th edition (2001) vs 5th edition (2009)", text: "HackMaster 4th edition (2001) is a parody of AD&D 1e/2e with a distinctive satirical tone. The 5th edition (2009) is a genuine RPG with revised rules. Check the copyright year." },
      { title: "HackMaster Basic (2009)", text: "HackMaster Basic was a free introductory version released alongside the 5th edition. It is a different (smaller) product from the full rulebook." }
    ]
  },

  // ══════════════════════════════════════════
  //  OPEN LEGEND RPG
  // ══════════════════════════════════════════
  "open legend": {
    system: "Open Legend", publisher: "Seventh Sphere Entertainment",
    tips: [
      { title: "Free SRD vs print edition", text: "Open Legend is available as a free SRD online. The physical print edition is a Kickstarter-funded hardcover. Check the colophon for print run information." }
    ]
  },

  // ══════════════════════════════════════════
  //  ZWEIHANDER ADJACENT / GRIM DARK
  // ══════════════════════════════════════════
  "empire of the petal throne": {
    system: "Empire of the Petal Throne", publisher: "TSR / Various",
    tips: [
      { title: "Original TSR box set (1975)", text: "The original Empire of the Petal Throne by M.A.R. Barker was one of the first RPGs, published by TSR in 1975. The box contains three booklets. It is extremely rare and highly valuable." },
      { title: "Subsequent editions", text: "Multiple editions by different publishers (Gamescience, TOME, Guardians of Order) exist. The 1975 TSR box set is the most collectible. Check the publisher on the box or cover." }
    ]
  },

  // ══════════════════════════════════════════
  //  TUNNELS & TROLLS — FLYING BUFFALO
  // ══════════════════════════════════════════
  "tunnels & trolls": {
    system: "Tunnels & Trolls", publisher: "Flying Buffalo",
    tips: [
      { title: "1st edition (1975) — predates AD&D", text: "Tunnels & Trolls (1975) is one of the oldest RPGs, predating AD&D. The 1st edition is a short pamphlet-style booklet. Extremely rare in good condition." },
      { title: "Multiple editions through 5.5e and 7e", text: "T&T went through many editions. The 5th edition (1979) and 5.5th edition are the most commonly found vintage copies. A '7.5 edition' and Deluxe edition (2015 Kickstarter) also exist." },
      { title: "Deluxe edition (2015)", text: "The Deluxe T&T was a Kickstarter hardcover compilation. Check for the Deluxe designation on the cover." }
    ]
  },

  // ══════════════════════════════════════════
  //  CHIVALRY & SORCERY — FOREMOST PUBLISHING
  // ══════════════════════════════════════════
  "chivalry & sorcery": {
    system: "Chivalry & Sorcery", publisher: "Fantasy Games Unlimited",
    tips: [
      { title: "1st edition (1977) saddle-stitched", text: "The original C&S (1977) is a saddle-stitched booklet published by Fantasy Games Unlimited. It is one of the earliest RPGs and very rare in good condition." },
      { title: "Multiple publishers", text: "C&S changed publishers multiple times (FGU, Brittannia Game Designs, Highlander Designs). The publisher name identifies the edition era." }
    ]
  },

  // ══════════════════════════════════════════
  //  BOOT HILL — TSR
  // ══════════════════════════════════════════
  "boot hill": {
    system: "Boot Hill", publisher: "TSR",
    tips: [
      { title: "1st edition box set (1975)", text: "Boot Hill (1975) is one of TSR's original games alongside D&D. The 1st edition box set is extremely rare. TSR catalog number 7001 (western game line)." },
      { title: "2nd edition (1979) vs 3rd edition (1990)", text: "The 2nd edition (1979) is a revised box set. The 3rd edition (1990) is a significantly different product. Check the copyright year." }
    ]
  },

  // ══════════════════════════════════════════
  //  AFTERMATH! — FANTASY GAMES UNLIMITED
  // ══════════════════════════════════════════
  "aftermath": {
    system: "Aftermath!", publisher: "Fantasy Games Unlimited",
    tips: [
      { title: "1981 box set", text: "Aftermath! (1981) is a post-apocalyptic RPG from FGU in a box set format. Check for the Fantasy Games Unlimited logo and catalog number." }
    ]
  },

  // ══════════════════════════════════════════
  //  PHOENIX COMMAND — LEADING EDGE GAMES
  // ══════════════════════════════════════════
  "phoenix command": {
    system: "Phoenix Command", publisher: "Leading Edge Games",
    tips: [
      { title: "1987 first printing", text: "Phoenix Command (1987) is a hyper-realistic combat system by Leading Edge Games. The 1st printing has a specific cover. Check the copyright year and Leading Edge Games logo." }
    ]
  },

  // ══════════════════════════════════════════
  //  LIVING STEEL / CORPORATION — LEADING EDGE
  // ══════════════════════════════════════════
  "living steel": {
    system: "Living Steel", publisher: "Leading Edge Games",
    tips: [
      { title: "1987 box set", text: "Living Steel (1987) is a sci-fi RPG using the Phoenix Command combat system. Leading Edge Games catalog. Box set format." }
    ]
  },

  // ══════════════════════════════════════════
  //  SPACE 1889 — GDW
  // ══════════════════════════════════════════
  "space 1889": {
    system: "Space: 1889", publisher: "GDW",
    tips: [
      { title: "1988 GDW first printing", text: "Space: 1889 (1988) is a Steampunk/Victorian sci-fi RPG by GDW. The 1st printing has a specific cover. GDW catalog number." },
      { title: "Heliograph reprint", text: "After GDW closed, Heliograph Inc. obtained reprint rights. Heliograph reprints have a different logo on the spine from the original GDW editions." }
    ]
  },

  // ══════════════════════════════════════════
  //  SKYREALMS OF JORUNE — SkyRealms Publishing
  // ══════════════════════════════════════════
  "skyrealms of jorune": {
    system: "Skyrealms of Jorune", publisher: "SkyRealms Publishing",
    tips: [
      { title: "1st edition (1985) vs 2nd and 3rd editions", text: "Jorune is a distinctive and obscure RPG. The 1st edition (1985) is the rarest. The 2nd edition (1987) and 3rd edition (1992) are more commonly found." },
      { title: "Box set vs softcover", text: "The 1st and 2nd editions came in box sets. The 3rd edition was a standalone softcover. The box set format immediately identifies the earlier editions." }
    ]
  },

  // ══════════════════════════════════════════
  //  CONTINUUM — AETHERCO
  // ══════════════════════════════════════════
  "continuum": {
    system: "Continuum", publisher: "Aetherco",
    tips: [
      { title: "1999 first printing", text: "Continuum (1999) is a time-travel RPG notable for its complexity. The 1st printing by Aetherco is the only edition — no subsequent editions were published. Any copy is a 1st printing." }
    ]
  },

  // ══════════════════════════════════════════
  //  NOBILIS — PHAROS PRESS / WHITE WOLF
  // ══════════════════════════════════════════
  "nobilis": {
    system: "Nobilis", publisher: "Pharos Press / R. Sean Borgstrom",
    tips: [
      { title: "1st edition (1999) vs 2nd edition (2002)", text: "The 1st edition (1999) by Pharos Press is a large-format book with distinctive cover art. The 2nd edition (2002) published by White Wolf has different cover art and revised content." },
      { title: "3rd edition (2011)", text: "The 3rd edition was crowdfunded and published by Eos Press. A very different production from the earlier White Wolf editions." }
    ]
  },

  // ══════════════════════════════════════════
  //  OVER THE EDGE — ATLAS GAMES
  // ══════════════════════════════════════════
  "over the edge": {
    system: "Over the Edge", publisher: "Atlas Games",
    tips: [
      { title: "1st edition (1992) vs 2nd edition (1997)", text: "The original Over the Edge (1992) by Atlas Games has a specific cover. The 2nd edition (1997) has revised rules and different cover art. Check the copyright year." },
      { title: "3rd edition (2019)", text: "The 3rd edition was crowdfunded in 2019 with significantly revised rules. A completely different product from the earlier editions." }
    ]
  },

  // ══════════════════════════════════════════
  //  AMBER DICELESS — PHAGE PRESS
  // ══════════════════════════════════════════
  "amber diceless roleplaying": {
    system: "Amber Diceless", publisher: "Phage Press",
    tips: [
      { title: "1991 first printing", text: "Amber Diceless Roleplaying (1991) by Erick Wujcik is based on Roger Zelazny's Amber series. The 1st printing is identifiable by the copyright year and Phage Press logo." },
      { title: "Out of print status", text: "Amber Diceless went out of print after licensing issues. All copies are from the original Phage Press run (1991-1999). Any physical copy is collectible." }
    ]
  },

  // ══════════════════════════════════════════
  //  PRINCE VALIANT — CHAOSIUM
  // ══════════════════════════════════════════
  "prince valiant the storytelling game": {
    system: "Prince Valiant", publisher: "Chaosium",
    tips: [
      { title: "1989 Chaosium edition", text: "Prince Valiant: The Storytelling Game (1989) by Greg Stafford. Published by Chaosium with licensing from the Prince Valiant comic. Limited print run makes any copy collectible." }
    ]
  },

  // ══════════════════════════════════════════
  //  GHOSTBUSTERS RPG — WEST END GAMES
  // ══════════════════════════════════════════
  "ghostbusters": {
    system: "Ghostbusters RPG", publisher: "West End Games",
    tips: [
      { title: "1986 WEG first edition", text: "The Ghostbusters RPG (1986) by West End Games was notable for introducing the d6 dice pool system later used in Star Wars. The 1st printing has a specific cover with the Ghostbusters logo." },
      { title: "Ghostbusters International (1989)", text: "A revised edition 'Ghostbusters International' was published in 1989. Different cover and revised content. Check the title on the cover." }
    ]
  },

  // ══════════════════════════════════════════
  //  PARANOIA XP / INTERNAL SECURITY — MONGOOSE
  // ══════════════════════════════════════════
  "paranoia xp": {
    system: "Paranoia XP", publisher: "Mongoose Publishing",
    tips: [
      { title: "Mongoose era (2004-2009)", text: "Paranoia XP was published by Mongoose Publishing starting in 2004. Check the Mongoose logo on the spine. Multiple supplemental books in the XP line were produced." }
    ]
  },

  // ══════════════════════════════════════════
  //  MAZES & MINOTAURS
  // ══════════════════════════════════════════
  "mazes & minotaurs": {
    system: "Mazes & Minotaurs", publisher: "Olivier Legrand",
    tips: [
      { title: "Free PDF vs print editions", text: "Mazes & Minotaurs is a free RPG available as a PDF. Print editions have been produced through Lulu and similar print-on-demand services. Check the back cover for publisher information." }
    ]
  },

  // ══════════════════════════════════════════
  //  MONGOOSE LEGENDS / LEGEND RPG
  // ══════════════════════════════════════════
  "legend rpg": {
    system: "Legend / RuneQuest", publisher: "Mongoose Publishing",
    tips: [
      { title: "Mongoose RuneQuest renamed to Legend", text: "When Mongoose lost the RuneQuest license, they renamed their edition to simply 'Legend' (2011). The content is largely the same as Mongoose RuneQuest 2nd edition. Check the cover title." }
    ]
  },

  // ══════════════════════════════════════════
  //  CTHULHU DARK
  // ══════════════════════════════════════════
  "cthulhu dark": {
    system: "Cthulhu Dark", publisher: "Graham Walmsley",
    tips: [
      { title: "Free PDF vs hardcover edition", text: "Cthulhu Dark started as a free one-page PDF. The full hardcover edition (2019) is a Kickstarter product. Check the colophon for the edition type." }
    ]
  },

  // ══════════════════════════════════════════
  //  THOSE OUTSIDE THE WIRE / NIGHT'S BLACK AGENTS
  // ══════════════════════════════════════════
  "night's black agents": {
    system: "Night's Black Agents", publisher: "Pelgrane Press",
    tips: [
      { title: "1st printing (2012)", text: "Night's Black Agents by Kenneth Hite was published by Pelgrane Press in 2012. Use the GUMSHOE system. Check the copyright year and Pelgrane Press logo." },
      { title: "Standard vs Director's Cut", text: "A Director's Cut edition with expanded content was later produced. Check the cover for 'Director's Cut' designation." }
    ]
  },

  // ══════════════════════════════════════════
  //  TRAIL OF CTHULHU — PELGRANE PRESS
  // ══════════════════════════════════════════
  "trail of cthulhu": {
    system: "Trail of Cthulhu", publisher: "Pelgrane Press",
    tips: [
      { title: "2008 first printing", text: "Trail of Cthulhu (2008) is a Pelgrane Press GUMSHOE game. The 1st printing has a specific cover. Check the copyright page for printing information." }
    ]
  },

  // ══════════════════════════════════════════
  //  TIMEWATCH — PELGRANE PRESS
  // ══════════════════════════════════════════
  "timewatch": {
    system: "TimeWatch", publisher: "Pelgrane Press",
    tips: [
      { title: "Kickstarter 2014 vs retail", text: "TimeWatch was Kickstarted in 2014. Backer copies have a colophon. Check the Pelgrane Press logo and copyright year." }
    ]
  },

  // ══════════════════════════════════════════
  //  SWORDS OF THE SERPENTINE — PELGRANE
  // ══════════════════════════════════════════
  "swords of the serpentine": {
    system: "Swords of the Serpentine", publisher: "Pelgrane Press",
    tips: [
      { title: "2021 first printing", text: "Swords of the Serpentine uses the GUMSHOE system for sword-and-sorcery play. Published by Pelgrane Press in 2021. Check the copyright page." }
    ]
  },

  // ══════════════════════════════════════════
  //  KULT DIVINITY LOST — HELMGAST
  // ══════════════════════════════════════════
  "kult divinity lost": {
    system: "Kult: Divinity Lost", publisher: "Helmgast",
    tips: [
      { title: "Kickstarter 2018 campaign", text: "Kult: Divinity Lost (2018) was crowdfunded by Helmgast. Standard and deluxe editions with different covers were produced. Check the colophon." },
      { title: "Four book types", text: "The Kickstarter produced a core book, a screen, additional adventure books, and special editions. Ensure you know which product you have by checking the cover title." }
    ]
  },

  // ══════════════════════════════════════════
  //  FRAGGED EMPIRE — DESIGN MECHANISM ADJACENT
  // ══════════════════════════════════════════
  "fragged empire": {
    system: "Fragged Empire", publisher: "Wade Dyer",
    tips: [
      { title: "Kickstarter 2015 vs retail", text: "Fragged Empire was Kickstarted in 2015 by Australian designer Wade Dyer. Backer copies have a colophon. The 2nd edition (2019) has different cover art." }
    ]
  },

  // ══════════════════════════════════════════
  //  HEROQUEST — HERO GAMES
  // ══════════════════════════════════════════
  "heroquest": {
    system: "HeroQuest", publisher: "Issaries / Moon Design / Chaosium",
    tips: [
      { title: "Not the Milton Bradley board game", text: "HeroQuest the RPG by Greg Stafford is completely different from the Milton Bradley/Hasbro board game of the same name. Check for 'Issaries' or 'Moon Design Publications' on the spine." },
      { title: "1st edition (2000) vs 2nd edition (2009)", text: "HeroQuest 1st edition (2000) and 2nd edition (2009) have different covers. The 2nd edition is the revised version. Check the copyright year." },
      { title: "Glorantha vs generic version", text: "HeroQuest Glorantha (2015) is a setting-specific version. The cover and title indicate which version you have." }
    ]
  },

  // ══════════════════════════════════════════
  //  HERO SYSTEM / CHAMPIONS
  // ══════════════════════════════════════════
  "champions": {
    system: "Champions / HERO System", publisher: "Hero Games",
    tips: [
      { title: "1st edition (1981)", text: "The original Champions (1981) is one of the first superhero RPGs. Hero Games catalog. The 1st edition is a stapled booklet format." },
      { title: "HERO System 4th, 5th, 6th editions", text: "Champions and the HERO System went through many editions. The 4th edition 'Big Blue Book' (1989), 5th edition (2002), and 6th edition (2010) are all distinct products with different cover art." }
    ]
  },

  // ══════════════════════════════════════════
  //  SORCERER — RON EDWARDS / ADEPT PRESS
  // ══════════════════════════════════════════
  "sorcerer": {
    system: "Sorcerer", publisher: "Adept Press",
    tips: [
      { title: "Original self-published zine vs collected edition", text: "Sorcerer by Ron Edwards was originally published as a series of zine-format booklets before being collected into a single volume. The zine originals are rarer than the collected edition." },
      { title: "Supplement identification", text: "Several supplements exist (Soul, Sword, Sorcerer & Sword). Each is a slim booklet. Check the subtitle on the cover to identify which supplement you have." }
    ]
  },

  // ══════════════════════════════════════════
  //  PRIMETIME ADVENTURES — DOG EARED DESIGNS
  // ══════════════════════════════════════════
  "primetime adventures": {
    system: "Primetime Adventures", publisher: "Dog Eared Designs",
    tips: [
      { title: "Multiple editions (2004, 2006, 2015)", text: "Primetime Adventures has gone through several editions. The 2015 revised edition has different cover art from the 2004 original. Check the copyright year." }
    ]
  },

  // ══════════════════════════════════════════
  //  DREAD — THE IMPOSSIBLE DREAM
  // ══════════════════════════════════════════
  "dread rpg": {
    system: "Dread", publisher: "The Impossible Dream",
    tips: [
      { title: "2005 first printing", text: "Dread (the Jenga tower RPG) was first published in 2005 by The Impossible Dream. Multiple printings have been released. Check the copyright page." }
    ]
  },

  // ══════════════════════════════════════════
  //  FIASCO — BULLY PULPIT GAMES
  // ══════════════════════════════════════════
  "fiasco": {
    system: "Fiasco", publisher: "Bully Pulpit Games",
    tips: [
      { title: "Original (2009) vs revised edition (2019)", text: "The original Fiasco (2009) is a slim softcover with a specific cover. The revised 2nd edition (2019) has new cover art and rules updates. Check the copyright year." }
    ]
  },

  // ══════════════════════════════════════════
  //  KINGDOM — LAME MAGE
  // ══════════════════════════════════════════
  "kingdom": {
    system: "Kingdom", publisher: "Lame Mage Productions",
    tips: [
      { title: "2013 first printing", text: "Kingdom by Ben Robbins (2013) is a companion game to Microscope. Check for the Lame Mage logo and the copyright year." }
    ]
  },

  // ══════════════════════════════════════════
  //  CHUUBO'S MARVELOUS WISH-GRANTING ENGINE
  // ══════════════════════════════════════════
  "chubos marvelous wish granting engine": {
    system: "Chuubo's", publisher: "Jenna Moran / Eos Press",
    tips: [
      { title: "Kickstarter 2013 edition", text: "Chuubo's Marvelous Wish-Granting Engine was Kickstarted in 2013. The physical edition is a large spiral-bound book — an unusual format that is instantly recognizable." }
    ]
  },

  // ══════════════════════════════════════════
  //  WORLDS IN PERIL — BRANDON BOND
  // ══════════════════════════════════════════
  "worlds in peril": {
    system: "Worlds in Peril", publisher: "Brandon Bond",
    tips: [
      { title: "2015 first printing", text: "Worlds in Peril (2015) is a superhero PbtA game. Published by Brandon Bond. Check the copyright page for printing information." }
    ]
  },

  // ══════════════════════════════════════════
  //  SIGNAL / FEED / STATIC — THESE ARE THINGS
  // ══════════════════════════════════════════
  "signal rpg": {
    system: "Signal", publisher: "These Are Things",
    tips: [
      { title: "Small press zine format", text: "Signal is a small-press zine RPG. Print run information is typically in the colophon on the final page." }
    ]
  },

  // ══════════════════════════════════════════
  //  ZWEIHANDER COMPANION GAMES
  // ══════════════════════════════════════════
  "flames of freedom grim and perilous": {
    system: "ZWEIHÄNDER / Flames of Freedom", publisher: "Grim & Perilous Studios",
    tips: [
      { title: "American Revolution setting (2021)", text: "Flames of Freedom (2021) uses the ZWEIHÄNDER rules in a colonial American setting. Check for the Grim & Perilous Studios logo and copyright year." }
    ]
  },

  // ══════════════════════════════════════════
  //  IRONSWORN ADJACENT / SOLO RPGs
  // ══════════════════════════════════════════
  "thousand year old vampire": {
    system: "Thousand Year Old Vampire", publisher: "Tim Hutchings",
    tips: [
      { title: "Kickstarter 2019 edition", text: "Thousand Year Old Vampire was Kickstarted in 2019. The physical edition is a distinctive hardcover. Standard and special editions with different covers were produced." }
    ]
  },
  "alone among the stars": {
    system: "Alone Among the Stars", publisher: "Takuma Okada",
    tips: [
      { title: "Free PDF vs print", text: "Alone Among the Stars is primarily a free PDF game. Print editions are typically produced through print-on-demand services." }
    ]
  },

  // ══════════════════════════════════════════
  //  GENOTYPE / SCIENCE FICTION RPGs
  // ══════════════════════════════════════════
  "mothership rpg": {
    system: "Mothership", publisher: "Tuesday Knight Games",
    tips: [
      { title: "Zine format 1st edition vs boxed 2nd edition", text: "The original Mothership Warden's Operations Manual was published in a distinctive digest/zine format. The 2nd edition (2023) is a larger boxed set with multiple booklets. Format and size immediately distinguish them." },
      { title: "Original Player Survival Guide", text: "The original Mothership Player Survival Guide (2018) is a separate slim saddle-stitched booklet. Check whether you have the Player Guide or the Warden's Manual." }
    ]
  },

  // ══════════════════════════════════════════
  //  THE BETWEEN — GAUNTLET PUBLISHING
  // ══════════════════════════════════════════
  "the between": {
    system: "The Between", publisher: "Gauntlet Publishing",
    tips: [
      { title: "Companion to Brindlewood Bay (2022)", text: "The Between is a standalone companion game to Brindlewood Bay set in Victorian London. Published by Gauntlet Publishing. Kickstarter backer copies have a colophon." }
    ]
  },

  // ══════════════════════════════════════════
  //  AMERICAN DOOM / VAESEN — FREE LEAGUE
  // ══════════════════════════════════════════
  "vaesen": {
    system: "Vaesen", publisher: "Free League Publishing",
    tips: [
      { title: "2021 English edition", text: "Vaesen (2021) is based on the work of Swedish illustrator Johan Egerkrans. Standard and collector's editions were produced. A Nordic Horror Roleplaying boxed set was the Kickstarter reward." },
      { title: "Standard vs collector's edition", text: "Check whether you have the standard hardcover or the collector's edition with the additional components box." }
    ]
  },

  // ══════════════════════════════════════════
  //  CASTLES & CRUSADES COMPANIONS
  // ══════════════════════════════════════════
  "castle keepers guide": {
    system: "Castles & Crusades", publisher: "Troll Lord Games",
    tips: [
      { title: "Multiple printings", text: "The Castle Keeper's Guide has gone through several printings with content revisions. Troll Lord explicitly labels printings on the copyright page." }
    ]
  },

  // ══════════════════════════════════════════
  //  WOIN — EN PUBLISHING
  // ══════════════════════════════════════════
  "what's old is new": {
    system: "WOIN", publisher: "EN Publishing",
    tips: [
      { title: "Three separate core books", text: "WOIN consists of three core books: O.L.D. (fantasy), N.O.W. (modern), and N.E.W. (sci-fi). Each is a standalone game. Check the book's subtitle to identify which volume you have." }
    ]
  },

  // ══════════════════════════════════════════
  //  WORLDS WITHOUT NUMBER — SINE NOMINE
  // ══════════════════════════════════════════
  "worlds without number": {
    system: "Worlds Without Number", publisher: "Sine Nomine Publishing",
    tips: [
      { title: "Free vs deluxe edition", text: "Worlds Without Number has a free edition (PDF only) and a deluxe hardcover edition with extra content. The deluxe hardcover is the physical collectible. Check the copyright page for edition information." }
    ]
  },
  "stars without number": {
    system: "Stars Without Number", publisher: "Sine Nomine Publishing",
    tips: [
      { title: "Revised edition (2017)", text: "Stars Without Number Revised Edition (2017) is a significant update from the original (2010). A free and deluxe version of the revised edition both exist. Check the copyright year and edition statement." }
    ]
  },
  "other dust": {
    system: "Other Dust", publisher: "Sine Nomine Publishing",
    tips: [
      { title: "2012 first printing", text: "Other Dust (2012) is a post-apocalyptic companion to Stars Without Number. Published by Sine Nomine. Check the copyright year." }
    ]
  },

  // ══════════════════════════════════════════
  //  SPELLBOUND KINGDOMS — FRANK BRUNNER
  // ══════════════════════════════════════════
  "spellbound kingdoms": {
    system: "Spellbound Kingdoms", publisher: "ICHOR FALLS / Frank Brunner",
    tips: [
      { title: "2009 first printing", text: "Spellbound Kingdoms (2009) is a fantasy RPG with a strong narrative focus. Published in very limited quantities. Any copy is from the original print run." }
    ]
  },

  // ══════════════════════════════════════════
  //  GOODMAN GAMES — FULL CRAWL CLASSICS LINE
  // ══════════════════════════════════════════
  "xcrawl classics": {
    system: "XCrawl Classics", publisher: "Goodman Games",
    tips: [
      { title: "Kickstarter 2021 launch", text: "XCrawl Classics was crowdfunded via Kickstarter in 2021 as a standalone game using the DCC rules engine. Kickstarter backer copies have a colophon or backer acknowledgment page distinct from retail copies." },
      { title: "Standard vs limited edition covers", text: "Goodman Games produced limited edition cover variants for XCrawl Classics as they do across their entire product line. A non-standard cover is typically a limited printing. Check the back cover or colophon for print run information." },
      { title: "XCrawl vs original XCrawl", text: "XCrawl Classics is a reimagining of the original XCrawl game that was published by Pandahead Productions and later Goodman Games in the early 2000s under the d20 system. If you have the older d20 version, check for the d20 logo on the cover — that is the original XCrawl, not XCrawl Classics." },
      { title: "Sellout Society supplement", text: "Check whether you have the core rulebook or one of the XCrawl Classics supplements. The title on the cover identifies the specific product within the line." }
    ]
  },
  "mutant crawl classics": {
    system: "Mutant Crawl Classics", publisher: "Goodman Games",
    tips: [
      { title: "2018 first printing", text: "Mutant Crawl Classics RPG (MCC) was published by Goodman Games in 2018. The 1st printing has a distinctive painted cover. Check the copyright page for printing information." },
      { title: "Standard vs limited edition covers", text: "As with all Goodman Games products, limited edition cover variants were produced. Check the back cover or colophon for the print run designation." },
      { title: "Companion to DCC", text: "MCC uses the same core engine as Dungeon Crawl Classics but is set in a post-apocalyptic science-fantasy world inspired by Gamma World and classic mutant fiction. If you have a DCC-sized folio module that says MCC on the cover, that is a Mutant Crawl Classics adventure module." },
      { title: "MCC adventure modules", text: "MCC adventure modules share the same folio format as DCC modules. They are numbered in their own sequence (MCC #1, MCC #2, etc.). Check the cover for the MCC module number." }
    ]
  },
  "xcrawl": {
    system: "XCrawl (original d20)", publisher: "Pandahead / Goodman Games",
    tips: [
      { title: "Pandahead vs Goodman Games editions", text: "The original XCrawl was self-published by Pandahead Productions before Goodman Games picked up the line. Pandahead copies predate the Goodman Games logo. Check the publisher on the spine." },
      { title: "d20 logo identifies original edition", text: "The original XCrawl uses the d20 system and carries the d20 System logo on the cover. If you see this logo, you have the original pre-Classics version." },
      { title: "Goodman Games d20 edition", text: "Goodman Games published revised editions of XCrawl under the d20 system before eventually producing XCrawl Classics. Check the copyright year — pre-2021 copies are the d20 era editions." }
    ]
  },
  "dungeon crawl classics rpg": {
    system: "Dungeon Crawl Classics", publisher: "Goodman Games",
    tips: [
      { title: "Purple cover core rulebook (2012)", text: "The DCC RPG core rulebook (2012) has a distinctive purple cover with classic Otus-style art. This is the standard edition. Check the copyright year on the copyright page." },
      { title: "Gold foil and other variant covers", text: "A gold-foil cover variant was produced in a limited run, as well as other special covers over the years. The standard purple cover and the gold foil are the most recognized variants." },
      { title: "Number line on copyright page", text: "Goodman Games uses a number line on the copyright page of the DCC core book. The lowest digit present equals the printing number. The 1st printing has all digits in the sequence." },
      { title: "Kickstarter backer editions", text: "Later printings and anniversary editions were produced via Kickstarter. Backer copies have a colophon or acknowledgment section." }
    ]
  },
  "dungeon crawl classics lankhmar": {
    system: "DCC Lankhmar", publisher: "Goodman Games",
    tips: [
      { title: "Licensed Fafhrd and Gray Mouser setting", text: "DCC Lankhmar is a licensed setting based on Fritz Leiber's Fafhrd and the Gray Mouser stories. Check for the Leiber estate licensing notice on the copyright page." },
      { title: "Box set format", text: "DCC Lankhmar was released as a box set with multiple components. Check whether all box contents are present for a complete copy." }
    ]
  },
  "dungeon crawl classics dying earth": {
    system: "DCC Dying Earth", publisher: "Goodman Games",
    tips: [
      { title: "Jack Vance licensed setting (2021)", text: "DCC Dying Earth is based on Jack Vance's Dying Earth stories. Licensed from the Vance estate. Check the copyright page for the licensing notice and publication year." },
      { title: "Kickstarter edition", text: "Dying Earth was crowdfunded. Kickstarter backer copies have a colophon distinct from retail copies." }
    ]
  },
  "dungeon crawl classics conan": {
    system: "DCC Conan", publisher: "Goodman Games",
    tips: [
      { title: "Licensed Conan setting", text: "DCC Conan is a licensed Conan the Barbarian setting. Check for the Conan Properties International licensing notice on the copyright page." },
      { title: "Separate from Modiphius Conan", text: "This is a completely different product from the Modiphius Entertainment 2d20 Conan RPG. The DCC rules engine and the cover art clearly distinguish it." }
    ]
  },
  "fifth edition fantasy": {
    system: "Fifth Edition Fantasy", publisher: "Goodman Games",
    tips: [
      { title: "D&D 5e compatible modules", text: "Fifth Edition Fantasy is Goodman Games' line of 5e-compatible adventure modules. They use the same folio format as DCC modules. The cover clearly states 'Fifth Edition Fantasy' and a module number." },
      { title: "Limited vs standard editions", text: "As with all Goodman Games products, limited edition covers are produced. Check the back cover for print run information." }
    ]
  },
  "original adventures reincarnated": {
    system: "Original Adventures Reincarnated", publisher: "Goodman Games",
    tips: [
      { title: "Hardcover reprints with 5e conversion", text: "The OAR line reprints classic TSR adventure modules in hardcover format, paired with 5th edition conversions. Each volume covers a specific classic module." },
      { title: "Volume identification", text: "Each OAR volume is numbered and named on the cover (e.g. OAR #1: Into the Borderlands). Check the volume number and title to identify the specific product." },
      { title: "Kickstarter vs retail editions", text: "OAR volumes are typically Kickstarted before retail release. Backer copies may have a colophon or additional exclusive content not in the retail version." }
    ]
  },
  "goodman games annual": {
    system: "Goodman Games Annual", publisher: "Goodman Games",
    tips: [
      { title: "Yearbook format", text: "Goodman Games produces annual compilation books collecting articles, adventures, and content from various product lines. Check the year on the cover to identify which annual you have." }
    ]
  },
  "fantasy age": {
    system: "Fantasy AGE", publisher: "Green Ronin",
    tips: [
      { title: "Basic vs Companion vs 2nd edition", text: "Fantasy AGE Basic Rulebook (2015) and the expanded Fantasy AGE Companion (2017) are different products. Fantasy AGE 2nd edition (2021) is a revised standalone. Check the cover title." }
    ]
  },
  "modern age": {
    system: "Modern AGE", publisher: "Green Ronin",
    tips: [
      { title: "2018 first printing", text: "Modern AGE (2018) uses the AGE system for contemporary settings. Check the copyright year and Green Ronin logo." }
    ]
  },
  "dragon age rpg": {
    system: "Dragon Age RPG", publisher: "Green Ronin",
    tips: [
      { title: "Box sets vs Core Rulebook", text: "Dragon Age RPG was originally released as three box sets (Set 1: 2010, Set 2: 2012, Set 3: 2014) before a combined Core Rulebook (2015). Check whether you have a box set or the unified hardcover." },
      { title: "Electronic Arts license", text: "Dragon Age RPG is a licensed product based on BioWare's Dragon Age video games. Check for the BioWare/EA licensing notice on the copyright page." }
    ]
  },
  "the expanse rpg": {
    system: "The Expanse RPG", publisher: "Green Ronin",
    tips: [
      { title: "2019 first printing", text: "The Expanse RPG (2019) is based on the book and TV series. Published by Green Ronin. Check the copyright year and the licensing notice from Alcon Entertainment." }
    ]
  },
  "a song of ice and fire rpg": {
    system: "A Song of Ice and Fire RPG", publisher: "Green Ronin",
    tips: [
      { title: "Chronicle System (2009)", text: "The SIFRP core book was published by Green Ronin in 2009. Licensed from George R.R. Martin. Check for the GRRM licensing notice on the copyright page." },
      { title: "Out of print status", text: "Green Ronin lost the license in 2020. The book went out of print and physical copies are increasingly collectible." }
    ]
  },
  "goodman games gen con program guide": {
    system: "Goodman Games / DCC", publisher: "Goodman Games",
    tips: [
      { title: "Convention exclusive", text: "Goodman Games produces exclusive products for Gen Con each year, including special program guides and convention-only modules. These are produced in very limited quantities and are among the rarest DCC products." }
    ]
  },

  // ══════════════════════════════════════════
  //  OTHER CRAWL CLASSICS ADJACENT GAMES
  // ══════════════════════════════════════════
  "hyperborea": {
    system: "Hyperborea (AS&SH)", publisher: "North Wind Adventures",
    tips: [
      { title: "Astonishing Swordsmen & Sorcerers of Hyperborea 1st vs 2nd vs 3rd edition", text: "AS&SH 1st edition (2012) was a boxed set. The 2nd edition (2016) was a Kickstarted hardcover. The 3rd edition retitled as simply 'Hyperborea' (2022). Check the cover title — the name change to Hyperborea identifies the 3rd edition." },
      { title: "Box set vs hardcover format", text: "If you have a box set, you have the 1st edition. A single large hardcover is either the 2nd edition or the 3rd edition (Hyperborea). Check the cover title and copyright year." }
    ]
  },
  "dark places & demogorgons": {
    system: "Dark Places & Demogorgons", publisher: "Bloat Games",
    tips: [
      { title: "OSR survival horror (2017)", text: "Dark Places & Demogorgons is an OSR game inspired by 1980s horror fiction. Published by Bloat Games. Check the copyright year and edition statement." }
    ]
  },
  "godless": {
    system: "Godless", publisher: "Bloat Games",
    tips: [
      { title: "Sci-fi OSR game", text: "Godless is a science fiction OSR game from Bloat Games. Check the Bloat Games logo and copyright year." }
    ]
  },
  "umerica survival guide": {
    system: "Umerica / DCC", publisher: "Shield of Faith Studios",
    tips: [
      { title: "DCC compatible post-apocalyptic setting", text: "The Umerica Survival Guide is a third-party DCC-compatible post-apocalyptic setting. Check the copyright year and Shield of Faith Studios logo." }
    ]
  },
  "crawljammer": {
    system: "Crawljammer / DCC", publisher: "Moon Dice Games",
    tips: [
      { title: "DCC zine series", text: "Crawljammer is a zine series for DCC with a science-fantasy space theme. Each issue is numbered. Check the issue number on the cover." }
    ]
  },
  "transylvanian adventures": {
    system: "Transylvanian Adventures", publisher: "Straycouches Press",
    tips: [
      { title: "DCC compatible horror setting", text: "Transylvanian Adventures is a third-party DCC-compatible game set in a gothic horror version of Transylvania. Check the Straycouches Press logo and copyright year." }
    ]
  },
  "hubris": {
    system: "Hubris / DCC", publisher: "Mike Evans",
    tips: [
      { title: "DCC compatible gonzo setting (2017)", text: "Hubris is a third-party DCC-compatible setting book published via Kickstarter in 2017. Backer and retail copies have a colophon." }
    ]
  },
  "the black city": {
    system: "OSR / The Black City", publisher: "Greg Gorgonmilk",
    tips: [
      { title: "OSR zine product", text: "The Black City is a small-press OSR zine product. Print run information is in the colophon." }
    ]
  },
  "peril on the purple planet": {
    system: "DCC", publisher: "Goodman Games",
    tips: [
      { title: "DCC boxed set adventure (2014)", text: "Peril on the Purple Planet is a DCC boxed set adventure — a larger format product than standard DCC modules. Check for the box set format and Goodman Games catalog number." }
    ]
  },

  // ══════════════════════════════════════════
  //  ADDITIONAL OVERLOOKED CLASSICS
  // ══════════════════════════════════════════
  "powers & perils": {
    system: "Powers & Perils", publisher: "Avalon Hill",
    tips: [
      { title: "1983 Avalon Hill box set", text: "Powers & Perils (1983) is an obscure fantasy RPG published by Avalon Hill. The box set contains multiple booklets. Avalon Hill catalog number. Any complete box set is collectible." }
    ]
  },
  "dragonquest": {
    system: "DragonQuest", publisher: "SPI / TSR",
    tips: [
      { title: "SPI original (1980) vs TSR editions", text: "DragonQuest was originally published by SPI in 1980. When TSR acquired SPI, they published revised editions. The SPI logo vs TSR logo on the box immediately identifies the era." },
      { title: "3rd edition (1989)", text: "A 3rd edition was published in 1989. Three distinct editions exist — check the copyright year and publisher logo." }
    ]
  },
  "dangerous journeys": {
    system: "Dangerous Journeys", publisher: "GDW",
    tips: [
      { title: "Gary Gygax post-TSR game (1992)", text: "Dangerous Journeys was Gary Gygax's RPG created after leaving TSR. Published by GDW in 1992. TSR sued over similarities to AD&D and the line was discontinued. Any copy is collectible due to the limited availability." }
    ]
  },
  "lejendary adventure": {
    system: "Lejendary Adventure", publisher: "Hekaforge Productions",
    tips: [
      { title: "Gary Gygax's second post-TSR RPG", text: "Lejendary Adventure was Gary Gygax's revised RPG after the Dangerous Journeys legal dispute. Published by Hekaforge Productions. Limited print runs make any copy moderately collectible." }
    ]
  },
  "castles & crusades of the airship pirates": {
    system: "Airship Pirates", publisher: "Cubicle 7",
    tips: [
      { title: "Steampunk RPG based on Abney Park", text: "Airship Pirates (2011) is a steampunk RPG based on the Abney Park band's music. Published by Cubicle 7. Check for the Cubicle 7 logo and Abney Park licensing notice." }
    ]
  },
  "numenera discovery": {
    system: "Numenera", publisher: "Monte Cook Games",
    tips: [
      { title: "Revised edition split (2018)", text: "Numenera Discovery and Numenera Destiny are the two books that replaced the original Numenera core rulebook in 2018. Each is a standalone game. Check the subtitle — Discovery covers player-facing content, Destiny covers building and community." }
    ]
  },
  "index card rpg": {
    system: "Index Card RPG", publisher: "Runehammer Games",
    tips: [
      { title: "ICRPG Master Edition vs earlier editions", text: "ICRPG has gone through several editions. The Master Edition (2019) is a large hardcover. Earlier editions were smaller softcovers. Check the physical size and cover title." },
      { title: "Kickstarter vs retail", text: "Multiple ICRPG products were crowdfunded. Backer copies have a colophon." }
    ]
  },
  "maze rats": {
    system: "Maze Rats", publisher: "Ben Milton / Questing Beast",
    tips: [
      { title: "Free PDF vs print edition", text: "Maze Rats is primarily a free PDF game. Physical print editions are produced through print-on-demand. Check the back cover for print edition information." }
    ]
  },
  "the clay that woke": {
    system: "The Clay That Woke", publisher: "Semipermeable Press",
    tips: [
      { title: "2014 limited print run", text: "The Clay That Woke (2014) by Paul Czege is a very limited small-press RPG. It was produced in a small print run and any physical copy is rare." }
    ]
  },
  "a penny for my thoughts": {
    system: "A Penny For My Thoughts", publisher: "Evil Hat Productions",
    tips: [
      { title: "2009 first printing", text: "A Penny For My Thoughts by Paul Tevis (2009) was published by Evil Hat Productions. Check the Evil Hat logo and copyright year." }
    ]
  },
  "the quiet year": {
    system: "The Quiet Year", publisher: "Buried Without Ceremony",
    tips: [
      { title: "Multiple printings (2013 onward)", text: "The Quiet Year by Avery Alder has gone through multiple printings since 2013. The edition or printing may be noted in the colophon." }
    ]
  },
  "downfall": {
    system: "Downfall", publisher: "Joshua A.C. Newman",
    tips: [
      { title: "Small press edition", text: "Downfall is a small-press GM-less RPG about civilizations in decline. Print run information is in the colophon." }
    ]
  },
  "curse of strahd": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2016 first printing", text: "Curse of Strahd (2016) is the 5e adaptation of the classic Ravenloft adventure. The 1st printing can be identified by the number line on the copyright page. All digits present equals 1st printing." },
      { title: "Alternate cover (2020)", text: "A limited alternate cover edition was released in 2020. The alternate cover features a different illustration from the original. Check the cover art to identify which version you have." }
    ]
  },
  "tomb of annihilation": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2017 first printing", text: "Tomb of Annihilation (2017). Number line on copyright page. Alternate hobby store covers were produced." }
    ]
  },
  "waterdeep dragon heist": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2018 first printing", text: "Waterdeep: Dragon Heist (2018). Number line on copyright page. Four different cover variants were produced — one for each of the four villains in the adventure." },
      { title: "Four villain cover variants", text: "The Xanathar, Jarlaxle, Manshoon, and Cassalantar cover variants were produced as hobby store exclusives. Collecting all four is a common goal for completionists." }
    ]
  },
  "strixhaven curriculum of chaos": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2021 first printing", text: "Strixhaven: A Curriculum of Chaos (2021) is a crossover with the Magic: The Gathering setting. Number line on copyright page." }
    ]
  },

  // ══════════════════════════════════════════
  //  OLD SCHOOL RPGs — ADDITIONAL
  // ══════════════════════════════════════════
  "villains & vigilantes": {
    system: "Villains & Vigilantes", publisher: "Fantasy Games Unlimited",
    tips: [
      { title: "1979 first edition", text: "V&V (1979) is one of the earliest superhero RPGs from Fantasy Games Unlimited. The 1st edition is a saddle-stitched booklet. Check the cover price and FGU catalog number." },
      { title: "2nd edition (1982)", text: "The 2nd edition has revised rules and a different cover. Copyright year and cover art distinguish the two editions." }
    ]
  },
  "space opera": {
    system: "Space Opera", publisher: "Fantasy Games Unlimited",
    tips: [
      { title: "1980 FGU box set", text: "Space Opera (1980) is a complex sci-fi RPG from FGU. The original is a box set. FGU catalog number." }
    ]
  },
  "bushido": {
    system: "Bushido", publisher: "Fantasy Games Unlimited",
    tips: [
      { title: "1979 first edition", text: "Bushido (1979) is one of the first samurai-themed RPGs. The original is a saddle-stitched booklet from FGU. A revised edition was published by Game Designers' Workshop in 1981." }
    ]
  },
  "flashing blades": {
    system: "Flashing Blades", publisher: "Fantasy Games Unlimited",
    tips: [
      { title: "1984 swashbuckling RPG", text: "Flashing Blades (1984) covers 17th century France. FGU catalog number. Any copy in good condition is increasingly difficult to find." }
    ]
  },
  "crossroads": {
    system: "Crossroads", publisher: "FGU",
    tips: [
      { title: "Fantasy Games Unlimited product", text: "Check the FGU catalog number on the back cover and the copyright year to identify the specific edition." }
    ]
  },
  "privateers and gentlemen": {
    system: "Privateers and Gentlemen", publisher: "Fantasy Games Unlimited",
    tips: [
      { title: "1983 naval RPG", text: "Privateers and Gentlemen (1983) is a Napoleonic naval RPG from FGU. Limited print run. Check the FGU catalog number." }
    ]
  },


  // ══════════════════════════════════════════
  //  AD&D 1ST EDITION — MORE MODULES & SUPPLEMENTS
  // ══════════════════════════════════════════
  "descent into the depths of the earth": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "D1-2 combined vs individual modules", text: "D1 (Descent Into the Depths of the Earth) and D2 (Shrine of the Kuo-Toa) were originally separate 1978 modules before being combined into D1-2 in 1981. Individual 1978 copies are more valuable than the combined edition. Check the cover — individual copies say D1 or D2 only." },
      { title: "Tournament module origins", text: "D1 and D2 originated as 1978 Gen Con tournament modules with plain tan covers. The retail versions have illustrated covers. A plain tan cover without illustration is an extremely rare tournament copy." }
    ]
  },
  "shrine of the kuo-toa": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "Module code D2", text: "Originally a standalone 1978 module, later combined with D1. See 'Descent Into the Depths of the Earth' entry for full identification details." }
    ]
  },
  "vault of the drow": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "Module code D3 (1978)", text: "Vault of the Drow is the final module in the D-series. The 1978 original has a plain tan tournament cover. The retail version has illustrated art. Check the cover art to determine which version you have." },
      { title: "Cover price and number line", text: "The retail 1st printing shows a specific price. Later printings add a number line on the copyright page." }
    ]
  },
  "demonweb pits": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "Module code Q1 — includes a board game", text: "Queen of the Demonweb Pits (Q1, 1980) uniquely includes a board game element within the module. A complete copy should have the board game component intact. Missing board pieces significantly affect value." },
      { title: "Cover art", text: "The Q1 cover features Lolth. The TSR catalog number and number line on the copyright page identify the printing." }
    ]
  },
  "isle of the ape": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "WG6 high-level module (1985)", text: "Isle of the Ape (WG6, 1985) is written for extremely high-level characters. A relatively late 1st edition module. Check the WG6 code on the cover and the copyright year." }
    ]
  },
  "castle greyhawk": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "WG7 — parody module (1988)", text: "Castle Greyhawk (WG7, 1988) is an intentionally comedic parody adventure that was controversial among fans. Check the WG7 module code and copyright year." }
    ]
  },
  "dwellers of the forbidden city": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "Module code I1 (1981)", text: "Dwellers of the Forbidden City (I1) introduced the yuan-ti to D&D. The 1st printing (1981) has a specific cover. Check the I1 module code and cover price." }
    ]
  },
  "the assassin's knot": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "Module code L2 (1983)", text: "The Assassin's Knot (L2) is a mystery-format module. Check the L2 code and the copyright year 1983." }
    ]
  },
  "secret of the slavers stockade": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "A2 module (1981)", text: "Part of the Slavers series (A1-A4). Originally a 1980 tournament module, published as a retail module in 1981. Individual A-series modules are more collectible than the combined A1-4 supermodule." }
    ]
  },
  "scourge of the slave lords": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "A1-4 combined supermodule (1986)", text: "Scourge of the Slave Lords combines all four A-series modules. Published 1986. Individual original modules (A1, A2, A3, A4) are generally worth more separately than this compilation." }
    ]
  },
  "the lost city": {
    system: "Basic D&D", publisher: "TSR",
    tips: [
      { title: "Module code B4 (1982)", text: "The Lost City (B4, 1982) is a Basic D&D module set in an ancient Egyptian-style city. Check the B4 code, cover price, and number line on the copyright page." }
    ]
  },
  "the horror on the hill": {
    system: "Basic D&D", publisher: "TSR",
    tips: [
      { title: "Module code B5 (1983)", text: "The Horror on the Hill (B5, 1983). Check the B5 module code and copyright year." }
    ]
  },
  "in search of the unknown": {
    system: "Basic D&D", publisher: "TSR",
    tips: [
      { title: "Module code B1 — included in Basic Set", text: "In Search of the Unknown (B1, 1978) was included in the Holmes Basic Set. The standalone retail version and the boxed set inclusion have slightly different covers. Check whether the cover has a price or was intended as a pack-in." }
    ]
  },
  "the sunless citadel": {
    system: "D&D 3rd Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "First 3e module (2000)", text: "The Sunless Citadel (2000) was the first published module for D&D 3rd edition. Catalog number 11634. The 1st printing is identifiable by the copyright year and number line." }
    ]
  },
  "the forge of fury": {
    system: "D&D 3rd Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "Second 3e module (2000)", text: "The Forge of Fury (2000) was the second major 3e module. Check the copyright year and WotC catalog number." }
    ]
  },

  // ══════════════════════════════════════════
  //  SPELLJAMMER — TSR
  // ══════════════════════════════════════════
  "spelljammer": {
    system: "Spelljammer / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1989 box set", text: "The original Spelljammer box set (1989) contains two booklets, a DM screen, two maps, and cardboard ship models. Completeness is extremely important — missing ship models or maps significantly reduce value." },
      { title: "Box set component checklist", text: "A complete Spelljammer box should contain: Concordance of Arcane Space, Lorebook of the Void, DM screen, two poster maps, and cardboard ship tokens. Check each component." },
      { title: "Number line on booklets", text: "Check the copyright page number lines on each booklet independently. Matching number lines across all booklets indicates a complete single-print-run set." }
    ]
  },
  "spelljammer adventures in space": {
    system: "Spelljammer / D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2022 box set revival", text: "The 5e Spelljammer revival (2022) came as a three-book box set: Astral Adventurer's Guide, Boo's Astral Menagerie, and Light of Xaryxis. Check that all three books and any included accessories are present." },
      { title: "Alternate cover edition", text: "A hobby store exclusive alternate cover edition was produced for the box set." }
    ]
  },

  // ══════════════════════════════════════════
  //  PLANESCAPE — TSR
  // ══════════════════════════════════════════
  "planescape campaign setting": {
    system: "Planescape / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1994 box set — completeness critical", text: "The original Planescape Campaign Setting (1994) is a box set containing four booklets, a DM screen, and two poster maps. Completeness is essential — missing components dramatically reduce value." },
      { title: "Component checklist", text: "A complete box contains: A Player's Guide to the Planes, A DM Guide to the Planes, In the Cage: A Guide to Sigil, Sigil and Beyond, a DM screen, and two double-sided poster maps." },
      { title: "Tony DiTerlizzi art", text: "The Planescape setting is defined by Tony DiTerlizzi's distinctive interior art. All printings feature his art — this does not distinguish between printings." }
    ]
  },
  "planescape torment": {
    system: "Planescape / AD&D 2nd Edition", publisher: "TSR / Black Isle",
    tips: [
      { title: "Video game tie-in products", text: "If you have a Planescape: Torment product, it is a video game tie-in rather than a core RPG product. The original Planescape Campaign Setting box set is the primary collectible RPG product." }
    ]
  },
  "faction war": {
    system: "Planescape / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1998 final Planescape adventure", text: "Faction War (1998) was the last major Planescape adventure before the line was discontinued. The 1st printing is identified by the copyright year and TSR catalog number." }
    ]
  },

  // ══════════════════════════════════════════
  //  DARK SUN — TSR
  // ══════════════════════════════════════════
  "dark sun campaign setting": {
    system: "Dark Sun / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1991 original box set", text: "The original Dark Sun Campaign Setting (1991) is a box set containing two booklets and a large poster map. The 1st printing is distinguished by the number line on the booklet copyright pages." },
      { title: "Revised and expanded edition (1992)", text: "A revised and expanded edition was published in 1992 with additional rules and a larger map. The revised box is labeled accordingly on the cover." },
      { title: "Poster map completeness", text: "The large double-sided poster map is frequently missing from used copies. A complete set with the original map is worth significantly more." }
    ]
  },

  // ══════════════════════════════════════════
  //  RAVENLOFT CAMPAIGN SETTING — TSR
  // ══════════════════════════════════════════
  "ravenloft campaign setting": {
    system: "Ravenloft / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "Realm of Terror box set (1990)", text: "The original Ravenloft Campaign Setting 'Realm of Terror' (1990) is a box set containing two booklets, a DM screen, and maps. Check for all components." },
      { title: "Domains of Dread hardcover (1997)", text: "A standalone hardcover 'Domains of Dread' was published in 1997. This is a different product from the original box set. The hardcover format immediately distinguishes it." }
    ]
  },

  // ══════════════════════════════════════════
  //  FORGOTTEN REALMS — TSR / WOTC
  // ══════════════════════════════════════════
  "forgotten realms campaign setting": {
    system: "Forgotten Realms / AD&D", publisher: "TSR",
    tips: [
      { title: "Gray Box 1st edition (1987)", text: "The original Forgotten Realms Campaign Setting 'Gray Box' (1987) is among the most collectible TSR box sets. It contains two booklets and a set of poster maps. A complete Gray Box in good condition is highly sought after." },
      { title: "Gray Box component checklist", text: "A complete Gray Box contains: DM's Sourcebook of the Realms, Player's Guide to the Forgotten Realms, and four poster maps (two double-sided). All four maps must be present." },
      { title: "2nd edition hardcover (1993)", text: "The 2nd edition Forgotten Realms Campaign Setting was published as a hardcover in 1993 — entirely different from the Gray Box. The format alone distinguishes them." },
      { title: "3rd edition Forgotten Realms (2001)", text: "WotC published a 3rd edition hardcover Campaign Setting in 2001. Each edition has distinct cover art." }
    ]
  },
  "volo's guide to monsters": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2016 first printing", text: "Volo's Guide to Monsters (2016). Alternate hobby store covers were produced. Number line on copyright page identifies printing." }
    ]
  },
  "mordenkainen's tome of foes": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2018 first printing with alternate covers", text: "Mordenkainen's Tome of Foes (2018). Standard and hobby store alternate covers exist. Number line on copyright page." }
    ]
  },
  "mordenkainen presents monsters of the multiverse": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2022 first printing", text: "Published standalone and as part of the Rules Expansion Gift Set (2022). The Gift Set version is a different SKU from the standalone book." }
    ]
  },

  // ══════════════════════════════════════════
  //  GREYHAWK CAMPAIGN SETTING — TSR
  // ══════════════════════════════════════════
  "world of greyhawk": {
    system: "AD&D / Greyhawk", publisher: "TSR",
    tips: [
      { title: "Folio (1980) vs Box Set (1983)", text: "World of Greyhawk was first published as a folio (1980) containing two booklets and a map, then as a larger box set (1983). The folio is significantly rarer. Check the format — a folder/folio versus a box immediately identifies the edition." },
      { title: "Folio map completeness", text: "The 1980 folio contains two map sheets. A complete folio with both maps intact is worth substantially more than an incomplete copy." }
    ]
  },

  // ══════════════════════════════════════════
  //  DRAGONLANCE — TSR
  // ══════════════════════════════════════════
  "dragonlance": {
    system: "Dragonlance / AD&D", publisher: "TSR",
    tips: [
      { title: "DL1 Dragons of Despair (1984)", text: "The first Dragonlance module (DL1, 1984) launched the entire campaign. The 1st printing has a specific cover price and number line. Early DL modules are more collectible than later ones in the series." },
      { title: "Module series DL1-DL16", text: "The Dragonlance module series runs from DL1 through DL16. Each module is a separate collectible. Earlier modules in the series (DL1-DL8) are generally more valuable than the later ones." },
      { title: "Dragonlance Adventures hardcover (1987)", text: "The Dragonlance Adventures hardcover supplement (1987) is a separate product from the module series. It has its own cover art and number line." }
    ]
  },
  "dragons of despair": {
    system: "Dragonlance / AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "DL1 — first Dragonlance module (1984)", text: "DL1: Dragons of Despair (1984) is the first Dragonlance module and the most collectible of the series. Check the DL1 code on the cover and the copyright year 1984. The number line on the copyright page identifies later printings." }
    ]
  },

  // ══════════════════════════════════════════
  //  BIRTHRIGHT — TSR
  // ══════════════════════════════════════════
  "birthright campaign setting": {
    system: "Birthright / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1995 box set", text: "The Birthright Campaign Setting (1995) is a box set. Components include the campaign book, DM's guide, maps, and cardstock domain sheets. Component completeness is important for value." },
      { title: "Domain cards", text: "Birthright is famous for its cardstock domain management sheets. These are frequently missing from used copies. A complete set with all domain cards is significantly more valuable." }
    ]
  },

  // ══════════════════════════════════════════
  //  AL-QADIM — TSR
  // ══════════════════════════════════════════
  "al-qadim arabian adventures": {
    system: "Al-Qadim / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1992 hardcover sourcebook", text: "Arabian Adventures (1992) is the core hardcover sourcebook for the Al-Qadim setting. Number line on copyright page. Jeff Easley cover art." }
    ]
  },

  // ══════════════════════════════════════════
  //  MYSTARA / HOLLOW WORLD — TSR
  // ══════════════════════════════════════════
  "hollow world campaign set": {
    system: "Mystara / D&D BECMI", publisher: "TSR",
    tips: [
      { title: "1990 box set", text: "The Hollow World Campaign Set (1990) is a BECMI-compatible box set. Contains multiple booklets and a poster map. Check all components for completeness." }
    ]
  },

  // ══════════════════════════════════════════
  //  CALL OF CTHULHU — MORE SUPPLEMENTS
  // ══════════════════════════════════════════
  "beyond the mountains of madness": {
    system: "Call of Cthulhu", publisher: "Chaosium",
    tips: [
      { title: "1999 large box set campaign", text: "Beyond the Mountains of Madness (1999) is one of the largest CoC campaign box sets ever produced — a massive two-volume hardcover set with extensive props and maps. Component completeness is absolutely critical for value." },
      { title: "Prop and handout completeness", text: "The original box set includes handouts, maps, journal pages, and props. All of these are frequently missing from used copies. A complete set with all props is rare and valuable." }
    ]
  },
  "tatters of the king": {
    system: "Call of Cthulhu", publisher: "Chaosium",
    tips: [
      { title: "2006 King in Yellow campaign", text: "Tatters of the King (2006) is a campaign based on Robert W. Chambers' King in Yellow. Check the copyright year and Chaosium logo." }
    ]
  },
  "the great old ones": {
    system: "Call of Cthulhu", publisher: "Chaosium",
    tips: [
      { title: "1989 adventure collection", text: "The Great Old Ones (1989) is a collection of CoC adventures. Check the copyright year and Chaosium catalog number." }
    ]
  },
  "secrets of japan": {
    system: "Call of Cthulhu", publisher: "Chaosium",
    tips: [
      { title: "2005 sourcebook", text: "Secrets of Japan (2005) covers Taisho-era Japan for CoC. Check the copyright year and edition statement on the copyright page." }
    ]
  },
  "keeper rulebook 7th edition": {
    system: "Call of Cthulhu 7th Edition", publisher: "Chaosium",
    tips: [
      { title: "7th edition (2016) — major rules revision", text: "Call of Cthulhu 7th edition (2016) is a significant rules revision. The Keeper Rulebook and Investigator Handbook are the two core books. Check for '7th Edition' on the cover." },
      { title: "Leatherette vs standard hardcover", text: "A leatherette special edition of the 7th edition books was produced alongside the standard hardcover. The leatherette edition has a distinct texture and is more collectible." }
    ]
  },
  "investigator handbook 7th edition": {
    system: "Call of Cthulhu 7th Edition", publisher: "Chaosium",
    tips: [
      { title: "7th edition player book (2016)", text: "The Investigator Handbook is the player-facing book for CoC 7th edition. A leatherette edition was also produced. Check the cover and copyright year." }
    ]
  },

  // ══════════════════════════════════════════
  //  VAMPIRE: THE MASQUERADE — MORE EDITIONS
  // ══════════════════════════════════════════
  "vampire the dark ages": {
    system: "Vampire: The Dark Ages", publisher: "White Wolf",
    tips: [
      { title: "1996 first edition", text: "Vampire: The Dark Ages (1996) is set in medieval Europe. White Wolf catalog number WW 2800. Distinct from the modern-day Vampire: The Masquerade line." },
      { title: "Dark Ages Vampire revised (2002)", text: "A revised edition was published in 2002 with updated rules. Check the copyright year to distinguish editions." }
    ]
  },
  "demon the fallen": {
    system: "World of Darkness", publisher: "White Wolf",
    tips: [
      { title: "2002 first edition", text: "Demon: The Fallen (2002) was released late in the classic World of Darkness line. White Wolf catalog number. Check the copyright year." }
    ]
  },
  "mummy the resurrection": {
    system: "World of Darkness", publisher: "White Wolf",
    tips: [
      { title: "2001 first edition", text: "Mummy: The Resurrection (2001) is a standalone game in the classic WoD line. White Wolf catalog number. Check copyright year." }
    ]
  },
  "kindred of the east": {
    system: "World of Darkness", publisher: "White Wolf",
    tips: [
      { title: "1998 first edition", text: "Kindred of the East (1998) covers Asian vampires in the classic WoD. White Wolf catalog number WW 2400. Check copyright year." }
    ]
  },
  "vampire the requiem": {
    system: "New World of Darkness / Chronicles of Darkness", publisher: "White Wolf",
    tips: [
      { title: "New WoD launch title (2004)", text: "Vampire: The Requiem (2004) launched the New World of Darkness line alongside the core World of Darkness book. White Wolf catalog number WW 25000." },
      { title: "2nd edition (2013)", text: "The 2nd edition (2013) was rebranded as part of Chronicles of Darkness. Different cover art and revised rules. Check copyright year." }
    ]
  },
  "werewolf the forsaken": {
    system: "New World of Darkness / Chronicles of Darkness", publisher: "White Wolf",
    tips: [
      { title: "2005 New WoD werewolf game", text: "Werewolf: The Forsaken (2005). White Wolf catalog number. Check copyright year to distinguish from the classic-era Werewolf: The Apocalypse." }
    ]
  },
  "mage the awakening": {
    system: "New World of Darkness / Chronicles of Darkness", publisher: "White Wolf",
    tips: [
      { title: "2005 New WoD mage game", text: "Mage: The Awakening (2005). Completely different rules and setting from Mage: The Ascension. Check copyright year and catalog number." }
    ]
  },
  "geist the sin-eaters": {
    system: "New World of Darkness", publisher: "White Wolf / Onyx Path",
    tips: [
      { title: "2009 New WoD game", text: "Geist: The Sin-Eaters (2009). White Wolf/CCP catalog number. One of the later New WoD lines." }
    ]
  },
  "beast the primordial": {
    system: "Chronicles of Darkness", publisher: "Onyx Path Publishing",
    tips: [
      { title: "2016 Chronicles of Darkness game", text: "Beast: The Primordial (2016) was published by Onyx Path after they took over White Wolf's catalog. Check for the Onyx Path logo." }
    ]
  },

  // ══════════════════════════════════════════
  //  ABERRANT / ADVENTURE! / TRINITY — WHITE WOLF
  // ══════════════════════════════════════════
  "aberrant": {
    system: "Aberrant / Trinity Universe", publisher: "White Wolf",
    tips: [
      { title: "1999 superhero game", text: "Aberrant (1999) is a superhero RPG set in the Trinity Universe. White Wolf catalog number WW 8500. Check copyright year." },
      { title: "2nd edition (2019)", text: "Onyx Path published a 2nd edition in 2019. The Onyx Path logo on the spine identifies later editions." }
    ]
  },
  "adventure": {
    system: "Adventure! / Trinity Universe", publisher: "White Wolf",
    tips: [
      { title: "2001 pulp adventure game", text: "Adventure! (2001) is a pulp-era prequel to Aberrant. White Wolf catalog number WW 8600. Check copyright year." }
    ]
  },
  "aeon trinity": {
    system: "Trinity / Trinity Universe", publisher: "White Wolf",
    tips: [
      { title: "Originally titled Aeon (1997)", text: "The game was originally titled 'Aeon' but was retitled 'Trinity' after a lawsuit from Aeon Flux creator Peter Chung. First printing copies titled 'Aeon' are rarer than 'Trinity' copies." },
      { title: "Aeon vs Trinity title on cover", text: "The title on the cover is the primary identifier. 'Aeon' on the cover means the rare 1st printing; 'Trinity' means a later printing." }
    ]
  },

  // ══════════════════════════════════════════
  //  EXALTED — MORE EDITIONS
  // ══════════════════════════════════════════
  "exalted 3rd edition": {
    system: "Exalted", publisher: "Onyx Path Publishing",
    tips: [
      { title: "Kickstarter 2015 campaign", text: "Exalted 3rd edition was crowdfunded in 2013 and delivered in 2016. Kickstarter backer copies have a colophon. The deluxe edition has different cover treatment from the standard edition." },
      { title: "Errata and printing history", text: "The 1st printing had known errata. Later printings corrected these. Check the number line on the copyright page." }
    ]
  },

  // ══════════════════════════════════════════
  //  HUNTER: THE VIGIL / PROMETHEAN / OTHER CofD
  // ══════════════════════════════════════════
  "hunter the vigil": {
    system: "Chronicles of Darkness", publisher: "White Wolf / Onyx Path",
    tips: [
      { title: "2008 first edition", text: "Hunter: The Vigil (2008) is a Chronicles of Darkness game about mortal monster hunters. Distinct from the classic-era Hunter: The Reckoning." },
      { title: "2nd edition (2018)", text: "A 2nd edition was Kickstarted by Onyx Path in 2018. The Onyx Path logo identifies later editions." }
    ]
  },
  "promethean the created": {
    system: "Chronicles of Darkness", publisher: "White Wolf",
    tips: [
      { title: "2006 first edition", text: "Promethean: The Created (2006). White Wolf/CCP catalog number. One of the unique New WoD games." }
    ]
  },
  "changeling the lost": {
    system: "Chronicles of Darkness", publisher: "White Wolf",
    tips: [
      { title: "2007 New WoD changeling game", text: "Changeling: The Lost (2007) is set in the same New WoD setting as other Chronicles of Darkness games. Distinct from the classic-era Changeling: The Dreaming." },
      { title: "2nd edition (2019)", text: "Onyx Path published a 2nd edition in 2019 via Kickstarter. Check for the Onyx Path logo." }
    ]
  },

  // ══════════════════════════════════════════
  //  DARK CONSPIRACY — GDW
  // ══════════════════════════════════════════
  "dark conspiracy": {
    system: "Dark Conspiracy", publisher: "GDW",
    tips: [
      { title: "1991 GDW first edition", text: "Dark Conspiracy (1991) is a modern horror RPG from GDW. Check the GDW logo and catalog number. After GDW closed, the game was briefly revived by other publishers." }
    ]
  },

  // ══════════════════════════════════════════
  //  DEADLANDS — PINNACLE ENTERTAINMENT
  // ══════════════════════════════════════════
  "deadlands": {
    system: "Deadlands", publisher: "Pinnacle Entertainment",
    tips: [
      { title: "Classic (1996) vs Reloaded (2006) vs Reloaded 20th Anniversary", text: "Three distinct eras: Classic Deadlands (1996, original rules), Deadlands Reloaded (2006, Savage Worlds rules), and Deadlands Reloaded 20th Anniversary Edition. The rules system and cover art differ significantly between them." },
      { title: "Classic edition identification", text: "Classic Deadlands (1996) uses its own dice-based system. The core book is a hardcover with a distinctive Western-horror cover. Pinnacle Entertainment catalog number." },
      { title: "Reloaded edition", text: "Deadlands Reloaded (2006) uses the Savage Worlds system. The cover art is similar in theme but different from the classic edition. Check the copyright year." }
    ]
  },
  "deadlands hell on earth": {
    system: "Deadlands", publisher: "Pinnacle Entertainment",
    tips: [
      { title: "Post-apocalyptic sequel (1998)", text: "Deadlands: Hell on Earth (1998) is a post-apocalyptic sequel to the original Deadlands, set in the future. A separate product from the original." }
    ]
  },

  // ══════════════════════════════════════════
  //  VICTORIANA / LEAGUE OF EXTRAORDINARY GENTLEMEN
  // ══════════════════════════════════════════
  "victoriana": {
    system: "Victoriana", publisher: "Cubicle 7",
    tips: [
      { title: "Cubicle 7 edition (2009)", text: "Victoriana 2nd edition (2009) by Cubicle 7 is the primary collectible edition. Earlier editions by Heresy Gaming exist but are rarer. Check the publisher on the spine." },
      { title: "3rd edition (2013)", text: "A 3rd edition was published in 2013 with revised rules. Check the copyright year and edition statement." }
    ]
  },

  // ══════════════════════════════════════════
  //  MASQUE OF THE RED DEATH — TSR
  // ══════════════════════════════════════════
  "masque of the red death": {
    system: "Masque of the Red Death / Ravenloft", publisher: "TSR",
    tips: [
      { title: "1994 Gothic Earth box set", text: "Masque of the Red Death and Other Tales (1994) is a Ravenloft sub-setting set in a Gothic version of Victorian Earth. TSR box set format." }
    ]
  },

  // ══════════════════════════════════════════
  //  UNDERGROUND — MAYFAIR GAMES
  // ══════════════════════════════════════════
  "underground rpg": {
    system: "Underground", publisher: "Mayfair Games",
    tips: [
      { title: "1993 satirical superhero RPG", text: "Underground (1993) by Mayfair Games is a satirical superhero RPG set in a near-future dystopia. Check the Mayfair Games logo. Limited print run makes copies moderately collectible." }
    ]
  },

  // ══════════════════════════════════════════
  //  BLOOD OF HEROES / DC HEROES
  // ══════════════════════════════════════════
  "blood of heroes": {
    system: "Blood of Heroes / DC Heroes", publisher: "Pulsar Games",
    tips: [
      { title: "DC Heroes rules without the license", text: "Blood of Heroes (1998) is the DC Heroes 3rd edition rules published after Mayfair Games lost the DC license. Identical rules to DC Heroes 3rd edition but with the DC characters removed." }
    ]
  },

  // ══════════════════════════════════════════
  //  SPACESHIP ZERO — GREEN RONIN
  // ══════════════════════════════════════════
  "spaceship zero": {
    system: "Spaceship Zero", publisher: "Green Ronin",
    tips: [
      { title: "2002 retro sci-fi RPG", text: "Spaceship Zero (2002) is a retro science fiction RPG based on the album by The Darkest of the Hillside Thickets. Green Ronin catalog number. Limited print run." }
    ]
  },

  // ══════════════════════════════════════════
  //  FENG SHUI — ATLAS GAMES / ROBIN LAWS
  // ══════════════════════════════════════════
  "feng shui": {
    system: "Feng Shui", publisher: "Atlas Games / Trident Inc.",
    tips: [
      { title: "1st edition (1996) vs 2nd edition (2015)", text: "The original Feng Shui (1996) by Robin D. Laws was published by Trident Inc./Atlas Games. The 2nd edition (2015) was Kickstarted and published by Atlas Games. The two editions have completely different cover art." },
      { title: "2nd edition Kickstarter variants", text: "The 2nd edition Kickstarter produced limited edition cover variants. Check the colophon for edition type." }
    ]
  },

  // ══════════════════════════════════════════
  //  OCTANE / INSPECTRES / LACUNA
  // ══════════════════════════════════════════
  "lacuna part 1": {
    system: "Lacuna", publisher: "Memento Mori Theatricks",
    tips: [
      { title: "1st vs 2nd edition", text: "Lacuna Part I: The Creation of the Mystery and the Girl from Blue City has two editions by Jared Sorensen. Check the edition statement in the colophon." }
    ]
  },
  "inspectres": {
    system: "InSpectres", publisher: "Memento Mori Theatricks",
    tips: [
      { title: "Multiple printings (2002 onward)", text: "InSpectres by Jared Sorensen has gone through several printings. Check the copyright page for printing information." }
    ]
  },

  // ══════════════════════════════════════════
  //  MY LIFE WITH MASTER — HALF MEME PRESS
  // ══════════════════════════════════════════
  "my life with master": {
    system: "My Life With Master", publisher: "Half Meme Press",
    tips: [
      { title: "2003 first printing", text: "My Life With Master by Paul Czege (2003) was one of the pioneering indie RPGs. Original copies from Half Meme Press are increasingly rare. Check the Half Meme Press logo." }
    ]
  },

  // ══════════════════════════════════════════
  //  POLARIS — BEN LEHMAN
  // ══════════════════════════════════════════
  "polaris rpg": {
    system: "Polaris", publisher: "TAO Games",
    tips: [
      { title: "2005 first printing", text: "Polaris: Chivalric Tragedy at the Utmost North (2005) by Ben Lehman. Small-press game. Check the TAO Games or Ben Lehman imprint on the copyright page." }
    ]
  },

  // ══════════════════════════════════════════
  //  DOGS IN THE VINEYARD — LUMPLEY GAMES
  // ══════════════════════════════════════════
  "dogs in the vineyard": {
    system: "Dogs in the Vineyard", publisher: "Lumpley Games",
    tips: [
      { title: "2004 first printing", text: "Dogs in the Vineyard by D. Vincent Baker (2004) is an influential indie RPG. The 1st printing and later printings can be distinguished by the copyright page. A revised edition was also produced." }
    ]
  },

  // ══════════════════════════════════════════
  //  POISON'D — LUMPLEY GAMES
  // ══════════════════════════════════════════
  "poisond": {
    system: "Poison'd", publisher: "Lumpley Games",
    tips: [
      { title: "2008 piracy RPG", text: "Poison'd by D. Vincent Baker (2008) is a small-press piracy RPG. Limited print run. Check the Lumpley Games imprint." }
    ]
  },

  // ══════════════════════════════════════════
  //  THE RIDDLE OF STEEL — DRIFTWOOD PUBLISHING
  // ══════════════════════════════════════════
  "the riddle of steel": {
    system: "The Riddle of Steel", publisher: "Driftwood Publishing",
    tips: [
      { title: "2002 first printing", text: "The Riddle of Steel (2002) is a medieval fantasy RPG focused on realistic combat. Published by Driftwood Publishing in a very limited initial print run. Later printings expanded distribution." }
    ]
  },

  // ══════════════════════════════════════════
  //  WEAPONS OF THE GODS — EOS PRESS
  // ══════════════════════════════════════════
  "weapons of the gods": {
    system: "Weapons of the Gods", publisher: "Eos Press",
    tips: [
      { title: "2006 wuxia RPG", text: "Weapons of the Gods (2006) is a wuxia martial arts RPG based on the Hong Kong comic. Published by Eos Press. Limited English edition." }
    ]
  },

  // ══════════════════════════════════════════
  //  TIANXIA — BEDROCK GAMES
  // ══════════════════════════════════════════
  "tianxia": {
    system: "Tianxia", publisher: "Bedrock Games",
    tips: [
      { title: "2014 wuxia FATE game", text: "Tianxia: Blood, Silk & Jade (2014) uses the FATE system for wuxia action. Published by Bedrock Games. Check the copyright year." }
    ]
  },

  // ══════════════════════════════════════════
  //  LEGEND OF THE FIVE RINGS — MORE EDITIONS
  // ══════════════════════════════════════════
  "legend of the five rings 4th edition": {
    system: "Legend of the Five Rings", publisher: "AEG",
    tips: [
      { title: "AEG 4th edition (2010)", text: "The 4th edition (2010) is the final AEG edition and widely considered the definitive L5R RPG. Check for the AEG logo and copyright year 2010." }
    ]
  },
  "legend of the five rings rpg 5th edition": {
    system: "Legend of the Five Rings", publisher: "Fantasy Flight Games",
    tips: [
      { title: "Fantasy Flight 5th edition (2018)", text: "Fantasy Flight Games published the 5th edition (2018) with completely redesigned narrative dice mechanics. Very different from all AEG editions. Check for the FFG logo." }
    ]
  },

  // ══════════════════════════════════════════
  //  WARHAMMER 40K RPG — MORE TITLES
  // ══════════════════════════════════════════
  "deathwatch": {
    system: "Warhammer 40K RPG", publisher: "Fantasy Flight Games",
    tips: [
      { title: "2010 FFG Space Marines game", text: "Deathwatch (2010) focuses on Space Marines. Fantasy Flight Games. Check the FFG logo and copyright year." }
    ]
  },
  "black crusade": {
    system: "Warhammer 40K RPG", publisher: "Fantasy Flight Games",
    tips: [
      { title: "2011 FFG Chaos game", text: "Black Crusade (2011) allows players to play Chaos worshippers. Fantasy Flight Games. Check copyright year." }
    ]
  },
  "only war": {
    system: "Warhammer 40K RPG", publisher: "Fantasy Flight Games",
    tips: [
      { title: "2012 FFG Imperial Guard game", text: "Only War (2012) focuses on Imperial Guardsmen. The last major FFG Warhammer 40K RPG before they lost the license. Check copyright year." }
    ]
  },

  // ══════════════════════════════════════════
  //  AGE OF SIGMAR: SOULBOUND — CUBICLE 7
  // ══════════════════════════════════════════
  "soulbound": {
    system: "Age of Sigmar: Soulbound", publisher: "Cubicle 7",
    tips: [
      { title: "2020 Cubicle 7 Age of Sigmar RPG", text: "Soulbound (2020) is set in Games Workshop's Age of Sigmar setting. Published by Cubicle 7. Check for the Cubicle 7 logo and Games Workshop licensing notice." }
    ]
  },

  // ══════════════════════════════════════════
  //  ZWEIHANDER SUPPLEMENTS
  // ══════════════════════════════════════════
  "rat catcher": {
    system: "ZWEIHÄNDER", publisher: "Grim & Perilous Studios",
    tips: [
      { title: "ZWEIHÄNDER adventure supplement", text: "Rat Catcher and other ZWEIHÄNDER adventures are grim fantasy supplements. Check the Grim & Perilous Studios logo and copyright year." }
    ]
  },

  // ══════════════════════════════════════════
  //  ACHTUNG! CTHULHU — MODIPHIUS
  // ══════════════════════════════════════════
  "achtung cthulhu": {
    system: "Achtung! Cthulhu", publisher: "Modiphius Entertainment",
    tips: [
      { title: "Kickstarter 2013 first edition", text: "Achtung! Cthulhu (2013) was crowdfunded by Modiphius. The first edition used the BRP/Savage Worlds rules. A 2d20 system edition was produced in 2020. Check the copyright year and rules system mentioned on the cover." },
      { title: "BRP/Savage Worlds vs 2d20 edition", text: "The original game supported two rules systems (BRP and Savage Worlds). The 2020 edition uses Modiphius's own 2d20 system. The rules system mentioned on the cover distinguishes the editions." }
    ]
  },

  // ══════════════════════════════════════════
  //  CONAN: ADVENTURES IN AN AGE UNDREAMED OF — MODIPHIUS
  // ══════════════════════════════════════════
  "conan adventures in an age undreamed of": {
    system: "Conan RPG", publisher: "Modiphius Entertainment",
    tips: [
      { title: "Kickstarter 2016 2d20 edition", text: "Modiphius's Conan RPG (2016/2017 delivery) uses the 2d20 system. Kickstarter backer copies have a colophon. Limited edition covers were also produced." },
      { title: "Separate from DCC Conan", text: "This is a completely different product from the DCC Conan game by Goodman Games. The Modiphius edition uses 2d20 rules; the Goodman Games edition uses DCC rules." }
    ]
  },

  // ══════════════════════════════════════════
  //  JOHN CARTER OF MARS — MODIPHIUS
  // ══════════════════════════════════════════
  "john carter of mars": {
    system: "John Carter of Mars", publisher: "Modiphius Entertainment",
    tips: [
      { title: "2019 Kickstarter edition", text: "John Carter of Mars: Adventures on the Dying World of Barsoom (2019) uses the 2d20 system. Kickstarter backer copies have a colophon. Based on Edgar Rice Burroughs's Barsoom novels." }
    ]
  },

  // ══════════════════════════════════════════
  //  DUNE: ADVENTURES IN THE IMPERIUM — MODIPHIUS
  // ══════════════════════════════════════════
  "dune adventures in the imperium": {
    system: "Dune RPG", publisher: "Modiphius Entertainment",
    tips: [
      { title: "2021 Kickstarter edition", text: "Dune: Adventures in the Imperium (2021) uses the 2d20 system. Standard and collector's editions were produced. Check for the Modiphius logo and Legendary/Herbert licensing notices." }
    ]
  },

  // ══════════════════════════════════════════
  //  FALLOUT: THE ROLEPLAYING GAME — MODIPHIUS
  // ══════════════════════════════════════════
  "fallout the roleplaying game": {
    system: "Fallout RPG", publisher: "Modiphius Entertainment",
    tips: [
      { title: "2021 Kickstarter edition", text: "Fallout: The Roleplaying Game (2021) uses the 2d20 system. Standard and collector's vault metal editions were produced. Check for the Bethesda licensing notice." },
      { title: "Vault metal edition", text: "The collector's 'Vault Metal Edition' is housed in a distinctive tin case. This premium edition commands a significant premium over the standard hardcover." }
    ]
  },

  // ══════════════════════════════════════════
  //  STUDIO GHIBLI / ANIME RPGs
  // ══════════════════════════════════════════
  "miyazaki rpg": {
    system: "Hayao Miyazaki's Anime-inspired RPG", publisher: "Various",
    tips: [
      { title: "Unofficial vs licensed products", text: "Many unofficial anime-inspired RPGs exist. Check the copyright page for licensing information. Licensed products will have the licensor's trademark notice." }
    ]
  },
  "teenagers from outer space": {
    system: "Teenagers From Outer Space", publisher: "R. Talsorian Games",
    tips: [
      { title: "1987 first edition", text: "Teenagers From Outer Space (1987) is an anime-inspired comedy RPG from R. Talsorian. The 1st edition has a specific cover. Later editions have revised rules and cover art." },
      { title: "3rd edition (1997)", text: "The 3rd edition was published in 1997 with revised rules. Check the copyright year and edition statement." }
    ]
  },

  // ══════════════════════════════════════════
  //  CORPORATION — BRUTAL GAMES
  // ══════════════════════════════════════════
  "corporation rpg": {
    system: "Corporation", publisher: "Brutal Games",
    tips: [
      { title: "2006 cyberpunk RPG", text: "Corporation (2006) is a UK cyberpunk RPG by Brutal Games. Multiple editions and printings exist. Check the edition statement on the copyright page." }
    ]
  },

  // ══════════════════════════════════════════
  //  NIGHTS BLACK AGENTS / TIMEWATCH / ASHEN STARS
  // ══════════════════════════════════════════
  "ashen stars": {
    system: "Ashen Stars / GUMSHOE", publisher: "Pelgrane Press",
    tips: [
      { title: "2011 sci-fi GUMSHOE game", text: "Ashen Stars (2011) uses the GUMSHOE system for science fiction investigative play. Published by Pelgrane Press. Check the copyright year." }
    ]
  },
  "esoterrorists": {
    system: "The Esoterrorists / GUMSHOE", publisher: "Pelgrane Press",
    tips: [
      { title: "First GUMSHOE game (2007)", text: "The Esoterrorists (2007) was the first published GUMSHOE system game. The 2nd edition (2013) has revised rules. Check the copyright year and edition statement." }
    ]
  },

  // ══════════════════════════════════════════
  //  SHOCK: — JOSHUA A.C. NEWMAN
  // ══════════════════════════════════════════
  "shock social science fiction": {
    system: "Shock: Social Science Fiction", publisher: "glyphpress",
    tips: [
      { title: "Multiple editions (2006 onward)", text: "Shock: Social Science Fiction has gone through several editions. Check the edition statement in the colophon." }
    ]
  },

  // ══════════════════════════════════════════
  //  TENRA BANSHO / DOUBLE CROSS — JAPANESE RPGs
  // ══════════════════════════════════════════
  "double cross": {
    system: "Double Cross", publisher: "F.E.A.R. / Archaia",
    tips: [
      { title: "Japanese RPG — English translation by Archaia", text: "Double Cross is a Japanese superhuman RPG translated into English. The English edition is a limited print run." }
    ]
  },

  // ══════════════════════════════════════════
  //  IRONSWORN: DELVE
  // ══════════════════════════════════════════
  "ironsworn delve": {
    system: "Ironsworn", publisher: "Shawn Tomkin",
    tips: [
      { title: "Expansion to Ironsworn (2020)", text: "Ironsworn: Delve (2020) is an expansion to Ironsworn focused on dungeon exploration. Available as a free PDF; physical copies are print-on-demand or special run." }
    ]
  },

  // ══════════════════════════════════════════
  //  CITY OF MIST — SON OF OAK
  // ══════════════════════════════════════════
  "city of mist": {
    system: "City of Mist", publisher: "Son of Oak Game Studio",
    tips: [
      { title: "Kickstarter 2017 edition", text: "City of Mist was crowdfunded in 2017. The Starter Box and core rulebook are different products. Check the cover title to identify the specific product." },
      { title: "MC Toolkit vs core rulebook", text: "City of Mist has a separate MC (Master of Ceremonies) Toolkit alongside the main rulebook. Check the cover title." }
    ]
  },

  // ══════════════════════════════════════════
  //  MASKS: A NEW GENERATION — MAGPIE GAMES
  // ══════════════════════════════════════════
  "masks a new generation": {
    system: "Masks: A New Generation", publisher: "Magpie Games",
    tips: [
      { title: "Kickstarter 2016 edition", text: "Masks: A New Generation was crowdfunded in 2016 by Magpie Games. Kickstarter backer copies have a colophon. A Magpie Games branded retail edition followed." }
    ]
  },

  // ══════════════════════════════════════════
  //  IRONSWORN / POWERED BY THE APOCALYPSE MISC
  // ══════════════════════════════════════════
  "legacy life among the ruins 2nd edition": {
    system: "Legacy: Life Among the Ruins", publisher: "UFO Press",
    tips: [
      { title: "2nd edition (2018)", text: "Legacy: Life Among the Ruins 2nd edition (2018) is a significant revision. Published via Kickstarter by UFO Press. Check the edition statement on the cover." }
    ]
  },

  // ══════════════════════════════════════════
  //  WILD TALENTS / BETTER ANGELS — ARC DREAM
  // ══════════════════════════════════════════
  "wild talents": {
    system: "Wild Talents", publisher: "Arc Dream Publishing",
    tips: [
      { title: "1st vs 2nd edition (2006, 2009)", text: "Wild Talents 1st edition (2006) and 2nd edition (2009) have different covers. The 2nd edition is an expanded version. Check the copyright year." }
    ]
  },
  "better angels": {
    system: "Better Angels", publisher: "Arc Dream Publishing",
    tips: [
      { title: "2014 supervillain RPG", text: "Better Angels (2014) uses the ORE (One Roll Engine) system. Published by Arc Dream Publishing. Check the copyright year." }
    ]
  },
  "godlike": {
    system: "GODLIKE", publisher: "Arc Dream Publishing",
    tips: [
      { title: "WWII superhero RPG (2001)", text: "GODLIKE (2001) is a WWII superhero RPG using the ORE system. The original edition was published by Hobgoblynn Press; Arc Dream later took over. Check the publisher on the copyright page." }
    ]
  },

  // ══════════════════════════════════════════
  //  REIGN — GREG STOLZE / ARC DREAM
  // ══════════════════════════════════════════
  "reign": {
    system: "Reign", publisher: "Arc Dream Publishing",
    tips: [
      { title: "2007 first printing", text: "Reign (2007) by Greg Stolze uses the ORE system for fantasy empire management. Arc Dream Publishing. Check the copyright year." },
      { title: "Reign 2nd edition (2019)", text: "A revised 2nd edition was Kickstarted in 2019. Different cover art from the 1st edition." }
    ]
  },

  // ══════════════════════════════════════════
  //  NEMESIS / UNKNOWN ARMIES — ATLAS GAMES
  // ══════════════════════════════════════════
  "unknown armies": {
    system: "Unknown Armies", publisher: "Atlas Games",
    tips: [
      { title: "1st (1998) vs 2nd (2002) vs 3rd edition (2017)", text: "Three editions of Unknown Armies exist: 1st (1998), 2nd (2002), and 3rd (2017, three-volume Kickstarter set). The 3rd edition is a three-book boxed set — completely different format from the earlier single-volume editions." },
      { title: "3rd edition Kickstarter box set", text: "The 3rd edition (2017) comes as three separate hardcover books in a slipcase. Check whether all three volumes are present for a complete set." }
    ]
  },

  // ══════════════════════════════════════════
  //  KERBEROS CLUB — WILD TALENTS / NEMESIS
  // ══════════════════════════════════════════
  "the kerberos club": {
    system: "Kerberos Club / ORE", publisher: "Arc Dream Publishing",
    tips: [
      { title: "FATE and ORE editions", text: "The Kerberos Club was published in two separate editions: one using the ORE system and one using FATE. Check the rules system mentioned on the cover or copyright page." }
    ]
  },

  // ══════════════════════════════════════════
  //  TEPHRA — CRACKED MONOCLE
  // ══════════════════════════════════════════
  "tephra the steampunk rpg": {
    system: "Tephra", publisher: "Cracked Monocle",
    tips: [
      { title: "Kickstarter 2012 steampunk RPG", text: "Tephra: The Steampunk RPG was Kickstarted in 2012 by Cracked Monocle. Check the colophon for edition information." }
    ]
  },

  // ══════════════════════════════════════════
  //  IRONSWORN ADJACENT — SOLO GAMES
  // ══════════════════════════════════════════
  "ex novo": {
    system: "Ex Novo / City Builder", publisher: "Sharkbomb Studios",
    tips: [
      { title: "Solo city building game", text: "Ex Novo is a solo city-building RPG. Primarily available as PDF; print copies are limited and typically produced on demand." }
    ]
  },

  // ══════════════════════════════════════════
  //  HC SVNT DRACONES — WEIGHT OF THE WORLD
  // ══════════════════════════════════════════
  "hc svnt dracones": {
    system: "HC SVNT DRACONES", publisher: "Pierce Fraser",
    tips: [
      { title: "2014 anthropomorphic sci-fi RPG", text: "HC SVNT DRACONES (2014) is an anthropomorphic science fiction RPG. Multiple editions and printings. Check the edition statement on the copyright page." }
    ]
  },

  // ══════════════════════════════════════════
  //  NEON CITY OVERDRIVE — PERIL PLANET
  // ══════════════════════════════════════════
  "neon city overdrive": {
    system: "Neon City Overdrive", publisher: "Peril Planet",
    tips: [
      { title: "2020 cyberpunk RPG", text: "Neon City Overdrive (2020) by Nathan Russell is a streamlined cyberpunk RPG. Published by Peril Planet. Check the copyright year." }
    ]
  },

  // ══════════════════════════════════════════
  //  PATHFINDER — MORE BOOKS
  // ══════════════════════════════════════════
  "pathfinder advanced players guide": {
    system: "Pathfinder 2nd Edition", publisher: "Paizo",
    tips: [
      { title: "2020 first printing", text: "Pathfinder Advanced Player's Guide (2020). Paizo number line on copyright page. Pocket edition also available." }
    ]
  },
  "pathfinder gamemastery guide": {
    system: "Pathfinder 2nd Edition", publisher: "Paizo",
    tips: [
      { title: "2020 first printing", text: "Pathfinder Gamemastery Guide (2020). Paizo number line on copyright page. The Gamemastery Guide is a separate product from the GM Core (Remaster)." }
    ]
  },
  "pathfinder secrets of magic": {
    system: "Pathfinder 2nd Edition", publisher: "Paizo",
    tips: [
      { title: "2021 first printing", text: "Pathfinder Secrets of Magic (2021). Paizo number line on copyright page." }
    ]
  },

  // ══════════════════════════════════════════
  //  STARFINDER SUPPLEMENTS
  // ══════════════════════════════════════════
  "starfinder alien archive": {
    system: "Starfinder", publisher: "Paizo",
    tips: [
      { title: "2017 first printing", text: "Starfinder Alien Archive (2017). The Alien Archive series has multiple volumes. Check the volume number on the cover. Paizo number line on copyright page." }
    ]
  },

  // ══════════════════════════════════════════
  //  KOBOLD PRESS / DEEP MAGIC
  // ══════════════════════════════════════════
  "tome of beasts": {
    system: "D&D 5e Compatible", publisher: "Kobold Press",
    tips: [
      { title: "1st edition (2016) vs 2023 edition", text: "The original Tome of Beasts (2016) and the revised Tome of Beasts (2023) have different covers and updated stat blocks. Check the cover and copyright year." },
      { title: "Tome of Beasts 2 and 3", text: "Subsequent volumes (Tome of Beasts 2, 2020; Tome of Beasts 3, 2022) are separate products. Check the volume number on the cover." }
    ]
  },
  "midgard campaign setting": {
    system: "5e / Pathfinder Compatible", publisher: "Kobold Press",
    tips: [
      { title: "Multiple editions and rules variants", text: "The Midgard Campaign Setting has been published for multiple rules systems. Check the rules system compatibility noted on the cover or back cover." }
    ]
  },
  "deep magic": {
    system: "D&D 5e Compatible", publisher: "Kobold Press",
    tips: [
      { title: "Kickstarter 2018 edition", text: "Deep Magic (2018) was Kickstarted by Kobold Press. A revised second edition was crowdfunded in 2023. Check the copyright year and edition statement." }
    ]
  },

  // ══════════════════════════════════════════
  //  CANDLEKEEP MYSTERIES AND MORE 5E ADVENTURES
  // ══════════════════════════════════════════
  "candlekeep mysteries": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2021 anthology adventure", text: "Candlekeep Mysteries (2021). Standard cover and hobby store alternate cover editions. Number line on copyright page." }
    ]
  },
  "fizban's treasury of dragons": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2021 first printing with alternate covers", text: "Fizban's Treasury of Dragons (2021). Standard and hobby store exclusive alternate covers. Number line on copyright page." }
    ]
  },
  "van richten's guide to ravenloft": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2021 Ravenloft revival with alternate covers", text: "Van Richten's Guide to Ravenloft (2021). Multiple cover variants including hobby store exclusives. Number line on copyright page." }
    ]
  },
  "spelljammer light of xaryxis": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "Part of 2022 Spelljammer box set", text: "Light of Xaryxis is one of three books in the 2022 Spelljammer: Adventures in Space box set. It is not sold separately — a standalone copy likely came from a split box set." }
    ]
  },
  "keys from the golden vault": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2023 heist anthology", text: "Keys from the Golden Vault (2023). Standard and alternate hobby store covers. Number line on copyright page." }
    ]
  },
  "bigby presents glory of the giants": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2023 first printing", text: "Bigby Presents: Glory of the Giants (2023). Standard and alternate hobby store covers. Number line on copyright page." }
    ]
  },
  "the book of many things": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2023 two-book slipcase set", text: "The Book of Many Things (2023) was released as a two-book slipcase set. Check whether both books are present for a complete set." }
    ]
  },

  // ══════════════════════════════════════════
  //  D&D ONE / D&D 2024 — PLAYER'S HANDBOOK
  // ══════════════════════════════════════════
  "player's handbook 2024": {
    system: "D&D 2024 / One D&D", publisher: "Wizards of the Coast",
    tips: [
      { title: "2024 revised Player's Handbook", text: "The 2024 Player's Handbook is a major revision of the 5th edition rules, sometimes called 'One D&D' or '5.5e'. It has a distinctly different cover from the 2014 5th edition PHB." },
      { title: "Alternate covers", text: "Multiple cover variants were produced including special edition and hobby store exclusive covers. Check the cover art to determine which version you have." },
      { title: "Number line", text: "WotC continues to use a number line on the copyright page. 1st printing has all digits present." }
    ]
  },
  "dungeon master's guide 2024": {
    system: "D&D 2024 / One D&D", publisher: "Wizards of the Coast",
    tips: [
      { title: "2024 revised Dungeon Master's Guide", text: "The 2024 DMG is part of the revised core rulebook set. Distinct cover art from the 2014 edition. Alternate hobby store covers were produced." }
    ]
  },
  "monster manual 2025": {
    system: "D&D 2024 / One D&D", publisher: "Wizards of the Coast",
    tips: [
      { title: "2025 revised Monster Manual", text: "The revised Monster Manual (2025) completes the 2024 core rulebook revision. Distinct cover art. Alternate hobby store covers were produced." }
    ]
  },

  // ══════════════════════════════════════════
  //  CRITICAL ROLE — DARRINGTON PRESS
  // ══════════════════════════════════════════
  "candela obscura": {
    system: "Candela Obscura", publisher: "Darrington Press",
    tips: [
      { title: "2023 Darrington Press game", text: "Candela Obscura (2023) is a horror investigation RPG from Critical Role's publishing arm, Darrington Press. Standard and special editions exist." }
    ]
  },
  "daggerheart": {
    system: "Daggerheart", publisher: "Darrington Press",
    tips: [
      { title: "2024 Darrington Press fantasy RPG", text: "Daggerheart (2024) is Darrington Press's flagship fantasy RPG. The core rulebook was crowdfunded. Standard and deluxe editions were produced." }
    ]
  },

  // ══════════════════════════════════════════
  //  DRAW STEEL — MATT COLVILLE / MCDM
  // ══════════════════════════════════════════
  "draw steel": {
    system: "Draw Steel", publisher: "MCDM Productions",
    tips: [
      { title: "2024 Kickstarter RPG", text: "Draw Steel was Kickstarted by MCDM Productions in 2023/2024 as a standalone fantasy RPG. One of the highest-funded RPG Kickstarters. Backer and retail editions may differ in cover treatment." }
    ]
  },

  // ══════════════════════════════════════════
  //  PATHFINDER REMASTER
  // ══════════════════════════════════════════
  "pathfinder player core": {
    system: "Pathfinder 2nd Edition Remaster", publisher: "Paizo",
    tips: [
      { title: "2023 Remaster edition", text: "Pathfinder Player Core (2023) is part of the Remaster that replaced the original 2e Core Rulebook. It removes OGL content. Distinct cover from the original 2e Core Rulebook. Pocket edition also available." }
    ]
  },
  "pathfinder gm core": {
    system: "Pathfinder 2nd Edition Remaster", publisher: "Paizo",
    tips: [
      { title: "2023 Remaster edition", text: "Pathfinder GM Core (2023) replaces the original 2e Gamemaster's Guide as part of the Remaster. Distinct cover from earlier products." }
    ]
  },

  // ══════════════════════════════════════════
  //  WORLDS BEYOND NUMBER — BRENNAN LEE MULLIGAN
  // ══════════════════════════════════════════
  "worlds beyond number": {
    system: "Worlds Beyond Number", publisher: "Worlds Beyond Number",
    tips: [
      { title: "2023 independent RPG release", text: "Worlds Beyond Number uses a narrative-focused rules system. Check the colophon for edition and print run information." }
    ]
  },

  // ══════════════════════════════════════════
  //  SILICON DREAMS / HARD WIRED ISLAND
  // ══════════════════════════════════════════
  "hard wired island": {
    system: "Hard Wired Island", publisher: "Weird Age Games",
    tips: [
      { title: "Kickstarter 2020 cyberpunk RPG", text: "Hard Wired Island (2020) is a hopepunk cyberpunk RPG from Weird Age Games. Crowdfunded. Check the colophon for edition information." }
    ]
  },

  // ══════════════════════════════════════════
  //  WILDSEA — FELIX ISAACS
  // ══════════════════════════════════════════
  "wildsea": {
    system: "Wildsea", publisher: "Mythopoeia",
    tips: [
      { title: "Kickstarter 2021 edition", text: "The Wildsea was Kickstarted in 2021 by Felix Isaacs and published by Mythopoeia. Standard and deluxe editions with different covers were produced." }
    ]
  },

  // ══════════════════════════════════════════
  //  WICKED ONES — BANDIT CAMP
  // ══════════════════════════════════════════
  "wicked ones": {
    system: "Wicked Ones / FitD", publisher: "Bandit Camp",
    tips: [
      { title: "Kickstarter 2021 dungeon-building RPG", text: "Wicked Ones was Kickstarted in 2021 by Bandit Camp. Players play as dungeon-dwelling monsters. Check the colophon for backer vs retail edition identification." }
    ]
  },

  // ══════════════════════════════════════════
  //  GUBAT BANWA / SE ASIA RPGS
  // ══════════════════════════════════════════
  "tala ng baryo": {
    system: "Filipino RPG", publisher: "Various",
    tips: [
      { title: "Small press Philippine RPG", text: "Tala ng Baryo and similar Filipino RPGs are small-press products often with very limited print runs. Check the colophon for print run information." }
    ]
  },

  // ══════════════════════════════════════════
  //  GENERAL CHAOSIUM FALLBACK
  // ══════════════════════════════════════════
  "_general_chaosium": {
    system: "Chaosium (General)", publisher: "Chaosium",
    tips: [
      { title: "Chaosium product number", text: "Chaosium products carry a catalog number on the back cover (e.g. 2301). The number can help date the product within Chaosium's publishing history." },
      { title: "ISBN presence", text: "Very early Chaosium products (pre-1982) often lack ISBNs. An ISBN on the back cover means a printing from 1982 or later." },
      { title: "Address changes on copyright page", text: "Chaosium's address changed over the years. The address listed on the copyright page can help narrow the print era even when no printing date is given." }
    ]
  },

  // ══════════════════════════════════════════
  //  GENERAL INDIE/SMALL PRESS FALLBACK
  // ══════════════════════════════════════════
  "_general_indie": {
    system: "Indie / Small Press (General)", publisher: "Various",
    tips: [
      { title: "Check the colophon", text: "For small-press and indie RPGs, the colophon (usually on the last page or inside back cover) is the primary source of edition and print run information. It typically lists the printing number, Kickstarter acknowledgment if applicable, and publication year." },
      { title: "Crowdfunding vs retail editions", text: "Many modern RPGs were funded via Kickstarter, BackerKit, or Gamefound. Backer copies often have unique cover treatments or additional content not in retail copies. Check for a backer acknowledgment page." },
      { title: "Print-on-demand vs offset printing", text: "Print-on-demand copies have slightly different color saturation and paper quality from offset-printed retail copies. POD spines are often glued differently. If you are unsure which you have, check the back cover for a printer imprint (e.g. Lightning Source, IngramSpark)." }
    ]
  },



  // ══════════════════════════════════════════
  //  TERRIBLE TROUBLE AT TRAGIDORE
  // ══════════════════════════════════════════
  "terrible trouble at tragidore": {
    system: "AD&D / Forgotten Realms", publisher: "TSR",
    tips: [
      { title: "Module code FRC2 (1989)", text: "The Terrible Trouble at Tragidore carries module code FRC2 and was published in 1989 as part of the Forgotten Realms Conflicts series. It is a standalone adventure set in the Forgotten Realms." },
      { title: "Cover price and number line", text: "Check the back cover price against known TSR 1989 pricing tiers. The copyright page number line identifies later printings — the lowest digit present equals the printing number." },
      { title: "Forgotten Realms Conflicts series", text: "FRC2 is the second in the Forgotten Realms Conflicts series. FRC1 (Battlesystem Skirmishes) is a separate product. Ensure you have the correct FRC module by checking the code on the cover." }
    ]
  },

  // ══════════════════════════════════════════
  //  PLANESCAPE — COMPLETE LINE
  // ══════════════════════════════════════════
  "planescape monstrous compendium appendix": {
    system: "Planescape / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "Three appendix volumes (1994-1998)", text: "Three Planescape Monstrous Compendium appendices were published: Vol. I (1994), Vol. II (1995), and Vol. III (1998). Each is a separate product. Check the volume number on the cover." },
      { title: "Loose-leaf format", text: "Like all 2nd edition MC appendices, these are loose-leaf sheets in a cardstock cover rather than bound books. Completeness of all sheets matters for value." }
    ]
  },
  "in the cage a guide to sigil": {
    system: "Planescape / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "Part of original box set", text: "In the Cage: A Guide to Sigil (1995) is both a standalone product and a component of the original Planescape Campaign Setting box set. A standalone copy has its own cover distinct from the box set version." }
    ]
  },
  "the factol's manifesto": {
    system: "Planescape / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1995 faction sourcebook", text: "The Factol's Manifesto (1995) covers the fifteen factions of Sigil in detail. TSR catalog number 2620. Check the copyright year and number line." }
    ]
  },
  "a players primer to the outlands": {
    system: "Planescape / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1995 box set with audio CD", text: "A Player's Primer to the Outlands (1995) is a box set that notably included an audio CD — unique among TSR products. A complete copy must include the CD. A copy without the CD is worth significantly less." },
      { title: "Audio CD completeness", text: "The included audio CD narrates Planescape lore. Check whether the CD is present and unscratched. The CD is the most commonly missing component from used copies." }
    ]
  },
  "uncaged faces of sigil": {
    system: "Planescape / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1996 NPC sourcebook", text: "Uncaged: Faces of Sigil (1996) details notable NPCs of the Planescape setting. TSR catalog number 2625. Check the copyright year and number line." }
    ]
  },
  "the great modron march": {
    system: "Planescape / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1997 adventure (TSR 2630)", text: "The Great Modron March (1997) is a Planescape adventure. TSR catalog number 2630. Check the copyright year and number line on the copyright page." }
    ]
  },
  "fires of dis": {
    system: "Planescape / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1995 adventure in Baator", text: "Fires of Dis (1995) is a Planescape adventure set in the Nine Hells. TSR catalog number 2617. Check copyright year." }
    ]
  },
  "something wild": {
    system: "Planescape / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1996 Planescape adventure", text: "Something Wild (1996) is a Planescape adventure. TSR catalog number 2626. Check the copyright year and number line." }
    ]
  },
  "dead gods": {
    system: "Planescape / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1997 Planescape adventure (TSR 2633)", text: "Dead Gods (1997) is one of the largest Planescape adventures. TSR catalog number 2633. Check copyright year and number line." }
    ]
  },
  "blood wars card game": {
    system: "Planescape", publisher: "TSR",
    tips: [
      { title: "Planescape card game — not an RPG book", text: "Blood Wars is a Planescape-themed card game, not an RPG supplement. If you have a card game box rather than an RPG book, check whether you have the card game or an RPG product." }
    ]
  },
  "hellbound the blood war": {
    system: "Planescape / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1996 box set (TSR 2621)", text: "Hellbound: The Blood War (1996) is a Planescape box set covering the eternal conflict between demons and devils. Contains multiple booklets. Check all components for completeness." }
    ]
  },
  "planes of chaos": {
    system: "Planescape / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1994 box set (TSR 2603)", text: "Planes of Chaos (1994) is a Planescape box set. Contains five booklets and two poster maps. Check all components." }
    ]
  },
  "planes of law": {
    system: "Planescape / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1995 box set (TSR 2615)", text: "Planes of Law (1995) is a Planescape box set. Contains five booklets and a poster map. Check all components for completeness." }
    ]
  },
  "planes of conflict": {
    system: "Planescape / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1995 box set (TSR 2615)", text: "Planes of Conflict (1995) is a Planescape box set covering the neutral outer planes. Contains booklets and a poster map. Check all components." }
    ]
  },
  "the inner planes": {
    system: "Planescape / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1998 sourcebook (TSR 2640)", text: "The Inner Planes (1998) is one of the final Planescape products before the line ended. TSR catalog number 2640. Check the copyright year." }
    ]
  },
  "on hallowed ground": {
    system: "Planescape / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1996 gods and religion sourcebook", text: "On Hallowed Ground (1996) covers deities and religion in the Planescape setting. TSR catalog number 2623. Check copyright year." }
    ]
  },
  "doom of damnation": {
    system: "Planescape / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1995 adventure module", text: "Doom of Damnation (1995) is a Planescape adventure. Check the TSR catalog number and copyright year." }
    ]
  },
  "the planewalker's handbook": {
    system: "Planescape / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1996 player reference (TSR 2620)", text: "The Planewalker's Handbook (1996) is a player-focused reference for the Planescape setting. TSR catalog number 2620. Check copyright year and number line." }
    ]
  },

  // ══════════════════════════════════════════
  //  DARK SUN — COMPLETE LINE
  // ══════════════════════════════════════════
  "dark sun accessories": {
    system: "Dark Sun / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "Use TSR catalog number to identify specific product", text: "Dark Sun accessories span many products (DSS1-DSS4 sourcebooks, DSE adventures, DSQ adventures). The TSR catalog number and module code on the cover identify the specific product within the line." }
    ]
  },
  "freedom": {
    system: "Dark Sun / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "DSE1 — first Dark Sun adventure (1991)", text: "Freedom (DSE1, 1991) was the first Dark Sun adventure module, launching alongside the campaign setting. An important early Dark Sun collectible." }
    ]
  },
  "road to urik": {
    system: "Dark Sun / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "DSE2 adventure (1992)", text: "Road to Urik (DSE2, 1992) continues the Freedom storyline. Check the DSE2 module code and copyright year." }
    ]
  },
  "bloodsand arena": {
    system: "Dark Sun / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "DSE3 adventure (1992)", text: "Bloodsand Arena (DSE3, 1992). Check the DSE3 module code and copyright year." }
    ]
  },
  "city by the silt sea": {
    system: "Dark Sun / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1994 Dark Sun sourcebook", text: "City by the Silt Sea (1994) details the city of Giustenal. TSR catalog number. Check copyright year and number line." }
    ]
  },
  "beyond the prism pentad": {
    system: "Dark Sun / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1995 campaign sourcebook", text: "Beyond the Prism Pentad (1995) updates the Dark Sun setting following the events of the novel series. Check the copyright year." }
    ]
  },
  "earth, air, fire and water": {
    system: "Dark Sun / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "Dark Sun adventure anthology", text: "Earth, Air, Fire and Water is a collection of Dark Sun short adventures. Check the TSR catalog number and copyright year." }
    ]
  },
  "the wanderer's chronicle": {
    system: "Dark Sun / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "Dark Sun sourcebook series", text: "The Wanderer's Chronicle is a series of Dark Sun sourcebooks covering Athasian geography and cultures. Check the specific volume title and TSR catalog number." }
    ]
  },
  "dragon kings": {
    system: "Dark Sun / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1992 Dark Sun sourcebook", text: "Dragon Kings (1992) covers high-level play and the transformation into Dragon or Avangion forms. TSR catalog number. Check copyright year and number line." }
    ]
  },
  "thri-kreen of athas": {
    system: "Dark Sun / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1995 sourcebook", text: "Thri-Kreen of Athas (1995) covers the insectoid Thri-Kreen race. Check the TSR catalog number and copyright year." }
    ]
  },
  "will and the way": {
    system: "Dark Sun / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1992 psionics sourcebook", text: "Will and the Way (1992) expands on psionics in the Dark Sun setting. Check the copyright year and number line." }
    ]
  },
  "vault of the ages": {
    system: "Dark Sun / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "Dark Sun adventure module", text: "Vault of the Ages is a Dark Sun adventure. Check the TSR catalog number and module code on the cover." }
    ]
  },

  // ══════════════════════════════════════════
  //  FORGOTTEN REALMS — COMPLETE LINE
  // ══════════════════════════════════════════
  "forgotten realms adventures": {
    system: "Forgotten Realms / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1990 2nd edition transition hardcover", text: "Forgotten Realms Adventures (1990) bridged 1st and 2nd edition for the FR setting. The first FR hardcover. TSR catalog number 9232. Check copyright year and number line." }
    ]
  },
  "waterdeep and the north": {
    system: "Forgotten Realms / AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "1987 FR sourcebook (TSR 9224)", text: "Waterdeep and the North (1987) is one of the earliest Forgotten Realms sourcebooks. Part of the original Gray Box era. TSR catalog number 9224." }
    ]
  },
  "empires of the sands": {
    system: "Forgotten Realms / AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "1988 FR sourcebook (TSR 9229)", text: "Empires of the Sands (1988) covers Amn, Calimshan, and Tethyr. One of the early FR regional sourcebooks. TSR catalog number 9229." }
    ]
  },
  "the savage frontier": {
    system: "Forgotten Realms / AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "1988 FR sourcebook (TSR 9233)", text: "The Savage Frontier (1988) covers the north of Faerûn. TSR catalog number 9233. Check copyright year." }
    ]
  },
  "dreams of the red wizards": {
    system: "Forgotten Realms / AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "1988 Thay sourcebook", text: "Dreams of the Red Wizards (1988) covers Thay and the Red Wizards. TSR catalog number. Check copyright year and cover price." }
    ]
  },
  "fr5 the savage frontier": {
    system: "Forgotten Realms", publisher: "TSR",
    tips: [
      { title: "FR module code system", text: "Forgotten Realms sourcebooks used an FR numbering system (FR1, FR2, etc.) in the 1st edition era. The FR code on the cover identifies the specific product." }
    ]
  },
  "volo's guide to waterdeep": {
    system: "Forgotten Realms / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1992 city sourcebook", text: "Volo's Guide to Waterdeep (1992) is a detailed sourcebook for Waterdeep. Part of the Volo's Guide series. TSR catalog number. Check copyright year and number line." }
    ]
  },
  "volo's guide to the sword coast": {
    system: "Forgotten Realms / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1994 regional sourcebook", text: "Volo's Guide to the Sword Coast (1994). Part of the Volo's Guide series. TSR catalog number. Check copyright year." }
    ]
  },
  "volo's guide to the north": {
    system: "Forgotten Realms / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1993 regional sourcebook", text: "Volo's Guide to the North (1993). TSR catalog number. Check copyright year and number line." }
    ]
  },
  "volo's guide to cormyr": {
    system: "Forgotten Realms / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1995 regional sourcebook", text: "Volo's Guide to Cormyr (1995). TSR catalog number. Check copyright year." }
    ]
  },
  "volo's guide to baldur's gate": {
    system: "Forgotten Realms / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1994 city sourcebook", text: "Volo's Guide to Baldur's Gate (1994). TSR catalog number. Check copyright year and number line." }
    ]
  },
  "volo's guide to the dalelands": {
    system: "Forgotten Realms / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1993 regional sourcebook", text: "Volo's Guide to the Dalelands (1993). TSR catalog number. Check copyright year." }
    ]
  },
  "cormyr the tearing of the weave": {
    system: "Forgotten Realms / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "FR accessory — check catalog number", text: "Check the TSR catalog number on the back cover and the copyright year. Use the number line on the copyright page to identify the printing." }
    ]
  },
  "city of splendors waterdeep": {
    system: "Forgotten Realms / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1994 box set (TSR 1109)", text: "City of Splendors (1994) is a large Waterdeep box set. Contains multiple booklets and fold-out maps. Check all components for completeness." }
    ]
  },
  "drizzt do'urden's guide to the underdark": {
    system: "Forgotten Realms / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1999 underdark sourcebook", text: "Drizzt Do'Urden's Guide to the Underdark (1999) is a late 2nd edition FR product. TSR catalog number 11382. Check copyright year." }
    ]
  },
  "the ruins of undermountain": {
    system: "Forgotten Realms / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1991 mega-dungeon box set", text: "The Ruins of Undermountain (1991) is a large box set detailing the massive dungeon beneath Waterdeep. Contains multiple booklets and large poster maps. Completeness is essential." },
      { title: "Map completeness", text: "The box set includes several large poster maps of the dungeon levels. Maps are frequently missing from used copies. A complete set with all maps is worth significantly more." }
    ]
  },
  "ruins of undermountain ii": {
    system: "Forgotten Realms / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1994 sequel box set", text: "The Ruins of Undermountain II: The Deep Levels (1994) is a sequel box set. Check all components including maps. TSR catalog number 1104." }
    ]
  },
  "the north wilderness of the tuigan": {
    system: "Forgotten Realms", publisher: "TSR",
    tips: [
      { title: "1990 FR box set", text: "The North: Wilderness of the Tuigan (1990) is a Forgotten Realms box set covering the northern reaches of Faerûn. TSR catalog number. Check component completeness." }
    ]
  },
  "the horde": {
    system: "Forgotten Realms / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1990 FR box set", text: "The Horde (1990) covers the Tuigan Horde and the Hordelands. Box set format with multiple components. TSR catalog number 1055." }
    ]
  },
  "kara-tur the eastern realms": {
    system: "Forgotten Realms / AD&D 1st-2nd Edition", publisher: "TSR",
    tips: [
      { title: "1988 box set", text: "Kara-Tur: The Eastern Realms (1988) covers the Asian-influenced region of the Forgotten Realms. Box set with multiple booklets and maps. TSR catalog number 1032. Check component completeness." }
    ]
  },
  "maztica campaign set": {
    system: "Forgotten Realms / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1991 Mesoamerican FR box set", text: "The Maztica Campaign Set (1991) covers the Aztec/Maya-inspired region. Box set with multiple booklets. TSR catalog number 1066. Check all components." }
    ]
  },
  "the secret of spiderhaunt": {
    system: "Forgotten Realms / AD&D", publisher: "TSR",
    tips: [
      { title: "FR adventure module", text: "Check the FR module code on the cover and the TSR catalog number to identify this specific product within the Forgotten Realms adventure line." }
    ]
  },
  "undermountain the lost level": {
    system: "Forgotten Realms / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1996 Undermountain supplement", text: "Undermountain: The Lost Level (1996) adds new dungeon levels. TSR catalog number. Check copyright year and number line." }
    ]
  },
  "spellbound": {
    system: "Forgotten Realms / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1995 Thay, Rashemen & Aglarond box set", text: "Spellbound (1995) covers the magical nations of Thay, Rashemen, and Aglarond. Box set with multiple booklets and maps. TSR catalog number 1121. Check all components." }
    ]
  },
  "the moonsea": {
    system: "Forgotten Realms / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1995 FR sourcebook", text: "The Moonsea (1995) covers the Moonsea region. TSR catalog number. Check copyright year and number line." }
    ]
  },
  "the dalelands": {
    system: "Forgotten Realms / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1993 FR sourcebook", text: "The Dalelands (1993) covers the Dales region. TSR catalog number. Check copyright year and number line." }
    ]
  },
  "elves of evermeet": {
    system: "Forgotten Realms / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1994 FR sourcebook", text: "Elves of Evermeet (1994) covers the elven homeland. TSR catalog number. Check copyright year and number line." }
    ]
  },
  "hall of heroes": {
    system: "Forgotten Realms / AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "1989 FR NPCs sourcebook (TSR 9235)", text: "Hall of Heroes (1989) details major FR characters and NPCs. TSR catalog number 9235. One of the early FR sourcebooks." }
    ]
  },
  "the code of the harpers": {
    system: "Forgotten Realms / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1993 Harpers sourcebook", text: "The Code of the Harpers (1993) covers the Harpers organization. TSR catalog number. Check copyright year and number line." }
    ]
  },
  "powers and pantheons": {
    system: "Forgotten Realms / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1997 FR deities sourcebook", text: "Powers and Pantheons (1997) covers the gods of the Forgotten Realms. TSR catalog number. Check copyright year and number line." }
    ]
  },
  "faiths and avatars": {
    system: "Forgotten Realms / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1996 FR religion sourcebook", text: "Faiths and Avatars (1996) covers good-aligned deities. TSR catalog number. Check copyright year." }
    ]
  },
  "demihuman deities": {
    system: "Forgotten Realms / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1998 FR non-human gods sourcebook", text: "Demihuman Deities (1998) covers demi-human racial deities. TSR catalog number. One of the later 2nd edition FR products." }
    ]
  },
  "cormanthyr empire of elves": {
    system: "Forgotten Realms / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1998 historical elven FR sourcebook", text: "Cormanthyr: Empire of Elves (1998) covers ancient elven history. TSR catalog number. One of the last 2nd edition FR products." }
    ]
  },
  "the pools trilogy": {
    system: "Forgotten Realms / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "FR adventure series FRC1-FRC3", text: "The Pools Trilogy refers to the adventure modules Pool of Radiance (FRC1), Curse of the Azure Bonds (FRC2), and Secret of the Silver Blades — or in some usage to the video game tie-in products. Check the module code on the cover." }
    ]
  },
  "curse of the azure bonds": {
    system: "Forgotten Realms / AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "FRC2 adventure (1989) — also a video game", text: "Curse of the Azure Bonds (FRC2, 1989) exists as both an RPG adventure module and a video game. The RPG module is a cardstock-covered book. Ensure you have the RPG module, not a video game box." }
    ]
  },
  "pool of radiance": {
    system: "Forgotten Realms / AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "FRC1 adventure (1989) — also a video game", text: "Pool of Radiance (FRC1, 1989) exists as both an RPG module and a famous SSI video game. The RPG module is a cardstock-covered book. Check that you have the RPG module." }
    ]
  },
  "menzoberranzan": {
    system: "Forgotten Realms / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1992 box set (TSR 1083)", text: "Menzoberranzan (1992) is a large box set detailing the drow city. Contains three booklets and maps. Component completeness is important. TSR catalog number 1083." }
    ]
  },
  "the city of ravens bluff": {
    system: "Forgotten Realms / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1998 city sourcebook", text: "The City of Ravens Bluff (1998) details a major FR city. TSR catalog number. One of the final 2nd edition FR products." }
    ]
  },
  "stormlight": {
    system: "Forgotten Realms / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "FR adventure module", text: "Check the FR module code on the cover and the TSR catalog number. Use the number line on the copyright page to identify the printing." }
    ]
  },

  // ══════════════════════════════════════════
  //  FORGOTTEN REALMS — FRE / FRS / FRQ ADVENTURES
  // ══════════════════════════════════════════
  "shadowdale": {
    system: "Forgotten Realms / AD&D", publisher: "TSR",
    tips: [
      { title: "FRE1 adventure (1989)", text: "Shadowdale (FRE1, 1989) is the first module in the Avatar Trilogy, tied to the Time of Troubles storyline and novels. The FRE1 code on the cover identifies this specific product." }
    ]
  },
  "tantras": {
    system: "Forgotten Realms / AD&D", publisher: "TSR",
    tips: [
      { title: "FRE2 adventure (1989)", text: "Tantras (FRE2, 1989) is the second Avatar Trilogy module. Check the FRE2 code on the cover." }
    ]
  },
  "waterdeep fre3": {
    system: "Forgotten Realms / AD&D", publisher: "TSR",
    tips: [
      { title: "FRE3 adventure (1989)", text: "Waterdeep (FRE3, 1989) completes the Avatar Trilogy. Check the FRE3 code on the cover and copyright year." }
    ]
  },
  "under illefarn": {
    system: "Forgotten Realms / AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "N5 / FR module (1987)", text: "Under Illefarn (1987) is one of the earliest Forgotten Realms adventure modules. TSR catalog number 9222. Check copyright year." }
    ]
  },
  "bloodstone pass": {
    system: "Forgotten Realms / AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "H1 module (1985) — Battlesystem tie-in", text: "Bloodstone Pass (H1, 1985) was designed to use the Battlesystem miniatures rules alongside standard AD&D. It is the first of the H-series modules." }
    ]
  },
  "the bloodstone wars": {
    system: "Forgotten Realms / AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "H2 module (1987)", text: "The Bloodstone Wars (H2, 1987) continues the Bloodstone Pass storyline. Check the H2 code and copyright year." }
    ]
  },
  "the throne of bloodstone": {
    system: "Forgotten Realms / AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "H4 module (1988) — highest level official TSR module", text: "The Throne of Bloodstone (H4, 1988) is notably the highest-level official AD&D module ever published — designed for characters of 18th to 100th level. This extreme level range makes it a unique and sought-after collectible." }
    ]
  },

  // ══════════════════════════════════════════
  //  FORGOTTEN REALMS — 3RD EDITION WotC
  // ══════════════════════════════════════════
  "forgotten realms campaign setting 3rd edition": {
    system: "Forgotten Realms / D&D 3rd Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2001 WotC hardcover", text: "The 3rd edition Forgotten Realms Campaign Setting (2001) is a large hardcover. WotC catalog number. Number line on copyright page identifies printing." },
      { title: "Separate from Gray Box", text: "This is a completely different product from the original Gray Box. The hardcover format alone distinguishes it." }
    ]
  },
  "races of faerun": {
    system: "Forgotten Realms / D&D 3rd Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2003 FR supplement", text: "Races of Faerûn (2003). WotC catalog number. Number line on copyright page." }
    ]
  },
  "magic of faerun": {
    system: "Forgotten Realms / D&D 3rd Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2001 FR supplement", text: "Magic of Faerûn (2001). WotC catalog number. Number line on copyright page." }
    ]
  },
  "underdark forgotten realms": {
    system: "Forgotten Realms / D&D 3rd Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2003 Underdark sourcebook", text: "Underdark (2003) covers the subterranean world. WotC catalog number. Number line on copyright page." }
    ]
  },
  "serpent kingdoms": {
    system: "Forgotten Realms / D&D 3.5 Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2004 FR supplement", text: "Serpent Kingdoms (2004) covers yuan-ti and serpentine creatures. WotC catalog number. Number line on copyright page." }
    ]
  },
  "shining south": {
    system: "Forgotten Realms / D&D 3.5 Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2004 FR supplement", text: "Shining South (2004) covers southern Faerûn. WotC catalog number. Number line on copyright page." }
    ]
  },
  "lost empires of faerun": {
    system: "Forgotten Realms / D&D 3.5 Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2005 historical FR supplement", text: "Lost Empires of Faerûn (2005) covers fallen civilizations. WotC catalog number. Number line on copyright page." }
    ]
  },
  "power of faerun": {
    system: "Forgotten Realms / D&D 3.5 Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2006 FR supplement", text: "Power of Faerûn (2006). WotC catalog number. Number line on copyright page." }
    ]
  },
  "mysteries of the moonsea": {
    system: "Forgotten Realms / D&D 3.5 Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2006 FR adventure", text: "Mysteries of the Moonsea (2006). WotC catalog number. Number line on copyright page." }
    ]
  },

  // ══════════════════════════════════════════
  //  DRAGONLANCE — COMPLETE MODULE AND SOURCEBOOK LINE
  // ══════════════════════════════════════════
  "dragonlance adventures": {
    system: "Dragonlance / AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "1987 hardcover sourcebook", text: "Dragonlance Adventures (1987) is the main Dragonlance hardcover sourcebook for AD&D 1st edition. TSR catalog number 2021. Check copyright year and number line." }
    ]
  },
  "dl2 dragons of flame": {
    system: "Dragonlance / AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "DL2 module (1984)", text: "Dragons of Flame (DL2, 1984) is the second Dragonlance module. Check the DL2 code and copyright year 1984." }
    ]
  },
  "dl3 dragons of hope": {
    system: "Dragonlance / AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "DL3 module (1984)", text: "Dragons of Hope (DL3, 1984). Check the DL3 code and copyright year." }
    ]
  },
  "dl4 dragons of desolation": {
    system: "Dragonlance / AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "DL4 module (1984)", text: "Dragons of Desolation (DL4, 1984). Check the DL4 code and copyright year." }
    ]
  },
  "dl5 dragons of mystery": {
    system: "Dragonlance / AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "DL5 module (1984) — sourcebook format", text: "Dragons of Mystery (DL5, 1984) is a sourcebook/module hybrid providing background information rather than a traditional adventure. Check the DL5 code." }
    ]
  },
  "dl6 dragons of ice": {
    system: "Dragonlance / AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "DL6 module (1985)", text: "Dragons of Ice (DL6, 1985). Check the DL6 code and copyright year." }
    ]
  },
  "dl7 dragons of light": {
    system: "Dragonlance / AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "DL7 module (1985)", text: "Dragons of Light (DL7, 1985). Check the DL7 code and copyright year." }
    ]
  },
  "dl8 dragons of war": {
    system: "Dragonlance / AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "DL8 module (1985)", text: "Dragons of War (DL8, 1985). Check the DL8 code and copyright year." }
    ]
  },
  "dl9 dragons of deceit": {
    system: "Dragonlance / AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "DL9 module (1985)", text: "Dragons of Deceit (DL9, 1985). Check the DL9 code and copyright year." }
    ]
  },
  "dl10 dragons of dreams": {
    system: "Dragonlance / AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "DL10 module (1986)", text: "Dragons of Dreams (DL10, 1986). Check the DL10 code and copyright year." }
    ]
  },
  "dl11 dragons of glory": {
    system: "Dragonlance / AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "DL11 module (1986) — wargame format", text: "Dragons of Glory (DL11, 1986) is a wargame supplement rather than a traditional adventure module. It uses Battlesystem rules for large-scale battles." }
    ]
  },
  "dl12 dragons of faith": {
    system: "Dragonlance / AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "DL12 module (1986)", text: "Dragons of Faith (DL12, 1986). Check the DL12 code and copyright year." }
    ]
  },
  "dl13 dragons of truth": {
    system: "Dragonlance / AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "DL13 module (1986)", text: "Dragons of Truth (DL13, 1986). Check the DL13 code and copyright year." }
    ]
  },
  "dl14 dragons of triumph": {
    system: "Dragonlance / AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "DL14 final module (1986)", text: "Dragons of Triumph (DL14, 1986) is the final module in the original Dragonlance series. Check the DL14 code and copyright year 1986." }
    ]
  },
  "dragonlance second generation": {
    system: "Dragonlance / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1994 2nd edition sourcebook", text: "Dragonlance: Second Generation (1994) covers the children of the original heroes. TSR catalog number. Check copyright year and number line." }
    ]
  },
  "tales of the lance": {
    system: "Dragonlance / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1992 box set", text: "Tales of the Lance (1992) is the 2nd edition Dragonlance campaign box set, replacing the original DL modules. Box set with multiple components. TSR catalog number 1074." }
    ]
  },
  "wings of fury": {
    system: "Dragonlance / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1994 DLR adventure module", text: "Wings of Fury is a Dragonlance adventure module in the DLR series. Check the DLR module code on the cover." }
    ]
  },
  "dls1 new beginnings": {
    system: "Dragonlance / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "DLS1 module — Dragonlance Saga series", text: "New Beginnings (DLS1) is part of the Dragonlance Saga adventure series for 2nd edition. Check the DLS code and copyright year." }
    ]
  },

  // ══════════════════════════════════════════
  //  BIRTHRIGHT — COMPLETE LINE
  // ══════════════════════════════════════════
  "birthright player's secrets": {
    system: "Birthright / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "Player's Secrets series of realm books", text: "The Birthright Player's Secrets line includes individual realm books (e.g. Player's Secrets of Tuornen, Player's Secrets of Ilien). Each is a small saddle-stitched booklet. Check the specific realm name on the cover." }
    ]
  },
  "birthright domains of war": {
    system: "Birthright / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1996 mass combat supplement", text: "Domains of War (1996) covers large-scale Birthright battles. TSR catalog number. Check copyright year and number line." }
    ]
  },
  "birthright blood enemies": {
    system: "Birthright / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1995 monsters sourcebook", text: "Blood Enemies: Abominations of Cerilia (1995) covers Birthright monsters. TSR catalog number. Check copyright year." }
    ]
  },
  "birthright the warlock of the stonecrowns": {
    system: "Birthright / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1995 Birthright adventure", text: "The Warlock of the Stonecrowns (1995) is a Birthright adventure. Check the TSR catalog number and copyright year." }
    ]
  },
  "blood spawn creatures of light and shadow": {
    system: "Birthright / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1995 Birthright sourcebook", text: "Blood Spawn: Creatures of Light and Shadow (1995) covers Birthright creatures. TSR catalog number. Check copyright year." }
    ]
  },

  // ══════════════════════════════════════════
  //  AL-QADIM — COMPLETE LINE
  // ══════════════════════════════════════════
  "land of fate": {
    system: "Al-Qadim / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1992 Al-Qadim box set", text: "Land of Fate (1992) is the Al-Qadim campaign box set. Contains two booklets and pull-out maps. TSR catalog number 1077. Check all components." }
    ]
  },
  "cities of bone": {
    system: "Al-Qadim / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1994 Al-Qadim box set", text: "Cities of Bone (1994) is a large Al-Qadim product. Box set with multiple booklets and maps. TSR catalog number 1108. Check all components." }
    ]
  },
  "golden voyages": {
    system: "Al-Qadim / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1992 Al-Qadim adventure set", text: "Golden Voyages (1992) is an Al-Qadim sea adventure box set. TSR catalog number 9421. Check all components including maps." }
    ]
  },
  "secrets of the lamp": {
    system: "Al-Qadim / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1993 Al-Qadim sourcebook", text: "Secrets of the Lamp (1993) covers genies in the Al-Qadim setting. TSR catalog number. Check copyright year and number line." }
    ]
  },
  "corsairs of the great sea": {
    system: "Al-Qadim / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1994 Al-Qadim adventure", text: "Corsairs of the Great Sea (1994). TSR catalog number. Check copyright year and number line." }
    ]
  },
  "caravans": {
    system: "Al-Qadim / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1994 Al-Qadim adventure", text: "Caravans (1994) is an Al-Qadim overland adventure. TSR catalog number. Check copyright year." }
    ]
  },
  "ruined kingdoms": {
    system: "Al-Qadim / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1994 Al-Qadim adventure set", text: "Ruined Kingdoms (1994). TSR catalog number. Check copyright year and number line." }
    ]
  },

  // ══════════════════════════════════════════
  //  SPELLJAMMER — COMPLETE LINE
  // ══════════════════════════════════════════
  "crystal spheres": {
    system: "Spelljammer / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1990 SJA1 adventure", text: "Crystal Spheres (SJA1, 1990) is the first major Spelljammer adventure. Check the SJA1 code and copyright year." }
    ]
  },
  "skull and crossbows": {
    system: "Spelljammer / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "Spelljammer adventure module", text: "Check the SJA or SJS module code on the cover and the TSR catalog number to identify this specific Spelljammer adventure." }
    ]
  },
  "the astromundi cluster": {
    system: "Spelljammer / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1993 Spelljammer box set", text: "The Astromundi Cluster (1993) is a large Spelljammer setting box set. TSR catalog number 1087. Check all components." }
    ]
  },
  "realmspace": {
    system: "Spelljammer / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1991 Toril sphere sourcebook", text: "Realmspace (1991) covers the crystal sphere containing the Forgotten Realms. TSR catalog number. Check copyright year and number line." }
    ]
  },
  "greyspace": {
    system: "Spelljammer / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1992 Oerth sphere sourcebook", text: "Greyspace (1992) covers the crystal sphere containing Greyhawk's Oerth. TSR catalog number. Check copyright year." }
    ]
  },
  "spelljammer monstrous compendium appendix": {
    system: "Spelljammer / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "Loose-leaf monster sheets", text: "The Spelljammer Monstrous Compendium appendix (1990) is in the standard MC loose-leaf format. Completeness of all sheets matters for value." }
    ]
  },
  "practical planetology": {
    system: "Spelljammer / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1991 Spelljammer supplement", text: "Practical Planetology (1991) covers the varied worlds of the Spelljammer setting. TSR catalog number. Check copyright year." }
    ]
  },
  "the legend of spelljammer": {
    system: "Spelljammer / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1991 box set", text: "The Legend of Spelljammer (1991) is a large box set covering the Spelljammer itself. TSR catalog number 1065. Check all components." }
    ]
  },

  // ══════════════════════════════════════════
  //  RAVENLOFT — COMPLETE LINE
  // ══════════════════════════════════════════
  "ravenloft monstrous compendium appendix": {
    system: "Ravenloft / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "Three appendix volumes (1991-1996)", text: "Three Ravenloft MC appendices were published. Vol. I (1991), Vol. II (1993, Children of the Night), and Vol. III (1996). Check the volume number and copyright year." }
    ]
  },
  "children of the night": {
    system: "Ravenloft / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "Ravenloft villain series", text: "Several 'Children of the Night' books were published covering Ravenloft villains by type (vampires, werebeasts, etc.). Check the subtitle to identify the specific volume." }
    ]
  },
  "carnival": {
    system: "Ravenloft / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1995 Ravenloft sourcebook", text: "Carnival (1995) details the traveling carnival in Ravenloft. TSR catalog number. Check copyright year." }
    ]
  },
  "domains of dread": {
    system: "Ravenloft / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1997 hardcover campaign guide", text: "Domains of Dread (1997) is a standalone hardcover campaign guide replacing the original box set. TSR catalog number 2163. Check copyright year and number line." }
    ]
  },
  "ravenloft gazetteer": {
    system: "Ravenloft / 3rd Edition / Sword and Sorcery", publisher: "Sword and Sorcery Studios",
    tips: [
      { title: "3e Sword and Sorcery Studios edition", text: "The Ravenloft 3rd edition line was published by Sword and Sorcery Studios (a White Wolf imprint) starting in 2001. Check for the Sword and Sorcery Studios logo." }
    ]
  },
  "gothic earth gazetteer": {
    system: "Ravenloft", publisher: "TSR",
    tips: [
      { title: "Ravenloft or Masque of the Red Death product", text: "Check whether this is a standard Ravenloft product or part of the Masque of the Red Death Gothic Earth sub-setting." }
    ]
  },
  "the house on gryphon hill": {
    system: "Ravenloft / AD&D", publisher: "TSR",
    tips: [
      { title: "Module code RA2 (1986)", text: "The House on Gryphon Hill (RA2, 1986) is the second standalone Ravenloft module, following the original I6. It returns to Barovia with a different tone from the original." }
    ]
  },
  "thoughts of darkness": {
    system: "Ravenloft / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "RQ1 adventure", text: "Thoughts of Darkness is a Ravenloft adventure module. Check the module code on the cover and the TSR catalog number." }
    ]
  },
  "from the shadows": {
    system: "Ravenloft / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "RA3 or RQ series adventure", text: "Check the RA or RQ module code on the cover and the TSR catalog number to identify this specific Ravenloft adventure." }
    ]
  },

  // ══════════════════════════════════════════
  //  MYSTARA / KNOWN WORLD — TSR
  // ══════════════════════════════════════════
  "the known world": {
    system: "Mystara / D&D BECMI", publisher: "TSR",
    tips: [
      { title: "GAZ series sourcebooks", text: "The Known World / Mystara setting was detailed in the GAZ (Gazetteer) series of sourcebooks. Each GAZ covers a different nation. GAZ1 covers Karameikos, GAZ2 covers the Emirates of Ylaruam, etc. Check the GAZ number on the cover." }
    ]
  },
  "gaz1 the grand duchy of karameikos": {
    system: "Mystara / D&D BECMI", publisher: "TSR",
    tips: [
      { title: "GAZ1 (1987) — first Gazetteer", text: "The Grand Duchy of Karameikos (GAZ1, 1987) is the first in the Gazetteer series. It comes with a cardstock cover and a large pull-out map. Check for the pull-out map." }
    ]
  },
  "gaz2 the emirates of ylaruam": {
    system: "Mystara / D&D BECMI", publisher: "TSR",
    tips: [
      { title: "GAZ2 (1987)", text: "The Emirates of Ylaruam (GAZ2, 1987). Same format as other GAZ books with pull-out map. Check copyright year and map completeness." }
    ]
  },
  "gaz3 the principalities of glantri": {
    system: "Mystara / D&D BECMI", publisher: "TSR",
    tips: [
      { title: "GAZ3 (1987)", text: "The Principalities of Glantri (GAZ3, 1987). Check the GAZ3 code and map completeness." }
    ]
  },
  "gaz4 the kingdom of ierendi": {
    system: "Mystara / D&D BECMI", publisher: "TSR",
    tips: [
      { title: "GAZ4 (1987)", text: "The Kingdom of Ierendi (GAZ4, 1987). Check the GAZ4 code and copyright year." }
    ]
  },
  "gaz5 the elves of alfheim": {
    system: "Mystara / D&D BECMI", publisher: "TSR",
    tips: [
      { title: "GAZ5 (1988)", text: "The Elves of Alfheim (GAZ5, 1988). Check the GAZ5 code and copyright year." }
    ]
  },
  "gaz6 the dwarves of rockhome": {
    system: "Mystara / D&D BECMI", publisher: "TSR",
    tips: [
      { title: "GAZ6 (1988)", text: "The Dwarves of Rockhome (GAZ6, 1988). Check the GAZ6 code and copyright year." }
    ]
  },
  "gaz7 the northern reaches": {
    system: "Mystara / D&D BECMI", publisher: "TSR",
    tips: [
      { title: "GAZ7 (1988)", text: "The Northern Reaches (GAZ7, 1988). Check the GAZ7 code and copyright year." }
    ]
  },
  "gaz8 the five shires": {
    system: "Mystara / D&D BECMI", publisher: "TSR",
    tips: [
      { title: "GAZ8 (1988)", text: "The Five Shires (GAZ8, 1988). Check the GAZ8 code and copyright year." }
    ]
  },
  "gaz9 the minrothad guilds": {
    system: "Mystara / D&D BECMI", publisher: "TSR",
    tips: [
      { title: "GAZ9 (1988)", text: "The Minrothad Guilds (GAZ9, 1988). Check the GAZ9 code and copyright year." }
    ]
  },
  "gaz10 the orcs of thar": {
    system: "Mystara / D&D BECMI", publisher: "TSR",
    tips: [
      { title: "GAZ10 (1988) — includes board game", text: "The Orcs of Thar (GAZ10, 1988) uniquely includes a board game element. A complete copy should have the board game components intact." }
    ]
  },
  "gaz11 the republic of darokin": {
    system: "Mystara / D&D BECMI", publisher: "TSR",
    tips: [
      { title: "GAZ11 (1989)", text: "The Republic of Darokin (GAZ11, 1989). Check the GAZ11 code and copyright year." }
    ]
  },
  "gaz12 the golden khan of ethengar": {
    system: "Mystara / D&D BECMI", publisher: "TSR",
    tips: [
      { title: "GAZ12 (1989)", text: "The Golden Khan of Ethengar (GAZ12, 1989). Check the GAZ12 code and copyright year." }
    ]
  },
  "gaz13 the shadow elves": {
    system: "Mystara / D&D BECMI", publisher: "TSR",
    tips: [
      { title: "GAZ13 (1990)", text: "The Shadow Elves (GAZ13, 1990). Check the GAZ13 code and copyright year." }
    ]
  },
  "gaz14 the atruaghin clans": {
    system: "Mystara / D&D BECMI", publisher: "TSR",
    tips: [
      { title: "GAZ14 (1991) — final Gazetteer", text: "The Atruaghin Clans (GAZ14, 1991) is the final Gazetteer in the series. Check the GAZ14 code and copyright year 1991." }
    ]
  },
  "wrath of the immortals": {
    system: "Mystara / D&D BECMI", publisher: "TSR",
    tips: [
      { title: "1992 box set — major setting event", text: "Wrath of the Immortals (1992) is a major campaign event box set that dramatically changed the Mystara setting. Contains multiple booklets and a map. TSR catalog number 1082. Check all components." }
    ]
  },
  "mystara monstrous compendium appendix": {
    system: "Mystara / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1994 loose-leaf appendix", text: "The Mystara Monstrous Compendium appendix (1994) is in the standard MC loose-leaf format. Completeness of all sheets matters." }
    ]
  },

  // ══════════════════════════════════════════
  //  GREYHAWK — COMPLETE LINE
  // ══════════════════════════════════════════
  "greyhawk ruins": {
    system: "Greyhawk / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1990 box set", text: "Greyhawk Ruins (1990) is the 2nd edition update of the original Greyhawk dungeon. Box set with multiple booklets. TSR catalog number 1043. Check all components." }
    ]
  },
  "from the ashes": {
    system: "Greyhawk / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1992 revised Greyhawk box set", text: "From the Ashes (1992) is the major Greyhawk update following the Greyhawk Wars. Box set with two booklets and a large poster map. TSR catalog number 1068." }
    ]
  },
  "night below an underdark campaign": {
    system: "Greyhawk / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1995 mega-campaign box set", text: "Night Below: An Underdark Campaign (1995) is one of the largest 2nd edition adventure box sets. Contains three booklets and multiple maps. TSR catalog number 1125. Check all components." }
    ]
  },
  "the return of the eight": {
    system: "Greyhawk / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1998 Greyhawk adventure", text: "The Return of the Eight (1998) continues the Greyhawk storyline. TSR catalog number. Check copyright year and number line." }
    ]
  },
  "players guide to greyhawk": {
    system: "Greyhawk / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1998 player sourcebook", text: "Player's Guide to Greyhawk (1998) is a player-facing sourcebook. TSR catalog number. Check copyright year." }
    ]
  },
  "greyhawk the adventure begins": {
    system: "Greyhawk / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1998 Greyhawk starter box set", text: "The Adventure Begins (1998) is the late 2nd edition Greyhawk starter. TSR catalog number. Check all components." }
    ]
  },
  "ghosts of saltmarsh": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2019 5e adventure anthology", text: "Ghosts of Saltmarsh (2019) updates classic Greyhawk sea adventures for 5th edition. Standard and alternate hobby store covers were produced. Number line on copyright page." }
    ]
  },
  "against the cult of the reptile god": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "N1 module (1982)", text: "Against the Cult of the Reptile God (N1, 1982) is a classic investigation adventure. Check the N1 module code and the copyright year 1982." }
    ]
  },

  // ══════════════════════════════════════════
  //  COUNCIL OF WYRMS / COUNCIL OF WYRMS — TSR
  // ══════════════════════════════════════════
  "council of wyrms": {
    system: "AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1994 dragon player box set", text: "Council of Wyrms (1994) allows players to play dragons. Box set with three booklets. TSR catalog number 1107. Check all components." }
    ]
  },

  // ══════════════════════════════════════════
  //  THUNDER RIFT — TSR
  // ══════════════════════════════════════════
  "thunder rift": {
    system: "D&D Basic / BECMI", publisher: "TSR",
    tips: [
      { title: "1992 introductory setting", text: "Thunder Rift (1992) is a small-scale introductory campaign setting. TSR catalog number. Several Thunder Rift adventure modules were produced (DDA1-DDA4 series)." }
    ]
  },

  // ══════════════════════════════════════════
  //  ODYSSEY / DARK SUN 5E
  // ══════════════════════════════════════════
  "princes of the apocalypse": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2015 Elemental Evil adventure", text: "Princes of the Apocalypse (2015) is the first major 5e adventure set in the Forgotten Realms. Number line on copyright page. Standard cover only for this product." }
    ]
  },
  "out of the abyss": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2015 Rage of Demons adventure", text: "Out of the Abyss (2015) is set in the Underdark. Number line on copyright page." }
    ]
  },
  "rage of demons": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2015 storyline", text: "Rage of Demons is the 5e storyline encompassing Out of the Abyss and related products. Check the specific product title." }
    ]
  },
  "storm king's thunder": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2016 giants adventure", text: "Storm King's Thunder (2016). Number line on copyright page. Standard cover." }
    ]
  },
  "tales from the yawning portal": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2017 classic dungeon anthology", text: "Tales from the Yawning Portal (2017) adapts classic AD&D dungeons for 5e. Includes Tomb of Horrors, White Plume Mountain, and others. Number line on copyright page." }
    ]
  },
  "descent into avernus": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2019 Baldur's Gate adventure", text: "Baldur's Gate: Descent into Avernus (2019). Standard and hobby store alternate covers exist. Number line on copyright page." }
    ]
  },
  "icewind dale rime of the frostmaiden": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2020 Icewind Dale adventure", text: "Icewind Dale: Rime of the Frostmaiden (2020). Standard and hobby store alternate covers. Number line on copyright page." }
    ]
  },
  "the wild beyond the witchlight": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2021 Feywild adventure with alternate covers", text: "The Wild Beyond the Witchlight (2021). Standard and hobby store exclusive alternate covers. Number line on copyright page." }
    ]
  },
  "journeys through the radiant citadel": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2022 multicultural anthology adventure", text: "Journeys Through the Radiant Citadel (2022). Standard and alternate covers. Number line on copyright page." }
    ]
  },
  "spelljammer light of xaryxis adventure": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2022 — part of Spelljammer box set", text: "Light of Xaryxis is one of the three books in the 2022 Spelljammer Adventures in Space box set. It is not sold separately." }
    ]
  },
  "dragonlance shadow of the dragon queen": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2022 5e Dragonlance revival", text: "Dragonlance: Shadow of the Dragon Queen (2022) revives the classic setting for 5th edition. Standard and alternate hobby store covers. Number line on copyright page." }
    ]
  },
  "planescape adventures in the multiverse": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2023 box set revival", text: "Planescape: Adventures in the Multiverse (2023) is a three-book box set revival of the classic setting. Check that all three books (Sigil and the Outlands, Turn of Fortune's Wheel, Morte's Planar Parade) are present." }
    ]
  },
  "the deck of many things": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2023 two-book slipcase plus card deck", text: "The Deck of Many Things (2023) was published as a slipcase set containing two books and a physical card deck. Check whether all components including the card deck are present." }
    ]
  },
  "phandelver and below the shattered obelisk": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2023 adventure", text: "Phandelver and Below: The Shattered Obelisk (2023). Expands on the Starter Set's Lost Mine of Phandelver. Standard and alternate covers. Number line on copyright page." }
    ]
  },

  // ══════════════════════════════════════════
  //  EBERRON — WOTC / KEITH BAKER
  // ══════════════════════════════════════════
  "eberron campaign setting": {
    system: "Eberron / D&D 3.5 Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2004 first printing", text: "The original Eberron Campaign Setting (2004) won the WotC setting search. Number line on copyright page. The Keith Baker creator credit is on the cover." }
    ]
  },
  "rising from the last war": {
    system: "Eberron / D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2019 5e Eberron book", text: "Eberron: Rising from the Last War (2019) adapts the setting for 5th edition. Standard and alternate hobby store covers. Number line on copyright page." }
    ]
  },

  // ══════════════════════════════════════════
  //  RAVNICA / THEROS / STRIXHAVEN — MTG CROSSOVERS
  // ══════════════════════════════════════════
  "guildmasters guide to ravnica": {
    system: "D&D 5th Edition / MTG", publisher: "Wizards of the Coast",
    tips: [
      { title: "2018 Magic: The Gathering crossover", text: "Guildmasters' Guide to Ravnica (2018) was the first D&D/MTG crossover. Standard and alternate covers. Number line on copyright page." }
    ]
  },
  "mythic odysseys of theros": {
    system: "D&D 5th Edition / MTG", publisher: "Wizards of the Coast",
    tips: [
      { title: "2020 Greek mythology MTG crossover", text: "Mythic Odysseys of Theros (2020). Standard and alternate hobby store covers. Number line on copyright page." }
    ]
  },

  // ══════════════════════════════════════════
  //  D&D STARTER SETS AND ESSENTIALS
  // ══════════════════════════════════════════
  "lost mine of phandelver": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "D&D Starter Set (2014)", text: "Lost Mine of Phandelver is the adventure included in the D&D 5th edition Starter Set (2014). It is rarely found as a standalone product separate from the box — if you have a standalone stapled copy, it likely came from a split Starter Set." }
    ]
  },
  "dragons of stormwreck isle": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2022 Starter Set adventure", text: "Dragons of Stormwreck Isle is the adventure in the 2022 Starter Set. As with Lost Mine of Phandelver, it is primarily found as part of the box set." }
    ]
  },

  // ══════════════════════════════════════════
  //  SPELLJAMMER — ORIGINAL LINE CONTINUED
  // ══════════════════════════════════════════
  "rock of bral": {
    system: "Spelljammer / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1992 Spelljammer city sourcebook", text: "Rock of Bral (1992) details the major Spelljammer city-asteroid. TSR catalog number. Check copyright year and number line." }
    ]
  },
  "the endless chase": {
    system: "Spelljammer / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "SJA2 adventure (1990)", text: "The Endless Chase (SJA2, 1990). Check the SJA2 module code and copyright year." }
    ]
  },
  "spelljammer ships of the line": {
    system: "Spelljammer / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "Spelljammer accessory", text: "Ships of the Line is a Spelljammer accessory detailing various spacecraft. Check the TSR catalog number and copyright year." }
    ]
  },

  // ══════════════════════════════════════════
  //  FRC / FR CONFLICT SERIES — FORGOTTEN REALMS
  // ══════════════════════════════════════════
  "battlesystem skirmishes": {
    system: "Forgotten Realms / AD&D", publisher: "TSR",
    tips: [
      { title: "FRC1 module (1989)", text: "Battlesystem Skirmishes (FRC1, 1989) is the first Forgotten Realms Conflicts module, designed for use with the Battlesystem miniatures rules. Check the FRC1 code on the cover." }
    ]
  },

  // ══════════════════════════════════════════
  //  SPELLJAMMER — CLOAKMASTER CYCLE
  // ══════════════════════════════════════════
  "beyond the moons": {
    system: "Spelljammer / Novel", publisher: "TSR",
    tips: [
      { title: "Cloakmaster Cycle novel — not an RPG book", text: "Beyond the Moons is a Spelljammer novel from the Cloakmaster Cycle series. It is fiction, not an RPG supplement. If you are looking for the RPG supplement, check the format — this is a mass market paperback novel." }
    ]
  },

  // ══════════════════════════════════════════
  //  GREYHAWK — ADDITIONAL ADVENTURES
  // ══════════════════════════════════════════
  "city of hawks": {
    system: "Greyhawk / AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "WG8 module (1987)", text: "City of Hawks (WG8, 1987) is a Greyhawk city adventure. Check the WG8 module code and copyright year 1987." }
    ]
  },
  "gargoyle": {
    system: "Greyhawk / AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "WG9 module (1988)", text: "Gargoyle (WG9, 1988) is a short Greyhawk adventure. Check the WG9 module code and copyright year." }
    ]
  },
  "the five shall be one": {
    system: "Greyhawk / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "WGR2 adventure (1991)", text: "The Five Shall Be One (WGR2, 1991) is a Greyhawk adventure. Check the WGR2 module code and copyright year 1991." }
    ]
  },
  "howl from the north": {
    system: "Greyhawk / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "WGR3 adventure (1991)", text: "Howl from the North (WGR3, 1991). Check the WGR3 code and copyright year." }
    ]
  },
  "iuz the evil": {
    system: "Greyhawk / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "WGR5 sourcebook (1993)", text: "Iuz the Evil (WGR5, 1993) covers the evil demigod Iuz and his lands. Check the WGR5 code and copyright year 1993." }
    ]
  },
  "the marklands": {
    system: "Greyhawk / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "WGR4 sourcebook (1993)", text: "The Marklands (WGR4, 1993) covers the Furyondy and Nyrond nations. Check the WGR4 code and copyright year." }
    ]
  },

  // ══════════════════════════════════════════
  //  AD&D GENERAL SUPPLEMENTS — COMPLETE
  // ══════════════════════════════════════════
  "manual of the planes": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "1987 planar sourcebook", text: "Manual of the Planes (1987) is the original AD&D sourcebook for the planes. TSR catalog number 2022. Check copyright year and number line. A 3rd edition WotC version also exists — check the copyright year to distinguish." }
    ]
  },
  "dungeon master's design kit": {
    system: "AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1988 DMing accessory", text: "Dungeon Master's Design Kit (1988) is an accessory for adventure design. TSR catalog number 2106. Check copyright year." }
    ]
  },
  "dungeoneer's survival guide ad&d": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "See dungeoneer's survival guide entry", text: "Check the 'dungeoneer's survival guide' entry for full identification details." }
    ]
  },
  "arms and equipment guide": {
    system: "AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1991 equipment sourcebook", text: "Arms and Equipment Guide (1991) details weapons and armor for AD&D 2nd edition. TSR catalog number. Check copyright year and number line." }
    ]
  },
  "sages and specialists": {
    system: "AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "AD&D 2e NPC sourcebook", text: "Sages and Specialists is an AD&D 2nd edition NPC sourcebook. Check the TSR catalog number and copyright year." }
    ]
  },
  "the complete fighter's handbook": {
    system: "AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "PHBR1 (1989)", text: "See 'complete fighter's handbook' entry for full identification details." }
    ]
  },
  "the complete barbarian's handbook": {
    system: "AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "PHBR10 (1995)", text: "The Complete Barbarian's Handbook (PHBR10, 1995) is one of the later PHBR books. Check the PHBR10 code on the spine and copyright year 1995." }
    ]
  },
  "the complete psionics handbook": {
    system: "AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "PHBR5 (1991)", text: "The Complete Psionics Handbook (PHBR5, 1991) covers psionic characters. Check the PHBR5 code and copyright year 1991." }
    ]
  },
  "the complete bard's handbook": {
    system: "AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "PHBR7 (1992)", text: "The Complete Bard's Handbook (PHBR7, 1992). Check the PHBR7 code and copyright year 1992." }
    ]
  },
  "the complete ranger's handbook": {
    system: "AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "PHBR8 (1993)", text: "The Complete Ranger's Handbook (PHBR8, 1993). Check the PHBR8 code and copyright year 1993." }
    ]
  },
  "the complete druid's handbook": {
    system: "AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "PHBR13 (1994)", text: "The Complete Druid's Handbook (PHBR13, 1994). Check the PHBR13 code and copyright year 1994." }
    ]
  },
  "the complete paladin's handbook": {
    system: "AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "PHBR12 (1994)", text: "The Complete Paladin's Handbook (PHBR12, 1994). Check the PHBR12 code and copyright year 1994." }
    ]
  },
  "the complete ninja's handbook": {
    system: "AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "PHBR16 (1995)", text: "The Complete Ninja's Handbook (PHBR16, 1995). Check the PHBR16 code and copyright year 1995." }
    ]
  },
  "campaign sourcebook and catacomb guide": {
    system: "AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1990 DMG supplement", text: "Campaign Sourcebook and Catacomb Guide (1990). TSR catalog number. Check copyright year." }
    ]
  },
  "castles": {
    system: "AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1990 castle design sourcebook", text: "Castles (1990) covers castle design and construction for AD&D. TSR catalog number. Check copyright year and number line." }
    ]
  },
  "encyclopedia magica": {
    system: "AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "Four-volume magic item reference (1994-1995)", text: "Encyclopedia Magica is a four-volume hardcover reference covering magic items. Volumes I-IV were published 1994-1995. Check the volume number on the spine." }
    ]
  },
  "tome of magic": {
    system: "AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1991 2e spell supplement", text: "Tome of Magic (1991) expands spells for AD&D 2nd edition. TSR catalog number 2121. Check copyright year and number line." }
    ]
  },
  "the complete book of elves": {
    system: "AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "RR3 / PHBR9 (1992)", text: "The Complete Book of Elves (1992) covers elves in AD&D 2nd edition. Published as part of the PHBR series. Check copyright year and number line." }
    ]
  },
  "the complete book of dwarves": {
    system: "AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "PHBR6 (1991)", text: "The Complete Book of Dwarves (PHBR6, 1991). Check the PHBR6 code and copyright year 1991." }
    ]
  },
  "the complete book of gnomes and halflings": {
    system: "AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "PHBR11 (1993)", text: "The Complete Book of Gnomes & Halflings (PHBR11, 1993). Check the PHBR11 code and copyright year 1993." }
    ]
  },
  "the complete book of humanoids": {
    system: "AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "PHBR14 (1993)", text: "The Complete Book of Humanoids (PHBR14, 1993). Check the PHBR14 code and copyright year 1993." }
    ]
  },
  "the complete book of necromancers": {
    system: "AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "PHBR9-related (1995)", text: "The Complete Book of Necromancers (1995). Check the copyright year 1995 and number line." }
    ]
  },
  "player's option combat and tactics": {
    system: "AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1995 Player's Option series", text: "Player's Option: Combat & Tactics (1995) is the first in the Player's Option advanced supplement series. TSR catalog number 2149. Check copyright year." }
    ]
  },
  "player's option skills and powers": {
    system: "AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1995 Player's Option series", text: "Player's Option: Skills & Powers (1995). TSR catalog number 2154. Check copyright year and number line." }
    ]
  },
  "player's option spells and magic": {
    system: "AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1996 Player's Option series", text: "Player's Option: Spells & Magic (1996). TSR catalog number 2163. Check copyright year and number line." }
    ]
  },
  "dungeon master option high-level campaigns": {
    system: "AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1995 high-level play supplement", text: "Dungeon Master Option: High-Level Campaigns (1995). TSR catalog number 2156. Check copyright year and number line." }
    ]
  },
  "high level campaigns": {
    system: "AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "See dungeon master option high-level campaigns", text: "Check the 'dungeon master option high-level campaigns' entry for full identification details." }
    ]
  },
  "of ships and the sea": {
    system: "AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1997 naval supplement", text: "Of Ships and the Sea (1997) covers naval campaigns. TSR catalog number. Check copyright year and number line." }
    ]
  },
  "three dragon ante": {
    system: "D&D Accessory", publisher: "Wizards of the Coast",
    tips: [
      { title: "Card game set in the D&D world", text: "Three-Dragon Ante (2005) is an in-world card game for D&D. It is a card game product, not an RPG supplement. An RPG Expansion Set was later released." }
    ]
  },

  // ══════════════════════════════════════════
  //  BATTLESYSTEM — TSR
  // ══════════════════════════════════════════
  "battlesystem": {
    system: "AD&D Battlesystem", publisher: "TSR",
    tips: [
      { title: "Original (1985) vs revised (1989)", text: "Battlesystem (1985) is the original large-scale D&D miniatures combat system. A revised edition was published in 1989. The original is a larger box set; the revised edition has a different cover." }
    ]
  },

  // ══════════════════════════════════════════
  //  AMAZING ENGINE — TSR
  // ══════════════════════════════════════════
  "amazing engine system guide": {
    system: "Amazing Engine", publisher: "TSR",
    tips: [
      { title: "1993 TSR multi-setting game engine", text: "Amazing Engine (1993) was TSR's attempt at a multi-setting RPG system. The core System Guide and several setting books were published before the line was discontinued." }
    ]
  },

  // ══════════════════════════════════════════
  //  ALTERNITY — TSR
  // ══════════════════════════════════════════
  "alternity player's handbook": {
    system: "Alternity", publisher: "TSR",
    tips: [
      { title: "1998 sci-fi RPG from TSR", text: "Alternity (1998) was TSR's modern science fiction RPG. The Player's Handbook and Gamemaster Guide are the two core books. TSR catalog number. Check copyright year and number line." },
      { title: "Star Drive and Dark Matter settings", text: "Alternity supported multiple settings including Star*Drive and Dark Matter. These are separate supplements from the core books." }
    ]
  },

  // ══════════════════════════════════════════
  //  STAR FRONTIERS — TSR
  // ══════════════════════════════════════════
  "star frontiers": {
    system: "Star Frontiers", publisher: "TSR",
    tips: [
      { title: "1982 original box set", text: "The original Star Frontiers box set (1982) contains two booklets (Basic Game and Expanded Game) and accessories. TSR catalog number 7007. Check all components for completeness." },
      { title: "Revised edition box (1983)", text: "A revised edition was published in 1983 with a different box cover. Check the copyright year on the booklet copyright pages." },
      { title: "Knight Hawks supplement", text: "Star Frontiers: Knight Hawks (1983) is a space combat expansion. It is a separate product from the original box set." }
    ]
  },

  // ══════════════════════════════════════════
  //  INDIANA JONES / BULLWINKLE — TSR LICENSED GAMES
  // ══════════════════════════════════════════
  "indiana jones rpg": {
    system: "Indiana Jones RPG", publisher: "TSR",
    tips: [
      { title: "1984 TSR licensed box set", text: "The Indiana Jones RPG (1984) is a licensed product from TSR. The box set contains multiple booklets. The license has long expired, making original copies collectible." }
    ]
  },
  "bullwinkle and rocky rpg": {
    system: "Bullwinkle and Rocky RPG", publisher: "TSR",
    tips: [
      { title: "1988 licensed comedy RPG", text: "The Bullwinkle and Rocky Role Playing Party Game (1988) is a licensed comedy RPG from TSR. An unusual and collectible licensed product." }
    ]
  },

  // ══════════════════════════════════════════
  //  ADVENTURES BY LEVELS / SERIES MODULES
  // ══════════════════════════════════════════
  "the village of hommlet": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "T1 module (1979)", text: "The Village of Hommlet (T1, 1979) is one of the most famous early D&D adventures. The 1st printing (1979) has a plain tan cover. The revised 1981 printing has illustrated cover art. A plain tan cover is the 1st printing." },
      { title: "T1-4 Temple of Elemental Evil connection", text: "Hommlet was later combined with the Temple of Elemental Evil into T1-4. The standalone T1 is a different (and often more collectible) product from the combined version." }
    ]
  },
  "the temple of elemental evil": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "T1-4 combined module (1985)", text: "The Temple of Elemental Evil (T1-4, 1985) combines The Village of Hommlet with the full temple dungeon. Check for the T1-4 code on the cover. This is one of the most iconic AD&D adventures." },
      { title: "Number line and cover price", text: "Check the number line on the copyright page and the back cover price to identify the printing era." }
    ]
  },
  "the secret of bone hill": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "L1 module (1981)", text: "The Secret of Bone Hill (L1, 1981) is set in the Lendore Isles. Check the L1 code on the cover and the copyright year 1981." }
    ]
  },
  "the sentinel": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "M1 module (1984)", text: "The Sentinel (M1, 1984) uses the BECMI-style monster stat blocks despite being AD&D compatible. Check the M1 code and copyright year." }
    ]
  },
  "the gauntlet": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "M2 module (1984)", text: "The Gauntlet (M2, 1984) is a sequel to The Sentinel. Check the M2 code and copyright year 1984." }
    ]
  },
  "the ghost tower of inverness": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "C2 module (1980)", text: "The Ghost Tower of Inverness (C2, 1980) is a tournament module. Check the C2 module code and copyright year. An original tournament copy has a different cover from the retail version." }
    ]
  },
  "the lost island of castanamir": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "C3 module (1984)", text: "The Lost Island of Castanamir (C3, 1984). Check the C3 code and copyright year." }
    ]
  },
  "the eye of the serpent": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "O1 module (1983)", text: "The Eye of the Serpent (O1, 1983) is a solo adventure. Check the O1 code on the cover." }
    ]
  },
  "i3 pharaoh": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "I3 module (1982)", text: "Pharaoh (I3, 1982) is the first in the Desert of Desolation series. Check the I3 code on the cover and copyright year 1982." }
    ]
  },
  "i4 oasis of the white palm": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "I4 module (1983)", text: "Oasis of the White Palm (I4, 1983). Part of the Desert of Desolation series. Check the I4 code and copyright year 1983." }
    ]
  },
  "i5 lost tomb of martek": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "I5 module (1983)", text: "Lost Tomb of Martek (I5, 1983). Completes the Desert of Desolation series. Check the I5 code and copyright year 1983." }
    ]
  },
  "the sinister secret of saltmarsh": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "U1 module (1981)", text: "The Sinister Secret of Saltmarsh (U1, 1981) is the first in the U-series maritime adventures. Check the U1 code and copyright year. This module was later updated as part of the 5e Ghosts of Saltmarsh anthology." }
    ]
  },
  "danger at dunwater": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "U2 module (1982)", text: "Danger at Dunwater (U2, 1982) continues the Saltmarsh series. Check the U2 code and copyright year 1982." }
    ]
  },
  "the final enemy": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "U3 module (1983)", text: "The Final Enemy (U3, 1983) completes the Saltmarsh series. Check the U3 code and copyright year 1983." }
    ]
  },


  // ══════════════════════════════════════════
  //  RAVENLOFT — MORE MODULES
  // ══════════════════════════════════════════
  "touch of death": {
    system: "Ravenloft / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "RQ2 module", text: "Touch of Death (RQ2) is a Ravenloft adventure. Check the RQ2 module code and TSR catalog number on the cover." }
    ]
  },
  "ship of horror": {
    system: "Ravenloft / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "RA3 module (1991)", text: "Ship of Horror (RA3, 1991) is a nautical Ravenloft adventure. Check the RA3 module code and copyright year 1991." }
    ]
  },
  "castles forlorn": {
    system: "Ravenloft / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1993 Ravenloft box set", text: "Castles Forlorn (1993) is a Ravenloft box set covering three time periods. TSR catalog number 1090. Contains three booklets and a map. Check all components." }
    ]
  },
  "forged of darkness": {
    system: "Ravenloft / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "Ravenloft accessory", text: "Forged of Darkness is a Ravenloft accessory. Check the TSR catalog number and copyright year." }
    ]
  },
  "tarokka deck": {
    system: "Ravenloft", publisher: "TSR / Wizards of the Coast",
    tips: [
      { title: "Original TSR vs WotC card deck", text: "The Tarokka Deck was originally produced by TSR for Ravenloft. A new version was produced by WotC for the Curse of Strahd 5e adventure. Check the publisher — TSR decks are older and more collectible." }
    ]
  },

  // ══════════════════════════════════════════
  //  DARK SUN — MORE ADVENTURES
  // ══════════════════════════════════════════
  "dungeon of doom": {
    system: "Dark Sun / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "Dark Sun adventure module", text: "Check the DSQ or other module code on the cover and the TSR catalog number to identify this specific Dark Sun adventure." }
    ]
  },
  "black spine": {
    system: "Dark Sun / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1994 Dark Sun adventure", text: "Black Spine (1994) is a Dark Sun adventure involving the Dragon. TSR catalog number. Check copyright year and number line." }
    ]
  },
  "arcane shadows": {
    system: "Dark Sun / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "Dark Sun adventure module", text: "Arcane Shadows is a Dark Sun adventure. Check the TSR catalog number and module code on the cover." }
    ]
  },
  "slave tribes": {
    system: "Dark Sun / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1992 Dark Sun sourcebook", text: "Slave Tribes (1992) covers non-city Dark Sun communities. TSR catalog number. Check copyright year." }
    ]
  },
  "merchant houses of athas": {
    system: "Dark Sun / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1992 Dark Sun sourcebook", text: "Merchant Houses of Athas (1992) details the great trading houses. TSR catalog number. Check copyright year and number line." }
    ]
  },
  "dune trader": {
    system: "Dark Sun / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1992 Dark Sun sourcebook", text: "Dune Trader (1992) covers the merchant trade in Athas. TSR catalog number. Check copyright year." }
    ]
  },
  "terrors of the desert": {
    system: "Dark Sun / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "Dark Sun MC appendix", text: "Terrors of the Desert is a Dark Sun Monstrous Compendium appendix in the standard loose-leaf format. Completeness of all monster sheets is important." }
    ]
  },
  "defilers and preservers": {
    system: "Dark Sun / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1996 Dark Sun magic sourcebook", text: "Defilers and Preservers: The Wizards of Athas (1996) covers magic in the Dark Sun setting. TSR catalog number. Check copyright year." }
    ]
  },
  "psionic artifacts of athas": {
    system: "Dark Sun / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1996 Dark Sun psionic items book", text: "Psionic Artifacts of Athas (1996) covers psionic items. TSR catalog number. Check copyright year." }
    ]
  },

  // ══════════════════════════════════════════
  //  AL-QADIM — MORE PRODUCTS
  // ══════════════════════════════════════════
  "a dozen and one adventures": {
    system: "Al-Qadim / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1992 Al-Qadim adventure collection", text: "A Dozen and One Adventures (1992) is a collection of Al-Qadim adventures. TSR catalog number. Check copyright year." }
    ]
  },
  "the Complete sha'ir's handbook": {
    system: "Al-Qadim / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "CGR2 1994 sourcebook", text: "The Complete Sha'ir's Handbook (CGR2, 1994) covers the sha'ir class and other Al-Qadim elements. Check the CGR2 code and copyright year 1994." }
    ]
  },

  // ══════════════════════════════════════════
  //  MALEVOLENT AND BENIGN — SPELLJAMMER / RAVENLOFT MC
  // ══════════════════════════════════════════
  "monstrous compendium annual": {
    system: "AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "Annual volumes (1994-1998)", text: "The Monstrous Compendium Annual was published in four volumes (1994-1998) as a bound digest of monsters from various MC appendices. Check the volume number and copyright year." }
    ]
  },

  // ══════════════════════════════════════════
  //  COUNCIL OF WYRMS — ADDITIONAL
  // ══════════════════════════════════════════
  "wyrms of the north": {
    system: "Forgotten Realms / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1999 dragon sourcebook", text: "Wyrms of the North (1999) details notable dragons of the Forgotten Realms. TSR catalog number. One of the last pre-3e FR products." }
    ]
  },

  // ══════════════════════════════════════════
  //  NETHERIL — FORGOTTEN REALMS
  // ══════════════════════════════════════════
  "netheril empire of magic": {
    system: "Forgotten Realms / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1996 box set", text: "Netheril: Empire of Magic (1996) covers the ancient Netherese civilization. Box set with two booklets and maps. TSR catalog number 1147. Check all components." }
    ]
  },

  // ══════════════════════════════════════════
  //  RUINS OF MYTH DRANNOR — FR
  // ══════════════════════════════════════════
  "ruins of myth drannor": {
    system: "Forgotten Realms / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1993 box set", text: "Ruins of Myth Drannor (1993) details the destroyed elven city. Box set with multiple booklets and maps. TSR catalog number 1084. Check all components for completeness." }
    ]
  },

  // ══════════════════════════════════════════
  //  PORTS OF CALL — FORGOTTEN REALMS
  // ══════════════════════════════════════════
  "anauroch": {
    system: "Forgotten Realms / AD&D 1st-2nd Edition", publisher: "TSR",
    tips: [
      { title: "1991 FR sourcebook (TSR 9237)", text: "Anauroch (1991) covers the great desert of the Forgotten Realms. TSR catalog number 9237. Check copyright year and number line." }
    ]
  },
  "the jungles of chult": {
    system: "Forgotten Realms / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1993 FR adventure", text: "The Jungles of Chult (1993) covers the jungle peninsula region. TSR catalog number. Check copyright year." }
    ]
  },
  "the ruins of myth drannor": {
    system: "Forgotten Realms / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "See ruins of myth drannor entry", text: "Check the 'ruins of myth drannor' entry for full identification details." }
    ]
  },

  // ══════════════════════════════════════════
  //  DRAGONLANCE — 3RD EDITION AND BEYOND
  // ══════════════════════════════════════════
  "dragonlance campaign setting 3rd edition": {
    system: "Dragonlance / D&D 3rd Edition", publisher: "Sovereign Press / Wizards of the Coast",
    tips: [
      { title: "2003 Sovereign Press edition", text: "The 3rd edition Dragonlance Campaign Setting (2003) was published by Sovereign Press under license from WotC. Distinct from all TSR-era products. Check for the Sovereign Press logo." }
    ]
  },
  "age of mortals": {
    system: "Dragonlance / D&D 3rd Edition", publisher: "Sovereign Press",
    tips: [
      { title: "2003 Dragonlance supplement", text: "Age of Mortals (2003) covers the Fifth Age era of Dragonlance for 3e. Sovereign Press. Check copyright year." }
    ]
  },
  "dragonlance nexus": {
    system: "Dragonlance", publisher: "Various",
    tips: [
      { title: "Fan-produced content vs official products", text: "Dragonlance Nexus refers to the fan community and unofficial web content. If you have a physical product, check the publisher — official products are TSR, Sovereign Press, or Margaret Weis Productions." }
    ]
  },
  "dragonlance 5th age dramatic adventure game": {
    system: "Dragonlance 5th Age", publisher: "TSR",
    tips: [
      { title: "1996 SAGA system box set", text: "The Dragonlance Fifth Age Dramatic Adventure Game (1996) uses the SAGA card-based system rather than dice — a complete departure from AD&D rules. Box set format. TSR catalog number 1148." },
      { title: "Card-based resolution", text: "The SAGA system uses playing cards rather than dice. A complete box set should include the deck of cards. Missing cards significantly reduce value." }
    ]
  },
  "heroes of steel": {
    system: "Dragonlance 5th Age", publisher: "TSR",
    tips: [
      { title: "SAGA system supplement (1996)", text: "Heroes of Steel (1996) is a supplement for the Dragonlance Fifth Age SAGA system. TSR catalog number. Check copyright year." }
    ]
  },

  // ══════════════════════════════════════════
  //  BIRTHRIGHT — MORE PRODUCTS
  // ══════════════════════════════════════════
  "the rjurik highlands": {
    system: "Birthright / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1996 Birthright sourcebook", text: "The Rjurik Highlands (1996) covers the Norse-inspired region. TSR catalog number. Check copyright year." }
    ]
  },
  "the spider's test": {
    system: "Birthright / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "Birthright adventure module", text: "The Spider's Test is a Birthright adventure module. Check the TSR catalog number and copyright year on the cover." }
    ]
  },
  "havens of the great bay": {
    system: "Birthright / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1995 Birthright sourcebook", text: "Havens of the Great Bay (1995) covers the coastal regions of Cerilia. TSR catalog number. Check copyright year." }
    ]
  },
  "the sword and crown": {
    system: "Birthright / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1995 Birthright adventure", text: "The Sword and the Crown (1995) is a Birthright political adventure. TSR catalog number. Check copyright year." }
    ]
  },
  "naval battle rules": {
    system: "Birthright / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "Birthright Seafarers supplement", text: "The Birthright naval rules supplement. Check the TSR catalog number and copyright year." }
    ]
  },

  // ══════════════════════════════════════════
  //  GREYHAWK — MORE ADVENTURES AND SUPPLEMENTS
  // ══════════════════════════════════════════
  "mordenkainen's fantastic adventure": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "WG5 module (1984)", text: "Mordenkainen's Fantastic Adventure (WG5, 1984) features Gary Gygax's famous wizard. Check the WG5 code and copyright year 1984." }
    ]
  },
  "isle of the ape wg6": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "WG6 module (1985)", text: "Isle of the Ape (WG6, 1985) is designed for very high-level characters and features an inter-dimensional setting. Check the WG6 code and copyright year." }
    ]
  },
  "the forgotten temple of tharizdun": {
    system: "AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "WG4 module (1982)", text: "The Forgotten Temple of Tharizdun (WG4, 1982) connects to the Temple of Elemental Evil storyline. Check the WG4 code and copyright year 1982." }
    ]
  },
  "fate of istus": {
    system: "Greyhawk / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "WGA4 multi-DM event adventure (1989)", text: "Fate of Istus (WGA4, 1989) is a linked adventure designed to be run simultaneously by multiple DMs at conventions. Check the WGA4 code and copyright year." }
    ]
  },
  "vecna lives": {
    system: "Greyhawk / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "WGA4 event adventure (1990)", text: "Vecna Lives! (1990) is a landmark Greyhawk adventure where a player character could potentially become the legendary lich Vecna. TSR catalog number. Check copyright year and number line." }
    ]
  },

  // ══════════════════════════════════════════
  //  TSR UK PRODUCTS
  // ══════════════════════════════════════════
  "the haunted hall of eveningstar": {
    system: "Forgotten Realms / AD&D", publisher: "TSR",
    tips: [
      { title: "FR adventure module", text: "Check the FR module code and TSR catalog number. Many late FR modules were produced under Ed Greenwood's oversight." }
    ]
  },
  "uk1 beyond the crystal cave": {
    system: "AD&D 1st Edition", publisher: "TSR UK",
    tips: [
      { title: "UK1 module (1983) — TSR UK production", text: "Beyond the Crystal Cave (UK1, 1983) was produced by TSR's UK office. UK modules have a different production style from US TSR modules. Check the UK1 code and the 'TSR UK' credit." }
    ]
  },
  "uk2 the sentinel": {
    system: "AD&D 1st Edition", publisher: "TSR UK",
    tips: [
      { title: "UK2 module (1983) — TSR UK production", text: "The Sentinel (UK2, 1983) is a TSR UK module. Check the UK2 code and the TSR UK production credit." }
    ]
  },
  "uk3 the gauntlet": {
    system: "AD&D 1st Edition", publisher: "TSR UK",
    tips: [
      { title: "UK3 module (1984) — TSR UK production", text: "The Gauntlet (UK3, 1984). Check the UK3 code and TSR UK credit." }
    ]
  },
  "uk4 when a star falls": {
    system: "AD&D 1st Edition", publisher: "TSR UK",
    tips: [
      { title: "UK4 module (1984) — TSR UK production", text: "When a Star Falls (UK4, 1984) is notable for its investigative format. Check the UK4 code." }
    ]
  },
  "uk5 eye of the serpent": {
    system: "AD&D 1st Edition", publisher: "TSR UK",
    tips: [
      { title: "UK5 module (1984) — TSR UK production", text: "Eye of the Serpent (UK5, 1984). Check the UK5 code and TSR UK credit." }
    ]
  },
  "uk6 All that glitters": {
    system: "AD&D 1st Edition", publisher: "TSR UK",
    tips: [
      { title: "UK6 module (1984) — TSR UK production", text: "All That Glitters (UK6, 1984). Check the UK6 code and TSR UK credit." }
    ]
  },
  "uk7 dark clouds gather": {
    system: "AD&D 1st Edition", publisher: "TSR UK",
    tips: [
      { title: "UK7 module (1985) — TSR UK production", text: "Dark Clouds Gather (UK7, 1985). Check the UK7 code and TSR UK credit." }
    ]
  },

  // ══════════════════════════════════════════
  //  BASIC D&D — MORE MODULES
  // ══════════════════════════════════════════
  "b6 the veiled society": {
    system: "Basic D&D", publisher: "TSR",
    tips: [
      { title: "B6 module (1984)", text: "The Veiled Society (B6, 1984) is a mystery/investigation module for Basic D&D. Check the B6 code and copyright year." }
    ]
  },
  "b7 rahasia": {
    system: "Basic D&D", publisher: "TSR",
    tips: [
      { title: "B7 module (1983)", text: "Rahasia (B7, 1983) is an elven village adventure. Check the B7 code. It was originally released as a separate product before being republished as B7." }
    ]
  },
  "b8 journey to the rock": {
    system: "Basic D&D", publisher: "TSR",
    tips: [
      { title: "B8 module (1984)", text: "Journey to the Rock (B8, 1984). Check the B8 code and copyright year." }
    ]
  },
  "b9 castle caldwell and beyond": {
    system: "Basic D&D", publisher: "TSR",
    tips: [
      { title: "B9 module (1985)", text: "Castle Caldwell and Beyond (B9, 1985) contains five short adventures. Check the B9 code." }
    ]
  },
  "b10 night's dark terror": {
    system: "Basic D&D", publisher: "TSR",
    tips: [
      { title: "B10 module (1986)", text: "Night's Dark Terror (B10, 1986) is a large wilderness adventure bridging Basic and Expert D&D. Check the B10 code and copyright year 1986." }
    ]
  },
  "x1 the isle of dread": {
    system: "D&D Expert Set", publisher: "TSR",
    tips: [
      { title: "X1 module (1981) — included in Expert Set", text: "The Isle of Dread (X1, 1981) was included in the Cook/Marsh Expert Set and later sold separately. A copy without a cover price may be the Expert Set pack-in version." }
    ]
  },
  "x2 castle amber": {
    system: "D&D Expert Set", publisher: "TSR",
    tips: [
      { title: "X2 module (1981)", text: "Castle Amber (X2, 1981) is a gothic horror-themed adventure. Check the X2 code and copyright year 1981." }
    ]
  },
  "x4 master of the desert nomads": {
    system: "D&D Expert Set", publisher: "TSR",
    tips: [
      { title: "X4 module (1983)", text: "Master of the Desert Nomads (X4, 1983). Check the X4 code and copyright year." }
    ]
  },
  "x5 temple of death": {
    system: "D&D Expert Set", publisher: "TSR",
    tips: [
      { title: "X5 module (1983)", text: "Temple of Death (X5, 1983) is the sequel to X4. Check the X5 code and copyright year." }
    ]
  },
  "x6 quagmire": {
    system: "D&D Expert Set", publisher: "TSR",
    tips: [
      { title: "X6 module (1984)", text: "Quagmire! (X6, 1984) is a swamp-themed adventure. Check the X6 code and copyright year." }
    ]
  },
  "cm1 test of the warlords": {
    system: "D&D Companion Set", publisher: "TSR",
    tips: [
      { title: "CM1 module (1984)", text: "Test of the Warlords (CM1, 1984) is the first Companion-level module for BECMI D&D. Check the CM1 code and copyright year 1984." }
    ]
  },

  // ══════════════════════════════════════════
  //  IMMORTALS RULES — BECMI
  // ══════════════════════════════════════════
  "im1 the immortal storm": {
    system: "D&D Immortals Set", publisher: "TSR",
    tips: [
      { title: "IM1 module (1986)", text: "The Immortal Storm (IM1, 1986) is an Immortals-level adventure for BECMI D&D. Check the IM1 code and copyright year 1986." }
    ]
  },

  // ══════════════════════════════════════════
  //  MYSTARA — ADDITIONAL PRODUCTS
  // ══════════════════════════════════════════
  "the black boxed set": {
    system: "Mystara / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "1991 Mystara introductory box", text: "The 'New Easy to Master Dungeons & Dragons' game (also called the Black Box, 1991) was a simplified introductory edition. TSR catalog number 1071. The box has a distinctive black cover." }
    ]
  },
  "thunder rift modules": {
    system: "D&D Thunder Rift", publisher: "TSR",
    tips: [
      { title: "DDA series modules (1991-1992)", text: "The Thunder Rift DDA series includes DDA1 through DDA4. Each is a standalone adventure module. Check the DDA code on the cover to identify the specific module." }
    ]
  },

  // ══════════════════════════════════════════
  //  FORGOTTEN REALMS — FR CODE SERIES
  // ══════════════════════════════════════════
  "fr1 waterdeep and the north": {
    system: "Forgotten Realms / AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "FR1 sourcebook (1987)", text: "Waterdeep and the North (FR1, 1987) is the first in the numbered FR series. Check the FR1 code on the cover." }
    ]
  },
  "fr2 moonshae": {
    system: "Forgotten Realms / AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "FR2 sourcebook (1987)", text: "Moonshae (FR2, 1987) covers the Celtic-influenced isles. Check the FR2 code and copyright year." }
    ]
  },
  "fr3 empires of the sands": {
    system: "Forgotten Realms / AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "FR3 sourcebook (1988)", text: "Empires of the Sands (FR3, 1988). Check the FR3 code and copyright year." }
    ]
  },
  "fr4 the magister": {
    system: "Forgotten Realms / AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "FR4 sourcebook (1988)", text: "The Magister (FR4, 1988) covers magic and spellcasters. Check the FR4 code and copyright year 1988." }
    ]
  },
  "fr5 the savage frontier": {
    system: "Forgotten Realms / AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "FR5 sourcebook (1988)", text: "The Savage Frontier (FR5, 1988) covers the North. Check the FR5 code and copyright year." }
    ]
  },
  "fr6 dreams of the red wizards": {
    system: "Forgotten Realms / AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "FR6 sourcebook (1988)", text: "Dreams of the Red Wizards (FR6, 1988) covers Thay. Check the FR6 code and copyright year." }
    ]
  },
  "fr7 hall of heroes": {
    system: "Forgotten Realms / AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "FR7 sourcebook (1989)", text: "Hall of Heroes (FR7, 1989) covers major FR NPCs and heroes. Check the FR7 code and copyright year." }
    ]
  },
  "fr8 cities of mystery": {
    system: "Forgotten Realms / AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "FR8 accessory (1989)", text: "Cities of Mystery (FR8, 1989) is a map accessory for creating FR cities. Check the FR8 code and copyright year." }
    ]
  },
  "fr9 bloodstone lands": {
    system: "Forgotten Realms / AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "FR9 sourcebook (1989)", text: "The Bloodstone Lands (FR9, 1989) covers the northeast of Faerûn. Check the FR9 code and copyright year." }
    ]
  },
  "fr10 the savage frontier": {
    system: "Forgotten Realms / AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "FR10 sourcebook (1990)", text: "Old Empires (FR10, 1990) covers Mulhorand, Unther, and Chessenta. Check the FR10 code and copyright year." }
    ]
  },
  "fr11 dwarves deep": {
    system: "Forgotten Realms / AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "FR11 sourcebook (1990)", text: "Dwarves Deep (FR11, 1990) covers dwarven culture and communities. Check the FR11 code and copyright year." }
    ]
  },
  "fr12 the horde": {
    system: "Forgotten Realms / AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "FR12 sourcebook (1990)", text: "The Horde (FR12, 1990) is the standalone sourcebook version covering the Tuigan Horde. Distinct from the box set of the same name." }
    ]
  },
  "fr13 anauroch": {
    system: "Forgotten Realms / AD&D 1st Edition", publisher: "TSR",
    tips: [
      { title: "FR13 sourcebook (1991)", text: "Anauroch (FR13, 1991) covers the great Netherese desert. Check the FR13 code and copyright year." }
    ]
  },
  "fr14 the ring of winter": {
    system: "Forgotten Realms / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "FR14 adventure (1992)", text: "The Ring of Winter (FR14, 1992) is a Forgotten Realms adventure module. Check the FR14 code and copyright year." }
    ]
  },
  "fr15 gold and glory": {
    system: "Forgotten Realms / AD&D 2nd Edition", publisher: "TSR",
    tips: [
      { title: "FR15 sourcebook (1992)", text: "Gold & Glory (FR15, 1992) covers mercenary companies of the Realms. Check the FR15 code and copyright year 1992." }
    ]
  },

  // ══════════════════════════════════════════
  //  D&D 3RD EDITION — CORE AND SUPPLEMENTS
  // ══════════════════════════════════════════
  "dungeon master's guide 3rd edition": {
    system: "D&D 3rd Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "3.0 vs 3.5 DMG", text: "The original 3.0 DMG (2000) and the 3.5 revised DMG (2003) have different cover art. The 3.0 cover is by Henry Higginbotham; the 3.5 cover has different art. Check the copyright year." },
      { title: "Number line", text: "WotC used a number line on the copyright page. 1st printing has all digits present." }
    ]
  },
  "monster manual 3rd edition": {
    system: "D&D 3rd Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "3.0 vs 3.5 Monster Manual", text: "Original 3.0 MM (2000) and 3.5 revised MM (2003) have different cover art and stat block formats. The copyright year is the simplest distinguisher." }
    ]
  },
  "monster manual 2": {
    system: "D&D 3rd Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2002 3e supplement", text: "Monster Manual II (2002) is a 3.0 supplement. Check copyright year. A Monster Manual III (2004) for 3.5 also exists — these are entirely different products." }
    ]
  },
  "monster manual iii": {
    system: "D&D 3.5 Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2004 3.5e supplement", text: "Monster Manual III (2004) is a 3.5 supplement. Check copyright year 2004." }
    ]
  },
  "monster manual iv": {
    system: "D&D 3.5 Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2006 3.5e supplement", text: "Monster Manual IV (2006). Check copyright year 2006 and number line." }
    ]
  },
  "monster manual v": {
    system: "D&D 3.5 Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2007 3.5e supplement", text: "Monster Manual V (2007). Check copyright year 2007." }
    ]
  },
  "fiend folio 3rd edition": {
    system: "D&D 3rd Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2003 3e Fiend Folio", text: "The 3rd edition Fiend Folio (2003) is a completely different product from the original 1st edition Fiend Folio. Check copyright year — 2003 means 3e, 1981 means 1e." }
    ]
  },
  "deities and demigods 3rd edition": {
    system: "D&D 3rd Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2002 3e Deities and Demigods", text: "The 3rd edition Deities and Demigods (2002) covers the gods of D&D for 3e. Completely different from the 1e version. Check copyright year." }
    ]
  },
  "epic level handbook": {
    system: "D&D 3rd Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2002 high-level play supplement", text: "The Epic Level Handbook (2002) covers level 21 and beyond for 3e. WotC catalog number. Check copyright year and number line." }
    ]
  },
  "psionics handbook": {
    system: "D&D 3rd Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2001 3e psionic supplement", text: "The Psionics Handbook (2001) covers psionics for 3e. A significantly revised Expanded Psionics Handbook (2004) for 3.5 replaced it." }
    ]
  },
  "expanded psionics handbook": {
    system: "D&D 3.5 Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2004 revised psionic supplement", text: "Expanded Psionics Handbook (2004) replaces the original Psionics Handbook for 3.5e. Check copyright year 2004." }
    ]
  },
  "book of exalted deeds": {
    system: "D&D 3.5 Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2003 mature content supplement", text: "Book of Exalted Deeds (2003) covers saintly good-aligned content. It was marketed as requiring parental guidance. WotC number line on copyright page." }
    ]
  },
  "book of vile darkness": {
    system: "D&D 3rd Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2002 mature content supplement", text: "Book of Vile Darkness (2002) was the first D&D supplement to carry a mature content label. WotC number line on copyright page." }
    ]
  },
  "complete warrior": {
    system: "D&D 3.5 Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2003 3.5e supplement", text: "Complete Warrior (2003) is part of the Complete series for 3.5e. Check copyright year and number line." }
    ]
  },
  "complete adventurer": {
    system: "D&D 3.5 Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2005 3.5e supplement", text: "Complete Adventurer (2005). Check copyright year 2005 and number line." }
    ]
  },
  "complete arcane": {
    system: "D&D 3.5 Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2004 3.5e supplement", text: "Complete Arcane (2004). Check copyright year 2004 and number line." }
    ]
  },
  "complete divine": {
    system: "D&D 3.5 Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2004 3.5e supplement", text: "Complete Divine (2004). Check copyright year 2004 and number line." }
    ]
  },
  "complete scoundrel": {
    system: "D&D 3.5 Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2007 3.5e supplement", text: "Complete Scoundrel (2007). One of the later Complete series books. Check copyright year." }
    ]
  },
  "complete psionic": {
    system: "D&D 3.5 Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2006 3.5e supplement", text: "Complete Psionic (2006). Check copyright year 2006 and number line." }
    ]
  },
  "complete mage": {
    system: "D&D 3.5 Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2006 3.5e supplement", text: "Complete Mage (2006). Check copyright year 2006 and number line." }
    ]
  },
  "races of the dragon": {
    system: "D&D 3.5 Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2006 3.5e Races series supplement", text: "Races of the Dragon (2006) is part of the Races series. Kobolds, dragonborn, and other draconic races are covered. Check copyright year." }
    ]
  },
  "races of stone": {
    system: "D&D 3.5 Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2004 Races series supplement", text: "Races of Stone (2004) covers dwarves, gnomes, and goliaths. Check copyright year." }
    ]
  },
  "races of the wild": {
    system: "D&D 3.5 Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2005 Races series supplement", text: "Races of the Wild (2005) covers elves, halflings, and raptorans. Check copyright year." }
    ]
  },
  "races of destiny": {
    system: "D&D 3.5 Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2004 Races series supplement", text: "Races of Destiny (2004) covers humans, half-elves, and half-orcs. Check copyright year." }
    ]
  },
  "unearthed arcana 3rd edition": {
    system: "D&D 3.5 Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2004 3.5e variant rules", text: "Unearthed Arcana (2004) collects variant rules for 3.5e. It is a completely different book from the 1st edition Unearthed Arcana. Check the copyright year — 2004 means 3.5e." }
    ]
  },
  "draconomicon": {
    system: "D&D 3.5 Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2003 dragon sourcebook", text: "Draconomicon (2003) is a comprehensive dragon sourcebook for 3.5e. Number line on copyright page." }
    ]
  },
  "libris mortis": {
    system: "D&D 3.5 Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2004 undead sourcebook", text: "Libris Mortis: The Book of Undead (2004). Number line on copyright page." }
    ]
  },
  "lords of madness": {
    system: "D&D 3.5 Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2005 aberration sourcebook", text: "Lords of Madness (2005) covers aberrations including beholders and mind flayers. Number line on copyright page." }
    ]
  },
  "miniatures handbook": {
    system: "D&D 3.5 Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2003 miniatures supplement", text: "Miniatures Handbook (2003) bridges the D&D Miniatures skirmish game and the RPG. Number line on copyright page." }
    ]
  },
  "stormwrack": {
    system: "D&D 3.5 Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2005 aquatic supplement", text: "Stormwrack: Mastering the Perils of Wind and Wave (2005). Number line on copyright page." }
    ]
  },
  "sandstorm": {
    system: "D&D 3.5 Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2005 desert supplement", text: "Sandstorm: Mastering the Perils of Fire and Sand (2005). Number line on copyright page." }
    ]
  },
  "frostburn": {
    system: "D&D 3.5 Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2004 cold supplement", text: "Frostburn: Mastering the Perils of Ice and Snow (2004). Number line on copyright page." }
    ]
  },
  "dungeonscape": {
    system: "D&D 3.5 Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2007 dungeon design supplement", text: "Dungeonscape (2007). Number line on copyright page." }
    ]
  },
  "cityscape": {
    system: "D&D 3.5 Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2006 urban supplement", text: "Cityscape (2006). Number line on copyright page." }
    ]
  },
  "wilderness survival guide 3e": {
    system: "D&D 3.5 Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "Check copyright year to distinguish from 1e version", text: "A Wilderness Survival Guide for 3.5e may exist as a supplement. Check the copyright year — the 1st edition version is 1986, 3.5e versions are post-2000." }
    ]
  },
  "spell compendium": {
    system: "D&D 3.5 Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2005 spell reference", text: "Spell Compendium (2005) collects spells from many 3.5e supplements. Number line on copyright page." }
    ]
  },
  "magic item compendium": {
    system: "D&D 3.5 Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2007 magic item reference", text: "Magic Item Compendium (2007). Number line on copyright page." }
    ]
  },
  "monster manual iv 35e": {
    system: "D&D 3.5 Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2006 supplement", text: "Monster Manual IV (2006). Check copyright year." }
    ]
  },

  // ══════════════════════════════════════════
  //  D&D 4TH EDITION — CORE AND SUPPLEMENTS
  // ══════════════════════════════════════════
  "player's handbook 4th edition": {
    system: "D&D 4th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2008 first printing", text: "D&D 4th edition Player's Handbook (2008) has a distinctive cover with a warrior and distinctive 4e logo. Number line on copyright page. The 4e line includes PHB1, PHB2, and PHB3." }
    ]
  },
  "dungeon master's guide 4th edition": {
    system: "D&D 4th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2008 first printing", text: "D&D 4e Dungeon Master's Guide (2008). Number line on copyright page. 4e DMG2 also exists." }
    ]
  },
  "monster manual 4th edition": {
    system: "D&D 4th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2008 first printing", text: "D&D 4e Monster Manual (2008). Three volumes (MM1, MM2, MM3) exist. Number line on copyright page." }
    ]
  },
  "arcane power": {
    system: "D&D 4th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2009 4e power supplement", text: "Arcane Power (2009) is part of the 4e power series. Check copyright year and number line." }
    ]
  },
  "divine power": {
    system: "D&D 4th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2009 4e power supplement", text: "Divine Power (2009). Check copyright year." }
    ]
  },
  "martial power": {
    system: "D&D 4th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2008 4e power supplement", text: "Martial Power (2008). Check copyright year and number line." }
    ]
  },
  "primal power": {
    system: "D&D 4th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2009 4e power supplement", text: "Primal Power (2009). Check copyright year." }
    ]
  },
  "manual of the planes 4e": {
    system: "D&D 4th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2008 4e planar supplement", text: "Manual of the Planes (2008) is the 4e version. Different from the 1e and 2e versions. Check copyright year." }
    ]
  },
  "open grave": {
    system: "D&D 4th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2009 4e undead supplement", text: "Open Grave: Secrets of the Undead (2009). Check copyright year and number line." }
    ]
  },

  // ══════════════════════════════════════════
  //  D&D 5E — ADDITIONAL SUPPLEMENTS
  // ══════════════════════════════════════════
  "sword coast adventurer's guide": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2015 Forgotten Realms supplement", text: "Sword Coast Adventurer's Guide (2015) was the first major 5e Forgotten Realms supplement. Standard cover only. Number line on copyright page." }
    ]
  },
  "volo's guide to monsters 5e": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2016 first printing with alternate covers", text: "Volo's Guide to Monsters (2016). Standard and hobby store exclusive alternate covers. Number line on copyright page." }
    ]
  },
  "mordenkainen's tome of foes 5e": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2018 first printing with alternate covers", text: "Mordenkainen's Tome of Foes (2018). Standard and hobby store alternate covers. Number line on copyright page." }
    ]
  },
  "explorer's guide to wildemount": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2020 Critical Role setting book", text: "Explorer's Guide to Wildemount (2020) is tied to the Critical Role web series. Standard cover only. Number line on copyright page." }
    ]
  },
  "mythic odysseys of theros 5e": {
    system: "D&D 5th Edition / MTG", publisher: "Wizards of the Coast",
    tips: [
      { title: "2020 Greek mythology setting", text: "Mythic Odysseys of Theros (2020). Standard and hobby store alternate covers. Number line on copyright page." }
    ]
  },
  "acquisitions incorporated": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2019 comedy RPG supplement", text: "Acquisitions Incorporated (2019) is tied to the comedy D&D podcast/show. Standard cover only. Number line on copyright page." }
    ]
  },
  "locathah rising": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2019 Free RPG Day adventure", text: "Locathah Rising (2019) was a Free RPG Day giveaway adventure. Free RPG Day copies have a distinctive Free RPG Day logo on the cover. These are separate from any retail distribution." }
    ]
  },
  "lost laboratory of kwalish": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2018 Extra Life charity adventure", text: "Lost Laboratory of Kwalish (2018) was produced for the Extra Life charity. The DMs Guild version differs from any physical distribution." }
    ]
  },
  "infernal machine rebuild": {
    system: "D&D 5th Edition", publisher: "Wizards of the Coast",
    tips: [
      { title: "2019 Extra Life charity adventure", text: "Infernal Machine Rebuild (2019) was another Extra Life charity adventure." }
    ]
  },


  "_general_tsr": {
    system: "TSR (General)", publisher: "TSR",
    tips: [
      { title: "Number line method", text: "TSR used a descending number line on copyright pages starting in the early 1980s. The lowest digit present equals the printing number. No number line usually indicates a very early printing." },
      { title: "Cover price method", text: "TSR raised prices over time. Comparing the cover price on your copy against known price increases for that product helps narrow down the print era." },
      { title: "ISBN presence", text: "Early TSR products (pre-1980) often lack ISBNs entirely. An ISBN on the back cover means a later printing of any pre-1980 title." },
      { title: "TSR logo evolution", text: "The TSR logo changed over the years: the original 1970s logo, the 'wizard' logo of the early 1980s, and the 'TSR Inc.' badge logo of the mid-1980s onward are all distinct. Logo style helps date a printing." }
    ]
  }

};

// ─────────────────────────────────────────────
//  SAMPLE COLLECTION DATA
// ─────────────────────────────────────────────
const SAMPLE_BOOKS = [
  {
    id: 'b1', title: "Player's Handbook", system: "D&D", publisher: "TSR",
    edition: "1st Edition", printing: "6th Printing", year: "1978",
    condition: "Good", emoji: "📖", color: "#6B1A1A",
    notes: "Slight wear on corners, spine intact. Original owner's name on first page.",
    priceLow: 45, priceMid: 120, priceHigh: 340, priceUpdated: "Jun 2026"
  },
  {
    id: 'b2', title: "Dungeon Master's Guide", system: "D&D", publisher: "TSR",
    edition: "1st Edition", printing: "1st Printing", year: "1979",
    condition: "Very Good", emoji: "📕", color: "#4A1A0A",
    notes: "1st printing confirmed — no ISBN, $12 cover price. Minor shelf wear.",
    priceLow: 80, priceMid: 210, priceHigh: 580, priceUpdated: "Jun 2026"
  },
  {
    id: 'b3', title: "Call of Cthulhu", system: "Call of Cthulhu", publisher: "Chaosium",
    edition: "2nd Edition", printing: "1st Printing", year: "1983",
    condition: "Very Good+", emoji: "📘", color: "#1A3A5C",
    notes: "No ISBN on back cover — confirms 1st printing. Cream paper interior.",
    priceLow: 30, priceMid: 85, priceHigh: 195, priceUpdated: "Jun 2026"
  },
  {
    id: 'b4', title: "Warhammer Fantasy Roleplay", system: "Warhammer", publisher: "Games Workshop",
    edition: "1st Edition", printing: "1st Printing", year: "1986",
    condition: "Good", emoji: "📙", color: "#2A1A3A",
    notes: "GW first printing with original Sibbick cover. Spine slightly cracked.",
    priceLow: 60, priceMid: 180, priceHigh: 420, priceUpdated: "Jun 2026"
  },
  {
    id: 'b5', title: "Shadowrun", system: "Shadowrun", publisher: "FASA",
    edition: "1st Edition", printing: "2nd Printing", year: "1989",
    condition: "Very Good+", emoji: "📗", color: "#0A2A1A",
    notes: "FASA cat# 7001. Revised cover art confirms 2nd printing.",
    priceLow: 55, priceMid: 140, priceHigh: 310, priceUpdated: "Jun 2026"
  },
  {
    id: 'b6', title: "Monster Manual", system: "D&D", publisher: "TSR",
    edition: "1st Edition", printing: "3rd Printing", year: "1977",
    condition: "Fair", emoji: "📔", color: "#5A3A0A",
    notes: "Number line shows 3rd printing. Cover shows significant wear.",
    priceLow: 20, priceMid: 55, priceHigh: 140, priceUpdated: "Jun 2026"
  }
];

const SAMPLE_WISHLIST = [
  { id: 'w1', title: "Fiend Folio", system: "D&D 1st Ed", emoji: "📒" },
  { id: 'w2', title: "Unearthed Arcana", system: "D&D 1st Ed", emoji: "📓" },
  { id: 'w3', title: "Deities & Demigods", system: "D&D 1st Ed", emoji: "📃" }
];

// ─────────────────────────────────────────────
//  STATE
// ─────────────────────────────────────────────
let state = {
  books: [],
  wishlist: [],
  currentScreen: 'collection',
  detailId: null,
  filterSystem: 'All',
  searchQuery: ''
};

function loadState() {
  try {
    const saved = localStorage.getItem('rpgvault_books');
    const savedWish = localStorage.getItem('rpgvault_wishlist');
    state.books = saved ? JSON.parse(saved) : [...SAMPLE_BOOKS];
    state.wishlist = savedWish ? JSON.parse(savedWish) : [...SAMPLE_WISHLIST];
  } catch(e) {
    state.books = [...SAMPLE_BOOKS];
    state.wishlist = [...SAMPLE_WISHLIST];
  }
}

function saveBooks() {
  try { localStorage.setItem('rpgvault_books', JSON.stringify(state.books)); } catch(e) {}
}

function saveWishlist() {
  try { localStorage.setItem('rpgvault_wishlist', JSON.stringify(state.wishlist)); } catch(e) {}
}

// ─────────────────────────────────────────────
//  UTILITIES
// ─────────────────────────────────────────────
function uid() { return 'b' + Date.now() + Math.random().toString(36).slice(2,6); }

function condClass(cond) {
  const map = {
    'Fine': 'cond-nm', 'Near Mint': 'cond-nm', 'Very Good+': 'cond-vgp', 'VG+': 'cond-vgp',
    'Very Good': 'cond-vg', 'VG': 'cond-vg', 'Good': 'cond-gd',
    'Fair': 'cond-fr', 'Poor': 'cond-pr'
  };
  return map[cond] || 'badge-cond';
}

function fmtMoney(n) { return n ? '$' + Number(n).toLocaleString() : '—'; }

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2400);
}

function systemEmoji(sys) {
  const map = { 'D&D': '🐉', 'Call of Cthulhu': '🐙', 'Pathfinder': '⚔️',
    'Warhammer': '💀', 'Shadowrun': '🤖', 'Traveller': '🚀',
    'Runequest': '🌿', 'GURPS': '📐' };
  for (const k in map) { if (sys && sys.includes(k)) return map[k]; }
  return '📚';
}

// ─────────────────────────────────────────────
//  NAV
// ─────────────────────────────────────────────
function showScreen(name) {
  state.currentScreen = name;
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const screen = document.getElementById('screen-' + name);
  if (screen) screen.classList.add('active');
  const navBtn = document.querySelector('.nav-btn[data-screen="' + name + '"]');
  if (navBtn) navBtn.classList.add('active');

  // special screens without nav
  ['cameraView','formView','detailView'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('active');
  });

  if (name === 'collection') renderCollection();
  if (name === 'stats') renderStats();
  if (name === 'wishlist') renderWishlist();
}

function showDetail(id) {
  state.detailId = id;
  const book = state.books.find(b => b.id === id);
  if (!book) return;

  // hide main screens, show detail
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('detailView').classList.add('active');

  renderDetail(book);
  document.getElementById('detailView').querySelector('.scroll-body').scrollTop = 0;
}

function showAddMenu() {
  showScreen('add');
}

function showCamera() {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('cameraView').classList.add('active');
  startCamera();
}

function showForm(prefill) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('detailView').classList.remove('active');
  document.getElementById('cameraView').classList.remove('active');
  document.getElementById('formView').classList.add('active');
  populateForm(prefill || {});
}

function goBack() {
  stopCamera();
  document.getElementById('cameraView').classList.remove('active');
  document.getElementById('detailView').classList.remove('active');
  document.getElementById('formView').classList.remove('active');
  showScreen('collection');
}

// ─────────────────────────────────────────────
//  COLLECTION RENDER
// ─────────────────────────────────────────────
function getFilteredBooks() {
  let books = state.books;
  if (state.filterSystem !== 'All') {
    books = books.filter(b => b.system === state.filterSystem);
  }
  if (state.searchQuery) {
    const q = state.searchQuery.toLowerCase();
    books = books.filter(b =>
      b.title.toLowerCase().includes(q) ||
      (b.system || '').toLowerCase().includes(q) ||
      (b.publisher || '').toLowerCase().includes(q) ||
      (b.edition || '').toLowerCase().includes(q)
    );
  }
  return books;
}

function getSystems() {
  const s = new Set(state.books.map(b => b.system).filter(Boolean));
  return ['All', ...Array.from(s).sort()];
}

function renderCollection() {
  // subtitle
  document.getElementById('collectionCount').textContent =
    state.books.length + ' book' + (state.books.length !== 1 ? 's' : '') + ' in collection';

  // filters
  const filterRow = document.getElementById('filterRow');
  filterRow.innerHTML = getSystems().map(sys =>
    `<button class="chip${sys === state.filterSystem ? ' active' : ''}" onclick="setFilter('${sys}')">${sys}</button>`
  ).join('');

  const books = getFilteredBooks();
  const list = document.getElementById('bookList');

  if (books.length === 0) {
    list.innerHTML = `<div class="empty-state">
      <div class="empty-icon">📚</div>
      <h3>${state.books.length === 0 ? 'Your vault is empty' : 'No books match'}</h3>
      <p>${state.books.length === 0
        ? 'Tap the + button to add your first book.'
        : 'Try a different search or filter.'}</p>
    </div>`;
    return;
  }

  list.innerHTML = books.map(b => `
    <div class="book-card" onclick="showDetail('${b.id}')">
      <div class="book-spine" style="background:${b.color || '#3A2010'}">
        ${b.coverImg ? `<img src="${b.coverImg}" alt="${b.title}">` : `<span>${b.emoji || '📖'}</span>`}
        <span class="spine-abbr">${(b.system||'').slice(0,4).toUpperCase()}</span>
      </div>
      <div class="book-info">
        <div class="book-title">${b.title}</div>
        <div class="book-meta">${[b.system, b.edition, b.year].filter(Boolean).join(' • ')}</div>
        <div class="badge-row">
          <span class="badge badge-ed">${b.edition || 'Unknown'}</span>
          ${b.printing ? `<span class="badge badge-print">${b.printing}</span>` : ''}
          <span class="badge ${condClass(b.condition)}">${b.condition || 'Unknown'}</span>
        </div>
        <div class="price-row-mini">
          <span>Low <span class="pv price-low">${fmtMoney(b.priceLow)}</span></span>
          <span>Mid <span class="pv price-mid">${fmtMoney(b.priceMid)}</span></span>
          <span>High <span class="pv price-high">${fmtMoney(b.priceHigh)}</span></span>
        </div>
      </div>
    </div>
  `).join('');
}

function setFilter(sys) {
  state.filterSystem = sys;
  renderCollection();
}

function handleSearch(e) {
  state.searchQuery = e.target.value;
  renderCollection();
}

// ─────────────────────────────────────────────
//  DETAIL RENDER
// ─────────────────────────────────────────────
function renderDetail(book) {
  document.getElementById('detailTitle').textContent = book.title;

  document.getElementById('detailHero').innerHTML = `
    <div class="detail-cover" style="background:${book.color || '#3A2010'}">
      ${book.coverImg ? `<img src="${book.coverImg}" alt="${book.title}">` : `<span>${book.emoji || '📖'}</span>`}
    </div>
    <div class="detail-hero-info">
      <h3>${book.title}</h3>
      <p class="meta">${[book.publisher, book.edition, book.year].filter(Boolean).join(' • ')}</p>
      <div class="badge-row">
        <span class="badge badge-ed">${book.edition || 'Unknown'}</span>
        ${book.printing ? `<span class="badge badge-print">${book.printing}</span>` : ''}
        <span class="badge ${condClass(book.condition)}">${book.condition || 'Unknown'}</span>
      </div>
    </div>
  `;

  document.getElementById('detailPrices').innerHTML = `
    <div class="price-card-header">📊 Market prices · eBay sold listings</div>
    <div class="price-three">
      <div class="price-col low">
        <div class="plabel">Low</div>
        <div class="pval">${fmtMoney(book.priceLow)}</div>
        <div class="psub">floor</div>
      </div>
      <div class="price-col mid">
        <div class="plabel">Mid</div>
        <div class="pval">${fmtMoney(book.priceMid)}</div>
        <div class="psub">average</div>
      </div>
      <div class="price-col high">
        <div class="plabel">High</div>
        <div class="pval">${fmtMoney(book.priceHigh)}</div>
        <div class="psub">peak</div>
      </div>
    </div>
    <div class="price-note">Estimates based on recent eBay sold listings for this edition and condition. Actual sale price varies with printing, completeness, and buyer demand. Updated ${book.priceUpdated || 'recently'}.</div>
  `;

  // Printing guide — exact match then fuzzy
  const titleKey = book.title.toLowerCase().replace(/[^a-z\s']/g, '').trim();
  let guide = PRINT_GUIDES[titleKey];
  if (!guide) {
    const keys = Object.keys(PRINT_GUIDES).filter(k => !k.startsWith('_'));
    const matched = keys.find(k => titleKey.includes(k) || k.includes(titleKey));
    if (matched) guide = PRINT_GUIDES[matched];
  }
  if (!guide && (book.publisher||'').toUpperCase().includes('TSR')) {
    guide = PRINT_GUIDES['_general_tsr'];
  }
  const printHtml = guide ? `
    <div class="print-card">
      <div class="print-card-header">🔍 How to identify the printing</div>
      ${guide.tips.map((tip, i) => `
        <div class="print-tip">
          <div class="print-tip-num">${i + 1}</div>
          <div class="print-tip-text"><strong>${tip.title}:</strong> ${tip.text}</div>
        </div>
      `).join('')}
    </div>
  ` : `
    <div class="print-card">
      <div class="print-card-header">🔍 Printing identification</div>
      <div class="print-tip">
        <div class="print-tip-num">📌</div>
        <div class="print-tip-text">
          <strong>General tips:</strong> Check the copyright page for a number line (the lowest digit = printing number), look for cover price differences between printings, and check whether an ISBN is present — many 1st printings predate ISBN assignment.
        </div>
      </div>
      <div class="print-tip">
        <div class="print-tip-num">📌</div>
        <div class="print-tip-text">
          <strong>Resources:</strong> The Acaeum (acaeum.com) is the definitive reference for identifying TSR D&D printings. For Chaosium titles, the DTRPG product listings often note printing differences.
        </div>
      </div>
    </div>
  `;

  const notesHtml = book.notes ? `
    <div class="notes-card">
      <div class="notes-card-header">📝 Your notes</div>
      <div class="notes-text">${book.notes}</div>
    </div>
  ` : '';

  document.getElementById('detailExtra').innerHTML = printHtml + notesHtml;
}

// ─────────────────────────────────────────────
//  STATS RENDER
// ─────────────────────────────────────────────
function renderStats() {
  const books = state.books;
  const totalMid = books.reduce((a, b) => a + (Number(b.priceMid) || 0), 0);
  const firstPrints = books.filter(b => b.printing && b.printing.toLowerCase().includes('1st')).length;

  const sysCounts = {};
  books.forEach(b => { sysCounts[b.system || 'Unknown'] = (sysCounts[b.system || 'Unknown'] || 0) + 1; });
  const sysArr = Object.entries(sysCounts).sort((a, b) => b[1] - a[1]);
  const maxCount = sysArr.length ? sysArr[0][1] : 1;

  document.getElementById('statTiles').innerHTML = `
    <div class="stat-tile"><div class="sn">${books.length}</div><div class="sl">Total books</div></div>
    <div class="stat-tile"><div class="sn">${Object.keys(sysCounts).length}</div><div class="sl">Game systems</div></div>
    <div class="stat-tile"><div class="sn green">$${totalMid.toLocaleString()}</div><div class="sl">Est. mid value</div></div>
    <div class="stat-tile"><div class="sn">${firstPrints}</div><div class="sl">1st printings</div></div>
  `;

  document.getElementById('statBars').innerHTML = sysArr.map(([sys, count]) => `
    <div class="bar-group">
      <div class="bar-label"><span>${sys}</span><span>${count} book${count !== 1 ? 's' : ''}</span></div>
      <div class="bar-track"><div class="bar-fill" style="width:${Math.round(count / maxCount * 100)}%"></div></div>
    </div>
  `).join('');
}

// ─────────────────────────────────────────────
//  WISHLIST RENDER
// ─────────────────────────────────────────────
function renderWishlist() {
  const list = document.getElementById('wishList');
  if (state.wishlist.length === 0) {
    list.innerHTML = `<div class="empty-state">
      <div class="empty-icon">💛</div>
      <h3>Wishlist is empty</h3>
      <p>Books you're hunting for go here. Tap + to add one.</p>
    </div>`;
    return;
  }
  list.innerHTML = state.wishlist.map(w => `
    <div class="wish-card">
      <div class="wish-icon">${w.emoji || '📚'}</div>
      <div class="wish-info">
        <h4>${w.title}</h4>
        <p>${w.system || ''}</p>
      </div>
      <button class="wish-del" onclick="removeWish('${w.id}')" aria-label="Remove">✕</button>
    </div>
  `).join('');
}

function removeWish(id) {
  state.wishlist = state.wishlist.filter(w => w.id !== id);
  saveWishlist();
  renderWishlist();
}

function addWishItem() {
  const title = prompt('Book title to add to wishlist:');
  if (!title || !title.trim()) return;
  const system = prompt('Game system (e.g. D&D, Call of Cthulhu):') || '';
  state.wishlist.push({ id: uid(), title: title.trim(), system: system.trim(), emoji: systemEmoji(system) });
  saveWishlist();
  renderWishlist();
  showToast('Added to wishlist');
}

// ─────────────────────────────────────────────
//  CAMERA
// ─────────────────────────────────────────────
let videoStream = null;

async function startCamera() {
  const video = document.getElementById('cameraVideo');
  const placeholder = document.getElementById('cameraPlaceholder');
  try {
    videoStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment', width: { ideal: 1920 }, height: { ideal: 1080 } }
    });
    video.srcObject = videoStream;
    video.style.display = 'block';
    if (placeholder) placeholder.style.display = 'none';
  } catch(e) {
    if (placeholder) {
      placeholder.style.display = 'flex';
      placeholder.innerHTML = `<div style="text-align:center;color:#A07840;padding:40px">
        <div style="font-size:40px;margin-bottom:12px">📷</div>
        <p style="font-size:14px;line-height:1.6">Camera access denied.<br>Use "Choose photo" below instead.</p>
      </div>`;
    }
  }
}

function stopCamera() {
  if (videoStream) {
    videoStream.getTracks().forEach(t => t.stop());
    videoStream = null;
  }
  const video = document.getElementById('cameraVideo');
  if (video) { video.srcObject = null; video.style.display = 'none'; }
}

function capturePhoto() {
  const video = document.getElementById('cameraVideo');
  let imageData = null;
  if (video && video.srcObject) {
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth || 1280;
    canvas.height = video.videoHeight || 720;
    canvas.getContext('2d').drawImage(video, 0, 0);
    imageData = canvas.toDataURL('image/jpeg', 0.85);
  }
  if (!imageData) { showToast('No camera image captured'); return; }
  stopCamera();
  analyzeBookImage(imageData);
}

function choosePhoto() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.onchange = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      stopCamera();
      analyzeBookImage(ev.target.result);
    };
    reader.readAsDataURL(file);
  };
  input.click();
}

// ─────────────────────────────────────────────
//  AI BOOK IDENTIFICATION via Claude API
// ─────────────────────────────────────────────
async function analyzeBookImage(imageDataUrl) {
  // Show scanning overlay on camera view first, then switch to form view with spinner
  const overlay = document.getElementById('scanningOverlay');
  overlay.classList.add('show');
  overlay.querySelector('p').textContent = 'Identifying book…';

  const base64 = imageDataUrl.split(',')[1];
  const mediaType = imageDataUrl.startsWith('data:image/png') ? 'image/png' : 'image/jpeg';

  const prompt = `You are an expert on tabletop RPG books, especially collectible editions. Analyze this book cover image and identify the book.

Return ONLY a JSON object with these exact fields, no markdown, no explanation:
{
  "title": "exact book title",
  "system": "game system (e.g. D&D, Call of Cthulhu, Pathfinder, Warhammer Fantasy Roleplay, Shadowrun, Traveller, etc)",
  "publisher": "publisher name (e.g. TSR, Chaosium, Paizo, Games Workshop, FASA, etc)",
  "edition": "edition (e.g. 1st Edition, 2nd Edition, 3.5 Edition, 5th Edition, etc)",
  "printing": "printing if determinable from cover (e.g. 1st Printing, or leave empty string if unknown)",
  "year": "publication year as 4-digit string, or empty string if unknown",
  "condition": "Very Good",
  "priceLow": estimated low eBay sold price in USD as a number (no dollar sign),
  "priceMid": estimated average eBay sold price in USD as a number,
  "priceHigh": estimated high eBay sold price in USD as a number,
  "notes": "any notable observations about this specific book or edition that would help a collector"
}

For prices, use your knowledge of the collectible RPG market. Consider the edition, publisher, and age. A 1st edition 1st printing AD&D book from TSR is worth far more than a later printing. Be realistic — base on actual eBay sold listings you know about. If you cannot identify the book at all, set title to empty string and all prices to 0.`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1000,
        messages: [{
          role: 'user',
          content: [
            {
              type: 'image',
              source: { type: 'base64', media_type: mediaType, data: base64 }
            },
            { type: 'text', text: prompt }
          ]
        }]
      })
    });

    const data = await response.json();
    overlay.classList.remove('show');

    if (!response.ok) {
      showToast('AI scan failed — fill in manually');
      showScanResult({ _scanned: true, coverImg: imageDataUrl });
      return;
    }

    const text = data.content.map(c => c.text || '').join('').trim();
    let parsed = {};
    try {
      const clean = text.replace(/```json|```/g, '').trim();
      parsed = JSON.parse(clean);
    } catch(e) {
      showToast('Could not parse result — please fill in manually');
      showScanResult({ _scanned: true, coverImg: imageDataUrl });
      return;
    }

    if (!parsed.title) {
      showToast('Book not recognized — please fill in manually');
      showScanResult({ _scanned: true, coverImg: imageDataUrl });
      return;
    }

    parsed.coverImg = imageDataUrl;
    parsed._scanned = true;
    parsed.priceUpdated = new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    showScanResult(parsed);
    showToast('Book identified!');

  } catch(err) {
    overlay.classList.remove('show');
    showToast('Network error — fill in manually');
    showScanResult({ _scanned: true, coverImg: imageDataUrl });
  }
}

// ─────────────────────────────────────────────
//  DUPLICATE DETECTION
// ─────────────────────────────────────────────
function findDuplicates(title) {
  if (!title) return [];
  const needle = title.toLowerCase().trim();
  return state.books.filter(b => {
    const hay = (b.title || '').toLowerCase().trim();
    // Exact match or one contains the other (handles subtitle variations)
    return hay === needle || hay.includes(needle) || needle.includes(hay);
  });
}

function showScanResult(prefill) {
  showForm(prefill);
  if (prefill._scanned) {
    const banner = document.getElementById('scanBanner');
    if (!banner) return;
    banner.style.display = 'block';

    const identified = prefill.title && prefill.title.length > 0;

    // Check for duplicates in existing collection
    const dupes = identified ? findDuplicates(prefill.title) : [];

    const dupeWarning = dupes.length > 0 ? `
      <div style="background:#8B1A1A22;border:1px solid #8B1A1A66;border-radius:8px;padding:10px 12px;margin-bottom:10px;display:flex;gap:10px;align-items:flex-start">
        <span style="font-size:18px;flex-shrink:0">⚠️</span>
        <div>
          <div style="font-size:12px;font-weight:600;color:#E07070;margin-bottom:4px">Already in your collection</div>
          ${dupes.map(d => `
            <div style="font-size:12px;color:var(--text2);line-height:1.5">
              ${d.title}${d.edition ? ' · ' + d.edition : ''}${d.printing ? ' · ' + d.printing : ''} · <span style="color:${d.condition === 'Good' || d.condition === 'Fair' ? 'var(--amber-light)' : 'var(--green-light)'}">${d.condition}</span>
            </div>
          `).join('')}
          <div style="font-size:11px;color:var(--text3);margin-top:4px">You can still add another copy below.</div>
        </div>
      </div>` : '';

    const fields = identified ? [
      prefill.title && `<div class="scan-field"><span class="sf-label">Title</span><span class="sf-val">${prefill.title}</span></div>`,
      prefill.system && `<div class="scan-field"><span class="sf-label">System</span><span class="sf-val">${prefill.system}</span></div>`,
      prefill.edition && `<div class="scan-field"><span class="sf-label">Edition</span><span class="sf-val">${prefill.edition}</span></div>`,
      prefill.printing && `<div class="scan-field"><span class="sf-label">Printing</span><span class="sf-val">${prefill.printing}</span></div>`,
      prefill.priceMid && `<div class="scan-field"><span class="sf-label">Est. mid price</span><span class="sf-val" style="color:var(--amber-light)">${fmtMoney(prefill.priceMid)}</span></div>`,
    ].filter(Boolean).join('') : '';

    banner.innerHTML = `
      ${dupeWarning}
      <div class="scan-result" style="display:flex;gap:12px;align-items:flex-start">
        ${prefill.coverImg ? `<img src="${prefill.coverImg}" style="width:56px;height:72px;object-fit:cover;border-radius:4px;flex-shrink:0">` : ''}
        <div style="flex:1">
          <div class="scan-result-header">${identified ? '✓ Book identified — review and save' : '⚠ Not recognized — please fill in below'}</div>
          ${fields}
        </div>
      </div>`;
  }
}

// Also check for duplicates when adding manually — runs on title field blur
function checkDuplicateManual() {
  const title = document.getElementById('fTitle').value.trim();
  const editId = document.getElementById('formView').dataset.editId;
  if (!title || editId) return; // skip on edits

  const dupes = findDuplicates(title);
  const existing = document.getElementById('manualDupeWarning');
  if (existing) existing.remove();

  if (dupes.length > 0) {
    const warning = document.createElement('div');
    warning.id = 'manualDupeWarning';
    warning.style.cssText = 'background:#8B1A1A22;border:1px solid #8B1A1A66;border-radius:8px;padding:10px 12px;margin-top:-8px;margin-bottom:14px;display:flex;gap:10px;align-items:flex-start';
    warning.innerHTML = `
      <span style="font-size:18px;flex-shrink:0">⚠️</span>
      <div>
        <div style="font-size:12px;font-weight:600;color:#E07070;margin-bottom:4px">Already in your collection</div>
        ${dupes.map(d => `<div style="font-size:12px;color:var(--text2);line-height:1.5">${d.title}${d.edition ? ' · ' + d.edition : ''}${d.printing ? ' · ' + d.printing : ''} · <span style="color:var(--amber-light)">${d.condition}</span></div>`).join('')}
        <div style="font-size:11px;color:var(--text3);margin-top:4px">You can still save this as a second copy.</div>
      </div>`;
    const titleGroup = document.getElementById('fTitle').closest('.form-group');
    titleGroup.insertAdjacentElement('afterend', warning);
  }
}

// ─────────────────────────────────────────────
//  FORM
// ─────────────────────────────────────────────
const SPINE_COLORS = ['#6B1A1A','#1A3A5C','#4A2C0A','#2A1A3A','#0A2A1A','#5A3A0A','#1A4A1A','#3A1A4A'];
const SPINE_EMOJIS = ['📖','📕','📗','📘','📙','📒','📓','📔'];

function populateForm(prefill) {
  document.getElementById('fTitle').value = prefill.title || '';
  document.getElementById('fSystem').value = prefill.system || '';
  document.getElementById('fPublisher').value = prefill.publisher || '';
  document.getElementById('fEdition').value = prefill.edition || '';
  document.getElementById('fPrinting').value = prefill.printing || '';
  document.getElementById('fYear').value = prefill.year || '';
  document.getElementById('fCondition').value = prefill.condition || 'Very Good';
  document.getElementById('fNotes').value = prefill.notes || '';
  document.getElementById('fPriceLow').value = prefill.priceLow || '';
  document.getElementById('fPriceMid').value = prefill.priceMid || '';
  document.getElementById('fPriceHigh').value = prefill.priceHigh || '';

  // Store cover img if from scan
  document.getElementById('formView').dataset.coverImg = prefill.coverImg || '';
  document.getElementById('formView').dataset.editId = prefill.id || '';

  const banner = document.getElementById('scanBanner');
  if (banner) banner.style.display = 'none';

  // Clear any leftover duplicate warning
  const oldWarning = document.getElementById('manualDupeWarning');
  if (oldWarning) oldWarning.remove();
}

function submitForm() {
  const title = document.getElementById('fTitle').value.trim();
  if (!title) { showToast('Please enter a title'); return; }

  const formView = document.getElementById('formView');
  const editId = formView.dataset.editId;
  const colorIdx = Math.floor(Math.random() * SPINE_COLORS.length);

  const book = {
    id: editId || uid(),
    title,
    system: document.getElementById('fSystem').value.trim(),
    publisher: document.getElementById('fPublisher').value.trim(),
    edition: document.getElementById('fEdition').value.trim(),
    printing: document.getElementById('fPrinting').value.trim(),
    year: document.getElementById('fYear').value.trim(),
    condition: document.getElementById('fCondition').value,
    notes: document.getElementById('fNotes').value.trim(),
    priceLow: parseFloat(document.getElementById('fPriceLow').value) || null,
    priceMid: parseFloat(document.getElementById('fPriceMid').value) || null,
    priceHigh: parseFloat(document.getElementById('fPriceHigh').value) || null,
    priceUpdated: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
    emoji: SPINE_EMOJIS[colorIdx],
    color: SPINE_COLORS[colorIdx],
    coverImg: formView.dataset.coverImg || null
  };

  if (editId) {
    const idx = state.books.findIndex(b => b.id === editId);
    if (idx >= 0) state.books[idx] = book;
  } else {
    state.books.unshift(book);
  }
  saveBooks();
  showToast(editId ? 'Book updated' : 'Book added to vault');
  goBack();
}

function deleteBook(id) {
  if (!confirm('Remove this book from your vault?')) return;
  state.books = state.books.filter(b => b.id !== id);
  saveBooks();
  showToast('Removed from vault');
  goBack();
}

function editBook(id) {
  const book = state.books.find(b => b.id === id);
  if (book) showForm(book);
}

// ─────────────────────────────────────────────
//  INIT
// ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  showScreen('collection');

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
});
