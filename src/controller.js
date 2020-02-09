(function(exports){
  function StoryController(storyList){
    this.storyList = storyList
    this.storyListView = new StoryListView(storyList)
  }

  StoryController.prototype.insertHeadlineHTML = function(){
    var div = document.createElement('div')
    let string = this.storyListView.headlineToHTML()
    div.innerHTML = string
    document.body.appendChild(div);
  }
  
  exports.StoryController = StoryController
})(this);