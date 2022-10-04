<template>
<TheHeader></TheHeader>
<EmployeeVoucher></EmployeeVoucher>
</template>
<style >
@import url('../../../assets/css/base/style.css');
</style>
<script>
import TheHeader from "../employee/TheHeader.vue";
import EmployeeVoucher from "@/components/layout/employee/TheEmployeeVoucher.vue"

    export default{
    data() {
        return {
           TheHeader
        };
    },
    components: { TheHeader,EmployeeVoucher }
}
</script>