let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
// https?         =>  htttp or https
// \/\/           =>  escape -> \\
// (?:[-\w]+\.)?  =>  (-,character word -> one or more), any character or not
// 