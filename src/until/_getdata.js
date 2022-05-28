function getdata(table, page = 1, condition = {}, pageSize = 10) {
  if (this.$store.state.dataLoaded)
    return;
  let Parmas = {
    table: table,
    condition: condition,
    page: page,
    pageSize: pageSize,
  }
  return new Promise((resolve, reject) => {
    this.$axios({
      url: "/search",
      params: Parmas,
      method: "GET",
    }).then((res) => {
      // State judgment
      let message = res.data.data.message;
      resolve(message);
    }).catch((err) => {
      reject(err);
    })
  })
}

export default getdata;
