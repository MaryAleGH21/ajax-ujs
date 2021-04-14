// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

// Llamada de ajax a través de jQuery

// $.ajax({  // El ajax viene siendo como un fetch!
// 	url: '/todos',
// 	type: 'POST',
// 	dataType: 'json',
//   headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
//   data: {"todo": {"content": "Este es un todo creado desde ajax/js"}} //Crea un nuevo todo
// })
// .done(function(data) { //Done es lo mismo que then!
// 	console.log(data);
// })
// .fail(function() { //Fail es como el método catch!
// 	console.log("error");
// })
// .always(function() { //
// 	console.log("complete");
// });
