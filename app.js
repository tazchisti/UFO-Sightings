// from data.js
var tableData = data;
// create array to hold data from JSON file
var datetime  = [];
var city = [];
var state = [];
var country = [];
var shape = []
var durationMinutes = []
var comments = []

// Use D3 to select the table
var table = d3.select("table");

// Use d3 to create a bootstrap striped table
// 
table.attr("class", "table table-striped");

var tbody = d3.select("tbody");

//iterate through JSON
tableData.forEach((sighting) => {
    var row = tbody.append("tr");
    //iterate through key value pairs
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = tbody.append("td")
        cell.text(value)

        
          })

    })



//select body


// Append one table row `tr` to the table body


// Append one cell for the date




