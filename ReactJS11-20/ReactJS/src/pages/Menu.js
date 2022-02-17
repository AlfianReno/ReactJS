import { useState } from 'react';
import Tabel from './Tabel';
function Menu() {
    const titel = "Daftar Menu Restoran";
    const [menus,setMenu] = useState(
        [
            {
                idmenu:15, 
                idkategori:56, 
                menu:"Es Jeruk", 
                gambar:"esjeruk.jpg", 
                harga:6000,
            },
            {
                idmenu:23, 
                idkategori:56, 
                menu:"Es Teh", 
                gambar:"esteh.jpg", 
                harga:3000,
            },
            {
                idmenu:27, 
                idkategori:44, 
                menu:"Apel Manalagi", 
                gambar:"apel.jpg", 
                harga:3000,
            },
            {
                idmenu:28, 
                idkategori:44, 
                menu:"Pisang Raja", 
                gambar:"pisang.jpg", 
                harga:5000,
            },
            {
                idmenu:29, 
                idkategori:41, 
                menu:"Nasi Padang", 
                gambar:"nasipadang.jpg", 
                harga:20000,
            },
            {
                idmenu:30, 
                idkategori:41, 
                menu:"Nasi Ayam", 
                gambar:"nasiayam.jpg", 
                harga:15000,
            }
        ]
    );
  return (
    <div className="App">
      <Tabel menu={menus} titel={titel}/>
      <Tabel menu={menus.filter((data)=>(data.idkategori === 44))} titel="MENU BUAH"/>
    </div>
    
  );
}

export default Menu;
