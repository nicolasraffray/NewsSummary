(function testInsertHTMLStoryHeadline(){
  var storyList = new StoryList 
  storyList.addStory(headline = "hey", date = 2020-01-01, link = "www.test.com")
  var storyController = new StoryController(storyList)
  storyController.insertHeadlineHTML()
  assert.isTrue(document.getElementById('0').innerHTML.includes('hey'))
  console.log(".")
})();


