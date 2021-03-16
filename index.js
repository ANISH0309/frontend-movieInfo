fetch("./db.json")
	.then((response) => response.json())
	.then((data) => renderMovie(data));

function renderMovie(data) {
	movie = data.movies;
	for (var detail of movie) {
		const container = document.querySelector("#container");

		const movie_wrapper = document.createElement("div");

		const poster = document.createElement("div");
		const details = document.createElement("div");
		const details_para = document.createElement("ul");
		const poster_img = document.createElement("img");

		// Classes
		poster.className = "poster";
		poster_img.className = "poster_img";
		details.className = "details";
		details_para.className = "details_para";
		movie_wrapper.className = "movie_wrapper";

		const image_url = detail.posterUrl;
		poster_img.src = image_url;

		const title = document.createElement("li");
		title.innerHTML = "<b>Title: </b>" + detail.title;
		const year = document.createElement("li");
		year.innerHTML = "<b>Year: </b>" + detail.year;
		const director = document.createElement("li");
		director.innerHTML = "<b>Director:</b> " + detail.director;
		const actors = document.createElement("li");
		actors.innerHTML = "<b>Actors: </b>" + detail.actors;
		const runtime = document.createElement("li");
		runtime.innerHTML = "<b>RunTime: </b>" + detail.runtime;
		const plot = document.createElement("li");
		plot.innerHTML = "<b>Plot: </b>" + detail.plot;

		poster.appendChild(poster_img);
		details_para.appendChild(title);
		details_para.appendChild(year);
		details_para.appendChild(director);
		details_para.appendChild(actors);
		details_para.appendChild(runtime);
		details_para.appendChild(plot);

		details.append(details_para);
		movie_wrapper.append(poster);
		movie_wrapper.append(details);
		container.append(movie_wrapper);

		// console.log(detail.title);
	}
}
