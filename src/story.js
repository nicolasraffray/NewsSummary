(function(exports){
  function Story(headline, date, id, link, image){
    this.headline = headline
    this.date = date
    this.id = id
    this.link = link 
    this.image = image
  }

  Story.prototype.getHeadline = function(){ return this.headline }
  Story.prototype.getDate = function(){ return this.date }
  Story.prototype.getID = function(){ return this.id }
  Story.prototype.getLink = function(){ return this.link }
  Story.prototype.getImage = function(){ return this.image}

  exports.Story = Story
})(this)