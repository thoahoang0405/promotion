<template>
    <div class="header">
        <div class="main-header">
            <div class="header-left">
                <a href="" class="logo-header">{{Header.titleName}}</a>
                <div class="col-header">
                    <router-link to="" href="" class="voucher">{{Header.voucher}}</router-link>
                </div>
            </div>
            <div class="header-right">
                <div class="user-manual">
                    <span class="icon-manual" style="width: 16px"></span>
                    <span :title="Header.titleManual" class="text-manual">{{Header.manual}}</span>
                </div>
                <div class="user-avatar">
                </div>
                <div class="user-name">
                    <div class="user-fullname">{{ Header.userName}}</div>
                    <div class="user-position">{{ Header.userPosition}}</div>
                </div>
                <div class="user-menu"></div>
            </div>

        </div>
    </div>
</template>
<script>
    import header from "../../../locales/localeHeader";
export default {
    components: {
      
        
    },
    data() {
    return {
       Header: header,
    }}
}
</script>
<style>
@import url(../../../assets/css/base/header.css);
</style>