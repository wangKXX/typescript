let isDone: boolean = true;
let list: Array<number> = [1, 2, 3];
enum Person {Age = 10, Sex = 1};

let person: Person = Person.Age;

let keyWords: any = 4;
keyWords = '百度';
keyWords = false;

function noReturn(): void{
  console.log('无返回值函数')
}
/**
 * void 类型变量的值只能是null或者undefined
 */
let isNull: void = null;
isNull = undefined;

interface labelledValue {
  label: string
}

function testInterface(labelVal: labelledValue) {
  console.log(labelVal.label);
}

testInterface({label: 'string'});
/**
 * 可选属性
 */
interface config {
  width?: number,
  color?: string,
  tag?: Array<string>,
  [propName: string]: any // 不定参数定义
}

function testOptions(config: config) {
  if (config.width) {
    console.log(config.width);
  } else if (config.tag) {
    console.log(config.tag);
  } else if (config.color) {
    console.log(config.color);
  }
}
/**
 * 只读属性
 * 属性定义之后值不能改变
 */

 interface readOnlyAttr {
   readonly x: number,
   readonly y: number
 }

 let p1: readOnlyAttr = {
   x: 10,
   y: 20
 }

 /**
  * 函数类型
  */

  interface testFun {
    (name: string, age: number): boolean
  }

  let test: testFun = function(name: string, age: number) {
    return age > 20;
  }
/**
 * protected 修饰的变量在子类中可以被访问
 * private 修饰的变量不能在子类中访问
 */
  class Car {
    protected name: string;
    constructor(name: string) {
      this.name = name;
    }
  }

  class BigCar extends Car {
    private speed: number;
    constructor(name: string, speed: number) {
      super(name);
      this.speed = speed;
    }
    getCarDesc(): string{
      return `this car is ${this.name} speed is ${this.speed}`
    }
  }

  /**
   * 抽象类
   */
  abstract class Font {
    static size: number = 10;
    abstract setColor(): void;
  }

  class NewFont extends Font{
    size: number = 0;
    name: string = '';
    constructor(name: string, size: number) {
      super();
      this.size = size;
      this.name = name;
    }
    setColor(): void {
      console.log('set color');
    }
  }

  function int<T>(arg: T): T {
    return arg
  }

  enum type {
    up = 1,
    down,
    left,
    right
  }

  console.log(type.up, type.down, type.left, type.right);

function test1(x: type) {
  if (x === type.up) {
    console.log('not up');
  } else if (x === type.down) {
    console.log('down');
    
  }
}
/**
 * 反向映射
 */
let a = type.up;
console.log(type[a]);

/**
 * 常量枚举
 */

 const enum type2 {
   up, down
 }

 /**
  * 外部枚举
  */
 declare enum type3{
   up = 1,
   down,
   left = 2
 }

 console.log(type3.left);
 