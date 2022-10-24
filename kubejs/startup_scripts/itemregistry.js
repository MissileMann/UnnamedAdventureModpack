let Vector3f = java("com.mojang.math.Vector3f");

onEvent('item.registry', event => {
    //event.create('rubber_sheet').displayName('Cured Rubber Sheet')
    //event.create('cobalt_dust').displayName('Cobalt Dust')
    //event.create('zinc_dust').displayName('Zinc Dust')
    //event.create('crushed_cobalt_ore').displayName('Crushed Cobalt Ore')
    //event.create('collectable_missilecard').displayName('Collectable - Missile`s card').rarity('epic').tooltip('One of the three rare cards you can only find very rarely in End Cities.')
    //event.create('collectable_shinycard').displayName('Collectable - Shiny`s card').rarity('epic').tooltip('One of the three rare cards you can only find very rarely in End Cities.')
    //event.create('collectable_pokelockercard').displayName('Collectable - Pokelocker`s card').rarity('epic').tooltip('One of the three rare cards you can only find very rarely in End Cities.')
    //event.create('thermal_mechanism').displayName('Thermal Mechanism')
    //event.create('ender_casing').displayName('Empty Ender Mechanism')
    //event.create('ender_mechanism').displayName('Ender Mechanism')
    
    event.create('goblin_tech','curios:trinket').rarity('epic').displayName('Ancient Goblin Technology') //Give the player 2 additional hearts (4 hitpoints) and 5% additional knockback resistance
        .tooltip(Text.of("Tech from an old Forgotten Goblin Empire.").green())
        .tooltip(Text.of('The body altering tech gives you bonus health and slight knockback resistance.').gold())
        .addAttribute("generic.max_health","afc61056-6da1-4765-a54b-760df0d0c211",4,"addition")
        .canAttributeApply((item, entity) => true)
        .addAttribute("generic.knockback_resistance","d78d2073-855d-48e0-a604-4c9444028791",0.05,"addition")
        .canAttributeApply((item, entity) => true)
        .onEquipped((stack,entity) => {})
        .onWornTick((stack,entity) => {})
        .onUnequipped((stack,entity) => {
            entity.attack(0)
        })
        .canEquip((stack,entity) => true)
        .slot("charm")

    event.create('waist_belt','curios:trinket').rarity('epic').displayName('Belt of Finite Space') //Gives the player an additional waist slot
        .tooltip("This belt gives you an additional waist slot.")
        .onEquipped((stack,entity) => {
            entity.runCommandSilent(
                'curios set waist @s 3'
            )
        })
        .onWornTick((stack,entity) => {})
        .onUnequipped((stack,entity) => {
            entity.runCommandSilent(
                'curios set waist @s 2'
            )
        })
        .canEquip((stack,entity) => true)
        .slot("belt")

    event.create('nausea_curio','curios:trinket').rarity('epic').displayName("Ancient Sailor's Band") //Gives the player immunity to nausea using the armor sets mod
        .tooltip(Text.of('The magical properties of this band makes you immune to nausea.').aqua())
        .onEquipped((stack,entity) => {})
        .onWornTick((stack,entity) => {})
        .onUnequipped((stack,entity) => {})
        .canEquip((stack,entity) => true)
        .slot("charm")

    event.create('weakness_curio','curios:trinket').rarity('epic').displayName("Wrought Bracer") //Gives the player immunity to weakness
        .tooltip(Text.of('The essence imbued into this bracer makes you immune to weakness.').gray())
        .onEquipped((stack,entity) => {})
        .onWornTick((stack,entity) => {})
        .onUnequipped((stack,entity) => {})
        .canEquip((stack,entity) => true)
        .slot("hands")

    event.create('slowness_curio','curios:trinket').rarity('epic').displayName("Arch-Illager's Ancient Solar Fragment") //Gives the player immunity to weakness
        .tooltip(Text.of('The solar energy emanating from this artifact makes you immune to coldness and slowness').gold())
        .onEquipped((stack,entity) => {})
        .onWornTick((stack,entity) => {})
        .onUnequipped((stack,entity) => {})
        .canEquip((stack,entity) => true)
        .slot("charm")
})