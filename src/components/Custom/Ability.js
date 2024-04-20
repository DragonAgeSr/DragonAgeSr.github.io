import React from 'react';

var Abilities = {
    "DAO": {
            
    },  
    "DA2": {
        "cone of cold": {
            name: "Cone of Cold",
            img: require("@site/static/img/DA2/ability/mage_coneofcold.png").default,
            link: "https://dragonage.fandom.com/wiki/Cone_of_Cold_(Dragon_Age_II)"
        },
        "rush": {
            name: "Rush",
            img: require("@site/static/img/DA2/ability/rog_trip.png").default,
            link: "https://dragonage.fandom.com/wiki/Rush"
        },
        "backstab": {
            name: "Backstab",
            img: require("@site/static/img/DA2/ability/rog_reverseattack.png").default,
            link: "https://dragonage.fandom.com/wiki/Backstab"
        },
        "explosive strike": {
            name: "Explosive Strike",
            img: require("@site/static/img/DA2/ability/rog_combobreaker.png").default,
            link: "https://dragonage.fandom.com/wiki/Explosive_Strike"
        },
        "fireball": {
            name: "Fireball",
            img: require("@site/static/img/DA2/ability/mage_fireball.png").default,
            link: "https://dragonage.fandom.com/wiki/Fireball_(Dragon_Age_II)"
        },
        "winters grasp": {
            name: "Winter's Grasp",
            img: require("@site/static/img/DA2/ability/mage_wintersgrasp.png").default,
            link: "https://dragonage.fandom.com/wiki/Winter%27s_Grasp_(Dragon_Age_II)"
        },
        "bolster": {
            name: "Bolster",
            img: require("@site/static/img/DA2/ability/war_buildup.png").default,
            link: "https://dragonage.fandom.com/wiki/Bolster"
        },
        "heal": {
            name: "Heal",
            img: require("@site/static/img/DA2/ability/mage_heal.png").default,
            link: "https://dragonage.fandom.com/wiki/Heal_(Dragon_Age_II)"
        },
        "haste": {
            name: "Haste",
            img: require("@site/static/img/DA2/ability/mage_haste.png").default,
            link: "https://dragonage.fandom.com/wiki/Haste_(Dragon_Age_II)"
        },
        "cleave": {
            name: "Cleave",
            img: require("@site/static/img/DA2/ability/war_offensedmgupgrade.png").default,
            link: "https://dragonage.fandom.com/wiki/Cleave"
        },
        "second wind": {
            name: "Second Wind",
            img: require("@site/static/img/DA2/ability/war_secondwind.png").default,
            link: "https://dragonage.fandom.com/wiki/Second_Wind_(Dragon_Age_II)"
        }
    },  
    "DAI": {
        "mighty blow": {
            name: "Mighty Blow",
            img: require("@site/static/img/DAI/ability/2H_MightyBlow.png").default,
            link: "https://dragonage.fandom.com/wiki/Mighty_Blow_(Inquisition)"
        },
        "explosive shot": {
            name: "Explosive Shot",
            img: require("@site/static/img/DAI/ability/Archery_ExplosiveShot.png").default,
            link: "https://dragonage.fandom.com/wiki/Explosive_Shot"
        },
        "full draw": {
            name: "Full Draw",
            img: require("@site/static/img/DAI/ability/Archery_FullDraw.png").default,
            link: "https://dragonage.fandom.com/wiki/Full_Draw"
        },
        "leaping shot": {
            name: "Leaping Shot",
            img: require("@site/static/img/DAI/ability/Archery_LeapingShot.png").default,
            link: "https://dragonage.fandom.com/wiki/Leaping_Shot"
        },
        "long shot": {
            name: "Long Shot",
            img: require("@site/static/img/DAI/ability/Archery_LongShot.png").default,
            link: "https://dragonage.fandom.com/wiki/Long_Shot"
        },
        "fallback plan": {
            name: "Fallback Plan",
            img: require("@site/static/img/DAI/ability/Artificer_FallbackPlan.png").default,
            link: "https://dragonage.fandom.com/wiki/Fallback_Plan"
        },
        "hail of arrows": {
            name: "Fallback Plan",
            img: require("@site/static/img/DAI/ability/Artificer_HailOfArrows.png").default,
            link: "https://dragonage.fandom.com/wiki/Hail_of_Arrows_(Inquisition)"
        },
        "mark of the rift": {
            name: "Mark of the Rift",
            img: require("@site/static/img/DAI/ability/Inq_MarkOfTheRift.png").default,
            link: "https://dragonage.fandom.com/wiki/Mark_of_the_Rift"
        },
        "hook and tackle": {
            name: "Hook and Tackle",
            img: require("@site/static/img/DAI/ability/Sab_HookAndTackle.png").default,
            link: "https://dragonage.fandom.com/wiki/Hook_and_Tackle"
        },
        "evade": {
            name: "Evade",
            img: require("@site/static/img/DAI/ability/Sub_Evade.png").default,
            link: "https://dragonage.fandom.com/wiki/Evade_(Inquisition)"
        },
        "stealth": {
            name: "Stealth",
            img: require("@site/static/img/DAI/ability/Sub_Stealth.png").default,
            link: "https://dragonage.fandom.com/wiki/Stealth_(Inquisition)"
        },
        "charging bull": {
            name: "Charging Bull",
            img: require("@site/static/img/DAI/ability/Van_ChargingBull.png").default,
            link: "https://dragonage.fandom.com/wiki/Charging_Bull"
        },
        "war cry": {
            name: "War Cry",
            img: require("@site/static/img/DAI/ability/Van_WarCry.png").default,
            link: "https://dragonage.fandom.com/wiki/War_Cry_(Inquisition)"
        }
    },  
    "DAD": {
             
    }     
 
}

export default function Ability({game = "", name = ""}) {
    var abil = Abilities[game.toUpperCase()][name.toLowerCase()];
    if (abil == null) return null;

    return (
      <span style={{display: 'inline-flex', marginTop: '-20px', alignItems: 'baseline', }}>
        <img style={{maxHeight: '2rem', transform: 'translateY(10px)'}} src={abil.img} loading="lazy" decoding="async"></img>
        &nbsp;<a href={abil.link} style={{color: 'var(--ability-color)'}}>{abil.name}</a>
      </span>
    );
  }