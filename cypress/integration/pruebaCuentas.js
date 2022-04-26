/// <reference types="cypress"/> 

describe('Cuentas', function(){
    var a=1;
    it('Vamos a ver una igualdad', function(){
        expect(1==2, "Ambos terminos tienen que ser iguales y no lo son").to.equal(true);
    })
    it('Vamos a ver que no sea una igualdad', function(){
        expect(1==2).to.equal(false);
    })
    it('Vamos a ver que una resta este bien', function(){
        expect(1-1).to.equal(0);
    })
    it('Vamos a ver que una resta NO este bien', function(){
        expect(1-1).to.not.equal(2);
    })
    it('tiene que ser verdadero', function(){
        expect(2==2).to.be.true;
    })
    it('tiene que ser falso', function(){
        expect(2==1).to.be.false;
    })
    it('la variable existe', function(){
        expect(a).to.exist;
    })

    it('Es menor a 10', function(){
        expect(a).to.be.lessThan(10);
    })
    it('Es mayor a 10', function(){
        expect(25).to.be.greaterThan(10);
    })
})