function hitung(opr){
    //tangkap id form
    let form = document.getElementById('calcForm');
    let a1 = parseFloat(form.angka1.value);
    let a2 = parseFloat(form.angka2.value);
    

     if (isNaN(a1) || isNaN(a2)) return alert("Harap masukkan angka!!");

        switch (opr) {
            case '+':total  = a1 + a2; break;
            case '-':total  = a1 - a2; break;
            case '*':total  = a1 + a2; break;
            case '/':total  = a1 + a2; break;
            case '^':total  = Math.pow(a1,a2); break;
            default:total = 0;

        }

            form.hasil.value = total;
  
 }   

      

// function tambah(){
//     //tangkap id form
//     var frm = document.getElementById('calcForm');
//     var a1 = parseFloat(frm.angka1.value);
//     var a2 = parseFloat(frm.angka2.value);
//     var total = a1 + a2; //rumus
//     frm.hasil.value = total; //penempatan hasil
// }

// function kurang(){
//     //tangkap id form
//     var frm = document.getElementById('calcForm');
//     var a1 = parseFloat(frm.angka1.value);
//     var a2 = parseFloat(frm.angka2.value);
//     var total = a1 - a2; //rumus
//     frm.hasil.value = total; //penempatan hasil
// }


// function kali(){
//     //tangkap id form
//     var frm = document.getElementById('calcForm');
//     var a1 = parseFloat(frm.angka1.value);
//     var a2 = parseFloat(frm.angka2.value);
//     var total = a1 * a2; //rumus
//     frm.hasil.value = total; //penempatan hasil
// }


// function bagi(){
//     //tangkap id form
//     var frm = document.getElementById('calcForm');
//     var a1 = parseFloat(frm.angka1.value);
//     var a2 = parseFloat(frm.angka2.value);
//     var total = a1 / a2; //rumus
//     frm.hasil.value = total; //penempatan hasil
// }
// // function hitung(){
// //     //tangkap id form
    
// //     var frm = document.getElementById('calcForm');
// //     var a1 = parseFloat(frm.angka1.value);
// //     var a2 = parseFloat(frm.angka2.value); 
    
// //     if (isNaN(a1) || isNaN(a2)) {
// //                 alert("Harap masukkan angka!!");
// //             }

// //     var tombol = document.getElementById('penjumlahan');    
// //      var total;       
// //      var tombol_tambah = document.getElementById("tombol_tambah").value;   
// //      var tombol_kurang = document.getElementById("tombol_kurang").value;
  
// //     switch (tombol) {
// //         case tombol_tambah:
// //                total = a1 + a2; //rumus 
// //                frm.hasil.value = total; //penempatan hasil
// //             break;

// //         case tombol_kurang:
// //                total = a1 - a2; //rumus
// //                frm.hasil.value = total; //penempatan hasil 
// //             break;

               
// //         default:
// //          total = 0; //rumus
// //                frm.hasil.value = total; //penempatan hasil
// //     }
    
   

    
   
// // }

// function pangkat(){
//     //tangkap id form
//     var frm = document.getElementById('calcForm');
//     var a1 = parseFloat(frm.angka1.value);
//     var a2 = parseFloat(frm.angka2.value);
//     var total = Math.pow(a1,a2); //rumus
//     frm.hasil.value = total; //penempatan hasil
// }