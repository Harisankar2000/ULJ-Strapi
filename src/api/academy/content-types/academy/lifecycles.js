const database = require("../../../../../config/database");
module.exports = {
  // beforeCreate(event) {
  //   const { data, where, select } = event.params;
  //   event.params.data.coursefees = event.params.data.coursefees * 0.9;
  // },
  // afterCreate(event) {
  //   const { result } = event;
  //   console.log('yahoo! 10% offer applied', result)
  // },
  // beforeFindOne(event) {
  //   const { data } = event.params
  //   console.log(event)
  //   console.log('before findone')
  //   console.log(event)
  // },
  // afterFindOne(event) {
  //   const { result } = event;
  //   result.courseDetails = result.coursename + "-" + result.coursefees
  //   console.log("after findone", result)
  // },
  // beforeCount(event){
  //   console.log('before count')
  //   event.params= {where:{status:true}}
  //   console.log(event)
  // },
  // afterCount(event){
  //   const { result } = event;
  //   result.entry = true
  //   console.log("after count", result)
  // }
  // beforeFindMany(event) {
  //   const { data } = event.params;
  //   event.params.where = { coursename: "react developer" }
  //   //console.log(event)
  // },
  // afterFindMany(event) {
  //   const { result, params } = event;
  //   console.log(params)
  //   console.log('data displayed...', result)
  // },
  // beforeUpdate(event){
  //   const {data}= event.params;
  //   console.log(event.params.data)
  //   event.params.data.status= null
  //   console.log("updated",event.params.data)
  // },
  // afterUpdate(event){
  //   const {result,params}= event;
  //   console.log('data updated...', result)
  // },
  // beforeUpdateMany(event) {
  //   const { data } = event.params;
  //   console.log("before updateMany")
  //   //console.log(data.content);
  // },
  // afterUpdateMany(event) {
  //   const {result,params}= event.params
  //   result.coursefees = result.coursefees + 1000;
  //   result.params.orderBy= {sort:"ASC"}
  //   console.log("After updateMany....",result)
  // }
};
