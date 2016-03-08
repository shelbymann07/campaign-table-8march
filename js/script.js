$(document).ready(function() {

	// 1.
	// When the page is loaded,
	// call the loadData() function.

	loadData();

});




function loadData() {
	
	$.getJSON("js/donations_over_5K.json", function(data) {
		writeTable(data);
	});

	// 2.
	// Write an AJAX call here to load your data.
	// Then PASS the data to writeTable();
}



function writeTable(data) {

		for(i=0; i < data.length; i++) {

			if (data[i]["Committee"] === "CITIZENS TO ELECT KURT SCHAEFER ATTORNEY GENERAL") {
				$("table.donations tbody").append(
					"<tr>"+
						"<td class='date'>"+data[i]["Contribution Date"]+"</td>"+
		                "<td class='information'>"+data[i]["Contribution Information"]+"</td>"+
		                "<td class='amount'>"+data[i]["Amount"]+"</td>"+
	                "</tr>"
				);
			}

		}





	// 3.
	// Make a list of every donation made to "CITIZENS TO ELECT KURT SCHAEFER ATTORNEY GENERAL"
	// Do this by looping through the data and writing a new table row (<tr></tr>) for every donation.
	// Each row should contain of three columns (<td></td>): 
	// - Contribution Date
	// - Contributon Information
	// - Amount
}

