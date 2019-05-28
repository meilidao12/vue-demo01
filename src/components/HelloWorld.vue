<template>
    <div>
        <div>
            <input type="text" v-model="message" placeholder="editme">
            <p>Message is:{{message}}</p>
        </div>
        <hr>
        <br>
        <div>
            <p>复选框</p>
            <input type="checkbox" id="checkbox" v-model="checked">
            <label for="checkbox">{{checked}}</label>
        </div>
        <hr>
        <br>
        <div>
            <input type="checkbox" value="jack" id="jack" v-model="checkednames">
            <label for="jack">jack</label>
            <input type="checkbox" value="john" id="john" v-model="checkednames">
            <label for="john">john</label>
            <input type="checkbox" value="Mike" id="Mike" v-model="checkednames">
            <label for="Mike">Mike</label>
            <br>
            <span>Checked names:{{checkednames}}</span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            message :'',
            checked : true,
            checkednames:[]
        }
    }
}
</script>
