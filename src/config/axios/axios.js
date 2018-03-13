/*
* @Author: Administrator
* @Date:   2017-11-10 08:54:32
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-10 09:34:53
*/
import axios from 'axios'
import qs from 'qs'

axios.post('/first',qs.stringify()).then(res=>res.data);