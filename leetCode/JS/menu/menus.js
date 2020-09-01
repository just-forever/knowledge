module.exports = [
	{
    name: 'menus.subordinate',
    svg: 'subordinate',
    subMenus: [
      // 我的子账户
      {
        route: 'subordinate/subAccount',
        name: 'menus.subAccount',
        isAssignable: true,
        auth: user => {
          // 已激活的主账户
          return (
           true
          );
        }
	  }, 
	  {
        route: 'subordinate/subAccount',
        name: 'menus.subAccount',
        isAssignable: true,
        auth: user => {
          // 已激活的主账户
          return (
           false
          );
        }
      }, 
    ]
}
]