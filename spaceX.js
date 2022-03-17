const url = "https://api.spacexdata.com/v2/launchpads";

// d3.json(url).then(gerballfart => {gerballfart.map(myele => 
//     {console.log(myele.location.longitude + "aa: " + myele.location.latitude)}
// )});

//&& thisrow > 0
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];

    Object.entries(firstPerson).forEach(([key,value]) => 
        {console.log(key + ': ' + value);});

    
//    wfreq = data.metadata.map(person => person.wfreq).filter(thisrow => {return (thisrow != null);})
//    console.log(wfreq.sort((a,b) => b-a));
});


// researcher1.forEach(([first, second]) => console.log(first
//     + ": " + second));
