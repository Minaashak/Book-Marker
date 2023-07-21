var bookSiteInput = document.getElementById("bookSite");
var urlSiteInput = document.getElementById("urlSite");

var siteName = [];


if(localStorage.getItem("links") != null){
    siteName = JSON.parse(localStorage.getItem("links"));
    showData();
}

// Create Data
function addData() {
  var bookName = {
    name: bookSiteInput.value,
    link: urlSiteInput.value,
  };

    siteName.unshift(bookName);
    localStorage.setItem("links" , JSON.stringify(siteName));
    clearData();
    showData()
}

// Show Data
function showData(){
    var cartona ="";
    for(var i = 0 ; i < siteName.length;i++){
        cartona += `
        <tr>
            <td>${i + 1}</td>
            <td>${siteName[i].name}</td>
            <td> <a href="${
              siteName[i].link
            }" target="_blank"><button class="btn btn-visit"><i class="fa-solid fa-eye"></i>Visit</button></a> </td>
            <td><button class="btn btn-danger" onclick="deleteElement(${i})">
          <i class="fa-solid fa-trash-can"></i>Delete
        </button>  </td>
        </tr>
        `;
        
    }
    document.getElementById("tableData").innerHTML=cartona;
}

// Delete Element

function deleteElement(number){
siteName.splice(number,1);
localStorage.setItem("links", JSON.stringify(siteName));
showData();
}



// clear Data

function clearData() {
  bookSiteInput.value = "";
  urlSiteInput.value = "";
}
