function longestCountryName(countryNames) {
    let longestName = '';
    for (let country of countryNames) {
        if (country.length > longestName.length) {
            longestName = country;
        }
    }
    return longestName;
}
let countries = ["Australia", "Germany", "United States of America"];
console.log(longestCountryName(countries)); 
