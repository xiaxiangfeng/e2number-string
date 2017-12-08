import Ie2number from './e2number.interface'

class e2numberStr implements Ie2number{

    private num: number;

    constructor (num: number) {
        this.num = num
    }

    public e2n (num: number) : string {
        let res: string

        this.num  = num || this.num
        if(typeof this.num === 'number'){
            const strNum: string = this.num.toString()

            if(/e/i.test(strNum)){
                const eIndex: number = this.eIndex(strNum)
                const pre: string = this.preStrNum(strNum, eIndex)
                const newPre: string = pre.replace('.','')
                const last: number = this.lastNum(strNum,eIndex)
                const lowerNum: string = strNum.toLowerCase()

                if(lowerNum.indexOf('e-')){
                    res = '0.' + this.oRepeat(last - 1) + newPre
                }else if(lowerNum.indexOf('e+')){
                    const hasNum = pre.length - pre.indexOf('.') - 1
                    const addNum = last - hasNum
    
                    res = newPre + this.oRepeat(addNum - 1)
                }   
            }
        }else{
            console.warn('e2numberStr() warn:参数不是一个数字')
        }
        return res
    }

    /**
     * 获取科学计数法标识'e'的索引位置
     * @param strNum 
     */
    protected eIndex (strNum: string) : number {
        return /e/i.exec(strNum).index
    }
    
    /**
     * 获取指定索引位置之前的字符串
     * @param strNum 
     * @param index 
     */
    protected preStrNum (strNum: string, index: number): string {
        return strNum.slice(0, index)
    }

    /**
     * 获取次方数
     * @param strNum
     * @param eIndex 
     */
    protected lastNum (strNum: string, eIndex: number): number {
        return parseInt(strNum.slice(eIndex + 1 + 1))
    }

    /**
     * 返回指定个数的 0
     * @param num 
     */
    protected oRepeat (num: number) : any {
        const zero: any = '0'
        return zero.repeat(num)
    }
}

export default e2numberStr