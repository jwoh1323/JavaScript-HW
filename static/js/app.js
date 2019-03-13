// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// Use d3 to update each cell's text with
// data values (datetime, city, state, country, shape, durationMinutes, comments)
tableData.forEach((UFOReport) => {
    var row = tbody.append("tr");
    Object.entries(UFOReport).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });

var inputElement = d3.select("#datetime");

inputElement.on("change", function() {

// Prevent the page from refreshing
d3.event.preventDefault();

// Get the value property of the input element
var inputValue = inputElement.property("value");

// Get the filtered data by input date 

var filteredData = tableData.filter(output => output.datetime === inputValue);

// Clear the content of tbody

document.getElementById("list_tbody").innerHTML = "";

// Append a filtered data to an empty tobody

filteredData.forEach((UFOReport) => {
    var row = tbody.append("tr");
    Object.entries(UFOReport).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });

// Clear the input field 

d3.select("#datetime").node().value = "";

});

var inputElement2 = d3.select("#city");

inputElement2.on("change", function() {

// Prevent the page from refreshing
d3.event.preventDefault();

// Get the value property of the input element
var inputValue = inputElement2.property("value");

// Get the filtered data by input date 

var filteredData = tableData.filter(output => output.city === inputValue);

// Clear the content of tbody

document.getElementById("list_tbody").innerHTML = "";

// Append a filtered data to an empty tobody

filteredData.forEach((UFOReport) => {
    var row = tbody.append("tr");
    Object.entries(UFOReport).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });

// Clear the input field 

d3.select("#city").node().value = "";

});

var inputElement3 = d3.select("#state");

inputElement3.on("change", function() {

// Prevent the page from refreshing
d3.event.preventDefault();

// Get the value property of the input element
var inputValue = inputElement3.property("value");

// Get the filtered data by input date 

var filteredData = tableData.filter(output => output.state === inputValue);

// Clear the content of tbody

document.getElementById("list_tbody").innerHTML = "";

// Append a filtered data to an empty tobody

filteredData.forEach((UFOReport) => {
    var row = tbody.append("tr");
    Object.entries(UFOReport).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });

// Clear the input field 

d3.select("#state").node().value = "";

});


function updateTable(newdata) {
    document.getElementById("list_tbody").innerHTML = "";
    newdata.forEach((UFOReport) => {
        var row = tbody.append("tr");
        Object.entries(UFOReport).forEach(([key, value]) => {
          var cell = tbody.append("td");
          cell.text(value);
        });
      });
  }
  

function getData(dataset) {
    var data = [];
    switch (dataset) {
    case "dataset1":
      data = tableData.filter(output => output.country === "us");
      console.log(data)
      break;
    case "dataset2":
      data = tableData.filter(output => output.country === "ca");
      break;
    default:
      data = tableData.filter(output => output.country);
    }
    updateTable(data)
  }

  var inputElement4 = d3.select("#shape");

  inputElement4.on("change", function() {
  
  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Get the value property of the input element
  var inputValue = inputElement4.property("value");
  
  // Get the filtered data by input date 
  
  var filteredData = tableData.filter(output => output.shape === inputValue);
  
  // Clear the content of tbody
  
  document.getElementById("list_tbody").innerHTML = "";
  
  // Append a filtered data to an empty tobody
  
  filteredData.forEach((UFOReport) => {
      var row = tbody.append("tr");
      Object.entries(UFOReport).forEach(([key, value]) => {
        var cell = tbody.append("td");
        cell.text(value);
      });
    });
  
  // Clear the input field 
  
  d3.select("#shape").node().value = "";
  
  });