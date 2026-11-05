<template>
    <div id="searchbar">
        <form>
            <input type="text" id="search" name="search" :name>
            <label for="search">
            </label>

            <button type="submit" @click.prevent="SortByTitle()">Search</button>
        </form>

    </div>

    <div id="breakfast">
        <div class="items-grid">
            <div v-if="recipes > 0" class="item" v-for="recipe in recipes">
                <div>
                    <img :src="itemPicture">
                </div>
                <div>
                    <h3>{{recipe.name}}</h3>
                </div>
            </div>
            <div v-else class="item" v-for="recipe in allRecipes">
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
                    const response = await api.get('/Recipe?tag=Breakfast', {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
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
            },
            SortByTitle(){
                console.log(this.name)
                this.recipes = this.allRecipes.filter(recipe => recipe.name.includes(this.name))
            }

        },
        created: function(){
            this.GetRecipes()
        }
        
    }
</script>