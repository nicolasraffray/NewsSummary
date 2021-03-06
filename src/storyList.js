(function(exports){
  function StoryList(){
    this.list = []
    this.idGenerator = 0
  }

  StoryList.prototype.addStory = function(headline, date, link, image, summary){
    this.list.push(new Story(headline = headline, date = date, id = this.idGenerator, link = link, image = image, summary = summary));
    this.idGenerator++
  }

  StoryList.prototype.getList = function(){ return this.list }

  exports.StoryList = StoryList
})(this);