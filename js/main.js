const obj = {
    checkBox: true,
    innerObj:{
        innerProperty:true
    }
};

const copyOfObj = JSON.parse(JSON.stringify(obj));

delete copyOfObj.checkBox;

copyOfObj.innerObj.innerProperty = 10;

console.log(obj);


