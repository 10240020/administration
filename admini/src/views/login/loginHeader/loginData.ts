import vue, { reactive } from 'vue'

let data = reactive({
    icon:[{
        icon:'right'
    }],
    welcome:'welcome To You',
    here:'What fortunate breeze has blown you here?',
    ruleForm:{
        pass:'',
        checkPass:'',
    },
    Banner:require('@/assets/login/login.gif')
})

export default data