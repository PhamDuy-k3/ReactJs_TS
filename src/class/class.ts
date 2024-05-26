// protected : giống như private , khi kế thừa thì con sẽ ko 
// truy tập đc thuộc tính của cha
// readonly : chỉ đọc ko bị thay đổi , như const
class Person{
    public name:string;
    private age:number
    constructor(name:string , age:number){
        this.name = name;
        this.age = age
    }
    getFullName():string{
        return this.name + this.age
    }
    setAge(age_new:number):number{
        return this.age = age_new
    }
}
const duy = new Person("duy ", 12)
duy.name = 'Duy new'
// duy.age = 23 // error / age private chỉ có phạm vi trong class Person
duy.setAge(13) // dùng setter mới thay đổi propertis private đc
export default duy