<template>

    <div class="input-table-header col-1">
        <span style="margin-top: 14px">=</span>
        <input class="input-text" type="text" >
       
    </div>
</template>

<style>
    .text-table-header {
    border-bottom: 1px solid #bbb;
    height: 25px;
    width: 100%;
    padding: 4px 0px;
    background-color: #f4f7fa;


}


.input-table-header {
    padding-left: 4px;
    display: flex;
    background-color: #fff;
    padding-top: 0px;
    padding-bottom: 0px;
    height: 30px;
   
    
}
.input-table-header .input-text{
    width: 90%;
    border: none;
    padding-top: 10px;
    height: 100%;
    border-left: 1px solid #bbb;
    min-width: 150px;
   
}
.input-table-header .input-text:focus{
    border-left: 1px solid #bbb;
}

.input-table-header span {
    font-weight: 100;
    width: 10%;
    padding-right: 10px;
    height: 100%;
    margin-top: 10px !important;
    

}
</style>
<script>
   
     export default{
        components:{
           
        },
        data(){
            return{

            }
        }
     }
</script>