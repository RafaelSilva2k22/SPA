
const routes = {
    "/" : "../pages/home.html",
    "/about": "../pages/about.html",
    "/contact": "../pages/contact.html",
    404: "../pages/404.html"
}

function route(event) {
    event = event || window.event
    event.preventDefault()
    
    window.history.pushState({}, "", event.target.href)
    handle() 
}

function handle() {
    const {pathname} = window.location
    const route = routes[pathname] || routes[404]
    
    fetch(route)
    .then(response =>response.text())
    .then(html => 
    {
        const app = document.querySelector(".app")
        app.innerHTML = html
    })
}
handle()
windows.onpopstate = () => handle()
window.route = () => route()