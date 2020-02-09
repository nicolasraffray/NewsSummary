// for now we will just test for one story
(function(exports){

  function StoryListView(StoryList){
    this.storyList = StoryList
  }

  StoryListView.prototype.headlineToHTML = function(){
    story = this.storyList.list[0]
    return `<div class='story'><a id=${story.getID()} href='#story/${story.getID()}'>${story.getHeadline()}</a><br><a href='${story.getLink()}'>Read the Full Story</a></div>`
  }
  exports.StoryListView = StoryListView
})(this)