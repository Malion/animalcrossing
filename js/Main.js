/*var neighborType = function(race, page){
	html = '';
	for(var n in neighbors){
		if(neighbors[n].type === race){
			html += '<div data-role="collapsible" data-content-theme="b"><h3>'+neighbors[n].name+'</h3><ul><li>Type: '+neighbors[n].type+'</li><li>Personality: '+neighbors[n].pers+'</li><li>Birthday: '+neighbors[n].birthday+'</li><li>Favorite Coffee Bean: '+neighbors[n].favCoffee[0]+'</li><li>Favorite Coffee Milk: '+neighbors[n].favCoffee[1]+'</li><li>Favorite Coffee Sugar: '+neighbors[n].favCoffee[2]+'</li><li>Favorite Style: '+neighbors[n].favStyle+'</li><li>Favorite Song: '+neighbors[n].favSong+'</li></ul></div>'
		}
	}
	$('#'+page+'list').html(html)
}*/

var neighborType = function(race, page){
	html = '<table data-role="table" class="ui-body-b table-stripe ui-responsive"><thead><tr class="ui-bar-d"><th>Name</th><th>Personality</th><th>Birthday</th><th>Favorite Coffee Bean</th><th>Favorite Coffee Milk</th><th>Favorite Coffee Sugar</th><th>Favorite Style</th><th>Favorite Song</th></tr></thead><tbody>';
	for(var n in neighbors){
		if(race === "all"){
			html += '<tr><th>'+neighbors[n].name+'</th><td>'+neighbors[n].pers+'</td><td>'+neighbors[n].birthday+'</td><td>'+neighbors[n].favCoffee[0]+'</td><td>'+neighbors[n].favCoffee[1]+'</td><td>'+neighbors[n].favCoffee[2]+'</td><td>'+neighbors[n].favStyle+'</td><td>'+neighbors[n].favSong+'</td></tr>';
		}
		if(neighbors[n].type === race){
			html += '<tr><th>'+neighbors[n].name+'</th><td>'+neighbors[n].pers+'</td><td>'+neighbors[n].birthday+'</td><td>'+neighbors[n].favCoffee[0]+'</td><td>'+neighbors[n].favCoffee[1]+'</td><td>'+neighbors[n].favCoffee[2]+'</td><td>'+neighbors[n].favStyle+'</td><td>'+neighbors[n].favSong+'</td></tr>';
		}
	}
	html += '</tbody></table>';
	$('#'+page+'list').html(html)
}
$('#all').on('pagebeforecreate', function(){
	neighborType("all","all")
})
$('#anteaters').on('pagebeforecreate', function(){
	neighborType("Anteater", "anteater");
});
$('#bearcubs').on('pagebeforecreate', function(){
	neighborType("Bear Cub", "bearcubs");
});
$('#bears').on('pagebeforecreate', function(){
	neighborType("Bear", "bears");
});
$('#birds').on('pagebeforecreate', function(){
	neighborType("Bird", "birds");
});
$('#bulls').on('pagebeforecreate', function(){
	neighborType("Bull", "bulls");
});
$('#cats').on('pagebeforecreate', function(){
	neighborType("Cat", "cats");
});
$('#chickens').on('pagebeforecreate', function(){
	neighborType("Chicken", "chickens");
});
$('#cows').on('pagebeforecreate', function(){
	neighborType("Cow", "cows");
});
$('#crocodiles').on('pagebeforecreate', function(){
	neighborType("Crocodile", "crocodiles");
});
$('#deer').on('pagebeforecreate', function(){
	neighborType("Deer", "deer");
});
$('#dogs').on('pagebeforecreate', function(){
	neighborType("Dog", "dogs");
});
$('#ducks').on('pagebeforecreate', function(){
	neighborType("Duck", "ducks");
});
$('#eagles').on('pagebeforecreate', function(){
	neighborType("Eagle", "eagles");
});
$('#elephants').on('pagebeforecreate', function(){
	neighborType("Elephant", "elephants");
});
$('#frogs').on('pagebeforecreate', function(){
	neighborType("Frog", "frogs");
});
$('#goats').on('pagebeforecreate', function(){
	neighborType("Goat", "goats");
});
$('#gorillas').on('pagebeforecreate', function(){
	neighborType("Gorilla", "gorillas");
});
$('#hamsters').on('pagebeforecreate', function(){
	neighborType("Hamster", "hamsters");
});
$('#hippopotamuses').on('pagebeforecreate', function(){
	neighborType("Hippo", "hippopotamuses");
});
$('#horses').on('pagebeforecreate', function(){
	neighborType("Horse", "horses");
});
$('#kangaroos').on('pagebeforecreate', function(){
	neighborType("Kangaroo", "kangaroos");
});
$('#koalas').on('pagebeforecreate', function(){
	neighborType("Koala", "koalas");
});
$('#lions').on('pagebeforecreate', function(){
	neighborType("Lion", "lions");
});
$('#monkeys').on('pagebeforecreate', function(){
	neighborType("Monkey", "monkeys");
});
$('#mice').on('pagebeforecreate', function(){
	neighborType("Mouse", "mice");
});
$('#octopuses').on('pagebeforecreate', function(){
	neighborType("Octopus", "octopuses");
});
$('#ostriches').on('pagebeforecreate', function(){
	neighborType("Ostrich", "ostriches");
});
$('#penguins').on('pagebeforecreate', function(){
	neighborType("Penguin", "penguins");
});
$('#pigs').on('pagebeforecreate', function(){
	neighborType("Pig", "pigs");
});
$('#rabbits').on('pagebeforecreate', function(){
	neighborType("Rabbit", "rabbits");
});
$('#rhinoceroses').on('pagebeforecreate', function(){
	neighborType("Rhinoceros", "rhinoceroses");
});
$('#sheep').on('pagebeforecreate', function(){
	neighborType("Sheep", "sheep");
});
$('#squirrels').on('pagebeforecreate', function(){
	neighborType("Squirrel", "squirrels");
});
$('#tigers').on('pagebeforecreate', function(){
	neighborType("Tiger", "tigers");
});
$('#wolves').on('pagebeforecreate', function(){
	neighborType("Wolf", "wolves");
});