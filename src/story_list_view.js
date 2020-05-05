(function(exports){

  function StoryListView(StoryList){
    this.storyList = StoryList
  }

  StoryListView.prototype.headlineToHTML = function(){
    list = this.storyList.list
    var array = []
    for(let i = 0; i < list.length; i++){
    array.push(`<div class='story'><div id='images'>${list[i].getImage()}</div><a id=${list[i].getID()} href='#story/${list[i].getID()}'>${list[i].getHeadline()}</a><br><a href='${list[i].getLink()}'>Read the Full Story</a></div><div id='summary'>${list[i].getSummary()}</div>`)
    }
    return array.join("<br><br>")
  }
  exports.StoryListView = StoryListView
})(this);