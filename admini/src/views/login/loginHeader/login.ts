import loginData from './loginData'
import { defineComponent } from 'vue'
export default defineComponent({
    async submitForm(this:any){
        if(loginData.ruleForm.pass != undefined && loginData.ruleForm.checkPass != undefined){
           if(loginData.ruleForm.pass.length >= 5 && loginData.ruleForm.checkPass.length >= 11){
               
           }else{
               
           }
        }
    }
})