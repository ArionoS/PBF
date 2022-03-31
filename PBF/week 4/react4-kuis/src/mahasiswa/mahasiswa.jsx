import React ,{ Component } from "react";
import Mp from "../component/mahasiswaPage";

class mahasiswa extends Component{
            state = {
                listMahasiswa : [],
                insertMahasiswa : {
                    id:"",
                    nama:"",
                    hp:"",
                    angkatan:"",
                    status:"",
                    alamat:""
                }
            }
            ambilDataDariServerAPI = () => {
                fetch(`http://localhost:3001/mahasiswa?_sort=id&_order=desc`)
                    .then(response => response.json())
                    .then(jsonHasilAmbilDariAPI =>{
                        this.setState({
                            listMahasiswa:jsonHasilAmbilDariAPI
                        })
                    })
            }
            componentDidMount(){
                fetch('http://localhost:3001/mahasiswa')
                    .then(response => response.json())
                    .then(jsonHasilAmbilDariAPI => {
                        this.setState({
                            listMahasiswa: jsonHasilAmbilDariAPI
                        })
                    })
            }

            handleHapusMahasiswa = (data) => {
                fetch(`http://localhost:3001/mahasiswa/${data}`,{method: 'DELETE'})
                    .then(res => {
                        this.componentDidMount()
                    })
            }
            handleTambahMahasiswa = (event) =>{
                let formInsertaMahasiswa = {...this.state.insertMahasiswa};
                // let timestamp = new Date().getTime();
                // formInsertaArtikel['id'] = timestamp;
                formInsertaMahasiswa[event.target.name] = event.target.value;
                this.setState({
                    insertMahasiswa:formInsertaMahasiswa
                });
            }
            handleTombolSimpan=()=>{
                fetch('http://localhost:3001/mahasiswa',{
                    method:'post',
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.state.insertMahasiswa)
                })
                .then((Response) =>{
                    this.ambilDataDariServerAPI();
                })
            }

            render(){
                return (
                    <div>
                        <div className="container mb-5">
                            <h2  className="text-center">STUDENT DATA COMPLETION FORM</h2>
                            <div className="form-group row">
                                <label htmlFor="id" className="col-sm-2 col-form-label">NIM / ID</label>
                                <div className="col-sm-10">
                                    <input type="number" className="form-control" id="id" name="id" onChange={this.handleTambahMahasiswa} />
                                </div>
                            </div><hr></hr>
                            <div className="form-group row">
                                <label htmlFor="nama" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="nama" name="nama" onChange={this.handleTambahMahasiswa} />
                                </div>
                            </div><hr></hr>
                            <div className="form-group row">
                                <label htmlFor="hp" className="col-sm-2 col-form-label">Number Handphone</label>
                                <div className="col-sm-10">
                                    <input type="number" className="form-control" id="hp" name="hp" onChange={this.handleTambahMahasiswa} />
                                </div>
                            </div><hr></hr>
                            <div className="form-group row">
                                <label htmlFor="angkatan" className="col-sm-2 col-form-label">Year</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="angkatan" name="angkatan" onChange={this.handleTambahMahasiswa} />
                                </div>
                            </div><hr></hr>
                            <div className="form-group row">
                                <label htmlFor="status" className="col-sm-2 col-form-label">Status</label>
                                <div className="col-sm-10">
                                    <select class="form-control" id="status" name="status" onChange={this.handleTambahMahasiswa}>
                                        <option>Choose Status</option>
                                        <option value={"Aktif"}>Active</option>
                                        <option value={"Lulus"}>Graduate</option>
                                        <option value={"Drop Out"}>Drop Out</option>
                                    </select>
                                </div>
                            </div><hr></hr>
                            <div className="form-group row">
                                <label htmlFor="alamat" className="col-sm-2 col-form-label">Address</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="alamat" name="alamat" onChange={this.handleTambahMahasiswa} />
                                </div>
                            </div><hr></hr>
                            <button type="submit" className="button button2" onClick={this.handleTombolSimpan}>Save </button>
                        </div>
                        <hr />
                        <h3 className="text-center">LIST STUDENT</h3><hr></hr>
                        <div class="row container-fluid text-center">
                            <div className="col-1 border border-dark bg-info"><b>NIM/ID</b></div>
                            <div className="col-2 border border-dark bg-info"><b>NAME</b></div>
                            <div className="col-1 border border-dark bg-info"><b>NUMBER HANDPHONE</b></div>
                            <div className="col-5 border border-dark bg-info"><b>ADDRESS</b></div>
                            <div className="col-1 border border-dark bg-info"><b>YEARS</b></div>
                            <div className="col-1 border border-dark bg-info"><b>STATUS</b></div>
                            <div className="col-1 border border-dark bg-info"><b>ACTION</b></div>
                        </div>
                        {
                            this.state.listMahasiswa.map(mahasiswa => {
                                return <Mp key={mahasiswa.id} NIM={mahasiswa.id} nama={mahasiswa.nama} alamat={mahasiswa.alamat} hp={mahasiswa.hp} angkatan={mahasiswa.angkatan} status={mahasiswa.status} hapusMahasiswa={this.handleHapusMahasiswa}/>
                            })
                        }
                    </div>
                )
            }
            
                           
}
export default mahasiswa;