

Dashboard.LunchSource = Dashboard.PeriodicSource.extend({
  period: 10000,

  dataUpdate: function(callback) {
   
    var url = "https://sigarra.up.pt/feup/pt/mob_eme_geral.cantinas";

      $.get(url, function(data) {
        object = JSON.parse(data);
        var c = object;

        var lunch = { carne: "", peixe: "",data: ""};

        var today = new Date(); 
        var dd = today.getDate(); 
        var mm = today.getMonth()+1; //January is 0! 
        var yyyy = today.getFullYear(); 
            if(dd<10){dd='0'+dd} 
            if(mm<10){mm='0'+mm} 

        var today = dd+'-'+mm+'-'+yyyy; 
        
        lunch.data=today;

            for(i=0;i<c.length;i++){

              if(c[i].descricao == "Cafetaria - Restaurante FEUP"){
    
                for(a=0;a<c[i].ementas.length;a++){

                  if(c[i].ementas[a].data==today){

                    for(b=0;b<c[i].ementas[a].pratos.length;b++){
        
                      if(c[i].ementas[a].pratos[b].tipo_descr == "Carne"){
                      lunch.carne = c[i].ementas[a].pratos[b].descricao;
                      }

                      if(c[i].ementas[a].pratos[b].tipo_descr == "Peixe"){
                      lunch.peixe = c[i].ementas[a].pratos[b].descricao; 
                      }
                    }
                  }
                }
              }
            }
      
      callback(lunch);


    });
  }
});
