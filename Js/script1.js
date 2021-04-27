



const url = "https://www.mgportfolio.no/wp-json/wp/v2/posts?_embed=true"
const out = document.querySelector(".scriptcontainer")


fetch(url, {
	"method": "GET"
})
  .then(response => response.json())
  .then(data => myPosts(data))




const myPosts = (posts) => {

	


	for (let post of posts) {
		console.log(post)
		let newOut = `<ul>
			<p>${post.title.rendered}</p>
			</ul>`


		out.innerHTML += newOut;
	}
}