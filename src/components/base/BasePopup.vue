<template>
    <div class="form-popup">
        <div class="popup-m">
            <div class="popup-header">
                <p  > MISA Promotion Process</p>
                  <div class="form-h-right icon-close" ></div>
            </div>
          
            <div class="popup-main">
              <div class="icon-warning"></div>
              <div class="text-warning">Khoong duoc xoa</div>

            </div>
            <div class="popup-footer">
                <button class="btn-close-popup">Đóng</button>
            </div>



        </div>
       
    </div>

</template>
<style>
.form-popup{
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

.popup-m{
    width: 250px;
    height: 100px;
    font-family: Helvetica,Tahoma,Arial,sans-serif;
    font-size: 13px;
    padding: 0px 0px 8px;
    display: block;
    margin: auto;
    z-index: 7;
    border-style: solid;
    background-color: #fff;
    border-radius: 4px;
    border: none;

   
}
.popup-header
{
    background-color: #0099F9;
    height: 35px;
    width: 100%;
    margin-top: -16px;
    font-weight: bold;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    font-size: 13px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    box-sizing: border-box;
    
}
.popup-main{
    /* text-align: left; */
   display: flex;
   margin: 10px;

}
.text-warning{
    margin: 8px 20px;
}
.icon-warning{
    background: url("@/assets/img/iconWarning.axd") no-repeat;
    width: 40px;
    height: 30px;
    
}

.btn-close-popup{
   
    border-radius: 3px;
    padding: 0 4px;
    border: 1px solid #b0bec5;
    font-weight: bold;
    margin-right: 10px;
    cursor: pointer;
    display: inline-block;
    line-height: 30px;
    height: 30px;
    width: 75px;
    background-color: #fff;
}
.btn-close-popup:hover{
    background-color: #e2f1e9;
}
.popup-footer{
    display: flex;
    justify-content: end;
}
.btn-popup a{
    color: #ffffff;
    text-decoration: none;
}


</style>