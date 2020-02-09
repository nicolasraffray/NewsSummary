(function testCreatesAStory(){
  var storyList = new StoryList
  storyList.addStory(headline = "hi", date = 2020/01/01, link = "www.test.com")
  assert.isTrue(storyList.getList()[0].getID() === 0 )
  assert.isTrue(storyList.getList()[0].getHeadline() === "hi" )
  assert.isTrue(storyList.getList()[0].getLink() === "www.test.com" )
  console.log('.')
})();

