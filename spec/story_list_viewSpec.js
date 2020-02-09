
// for now we will just test one story
(function testHTMLHeadlineAsString(){
  var storyList = new StoryList 
  storyList.addStory(headline = "hey", date = 2020-01-01, link = "www.test.com")
  var storyListView = new StoryListView(storyList)
  assert.isTrue(storyListView.headlineToHTML() === "<div class='story'><a id=0 href='#story/0'>hey</a><br><a href='www.test.com'>Read the Full Story</a></div>")
  console.log('.')
})()