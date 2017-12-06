





//科学计数法转换成数字字符串（超大数会有精度问题）
function e2numberStr(num) {
    let res = num
    if(typeof num === 'number'){
        const strNum = num.toString()
        if(/e/i.test(strNum)){
            const eIndex = /e/i.exec(strNum).index
            const pre = strNum.slice(0, eIndex)
            const newPre = pre.replace('.','')
            const last = parseInt(strNum.slice(eIndex + 1 + 1))
            const lowerNum = strNum.toLowerCase()
            if(lowerNum.includes('e-')){
                res = '0.' + '0'.repeat(last - 1) + newPre
            }else if(lowerNum.includes('e+')){
                const hasNum = pre.length - pre.indexOf('.') - 1
                const addNum = last - hasNum

                res = newPre + '0'.repeat(addNum - 1)
            }   
        }
    }else{
        console.warn('e2numberStr() warn:参数不是一个数字')
    }
    return res
}