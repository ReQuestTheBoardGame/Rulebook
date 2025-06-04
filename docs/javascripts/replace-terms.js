document.addEventListener("DOMContentLoaded", function () {
    const BASE_URL = "/Rulebook";

    const baseImages = {
        // Icons
        "bite": `${BASE_URL}/images/icons/bite.png`,
        "boot": `${BASE_URL}/images/icons/boot.png`,
        "boss": `${BASE_URL}/images/icons/boss.png`,
        "channel": `${BASE_URL}/images/icons/channel.png`,
        "death touch": `${BASE_URL}/images/icons/death touch.png`,
        "filler": `${BASE_URL}/images/icons/filler.png`,
        "gold": `${BASE_URL}/images/icons/gold.png`,
        "heal": `${BASE_URL}/images/icons/heal.png`,
        "health": `${BASE_URL}/images/icons/health.png`,
        "ingredient": `${BASE_URL}/images/icons/ingredient.png`,
        "key": `${BASE_URL}/images/icons/key.png`,
        "magic": `${BASE_URL}/images/icons/magic.png`,
        "minion": `${BASE_URL}/images/icons/minion.png`,
        "pick pocket": `${BASE_URL}/images/icons/pick pocket.png`,
        "poison": `${BASE_URL}/images/icons/poison.png`,
        "shield": `${BASE_URL}/images/icons/shield.png`,
        "sword": `${BASE_URL}/images/icons/sword.png`,
        "wall": `${BASE_URL}/images/icons/wall.png`,
        "wild": `${BASE_URL}/images/icons/wild.png`,
        "wings": `${BASE_URL}/images/icons/wings.png`,
        "wolf pack": `${BASE_URL}/images/icons/wolf pack.png`,
        "life drain": `${BASE_URL}/images/icons/life drain.png`,

        // Equipment
        "alchemist satchel": `${BASE_URL}/images/equipment/alchemist satchel.png`,
        "alchemist's spectacles": `${BASE_URL}/images/equipment/alchemist's spectacles.png`,
        "alembic": `${BASE_URL}/images/equipment/alembic.png`,
        "battering ram": `${BASE_URL}/images/equipment/battering ram.png`,
        "cloak of beckoning": `${BASE_URL}/images/equipment/cloak of beckoning.png`,
        "fencing gloves": `${BASE_URL}/images/equipment/fencing gloves.png`,
        "great sword": `${BASE_URL}/images/equipment/great sword.png`,
        "healing scroll": `${BASE_URL}/images/equipment/healing scroll.png`,
        "knights armor": `${BASE_URL}/images/equipment/knights armor.png`,
        "lock pick": `${BASE_URL}/images/equipment/lock pick.png`,
        "quarter staff": `${BASE_URL}/images/equipment/quarter staff.png`,
        "robe of healing": `${BASE_URL}/images/equipment/robe of healing.png`,
        "scroll of offense": `${BASE_URL}/images/equipment/scroll of offense.png`,
        "slime rod": `${BASE_URL}/images/equipment/slime rod.png`,
        "sneakers": `${BASE_URL}/images/equipment/sneakers.png`,
        "thorn of aegis": `${BASE_URL}/images/equipment/thorn of aegis.png`,
        "throwing shield": `${BASE_URL}/images/equipment/throwing shield.png`,
        "tome of capacity": `${BASE_URL}/images/equipment/tome of capacity.png`,
        "twin blades": `${BASE_URL}/images/equipment/twin blades.png`,
        "ssword": `${BASE_URL}/images/equipment/ssword.png`,
        "dsword": `${BASE_URL}/images/equipment/dsword.png`,
        "sshield": `${BASE_URL}/images/equipment/sshield.png`,
        "dshield": `${BASE_URL}/images/equipment/dshield.png`,
        "smagic": `${BASE_URL}/images/equipment/smagic.png`,
        "dmagic": `${BASE_URL}/images/equipment/dmagic.png`,
        "sboot": `${BASE_URL}/images/equipment/sboot.png`,
        "dboot": `${BASE_URL}/images/equipment/dboot.png`,

        // Tiles
        "bosstile": `${BASE_URL}/images/tiles/bosstile.png`,
        "ckey": `${BASE_URL}/images/tiles/ckey.png`,
        "clockedchest": `${BASE_URL}/images/tiles/clockedchest.png`,
        "ctombstone": `${BASE_URL}/images/tiles/ctombstone.png`,
        "ctrapdoor": `${BASE_URL}/images/tiles/ctrapdoor.png`,
        "cvase": `${BASE_URL}/images/tiles/cvase.png`,
        "mtilechest": `${BASE_URL}/images/tiles/mtilechest.png`,
        "mtilevase": `${BASE_URL}/images/tiles/mtilevase.png`,
        "rblacksmith": `${BASE_URL}/images/tiles/rblacksmith.png`,
        "rbossroom": `${BASE_URL}/images/tiles/rbossroom.png`,
        "rdungeondealer": `${BASE_URL}/images/tiles/rdungeondealer.png`,
        "rfishingpond": `${BASE_URL}/images/tiles/rfishingpond.png`,
        "rhealingshrine": `${BASE_URL}/images/tiles/rhealingshrine.png`,
        "rloot": `${BASE_URL}/images/tiles/rloot.png`,
        "rmagicmirror": `${BASE_URL}/images/tiles/rmagicmirror.png`,
        "rminion": `${BASE_URL}/images/tiles/rminion.png`,
        "rportal": `${BASE_URL}/images/tiles/rportal.png`,
        "rpotionsroom": `${BASE_URL}/images/tiles/rpotionsroom.png`,
        "slimeportal": `${BASE_URL}/images/tiles/slimeportal.png`,
        "tile": `${BASE_URL}/images/tiles/tile.png`,
        "tilekey": `${BASE_URL}/images/tiles/tilekey.png`,
        "tilelootroom": `${BASE_URL}/images/tiles/tilelootroom.png`,

        // Players
        "alchemist": `${BASE_URL}/images/players/alchemist.png`,
        "barbarian": `${BASE_URL}/images/players/barbarian.png`,
        "bard": `${BASE_URL}/images/players/bard.png`,
        "cleric": `${BASE_URL}/images/players/cleric.png`,
        "knight": `${BASE_URL}/images/players/knight.png`,
        "monk": `${BASE_URL}/images/players/monk.png`,
        "rogue": `${BASE_URL}/images/players/rogue.png`,
        "samauri": `${BASE_URL}/images/players/samauri.png`,
        "wizard": `${BASE_URL}/images/players/wizard.png`,

        // Potions
        "bottledluck": `${BASE_URL}/images/potions/bottledluck.png`,
        "cbpotion": `${BASE_URL}/images/potions/cbpotion.png`,
        "fireinabottle": `${BASE_URL}/images/potions/fireinabottle.png`,
        "foresight": `${BASE_URL}/images/potions/foresight.png`,
        "healingpotion": `${BASE_URL}/images/potions/healingpotion.png`,
        "manapotion": `${BASE_URL}/images/potions/manapotion.png`,
        "stamina": `${BASE_URL}/images/potions/stamina.png`,

        // Ingredients
        "bonemeal": `${BASE_URL}/images/ingredients/bonemeal.png`,
        "cbingredient": `${BASE_URL}/images/ingredients/cbingredient.png`,
        "dungeonroot": `${BASE_URL}/images/ingredients/dungeonroot.png`,
        "embers": `${BASE_URL}/images/ingredients/embers.png`,
        "fungus": `${BASE_URL}/images/ingredients/fungus.png`,
        "luckyclover": `${BASE_URL}/images/ingredients/luckyclover.png`,
        "manaflower": `${BASE_URL}/images/ingredients/manaflower.png`,

        // Bosses - Big Slime
        "bbass": `${BASE_URL}/bosses/big-slime/bbass.png`,
        "brbigslime": `${BASE_URL}/bosses/big-slime/brbigslime.png`,
        "brlich": `${BASE_URL}/bosses/big-slime/brlich.png`,
        "cbigslime": `${BASE_URL}/bosses/big-slime/cbigslime.png`,
        "cbminion": `${BASE_URL}/bosses/big-slime/cbminion.png`,
        "ceilly": `${BASE_URL}/bosses/big-slime/ceilly.png`,
        "dripy": `${BASE_URL}/bosses/big-slime/dripy.png`,
        "redslime": `${BASE_URL}/bosses/big-slime/redslime.png`,
        "rocky": `${BASE_URL}/bosses/big-slime/rocky.png`,
        "slideys": `${BASE_URL}/bosses/big-slime/slideys.png`,
        "slime": `${BASE_URL}/bosses/big-slime/slime.png`,
        "spike": `${BASE_URL}/bosses/big-slime/spike.png`,
        "talls": `${BASE_URL}/bosses/big-slime/talls.png`,
        "wally": `${BASE_URL}/bosses/big-slime/wally.png`,

        // Bosses - Lich
        "abomination": `${BASE_URL}/bosses/lich/abomination.png`,
        "deathrider": `${BASE_URL}/bosses/lich/deathrider.png`,
        "clich": `${BASE_URL}/bosses/lich/clich.png`,
        "lichportaltile": `${BASE_URL}/bosses/lich/lichportaltile.png`,
        "shaman": `${BASE_URL}/bosses/lich/shaman.png`,
        "skeletonsoldier": `${BASE_URL}/bosses/lich/skeletonsoldier.png`,
        "wraith": `${BASE_URL}/bosses/lich/wraith.png`,

        // Lich Tracker
        "beckoning": `${BASE_URL}/bosses/lich/tracker/beckoning.png`,
        "greatrevival": `${BASE_URL}/bosses/lich/tracker/greatrevival.png`,
        "litchdrain": `${BASE_URL}/bosses/lich/tracker/litchdrain.png`,
        "reapersstride": `${BASE_URL}/bosses/lich/tracker/reapersstride.png`,
        "rip": `${BASE_URL}/bosses/lich/tracker/rip.png`,
        "trackerblank": `${BASE_URL}/bosses/lich/tracker/trackerblank.png`,
        "withering": `${BASE_URL}/bosses/lich/tracker/withering.png`,

        // Lich Event Deck
        "boneupheaval": `${BASE_URL}/bosses/lich/eventdeck/boneupheaval.png`,
        "cbeventdeck": `${BASE_URL}/bosses/lich/eventdeck/cbeventdeck.png`,
        "domain": `${BASE_URL}/bosses/lich/eventdeck/domain.png`,
        "edreapersstrike": `${BASE_URL}/bosses/lich/eventdeck/edreapersstrike.png`,
        "edshaman": `${BASE_URL}/bosses/lich/eventdeck/edshaman.png`,
        "gripofthegrave": `${BASE_URL}/bosses/lich/eventdeck/gripofthegrave.png`,
        "skeletonsurge": `${BASE_URL}/bosses/lich/eventdeck/skeletonsurge.png`
    };

    function replaceKeywordsWithImages(text) {
        const pattern = new RegExp(`(${Object.keys(baseImages).join("|")});(\\d+)?(?:;([\\w\\-/]+))?`, "gi");

        return text.replace(pattern, function (match, key, size, linkBase) {
            const cleanKey = key.toLowerCase();
            const src = baseImages[cleanKey];
            if (!src) return match;

            const imgTag = size
                ? `<img src="${src}" alt="${key}" style="max-width:${size}px; vertical-align:middle;">`
                : `<img src="${src}" alt="${key}" style="height:1em; vertical-align:middle;">`;

            if (linkBase) {
                return `<a href="${linkBase}.html">${imgTag}</a>`;
            } else if (src.includes("/icons/")) {
                return `<a href="${BASE_URL}/Icons.html#${cleanKey.replace(/\s+/g, "-")}">${imgTag}</a>`;
            } else {
                return imgTag;
            }
        });
    }

    function processContent() {
        document.querySelectorAll(".md-content").forEach(el => {
            el.innerHTML = replaceKeywordsWithImages(el.innerHTML);
        });
    }

    processContent();
    const observer = new MutationObserver(() => processContent());
    observer.observe(document.querySelector(".md-content"), {
        childList: true,
        subtree: true
    });
});
