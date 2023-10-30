let tagsList = [
    // "minecraft:doors",
    // "minecraft:wooden_trapdoors",
    // "dramaticdoors:tall_wooden_doors",
    // "dramaticdoors:short_doors",
]

let itemsList = [
    // "create:iron_sheet",
    // "create:brass_sheet",
    // "create:copper_sheet",
    // "minecraft:enchanted_book",
    // "minecraft:potion",
    // "minecraft:lingering_potion",
    // "minecraft:splash_potion",
    // "minecraft:tipped_arrow",
    // "yttr:mercurial_potion",
    // "yttr:mercurial_splash_potion",
    // "supplementaries:bamboo_spikes",
    // "supplementaries:bamboo_spikes_tipped",
]

let typeList = [
    // 'minecraft:anvil',
    // 'minecraft:grindstone',
]

let modList = [

]

ServerEvents.tags('item', event => {
    tagsList.forEach(tag => {
        let items = event.get(tag).getObjectIds()
        items.forEach(item => {
            if (/^[a-z0-9]/.test(item))
                itemsList.push(item)
        })
    })

    itemsList.forEach(item => {
        //e.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })
})

ServerEvents.recipes(event => {
    itemsList.forEach(item => {
        //  event.remove({ input: item })
        event.remove({ output: item })
    })

    typeList.forEach(type => {
        event.remove({ type: type })
    })

    // modList.forEach(mod => {
    //     event.remove({ mod: mod })
    // })
})