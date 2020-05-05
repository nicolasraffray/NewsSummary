
(function testHTMLHeadlineAsString(){
  var storyList = new StoryList 
  storyList.addStory(headline = "hey", date = 2020/01/01, link = "www.test.com", image = 'image', summary="test news summary")
  var storyListView = new StoryListView(storyList)
  assert.isTrue(storyListView.headlineToHTML() === "<div class='story'><div id='images'>image</div><a id=0 href='#story/0'>hey</a><br><a href='www.test.com'>Read the Full Story</a></div><div id='summary'>test news summary</div>")
  console.log('.')
})();

(function testMutipleStoriesHTMLHeadlineToString(){
  var storyList = new StoryList 
  storyList.addStory(headline = "hey", date = 2020/01/01, link = "www.test.com", image = "image", summary = 'summary1')
  storyList.addStory(headline = "howdy", date = 2020/01/02, link = "www.test2.com", image = "image2", summary = 'summary2')
  var storyListView = new StoryListView(storyList)
  assert.isTrue(storyListView.headlineToHTML() === "<div class='story'><div id='images'>image</div><a id=0 href='#story/0'>hey</a><br><a href='www.test.com'>Read the Full Story</a></div><div id='summary'>summary1</div><br><br><div class='story'><div id='images'>image2</div><a id=1 href='#story/1'>howdy</a><br><a href='www.test2.com'>Read the Full Story</a></div><div id='summary'>summary2</div>")
  console.log('.')
})();