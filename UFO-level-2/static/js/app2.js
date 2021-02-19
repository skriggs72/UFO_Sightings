// From data.js
var tableData = data;

// Select table body
var tbody = d3.select("tbody");

// Function to populate table
function populateTable(buildData) {
    buildData.map(data => {

        // Make new row
        var row = tbody.append("tr");
    
        // Append each row with data
        row.append("td").text(data.datetime);
        row.append("td").text(data.city);
        row.append("td").text(data.state);
        row.append("td").text(data.country);
        row.append("td").text(data.shape);
        row.append("td").text(data.durationMinutes);
        row.append("td").text(data.comments);
    });
}

// POPULATE TABLE
populateTable(tableData);

// EVENT LISTENER: filter table by date input
d3.select("#filter-btn").on("click", function() {

    // Select user input
    var inputValue = d3.select("#datetime").property("value");

    console.log("inputValue: ", inputValue);

    console.log("data: ", data)
    
    // Filter table based on user input
    var filteredData = tableData.filter(data => data.datetime === inputValue);
    console.log("filteredData: ", filteredData);

    // Clear original table
    tbody.html("");

populateTable(filteredData);

});

// EVENT LISTERNER: unfilter table, restore default
var button2 = d3.select("#unfilter-btn");

button2.on("click", function(){
    tbody.html("");
    populateTable();
});

button1.on("click", function() {

    // Select user input
    var inputValue = d3.select("#city").property("value");
    console.log(inputValue);
    
    // Filter table based on user input
    var filteredData = tableData.filter(data => data.city === inputValue);
    console.log(filteredData);

    // Clear original table
    tbody.html("");


populateTable(filteredData);

});