let searchInput = document.getElementById("searchInput");
let searchResultEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");
function createAndAppendResult(result){
    // creating result item
       let resultItem = document.createElement('div');
       resultItem.classList.add('result-item');
       searchResultEl.appendChild(resultItem);
      
    // creating title element 
       let {link,title, description} = result; //object destructuring
       let titleEl = document.createElement('a');
       titleEl.href = link;
       titleEl.textContent = title;
       titleEl.classList.add('result-title');
       titleEl.target = "_blank";

       resultItem.appendChild(titleEl);

    // creating break element 
        let breakEl = document.createElement('br');
        resultItem.appendChild(breakEl);


    // creating url element 
       let urlEl = document.createElement('a');
      
       urlEl.href = link;
       urlEl.target = "_blank";
       urlEl.textContent = link;
       urlEl.classList.add('result-url');
       
       
       resultItem.appendChild(urlEl);

    // creating break element 
        let linkbreak = document.createElement('br');
        resultItem.appendChild(linkbreak);


    // creating description element
        let descriptionEl = document.createElement("p");
        descriptionEl.classList.add("link-description");
        descriptionEl.textContent = description;

        resultItem.appendChild(descriptionEl);
            

}

function displayresult(searchResults){
    spinnerEl.classList.toggle('d-none');
    for(let result of searchResults){  
     createAndAppendResult(result);
}
}
function searchWiki(event){
    if(event.key === "Enter"){
       spinnerEl.classList.toggle('d-none');
       searchResultEl.textContent = "";
       let searchInputVal=  searchInput.value;
       let url = "https://apis.ccbp.in/wiki-search?search=" + searchInputVal;
       let options = {
        method:"GET",
       }
       fetch(url,options)
       .then(function(response){
        return response.json()
       })
       .then(function(jsonData){
        let {search_results} = jsonData;
        displayresult(search_results);
       })
    }
}



searchInput.addEventListener("keydown",searchWiki);
