<template>
    <div>
        <div class="main-voucher">
        <div class="main-hd">
            <div class="m-row" style="display: flex; justify-content:space-between">
            <div class="row">
                <div class="item-row date large">
                    <label for="">Ngày yêu cầu</label>
                    <Combobox :valueArr="arr"></Combobox>
                </div>
                <div class="dateTime">
                    <label for="">Từ</label>
                    <div class="block">
                    <el-date-picker
                    type="date" placeholder="dd/mm/yyyy" format="DD/MM/YYYY" />
                    </div>
                </div>
                <div class="dateTime">
                    <label for="">Đến</label>
                    <div class="block">
                    <el-date-picker
                    type="date" placeholder="dd/mm/yyyy" format="DD/MM/YYYY" />
                    </div>
                </div>
            </div>
            <button class="btn-add " @click="showForm(true)" style="height:  32px; ">
                <div class="icon-add"></div>
                <p>Lập yêu cầu cấp MGG</p>
            </button>
            </div>
            
            <div class="row">
                <div class="item-row">
                    <label for="">Trạng thái</label>
                    <Combobox class="status" :valueArr="arrStatus"></Combobox>
                </div>
               
                <div>
                    <button class="btn-getData">Lấy dữ liệu</button>
                </div>
            </div>
            <div class="row">
               <button class="btn-iconAction-m "><div class="icon-watch"></div> xem</button> 
               <button class="btn-iconAction-m "><div class="icon-edit"></div> Sửa</button>
                <button class="btn-iconAction-m "><div class="icon-request"></div> Gửi yêu cầu</button>
                
                <button class="btn-iconAction-m "><div class="icon-unSend"></div> Thu hồi yêu cầu</button>
                <button class="btn-iconAction-m "><div class="icon-refuse2"></div> Xóa yêu cầu</button>
                <button class="btn-iconAction-m"><div class="icon-send"></div> Gửi mã cho khách hàng</button>
            </div>
        </div>
        <splitpanes horizontal style="height: 420px"  class="default-theme">
        <Pane  min-size = "9"  max-size = "100" >
         <Table></Table>
        
       
        </Pane>
          
        
        <Pane  max-size="100">
             <Info v-if="isShowInfo"></Info>
        </Pane>
       

        </splitpanes>
        

    </div>
<FormDetail v-show="isShowForm" @closeForm="showForm"></FormDetail>
<Popup v-show="false"></Popup>
    </div>
   
</template>
<style scope>
@import url("@/assets/css/base/voucher.css");

.item-row .btn-cbb {
    position: absolute;
    /* width: 30px; */
    cursor: pointer;
    margin-left: 100%;
    margin-top: -13%;

}
.splitpanes__splitter {
    margin: 0px 8px;
}
.large .combobox input{
    width: 200px;
}
.large .btn-cbb{
    margin-left: 100%;
    margin-top: -13%;
}
.date .combobox .cbb-input .btn-cbb {
    position: absolute;
    /* width: 30px; */
    cursor: pointer;
    margin-left: 87%;
    margin-top: -8%;
}
</style>
<script>
import Combobox from "@/components/base/BaseCombobox.vue";
import Table from "@/components/base/BaseGrid.vue"
import Info from "@/components/base/VoucherPanel.vue";
// import $ from "jquery"
import FormDetail from "@/components/layout/employee/TheFormDetailEmp.vue"
import Popup from "@/components/base/BasePopup.vue"
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import {
  ElDatePicker,

} from "element-plus/dist/index.full.js";
import 'element-plus/es/components/message/style/css'


export default {
    components: {
        Combobox, Table, Info,FormDetail, Splitpanes, Pane ,Popup ,ElDatePicker
    },
    data() {
        return {
            isShowInfo: true,
            isShowForm: false,
            arr: [
                { key: 1, value: "Tuần này" },
                { key: 2, value: "Tháng này" },
                { key: 3, value: "6 tháng đầu năm" },
                { key: 4, value: "6 tháng cuối năm" },
                { key: 5, value: "năm 2021" },
                { key: 6, value: "năm 2020" },
                { key: 7, value: "năm 2019" },

            ],
            arrStatus: [
                { key: 1, value: "Tất cả" },
                { key: 2, value: "Đã duyệt" },
                { key: 3, value: "Chưa duyệt" },
                { key: 4, value: "Đã từ chối" },
                { key: 5, value: "Đã gửi cho khách hàng" },
            ],
            arrCategory: [
                { key: 1, value: "Cần thực hiện" },
                { key: 2, value: "Đã tham gia" },

            ]
        }
    },
    methods: {
        // showInfo() {
        //     this.isShowInfo = !this.isShowInfo
        //     if (!this.isShowInfo) {
        //         $(".table-main").css("max-height", 370 + "px");
        //         $(".item-up").css("margin-top", -125 + "px")
        //     } else {
        //         $(".table-main").css("max-height", 260 + "px")
        //         $(".item-up").css("margin-top", -10 + "px")
        //     }

        // },
        showForm(value){
            this.isShowForm=value
        }
    }
}
</script>