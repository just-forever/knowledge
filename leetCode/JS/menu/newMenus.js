
// 系统管理
module.exports =  [{
    name: 'newMenu.systemManage',
    svg: 'settings',
    subMenus: [
        // 我的子账户
        {
            name: 'menus.subAccount',
            route: 'subordinate',
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
                    },
                    subMenus: [
                        {
                            name: 'subordinate.ControlledSubAccount',
                            route: 'subordinate/subAccount/transferCtrlToSetUp',
                            subMenus: [
                                {
                                    name: 'newMenu.appList',
                                    route: 'a',
								},
								{
                                    name: 'newMenu.appList1',
                                    route: 'b',
                                }
                            ]
                        },
                    ]
                },
            ]
        },
    ]
}]