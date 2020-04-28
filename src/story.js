(function(exports){
  function Story(headline, date, id, link, image, summary){
    this.headline = headline
    this.date = date
    this.id = id
    this.link = link 
    this.image = image
    this.summary = summary
  }

  Story.prototype.getHeadline = function(){ return this.headline }
  Story.prototype.getDate = function(){ return this.date }
  Story.prototype.getID = function(){ return this.id }
  Story.prototype.getLink = function(){ return this.link }
  Story.prototype.getImage = function(){ return this.image}
  Story.prototype.getSummary = function(){return this.summary}

  exports.Story = Story
})(this)