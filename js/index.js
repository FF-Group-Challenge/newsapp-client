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
	$("#content_title").empty()
	$('#content_title').append(`<h1>What's Happening in Indonesia?</h1><br>`)
	// -- DUMMY FETCHING --
  // $.getJSON('/example/cnn.json', function (data) {
  //   console.log(data.data);
	// 	const news = data.data;
	// 	for (let i = 0; i < news.length; i++) {
	// 		// console.log(news[i]);
	// 		$('#content').append(`<br><div class="card mr-1 ml-1 mt-1 mb-1" style="width: 16rem;">
	// 					<img class="card-img-top" src="${news[i].poster}" alt="Card image cap">
	// 					<div class="card-body">
	// 						<h5 class="card-title">${news[i].judul}</h5>
	// 						<p class="card-text">${news[i].waktu}</p>
	// 					</div>
	// 					<div class="card-body">
	// 						<a href="${news[i].link}" class="card-link">Info Lebih Lanjut</a>
	// 					</div>
	// 				</div>`);
	// 	}
	// });
	$.ajax({
		url: 'http://localhost:3000/news-indonesia',
		method: 'GET',
		headers: {
			access_token: localStorage.getItem('access_token')
		}
	})
	.done((data) => {
		console.log(data)
		const news = data.data;
		for (let i = 0; i < news.length; i++) {
			// console.log(news[i]);
			$('#content').append(`<br><div class="card mr-1 ml-1 mt-1 mb-1" style="width: 16rem;">
						<img class="card-img-top" src="${news[i].poster}" alt="Card image cap">
						<div class="card-body">
							<h5 class="card-title">${news[i].judul}</h5>
							<p class="card-text">${news[i].waktu}</p>
						</div>
						<div class="card-body">
							<a href="${news[i].link}" class="card-link">For further info, click this link</a>
						</div>
					</div>`);
		}

	})
	.fail((err) => {
		console.log(err)
	})
}

function globalNews() {
	$('#content').empty()
	$("#content_title").empty()
	$('#content_title').append(`<h1>What's Happening in Our Earth?</h1><br>`)
	// -- DUMMY FETCHING --
  // $.getJSON('/example/global.json', function (data) {
  //   console.log(data.articles);
	// 	for(let i = 0; i < data.articles.length; i++) {
  //     const news = data.articles[i]
  //     $('#content').append(`<br><div class="card mr-1 ml-1 mt-1 mb-1" style="width: 16rem;">
	// 					<img class="card-img-top" src="${news.urlToImage}" alt="Card image cap">
	// 					<div class="card-body">
	// 						<h5 class="card-title">${news.title}</h5>
	// 						<p class="card-text">${news.description}</p>
	// 					</div>
	// 					<div class="card-body">
	// 						<a href="${news.url}" class="card-link">Info Lebih Lanjut</a>
	// 					</div>
	// 				</div>`);
  //   }
	// });
	$.ajax({
		url: 'http://localhost:3000/news-global',
		method: 'GET',
		headers: {
			access_token: localStorage.getItem('access_token')
		}
	})
	.done((data) => {
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
							<a href="${news.url}" class="card-link">For further info, click this link</a>
						</div>
					</div>`);
    }
	})
	.fail((err) => {
		console.log(err)
	})
}

function spaceNews() {
	$('#content').empty()
	$("#content_title").empty()
	$('#content_title').append(`<h1>What's Happening in Our Space?</h1><br>`)
	// -- DUMMY FETCHING --
  // $.getJSON('/example/space.json', function (data) {
  //   console.log(data);
	// 	for(let i = 0; i < data.length; i++) {
  //     const news = data[i]
  //     $('#content').append(`<br><div class="card mr-1 ml-1 mt-1 mb-1" style="width: 16rem;">
	// 					<img class="card-img-top" src="${news.imageUrl}" alt="Card image cap">
	// 					<div class="card-body">
	// 						<h5 class="card-title">${news.title}</h5>
	// 						<p class="card-text">${news.summary}</p>
	// 					</div>
	// 					<div class="card-body">
	// 						<a href="${news.url}" class="card-link">Info Lebih Lanjut</a>
	// 					</div>
	// 				</div>`);
  //   }
	// });
	$.ajax({
		url: 'http://localhost:3000/news-space',
		method: 'GET',
		headers: {
			access_token: localStorage.getItem('access_token')
		}
	})
	.done((data) => {
		console.log(data);
		for(let i = 0; i < data.length; i++) {
      const news = data[i]
      $('#content').append(`<br><div class="card mr-1 ml-1 mt-1 mb-1" style="width: 16rem;">
						<img class="card-img-top" src="${news.imageUrl}" alt="Card image cap">
						<div class="card-body">
							<h5 class="card-title">${news.title}</h5>
							<p class="card-text">${news.summary ? news.summary : "<p class='small'>*No Summary, please click link for further info</p>"}</p>
						</div>
						<div class="card-body">
							<a href="${news.url}" class="card-link">For further info, click this link</a>
						</div>
					</div>`);
    }
	})
	.fail((err) => {
		console.log(err)
	})
}

function logout() {
	localStorage.clear()
	signOut()

	$('#content').empty()
	$('#content_title').empty()
	$('#content_title').append('<h1>Choose Your News?</h1><br>')

  $('#main-page').hide()
  $('#login-page').show()
  $('#formregister').hide()
}