<template>
    <TheHeader></TheHeader>
    <Voucher></Voucher>
    </template>
    <style >
    @import url('../../../assets/css/base/style.css');
    </style>
    <script>
    import TheHeader from "../manage/TheHeader.vue";
    import Voucher from "@/components/layout/manage/TheVoucher.vue"
    
        export default{
        data() {
            return {
               TheHeader
            };
        },
        components: { TheHeader,Voucher }
    }
    </script>