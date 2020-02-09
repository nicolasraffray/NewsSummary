
var request = new XMLHttpRequest()
// var url = "http://content.guardianapis.com/.json?show-editors-picks=true&api-key=f302c6ce-8b45-410f-92dc-9cd452aeb06a&q=uk&page-size=1"
var url = "https://content.guardianapis.com/search?show-elements=all&show-fields=all&api-key=f302c6ce-8b45-410f-92dc-9cd452aeb06a&q=uk&page-size=5"
request.open('GET',url,true)

var storyList = new StoryList

request.load = function(){
  var data = JSON.parse(this.response).response.results
  console.log(data)
  if(request.status === 200){ for(var i = 0; i < data.length; i++ ){
    storyList.addStory(data[i].webTitle, data[i].webPublicationDate, data[i].webUrl)}
  var controller = new StoryController(storyList)
  controller.insertHeadlineHTML()
  }
  else{ console.log("API Error")}
}

request.send()