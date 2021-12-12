let str = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate lacus in eleifend porttitor. Aenean fermentum sagittis nisl, et rutrum urna ullamcorper consequat. Nulla vel vestibulum nulla, sed lobortis mauris. Vestibulum bibendum odio eget massa viverra, vitae viverra leo accumsan. Nullam ante nulla, euismod nec libero ac, tincidunt tincidunt magna. Donec ligula neque, iaculis ornare gravida at, mattis vel sem. Cras in aliquam eros. Aenean ac mauris imperdiet, tincidunt magna vel, porttitor mauris. Nam quis arcu massa. Donec at leo a mi sagittis porttitor non eget justo.
Morbi luctus erat sit amet mauris eleifend bibendum. Etiam auctor condimentum felis sed fringilla. Nulla erat tortor, efficitur quis justo et, tempor rhoncus enim. Nunc mattis, nibh vitae pretium malesuada, nisl massa fringilla erat, in rhoncus augue felis non erat. Suspendisse potenti. Mauris maximus venenatis lectus sit amet malesuada. In bibendum euismod malesuada. Aliquam at ligula erat. Morbi ut ligula feugiat, pharetra ante ut, bibendum nisl. Mauris a sagittis purus, vel cursus elit. Fusce sed pretium augue. Aliquam venenatis dapibus turpis id mollis. Maecenas cursus dolor nulla, nec tempor odio auctor non.
Phasellus fringilla purus nibh, non dignissim erat maximus vitae. Mauris in turpis metus. Mauris in tellus tincidunt, viverra lectus nec, porttitor tortor. Nunc suscipit eros vel auctor faucibus. Donec nunc ipsum, ullamcorper consectetur ligula at, auctor tempus mi. Nulla lacinia imperdiet justo, cursus lobortis lorem pretium suscipit. Proin consequat nisi quam. Aenean maximus turpis eget nisl mattis, ut hendrerit ex facilisis. Duis ut fringilla tortor. Nam vulputate nisi ac consequat vulputate. Donec vitae mattis orci, eu dictum elit. Cras ut nisi ut dolor molestie pellentesque eget non elit. Maecenas volutpat quam ornare consequat malesuada.
Ut in felis et justo fringilla sagittis ut sed lorem. Integer molestie purus vitae nunc rutrum fermentum. In interdum, sem tincidunt sagittis gravida, urna turpis gravida ipsum, sit amet viverra justo massa ac tellus. Cras malesuada, justo a elementum lacinia, risus leo vehicula est, eu condimentum enim augue malesuada nisl. Morbi dignissim eleifend est et scelerisque. Nullam ut ex in justo consectetur aliquet eu id libero. Aenean dignissim mauris laoreet nibh euismod, et sodales justo rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed lorem arcu. Nulla facilisi. Vivamus suscipit ex eu efficitur placerat.
Pellentesque sit amet eleifend quam. Phasellus hendrerit ut nisi id bibendum. Vestibulum interdum libero eget mi tincidunt, vitae fringilla velit consectetur. Donec sagittis diam dolor. Ut a condimentum ex, in feugiat orci. In non lectus nec dolor sollicitudin vulputate. Aliquam vitae lectus sed orci imperdiet mattis at eu ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque urna eros, tristique vulputate tempus in, ullamcorper non erat. In dapibus quis erat eu ultrices. Duis lobortis sodales mi, fringilla imperdiet felis rhoncus in.
Suspendisse dapibus ultrices sem, vel convallis velit blandit id. Phasellus orci urna, finibus ut efficitur eu, bibendum vel odio. Aliquam sollicitudin odio sit amet nisi fringilla commodo. In quis convallis nunc. Praesent at faucibus ex. Aliquam pulvinar, nisi sit amet rutrum aliquet, lorem nisi.`

function countRepeatedWords(str) {
  let words = str.split(" ");
  let wordMap = {};

  for (let i = 0, leng = words.length; i < leng; i++) {
    let word = words[i].replace(".","").replace(",","").replace("\n","").toLowerCase();
    let currentWordCount = wordMap[word];
    let count = currentWordCount ? currentWordCount : 0;
    wordMap[word] = count + 1;
  }
  return wordMap
}

console.log(countRepeatedWords(str));
