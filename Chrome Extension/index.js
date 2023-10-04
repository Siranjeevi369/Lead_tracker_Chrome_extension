let unorder_list = document.getElementById("ul-el");
let input_data = document.getElementById("inp-le");
let save_data = document.getElementById("save-btn");
let delete_data = document.getElementById("delete-btn");
let tab = document.getElementById("save-tab");
let myLead = [];
let leadFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tab_data = [{url:"www.cosmicon.com"}]
if(leadFromLocalStorage){
    myLead = leadFromLocalStorage
    renderLeads(myLead)
}

tab.addEventListener("click", function(){
const tab_data = [{url:"www.cosmicon.com"}]
    chrome.tabs.query({active: true , currentWindow: true}, function(tabs){
        myLead.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLead))
        console.log(myLead);
    })
    
    // myLead.push(tab_data[0].url)
    // localStorage.setItem("myLeads", JSON.stringify(myLead))
    renderLeads(myLead)
})

delete_data.addEventListener("click" ,function (){
    localStorage.clear()
    myLead = [];
    renderLeads(myLead)
})


save_data.addEventListener("click", function (){
    myLead.push(input_data.value);
    input_data.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLead))
    renderLeads(myLead)
    console.log(input_data.value)
})

function renderLeads(leaddata){
    let listitem ="";
    for(let i = 0; i<leaddata.length; i++){
        listitem += `<li>
            <a target='_blank' href='${leaddata[i]}'>${leaddata[i]}</a>
        </li>`;
    }
    unorder_list.innerHTML = listitem;
    console.log(myLead)
}