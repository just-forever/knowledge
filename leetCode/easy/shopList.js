// 递归获取一个数组结构中的shopId， 返回一个shopList;

var orgIdList = [
	{
		orgId: 7687,
		children: [
			{ orgId: 1, children: [] },
			{ orgId: 2, children: [] },
			{ orgId: 3, children: [] },
			{ orgId: 4, children: [] },
		]
	},
	{
		orgId: 7688,
		children: [
			{ orgId: 11, children: [] },
			{ orgId: 21, children: [] },
			{ orgId: 31, children: [] },
			{ orgId: 41, children: [] },
		]
	},
	{
		orgId: 7689,
		children: [
			{ orgId: 31, children: [] },
			{ orgId: 32, children: [] },
			{ orgId: 33, children: [] },
			{ orgId: 34, children: [] },
		]
	},
]

function getShopList(data, result = []) {
	data.map(item => {
		result.push(item.orgId);
		if (item.children.length) {
			getShopList(item.children, result);
		}
	})
	return result;
}

console.log(getShopList(orgIdList));