function clickCompletelyDelete() {
    const targetEmail = [
        '阿里云',
        'Gateio',
        'GitHub',
        'Apple',
        'The brightonSEO team',
        'infogaming',
        'TAPD',
        'Eric at StackBlitz',
        'Swydo & The brightonSEO team',
        'Vue Mastery',
        'OKX',
        'IOTE上海物联网展',
        'npm',
        'IOTE物联网展',
        'Apple Music',
        'lbs(腾讯位置服务)',
        'Binance',
        '12306@rails.com.cn',
        'Microsoft 帐户团队',
        'CSDN',
        'Gitee',
        'Find My',
        'Marius Gherasie',
        'CodePen',
        'Pelion',
        'UCloud 云计算'
    ]
    const targetUElements = document.querySelectorAll('.cx')
    const arr = Array.from(targetUElements);
    arr.forEach(u => {
        const innerText = u.nextSibling.nextElementSibling.querySelector('.tl.tf  span').getAttribute('n')
        if (targetEmail.includes(innerText)) {
            const checkbox = u.querySelector('input[type="checkbox"][name="mailid"]')
            if (checkbox) {
                checkbox.checked = true
            }
        }
    })
    document.querySelector('#quick_completelydel').click()
}
clickCompletelyDelete()
setTimeout(() => {
    top.document.querySelector('#QMconfirm_QMDialog_confirm').click()
}, 600)