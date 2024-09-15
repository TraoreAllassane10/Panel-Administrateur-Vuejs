<template>
    <div class="statistiques">

        <div class="card">
            <h4>Revenus</h4>
            <p>4 000 000 FCFA</p>
        </div>

        <div class="card">
            <h4>Dépense</h4>
            <p>2 000 000 FCFA</p>
        </div>

        <div class="card">
            <h4>Budget</h4>
            <p>10 000 000 FCFA</p>
        </div>

        <div class="card">
            <h4>Investissement</h4>
            <p>30 000 000 FCFA</p>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.statistiques{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}

.statistiques .card{
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  width: 200px;
  border-radius: 20px;
  box-shadow: 0 0 10px #E0E0E0;
}

.statistiques .card h4{
  color: #171717;
  font-size: 20px;
  font-weight: 600;
}

.statistiques .card p{
  font-size: 16px;
  color:#555555;
}
</style>