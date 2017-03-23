(function () {
    'use strict';

    function inherits (Child, Parent) {
        Child.prototype = Object.create(Parent.prototype);
        //noinspection JSUnusedGlobalSymbols
        Child.prototype.constructor = Child;
        Child._super = Parent;
    }

    const A = (function () {
        function A (p1) {
            if (p1 !== undefined) {
                this.p1 = p1;
            }
        }

        A.prototype.p1 = 2;
        A.prototype.f1 = function () {return 7;};

        return A;
    })();

    const B = (function (_super) {
        inherits(B, _super);

        function B () {
            _super.apply(this, arguments);
        }

        B.prototype.p2 = 'Hello';
        B.prototype.f2 = function (x) {return 2 * x;};

        return B;
    })(A);

    const C = (function (_super) {
        inherits(C, _super);

        function C () {
            _super.apply(this, arguments);
        }

        C.prototype.p2 = 'Bye';

        return C;
    })(B);

    const D = (function (_super) {
        inherits(D, _super);

        function D () {
            _super.apply(this, arguments);
        }

        const A = _super._super._super;

        D.prototype.p4 = 7 * A.prototype.p1;
        D.prototype.f2 = function (x) {return 5 * _super.prototype.f2(x);};
        D.prototype.f4 = function (x) {return this.f1(x) + this.f2(x)};

        return D;
    })(C);


    const
        a = new A(),
        b = new B(),
        c = new C(),
        d = new D();

    console.log('Javascript OOP in ES5-style\n\n');
    console.log('a  === %O', a);
    console.log('b  === %O', b);
    console.log('c  === %O', c);
    console.log('d  === %O\n\n', d);

    let i = 10;
    while (i--) console.log(`d.f4(${i}) === ${d.f4(i)}`);

})();

