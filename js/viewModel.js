//** Binds do Js **//
Date.prototype.getDataFormatada = function(){
	m = parseInt(this.getMonth()) + 1;
	m =  m < 10?"0"+m:m;
	return this.getFullYear() + "-" + m + "-" + this.getDate()
}

Date.prototype.getMYFormatted = function(){
	m = parseInt(this.getMonth()) + 1;
	m =  m < 10?"0"+m:m;
	return m + "/" + this.getFullYear()
}

// Adjusty input Date 

var dateAdjustify = function(){

	var inputDate = document.querySelector('#coneForm input[type=date]')
	
	if(inputDate){
		inputDate.min = new Date().getDataFormatada().replace(/(\d{4}\-\d{2}\-)\d{2}/,"$101")
		inputDate.max = new Date().getDataFormatada()
	}
}

init = function(){
	dateAdjustify();
}

init()



var apiConeBoard = "https://apicone.herokuapp.com/";
//var apiConeBoard = "http://localhost:8080/";

var cone = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAMYUlEQVRoQ9VZC3AU9Rn/dvceuUcuyV2Su4R44RmKNiCgARHRCjpqR61tYaSDtlpMtWV8tVZrLdS31s5AB20dlD6kjlhKLVWq1eCAoAI+AbUSHoE8yONyIbn3Yx/9fXu35wWTgBCF7sx/dm93b/f3+77f/3v8V6D/8034MvFrmnY6ni8LgtD4Zb3nSyGgvvDAZgp3Tw70dNpFQSRPSVmMin1bxSvumjPcRIadgPLcDZ8c6AlMeHvHLpJlWcdrMpno3DNryV/i2SnNXzlpOEkMKwHt6blubbw/2PCfTXToUKAfTr/fRxfMnknC7maPsHBNz3CRGFYC8T9de59lnP9X0XArbd/6MR1q6ybonypHlNLZ004nh6OCUvva7rdd98ziU5PAqoV7JJ9vrGizkWhSiZQocGpEkpNUWSA1niCls2u/bcGKMaccAe1vcy0pW3VCsJgFwsTVB4PXQETDPrtpqbRmiR8sEOatSQ0HiWGTUPSpq39iqvI/DuREYpYAA9eUfgQYtNzavMhxw+onTi0CK6/ZYfJ5J+qWF6WMB9j6KiJRngd0Ap2dHzmuX1V7yhAIBAKFjs0PHJZMgqSDF80gAE+osL5OAETyNkWRlLav3+gYN25c8kRJDIuEura9tNxiSi6ytW4CeBMmLQiwlJT0gAQiY68iseXD20suvX3pKUGgc+emoFpW47a1bSFbx7sMPTOBQUBTMFezElItLoqNnEOp0jPIsue1Fs+sa/0nnUBLS4vbrCaDmsWhx3wx2UuW3iYyYQiJw/BAmpQCN6Xd4yhdUkOa2a5jlnoPauUTpnOoOqHthCXU9c6/71aqJj/IKJiAMfi3qqow/mchtB9SzA/76hvOKfrpy1tPhMEwEFjfolRNqTIIiBxCWUAAbozBANpXL2woum39RSeVQM9LjyWSUxdYDcvnExjSA0DtXHtTpHDRPwtPGoHe+y8cY63y7o2cVU9K2QTkL1GXkOGBoQhYD2wk2yf/oGhnYELp3Rs/PV4SJyShnocufN5WWjxPM1kpWTuXZP90EiSLjoXBD0RASEWpYF8DWfe+qt+XCPauKfnF6/NOCoG+R2d3W1x2DycvwVpIqmcMyRWTSHFVkmJ2kIqEpikKCXKcxGiATN2NZG59h8REbw5vKhQLFt25ofQrJxB49IpKe6HQJmpIVrC6YHORUFCUSWKI/Vo8RFoihLqBa7ZBIhFfQfIOK56x3pv/su94SBy3hAK/u3qVefTEBZb9G2F9B5GtCCRAgGugdJy0WG8egcGhscfiQtHL3nmLL/sqCOQIB55fHFSmLShxvraEJAUljaNEl5G+QedatAcEwlkPDAIN0otcdC/u7Ut4p30zk+Ey2+AuO+JRx+oB4z7ei+vmj/LMuGVZh1xdR1Kojezv/5Uk6Fz3BMd/ANciQV1GLKeBNg1kE9MWUnrkOcjYfXTgXytrpt/yWBPP/zwCRyVyLASMe1Bmkj5aHr7kSfP85ddoVqceNk2aTJaDW8nc8TEJMVie9R/uxr4vU9Dlm9ZcQHL1dEpOnkeqy5e7om5+6tUR8xZfhRMoYXPjqN44GgHd4tlhfuKHUyrnf6PqPtF55vz4tJtyZYMkoYrmHCAnSAjsI6H9UxK69pDW145zSdIsdoCtIKV8PClVk/oBNxiYW7eT2PXicytfbvzlHY+/0YnzzJy9ke+RzzlzMALGeQaP+pgsbz103uyzRruflETRG/RfT0r1WZniDcCNwb+5fOD4ryB8Hq2UyEcjJMPkbn2aKNnX+e7e7htn/GjtBlxn/fHajNFQfE5SQxEwJGNrXDq7fozP/hAQS2okTsE5fyANejcIGB7Q/Q0CDN5IZANOgEFOOvesJruym1sJZd+h8N0133t2BW6N50nqmAgYsuGupGDrr8/59tmjS1bqQgK4ZHOQ+q5fp0NgyxvgjRrIAG6Q+CIELI2vULG8BQS4JRXovT3d9XX1a9fgGYk8SfUjcaQH+DcPHfzltZ6Kv988ZYvJJHr0s2jQo7vaKXrretxhzYFnEkYNZMjneDxg2bCcissPIUywagWSFS343SUNM198+0B7HgkmkCMxEAH+txWj8MMl0++orXLepltfhbbjSYrt7qLUt+4hpfbinAcMAvn6/6IEBITdgpX15JjqI7HYlVkYAIldTYeXnrlw7WP4gaRC3EPznBiQgGF9rsYQ0MlzeNl5610201g9u6IBSbX3UqozQprTTanrniChfGTOC0dOYGMSH5OE8Gzrc3eStHcbWSaMIMv40zJewHtDMbmp5IpnLsFzghi8UmbUJjqJfA/wMdMuwEBNQL7U8lnbJYQd/S6sLsSbgiT3Qo4m1D4+FG7fuYfEqkwZzZsxgQ39D9qN5bESIj1kXvcISZ9C+9hM1aVkm4qFO7yDN3BTzZc+U4fDDgwkFn0+cK4YlABb340xIrVsxmaRLSGiVVRkSjT3ULo7ioxrIwGlg+gdSWrdlURfOxc+K85FHiZwNA8I8TBJuzaQ6fU/ktDHYT+zmWt8VDCxOlMUwgMqpGu+7NlZuNSKwYvC7IVBCbD+mQCXt6f13j/1dacLDgEBIKL04Rgl4AWBM7ALVXS5n0R3JQmFHtLK/KR4TiMFxGRcV7iU1icjmxFhnJNc5DAJnU0k7X6LxI9QBIb6r2Dze2wzx5PZW5wlIFAkEKKi7790IZ7SgtGdJZCbB0dKyCBQxgQaF9U0jB5TCvOzw9Cgp2WKNuIZoh3AK0CgmgS3jwSLLXM9FCQ12EZqoBXHKCVS8PYRi1o5Uw9wIJQXk3MGppwZ8kFkYw/s37pHG/fge/xhhAkwY/bAkAS4KvRgVDVcVbFu1hRfseiEF1hx7IU+eKFLJqmiJuOBIjhL7wFkUvsCOni1GwRwrHEvwNY/lq3YQfaJfjKXIQLpsoV8ogl6Y+17odkvtF+elRBP5NhQBHgSw5wEH1Lln2eX/uaiEmGW9+yRmFS4xEskmFXJQITSMSuZaqaTWFKh5wS+pva0k9p1ECTaQKALBHhljuU6xMbzy+Mi6+hyslbitfweDqHg3fHKTnqtOfTGDzZ0/xxPQIIgbuWMzDzgJOZwwjnAiVF+yUj7uXdNKfx9nSCLlrpRGbdmScjhBCU60SqWjyWpehKaGbSUbP1AC2R0CNUoyuk0e2AQAgAqFCIYuOxk87vJ5MbUw6eoDHiNUpv20LbuXvWR98M/fuVA7E3g6cKIYHAuyBV4AyUyzsIsoxKMiifPdy85v0C+uBoT3zxtDF4IOel/R7EmKySHk5RCaNVM6MgwebH+jwYF/UAUJTVLCNLSN34TgzYDpM1CUrGdrB6HDhzfFDLAYSANhkm/2UQHwlHa1Ce/euOmnnvxT87EWObT5cNV6pCZmGXEQZi94HFZTf4VFxQtnailJvjjcTKN9ZI0xguwAKKv/2c+YCixNKUjKVITWEpMZq1urMpJvOSOusluIgngzUUF+GgDpbJHdeC4Lqsk7ztMSmMXHcRy5I6k/N/6jX23hZJyM3Cw9tn6nMRyIdSwS8ZCn9kpP6Fxj1jqtUv+++pcP6srUM/34jORC8BMo8qQxNxI+xyB+pUnOQNpSsZQgoWzKh7LCY/zYnbPwLUwCLdHSWnupb5UijrRHG0LpTYt3h76bWdMYfAcOrmMyE9gg3rAIGX0AXpNhMFyKr21tvDyOX5r/ahU0umFVAqgVcFRQGJFEUlF0DMsKxRyIufnA7Au0CxwnQCuxCC9KEIuPKYGIL14mhL4HNuhJmm/nI40NCdXLNsVfjELnGWTXwN9rrkZqh/IJ8HJTScCb/gWneGYO7ncfKVXUZxuRSU3LG3Rv8xkv86w1l3wTN45LcGeR/PDRHA+hdIkiDkSRM/cKaciH3Sl1z3+cXQNrM4lgwGcY75RwA3YmQ3VUhp9gTEn2LRMhOcGpgYVXTPeOXOS2zSzulCa7BIFlwMegQ/Ibnzk4wzOZs/KJ4b5gu+UFEVkCslK6GBY+WBHj7xl1e7IlqSs1zlYBdC1zsBZMobmB20rhyJgyCm/wdH7BAzOFTw4WvGwTfSYK+rKUcnYpSqfXayGiPo9Gz+0jph6sCOmtG7vSjfuDKY5snBM58jCg495GM2L0RMfOcEYV247GgGDBO9zzT2OueRgMhyteJ7wngef48Fe4/uN5zMItiLriIHxYOvyYInwns9xzM1v5vm9Qy6tHAsBg61xr0GE9wyUyRjD6KMN8PkE8kkwEQZrDP5trEAM2sAbQPL3/wMtE1N8fEpCPwAAAABJRU5ErkJggg==";
var coneStar = "data:image/png;base64,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";

var imagesCone = document.querySelectorAll('.img-cone');
for(var i = 0; i < imagesCone.length; i++){
	imagesCone[i].src = cone;
}

imagesCone = document.querySelectorAll('.img-cone-star');
for(i = 0; i < imagesCone.length; i++){
	imagesCone[i].src = coneStar;
}

var mesCorrente = parseInt(new Date().getMonth() + 1);
var dados;
var cones = []; 

var regexImg = new RegExp(/(^data)/i);

function Cone(nome, apelido,img, pontuacao, conisses, id){
 	
 	// self = this;
 	this.id = id;
	this.nome = nome || '';
	this.apelido = apelido || '';
	this.conissesVisivel = ko.observable(false);

	if(img && img.match(/https?\:\/\/[\s\S]*/) || regexImg.test(img)){
		this.img = img;
	}else{
		var img = img == '' || !img ? 'default.jpg':img;
		this.img = "https://raw.githubusercontent.com/erickLFLopes/ConeBoard/master/images/cones/" + img ;
	}

	this.conisses  = conisses;
	if(typeof conisses !== "object"){
		this.conisses  = [];
	}
	// this.acumulado = acumulado || 0;

	this.getConissesDoMes = function(mes){
		var out = [];
		var mes = mes || mesCorrente;
		for(var i = 0; i < this.conisses.length; i++){
			var mesConisse = parseInt(this.conisses[i].date.split(/-/)[1]);

			if(mesConisse === mes){
				out.push(this.conisses[i]);
			}
		}
		return out;
	}
	this.pontuacao = ko.pureComputed(function(){
		var aux = this.getConissesDoMes();
		return aux.length;
	}, this);

}

function getDados(callback){
	var url = apiConeBoard + "Cone";
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			dados = JSON.parse(this.responseText);
			if(typeof callback === 'function'){
				callback();
			}
		}
	}; 
	
	xhttp.open("GET", url, true);
	xhttp.send();
}

function getWinners(callback){
	var url = apiConeBoard + "Cone/winnerMonth";
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var winners = JSON.parse(this.responseText);
			if(typeof callback === 'function'){
				callback(winners);
			}
		}
	}; 
	
	xhttp.open("GET", url, true);
	xhttp.send();
}

var sendRequest = function(url, data, done, err){

	var key = prompt("Insara a chave de cadastro");

	var request = new XMLHttpRequest();
	request.onreadystatechange = function() {
		
		if (this.readyState == 4 && this.status == 200) {
			dados = JSON.parse(this.responseText);
			if(typeof done === 'function'){
				done(dados);
			}
		}else if (this.readyState == 4 && this.status != 200){
			var data = JSON.parse(this.responseText)
			
			if(typeof err === 'function'){
				err(data);
			}
		}
	}; 
	request.open('POST', url, true);
	request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
	request.send(JSON.stringify({key:key,data:data}));
}	  

function coneBoardViewModel(){
	self = this; 
	self.pathImage = "https://raw.githubusercontent.com/erickLFLopes/ConeBoard/master/images/cones/";
	
	self.date = new Date().getMYFormatted();

	this.cones =  ko.observableArray([]);
	this.vencedores = ko.observableArray([]);
	self.mesVigente = ko.observable(parseInt(new Date().getMonth() + 1));
	getDados(function(){
		for(var i = 0; i < dados.cones.length; i++){
			self.cones.push(new Cone(
				dados.cones[i].name,
				dados.cones[i].nickname,
				dados.cones[i].img,
				dados.cones[i].points.length,
				dados.cones[i].points,
				dados.cones[i]._id
			));
		}
		var cones = self.cones(); 
		cones.sort(function(a,b){
			return a.pontuacao() < b.pontuacao()?1:-1;;
		});
		self.cones(cones);
		getWinners(function(winners){
    		arrWinners = winners["winnersCones"];
    		
    		var localCones = [];
    		var vencedoresPorMes = {};
    		for (var i = 0; i < arrWinners.length; i++) {
    			for (var j = 0; j < arrWinners[i].cones.length ; j++) {
    				localCones.push(arrWinners[i].cones[j])
    				if(!vencedoresPorMes[arrWinners[i].cones[j]]){
    					vencedoresPorMes[arrWinners[i].cones[j]] = []
    				}
    				vencedoresPorMes[arrWinners[i].cones[j]].push(arrWinners[i].dateMonth)
    			}
    		}
  			var vencedores = []
    		cones.forEach(function(cone){
    				if(localCones.indexOf(cone.id) != -1){
    					cone.mes = vencedoresPorMes[cone.id]
    					vencedores.push(cone);
    				}
    		});
    		self.vencedores(vencedores);
    	});
	});
	
    

	self.dash = ko.observable("cones"); 
	self.setDash = function(){
		//console.log(element.getProperty('name'))
		
		self.dash();
	}
	self.coneEmDestaque = new Cone();
	self.exibeConisses = function(cone, event){
		event.preventDefault();
		if(cone.pontuacao() > 0){	
			if(cone.conissesVisivel()){
				cone.conissesVisivel(false);
			}else{
				self.coneEmDestaque.conissesVisivel(false); 
				self.coneEmDestaque = cone;
				cone.conissesVisivel(true);
			}
		}
	}

	this.maxPontuacao = 10;
	self.getPorcentagem = function(p){
		if(!p) return "0%";
		return ((p/self.maxPontuacao)*100)+'%';;
	}

	self.destacaCone = function(){
		self.coneDestacado(this);
		return; 
	}

	self.ajustaApelido = function(apelido, pontuacao){

		if(pontuacao > 1){
			return apelido + " (" + pontuacao + " PONTOS)";
		}else if(pontuacao == 1){
			return apelido + " (" + pontuacao + " PONTO)";
		}
		return apelido;
	}
	self.ajustaImagem = function(img){
		if(img.match(/https?\:\/\/[\s\S]*/)){
			return img;
		}else if(img && img !== ''){
			return self.pathImage + img;
		}else{
			return self.pathImage + 'default.jpg';
		}
	}

	self.sendData = function(){
		sendData();
	}

	self.registerCone = function(){
		registerCone();
	}


	self.adjustyDate = function(date){
		return date.replace(/(\d{4}\-\d{2}\-\d{2})[\s\S]*/,"$1");
	}
}

ko.applyBindings(new coneBoardViewModel());

/** Tratamento do formulario de envio de pontuação. **/

var sendData = function(){
	var form = document.querySelector("#coneForm")
	
	select = form.querySelector('select');
	apelido = select[select.selectedIndex].text,
	
	data = {
		data: form.querySelector('input[type=date]').value || new Date().getDataFormatada(), 
		descricao: form.querySelector('input[name=descricao]').value || "Sem Descrição :/", 
		titulo: form.querySelector('input[name=titulo]').value, 
		estrelado: form.querySelector('input[type=checkbox]').checked
	}
	
	sendRequest(apiConeBoard + "Cone/" + apelido + "/addPoint", data, 
		function(){location.reload()},
		function(err){alert(err.message)});

}

var registerCone = function(){
	var form = document.querySelector("#registerConeForm")

	data = {
		name: form.querySelector('input[name=name]').value, 
		nickname: form.querySelector('input[name=nickname]').value, 
		img: form.querySelector('input[name=image]').value
	}
	
	sendRequest(apiConeBoard + "Cone/create", data, 
		function(){location.reload()},
		function(err){alert(err.message)});
}


