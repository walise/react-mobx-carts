import { observable, computed, action, makeObservable, autorun} from 'mobx';
class appleStore {
    constructor(){
        makeObservable(this)
    }
    @observable apples = window.localStorage.getItem('apples')?JSON.parse(window.localStorage.getItem('apples')):[];
    // 摘果子 状态 控制按钮显示
    @observable isPick = false
    // 缓存添加的数据
    @action.bound setApples=(data)=>{
        window.localStorage.setItem('apples',JSON.stringify(data?data:this.apples))
    }
    // 清空数据
    @action.bound clearApples=()=>{
        this.apples = []
        this.setApples()
    }
    // 摘苹果
    @action.bound insertApple=()=>{
        if(this.isPick){
            this.isPick = false
        }else{
            this.isPick = true
        }
        setTimeout(()=>{
            this.apples.push({
                id: (this.apples.length+1),
                weight: Math.floor(Math.random() * (250 - 200 + 1) + 200),
                isEaten: false
              })
            this.setApples()
            this.isPick=!this.isPick
        },1000)
    }
    // 吃苹果
    @action.bound eatApple=(id)=>{
        let curIndex = ''
        this.apples.forEach((apple,index)=>{
            if(apple.id === id){
                curIndex = index
            }
        })
        this.apples[curIndex].isEaten = true
        this.setApples(this.apples)
    }
    // 获取苹果的总计
    @computed 
        get options() {
        let options = {
            // 当前摘掉
            curCount: {
                count: 0,
                weight: 0
            },
            // 已吃掉
            eatCount: {
                count: 0,
                weight: 0
            }
        }
        // 判断苹果是否已被吃掉
        if(this.apples){
            this.apples.forEach(apple => {
                let selector = apple.isEaten ? 'eatCount':'curCount';
                options[selector].count ++;
                options[selector].weight += apple.weight;
            });
        }
        return options
    }
}
export default new appleStore()