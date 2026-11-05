<template>
    <div>
        <form>
            <input type="text" @input="filterByName(name = $event.target.value)" 
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
import itemPicture from '../img/pancake.png'
import api from '../services/api'
</script>

<script>
    export default{
        data(){
            return {
                allRecipes: [],
                recipes: [],
                name: ''
            }
        },
        methods:{
            async GetRecipes(){
                try{
                    const response = await api.get('/Recipe?tag=Lunch', {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    console.table(response.data)
                    this.allRecipes = response.data
                    this.recipes = this.allRecipes
                }
                catch (ex){
                    alert(ex.message)
                }
            },
            filterByName(name){
                this.recipes = this.allRecipes.filter(r => r.name.includes(name))
                console.table(this.recipes)
            }

        },
        created: function(){
            this.GetRecipes()
        }
        
    }
</script>