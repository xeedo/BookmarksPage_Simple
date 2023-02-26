let navList = document.getElementById("nav")
let linkList = document.getElementById("linkList")

const navItemList = [
	{
	text: "Category no. 1", 
	ev: "filterLinks('Category no. 1')"
	}, 
	
	{
	text: "Category no. 2", 
	ev: "filterLinks('Category no. 2')"
	}
]


const linkItemList = [
	{
	cat: navItemList[0].text, 
	text: "Link no. 1", 
    link: "", 
	desc: "Short description of link no. 1"
	}, 
	
	{
	cat: navItemList[0].text, 
	text: "Link no. 1", 
    link: "", 
	desc: "Short description of link no. 2"
	}, 
	
	{
	cat: navItemList[1].text, 
	text: "Link no. 3", 
    link: "", 
	desc: "Short description of link no. 3"
	}, 
	
	{
	cat: navItemList[1].text, 
	text: "Link no. 4", 
    link: "", 
	desc: "Short description of link no. 4"
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

    if (element.hasOwnProperty("desc")) {
		let descItem = document.createElement("p")
		
        descItem.innerHTML = element.desc
        navItem.appendChild(descItem)
    }
	
	if (element.hasOwnProperty("ev")) {
		navItem.setAttribute('onclick', element.ev)
	}
    
    nList.appendChild(navItem)
}

function filterLinks(category) {
	const itemList = []
	
	while (linkList.hasChildNodes()) {
		linkList.removeChild(linkList.firstChild)
	}
	
	for (item of linkItemList) {
		if (item.cat === category) {
			itemList.push(item)
		}
	}
	
	for (item of itemList) {
		addLinks(item, linkList)
	}
}