// j = current page number
// i = current row number

var finalArrayResult = [];
function main(){
	var j = 0;
	numberOfPages = 1;
	startMultiplePages(j, numberOfPages);	
}

function startMultiplePages(j, numberOfPages){
	if(j == numberOfPages){
		console.log("sab ho gaya");
		alert("Oh Yeah! Completed!");
		return;				
	}
	$($('.table-pagination__paging').find('li')[j]).click();
	console.log(j);
	setTimeout(function(){logicPart(j, numberOfPages)}, 5000);		
}

function logicPart(j, numberOfPages){
	$all=$('.search-result__tableRow').children('div');
	console.log("size is : "+$all.size());	
	var pageSize =  $all.size();
	var  i = 1;
	getDiamondUtil(pageSize, i, j, numberOfPages);
}

function getDiamondUtil(pageSize, i, j, numberOfPages){
	if(pageSize > i){
		var $cur=$($all[i]);
		$cur.click();
		console.log(i);
		setTimeout(function(){getDiamondInfo($cur, i, j,pageSize, numberOfPages)}, 2);		
	}else{
		startMultiplePages(j+1,numberOfPages );
	}

}

function getDiamondInfo($cur, i, j, pageSize, numberOfPages){
	var rowResult = "";
	var diamondDetail = $cur.find('.flexboxgrid2__col-xs-4');
	var x=$($('.search-result__tableRow')[i]);
	var sizeOfDDetails = x.find('.flexboxgrid2__col-xs-4').size();
	for( var a = 0 ; a < sizeOfDDetails; a++ ){
		//console.log("predata1"+$cur.find('.flexboxgrid2__col-xs-4'));
		var data1 = $(x.find('.flexboxgrid2__col-xs-4')[a]).text();
		rowResult = rowResult+'@'+data1;
	}	

	// diamond lot
	var data2 = $(x.find('.flexboxgrid2__col-xs-7')[0]).text();
	rowResult = rowResult+'@'+ data2;
	
	//var priceDetail = $cur.find('.flexboxgrid2__col-xs-3'); 
	for(var b = 0 ; b < x.find('.flexboxgrid2__col-xs-3').size(); b++){
		var data3 = $(x.find('.flexboxgrid2__col-xs-3')[b]).text();
		rowResult = rowResult+'@'+data3;
	}
	//console.log(rowResult);
	rowResult = rowResult +'\n';
	finalArrayResult.push(rowResult);
	//console.log(rowResult);
	getDiamondUtil(pageSize, i+1, j, numberOfPages );	
}

main();
copy(finalArrayResult);