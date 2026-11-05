<template>
    <form>
        <label for="user-name">User Name</label>
        <input type="text" id="name" name="user-name" :user.username="input">
        <label for="password">Password</label>
        <input type="text" id="password" name="password" :user.password="input">
        <button type="submit">Login</button>
    </form>
</template>

<script>
    export default{
        data(){
            return {
                user: {username: '', password: ''}
            }
        },
    methods:{
        SaveUser(){
            
        }
    }
}
</script>