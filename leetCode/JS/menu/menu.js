// import menu from './menus';
// import newMenu from './newMenus';

function calcMenus() {
	// const Menu = require('./menus');
	const Menu = require('./newMenus');
	let tmp = [];
	const breadCrumb = {};

	const result = Menu.map(item => {
		item.subMenus = trackMenu(item.subMenus, tmp, breadCrumb)
		// console.log(trackMenu(item.subMenus, tmp, breadCrumb))
		return item;
	})

	console.log(JSON.stringify(result));
	// console.log(breadCrumb);
}


function trackMenu(subMenus, tmp, breadCrumb) {
	if (!subMenus) {
		console.log(JSON.stringify(subMenus))
		tmp = [];
		return null;
	}
	return subMenus.map(item => {
		const { route, name, subMenus } = item;
		tmp.push(name)
		breadCrumb[route] = [...tmp];
		item.subMenus = trackMenu(subMenus, tmp, breadCrumb);
		// console.log(JSON.stringify(tmp))
		tmp.pop();
		return item;
	})
}

calcMenus();