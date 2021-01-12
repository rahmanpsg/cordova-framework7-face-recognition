class User {
    constructor(id, nama, alamat, jenis_kelamin, tanggal_lahir, foto) {
        this.id = id;
        this.nama = nama;
        this.alamat = alamat;
        this.jenis_kelamin = jenis_kelamin
        this.tanggal_lahir = tanggal_lahir;
        this.foto = foto;
    }

    get() {
        return [this.id, this.nama, this.alamat, this.jenis_kelamin, this.tanggal_lahir, this.foto]
    }
}