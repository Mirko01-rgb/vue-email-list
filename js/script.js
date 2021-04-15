
//GOAL: Attraverso l'apposita API di Boolean generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
function boxGenerator(){
  for (let i = 0; i <10; i++) {
    $.ajax({
     url: 'https://flynn.boolean.careers/exercises/api/random/mail',
     method: 'GET',
     success: function(data) {
       //console.log(data);
       //console.log(data.response);
       const res = data.response;
       //console.log(res);
       emails(res);

     },
     error: function() {
     console.log('error');
     }

    })
  }

}

function emails(email) {
  console.log(email);
  const target = $('#target');
  target.append('<li>' + email + '</li>')

}

function button(){
const btns = $('#btn');
 btns.click(boxGenerator);

}

function init() {
  button();

}

document.addEventListener('DOMContentLoaded', init);
