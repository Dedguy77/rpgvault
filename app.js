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
