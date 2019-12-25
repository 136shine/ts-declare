// 混合类型, 既可以是函数,也可以是类(new)
// 实例属性/方法 
interface People{
    name: string
    age: number
    getName(): string
    getAge():number
}
interface People_Static{
    // 类的构造函数
    new (name: string, age: number): People
    // 类的静态方法
    staticA():number
    // 函数
    (w:number):number
}

export let People:People_Static