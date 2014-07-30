var showFeed = function(){

	var e = document.getElementById("selectedElement");
	var dropdownIndex = e.selectedIndex;
	var url = e.options[e.selectedIndex].value;
	var xmlhttp;

	var parent = document.getElementById("container");
    while ( parent.firstChild ) 
  		parent.removeChild( parent.firstChild );

	
	xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			// document.getElementById("displayAll").innerHTML=xmlhttp.responseText;
			var response =JSON.parse(xmlhttp.responseText);
			//document.getElementById("displaytry").innerHTML=respone;
			//for hotels 
			if(dropdownIndex==1)
			{
				var noHotels=response.deals.length;
				for(var j=0;j<noHotels;j++)
				{
					//create the basic div for each deal
					var hotels = response.deals[j];
							
							var hoteldiv = document.createElement("div");
							hoteldiv.id = "div"+j;
							hoteldiv.className = 'hotel-div'; 
							
							hoteldiv.style.width="innerWidth-60";
							
							var hdetails = document.createElement("div");
							hdetails.className = 'hotel-detail';
							hoteldiv.appendChild(hdetails);
							
							var hotelName = document.createElement("H1");
							hotelName.className ='hotel-name';
							hotelName.innerHTML = hotels.hotelName;
							hdetails.appendChild(hotelName);

							var validityperoid = document.createElement("p");
							var hoteldesc = document.createTextNode(hotels.description);
							hdetails.appendChild(hoteldesc);


							var validityperoid = document.createElement("H3");
							validityperoid.style.color = "#000";
							validityperoid.innerHTML = "Validity:";
							hdetails.appendChild(validityperoid);

							var validity = document.createElement("p");
							validity.style.color = "#000";
							validity.innerHTML = hotels.validityPeriod.start.date + ", " + hotels.validityPeriod.start.time +" to " + hotels.validityPeriod.end.date + ", " + hotels.validityPeriod.end.time;
							hdetails.appendChild(validity);

							var hotelImage = document.createElement("img");
							hotelImage.src = hotels.imageUrl;
							hotelImage.className = 'hotel-img';
							
							hoteldiv.appendChild(hotelImage);
							document.getElementById("container").appendChild(hoteldiv);
					}
				}
			
			if(dropdownIndex==2)
			{
				var noCars=respone.deals.length;
			}
		}
	}
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
}
