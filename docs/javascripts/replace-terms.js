document.addEventListener("DOMContentLoaded", function () {
    const baseImages = {
        // Icons
        "bite": "/images/icons/bite.png",
        "boot": "/images/icons/boot.png",
        "boss": "/images/icons/boss.png",
        "channel": "/images/icons/channel.png",
        "death touch": "/images/icons/death touch.png",
        "filler": "/images/icons/filler.png",
        "gold": "/images/icons/gold.png",
        "heal": "/images/icons/heal.png",
        "health": "/images/icons/health.png",
        "ingredient": "/images/icons/ingredient.png",
        "key": "/images/icons/key.png",
        "magic": "/images/icons/magic.png",
        "minion": "/images/icons/minion.png",
        "pick pocket": "/images/icons/pick pocket.png",
        "poison": "/images/icons/poison.png",
        "shield": "/images/icons/shield.png",
        "sword": "/images/icons/sword.png",
        "wall": "/images/icons/wall.png",
        "wild": "/images/icons/wild.png",
        "wings": "/images/icons/wings.png",
        "wolf pack": "/images/icons/wolf pack.png",
        "life drain": "/images/icons/life drain.png",

        // Equipment
        "alchemist satchel": "/images/equipment/alchemist satchel.png",
        "alchemist's spectacles": "/images/equipment/alchemist's spectacles.png",
        "alembic": "/images/equipment/alembic.png",
        "battering ram": "/images/equipment/battering ram.png",
        "cloak of beckoning": "/images/equipment/cloak of beckoning.png",
        "fencing gloves": "/images/equipment/fencing gloves.png",
        "great sword": "/images/equipment/great sword.png",
        "healing scroll": "/images/equipment/healing scroll.png",
        "knights armor": "/images/equipment/knights armor.png",
        "lock pick": "/images/equipment/lock pick.png",
        "quarter staff": "/images/equipment/quarter staff.png",
        "robe of healing": "/images/equipment/robe of healing.png",
        "scroll of offense": "/images/equipment/scroll of offense.png",
        "slime rod": "/images/equipment/slime rod.png",
        "sneakers": "/images/equipment/sneakers.png",
        "thorn of aegis": "/images/equipment/thorn of aegis.png",
        "throwing shield": "/images/equipment/throwing shield.png",
        "tome of capacity": "/images/equipment/tome of capacity.png",
        "twin blades": "/images/equipment/twin blades.png",
        "ssword": "/images/equipment/ssword.png",
        "dsword": "/images/equipment/dsword.png",
        "sshield": "/images/equipment/sshield.png",
        "dshield": "/images/equipment/dshield.png",
        "smagic": "/images/equipment/smagic.png",
        "dmagic": "/images/equipment/dmagic.png",
        "sboot": "/images/equipment/sboot.png",
        "dboot": "/images/equipment/dboot.png",
        

         //tile
        "bosstile": "/images/tiles/bosstile.png",
        "ckey": "/images/tiles/ckey.png",
        "clockedchest": "/images/tiles/clockedchest.png",
        "ctombstone": "/images/tiles/ctombstone.png",
        "ctrapdoor": "/images/tiles/ctrapdoor.png",
        "cvase": "/images/tiles/cvase.png",
        "mtilechest": "/images/tiles/mtilechest.png",
        "mtilevase": "/images/tiles/mtilevase.png",
        "rblacksmith": "/images/tiles/rblacksmith.png",
        "rbossroom": "/images/tiles/rbossroom.png",
        "rdungeondealer": "/images/tiles/rdungeondealer.png",
        "rfishingpond": "/images/tiles/rfishingpond.png",
        "rhealingshrine": "/images/tiles/rhealingshrine.png",
        "rloot": "/images/tiles/rloot.png",
        "rmagicmirror": "/images/tiles/rmagicmirror.png",
        "rminion": "/images/tiles/rminion.png",
        "rportal": "/images/tiles/rportal.png",
        "rpotionsroom": "/images/tiles/rpotionsroom.png",
        "slimeportal": "/images/tiles/slimeportal.png",
        "tile": "/images/tiles/tile.png",
        "tilekey": "/images/tiles/tilekey.png",
        "tilelootroom": "/images/tiles/tilelootroom.png",

        //player
        "alchemist": "/images/players/alchemist.png",
        "barbarian": "/images/players/barbarian.png",
        "bard": "/images/players/bard.png",
        "cleric": "/images/players/cleric.png",
        "knight": "/images/players/knight.png",
        "monk": "/images/players/monk.png",
        "rogue": "/images/players/rogue.png",
        "samauri": "/images/players/samauri.png",
        "wizard": "/images/players/wizard.png",


        //potion
        "bottledluck": "/images/potions/bottledluck.png",
        "cbpotion": "/images/potions/cbpotion.png",
        "fireinabottle": "/images/potions/fireinabottle.png",
        "foresight": "/images/potions/foresight.png",
        "healingpotion": "/images/potions/healingpotion.png",
        "manapotion": "/images/potions/manapotion.png",
        "stamina": "/images/potions/stamina.png",

        //ingredients
        "bonemeal": "/images/ingredients/bonemeal.png",
        "cbingredient": "/images/ingredients/cbingredient.png",
        "dungeonroot": "/images/ingredients/dungeonroot.png",
        "embers": "/images/ingredients/embers.png",
        "fungus": "/images/ingredients/fungus.png",
        "luckyclover": "/images/ingredients/luckyclover.png",
        "manaflower": "/images/ingredients/manaflower.png",


        //bosses - big slime
        "bbass": "/bosses/big-slime/bbass.png",
        "brbigslime": "/bosses/big-slime/brbigslime.png",
        "brlich": "/bosses/big-slime/brlich.png",
        "cbigslime": "/bosses/big-slime/cbigslime.png",
        "cbminion": "/bosses/big-slime/cbminion.png",
        "ceilly": "/bosses/big-slime/ceilly.png",
        "dripy": "/bosses/big-slime/dripy.png",
        "redslime": "/bosses/big-slime/redslime.png",
        "rocky": "/bosses/big-slime/rocky.png",
        "slideys": "/bosses/big-slime/slideys.png",
        "slime": "/bosses/big-slime/slime.png",
        "spike": "/bosses/big-slime/spike.png",
        "talls": "/bosses/big-slime/talls.png",
        "wally": "/bosses/big-slime/wally.png",

        //bosses - lich
        "abomination": "/bosses/lich/abomination.png",
        "deathrider": "/bosses/lich/deathrider.png",
        "clich": "/bosses/lich/clich.png",
        "lichportaltile": "/bosses/lich/lichportaltile.png",
        "shaman": "/bosses/lich/shaman.png",
        "skeletonsoldier": "/bosses/lich/skeletonsoldier.png",
        "wraith": "/bosses/lich/wraith.png",

            //bosses - lich tracker
        "beckoning": "/bosses/lich/tracker/beckoning.png",
        "greatrevival": "/bosses/lich/tracker/greatrevival.png",
        "litchdrain": "/bosses/lich/tracker/litchdrain.png",
        "reapersstride": "/bosses/lich/tracker/reapersstride.png",
        "rip": "/bosses/lich/tracker/rip.png",
        "trackerblank": "/bosses/lich/tracker/trackerblank.png",
        "withering": "/bosses/lich/tracker/withering.png",

        //bosses - lich event deck
        "boneupheaval": "/bosses/lich/eventdeck/boneupheaval.png",
        "cbeventdeck": "/bosses/lich/eventdeck/cbeventdeck.png",
        "domain": "/bosses/lich/eventdeck/domain.png",
        "edreapersstrike": "/bosses/lich/eventdeck/edreapersstrike.png",
        "edshaman": "/bosses/lich/eventdeck/edshaman.png",
        "gripofthegrave": "/bosses/lich/eventdeck/gripofthegrave.png",
        "skeletonsurge": "/bosses/lich/eventdeck/skeletonsurge.png"



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

        // Custom link logic
        if (linkBase) {
            return `<a href="${linkBase}.html">${imgTag}</a>`;
        } else if (src.startsWith("/images/icons/")) {
            return `<a href="/Icons.html#${cleanKey.replace(/\s+/g, "-")}">${imgTag}</a>`;
        } else {
            return imgTag; // no link if not icon/equipment
        }
    });


}


    function processContent() {
        document.querySelectorAll(".md-content").forEach(el => {
            el.innerHTML = replaceKeywordsWithImages(el.innerHTML);
        });
    }

    // Initial load + SPA navigation
    processContent();
    const observer = new MutationObserver(() => processContent());
    observer.observe(document.querySelector(".md-content"), {
        childList: true,
        subtree: true
    });
});
