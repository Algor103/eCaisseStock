export class Client {
    id: number;
    libelle: string;
    adresse: string;
    tel: string;
    email: string;
    fax: string;
    login: string;
    pwd: string;
    //clientForm: any; // ou n'importe quel type que vous utilisez

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
        //this.clientForm  /* initialisation de la valeur */
    }
}
