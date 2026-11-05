<template>
<div id="director">
    <ul>
        <li v-for="dir in directory" :key="dir">{{ dir }}</li>
    </ul>
</div>
</template>

<script>  

export default {
    data(){
    return {
            directory: ['Home', '>', CurrentPage],
            CurrentPage: []
        }
    },
    methods: {}
}
</script>