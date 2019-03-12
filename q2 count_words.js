import { Text } from 'react-native';

export function count(string, length = 1000) {
  const words = string.split(' ');
  const count = words.length;

  const elements = [];
  let position = 0;
  let dict = {};
  while (position < count) {
    let c = 0;
    while(c<count)
    {
        let countit = 0;
        if(words[position]==words[c])
        {
            countit += 1;
        }
    }
    dict[words[position]] = countit;
    
    
}

  return dict;
}