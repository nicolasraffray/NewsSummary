(function(exports){
  function Story(headline, date, id, link){
    this.headline = headline
    this.date = date
    this.id = id
    this.link = link 
  }

  Story.prototype.getHeadline = function(){ return this.headline }
  Story.prototype.getDate = function(){ return this.date }
  Story.prototype.getID = function(){ return this.id }
  Story.prototype.getLink = function(){ return this.link }


  exports.Story = Story
})(this)