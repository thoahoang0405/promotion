<template>
    
  
      <div class="table-main">
        <table>
        <thead>
            <tr>
                <th colspan="1" class="check-first" style="">
                    <input type="checkbox">
                </th>
                <th colspan="2">
                  <div class="text-table-header">{{TextHeader.status}}</div>
                  <ColumnCbb ></ColumnCbb>
              
                    
                </th>
                <th colspan="3">
                  <div class="text-table-header">{{TextHeader.discountByPosition}}</div>
                  <ColumnCbb ></ColumnCbb>
                </th>
                <th colspan="4">
                  <div class="text-table-header">{{TextHeader.petitioner}}</div>
                    <ColumnInput></ColumnInput>
                </th>
                <th colspan="5">
                  <div class="text-table-header">{{TextHeader.department}}</div>
                  <ColumnInput></ColumnInput>
                </th>
                <th colspan="6">
                  <div class="text-table-header">{{TextHeader.product}}</div>
                  <ColumnInput></ColumnInput>
                </th>
                <th colspan="7">
                  <div class="text-table-header" style="min-width: 230px">{{TextHeader.application}}</div>
                  <ColumnInput></ColumnInput>
                </th>
                <th colspan="8">
                  <div class="text-table-header">{{TextHeader.subject}}</div>
                    <ColumnCbb></ColumnCbb>
                </th>
                <th colspan="9">
                  <div class="text-table-header">{{TextHeader.discountType}}</div>
                    <ColumnCbb></ColumnCbb>
                </th>
                <th colspan="10">
                  <div class="text-table-header">{{TextHeader.discountPercent}}</div>
                    <ColumnInput></ColumnInput>
                </th>
                <th colspan="11">
                  <div class="text-table-header">{{TextHeader.money}}</div>
                  <ColumnInput></ColumnInput>
                </th>
                <th colspan="12">
                  <div class="text-table-header">{{TextHeader.useMonth}}</div>
                  <ColumnInput></ColumnInput>
                </th>
                <th colspan="13">
                  <div class="text-table-header">{{TextHeader.minMonth}}</div>
                  <ColumnInput></ColumnInput>
                </th>
                <th colspan="14">
                  <div class="text-table-header">{{TextHeader.numberOfYears}}</div>
                    <ColumnInput></ColumnInput>
                </th>
                <th colspan="15">
                  <div class="text-table-header">{{TextHeader.numberOfMonth}}</div>
                  <ColumnInput></ColumnInput>
                </th>
                <th colspan="16">
                  <div class="text-table-header">{{TextHeader.beforeDiscount}}</div>
                  <ColumnInput></ColumnInput>
                </th>
                <th colspan="17">
                  <div class="text-table-header">{{TextHeader.discount}}</div>
                  <ColumnInput></ColumnInput>
                </th>
                <th colspan="18">
                  <div class="text-table-header">{{TextHeader.SGG}}</div>
                    <ColumnInput></ColumnInput>
                </th>
                <th colspan="19">
                  <div class="text-table-header">{{TextHeader.reason}}</div>
                  <ColumnInput></ColumnInput>
                </th>
                <th colspan="20">
                  <div class="text-table-header">{{TextHeader.identityNumber}}</div>
                  <ColumnInput></ColumnInput>
                </th>
                <th colspan="21">
                  <div class="text-table-header">{{TextHeader.customerName}}</div>
                  <ColumnInput></ColumnInput>
                </th>
                <th colspan="22">
                  <div class="text-table-header">{{TextHeader.customerAddress}}</div>
                    <ColumnInput></ColumnInput>
                </th>
                <th colspan="23">
                  <div class="text-table-header">{{TextHeader.PhoneNumber}}</div>
                  <ColumnInput></ColumnInput>
                </th>
                <th colspan="24">
                  <div class="text-table-header">{{TextHeader.email}}</div>
                  <ColumnInput></ColumnInput>
                </th>
                <th colspan="25">
                  <div class="text-table-header">{{TextHeader.contributorCode}}</div>
                  <ColumnInput></ColumnInput>
                </th>
                <th colspan="26">
                  <div class="text-table-header">{{TextHeader.requestDate}}</div>
                    <ColumnDate></ColumnDate>
                </th>
                <th colspan="27">
                  <div class="text-table-header">{{TextHeader.approvalDate}}</div>
                  <ColumnDate></ColumnDate>
                </th>
                <th colspan="28">
                  <div class="text-table-header">{{TextHeader.requestedBy}}</div>
                  <ColumnInput></ColumnInput>
                </th>
                <th colspan="29">
                  <div class="text-table-header">{{TextHeader.rejectionDate}}</div>
                  <ColumnDate></ColumnDate>
                </th>
                <th colspan="30">
                  <div class="text-table-header">{{TextHeader.rejectionBy}}</div>
                    <ColumnInput></ColumnInput>
                </th>
                <th colspan="31">
                  <div class="text-table-header">{{TextHeader.rejectionReason}}</div>
                  <ColumnInput></ColumnInput>
                </th>
                <th colspan="32">
                  <div class="text-table-header">{{TextHeader.requestOfDate}}</div>
                  <ColumnDate></ColumnDate>
                </th>
                <th colspan="33">
                  <div class="text-table-header">{{TextHeader.requestOfBy}}</div>
                  <ColumnInput></ColumnInput>
                </th>
                <th colspan="34">
                  <div class="text-table-header">{{TextHeader.discountCode}}</div>
                    <ColumnInput></ColumnInput>
                </th>
                <th colspan="35">
                  <div class="text-table-header">{{TextHeader.dateStart}}</div>
                  <ColumnDate></ColumnDate>
                </th>
                <th colspan="36">
                  <div class="text-table-header">{{TextHeader.dateEnd}}</div>
                  <ColumnDate></ColumnDate>
                </th>
                <th colspan="37">
                  <div class="text-table-header">{{TextHeader.expiryDate}}</div>
                  <ColumnInput></ColumnInput>
                </th>
                <th colspan="38">
                  <div class="text-table-header">{{TextHeader.category}}</div>
                  <ColumnCbb></ColumnCbb>
                </th>
            </tr>
        </thead>
        
             <tbody class="body-table">
            
            <tr>
                <td colspan="1">
                    <input type="checkbox">
                </td>
                <td colspan="2">Tình trạng chưa xử lý</td>
                <td colspan="3">Tình trạng chưa xử lý</td>
                <td colspan="4">Tình trạng chưa xử lý</td>
                <td colspan="5">Tình trạng chưa xử lý</td>
                <td colspan="6">Tình trạng chưa xử lý</td>
                <td colspan="7">Tình trạng chưa xử lý</td>
                <td colspan="8">Tình trạng chưa xử lý</td>
                <td colspan="9">Tình trạng chưa xử lý</td>
                <td colspan="10">Tình trạng chưa xử lý</td>
            </tr>
            <tr>
                <td colspan="1">
                    <input type="checkbox">
                </td>
                <td colspan="2">Tình trạng chưa xử lý</td>
                <td colspan="3">Tình trạng chưa xử lý</td>
                <td colspan="4">Tình trạng chưa xử lý</td>
                <td colspan="5">Tình trạng chưa xử lý</td>
                <td colspan="6">Tình trạng chưa xử lý</td>
                <td colspan="7">Tình trạng chưa xử lý</td>
                <td colspan="8">Tình trạng chưa xử lý</td>
                <td colspan="9">Tình trạng chưa xử lý</td>
                <td colspan="10">Tình trạng chưa xử lý</td>
            </tr>
            <tr>
                <td colspan="1">
                    <input type="checkbox">
                </td>
                <td colspan="2">Tình trạng chưa xử lý</td>
                <td colspan="3">Tình trạng chưa xử lý</td>
                <td colspan="4">Tình trạng chưa xử lý</td>
                <td colspan="5">Tình trạng chưa xử lý</td>
                <td colspan="6">Tình trạng chưa xử lý</td>
                <td colspan="7">Tình trạng chưa xử lý</td>
                <td colspan="8">Tình trạng chưa xử lý</td>
                <td colspan="9">Tình trạng chưa xử lý</td>
                <td colspan="10">Tình trạng chưa xử lý</td>
            </tr>
            <tr>
                <td colspan="1">
                    <input type="checkbox">
                </td>
                <td colspan="2">Tình trạng chưa xử lý</td>
                <td colspan="3">Tình trạng chưa xử lý</td>
                <td colspan="4">Tình trạng chưa xử lý</td>
                <td colspan="5">Tình trạng chưa xử lý</td>
                <td colspan="6">Tình trạng chưa xử lý</td>
                <td colspan="7">Tình trạng chưa xử lý</td>
                <td colspan="8">Tình trạng chưa xử lý</td>
                <td colspan="9">Tình trạng chưa xử lý</td>
                <td colspan="10">Tình trạng chưa xử lý</td>
            </tr>
            <tr>
                <td colspan="1">
                    <input type="checkbox">
                </td>
                <td colspan="2">Tình trạng chưa xử lý</td>
                <td colspan="3">Tình trạng chưa xử lý</td>
                <td colspan="4">Tình trạng chưa xử lý</td>
                <td colspan="5">Tình trạng chưa xử lý</td>
                <td colspan="6">Tình trạng chưa xử lý</td>
                <td colspan="7">Tình trạng chưa xử lý</td>
                <td colspan="8">Tình trạng chưa xử lý</td>
                <td colspan="9">Tình trạng chưa xử lý</td>
                <td colspan="10">Tình trạng chưa xử lý</td>
            </tr>
            <tr>
                <td colspan="1">
                    <input type="checkbox">
                </td>
                <td colspan="2">Tình trạng chưa xử lý</td>
                <td colspan="3">Tình trạng chưa xử lý</td>
                <td colspan="4">Tình trạng chưa xử lý</td>
                <td colspan="5">Tình trạng chưa xử lý</td>
                <td colspan="6">Tình trạng chưa xử lý</td>
                <td colspan="7">Tình trạng chưa xử lý</td>
                <td colspan="8">Tình trạng chưa xử lý</td>
                <td colspan="9">Tình trạng chưa xử lý</td>
                <td colspan="10">Tình trạng chưa xử lý</td>
            </tr>
            <tr>
                <td colspan="1">
                    <input type="checkbox">
                </td>
                <td colspan="2">Tình trạng chưa xử lý</td>
                <td colspan="3">Tình trạng chưa xử lý</td>
                <td colspan="4">Tình trạng chưa xử lý</td>
                <td colspan="5">Tình trạng chưa xử lý</td>
                <td colspan="6">Tình trạng chưa xử lý</td>
                <td colspan="7">Tình trạng chưa xử lý</td>
                <td colspan="8">Tình trạng chưa xử lý</td>
                <td colspan="9">Tình trạng chưa xử lý</td>
                <td colspan="10">Tình trạng chưa xử lý</td>
            </tr>
            <tr>
                <td colspan="1">
                    <input type="checkbox">
                </td>
                <td colspan="2">Tình trạng chưa xử lý</td>
                <td colspan="3">Tình trạng chưa xử lý</td>
                <td colspan="4">Tình trạng chưa xử lý</td>
                <td colspan="5">Tình trạng chưa xử lý</td>
                <td colspan="6">Tình trạng chưa xử lý</td>
                <td colspan="7">Tình trạng chưa xử lý</td>
                <td colspan="8">Tình trạng chưa xử lý</td>
                <td colspan="9">Tình trạng chưa xử lý</td>
                <td colspan="10">Tình trạng chưa xử lý</td>
            </tr>
        </tbody>
        
       

    </table>
     </div>
    <div class="paging">
          <div class="paging-left">
           
            <Paginate v-model="page" :page-count="totalPage" :page-range="3" :margin-pages="1"
                :click-handler="clickCallback" :prev-text="'Trước'" :next-text="'Sau'" :container-class="'pagination'"
                :page-class="'page-item'">
              </Paginate>
              <div class="icon-refresh">

              </div>
          </div>
          <div class="paging-right">
            <div class="page">
              <div class="content-page" >
              {{pageDefault}}
              </div>
              <div class="dropup-page">
                <div class="icon-dropup icon-cbb" @click="isShowPage=!isShowPage"></div>
                <div class="item-up" v-show="isShowPage">
                  <div class="item-dropup" :class="{act: isActive == '10'}" @click="getPageDefault"  pageSize="10" 
                   >
                    10 
                  </div>
                  <div class="item-dropup" :class="{act: isActive == '20'}" @click="getPageDefault" pageSize="20" >
                    20 
                  </div>
                  <div class="item-dropup" :class="{act: isActive == '30'}"  @click="getPageDefault" pageSize="30" >
                    30 
                  </div>
                  
                </div>
              </div>
            </div>
      
            <div class="page-count">Tổng số: 30 bản ghi </div>
            <div>
              
            </div>
          </div>
         
   
        
        </div>
</template>
<style>

  .row-btn{
    display: flex;
    justify-content: space-around;
  }
  .arr-down-icon{
    background: url(../../assets/img/arr-down.png) no-repeat;
    height: 12px;
    width: 20px;
    margin-top: -5px;
    border: 1px solid #bbb;
    padding: 2px 20px;
    background-position: center;
  
  }
table {
    border-spacing: 0px;
  
    top:10px;
    font-size: 13px;
    width: 100%;
    height:auto;
}

.table-main{
    width:auto;
    overflow: auto;
    height:calc(100% - 36px);
    position: relative;
    border-left: 1px solid #bbb;
    margin:0px 8px;
  }
  /* .tb-main{
    

  } */
.main-body{
    min-height: 1px;
    position: relative;
 /*  */
}
table th {
    border-bottom: 1px solid #bbb;
    border-right: 1px solid #bbb;
    border-top: 1px solid #bbb;
    box-sizing: border-box;
    border-spacing: 0px;
    padding: 0px;
}
th .text-table-header{
 padding-top: 4px;
}
thead tr {
  
    position: sticky;
    top: 0px;
    left: 0px;
    z-index: 4 !important;
    margin-top: 0;
    
}
tbody tr:hover{
  background: #deeefb !important;
}
tbody tr:nth-child(odd) {
  background: #f6f6f6;
}

tbody tr:nth-child(even) {
  background: #fff;
}
.table-main::-webkit-scrollbar-thumb{
   
    background-color: #9e9e9e;
    border-radius: 15px;
    opacity: .3;
    border: 4px solid transparent;
    background-clip: padding-box;
   
}

::-webkit-scrollbar-corner { 
    background: #fff;
   

}
.table-main::-webkit-scrollbar{
    background-color: #fff;
    width: 16px;
    height: 16px;
   
   
}
tbody{
    z-index: 1;
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
}
.table-main::-webkit-scrollbar-track {
  
    box-shadow: 0 0 0 0 #d4d4d4;
    background-color: transparent;
    opacity: .3;
 
  
}
.check-first {
    height: 50px;
    border-right: 1px solid #bbb;
    width: 30px;
    background-color: #f4f7fa;
}

.input-table-header input:focus {
    border-top: 0.5px solid blue;
    border-left: none;
    border-right: none;
    border-bottom: none;

}

tr {
    height: 40px;
    box-sizing: border-box;
}
.act{
    background-color: #d6e7f9;
}
td {
    border-right: 1px solid #bbb;
    border-bottom: 1px solid #bbb;
    padding: 0px 6px;
    box-sizing: border-box;
}
.pagination {
  margin-left: 20px;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #111;
  font-size: 13px;
}

.BorderActive {
  border: 1px solid #0075c0 !important;
}

.page-item:first-child {
  margin-right: 15px;
}
.paging{
    display: flex;
    justify-content: space-between;
    color: #000;
    font-family: Helvetica,Tahoma,Arial,sans-serif;
    font-size: 13px;
    border: 1px solid #bbb;
    height: 37px;
    box-sizing: border-box;
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 5;
    background-color: #fff;
    margin:0px 8px;
}
.page-item {
 
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
  padding: 0;
  margin-left: 5px;
}
.content-page{
    border: 1px solid #bbb;
    padding: 8px 0px 8px 8px;
  margin-top: 1px;
    width: 70px;
}
.page-item.disabled {
  color: #ccc;
}

.page-item.active {
  border: 1px solid #ccc;
  font-weight: 700;
  text-align: center;
}

.page-item.active a {
  width: 24px;
  text-align: center;
}
.pagination {
    margin-left: 0px;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px !important;
    font-size: 13px;
    border-right: 1px solid #bbb;
    padding: 10px 20px;
}

.item-dropup {
  padding: 5px 8px;
}
.item-up {
  background-color: #fff;
  margin-top: -122px;
  width: 80px;
  border: 1px solid #bbb;
  z-index: 10;
  position: absolute;
}

.item-dropup:hover {
 
  background-color: #d6e7f3;
}
.page-count{
    margin: 10px;
}
.paging-left {
  color: #111;
  width: auto;
  display: flex;
 
}
.icon-refresh {
  background: url("../../assets/img/refresh.axd") no-repeat ;
  width: 24px;
  height: 24px;
  color: #bbb;
  margin: 8px 10px;
  cursor: pointer;
}
.paging-right {
  display: flex;
  margin-right: 24px;
  color: #000;
  position: relative;
}

.before-text {
  color: rgb(104, 102, 102);
  margin: 8px;
  margin-top: 10px;
}
.icon-dropup {
  /* background: url("../../assets/icon/") no-repeat 4px; */
  width: 20px;
  height: 16px;

  align-items: center;
  padding: 8px 7px;
  cursor: pointer;
  margin-right: -15px;
  /* margin-left: 36px; */
  margin-top: -20px;
 
}

.iconrotate {
  transform: rotate(180deg) !important;
}

</style>
<script>

import ColumnCbb from "../base/BaseColumnTable.vue";
import ColumnInput from "../base/BaseColumnInputTable.vue"
import Paginate from "vuejs-paginate-next";
import ColumnDate from "../base/BaseColumnDateTable.vue";
import TextHeader from "../../locales/localeTableManage"
// import Combobox from "@/components/base/BaseCombobox.vue"

export default {
    components: {
        ColumnCbb, ColumnInput, ColumnDate,Paginate
    },
    data() {
        return {
            isShowPage:false,
            pageDefault: 20,
            TextHeader:TextHeader,
            pageSize: [
            {key:1, value:"20"},
            {key:1, value:"30"},
            {key:1, value:"50"},

          ]

        }
    },
    methods: {
        getPageDefault(e) {
         
      this.isActive = e.target.getAttribute("pageSize");
      this.pageDefault = e.target.getAttribute("pageSize");
      this.isShowPage=false
      
     
    },

    }
}
</script>