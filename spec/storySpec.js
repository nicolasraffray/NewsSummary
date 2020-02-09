var story = new Story(headline = "test headline", date = 2020-01-01, id = 0,
                              link = 'test link', image = "image.jpg");

(function testGetHeadline(){
  assert.isTrue(story.getHeadline() === "test headline")
  console.log(".")
})();

(function testGetDate(){
  assert.isTrue(story.getDate() === 2020-01-01)
  console.log('.')
})();

(function testGetID(){
  assert.isTrue(story.getID() === 0)
  console.log('.')
})();

(function testGetLink(){
  assert.isTrue(story.getLink() === "test link")
  console.log('.')
})();

(function testGetImage(){
  assert.isTrue(story.getImage() === 'image.jpg')
})();
