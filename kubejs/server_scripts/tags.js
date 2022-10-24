// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent('recipes', event => {
	// Change recipes here
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
	event.remove('curios:belt', 'artifacts:cloud_in_a_bottle')
	event.remove('curios:belt', 'artifacts:antidote_vessel')
	event.remove('curios:belt', 'artifacts:crystal_heart')
	event.remove('curios:belt', 'artifacts:universal_attractor')
	event.remove('curios:belt', 'artifacts:obsidian_skull')
})