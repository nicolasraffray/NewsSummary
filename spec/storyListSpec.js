(function testCreatesAStory(){
  var storyList = new StoryList
  storyList.addStory(headline = "hi", date = 2020/01/01, link = "www.test.com", image = "test.jpg", summary = "news test summary")
  assert.isTrue(storyList.getList()[0].getID() === 0 )
  assert.isTrue(storyList.getList()[0].getHeadline() === "hi" )
  assert.isTrue(storyList.getList()[0].getLink() === "www.test.com" )
  assert.isTrue(storyList.getList()[0].getImage() === "test.jpg")
  assert.isTrue(storyList.getList()[0].getSummary() === "news test summary")
  console.log('.')
})();

