import AsyncStorage from '@react-native-community/async-storage'

export default class DataStore {
  //校验时间
  static checkTimestampValid(timestamp) {
    const currentDate = new Date();
    const targetDate = new Date();
    targetDate.setTime(timestamp);
    if (currentDate.getMonth() !== targetDate.getMonth()) return false;
    if (currentDate.getDate() !== targetDate.getDate()) return false;
    if (currentDate.getHours() - targetDate.getHours() > 4) return false; //有效期4 个⼩ 小时
    // if (currentDate.getMinutes() - targetDate.getMinutes() > 1)return false; return true;
  }
  //入口
  fetchData(url) {
    return new Promise((resolve, reject) => {
      //获取本地数据 
      this.fetchLocalData(url)
        .then((wrapdata) => {
          //检查有效期
          if (wrapdata && DataStore.checkTimestampValid(wrapdata.timestamp)) {
            resolve(wrapdata)
          } else {
            //获取⽹网络数据 
            this.fetchNetData(url)
              .then((data) => { //给数据打个时间戳
                resolve(this._wrapData(data))
              })
              .catch((e) => {
                reject(e)
              })
          }
        })
        .catch(error => {
          this.fetchNetData(url)
            .then(data => {
              resolve(this._wrapData(data));
            })
            .catch(error => {
              reject(error);
            });
        });
    })
  }
  //存储数据
  saveData(key, value, cb) {
    if (!key || !value) return
    AsyncStorage.setItem(key, JSON.stringify(this._wrapData(value)), cb)
  }
  //打时间戳——给离线数据，便于后期计算
  _wrapData(data) {
    return {
      data: data,
      timestamp: new Date().getTime()
    }
  }

  //获取本地数据
  fetchLocalData(key) {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(key, (err, result) => {
        if (!err) {
          resolve(JSON.parse(result)) // getItem获取到的是string，我们需要将其反序列化 为object
        } else {
          reject(err)
        }
      })
    })
  }
  //获取网络请求
  fetchNetData(url) {
    return new Promise((resolve, reject) => {
      fetch(url).then((response) => {
        return response.json()
      }).then((responsData) => {
        this.saveData(url, responsData)
        resolve(responsData)
      }).catch(e => {
        reject(e)
      })
    })
  }
}