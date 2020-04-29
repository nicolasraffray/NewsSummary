


var urls = [] 
var storyList = new StoryList

fetch("https://content.guardianapis.com/search?show-elements=all&show-fields=all&api-key=f302c6ce-8b45-410f-92dc-9cd452aeb06a&q=uk&page-size=5",{
  method: "GET"
})
.then((response) => {
    return response.json();})
.then((data) => {
  let mainCall = data.response.results;
  console.log(mainCall)
  for(let i = 0; i < mainCall.length; i++ ){
    fetch("http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + mainCall[i].webUrl, {
      method: "GET"
    })
    .then((response) => {
      return response.json()
    })
    .then((data) => {

      var summary = data.text
      storyList.addStory(mainCall[i].webTitle, mainCall[i].webPublicationDate, mainCall[i].webUrl, image = mainCall[i].fields.main, summary=summary)
    })
   
  }
  console.log(storyList)
  var controller = new StoryController(storyList)
  controller.insertHeadlineHTML()
});












// request.onload = function(){
//   var data = JSON.parse(this.response).response.results
//   console.log(data)
//   if(request.status === 200){ for(var i = 0; i < data.length; i++ ){
//     storyList.addStory(data[i].webTitle, data[i].webPublicationDate, data[i].webUrl, image = data[i].fields.main)}

//   var controller = new StoryController(storyList)
//   controller.insertHeadlineHTML()}
//   else{ console.log("API Error")}
// }

// request.send()