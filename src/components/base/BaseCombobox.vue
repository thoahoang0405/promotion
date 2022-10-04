<template>
    <div class="combobox">
        <div class="cbb-input">
        <input v-model="val" @blur="blurInput" :placeholder="defaultValue" title="" type="text" />
        <div class="btn-cbb" @click="isShowMenu=!isShowMenu">
            <div class="icon-cbb"></div>
        </div>
        </div>
       
        <div class="option-cbb" v-show="isShowMenu">
            <div v-for="item in valueArr" v-bind:key="item.key" >

                <div @click="addValue(item)" :class="{act: isActive == item.key }" class="item-option"> {{item.value}}</div>
                <!-- <div class="item-option">tuần này</div>
                <div class="item-option">tuần này</div>
                <div class="item-option">tuần này</div>
                <div class="item-option">tuần này</div> -->
            </div>
        </div>
    </div>
</template>
<script>
import $ from "jquery"

export default {
    components: {

    },
    watch: {
        valueArr: function (value) {
            this.arrVl = value;
            console.log(this.arrVl)
        }

    },
    props: [
        "valueArr"
    ],
    data() {
        return {
            arrVl: null,
            isShowMenu: false,
            val: "",
            isActive: "",
            defaultValue:""

        }
    },
    mounted() {
        var me=this
        $(window).click(function (e) {
        if ($(e.target).attr("class") !== "cbb-input" && $(e.target).attr("class") !== "option-cbb" && !$(".option-cbb").has(e.target).length  && !$(".cbb-input").has(e.target).length) {
        me.isShowMenu=false
      }
    })
},

    methods: {
        addValue(item) {
            this.val = item.value
            this.isShowMenu = false;
            this.isActive=item.key
            this.defaultValue= item[0].key
        }
    }
}
</script>
<style>
 @import url(../../assets/css/base/icon.css);
.combobox {
    margin: 10px;
    position: relative;
}

.icon-cbb {
  
    width: 10px;
    height: 6px;
    margin: 0 auto;
   
  
}
.cbb-input{
    height: 30px;
    position: relative;
   
    
}

.act{
    background-color: #d6e7f9;
}

.combobox input {
    height: 30px;
    padding-left: 8px;
    display: flex;
    justify-content: end;
}

.cbb-input .btn-cbb {
    position: absolute;
    /* width: 30px; */
    
    cursor: pointer;
    margin-left:100%;
    margin-top: -14%;
   
}
.option-cbb::-webkit-scrollbar{
    width:10px;
   
}
.option-cbb::-webkit-scrollbar-thumb{
    background-color: #bbb;
   border-radius: 6px;
}
.option-cbb {
    padding-top: 10px;
    max-height: 160px;
    overflow-y: auto;
    width:180px;
    background-color: #fff;
    border: 1px solid #ddd;
    position: absolute;
    z-index: 10;
}

.item-option {
    height: 20px;
    font-size: 13px;
    padding-left: 8px;
    padding-top: 5px;
}

.item-option:hover {
    background-color: #d6e7f3;
}
</style>