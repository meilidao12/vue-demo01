<template>
    <div class="divstyle">
       <a href="#">12345</a>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.divstyle{
    margin-left: 10px;
    margin-right: 10px;
}

.divstyle a{
    vertical-align: center;
    text-align: center;
    color: white;
    text-decoration: none;
}
.divstyle a:hover{
    background-color: #222;
}
.divstyle a.active {
    color: white;
    background-color: #4CAF50;
}
</style>
