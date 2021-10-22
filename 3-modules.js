//modules : encapsulated code share the minimum 
const names = require('./4-names') //eğer aynı seviyedeyse tek ./ ile 2 3 yularda ise ../ ile başlıyorsun. Bunun sayesinde 4-namesteki exportsu aldın 
const sayHi = require('./5-utils')
const data=require('./6-alternative-flavor')
require('./7-mind-grenade')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)