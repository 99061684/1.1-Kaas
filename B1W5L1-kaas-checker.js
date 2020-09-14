var antwoord1 = 'Emmenthaler';
var antwoord2 = 'Leerdammer';
var antwoord3 = 'Pamigiano Reggiano';
var antwoord4 = 'Goudse kaas';
var antwoord5 = 'Bleu de Rochbaron';
var antwoord6 = "Foume d'Ambert";
var antwoord7 = 'Camembert';
var antwoord8 = 'Mozzarella';

function vragen_stellen(){
    document.getElementById("vraag1").innerHTML =
    "is de kaas geel?, ...";
    document.getElementById("vraag2").innerHTML =
    "zitten er gaten in?, ...";
    document.getElementById("vraag3").innerHTML =
    "heeft de kaas blauwe schimmels?, ...";
    document.getElementById("vraag4").innerHTML =
    "heeft de kaas een korst?, ...";
    document.getElementById("vraag5").innerHTML =
    "is de kaas belachelijk duur?, ...";
    document.getElementById("vraag6").innerHTML =
    "is de kaas hard als steen?, ...";

    var vraag1 = prompt("is de kaas geel? (Y/N)", "Y");
    
    if (vraag1 == "Y") {
        document.getElementById("vraag1").innerHTML =
        "is de kaas geel?, ja";
        var vraag2 = prompt("zitten er gaten in? (Y/N)", "Y");
               
    
        if (vraag2 == "Y"){
            document.getElementById("vraag2").innerHTML =
            "zitten er gaten in?, ja";
            var vraag5 = prompt("is de kaas belachelijk duur? (Y/N)", "Y");
            if (vraag5 == "Y"){
                document.getElementById("vraag5").innerHTML =
                "is de kaas belachelijk duur?, ja";
                document.getElementById("uitslag").innerHTML =
                "de kaas is: " + antwoord1;
                
            } else if(vraag5 == "N") {
                document.getElementById("vraag5").innerHTML =
                "is de kaas belachelijk duur?, nee";
                document.getElementById("uitslag").innerHTML =
                "de kaas is: " + antwoord2;
            }

        } else if(vraag2 == "N") {
            document.getElementById("vraag2").innerHTML =
            "zitten er gaten in?, nee";
            var vraag6 = prompt("is de kaas hard als steen? (Y/N)", "Y");
            if (vraag6 == "Y"){
                document.getElementById("vraag6").innerHTML =
                "is de kaas hard als steen?, ja";
                document.getElementById("uitslag").innerHTML =
                "de kaas is: " + antwoord3;
            } else if(vraag6 == "N") {
                document.getElementById("vraag6").innerHTML =
                "is de kaas hard als steen?, nee";
                document.getElementById("uitslag").innerHTML =
                "de kaas is: " + antwoord4;
            }
        }

    } else if(vraag1 == "N") {
        document.getElementById("vraag1").innerHTML =
        "is de kaas geel?, nee";
        var vraag3 = prompt("heeft de kaas blauwe schimmels? (Y/N)", "Y");

        if (vraag3 == "Y"){
            document.getElementById("vraag3").innerHTML =
            "heeft de kaas blauwe schimmels?, ja";
            var vraag4 = prompt("heeft de kaas een korst? (Y/N)", "Y");
            if (vraag4 == "Y"){
                document.getElementById("vraag4").innerHTML =
                "heeft de kaas een korst?, ja";
                document.getElementById("uitslag").innerHTML =
                "de kaas is: " + antwoord5;
            } else if(vraag4 == "N") {
                document.getElementById("vraag4").innerHTML =
                "heeft de kaas een korst?, nee";
                document.getElementById("uitslag").innerHTML =
                "de kaas is: " + antwoord6;
            }
        } else if(vraag3 == "N") {
            document.getElementById("vraag3").innerHTML =
            "heeft de kaas blauwe schimmels?, nee";
            var vraag7 = prompt("heeft de kaas een korst? (Y/N)", "Y");
            if (vraag7 == "Y"){
                document.getElementById("vraag4").innerHTML =
                "heeft de kaas een korst?, ja";
                document.getElementById("uitslag").innerHTML =
                "de kaas is: " + antwoord7;
            } else if(vraag7 == "N") {
                document.getElementById("vraag4").innerHTML =
                "heeft de kaas een korst?, nee";
                document.getElementById("uitslag").innerHTML =
                "de kaas is: " + antwoord8;
            }
        }

    }      
    

}


