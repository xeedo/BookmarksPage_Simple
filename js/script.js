let navList = document.getElementById("nav")
let linkList = document.getElementById("linkList")

const navItemList = [
	{
	text: "Category no. 1", 
	link: ""
	}, 
	
	{
	text: "Category no. 2", 
	link: ""
	}
]

for (item of navItemList) {
    addLinks(item, navList)
}


function addLinks(element, nList) {
	let navItem = document.createElement("li")
	
	let linkItem = document.createElement("a")
    linkItem.innerHTML = element.text
	
	if (element.hasOwnProperty("href")) {
		linkItem.href = element.link
	}
	
    navItem.appendChild(linkItem)
    
    nList.appendChild(navItem)
}
