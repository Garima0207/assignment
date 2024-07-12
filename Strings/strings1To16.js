//1. check input type is string
function is_string(input) {
    return typeof input === 'string';
  }
  console.log(is_string('w3resource')); 
  console.log(is_string([1, 2, 4, 0])); 
//2.check is string is blank
  function is_Blank(input) {
    return input.trim().length === 0;
  }
  console.log(is_Blank('')); 
  console.log(is_Blank('abc'));

// 3. Split a string into an array of words
function string_to_array(input) {
    return input.trim().split(' ');
  }
  console.log(string_to_array("Robin Singh"));

// 4. Remove specified number of characters from a string
function truncate_string(str, length) {
    return str.slice(0, length);
  }
  console.log(truncate_string("Robin Singh", 4));
//5. abbreviated form
  function abbrev_name(name) {
    var parts = name.trim().split(' ');
    if (parts.length > 1) {
      return parts[0] + ' ' + parts[1].charAt(0) + '.';
    }
    return name;
  }
  console.log(abbrev_name("Robin singh"));
  // 6. Hide email addresses
function protect_email(email) {
    var parts = email.split('@');
    var firstPart = parts[0];
    var masked = firstPart.slice(0, Math.ceil(firstPart.length / 2)) + '...@' + parts[1];
    return masked;
  }
  console.log(protect_email("robin_singh@example.com")); // "robin...@example.com"
  
  // 7. Parameterize a string
  function string_parameterize(str) {
    return str.toLowerCase().replace(/[^a-zA-Z0-9 -]/g, '').replace(/\s/g, '-');
  }
  console.log(string_parameterize("Robin Singh from USA.")); // "robin-singh-from-usa"
  
  // 8. Capitalize the first letter of a string
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  console.log(capitalize('js string exercises'));
  
  // 9. Capitalize the first letter of each word in a string
  function capitalize_Words(str) {
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  console.log(capitalize_Words('js string exercises')); // "Js String Exercises"
  
  // 10. Swap case of each character in a string
  function swapcase(str) {
    return str.split('').map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('');
  }
  console.log(swapcase('AaBbc')); // "aAbBC"
  
  // 11. Convert a string into camel case
  function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }
  console.log(camelize("JavaScript Exercises")); // "javaScriptExercises"
  
  // 12. Uncamelize a string
  function uncamelize(str, separator) {
    separator = typeof separator === 'undefined' ? '_' : separator;
    return str.replace(/[A-Z]/g, function(letter) {
      return separator + letter.toLowerCase();
    });
  }
  console.log(uncamelize('helloWorld')); 
  console.log(uncamelize('helloWorld', '-')); 
  console.log(uncamelize('helloWorld', ''));
  // 13. Concatenate a string n times
  function repeat(str, count = 1) {
    return count > 0 ? str.repeat(count) : '';
  }
  console.log(repeat('Ha!'));
  console.log(repeat('Ha!', 2)); 
  console.log(repeat('Ha!', 3));
  
  // 14. Insert a string within another string at a particular position
  function insert(main_string, ins_string, pos) {
    if (typeof pos == "undefined") {
      pos = 0;
    }
    if (typeof ins_string == "undefined") {
      ins_string = '';
    }
    return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
  }
  console.log(insert('We are doing some exercises.'));
  console.log(insert('We are doing some exercises.', 'JavaScript '));
  console.log(insert('We are doing some exercises.', 'JavaScript ', 18));
  //15.
  function humanize_format(num) {
    if (typeof num === 'undefined') return;
    if (num % 100 >= 11 && num % 100 <= 13) {
      return num + 'th';
    }
    switch (num % 10) {
      case 1:
        return num + 'st';
      case 2:
        return num + 'nd';
      case 3:
        return num + 'rd';
      default:
        return num + 'th';
    }
  }
  console.log(humanize_format());
  console.log(humanize_format(1));
  console.log(humanize_format(8));
  console.log(humanize_format(301));
  console.log(humanize_format(402));
  //16.
  function text_truncate(str, length, ending = '...') {
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = '...';
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  }
  console.log(text_truncate('We are doing JS string exercises.')); 
  console.log(text_truncate('We are doing JS string exercises.', 19));
  console.log(text_truncate('We are doing JS string exercises.', 15, '!!'));