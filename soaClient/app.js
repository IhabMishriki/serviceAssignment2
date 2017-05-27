     $.ajax({
         url:'http://ec2-35-166-183-83.us-west-2.compute.amazonaws.com:8080/programms/',
         dataType: 'json', 
         success: function(json) { 
         	 $('#example1').columns({
         		data:json,
         		schema: [
         			{"header":"ID", "key":"id", "template":"000{{id}}"},
         			{"header":"Name", "key":"title"},
         			{"header":"description", "key":"description"},
         			{"header":"branch", "key":"branch"},
         			{"header":"min-grade", "key":"mingrade"},
         			{"header":"program_type", "key":"program_type"},
         			{"header":"university", "key":"university"}
         		
         		]
         
         	}); 
         }
         }); 
         
         


  function search() {
         $.LoadingOverlay("show");
         
             
         var searchString = "";
         var seatNumber =   $('#seatNumber').val();
         var university = $('#university').val();
         var year =  $('#txtDate').val();
         var branch = $('#branch').val();
         var program = $('#program').val();
         if(seatNumber != ""){
         searchString+="&seat_number="+seatNumber;
         }
         if(university != ""){
         searchString+="&university="+university;
         }
         if(branch != ""){
         searchString+="&branch="+branch;
         }
         if(year != ""){
         searchString+="&year="+year;
         }
         if(program != ""){
         searchString+="&program_type="+program;
         }
         if(searchString!=""){
          searchString = searchString.substr(1);
          searchString="?"+searchString;
         }
          
         		$.ajax({
         				url:"http://ec2-35-166-183-83.us-west-2.compute.amazonaws.com:8080/programms/"+searchString,
         				dataType: 'json', 
         				success: function(json) { 
						$.LoadingOverlay("hide");
         				$("#example1").removeData("columns").empty();	
         					 $('#example1').columns({
         					  
         						data:json,
         						schema: [
         							{"header":"ID", "key":"id"},
         							{"header":"Name", "key":"title"},
         							{"header":"description", "key":"description"},
         							{"header":"branch", "key":"branch"},
         							{"header":"min-grade", "key":"mingrade"},
         							{"header":"program_type", "key":"program_type"},
         							{"header":"university", "key":"university"}
         						
         						]
          
         					}); 
         					 
         				},
         				 error: function () {
							    $.LoadingOverlay("hide");
								alert("No data found, please try with other search parameters");
         						$("#example1").removeData("columns").empty();	
         
               }
             });
         
         			
         }