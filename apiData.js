
var url = ["https://content.guardianapis.com/search?show-elements=all&show-fields=all&api-key=f302c6ce-8b45-410f-92dc-9cd452aeb06a&q=uk&page-size=5", "https://content.guardianapis.com/search?show-elements=all&show-fields=all&api-key=f302c6ce-8b45-410f-92dc-9cd452aeb06a&q=uk&page-size=5"] 

var storyList = new StoryList

fetch("https://content.guardianapis.com/search?show-elements=all&show-fields=all&api-key=f302c6ce-8b45-410f-92dc-9cd452aeb06a&q=uk&page-size=5")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });



for(let i = 0; i < url.length; i++){
  
  
  request.open('GET',url[i])
  request.onreadystatechange = function(){
    console.log(request.readyState === XMLHttpRequest.DONE)
    console.log(request.status)
    if(request.readyState === XMLHttpRequest.DONE && request.status === 200){
      console.log(i)
      console.log(request)
      var data = JSON.parse(request);
      console.log('DATA FROM THE API', data)
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