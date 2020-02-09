(function(exports){

  function StoryListView(StoryList){
    this.storyList = StoryList
  }

  StoryListView.prototype.headlineToHTML = function(){
    list = this.storyList.list
    var array = []
    for(let i = 0; i < list.length; i++){
    array.push(`<div class='story'>${list[i].getImage()}<a id=${list[i].getID()} href='#story/${list[i].getID()}'>${list[i].getHeadline()}</a><br><a href='${list[i].getLink()}'>Read the Full Story</a></div>`)
    }
    return array.join("<br><br>")
  }
  exports.StoryListView = StoryListView
})(this);