<template>
    <div>
        <form>
            <input type="text" @input="FilterByName(name = $event.target.value)" 
             name="Recipe Name" placeholder="Search recipe">
            <label for="Recipe Name"></label>
        </form>
    </div>

    <div id="breakfast">
        <div v-if="recipes.length > 0" class="items-grid">
            <div class="item" v-for="recipe in recipes">
                <div>
                    <img :src="itemPicture">
                </div>
                <div>
                    <h3>{{recipe.name}}</h3>
                </div>
            </div>
        </div>
        <div v-else class="items-grid">
            <div class="item" v-for="recipe in allRecipes">
                <div>
                    <img :src="itemPicture">
                </div>
                <div>
                    <h3>{{recipe.name}}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import api from '../services/api'
import {ref, onMounted} from 'vue'

const allRecipes = ref([])
const recipes = ref([])
const name = ref('')
const itemPicture = 'https://ik.imagekit.io/realisursi/pancake.png'

onMounted(() => {
    GetRecipes()
})

function FilterByName(name){
                recipes.value = allRecipes.value.filter(r => r.name.includes(name))
                console.table(recipes.value)
            }

async function GetRecipes(){
    try{
        const response = await api.get('/Recipe?tag=Lunch', {
            headers: {
                'Content-Type': 'application/json'
                    }
                })
            console.table(response.data)
            allRecipes.value = response.data
            recipes.value = allRecipes.value
    }
    catch (ex){
        alert(ex.message)
        }
}
</script>
