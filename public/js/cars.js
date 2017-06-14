"use strict";

var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var pageNum = "3"

function formatCars(carsJSON) {
  var html = `<div class="row">` + carsJSON.map( car => {
    return (
    `<div class="col-md-4 car"><h2>${car.Make}</h2><p><strong>Model:</strong> ${car.Model}</p><p><strong>Year:</strong> ${car.Year}</p></div>`
    )
  }).join('') + `</div>`
  return html
}

function addCarsToDOM(carsJSON) {
  const formattedCars = formatCars(carsJSON)
  $('#cars').append(formattedCars)
}

function fetchJSON() {
  const url = baseUrl + pageNum + "/3"
  pageNum++
  $.ajax({
    url: url,
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(data) {
      addCarsToDOM(data)
    }
  })
}