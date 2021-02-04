

function events(){
 fetch("https://wildhab-api-b.web.app/events")
  .then(response => response.json())
  .then(data => {
      const displayData = document.getElementById("data") 
         return displayData.innerText= JSON.stringify(data) 
        })
  .catch(error => console.log('error', error))
}

function writeEventData(name) {
    fetch("https://wildhab-api-b.web.app/events")
    firebase.database().ref('/events/').set({
      name: name
    });
    return "Success"
  }
