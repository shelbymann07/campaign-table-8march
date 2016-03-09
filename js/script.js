var months = {
    "01" : "January",
    "02" : "February",
    "03" : "March",
    "04" : "April",
    "05" : "May",
    "06" : "June",
    "07" : "July",
    "08" : "August",
    "09" : "September",
    "10" : "October",
    "11" : "November",
    "12" : "December"
}

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
            
            var longDate = data[i]["Contribution Date"];
            var dateAsArray = longDate.split("-");
            
            var monthNum = dateAsArray[1];
            
            var verboseDate = moment(longDate).format('MMM. D, YYYY');
            
            //console.log(verboseDate);

			//if (data[i]["Committee"] === "CITIZENS TO ELECT KURT SCHAEFER ATTORNEY GENERAL") {
				$("table.donations tbody").append(
					"<tr>"+
						"<td data-sort='"+longDate+"' class='date'>"+verboseDate+"</td>"+
                        "<td class='committee'>"+data[i]["Committee"]+"</td>"+
		                "<td class='information'>"+data[i]["Contribution Information"]+"</td>"+
		                "<td class='amount'>"+data[i]["Amount"]+"</td>"+
	                "</tr>"
				);
			//} 

		}
    
    $('.donations').DataTable( 
        {
            "order": [[ 3, "desc" ]]
        } 
    );



	// 3.
	// Make a list of every donation made to "CITIZENS TO ELECT KURT SCHAEFER ATTORNEY GENERAL"
	// Do this by looping through the data and writing a new table row (<tr></tr>) for every donation.
	// Each row should contain of three columns (<td></td>): 
	// - Contribution Date
	// - Contributon Information
	// - Amount
}

