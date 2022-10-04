<template>
    <div class="info-m">

        <div class="info-header">
            <p>Thông tin chung</p>
        </div>
        <div class="info-main">
            <div class="left-main-info">
                <div class="row-info">
                    <div class="name">{{textLabel.product}}</div>
                    <div class="info">Misa</div>
                </div>
                <div class="row-info">
                    <div class="name">{{textLabel.application}}</div>
                    <div class="info"></div>
                </div>
                <div class="row-info">
                    <div class="name">{{textLabel.discountCode}}</div>
                    <div class="info">Misa</div>
                </div>
                <div class="row-info">
                    <div class="name">{{textLabel.discountType}}</div>
                    <div class="info">Misa</div>
                </div>
                <div class="row-info">
                    <div class="name">{{textLabel.discountFor}}</div>
                    <div class="info">Toàn bộ đơn hàng</div>
                </div>
                <div class="row-info">
                    <div class="name">{{textLabel.discountPercent}}</div>
                    <div class="info">0</div>
                </div>
                <div class="row-info">
                    <div class="name">{{textLabel.money}}</div>
                    <div class="info">100.000</div>
                </div>
                <div class="row-info">
                    <div class="name">Số tiền TGG</div>
                    <div class="info">1.000.000</div>
                </div>
                <div class="row-info">
                    <div class="name">Số tiền SGG</div>
                    <div class="info">900.000</div>
                </div>
               
            </div>
            <div class="center-main-info">
                <div class="row-info">
                    <div class="name">{{textLabel. requestOfBy}}</div>
                    <div class="info">Phạm thanh huyền</div>
                </div>
                <div class="row-info">
                    <div class="name">{{textLabel.requestOfDate}}</div>
                    <div class="info">29/09/2022</div>
                </div>
                <div class="row-info">
                    <div class="name">{{textLabel.petitioner}}</div>
                    <div class="info">Phạm thanh huyền</div>
                </div>
                <div class="row-info">
                    <div class="name">{{textLabel.requestOfDate}}</div>
                    <div class="info">29/09/2022</div>
                </div>
                <div class="row-info">
                    <div class="name">{{textLabel.requestedBy}}</div>
                    <div class="info">Phạm thanh huyền</div>
                </div>
                <div class="row-info">
                    <div class="name">{{textLabel.approvalDate}}</div>
                    <div class="info">29/09/2022</div>
                </div>

            </div>
            <div class="right-main-info">
                <div class="row-info">
                    <div class="name">Số tháng tặng thêm</div>
                    <div class="info">0</div>
                </div>
                <div class="row-info">
                    <div class="name">{{textLabel.dateEnd}}</div>
                    <div class="info">29/9/2023</div>
                </div>
                <div class="row-info">
                    <div class="name">Lý do xin duyệt</div>
                    <textarea name="" id="" cols="30" rows="5"></textarea>
                </div>
                <div class="row-info">
                    <div class="name">{{textLabel.rejectionReason}}</div>
                    <textarea name="" id="" cols="30" rows="5"></textarea>
                </div>

            </div>
            <div class="right-main-info"></div>
          
        </div>

    </div>



</template>
<style>
.info-m {
    /* max-height: 120px; */
    position: relative;
    overflow: auto;
    margin: 0;
    padding: 0px;
    font-family: Helvetica, Tahoma, Arial, sans-serif;
    font-size: 13px;
    height: 100%;
    background-color: #fff;
    margin:0px 8px;
   

}

.info-m::-webkit-scrollbar {
    width: 0px;
}

.info-header p {
    color: #238de6;
    border-bottom: 3px solid #238de6;
    width: 110px;
    margin-left: 8px;
    padding-bottom: 4px;
    padding: 8px;
    font-weight: bold;

}

.info-header {
    display: block;
    width: 100%;
    position: sticky;
    /* z-index: 3; */
    top: 0;
    background-color: #fff;
    height: 35px;
    margin-top: -12px;
    padding-top: 0px;

}

.info-main {
    display: flex;
  
    /* margin-top: 15px; */
    justify-content:space-between;
    background-color: #fff;
    
    height: calc(100% - 35px);
   


}

.left-main-info {
    /* display: flex; */
    margin:0px 8px 0px 20px;


}

.center-main-info {
    margin: 0px 0px 0px 30px;

}

.right-main-info {
    margin: 0px 20px 0px 0px;

}

.row-info {
    display: flex;
    padding-top: 15px;

}

.name {
    font-weight: bold;
    margin-right: 10px;
    min-width: 120px;
    margin-right: 10px;

}

.info {
    margin-left: 10px;


}


</style>
<script>
    import textlabel from "@/locales/localeTableManage"
    export default {
        components: {
          
        },
        data(){
            return{
                textLabel: textlabel,
            }
        }
    }
</script>