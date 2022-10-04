<template>
    <div class="input-table-header col-1">
        <span class="cbb-cl">
            <p>=</p>
        </span>
        <div class="block">
            <el-date-picker style=" width:160px !important ; font-size: 13px; font-weight:100" v-model="now"
                :disabled-date="disabledDate" :shortcuts="shortcuts" :size="size" type="date" placeholder="dd/mm/yyyy"
                format="DD/MM/YYYY" />
        </div>
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

span.cbb-cl {
    border-right: 1px solid #bbb;
    display: flex;
    margin-top: 0px !important;
    font-weight: 100;
    width: 10%;
    padding-right: 10px;
    height: 100%;

}

.cbb-cl p {
    padding-bottom: 15px;
    margin: 10px 0px;
}

.el-input__wrapper {
    box-shadow: none !important;
    padding: 4px 16px;
    margin-bottom: 8px;
}

.el-icon svg {

    margin-bottom: 20px;

}

.el-input .el-input__icon {
    padding-left: 16px;
}

/* .col-1 input{
    width: ;
} */

.input-table-header {
    padding-left: 4px;
    display: flex;
    background-color: #fff;
    padding-top: 0px;
    padding-bottom: 0px;
    height: 30px;


}

.input-table-header input {
    width: 100%;
    border: none;
    padding-top: 6px;
    height: 100%;

}

/* .input-table-header input:focus{
    border-left: 1px solid #fff;
} */
.el-input__inner {
    border-left: none;
}
</style>
<script>
import {
    ElDatePicker,

} from "element-plus/dist/index.full.js";
import 'element-plus/es/components/message/style/css'


export default {
    components: {
        ElDatePicker,

    },
    data() {
        return {
            now: '22/09/2020',

        }
    }
}
</script>