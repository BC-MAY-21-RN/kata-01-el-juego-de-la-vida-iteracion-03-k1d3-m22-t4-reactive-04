var Matrix = require("./script.js");
let matrix = new Matrix(5, 5);

test('Matriz no puede devolver undefined',()=>{
    expect(matrix.getMatrix()).toBeDefined()
})

//  
test('Dimension de Altura > 3',()=>{
    expect(matrix.getAltura()).toBeGreaterThan(3);
})
//expect(ouncesPerCan()).toBeGreaterThan(10);
test('Dimension de Anchura > 3',()=>{
    expect(matrix.getAnchura() ).toBeGreaterThan(3);
})
/*
    
 git commit -m "first commit.
>
>
Co-authored-by: Gerardo <geemtovarba@ittepic.edu.mx>
Co-authored-by: Valentin <valeru.251@gmail.com>
Co-authored-by: Francisco <fran.senes@gmail.com>"
*/