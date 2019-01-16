// from data.js
var tableData = data;

NewTable(tableData);

function NewTable(date){

    var tbody = d3.select("tbody");
// refreshing the previous data
tbody.html("");
//iterate through JSON
date.forEach((sighting) => {
    var row = tbody.append("tr");
    //iterate through key value pairs
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = tbody.append("td")
        cell.text(value)

        
          });

    });
}

var button = d3.select("#filter-btn");
    
button.on("click",function(){
d3.event.preventDefault();
// taking the datetime position
var datetime = d3.select("#datetime");
// taking the property attribute
var FilterDate = datetime.property("value");
var filteredTable = tableData.filter(tableData => tableData.datetime === FilterDate);
console.log(filteredTable);
NewTable(filteredTable);
});

