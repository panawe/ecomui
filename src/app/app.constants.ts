import {Injectable} from '@angular/core';
@Injectable()
export class Constants {
  public static apiServer: string = "http://localhost:8080";
  //public static apiServer: string = "http://www.scoolday.com";
  public static SORT_ORDER: string = "Ordre de Tri";
  public static NAME: string = "Nom";
  public static DETAIL: string = "Detail";
  public static DELETE_LABEL: string = "Supprimer";
  public static SAVE_LABEL: string = "Sauvegarder";
  public static saveFailed: string = "La sauvegarde n'a pas marche. Verifiez tous les champs.";
  public static deleteFailed: string = "La supression n'a pas marche. Reessayez.";
  public static ADD_LABEL: string = "Ajouter";
    public static SEARCH_WEBSITE: string = "Rechercher sur le site...";
    public static LOGOUT = "Deconnecter ";
}
