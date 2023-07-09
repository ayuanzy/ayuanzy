function create_http_get(http, url, query) {
  return new Promise((resolve, reject) => {
    try {
      if (!http) {
        reject(new Error("没有找到相应的函数"))
      }
      http.fetch(url, {
        method: 'GET',
        query: query
      }).then((res) => {
        console.log(res);
        let data_list = [];
        for (let i = 0; i < res.data.list.length; i++) {
          let list = res.data.list[i];
          let patch_res = params_patch(list.vod_play_url, list.vod_play_note);
          let data = {
            type_name: list.type_name,
            vod_name: list.vod_name,
            vod_lang: list.vod_lang,
            vod_actor: list.vod_actor,
            vod_area: list.vod_area,
            vod_class: list.vod_class,
            vod_author: list.vod_author,
            vod_director: list.vod_director,
            vod_duration: list.vod_duration,
            vod_state: list.vod_state,
            vod_tag: list.vod_tag,
            vod_id: list.vod_id,
            vod_remarks: list.vod_remarks,
            vod_score: list.vod_score,
            vod_year: list.vod_year,
            vod_pubdate: list.vod_pubdate,
            vod_content: list.vod_content,
            vlist: patch_res
          }
          data_list.push(data);
        }
        resolve(data_list);
      }).catch((err) => {
        reject(err);
      });
    } catch (error) {
      reject(error);
    }
  })
}


function params_patch(params, splitvalue) {
  let params_list = params.split(splitvalue);
  if (params_list.length >= 2) {
    let list_split = params_list[1].split('#');
    if (list_split.length) {
      let data = [];
      list_split.forEach((element) => {
        let e_list = element.split('$');
        if (e_list[0] && e_list[1]) {
          data.push({
            value: e_list[0],
            label: e_list[1],
          })
        }
      });
      if (data.length > 0) {
        return data;
      }
    }
  }
  return false;
}
(function () {
  window.feisuzyapi = create_http_get
})()
