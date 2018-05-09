

$.getJSON( "https://apis.is/concerts", function( data ) {

	  // Skoðum JSON Object í console
	  console.log(data);
		/*
		{
			"results":[
				{
					"eventDateName":"Jónas R og Bandið",
					"name":"Tónleikar",
					"dateOfShow":"2017-03-17T22:00:00",
					"userGroupName":"Bandið",
					"eventHallName":"Café Rosenberg",
					"imageSource":"https://d30qys758zh01z.cloudfront.net/images/medium/1.9976.jpg"
				},
				{
					"eventDateName":"U2 Tribute Austurland að Glettingi",
					"name":"Tónleikar",
					"dateOfShow":"2017-03-18T20:30:00",
					"userGroupName":"Bæjarbíó slf",
					"eventHallName":"Bæjarbíó (Hafnarfirði)",
					"imageSource":"https://d30qys758zh01z.cloudfront.net/images/medium/1.9941.jpg"
				}
			]
		}	
		*/

	  // búum til fylki sem mun geyma objects.
	  var concertEvents = [];
	
	  for(let i = 0; i<data.results.length; i++){
			concertEvents.push
			({
				name:data.results[i].eventDateName,
				where:data.results[i].eventHallName,
				imageSrc:data.results[i].imageSource,
				when:data.results[i].dateOfShow
			});
	   }
	  // Skoðum concertEvents fylkið
	  console.log(concertEvents);

	  // Jónas R og Bandið
	  console.log(concertEvents[0].name);
	  //prenta á html
	  var gallery = document.getElementById("gallery");
	  var head = document.createElement('div');
	  for (let i = 0; i<concertEvents.length;i++){
	  	var node = document.createElement('div');
	  	var text = document.createTextNode("Hljómsveit: " + concertEvents[i].name + " staðsetning: " + concertEvents[i].where + " dagsetning: " + concertEvents[i].when);
	  	node.appendChild(text);
	  	node.id = concertEvents[i].name;
	  	head.appendChild(node);
	  	var img = document.createElement("img");
	  	img.src = concertEvents[i].imageSrc;
	  	img.alt = concertEvents[i].imageSrc;
	  	node.appendChild(img);
	  }
	  gallery.appendChild(head);
});

