function saveDataLocalStorage(form){
    localStorage.setItem('phoneBookList', JSON.stringify(form)); 
}

function getDataLocalStorage(){
    const data = JSON.parse(localStorage.getItem('phoneBookList'));
    return data === null ? [] : data;
}

export function getAllData(){
    const data = getDataLocalStorage();
    return data;
}

export function searchData(value){
    const mapSearchValue = value.toLowerCase();
    const data = getAllData();

    const newFilterData = data.filter(el => {
        return el.fullname.toLowerCase().includes(mapSearchValue) ||
        el.email.toLowerCase().includes(mapSearchValue) ||
        el.phoneNumber.toLowerCase().includes(mapSearchValue) ||
        el.address.toLowerCase().includes(mapSearchValue)
    });

    return newFilterData;
}

export function deleteData(id){
    const data = getAllData();
    const copyList = data.filter(el => el.id !== id);
    saveDataLocalStorage(copyList);  
}

export function findDataById(id){
    const data = getAllData();
    const find = data.find(el => el.id === id);

    return find;
}

export function updateData(form){
    const listData = getAllData();
    const getIndex = listData.findIndex(el => el.id === form.id);

    listData[getIndex] = {
        id: form.id,
        fullname: form.fullname,
        phoneNumber: form.phoneNumber,
        email: form.email,
        address: form.address
    }

    saveDataLocalStorage(listData);
}

export function insertData(form){
    let list = [];
    list = getAllData();

    console.log(form)
    console.log(list);

    const data = {...form, id: Math.floor(Math.random() * 99999) + 1};
    list.push(data);

    saveDataLocalStorage(list)   
 
}
