class A {
    constructor (p1) {
        this.p1 = p1;
    }

    get p1 () {return this._p1 || 2;}

    set p1 (val) { if (val !== undefined) this._p1 = val; }

    //noinspection JSMethodCanBeStatic
    f1 () {return 7;}
}

class B extends A {
    constructor (...args) {
        super(...args);
    }

    get p2 () {return 'Hello';};

    set p2 (val) {};

    f2 (x) {return 2 * x;}
}

class C extends B {
    constructor (...args) {
        super(...args);
    }

    get p2 () {return 'Bye';};

    set p2 (val) {return 'Bye';};
}

class D extends B {
    constructor (...args) {
        super(...args);
    }

    get p4 () { return 7 * super.p1; }

    set p4 (val) {}

    f2 (x) {return 5 * super.f2(x);};

    f4 (x) {return this.f1(x) + this.f2(x)};
}

const
    a = new A(),
    b = new B(),
    c = new C(),
    d = new D();

console.log('\n\n');
console.log('Javascript OOP in ES6-style\n\n');
console.log('a  === %O', a);
console.log('b  === %O', b);
console.log('c  === %O', c);
console.log('d  === %O\n\n', d);

let i = 10;
while (i--) console.log(`d.f4(${i}) === ${d.f4(i)}`);