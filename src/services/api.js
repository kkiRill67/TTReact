import { _apiHost } from '../config/constants'

export async function getAPI(url){
    const res = await fetch(`${_apiHost}${url}`)

    if(!res.ok) {
        throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
}

export async function getLowTable(){
    const res = await getAPI(`/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`)
    return res
}

export async function getBigTable(sizePage=50){
    const res = await getAPI(`/?rows=${sizePage}&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`)
    return res
}