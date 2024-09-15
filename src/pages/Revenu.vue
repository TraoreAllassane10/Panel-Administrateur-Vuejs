<template>
  <div class="search">

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
      <select name="" id="">
        <option value=""></option>
        <option value="">Banque</option>
        <option value="">Espèces</option>
        <option value="">Mobile Money</option>
      </select>
    </div>

  </div>
  <!-- Tableau des donnees -->
  <div class="donnees">

    <div class="titre">
      <h3>Liste des Révenus</h3>
      <button>Nouveau</button>
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

      <tr>
        <td>1</td>
        <td>15/09/2024</td>
        <td>200 000f</td>
        <td>Freelances</td>
        <td>Honoraire</td>
        <td>Banque</td>
        <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint dolore architecto</td>
      </tr>
      <tr>
        <td>2</td>
        <td>15/09/2024</td>
        <td>200 000f</td>
        <td>Freelances</td>
        <td>Honoraire</td>
        <td>Banque</td>
        <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint dolore architecto</td>
      </tr>
      <tr>
        <td>3</td>
        <td>15/09/2024</td>
        <td>200 000f</td>
        <td>Freelances</td>
        <td>Honoraire</td>
        <td>Banque</td>
        <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint dolore architecto</td>
      </tr>

    </table>
  </div>
</template>

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
}


/* Style du tableau */
.donnees {
  padding: 30px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 5px #E0E0E0;
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
  color: #555555;
}
</style>