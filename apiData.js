
var request = new XMLHttpRequest()
var url = ["https://content.guardianapis.com/search?show-elements=all&show-fields=all&api-key=f302c6ce-8b45-410f-92dc-9cd452aeb06a&q=uk&page-size=5", "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=https://www.theguardian.com/world/live/2020/apr/23/coronavirus-live-news-update-covid-19-face-masks"] 

var storyList = new StoryList

for(let i = 0; i < url.length; i++){

  request.open('GET',url[i],true)
  console.log(request)
  request.onreadystatechange = function(){
    console.log(request.readyState)
    console.log(XMLHttpRequest.DONE)
    console.log(request.status)
    if(request.readyState === XMLHttpRequest.DONE && request.status === 200){
      console.log(request)
      var data = JSON.parse(request.responseText);
      console.log('DATA FROM THE API', data.text)
    } 
  }
  request.send()
}


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