<template>
    <div class="dialog-form">
        <div class="form">
            <div class="form-header">
                <div class="form-h-left">{{textForm.discountCode}}</div>
                <div class="form-h-right icon-close"></div>
            </div>
            
            <div class="form-main">
                <div class="form-hd">
               Chi tiết mã giảm giá
            </div>
                <div class="discount">
                    <div class="group-form">
                        <label for="" class="lb-form">{{textForm.product}} <p>(*)</p> </label>
                        <input type="text" class="form-input">
                    </div>
                    <div class="group-form">
                        <label for="" class="lb-form">{{textForm.applyFor}} <p>(*)</p> </label>
                        <input type="text" class="form-input">
                    </div>
                    <!-- <div class="group-form">
                        <label for="" class="lb-form">{{textForm.product}} <p>(*)</p> </label>
                        <input type="text" class="form-input">
                    </div> -->
                    <div class="group-form">
                        <label for="" class="lb-form">{{textForm.dateStart}} <p>(*)</p> </label>
                        <div class="dateTime">
                                <label for="">Từ</label>
                                <div class="block">
                                    <el-date-picker type="date" placeholder="dd/mm/yyyy" format="DD/MM/YYYY" />
                                </div>
                            </div>
                            <div class="dateTime">
                                <label for="">Đến</label>
                                <div class="block">
                                    <el-date-picker type="date" placeholder="dd/mm/yyyy" format="DD/MM/YYYY" />
                                </div>
                            </div>
                    </div>
                    <div class="group-form">
                        <label for="" class="lb-form">{{textForm.discountFor}} <p>(*)</p> </label>
                      <div style="display: flex; margin-top: 6px;">
                        <input type="radio" value="0" name="disFor" style="margin: -4px 8px 0px 8px " > {{textForm.packageProduct}}
                        <input type="radio" value="1" name="disFor" style="margin: -4px 8px 0px 8px "> {{textForm.product}}
                        <input type="radio" value="2" name="disFor" style="margin: -4px 8px 0px 8px "> {{textForm.fullOrder}}
                       
                      </div>
                    </div>
                    <div class="group-form">
                        <label for="" class="lb-form">{{textForm.discountType}} <p>(*)</p> </label>
                        <div>
                        <div style="display: flex; margin-top: 6px; margin-bottom: 20px;">
                        <input  name="disType" type="radio" style="margin: -4px 8px 0px 4px;  " > %
                        <input type="text" style="margin: -8px 8px 0px 54px "> 
                    
                      </div>
                      <div style="display: flex; margin-top: 6px; margin-bottom: 20px;">
                        <input name="disType" type="radio" style="margin: -4px 8px 0px 4px " > {{textForm.money}}
                        <input type="text" style="margin: -8px 8px 0px 25px "> 
                    
                        </div>
                       
                      </div>
                    </div>
                    <div class="group-form">
                        <label for="" class="lb-form">{{textForm.beforeDiscount}} <p>(*)</p> </label>
                        <input type="text" class="form-input" style="width: 200px">
                    </div>
                    <div class="group-form">
                        <label for="" class="lb-form">{{textForm.reason}} <p>(*)</p> </label>
                        <textarea style="border: 1px solid #ccc; margin-bottom: 10px" rows="4" cols="83"></textarea>
                    </div>
                    <div class="group-form">
                        <label for="" class="lb-form">{{textForm.category}} <p>(*)</p> </label>
                        <div>
                        <div style="display: flex; margin-top: 6px; margin-bottom: 20px;">
                        <input name="category" type="radio" style="margin: -4px 8px 0px 4px;  " > {{textForm.GD}}
                      
                    
                      </div>
                      <div  style="display: flex; margin-top: 6px; margin-bottom: 20px;">
                        <input type="radio" name="category" style="margin: -4px 8px 0px 4px " > {{textForm.GDOffice}}
                       
                    
                        </div>
                        <div  style="display: flex; margin-top: 6px; margin-bottom: 20px;">
                        <input type="radio" name="category" style="margin: -4px 8px 0px 4px " > {{textForm.manager}}
                       
                    
                        </div>
                       
                      </div>
                    </div>
                    <div class="group-form">
                        <label for="" class="lb-form">{{textForm.discountByPosition}} <p>(*)</p> </label>
                        <input type="text" class="form-input">
                    </div>
                    <div class="group-form">
                        <label for="" class="lb-form">{{textForm.requestedBy}} <p>(*)</p> </label>
                        <input type="text" class="form-input">
                    </div>
                </div>
                <div class="form-hd">
              {{textForm.infoCustomer}}
            </div>
                <div class="customer">
                    <div class="group-form">
                        <label for="" class="lb-form">{{textForm.identityNumber}} <p>(*)</p> </label>
                        <input type="text" class="form-input">
                    </div>
                    <div class="group-form">
                        <label for="" class="lb-form">{{textForm.customerName}} <p>(*)</p> </label>
                        <input type="text" class="form-input">
                    </div>
                    <div class="group-form">
                        <label for="" class="lb-form">{{textForm.customerAddress}} <p>(*)</p> </label>
                        <input type="text" class="form-input">
                    </div>
                    <div class="group-form">
                        <label for="" class="lb-form">{{textForm.budgetCode}} <p>(*)</p> </label>
                        <input type="text" class="form-input" style="width: 200px; margin-right: 20px;">
                        <label for="" class="lb-form" >{{textForm.founding }} <p>(*)</p> </label>
                        <input type="date" class="form-input" style="width: 200px;">
                      
                    </div>
                    <div class="group-form">
                        <label for="" class="lb-form">{{textForm.contact}} <p>(*)</p> </label>
                        <input type="text" class="form-input">
                    </div>
                   
                        <div class="group-form">
                        <label for="" class="lb-form">{{textForm.PhoneNumber }} <p>(*)</p> </label>
                        <input type="text" class="form-input">
                    </div>
                    <div class="group-form">
                        <label for="" class="lb-form" >{{textForm.PhoneNumber }} <p>(*)</p> </label>
                        <input type="text" class="form-input" style="width: 200px; margin-right: 20px;">
                        <label for="" class="lb-form">{{textForm.email }} <p>(*)</p> </label>
                        <input type="text" class="form-input" style="width: 200px">
                    </div>
                   
                    

                </div>
                <div class="form-footer">
              <button class="icon-refuse">Đóng</button>
              <button class="icon-save">Cất</button>
              <a href="https://testpromotionprocess.misa.vn/">úhoiwshvows</a>
            </div>
            </div>

        </div>
    </div>
</template>
<style>
.dialog-form{
z-index: 6;
 background-color: rgba(6, 6, 6, 0.2);
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  top: 0px;
  bottom: 0;
  left: 0px;
  right: 0;
 
}
.form{
    font-family: Helvetica,Tahoma,Arial,sans-serif;
    font-size: 13px;
    padding: 0px 0px 8px;
    width: 833px;
    height: 600px;
    display: block;
    margin: auto;
    z-index: 7;
    border-style: solid;
    background-color: #fff;
    border-radius: 4px;
    border: none;
   
}
.form-header{
    background-color: #0099F9;
    height: 34px;
    font-size: 13px;
    font-weight: bold;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 9px;
    position: sticky;
    top: 0;
    z-index: 10px;
    
    
}
.form-footer{
    background-color: #fff;
    height: 44px;
    font-size: 13px;
    font-weight: bold;
    
    display: flex;
    justify-content:end;
    flex-direction: row-reverse;
    align-items: center;
    padding: 0px 9px;
    position: sticky;
    bottom: 0;
    z-index: 10px;
    border-top: 1px solid #ccc;

}
.form-footer button{
    padding:6px;
    border-radius: 3px;
    border: 1px solid #ccc;
    min-width: 80px;
    height: 32px;
    margin: 10px;
}
.icon-refuse{
   
   background-position: 2px center;
}
.icon-save{
    background-position: 4px center;
}
.form-h-left{

}
.form-h-right{

}
.form-hd{
    font-size: 13px;
    font-weight: bold;
    background-color: #f5f5f5;
    height: 37px;
    padding: 10px;
    display: block;
    box-sizing: border-box;
}

.form-main{
    overflow: auto;
    height: 566px;
    
}
.discount{
    height: auto;
    margin: 8px;

}
.group-form{
    display: flex;

}
.lb-form{
    display: flex;
    margin-top: 8px;
    min-width: 170px; 
    padding-right: 8px;

}
.lb-form p{
    color: red;
    margin-right: 10px;
    margin-top: 0px;
    margin-left: 10px;
}
.form-input{
    width: 632px;
    height: 28px;

}
.customer{
    height: auto;
    margin: 8px;

}
.form-main::-webkit-scrollbar{
    background-color: #fff;
    width: 16px;
    height: 16px;
   
   
}
.form-main::-webkit-scrollbar-thumb{
   
   background-color: #9e9e9e;
   border-radius: 15px;
   opacity: .3;
   border: 4px solid transparent;
   background-clip: padding-box;
  
}
input[type="radio"]:after {
  width: 18px;
  height: 18px;
  border-radius: 15px;
  top: -2px;
  left: -1px;
  position: relative;

  content: "";
  display: inline-block;
  visibility: visible;
}
input[type="radio"]:checked:after {
  width: 20px;
  height: 20px;
  border-radius: 15px;
  top: 0px;
  left: 0px;
  position: relative;
  background: url("@/assets/icon/radio.svg");
  /* color:green; */
  content: "";
  display: inline-block;
  visibility: visible;
}
input[type="radio"]{
    width: 20px;
  height: 20px;
  

}
</style>
<script>
import textForm from "@/locales/localeForm"
export default {
    data() {
        return {
            textForm:textForm
        }
    }
}
</script>