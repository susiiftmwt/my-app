// import React, { Component } from 'react'
// class App extends Component {
//   constructor(props) {
//     super(props);
//   this.state = { 
//     nama:'Rpl',
//     jumlah:0
//    }
//   }

//   ubah_state = () => {
//     this.setState({ nama: 'Rekayasa Perangkat Lunak'})
//   }

//   tambah =() => {
//     this.setState({jumlah: this.state.jumlah+1})
//   }

//   kurang =() => {
//     if (this.state.jumlah >0) {
//     this.setState({jumlah: this.state.jumlah-1})
//   }
// }

//   render() {
//     return ( 
//       <>
//       {/* <h1>{this.state.nama}</h1>
//       <button onClick={() => this.ubah_state() }>Ubah</button> */}

//       <h1>{this.state.jumlah}</h1>
//       <button onClick={() => this.tambah()}>Tambah</button>
//       <button onClick={() => this.kurang()}>Kurang</button>
//       </>
//      );
//   }
// }
    
// export default App;





import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Gambar from './gambar.jpg'
import './App.css'
import { render } from '@testing-library/react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       nama_barang : "Scarlett whitening",
       harga : "75000",
       jumlah : 0,
       total : 0
      }
  }

    tambah =() => {
    this.setState({
      jumlah: this.state.jumlah+1,
      total:(this.state.jumlah+1)* this.state.harga
    });
  }

  kurang =() => {
    if (this.state.jumlah >0) {
    this.setState({
      jumlah: this.state.jumlah-1,
      total: (this.state.jumlah-1)* this.state.harga
    })
  }
}

  tambah

  render() { 
    return ( 
      <>
      <Kartu nama_barang={this.state.nama_barang} harga={this.state.harga} />
      <div className='card m-5'>
      <div className='card-body'>
        <div className='row'>
          <div className='col'>
        <button onClick={this.kurang} className='btn btn-primary'>-</button>
        </div>
      <div className='col'>
        <input type="text" className='form-control' value={this.state.jumlah} />
      </div>
    <div className='col'>
        <button onClick={this.tambah} className='btn btn-primary'>+</button>
        </div>
        </div>
        <hr />
        <h5>Total:Rp {this.state.total}</h5>
        <hr />
      </div>
      </div>
      </>
     );
  }
}

function Kartu(props) {
  return (  
  <>
  <div className="card m-5">
  <img src={Gambar} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.nama_barang}</h5>
    <p className='text-danger'>Rp{props.harga}</p>
    <hr />
    
  </div>
</div>
  </>
  );
}

 
export default App;