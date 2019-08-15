function sendEmail(form) {

    // FORM NEEDS VALIDATIONS
	var department = form.department.value;
	
	$.ajax  
    ({  
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/Web/Lists(guid'5e8e8020-99cb-47bb-bf4c-6f5df18f4c71')/Items?$filter=Title eq '" + department +"'",  
        type: "GET",  
        headers:  
        {  
            "Accept": "application/json;odata=verbose",  
            "Content-Type": "application/json;odata=verbose",  
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),  
            "IF-MATCH": "*",  
            "X-HTTP-Method": null  
        },  
        cache: false,  
        success: function (data)   
        {
        
        var to = data.d.results[0].EMail;
		var name = form.name.value;
		var from = form.from.value;
		var subject = form.subject.value;
		var body = form.body.value;
			

			$.ajax({
			    contentType: 'application/json',
			    url: "/_api/SP.Utilities.Utility.SendEmail",
			    type: "POST",
			    data: JSON.stringify({
			        'properties': {
			            '__metadata': { 'type': 'SP.Utilities.EmailProperties' },
			            'From': from,
			            'To': { 'results': [to] },
			            'Body': "Name: " + name + "<br /><br />" + "Email: " + from + "<br /><br />" + "Subject: " + subject + "<br /><br />" + "Message: " + body,
			            'Subject': subject
			        }
			    }
			  ),
		
			    headers: {
			        "Accept": "application/json;odata=verbose",
			        "content-type": "application/json;odata=verbose",
			        "X-RequestDigest": $("#__REQUESTDIGEST").val()
			    },
		
			    success: function (data) {
			       alert("Your Email has been sent!");
			    },
		
			    error: function (err) {
			        alert(err.responseText);
			        debugger;
			    }
			});
        
        },  
        error: function(data)  
        {    
            alert("Please Specify a department to send the email.");
        }  
        
    });  

		

}