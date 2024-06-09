import { getValue } from './util'

const ele = document.createElement('span')
ele.innerText = getValue()
document.body.appendChild(ele)