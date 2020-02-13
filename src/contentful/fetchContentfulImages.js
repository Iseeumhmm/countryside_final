import * as Config from './config'

const Contentful = require('contentful')

const client = Contentful.createClient({
  space: Config.NEW_SPACE_ID,
  accessToken: Config.NEW_CDAPI_ACCESS_TOKEN,
})

export default (async function getPosts () {
  var homePageItems = {
    items: []
  }
  var ourStoryItems = {
    items: []
  }
  var singleItems = {
    pools: [],
    stonework: [],
    retainingwalls: [],
    structures: [],
    woodworking: []
  }
  var projectItems = {
    pools: [],
    stonework: [],
    retainingwalls: [],
    structures: [],
    woodworking: []
  }

  await client.getEntries()
  .then(function (entries) {
    entries.items.forEach(function (entry) {
      if(entry) {
        let item = {
          type: entry.sys.contentType.sys.id,
          entry: entry.fields
        }
        switch (item.type) {
          case "homePageBackgroundSlide":
            homePageItems.items.push(item.entry.fullSize1920X1280.fields.file.url)
            break;
          case "ourStoryBios":
            ourStoryItems.items.push(item.entry)
            break;
          // Per Project  
          case "galleryImagesPoolProjects":
            projectItems.pools.push(item.entry)
            break;
          case "galleryImagesProjectsStonework_":
            projectItems.stonework.push(item.entry)
            break;
          case "galleryImagesProjectsRetainingWalls_":
            projectItems.retainingwalls.push(item.entry)
            break;
          case "galleryImagesProjectsStructures_":
            projectItems.structures.push(item.entry)
            break;
          case "galleryImagesProjectsWoodworking_":
            projectItems.woodworking.push(item.entry)
            break;

          // Single Images
          case "galleryImagesPools":
            singleItems.pools.push(item.entry)
            break;
          case "galleryImagesStonework":
            singleItems.stonework.push(item.entry)
            break;
          case "galleryImagesRetainingWalls":
            singleItems.retainingwalls.push(item.entry)
            break;
          case "galleryImagesStructures":
            singleItems.structures.push(item.entry)
            break;
          case "galleryImagesWoodworking":
            singleItems.woodworking.push(item.entry)
            break;
          default: 
            console.log("Not found in switch case: ", item.type)
        }
      }
    })
  })
  const items = { 
    homePage: homePageItems, 
    ourStory: ourStoryItems, 
    singles: singleItems, 
    drilldown: projectItems
  }
  return items
})