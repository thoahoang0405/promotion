<template>
    <div>
        <div class="main-voucher">
        <div class="main-hd">
            <div class="row">
                <div class="item-row date" style="margin-top:8px">
                    <label for="">Ngày yêu cầu</label>
                    <Combobox :valueArr="arr"></Combobox>
                </div>
                <div class="dateTime">
                    <label for="">Từ</label>
                  
                    <el-date-picker
                    type="date" placeholder="dd/mm/yyyy" format="DD/MM/YYYY" />
                   
                </div>
                <div class="dateTime">
                    <label for="">Đến</label>
                   
                    <el-date-picker
                    type="date" placeholder="dd/mm/yyyy" format="DD/MM/YYYY" />
                   
                </div>
            </div>
            <div class="row">
                <div class="item-row">
                    <label for="" style="margin-top:8px">Trạng thái</label>
                    <Combobox class="status" :valueArr="arrStatus"  style="margin-top:0px"></Combobox>
                </div>
                <div class="item-row">
                    <label for="">Loại yêu cầu</label>
                    <Combobox class="category" :valueArr=" arrCategory"></Combobox>
                </div>
                <div>
                    <button class="btn-getData">Lấy dữ liệu</button>
                </div>
            </div>
            <div class="row">
                <button class="btn-iconAction "><div class=" icon-browser"></div> Duyệt</button> 
              
                <button class="btn-iconAction "><div class="icon-refuse"></div>Từ chối</button>
                <button class="btn-iconAction "><div class="icon-watch"></div> xem</button>
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
<FormDetail v-show="false"></FormDetail>
    </div>
   
</template>
<style>
@import url("@/assets/css/base/voucher.css");

.date .combobox .cbb-input .btn-cbb {
    position: absolute;
    /* width: 30px; */

    cursor: pointer;
    margin-left: 80%;
    margin-top: -10%;

}

</style>
<script>
import Combobox from "@/components/base/BaseCombobox.vue";
import Table from "@/components/base/BaseGrid.vue"
import Info from "@/components/base/VoucherPanel.vue";
import $ from "jquery"
import FormDetail from "@/components/layout/manage/TheFormDetail.vue"
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import {
  ElDatePicker,

} from "element-plus/dist/index.full.js";
import 'element-plus/es/components/message/style/css'
export default {
    components: {
        Combobox, Table, Info,FormDetail,Splitpanes, Pane,ElDatePicker
    },
    data() {
        return {
            isShowInfo: true,
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
        showInfo() {
            this.isShowInfo = !this.isShowInfo
            if (!this.isShowInfo) {
                $(".table-main").css("max-height", 370 + "px");
                $(".item-up").css("margin-top", -125 + "px")
            } else {
                $(".table-main").css("max-height", 260 + "px")
                $(".item-up").css("margin-top", -10 + "px")
            }

        }
    }
}
</script>