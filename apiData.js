var urls = [] 
var storyList = new StoryList
var makePage = false

var a = fetch("https://content.guardianapis.com/search?show-elements=all&show-fields=all&api-key=f302c6ce-8b45-410f-92dc-9cd452aeb06a&q=uk&page-size=5",{
  method: "GET"
})
.then((response) => {
    return response.json();})
.then((data) => {
  let mainCall = data.response.results;
  for(let i = 0; i < mainCall.length; i++ ){
    console.log(mainCall[i])
    fetch("http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + mainCall[i].webUrl, {
      method: "GET"
    })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log("who will win")
      var summary = data.text
      storyList.addStory(mainCall[i].webTitle, mainCall[i].webPublicationDate, mainCall[i].webUrl, image = mainCall[i].fields.main, summary=summary)
      console.log("inside the then", storyList)
      if(storyList.list.length === 5){
        return storyList
      }
    }).then((data) => {
      console.log("in the third then")
      console.log(data)
      var controller = new StoryController(data)
      controller.insertHeadlineHTML()
    })
  }
})









// Promise.all([
//     })])
    
//     .then((response) => {
//       return response.json()
//     })
//     .then((data) => {
//       console.log("who will win")
//       var summary = data.text
//       storyList.addStory(mainCall[i].webTitle, mainCall[i].webPublicationDate, mainCall[i].webUrl, image = mainCall[i].fields.main, summary=summary)
//     })







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