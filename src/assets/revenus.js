import { ref } from "vue"

const revenus = ref([
    {
        id: 1,
        date: '10/09/24',
        montant: 200000 ,
        source: 'Freelance',
        categorie: 'Honoraire',
        paiement: 'Banque',
        commentaire: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint dolore architecto'
    },
    {
        id: 2,
        date: '11/09/24',
        montant: 250000 ,
        source: 'Freelance',
        categorie: 'Projet',
        paiement: 'Banque',
        commentaire: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint dolore architecto'
    },
    {
        id: 3,
        date: '15/09/24',
        montant: 300000 ,
        source: 'Salaire',
        categorie: 'Salaire',
        paiement: 'Banque',
        commentaire: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint dolore architecto'
    },
    {
        id: 4,
        date: '01/01/24',
        montant: 1000000 ,
        source: 'Dividente',
        categorie: 'Autres',
        paiement: 'Banque',
        commentaire: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint dolore architecto'
    },
    {
        id: 5,
        date: '01/01/24',
        montant: 100000 ,
        source: 'Vente',
        categorie: 'Autres',
        paiement: 'Especes',
        commentaire: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint dolore architecto'
    },

])

export default revenus