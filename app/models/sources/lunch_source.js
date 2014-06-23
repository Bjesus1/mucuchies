

Dashboard.LunchSource = Dashboard.PeriodicSource.extend({
  period: 10000,
  

  dataUpdate: function(callback) {

    var serv = "http://dashboard.int.shiftforward.eu:8090/get?";
    var lessImportantUrl = "https://sigarra.up.pt/feup/pt/mob_eme_geral.cantinas";
    var url = serv + "url=" + encodeURI(lessImportantUrl);
    $.get(url, function(data) {
        c = JSON.parse(data);

        var lunch = { meat: "", fish: "", tMeat: "", tFish: "", todaysData: "", tomorrowsData: "" };

        var today = new Date(); 
        var dd = today.getDate(); 
        var mm = today.getMonth()+1; //January is 0! 
        var yyyy = today.getFullYear(); 
        if( dd < 10 ){ dd = '0' + dd } 
        if( mm < 10 ){ mm = '0' + mm } 
        today = dd + '-' + mm + '-' + yyyy; 

        var tomorrow = new Date( new Date() + 86400000 );
        var day = tomorrow.getDate()
        var month = tomorrow.getMonth() + 1
        var year = tomorrow.getFullYear()
        if( day < 10 ){ day = '0' + day } 
        if( month < 10 ){ month = '0' + month } 
        tomorrow = day + "-" + month + "-" + year;
        
        lunch.todaysData = today;
        lunch.tomorrowsData = tomorrow;
        for(i=0;i<c.length;i++){

          if(c[i].descricao == "Cafetaria - Restaurante FEUP"){
          
          for(a=0;a<c[i].ementas.length;a++){

            if((c[i].ementas[a].estado !== "Fechado") && (c[i].ementas[a].data==today)){

            for(b=0;b<c[i].ementas[a].pratos.length;b++){
        
              if(c[i].ementas[a].pratos[b].tipo_descr == "Carne"){
              lunch.meat = c[i].ementas[a].pratos[b].descricao;
              }

              if(c[i].ementas[a].pratos[b].tipo_descr == "Peixe"){
              lunch.fish = c[i].ementas[a].pratos[b].descricao; 
              }
            }
            }

            if((c[i].ementas[a].estado !== "Fechado") && (c[i].ementas[a].data==tomorrow)){

            for(h=0;h<c[i].ementas[a].pratos.length;h++){
        
              if(c[i].ementas[a].pratos[h].tipo_descr == "Carne"){
              lunch.tMeat = c[i].ementas[a].pratos[h].descricao;
              }

              if(c[i].ementas[a].pratos[h].tipo_descr == "Peixe"){
              lunch.tFish = c[i].ementas[a].pratos[h].descricao; 
              }
            }
            }else{
              lunch.tMeat = "Fechado";
              lunch.tFish = "Fechado";
            }
          }
          }
        }

      callback(lunch);
    });
  }
});
