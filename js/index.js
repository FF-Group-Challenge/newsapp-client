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
			// console.log(news[i]);
			$('#content').append(`<br><div class="card mr-1 ml-1 mt-1 mb-1" style="width: 16rem;">
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

function globalNews() {
  $('#content').empty()

  $.getJSON('/example/global.json', function (data) {
    console.log(data.articles);
		for(let i = 0; i < data.articles.length; i++) {
      const news = data.articles[i]
      $('#content').append(`<br><div class="card mr-1 ml-1 mt-1 mb-1" style="width: 16rem;">
						<img class="card-img-top" src="${news.urlToImage}" alt="Card image cap">
						<div class="card-body">
							<h5 class="card-title">${news.title}</h5>
							<p class="card-text">${news.description}</p>
						</div>
						<div class="card-body">
							<a href="${news.url}" class="card-link">Info Lebih Lanjut</a>
						</div>
					</div>`);
    }
	});
}

function spaceNews() {
  $('#content').empty()

  $.getJSON('/example/space.json', function (data) {
    console.log(data);
		for(let i = 0; i < data.length; i++) {
      const news = data[i]
      $('#content').append(`<br><div class="card mr-1 ml-1 mt-1 mb-1" style="width: 16rem;">
						<img class="card-img-top" src="${news.imageUrl}" alt="Card image cap">
						<div class="card-body">
							<h5 class="card-title">${news.title}</h5>
							<p class="card-text">${news.summary}</p>
						</div>
						<div class="card-body">
							<a href="${news.url}" class="card-link">Info Lebih Lanjut</a>
						</div>
					</div>`);
    }
	});
}