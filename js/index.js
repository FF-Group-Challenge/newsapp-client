$(document).ready (function (){
    
    if (localStorage.getItem('access_token')) {
      homepage()

    } else {
      landing()

    }

    
  });

function homepage() {
  $('#login-page').hide()
  $('#main-page').show()
}

function nationalNews() {
  $('#content').empty()

  $.getJSON('/example/cnn.json', function (data) {
    // console.log(data.data);
		const news = data.data;
		for (let i = 0; i < news.length; i++) {
			console.log(news[i]);
			$('#test').append(`<div class="card" style="width: 18rem;">
						<img class="card-img-top" src="${news[i].poster}" alt="Card image cap">
						<div class="card-body">
							<h5 class="card-title"></h5>
							<p class="card-text">${news[i].judul}</p>
						</div>
						<div class="card-body">
							<a href="${news[i].link}" class="card-link">Info Lebih Lanjut</a>
						</div>
					</div>`);
		}
	});
}