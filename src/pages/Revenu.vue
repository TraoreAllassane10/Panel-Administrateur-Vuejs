<template>
  <div class="search" :class="{'donnees-magin-reduce' : toggleMenu == false}">

    <div class="filtre-date">
      <label for="">Date : </label>
      <select name="" id="">
        <option value=""></option>
        <option value="">Plus récent</option>
        <option value="">Plus ancien</option>
      </select>
    </div>

    <div class="filtre-paiement">
      <label for="">Mode de paiement : </label>
      <select v-model="paiement" @change="filterParPaiement">
        <option value=""></option>
        <option value="banque">Banque</option>
        <option value="especes">Espèces</option>
        <option value="mobile">Mobile Money</option>
      </select>
    </div>

  </div>
  <!-- Tableau des donnees -->
  <div class="donnees" :class="{'donnees-magin-reduce' : toggleMenu == false}">

    <div class="titre">
      <h3>Liste des Révenus</h3>
      <button @click="() => toggleModal = true">Nouveau</button>
    </div>

    <table>
      <tr class="table-header">
        <th>ID</th>
        <th>Date</th>
        <th>Montant</th>
        <th>Source</th>
        <th>Categorie</th>
        <th>Moyen de paiement</th>
        <th>Commentaire</th>
      </tr>

      <tr v-for="revenu in revenuData" :key="revenu.id">
        <td>{{ revenu.id }}</td>
        <td>{{ revenu.date }}</td>
        <td>{{ revenu.montant }}</td>
        <td>{{ revenu.source }}</td>
        <td>{{ revenu.categorie }}</td>
        <td>{{ revenu.paiement }}</td>
        <td>{{ revenu.commentaire }}</td>
      </tr>
    </table>
  </div>

  <!-- Modal pour l'ajout -->
  <div class="modal" v-show="toggleModal">
    <div class="modal--inner">
      <h3>Ajout d'un nouveau revenu</h3>
      <button class="btn-quit" @click="() => toggleModal = false">X</button>

      <form action="" @submit.prevent="enregistrerNouveauRevenu">
        <label for="">Date</label>
        <input type="date" v-model="form.date" required><br>

        <label for="">Montant</label>
        <input type="text" v-model="form.montant" required><br>

        <label for="">Source</label>
        <input type="text" v-model="form.source" required><br>

        <label for="">Catégorie</label>
        <input type="text" v-model="form.categorie" required><br>

        <label for="">Moyen de paiement</label>
        <input type="text" v-model="form.paiement" required><br>

        <label for="">Commentaire</label>
        <textarea name="" id="" cols="30" rows="10" v-model="form.commentaire" required></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  </div>

</template>

<script setup>
import { inject, onMounted, reactive, ref } from "vue"
import revenus from "../assets/revenus"

// Cette variable est dans le fichier main.js . Elle se charge d'affiche ou non le menu de navigation
const {toggleMenu} = inject('toggleMenu')

const revenuData = ref([])
const paiement = ref('')
const toggleModal = ref(false)
const form = reactive({
  id: revenus.value.length + 1,
  date: '',
  montant: '',
  source: '',
  categorie: '',
  paiement: '',
  commentaire: ''
})

onMounted(() => {
  revenuData.value = revenus.value
})

const filterParPaiement = () => {
   if (paiement.value == 'banque') {
    revenuData.value = revenus.value.filter((revenu) => revenu.paiement === 'Banque')
   }
   else if(paiement.value == 'especes')
   {
    revenuData.value = revenus.value.filter((revenu) => revenu.paiement === 'Especes')
   }
   else if(paiement.value == 'mobile')
   {
    revenuData.value = revenus.value.filter((revenu) => revenu.paiement === 'Mobile money')
   }

   else
   {
    revenuData.value = revenus.value
   }
}

const enregistrerNouveauRevenu = () =>
{
  revenus.value.push({...form})
  toggleModal.value = false
}

</script>

<style scoped>
/* Style pour le filtre */
.search {
  margin-bottom: 20px;
  background-color: #fff;
  padding: 15px;
  width: 400px;
  display: flex;
  gap: 50px;
  align-items: center;
  color: #555555;
  border-radius: 10px;
  transition: all 0.5s ease;
}
.search label{
  font-size: 16px;
  font-weight: 500;
}

.search select
{
  padding: 5px;
  font-size: 16px;
  border: 2px solid #555555;
  outline: none;
  color: #555555;
  border-radius: 10px;
}


/* Style du tableau */
.donnees {
  padding: 30px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 5px #E0E0E0;
  transition: all 0.5s ease;
}

.donnees-magin-reduce
{
  margin-left: -100px;
}

.titre {
  display: flex;
  justify-content: space-between;
  place-items: center;
}

.titre button {
  background-color: #5e72e4;
  border: #5e72e4;
  color: #fff;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  width: 100px;
  font-size: 16px;
}

table {
  border-collapse: collapse;
}

td,
th {
  border: 1px solid grey;
  padding: 10px;
  font-size: 18px;
  color: #555555;
}

/* Style de modal */
.modal
{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #bebebe4b;
}

.modal .modal--inner
{
  background: #fff;
  padding: 30px 150px 30px 150px;
  border-radius: 30px;
  position: relative;
  transition: all 1s ease;
}

.modal h3
{
  font-size: 20px;
  color: #555555;
  font-weight: 700;
}

.modal form
{
  display: flex;
  flex-direction: column;
  
}

.modal form label
{
  font-size: 18px;
  color: #c2c2c2;
  font-weight: 500;
}

.modal form input
{
  padding: 10px;
  font-size: 16px;
  border: none;
  background: #dadadaa6;
  color: black;
  outline: none;
  font-weight: 600;
}

.modal form textarea
{
  font-size: 16px;
  border: none;
  background: #dadadaa6;
  color: black;
  outline: none;
  font-weight: 600;
}

.modal form button
{
  margin-top: 10px;
  padding: 8px;
  border: none;
  background: #5e72e4;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}

.modal .btn-quit
{
  position: absolute;
  top: 30px;
  right: 10px;
  padding: 10px;
  background-color: #fd5c5c;
  border: none;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
}

</style>