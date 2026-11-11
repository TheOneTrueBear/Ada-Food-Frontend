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
//import director from './director.vue'

const props = defineProps({
    tag: String
})
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
        const response = await api.get(`/Recipe?tag=${props.tag}`, {
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

<style>

#breakfast .items-grid{
    margin-left: 10%;
    margin-right: 10%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

#breakfast .item{
    display: grid;
    grid-template-rows: auto;
    align-items: center;
}

#breakfast .item > div{
    align-items: center;
    margin: 10px;
    
}

#breakfast h3{
    font-family: Matcha;
    text-align: center;
    margin-top: auto;
    margin-bottom: auto;
}

#breakfast img{
    display:block;
    margin:1rem;
    width: 90%;
    height: 90%;
}
</style>