import { Module, Mutation, VuexModule } from "vuex-module-decorators";

@Module({
  name: "uiModule",
  stateFactory: true
})
export default class Ui extends VuexModule {
  title: String = "Gestion des Stagiaires";

  internStates: String[] = [
    "Demande Déposé",
    "Décision Signée",
    "Démarré son Stage",
    "Stage Finie",
    "Dossier Clôturé",
    "Dossier Incomplet",
    "Stage Annulé"
  ];

  documentState: String[] = ["Absent", "Soumis", "Non Valide", "Valide"];

  @Mutation
  setTitle(value: String) {
    this.title = value;
  }
}
