
(function testHTMLHeadlineAsString(){
  var storyList = new StoryList 
  storyList.addStory(headline = "hey", date = 2020/01/01, link = "www.test.com")
  var storyListView = new StoryListView(storyList)
  assert.isTrue(storyListView.headlineToHTML() === "<div class='story'><a id=0 href='#story/0'>hey</a><br><a href='www.test.com'>Read the Full Story</a></div>")
  console.log('.')
})();

(function testMutipleStoriesHTMLHeadlineToString(){
  var storyList = new StoryList 
  storyList.addStory(headline = "hey", date = 2020/01/01, link = "www.test.com")
  storyList.addStory(headline = "howdy", date = 2020/01/02, link = "www.test2.com")
  var storyListView = new StoryListView(storyList)
  assert.isTrue(storyListView.headlineToHTML() === "<div class='story'><a id=0 href='#story/0'>hey</a><br><a href='www.test.com'>Read the Full Story</a></div><br><br><div class='story'><a id=1 href='#story/1'>howdy</a><br><a href='www.test2.com'>Read the Full Story</a></div>")
  console.log('.')
})();