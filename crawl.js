function normalizeURL(urlString){
   const urlObj= new URL(urlString);
   let fullPath = `${urlObj.host}${urlObj.pathname}`
  if (fullPath.length > 0 && fullPath.slice(-1) === '/'){
    fullPath = fullPath.slice(0, -1)
  }
  return fullPath
}



module.exports={
   normalizeURL
}