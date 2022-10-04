<template>
    <div class="input-table-header col-1">
        <span style="margin-top: 14px">=</span>
        <Combobox class="status" :valueArr="arrStatus"></Combobox>
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

.input-table-header input {
    width: 90%;

    padding-top: 10px;
    height: 100%;


}

.input-table-header .combobox {
    margin: 0px !important;
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
import Combobox from "../base/BaseCombobox.vue";
export default {
    components: {
        Combobox
    },
    data() {
        return {

        }
    }
}
</script>