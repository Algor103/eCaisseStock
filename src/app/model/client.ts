export class Client {
    id: number;
    libelle: string;
    adresse: string;
    tel: string;
    email: string;
    fax: string;
    login: string;
    pwd: string;

    //constructeur
    constructor(id: number, libelle: string, adresse: string, tel: string, email: string, fax: string, login: string, pwd: string) {
        this.id = id;
        this.libelle = libelle;
        this.adresse = adresse;
        this.tel = tel;
        this.email = email;
        this.fax = fax;
        this.login = login;
        this.pwd = pwd;
    }
}
