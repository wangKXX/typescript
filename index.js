var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var isDone = true;
var list = [1, 2, 3];
var Person;
(function (Person) {
    Person[Person["Age"] = 10] = "Age";
    Person[Person["Sex"] = 1] = "Sex";
})(Person || (Person = {}));
;
var person = Person.Age;
var keyWords = 4;
keyWords = '百度';
keyWords = false;
function noReturn() {
    console.log('无返回值函数');
}
/**
 * void 类型变量的值只能是null或者undefined
 */
var isNull = null;
isNull = undefined;
function testInterface(labelVal) {
    console.log(labelVal.label);
}
testInterface({ label: 'string' });
function testOptions(config) {
    if (config.width) {
        console.log(config.width);
    }
    else if (config.tag) {
        console.log(config.tag);
    }
    else if (config.color) {
        console.log(config.color);
    }
}
var p1 = {
    x: 10,
    y: 20
};
var test = function (name, age) {
    return age > 20;
};
/**
 * protected 修饰的变量在子类中可以被访问
 * private 修饰的变量不能在子类中访问
 */
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
    }
    return Car;
}());
var BigCar = /** @class */ (function (_super) {
    __extends(BigCar, _super);
    function BigCar(name, speed) {
        var _this = _super.call(this, name) || this;
        _this.speed = speed;
        return _this;
    }
    BigCar.prototype.getCarDesc = function () {
        return "this car is " + this.name + " speed is " + this.speed;
    };
    return BigCar;
}(Car));
/**
 * 抽象类
 */
var Font = /** @class */ (function () {
    function Font() {
    }
    Font.size = 10;
    return Font;
}());
var NewFont = /** @class */ (function (_super) {
    __extends(NewFont, _super);
    function NewFont(name, size) {
        var _this = _super.call(this) || this;
        _this.size = 0;
        _this.name = '';
        _this.size = size;
        _this.name = name;
        return _this;
    }
    NewFont.prototype.setColor = function () {
        console.log('set color');
    };
    return NewFont;
}(Font));
function int(arg) {
    return arg;
}
var type;
(function (type) {
    type[type["up"] = 1] = "up";
    type[type["down"] = 2] = "down";
    type[type["left"] = 3] = "left";
    type[type["right"] = 4] = "right";
})(type || (type = {}));
console.log(type.up, type.down, type.left, type.right);
function test1(x) {
    if (x === type.up) {
        console.log('not up');
    }
    else if (x === type.down) {
        console.log('down');
    }
}
/**
 * 反向映射
 */
var a = type.up;
console.log(type[a]);
console.log(type3.left);
