
      // Global Variables
      var NumCrystals = 64; // GRIFFIN HPGe crystals
      var NumTiles = 76;    // ARIES Scintillator tiles
      var CrystalDistance = 0;
      var CloverLocation = ['Downstream Lampshade', 'Corona', 'Corona', 'Upstream Lampshade']; 
      var CrystalTheta = []; 
      var CrystalPhi = [];
      var RadToDeg = DegToRad = (Math.PI / 180.000);
      var AngularBinsAngle = [];
      var AngularBinsWeight = [];
      var ExcludedCrystalsList = [];
      var ExcludedTilesList = [];
      
      document.onload = initialSetup();

      function initialSetup() {

      // Populate the exlucded crystals list
      for(i=1; i<NumCrystals; i++){
      ExcludedCrystalsList[i]=0;
      }
      for(i=1; i<NumTiles; i++){
      ExcludedTilesList[i]=0;
      }
      
      // Draw the Crystal Map
      // 16 columns
      // 6 rows
      // 64 crystals arranged in 16 clovers
      var cell = [];
      document.getElementById("MapTable").innerHTML = '';
      var row = document.getElementById("MapTable").insertRow(0); 
      for(var i=0; i<16; i++){
        cell[i] = row.insertCell(i);
      }
      cell[2].innerHTML = '4';    cell[2].id = 'CellCrystal4';
      cell[3].innerHTML = '1';    cell[3].id = 'CellCrystal1'; 
      cell[6].innerHTML = '8';    cell[6].id = 'CellCrystal8'; 
      cell[7].innerHTML = '5';    cell[7].id = 'CellCrystal5'; 
      cell[10].innerHTML = '12';   cell[10].id = 'CellCrystal12';
      cell[11].innerHTML = '9';  cell[11].id = 'CellCrystal9';
      cell[14].innerHTML = '16';  cell[14].id = 'CellCrystal16';
      cell[15].innerHTML = '13';  cell[15].id = 'CellCrystal13';
      
      var row = document.getElementById("MapTable").insertRow(1); 
      for(var i=0; i<16; i++){
        cell[i] = row.insertCell(i);
      }
      cell[2].innerHTML = '3';    cell[2].id = 'CellCrystal3'; 
      cell[3].innerHTML = '2';    cell[3].id = 'CellCrystal2'; 
      cell[6].innerHTML = '7';    cell[6].id = 'CellCrystal7'; 
      cell[7].innerHTML = '6';    cell[7].id = 'CellCrystal6'; 
      cell[10].innerHTML = '11';  cell[10].id = 'CellCrystal11';
      cell[11].innerHTML = '10';  cell[11].id = 'CellCrystal10';
      cell[14].innerHTML = '15';  cell[14].id = 'CellCrystal15';
      cell[15].innerHTML = '14';  cell[15].id = 'CellCrystal14';
      
      var row = document.getElementById("MapTable").insertRow(2); 
      for(var i=0; i<16; i++){
        cell[i] = row.insertCell(i);
      }
      cell[0].innerHTML = '20';   cell[0].id = 'CellCrystal20';
      cell[1].innerHTML = '17';   cell[1].id = 'CellCrystal17';
      cell[2].innerHTML = '24';   cell[2].id = 'CellCrystal24';
      cell[3].innerHTML = '21';   cell[3].id = 'CellCrystal21';
      cell[4].innerHTML = '28';   cell[4].id = 'CellCrystal28';
      cell[5].innerHTML = '25';   cell[5].id = 'CellCrystal25';
      cell[6].innerHTML = '32';   cell[6].id = 'CellCrystal32';
      cell[7].innerHTML = '29';   cell[7].id = 'CellCrystal29';
      cell[8].innerHTML = '36';   cell[8].id = 'CellCrystal36';
      cell[9].innerHTML = '33';   cell[9].id = 'CellCrystal33';
      cell[10].innerHTML = '40';  cell[10].id = 'CellCrystal40';
      cell[11].innerHTML = '37';  cell[11].id = 'CellCrystal37'; 
      cell[12].innerHTML = '44';  cell[12].id = 'CellCrystal44';
      cell[13].innerHTML = '41';  cell[13].id = 'CellCrystal41';
      cell[14].innerHTML = '48';  cell[14].id = 'CellCrystal48';
      cell[15].innerHTML = '45';  cell[15].id = 'CellCrystal45';
      
      var row = document.getElementById("MapTable").insertRow(3); 
      for(var i=0; i<16; i++){
        cell[i] = row.insertCell(i);
      }
      cell[0].innerHTML = '19';   cell[0].id = 'CellCrystal19';
      cell[1].innerHTML = '18';   cell[1].id = 'CellCrystal18';
      cell[2].innerHTML = '23';   cell[2].id = 'CellCrystal23';
      cell[3].innerHTML = '22';   cell[3].id = 'CellCrystal22';
      cell[4].innerHTML = '27';   cell[4].id = 'CellCrystal27';
      cell[5].innerHTML = '26';   cell[5].id = 'CellCrystal26';
      cell[6].innerHTML = '31';   cell[6].id = 'CellCrystal31';
      cell[7].innerHTML = '30';   cell[7].id = 'CellCrystal30';
      cell[8].innerHTML = '35';   cell[8].id = 'CellCrystal35';
      cell[9].innerHTML = '34';   cell[9].id = 'CellCrystal34';
      cell[10].innerHTML = '39';  cell[10].id = 'CellCrystal39';
      cell[11].innerHTML = '38';  cell[11].id = 'CellCrystal38';
      cell[12].innerHTML = '43';  cell[12].id = 'CellCrystal43';
      cell[13].innerHTML = '42';  cell[13].id = 'CellCrystal42';
      cell[14].innerHTML = '47';  cell[14].id = 'CellCrystal47';
      cell[15].innerHTML = '46';  cell[15].id = 'CellCrystal46';
      
      var row = document.getElementById("MapTable").insertRow(4); 
      for(var i=0; i<16; i++){
        cell[i] = row.insertCell(i);
      }
      cell[2].innerHTML = '52';   cell[2].id = 'CellCrystal52'; 
      cell[3].innerHTML = '49';   cell[3].id = 'CellCrystal49'; 
      cell[6].innerHTML = '56';   cell[6].id = 'CellCrystal56'; 
      cell[7].innerHTML = '53';   cell[7].id = 'CellCrystal53'; 
      cell[10].innerHTML = '60';  cell[10].id = 'CellCrystal60';
      cell[11].innerHTML = '57';  cell[11].id = 'CellCrystal57';
      cell[14].innerHTML = '64';  cell[14].id = 'CellCrystal64';
      cell[15].innerHTML = '61';  cell[15].id = 'CellCrystal61';
      
      var row = document.getElementById("MapTable").insertRow(5); 
      for(var i=0; i<16; i++){
        cell[i] = row.insertCell(i);
      }
      cell[2].innerHTML = '51';    cell[2].id = 'CellCrystal51'; 
      cell[3].innerHTML = '50';    cell[3].id = 'CellCrystal50'; 
      cell[6].innerHTML = '55';    cell[6].id = 'CellCrystal55'; 
      cell[7].innerHTML = '54';    cell[7].id = 'CellCrystal54'; 
      cell[10].innerHTML = '59';   cell[10].id = 'CellCrystal59'; 
      cell[11].innerHTML = '58';   cell[11].id = 'CellCrystal58'; 
      cell[14].innerHTML = '63';   cell[14].id = 'CellCrystal63'; 
      cell[15].innerHTML = '62';   cell[15].id = 'CellCrystal62'; 

// Add the onclick functions to the Crystal Map
for(i=0; i<document.getElementById("MapTable").rows.length; i++){
  for(j=0; j<document.getElementById("MapTable").rows[i].cells.length; j++){
      if(document.getElementById("MapTable").rows[i].cells[j].innerHTML.length>0){
	  document.getElementById("MapTable").rows[i].cells[j].className = "crystal";
      document.getElementById("MapTable").rows[i].cells[j].onclick = function(e){
         ToggleExcludeCrystal(this.innerHTML);
      };
    }
  }
}

      // Draw the Tile Map
      // 16 columns
      // 8 rows
      // 76 tiles
      var cell = [];
      document.getElementById("MapTileTable").innerHTML = '';
      var row = document.getElementById("MapTileTable").insertRow(0); 
      for(var i=0; i<16; i++){
        cell[i] = row.insertCell(i);
      }
      cell[2].innerHTML = '1';    cell[2].id = 'CellTile1';
	  cell[6].innerHTML = '2';    cell[6].id = 'CellTile2';
	  cell[10].innerHTML = '3';    cell[10].id = 'CellTile3';
	  cell[14].innerHTML = '4';    cell[14].id = 'CellTile4';
      
      var row = document.getElementById("MapTileTable").insertRow(1); 
      for(var i=0; i<16; i++){
        cell[i] = row.insertCell(i);
      }
	  cell[0].innerHTML = '<div id=CellTileTri13></div>'; cell[0].id = 'CellTile13';
      cell[2].innerHTML = '5';    cell[2].id = 'CellTile5';
      cell[3].innerHTML = '6';    cell[3].id = 'CellTile6'; 
      cell[4].innerHTML = '<div id=CellTileTri14></div>';    cell[4].id = 'CellTile14';
      cell[6].innerHTML = '7';    cell[6].id = 'CellTile7'; 
      cell[7].innerHTML = '8';    cell[7].id = 'CellTile8'; 
      cell[8].innerHTML = '<div id=CellTileTri15></div>';    cell[8].id = 'CellTile15';
      cell[10].innerHTML = '9';   cell[10].id = 'CellTile9';
      cell[11].innerHTML = '10';  cell[11].id = 'CellTile10';
      cell[12].innerHTML = '<div id=CellTileTri16></div>';    cell[12].id = 'CellTile16';
      cell[14].innerHTML = '11';  cell[14].id = 'CellTile11';
      cell[15].innerHTML = '12';  cell[15].id = 'CellTile12';
	  row.deleteCell(13);
	  row.deleteCell(9);
	  row.deleteCell(5); 
	  row.deleteCell(1);
      
      var row = document.getElementById("MapTileTable").insertRow(2); 
      for(var i=0; i<16; i++){
        cell[i] = row.insertCell(i);
      }
	  
      cell[2].innerHTML = '17';    cell[2].id = 'CellTile17'; 
      cell[3].innerHTML = '18';    cell[3].id = 'CellTile18'; 
      cell[6].innerHTML = '19';    cell[6].id = 'CellTile19'; 
      cell[7].innerHTML = '20';    cell[7].id = 'CellTile20'; 
      cell[10].innerHTML = '21';  cell[10].id = 'CellTile21';
      cell[11].innerHTML = '22';  cell[11].id = 'CellTile22';
      cell[14].innerHTML = '23';  cell[14].id = 'CellTile23';
      cell[15].innerHTML = '24';  cell[15].id = 'CellTile24';
	  row.deleteCell(13);
	  row.deleteCell(12);
	  row.deleteCell(9);
	  row.deleteCell(8);
	  row.deleteCell(5);
	  row.deleteCell(4);
	  row.deleteCell(1);
	  row.deleteCell(0);
      
      var row = document.getElementById("MapTileTable").insertRow(3); 
      for(var i=0; i<16; i++){
        cell[i] = row.insertCell(i);
      }
      cell[0].innerHTML = '25';   cell[0].id = 'CellTile25';
      cell[1].innerHTML = '26';   cell[1].id = 'CellTile26';
      cell[2].innerHTML = '27';   cell[2].id = 'CellTile27';
      cell[3].innerHTML = '28';   cell[3].id = 'CellTile28';
      cell[4].innerHTML = '29';   cell[4].id = 'CellTile29';
      cell[5].innerHTML = '30';   cell[5].id = 'CellTile30';
      cell[6].innerHTML = '31';   cell[6].id = 'CellTile31';
      cell[7].innerHTML = '32';   cell[7].id = 'CellTile32';
      cell[8].innerHTML = '33';   cell[8].id = 'CellTile33';
      cell[9].innerHTML = '34';   cell[9].id = 'CellTile34';
      cell[10].innerHTML = '35';  cell[10].id = 'CellTile35';
      cell[11].innerHTML = '36';  cell[11].id = 'CellTile36'; 
      cell[12].innerHTML = '37';  cell[12].id = 'CellTile37';
      cell[13].innerHTML = '38';  cell[13].id = 'CellTile38';
      cell[14].innerHTML = '39';  cell[14].id = 'CellTile39';
      cell[15].innerHTML = '40';  cell[15].id = 'CellTile40';
      
      var row = document.getElementById("MapTileTable").insertRow(4); 
      for(var i=0; i<16; i++){
        cell[i] = row.insertCell(i);
      }
      cell[0].innerHTML = '41';   cell[0].id = 'CellTile41';
      cell[1].innerHTML = '42';   cell[1].id = 'CellTile42';
      cell[2].innerHTML = '43';   cell[2].id = 'CellTile43';
      cell[3].innerHTML = '44';   cell[3].id = 'CellTile44';
      cell[4].innerHTML = '45';   cell[4].id = 'CellTile45';
      cell[5].innerHTML = '46';   cell[5].id = 'CellTile46';
      cell[6].innerHTML = '47';   cell[6].id = 'CellTile47';
      cell[7].innerHTML = '48';   cell[7].id = 'CellTile48';
      cell[8].innerHTML = '49';   cell[8].id = 'CellTile49';
      cell[9].innerHTML = '50';   cell[9].id = 'CellTile50';
      cell[10].innerHTML = '51';  cell[10].id = 'CellTile51';
      cell[11].innerHTML = '52';  cell[11].id = 'CellTile52';
      cell[12].innerHTML = '53';  cell[12].id = 'CellTile53';
      cell[13].innerHTML = '54';  cell[13].id = 'CellTile54';
      cell[14].innerHTML = '55';  cell[14].id = 'CellTile55';
      cell[15].innerHTML = '56';  cell[15].id = 'CellTile56';
      
      var row = document.getElementById("MapTileTable").insertRow(5); 
      for(var i=0; i<16; i++){
        cell[i] = row.insertCell(i);
      }
      cell[0].innerHTML = '<div id=CellTileTri65></div>';    cell[0].id = 'CellTile65';
      cell[2].innerHTML = '57';   cell[2].id = 'CellTile57'; 
      cell[3].innerHTML = '58';   cell[3].id = 'CellTile58'; 
      cell[4].innerHTML = '<div id=CellTileTri66></div>';    cell[4].id = 'CellTile66';  
      cell[6].innerHTML = '59';   cell[6].id = 'CellTile59'; 
      cell[7].innerHTML = '60';   cell[7].id = 'CellTile60'; 
      cell[8].innerHTML = '<div id=CellTileTri67></div>';    cell[8].id = 'CellTile67'; 
      cell[10].innerHTML = '61';  cell[10].id = 'CellTile61';
      cell[11].innerHTML = '62';  cell[11].id = 'CellTile62';
      cell[12].innerHTML = '<div id=CellTileTri68></div>';    cell[12].id = 'CellTile68'; 
      cell[14].innerHTML = '63';  cell[14].id = 'CellTile63';
      cell[15].innerHTML = '64';  cell[15].id = 'CellTile64';
	  row.deleteCell(13);
	  row.deleteCell(9);
	  row.deleteCell(5); 
	  row.deleteCell(1);
      
      var row = document.getElementById("MapTileTable").insertRow(6); 
      for(var i=0; i<16; i++){
        cell[i] = row.insertCell(i);
      } 
      cell[2].innerHTML = '69';    cell[2].id = 'CellTile69'; 
      cell[3].innerHTML = '70';    cell[3].id = 'CellTile70';
      cell[6].innerHTML = '71';    cell[6].id = 'CellTile71'; 
      cell[7].innerHTML = '72';    cell[7].id = 'CellTile72'; 
      cell[10].innerHTML = '73';   cell[10].id = 'CellTile73'; 
      cell[11].innerHTML = '74';   cell[11].id = 'CellTile74'; 
      cell[14].innerHTML = '75';   cell[14].id = 'CellTile75'; 
      cell[15].innerHTML = '76';   cell[15].id = 'CellTile76';
	  row.deleteCell(13);
	  row.deleteCell(12);
	  row.deleteCell(9);
	  row.deleteCell(8);
	  row.deleteCell(5);
	  row.deleteCell(4);
	  row.deleteCell(1);
	  row.deleteCell(0); 

// Add the onclick functions to the Tile Map
for(j=1; j<=NumTiles; j++){
    document.getElementById('CellTile'+j).className = "tile";
    document.getElementById('CellTile'+j).onclick = function(e){ ToggleExcludeTile(this.innerHTML); };
}
	  
	  // Change the triangle divs
	  for(i=13; i<17; i++){
	  document.getElementById("CellTile"+i).colSpan = '2';
	  document.getElementById("CellTile"+i).rowSpan = '2';
	  document.getElementById("CellTile"+i).className = "gap";
	  document.getElementById('CellTile'+i).onclick = function(e){ ToggleExcludeTile(this.id.slice(-2)); };
	  document.getElementById("CellTileTri"+i).className = "tiletriangleDS";
	  document.getElementById("CellTileTri"+i).innerHTML = '<p id=CellTileTriP'+i+'>'+i+'</p>';
	  document.getElementById('CellTileTri'+i).onclick = function(e){ ToggleExcludeTile(this.id.slice(-2)); };
	  document.getElementById('CellTileTriP'+i).onclick = function(e){ ToggleExcludeTile(this.id.slice(-2)); };
	  }
	  for(i=65; i<69; i++){
	  document.getElementById("CellTile"+i).colSpan = '2';
	  document.getElementById("CellTile"+i).rowSpan = '2';
	  document.getElementById("CellTile"+i).className = "gap";
	  document.getElementById('CellTile'+i).onclick = function(e){ ToggleExcludeTile(this.id.slice(-2)); };
	  document.getElementById("CellTileTri"+i).className = "tiletriangleUS";
	  document.getElementById("CellTileTri"+i).innerHTML = '<p id=CellTileTriP'+i+'>'+i+'</p>';
	  document.getElementById('CellTileTri'+i).onclick = function(e){ ToggleExcludeTile(this.id.slice(-2)); };
	  document.getElementById('CellTileTriP'+i).onclick = function(e){ ToggleExcludeTile(this.id.slice(-2)); };
	  }
	  


      // Set up the drop-down select
sel = document.getElementById("crystalSelector"); 
for(i=0; i<NumCrystals; i++){
       var opt = document.createElement("option");
       opt.value = i;
       opt.text = 'Crystal '+(i+1)+', Clover '+(Math.floor(i/4)+1)+', '+CloverLocation[Math.floor(i/16)]; 
       sel.appendChild(opt);
    }
sel = document.getElementById("tileSelector"); 
for(i=0; i<NumTiles; i++){
       var opt = document.createElement("option");
       opt.value = i;
       opt.text = 'Tile '+(i+1); 
       sel.appendChild(opt);
    }
      
      //Draw initial Tables
      PlotTables();
      
      }// End of initialSetup()

function PlotTables() {

      //Decide which table is selected
      var whichTable = document.getElementById("tableSelector").value;

      // Set the angles for this distance
      SetupAngles();

      switch(whichTable)
      {
      case "crystals" : PlotCrystalsTable(); break; 
      case "tiles" : PlotTilesTable(); break; 
      case "combinationsCrystal" : PlotCombinationsCrystalTable(); break;
      case "combinationsTile" : PlotCombinationsTileTable(); break;
      case "angles" : PlotAnglesTable(); break; 
      case "anglesComp" : PlotAnglesCompositionTable(); break; 
      }
      
      }
      
function SetupAngles() {

      var CrystalDistance = document.getElementById("distanceSelector").value;
      
      if(CrystalDistance == "145"){
      
	  CrystalTheta = [// 145mm distance
	      37.8867847	,
53.1854474	,
53.1854474	,
37.8867847	,
37.8867847	,
53.1854474	,
53.1854474	,
37.8867847	,
37.8867847	,
53.1854474	,
53.1854474	,
37.8867847	,
37.8867847	,
53.1854474	,
53.1854474	,
37.8867847	,
82.27899751	,
97.72100249	,
97.72100249	,
82.27899751	,
82.27899751	,
97.72100249	,
97.72100249	,
82.27899751	,
82.27899751	,
97.72100249	,
97.72100249	,
82.27899751	,
82.27899751	,
97.72100249	,
97.72100249	,
82.27899751	,
82.27899751	,
97.72100249	,
97.72100249	,
82.27899751	,
82.27899751	,
97.72100249	,
97.72100249	,
82.27899751	,
82.27899751	,
97.72100249	,
97.72100249	,
82.27899751	,
82.27899751	,
97.72100249	,
97.72100249	,
82.27899751	,
126.8145526	,
142.1132153	,
142.1132153	,
126.8145526	,
126.8145526	,
142.1132153	,
142.1132153	,
126.8145526	,
126.8145526	,
142.1132153	,
142.1132153	,
126.8145526	,
126.8145526	,
142.1132153	,
142.1132153	,
126.8145526	
];
	  CrystalPhi = [// 145mm distance
	      80.13699842	,
77.16081987	,
57.83918013	,
54.86300158	,
170.1369984	,
167.1608199	,
147.8391801	,
144.8630016	,
260.1369984	,
257.1608199	,
237.8391801	,
234.8630016	,
350.1369984	,
347.1608199	,
327.8391801	,
324.8630016	,
30.29207808	,
30.29207808	,
14.70792192	,
14.70792192	,
75.29207808	,
75.29207808	,
59.70792192	,
59.70792192	,
120.2920781	,
120.2920781	,
104.7079219	,
104.7079219	,
165.2920781	,
165.2920781	,
149.7079219	,
149.7079219	,
210.2920781	,
210.2920781	,
194.7079219	,
194.7079219	,
255.2920781	,
255.2920781	,
239.7079219	,
239.7079219	,
300.2920781	,
300.2920781	,
284.7079219	,
284.7079219	,
345.2920781	,
345.2920781	,
329.7079219	,
329.7079219	,
77.16081987	,
80.13699842	,
54.86300158	,
57.83918013	,
167.1608199	,
170.1369984	,
144.8630016	,
147.8391801	,
257.1608199	,
260.1369984	,
234.8630016	,
237.8391801	,
347.1608199	,
350.1369984	,
324.8630016	,
327.8391801	
];
      }
      else{
      // 110mm distance
	  CrystalTheta = [// 110mm distance
	      36.5419172	,
55.06797108	,
55.06797108	,
36.5419172	,
36.5419172	,
55.06797108	,
55.06797108	,
36.5419172	,
36.5419172	,
55.06797108	,
55.06797108	,
36.5419172	,
36.5419172	,
55.06797108	,
55.06797108	,
36.5419172	,
80.60659389	,
99.39340611	,
99.39340611	,
80.60659389	,
80.60659389	,
99.39340611	,
99.39340611	,
80.60659389	,
80.60659389	,
99.39340611	,
99.39340611	,
80.60659389	,
80.60659389	,
99.39340611	,
99.39340611	,
80.60659389	,
80.60659389	,
99.39340611	,
99.39340611	,
80.60659389	,
80.60659389	,
99.39340611	,
99.39340611	,
80.60659389	,
80.60659389	,
99.39340611	,
99.39340611	,
80.60659389	,
80.60659389	,
99.39340611	,
99.39340611	,
80.60659389	,
124.9320289	,
143.4580828	,
143.4580828	,
124.9320289	,
124.9320289	,
143.4580828	,
143.4580828	,
124.9320289	,
124.9320289	,
143.4580828	,
143.4580828	,
124.9320289	,
124.9320289	,
143.4580828	,
143.4580828	,
124.9320289
];
	  CrystalPhi = [// 110mm distance
	      83.40942207	,
78.98318538	,
56.01681462	,
51.59057793	,
173.4094221	,
168.9831854	,
146.0168146	,
141.5905779	,
263.4094221	,
258.9831854	,
236.0168146	,
231.5905779	,
353.4094221	,
348.9831854	,
326.0168146	,
321.5905779	,
32.02225501	,
32.02225501	,
12.97774499	,
12.97774499	,
77.02225501	,
77.02225501	,
57.97774499	,
57.97774499	,
122.022255	,
122.022255	,
102.977745	,
102.977745	,
167.022255	,
167.022255	,
147.977745	,
147.977745	,
212.022255	,
212.022255	,
192.977745	,
192.977745	,
257.022255	,
257.022255	,
237.977745	,
237.977745	,
302.022255	,
302.022255	,
282.977745	,
282.977745	,
347.022255	,
347.022255	,
327.977745	,
327.977745	,
78.98318538	,
83.40942207	,
51.59057793	,
56.01681462	,
168.9831854	,
173.4094221	,
141.5905779	,
146.0168146	,
258.9831854	,
263.4094221	,
231.5905779	,
236.0168146	,
348.9831854	,
353.4094221	,
321.5905779	,
326.0168146
];
      }


    TileTheta = [// ARIES Tiles
	9.39340611,
	9.39340611,
	9.39340611,
	9.39340611,
	
	36.5419172	, // 5
	36.5419172	,
	36.5419172	,
	36.5419172	,
	36.5419172	,
	36.5419172	,
	36.5419172	,
	36.5419172	, // 12
	
	54.73561032,	// 13 Triangle
	54.73561032,	// 14 Triangle
	54.73561032,	// 15 Triangle
	54.73561032,	// 16 Triangle
	
	55.06797108	,
	55.06797108	,
	55.06797108	,
	55.06797108	,
	55.06797108	,
	55.06797108	,
	55.06797108	,
	55.06797108	,
	
	80.60659389	,
	80.60659389	,
	80.60659389	,
	80.60659389	,
	80.60659389	,
	80.60659389	,
	80.60659389	,
	80.60659389	,
	80.60659389	,
	80.60659389	,
	80.60659389	,
	80.60659389	,
	80.60659389	,
	80.60659389	,
	80.60659389	,
	80.60659389	,

	99.39340611	,
	99.39340611	,
	99.39340611	,
	99.39340611	,
	99.39340611	,
	99.39340611	,
	99.39340611	,
	99.39340611	,
	99.39340611	,
	99.39340611	,
	99.39340611	,
	99.39340611	,
	99.39340611	,
	99.39340611	,
	99.39340611	,
	99.39340611	,
	
	124.9320289	,
	124.9320289	,
	124.9320289	,
	124.9320289	,
	124.9320289	,
	124.9320289     ,
	124.9320289	,
	124.9320289	,
	
	125.2643897,	// 65 triangle
	125.2643897,	// 66 triangle
	125.2643897,	// 67 triangle
	125.2643897,	// 68 triangle
	
	143.4580828	,
	143.4580828	,
	143.4580828	,
	143.4580828	,
	143.4580828	,
	143.4580828	,
	143.4580828	,
	143.4580828	
];
    TilePhi = [// ARIES tiles
	45.00000000,
	135.00000000,
	225.00000000,
	315.00000000,
	
	51.59057793	,
	83.40942207	,  // 5
	141.5905779	, // 12
	173.4094221	,
	231.5905779	,	
	263.4094221	, // 17
	321.5905779	,
	353.4094221	,
	
	22.5,	// 13 Triangle
	112.5,	// 14 Triangle
	202.5,	// 15 Triangle
	292.5,	// 16 Triangle
	
	56.01681462	,
	78.98318538	,
	146.0168146	,
	168.9831854	,
	236.0168146	,
	258.9831854	,
	326.0168146	,
	348.9831854	,
	
	12.97774499	,
	32.02225501	,
	57.97774499	,
	77.02225501	,
	102.977745	,
	122.022255	,
	147.977745	,
	167.022255	,
	192.977745	,
	212.022255	,
	237.977745	,
	257.022255	,
	282.977745	,
	302.022255	,
	327.977745	,
	347.022255	,
	
	12.97774499	,
	32.02225501	,
	57.97774499	,
	77.02225501	,
	102.977745	,
	122.022255	,
	147.977745	,
	167.022255	,
	192.977745	,
	212.022255	,
	237.977745	,
	257.022255	,
	282.977745	,
	302.022255	,
	327.977745	,
	347.022255	,
	
	56.01681462	,
	78.98318538	,
	146.0168146	,
	168.9831854	,
	236.0168146	,
	258.9831854	,
	326.0168146	,
	348.9831854	,
	
	22.5,	// 65 Triangle
	112.5,	// 66 Triangle
	202.5,	// 67 Triangle
	292.5,	// 68 Triangle

	51.59057793	,
	83.40942207	,  // 5
	141.5905779	, // 12
	173.4094221	,
	231.5905779	,	
	263.4094221	, // 17
	321.5905779	,
	353.4094221	,
		
];
    
}//End of SetupAngles()


      function PlotCrystalsTable() {

  document.getElementById("TableTitle").innerHTML = 'GRIFFIN HPGe Crystal Angles:';

      // Crystal Angles Table
	  document.getElementById("MultiTable").innerHTML = '';
var row = document.getElementById("MultiTable").insertRow(0); 
var cell1 = row.insertCell(0); 
var cell2 = row.insertCell(1); 
var cell3 = row.insertCell(2); 
var cell4 = row.insertCell(3); 
cell1.innerHTML = 'Crystal'; 
cell2.innerHTML = 'Clover'; 
cell3.innerHTML = 'Theta'; 
cell4.innerHTML = 'Phi';
      
for(var num=0; num<NumCrystals; num++){
var row = document.getElementById("MultiTable").insertRow(document.getElementById("MultiTable").rows.length); 
row.id = (num+1);
var cell1 = row.insertCell(0); 
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2); 
var cell4 = row.insertCell(3); 
cell1.innerHTML = (num+1); 
cell2.innerHTML = (Math.floor(num/4)+1)+', '+CloverLocation[Math.floor(num/16)];
cell3.innerHTML = CrystalTheta[num].toFixed(1); 
cell4.innerHTML = CrystalPhi[num].toFixed(1);

row.addEventListener('mouseover', function(e){
  if(ExcludedCrystalsList[parseInt(this.id)]==1){ color="red"; }else{ color="yellow"; }
  this.style.backgroundColor = color; 
  document.getElementById('CellCrystal'+(this.id)).style.backgroundColor = color;
  });
row.addEventListener('mouseout', function(e){
  if(ExcludedCrystalsList[parseInt(this.id)]==1){ color="red"; }else{ color="white"; }
  this.style.backgroundColor = "white"; 
  document.getElementById('CellCrystal'+(this.id)).style.backgroundColor = color;
  });
}

}

      function PlotTilesTable() {

  document.getElementById("TableTitle").innerHTML = 'ARIES scintillator tile Angles:';

      // Crystal Angles Table
	  document.getElementById("MultiTable").innerHTML = '';
var row = document.getElementById("MultiTable").insertRow(0); 
var cell1 = row.insertCell(0); 
var cell2 = row.insertCell(1); 
var cell3 = row.insertCell(2); 
var cell4 = row.insertCell(3); 
cell1.innerHTML = 'Tile'; 
cell2.innerHTML = 'Shape'; 
cell3.innerHTML = 'Theta'; 
cell4.innerHTML = 'Phi';
      
for(var num=0; num<NumTiles; num++){
var row = document.getElementById("MultiTable").insertRow(document.getElementById("MultiTable").rows.length); 
row.id = (num+1);
var cell1 = row.insertCell(0); 
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2); 
var cell4 = row.insertCell(3); 
    cell1.innerHTML = (num+1);
    if((num>11 && num<16) || (num>63 && num<68)){ cell2.innerHTML = 'Triangle'; }
    else{ cell2.innerHTML = 'Square'; }
cell3.innerHTML = TileTheta[num].toFixed(1); 
    cell4.innerHTML = TilePhi[num].toFixed(1);
    
    row.addEventListener('mouseover', function(e){
  if(ExcludedTilesList[parseInt(this.id)]==1){ color="red"; }else{ color="yellow"; }
  this.style.backgroundColor = color;
  HighlightTile(parseInt(this.id));
  });
row.addEventListener('mouseout', function(e){
  this.style.backgroundColor = "white"; 
  unHighlightTile(parseInt(this.id));
  });
}

}

      function PlotCombinationsCrystalTable() {

  document.getElementById("TableTitle").innerHTML = 'GRIFFIN-ARIES Combinations:';

      // Crystal Combinations Table
document.getElementById("MultiTable").innerHTML = '';
var row = document.getElementById("MultiTable").insertRow(0); 
var cell1 = row.insertCell(0); 
var cell2 = row.insertCell(1); 
var cell3 = row.insertCell(2); 
var cell4 = row.insertCell(3); 
var cell5 = row.insertCell(4); 
var cell6 = row.insertCell(5);  
var cell7 = row.insertCell(6);  
var cell8 = row.insertCell(7);  
var cell9 = row.insertCell(8); 
var cell10 = row.insertCell(9); 
var cell11 = row.insertCell(10); 
cell1.innerHTML = 'Crystal'; 
cell2.innerHTML = 'Clover'; 
cell3.innerHTML = 'Theta'; 
cell4.innerHTML = 'Phi'; 
cell5.innerHTML = 'PSC'; 
cell6.innerHTML = 'Tile'; 
cell7.innerHTML = 'Shape'; 
cell8.innerHTML = 'Theta'; 
cell9.innerHTML = 'Phi';  
cell10.innerHTML = 'PSC';
cell11.innerHTML = 'Angular Difference'; 

selectedCrystal = parseInt(document.getElementById("crystalSelector").value);
for(var num=0; num<NumTiles; num++){
var row = document.getElementById("MultiTable").insertRow(document.getElementById("MultiTable").rows.length);
row.id = (num+1);
var cell1 = row.insertCell(0); 
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2); 
var cell4 = row.insertCell(3);  
var cell5 = row.insertCell(4); 
var cell6 = row.insertCell(5);  
var cell7 = row.insertCell(6);  
var cell8 = row.insertCell(7);  
var cell9 = row.insertCell(8); 
var cell10 = row.insertCell(9); 
var cell11 = row.insertCell(10); 
cell1.innerHTML = (selectedCrystal+1); 
cell2.innerHTML = (Math.floor((selectedCrystal)/4)+1)+', '+CloverLocation[Math.floor((selectedCrystal)/16)];
cell3.innerHTML = CrystalTheta[selectedCrystal].toFixed(1); 
    cell4.innerHTML = CrystalPhi[selectedCrystal].toFixed(1);
    var P=Math.floor(selectedCrystal/32);
    var S=Math.floor(((selectedCrystal%32)/4))*2;
cell5.innerHTML = P+'-'+S;
cell6.innerHTML = (num+1);
row.addEventListener('mouseover', function(e){
  if(ExcludedTilesList[parseInt(this.id)]==1){ color="red"; }else{ color="yellow"; }
  this.style.backgroundColor = color; 
  this.cells[0].style.backgroundColor = "green"; 
  document.getElementById('CellCrystal'+(selectedCrystal+1)).style.backgroundColor = "green"; 
  HighlightTile(parseInt(this.id));
  });
row.addEventListener('mouseout', function(e){
  if(ExcludedTilesList[parseInt(this.id)]==1){ color="red"; }else{ color="white"; }
  this.style.backgroundColor = "white"; 
  this.cells[0].style.backgroundColor = "white"; 
  document.getElementById('CellCrystal'+(selectedCrystal+1)).style.backgroundColor = "white"; 
  unHighlightTile(parseInt(this.id));
  });
    if((num>11 && num<16) || (num>63 && num<68)){ cell7.innerHTML = 'Triangle'; }else{ cell7.innerHTML = 'Square'; }
cell8.innerHTML = TileTheta[num].toFixed(1); 
cell9.innerHTML = TilePhi[num].toFixed(1);
cell10.innerHTML = '---';
cell11.innerHTML = CalculateGRIFFINARIESAngularDifference(selectedCrystal,num);

}
      }


      function PlotCombinationsTileTable() {

  document.getElementById("TableTitle").innerHTML = 'ARIES-GRIFFIN Combinations:';

      // Crystal Combinations Table
document.getElementById("MultiTable").innerHTML = '';
var row = document.getElementById("MultiTable").insertRow(0); 
var cell1 = row.insertCell(0); 
var cell2 = row.insertCell(1); 
var cell3 = row.insertCell(2); 
var cell4 = row.insertCell(3); 
var cell5 = row.insertCell(4); 
var cell6 = row.insertCell(5);  
var cell7 = row.insertCell(6);  
var cell8 = row.insertCell(7);  
var cell9 = row.insertCell(8); 
var cell10 = row.insertCell(9); 
var cell11 = row.insertCell(10); 
cell1.innerHTML = 'Tile'; 
cell2.innerHTML = 'Shape'; 
cell3.innerHTML = 'Theta'; 
cell4.innerHTML = 'Phi'; 
cell5.innerHTML = 'PSC';
	  
cell6.innerHTML = 'Crystal'; 
cell7.innerHTML = 'Clover'; 
cell8.innerHTML = 'Theta'; 
cell9.innerHTML = 'Phi';  
cell10.innerHTML = 'PSC';
cell11.innerHTML = 'Angular Difference'; 

selectedTile = parseInt(document.getElementById("tileSelector").value);
for(var num=0; num<NumCrystals; num++){
var row = document.getElementById("MultiTable").insertRow(document.getElementById("MultiTable").rows.length);
row.id = (num+1);
var cell1 = row.insertCell(0); 
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2); 
var cell4 = row.insertCell(3);  
var cell5 = row.insertCell(4); 
var cell6 = row.insertCell(5);  
var cell7 = row.insertCell(6);  
var cell8 = row.insertCell(7);  
var cell9 = row.insertCell(8); 
var cell10 = row.insertCell(9); 
var cell11 = row.insertCell(10); 
cell1.innerHTML = (selectedTile+1); 
        if((selectedTile>11 && selectedTile<16) || (selectedTile>63 && selectedTile<68)){ cell2.innerHTML = 'Triangle'; }else{ cell2.innerHTML = 'Square'; }
cell3.innerHTML = TileTheta[selectedTile].toFixed(1); 
    cell4.innerHTML = TilePhi[selectedTile].toFixed(1);
cell5.innerHTML = '---';
    cell6.innerHTML = (num+1);

    
row.addEventListener('mouseover', function(e){
  if(ExcludedCrystalsList[parseInt(this.id)]==1){ color="red"; }else{ color="yellow"; }
  this.style.backgroundColor = color; 
  this.cells[0].style.backgroundColor = "green"; 
  SelectTile(parseInt(selectedTile+1));
  document.getElementById('CellCrystal'+(this.id)).style.backgroundColor = color;
  });
row.addEventListener('mouseout', function(e){
  if(ExcludedCrystalsList[parseInt(this.id)]==1){ color="red"; }else{ color="white"; }
  this.style.backgroundColor = "white"; 
  this.cells[0].style.backgroundColor = "white"; 
  unSelectTile(parseInt(selectedTile+1));
  document.getElementById('CellCrystal'+(this.id)).style.backgroundColor = color;
  });
    
    cell7.innerHTML = (Math.floor((num)/4)+1)+', '+CloverLocation[Math.floor((num)/16)];
cell8.innerHTML = CrystalTheta[num].toFixed(1); 
cell9.innerHTML = CrystalPhi[num].toFixed(1);
    var P=Math.floor(num/32);
    var S=Math.floor(((num%32)/4))*2;
cell10.innerHTML = P+'-'+S;
cell11.innerHTML = CalculateGRIFFINARIESAngularDifference(num,selectedTile);

}
}

      function PlotAnglesTable() {

	  document.getElementById("TableTitle").innerHTML = 'Angular bins:';
	  
	  // Zero the angular bins JSON object
	  AngularBinsAngle = []; AngularBinsWeight = [];
	  // Fill the angular bins JSON object
	  for(i=0; i<NumCrystals; i++){
	      if(ExcludedCrystalsList[i+1]==1){ continue; }
	      for(j=0; j<NumTiles; j++){
	      if(ExcludedTilesList[j+1]==1){ continue; }

		  // Calculate the angular difference for this pair of crystals.
		  // The function returns 3 decimal place precision
		  thisAngle = CalculateGRIFFINARIESAngularDifference(i,j);
		  if(isNaN(thisAngle)){
		      thisAngle = 0.0;
		  }
		  
		//  console.log('i='+i+', j='+j+', Ang Diff='+thisAngle);

		  // found is zero until the angular bin is found, if it is still zero then a new entry is created.
		  var found=0;

		  // If no angular bins have yet been created, create the first one.
		  if(AngularBinsAngle.length<1){
		      AngularBinsAngle[0] = thisAngle;
		      AngularBinsWeight[0] = 1;
		     // console.log('First ever entry - create for first time!!!');
		      continue;
		  }

		  // Search through the angular bins already identified to see if there is a match for the current one.
		  for(k=0; k<AngularBinsAngle.length; k++){
		      if((thisAngle >= parseFloat(AngularBinsAngle[k] - 0.001)) && (thisAngle <= parseFloat(AngularBinsAngle[k] + 0.001))){
			  AngularBinsWeight[k]++;
			  found=1;
			 // console.log('Found angle ('+thisAngle+') for i='+i+',j='+j+' in angular bin['+k+'] ('+AngularBinsAngle[k]+') with weight '+AngularBinsWeight[k]);
			  break;
		      }
		  }

		  // If found is still zero at this point then an angular bin matching the
		  // current value was not found and we need to create a new one.
		  if(!found){
		      AngularBinsAngle[AngularBinsAngle.length] = thisAngle;
		      AngularBinsWeight[AngularBinsWeight.length] = 1;
		     // console.log('Create new angular bin['+AngularBinsWeight.length+'] ('+thisAngle+')');
		  }
	      }
	  }

	  // Manually sort the angular bin and weight arrays to maintain the same order.
	  // One by one move boundary of unsorted subarray
	  for(i = 0; i < AngularBinsAngle.length - 1; i++) {
	      
              // Find the minimum element in unsorted array
              var min_idx = i;
              for(j = i + 1; j < AngularBinsAngle.length; j++){
		  if(parseFloat(AngularBinsAngle[j]) < parseFloat(AngularBinsAngle[min_idx])){
                      min_idx = j;
		  }
	      }
              // Swap the found minimum element with the first element for both angles and weights arrays
	      var temp = AngularBinsAngle[min_idx];
	      AngularBinsAngle[min_idx] = AngularBinsAngle[i];
	      AngularBinsAngle[i] = parseFloat(temp);
              temp = AngularBinsWeight[min_idx];
	      AngularBinsWeight[min_idx] = AngularBinsWeight[i];
	      AngularBinsWeight[i] = parseFloat(temp);
	  }
	  
	  
	  // Plot the Angular Bins table
	  document.getElementById("MultiTable").innerHTML = '';
	  var row = document.getElementById("MultiTable").insertRow(0); 
	  var cell1 = row.insertCell(0); 
	  var cell2 = row.insertCell(1); 
	  var cell3 = row.insertCell(2); 
	  cell1.innerHTML = 'Index'; 
	  cell2.innerHTML = 'Angular Difference'; 
	  cell3.innerHTML = 'Number of Pairs';
	  
	  for(var num=0; num<AngularBinsAngle.length; num++){
	      var thisRowNum = document.getElementById("MultiTable").rows.length;
	      var row = document.getElementById("MultiTable").insertRow(thisRowNum);
	      var cell1 = row.insertCell(0); 
	      var cell2 = row.insertCell(1); 
	      var cell3 = row.insertCell(2); 
	      cell1.innerHTML = thisRowNum; 
	      cell2.innerHTML = AngularBinsAngle[num]; 
	      cell3.innerHTML = AngularBinsWeight[num];
	      row.addEventListener('mouseover', function(e){
		  this.style.backgroundColor = "yellow";
	      });
	      row.addEventListener('mouseout', function(e){
		  this.style.backgroundColor = "white";
	      });
	  }
	  
	 // console.log(AngularBinsAngle,AngularBinsWeight);	  
	  
      }//End of PlotTables

function ToggleExcludeCrystal(ThisCrystalID) {

crystalID = parseInt(ThisCrystalID);

if(ExcludedCrystalsList[crystalID]==0){
  document.getElementById('CellCrystal'+(crystalID)).style.backgroundColor = "red";
  ExcludedCrystalsList[crystalID]=1;
}else{
  document.getElementById('CellCrystal'+(crystalID)).style.backgroundColor = "white"; 
  ExcludedCrystalsList[crystalID]=0;
}

// Redraw whichever table is displayed
PlotTables()

}

function ToggleExcludeTile(ThisTileID) {

tileID = parseInt(ThisTileID);
    
  switch(tileID){
	// Special treatment for triangle positions
  case 13:
  case 14:
  case 15:
  case 16:
      if(ExcludedTilesList[tileID]==0){
	  document.getElementById('CellTileTri'+(tileID)).className = "tiletriangleDS-excluded";
	  ExcludedTilesList[tileID]=1;
      }else{
	  document.getElementById('CellTileTri'+(tileID)).className = "tiletriangleDS"; 
	  ExcludedTilesList[tileID]=0;
      }
      break;
  case 65:
  case 66:
  case 67:
  case 68:
      if(ExcludedTilesList[tileID]==0){
	  document.getElementById('CellTileTri'+(tileID)).className = "tiletriangleUS-excluded";
	  ExcludedTilesList[tileID]=1;
      }else{
	  document.getElementById('CellTileTri'+(tileID)).className = "tiletriangleUS";
	  ExcludedTilesList[tileID]=0;
      }
      break;
  default:
      if(ExcludedTilesList[tileID]==0){
	  document.getElementById('CellTile'+(tileID)).style.backgroundColor = "red";
	  ExcludedTilesList[tileID]=1;
      }else{
	  document.getElementById('CellTile'+(tileID)).style.backgroundColor = "white"; 
	  ExcludedTilesList[tileID]=0;
      }
      
}

// Redraw whichever table is displayed
PlotTables()

}


function HighlightTile(ThisTileID) {

    tileID = parseInt(ThisTileID);

    if(ExcludedTilesList[tileID]==1){ return; }
    
  switch(tileID){
	// Special treatment for triangle positions
  case 13:
  case 14:
  case 15:
  case 16:{
      document.getElementById('CellTileTri'+(tileID)).className = "tiletriangleDS-highlighted";
      break;
  }
  case 65:
  case 66:
  case 67:
  case 68:{
      document.getElementById('CellTileTri'+(tileID)).className = "tiletriangleUS-highlighted";
      break;
  }
  default: {
      document.getElementById('CellTile'+(tileID)).style.backgroundColor = "yellow";
     }
  }

}

function unHighlightTile(ThisTileID) {

    tileID = parseInt(ThisTileID);

    if(ExcludedTilesList[tileID]==1){ return; }
    
  switch(tileID){
	// Special treatment for triangle positions
  case 13:
  case 14:
  case 15:
  case 16:
      document.getElementById('CellTileTri'+(tileID)).className = "tiletriangleDS";
      break;
  case 65:
  case 66:
  case 67:
  case 68:
      document.getElementById('CellTileTri'+(tileID)).className = "tiletriangleUS";
      break;
  default:
	  document.getElementById('CellTile'+(tileID)).style.backgroundColor = "white";
      break;
      
  }

}

function SelectTile(ThisTileID) {

    tileID = parseInt(ThisTileID);
    
  switch(tileID){
	// Special treatment for triangle positions
  case 13:
  case 14:
  case 15:
  case 16:
      document.getElementById('CellTileTri'+(tileID)).className = "tiletriangleDS-selected";
      break;
  case 65:
  case 66:
  case 67:
  case 68:
      document.getElementById('CellTileTri'+(tileID)).className = "tiletriangleUS-selected";
      break;
  default:
	  document.getElementById('CellTile'+(tileID)).style.backgroundColor = "green";
      break;
  }

}

function unSelectTile(ThisTileID) {

    tileID = parseInt(ThisTileID);
    
  switch(tileID){
	// Special treatment for triangle positions
  case 13:
  case 14:
  case 15:
  case 16:
      document.getElementById('CellTileTri'+(tileID)).className = "tiletriangleDS";
      break;
  case 65:
  case 66:
  case 67:
  case 68:
      document.getElementById('CellTileTri'+(tileID)).className = "tiletriangleUS";
      break;
  default:
	  document.getElementById('CellTile'+(tileID)).style.backgroundColor = "white";
      break;
  }

}


function CalculateAngularDifference(crystal1,crystal2) {
// Function to calculate the angular difference between two crystals
// ACOS(SIN($F$3)*SIN(F3)*COS($G$3-G3)+COS($F$3)*COS(F3)) /(PI()/180)
 return parseFloat(Math.acos(Math.sin(CrystalTheta[crystal1]*DegToRad) * Math.sin(CrystalTheta[crystal2]*DegToRad) * Math.cos( (CrystalPhi[crystal1]*DegToRad) - (CrystalPhi[crystal2]*DegToRad) ) + (Math.cos(CrystalTheta[crystal1]*DegToRad) * Math.cos(CrystalTheta[crystal2]*DegToRad)))/ RadToDeg).toFixed(3);
}
 
function CalculateGRIFFINAngularDifference(crystal1,crystal2) {
// Function to calculate the angular difference between two crystals
// ACOS(SIN($F$3)*SIN(F3)*COS($G$3-G3)+COS($F$3)*COS(F3)) /(PI()/180)
 return parseFloat(Math.acos(Math.sin(CrystalTheta[crystal1]*DegToRad) * Math.sin(CrystalTheta[crystal2]*DegToRad) * Math.cos( (CrystalPhi[crystal1]*DegToRad) - (CrystalPhi[crystal2]*DegToRad) ) + (Math.cos(CrystalTheta[crystal1]*DegToRad) * Math.cos(CrystalTheta[crystal2]*DegToRad)))/ RadToDeg).toFixed(3);
}
 
function CalculateGRIFFINARIESAngularDifference(crystal,tile) {
// Function to calculate the angular difference between GRIFFIN crystal and ARIES tile
// ACOS(SIN($F$3)*SIN(F3)*COS($G$3-G3)+COS($F$3)*COS(F3)) /(PI()/180)
 return parseFloat(Math.acos(Math.sin(CrystalTheta[crystal]*DegToRad) * Math.sin(TileTheta[tile]*DegToRad) * Math.cos( (CrystalPhi[crystal]*DegToRad) - (TilePhi[tile]*DegToRad) ) + (Math.cos(CrystalTheta[crystal]*DegToRad) * Math.cos(TileTheta[tile]*DegToRad)))/ RadToDeg).toFixed(3);
}
 
