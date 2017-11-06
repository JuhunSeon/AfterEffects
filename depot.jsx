
function depot(panelObj){

elementWindows = (panelObj instanceof Panel) ? panelObj : new Window('palette', 'DEPOT');
depotBtn = elementWindows.add('button', undefined, 'button');
depotBtn.onClick = function(){	element1()	};

}

function element1(){

var comp = app.project.activeItem;
var layer = comp.layers;
var text = prompt('텍스트를 입력하십시오','','텍스트');

	if(text==null){

		null;

	}else{

		var textLayer = layer.addText(text);
		var textAnchor = textLayer.property("ADBE Transform Group").property("ADBE Anchor Point");
		textAnchor.expression = 't = sourceRectAtTime(time-inPoint, true);\n[t.left+t.width/2, t.top+t.height/2];';

	}

}


depot(this);
(elementWindows instanceof Window) ? elementWindows.show() : elementWindows.layout.layout(true);