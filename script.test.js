


const Matrix = require('./script')
//test('insertar metodo o funcion',()=>{
//     expect().toBe();})
//                      
//test('insertar metodo o funcion',()=>{
//     expect().toBe();})
//    
//test('Compribar matriz cuadrada',()=>{
//     expect().toBe();})
 
test('Matriz no puede devolver undefined',()=>{
   expect(getMatrix()).toBeDefined()
})
//  
test('Dimension de Altura > 3',()=>{
    expect(Matrix.getAltura()).toBeGreaterThan(3);
})
//expect(ouncesPerCan()).toBeGreaterThan(10);
test('Dimension de Anchura > 3',()=>{
    expect(Matrix.getAnchura() ).toBeGreaterThan(3);
})
/*
    
 git commit -m "first commit.
>
>
Co-authored-by: Gerardo <geemtovarba@ittepic.edu.mx>
Co-authored-by: Valentin <valeru.251@gmail.com>
Co-authored-by: Francisco <fran.senes@gmail.com>"
*/