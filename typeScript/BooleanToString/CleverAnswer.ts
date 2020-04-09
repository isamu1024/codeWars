export const boolToWord = (bool: boolean): string => {  
    return ['No', 'Yes'][+bool]
  };

  console.log(boolToWord(true));
  
