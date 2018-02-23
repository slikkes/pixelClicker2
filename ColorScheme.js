let ColorScheme=[
//normal
	["#23c692","#99e600","#e67300","#e60000","#e600ac","#5c00e6","#00e6e6"],
//hover
	["#178260","#669900","#994d00","#990000","#990073","#3d0099","#009999"],
//fresh
	["#93ecd0","#d5ff80","#ffbf80","#ff8080","#ff80df","#b380ff","#80ffff"],
//shade
	["#0b4130","#334d00","#4d2600","#4d0000","#4d0039","#1f004d","#004d4d"],
//particle
	["34, 195, 144","170, 255, 0","255, 128, 0","255, 0, 0","255, 0, 191","102, 0, 255","0, 255, 255"]

]

// 15 75 30 46

function colorPicker(state,level){
	let lvl=Math.floor(level/5);
	switch(state){
		case 'normal':return ColorScheme[0][lvl];
		case 'hover':return ColorScheme[1][lvl];
		case 'fresh':return ColorScheme[2][lvl];
		case 'shade':return ColorScheme[3][lvl];
		case 'particle':return ColorScheme[4][lvl];

	}
}

function shadeColorPicker(level){
	let lvl=Math.floor(level/5);
	return ColorScheme[3][lvl];
}