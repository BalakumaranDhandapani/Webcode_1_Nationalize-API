/* Country codes and it's full names, 
1. Nationalize api is fetched and its output is received as an array of objects.
2. Few Codes are given as county_id in the Api e.g. FR, IT, ES etc..
3. An array method is ran to match the FR key and get the value in the countryCode object which we created manually using ISO_3166-1_alpha-2.
-- Ex: FR = France , IN = India
*/
const countryCodes = 
{
	"AF": "Afghanistan",
    "AL": "Albania",
    "DZ": "Algeria",
    "AS": "American Samoa",
    "AD": "Andorra",
    "AO": "Angola",
    "AI": "Anguilla",
    "AQ": "Antarctica",
    "AG": "Antigua and Barbuda",
    "AR": "Argentina",
    "AM": "Armenia",
    "AW": "Aruba",
    "AU": "Australia",
    "AT": "Austria",
    "AZ": "Azerbaijan",
    "BS": "Bahamas",
    "BH": "Bahrain",
    "BD": "Bangladesh",
    "BB": "Barbados",
    "BY": "Belarus",
    "BE": "Belgium",
    "BZ": "Belize",
    "BJ": "Benin",
    "BM": "Bermuda",
    "BT": "Bhutan",
    "BO": "Bolivia",
    "BQ": "Bonaire, Sint Eustatius and Saba",
    "BA": "Bosnia and Herzegovina",
    "BW": "Botswana",
    "BV": "Bouvet Island",
    "BR": "Brazil",
    "IO": "British Indian Ocean Territory",
    "BN": "Brunei Darussalam",
    "BG": "Bulgaria",
    "BF": "Burkina Faso",
    "BI": "Burundi",
    "CV": "Cabo Verde",
    "KH": "Cambodia",
    "CM": "Cameroon",
    "CA": "Canada",
    "KY": "Cayman Islands",
    "CF": "Central African Republic",
    "TD": "Chad",
    "CL": "Chile",
    "CN": "China",
    "CX": "Christmas Island",
    "CC": "Cocos (Keeling) Islands",
    "CO": "Colombia",
    "KM": "Comoros",
    "CD": "Congo,the Democratic Republic of the",
    "CG": "Congo",
    "CK": "Cook Islands",
    "CR": "Costa Rica",
    "HR": "Croatia",
    "CU": "Cuba",
    "CW": "Curaçao",
    "CY": "Cyprus",
    "CZ": "Czechia",
    "CI": "Côte d'Ivoire",
    "DK": "Denmark",
    "DJ": "Djibouti",
    "DM": "Dominica",
    "DO": "Dominican Republic",
    "EC": "Ecuador",
    "EG": "Egypt",
    "SV": "El Salvador",
    "GQ": "Equatorial Guinea",
    "ER": "Eritrea",
    "EE": "Estonia",
    "SZ": "Eswatini",
    "ET": "Ethiopia",
    "FK": "Falkland Islands[Malvinas]",
    "FO": "Faroe Islands",
    "FJ": "Fiji",
    "FI": "Finland",
    "FR": "France",
    "GF": "French Guiana",
    "PF": "French Polynesia",
    "TF": "French Southern Territories",
    "GA": "Gabon",
    "GM": "Gambia",
    "GE": "Georgia",
    "DE": "Germany",
    "GH": "Ghana",
    "GI": "Gibraltar",
    "GR": "Greece",
    "GL": "Greenland",
    "GD": "Grenada",
    "GP": "Guadeloupe",
    "GU": "Guam",
    "GT": "Guatemala",
    "GG": "Guernsey",
    "GN": "Guinea",
    "GW": "Guinea-Bissau",
    "GY": "Guyana",
    "HT": "Haiti",
    "HM": "Heard Island and McDonald Islands",
    "VA": "Holy See",
    "HN": "Honduras",
    "HK": "Hong Kong",
    "HU": "Hungary",
    "IS": "Iceland",
    "IN": "India",
    "ID": "Indonesia",
    "IR": "Iran",
    "IQ": "Iraq",
    "IE": "Ireland",
    "IM": "Isle of Man",
    "IL": "Israel",
    "IT": "Italy",
    "JM": "Jamaica",
    "JP": "Japan",
    "JE": "Jersey",
    "JO": "Jordan",
    "KZ": "Kazakhstan",
    "KE": "Kenya",
    "KI": "Kiribati",
    "KP": "Korea (the Democratic People's Republic of)",
    "KR": "Korea,the Republic of",
    "KW": "Kuwait",
    "KG": "Kyrgyzstan",
    "LA": "Lao People's Democratic Republic",
    "LV": "Latvia",
    "LB": "Lebanon",
    "LS": "Lesotho",
    "LR": "Liberia",
    "LY": "Libya",
    "LI": "Liechtenstein",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "MO": "Macao",
    "MG": "Madagascar",
    "MW": "Malawi",
    "MY": "Malaysia",
    "MV": "Maldives",
    "ML": "Mali",
    "MT": "Malta",
    "MH": "Marshall Islands",
    "MQ": "Martinique",
    "MR": "Mauritania",
    "MU": "Mauritius",
    "YT": "Mayotte",
    "MX": "Mexico",
    "FM": "Micronesia (Federated States of)",
    "MD": "Moldova",
    "MC": "Monaco",
    "MN": "Mongolia",
    "ME": "Montenegro",
    "MS": "Montserrat",
    "MA": "Morocco",
    "MZ": "Mozambique",
    "MM": "Myanmar",
    "NA": "Namibia",
    "NR": "Nauru",
    "NP": "Nepal",
    "NL": "Netherlands",
    "NC": "New Caledonia",
    "NZ": "New Zealand",
    "NI": "Nicaragua",
    "NE": "Niger",
    "NG": "Nigeria",
    "NU": "Niue",
    "NF": "Norfolk Island",
    "MP": "Northern Mariana Islands",
    "NO": "Norway",
    "OM": "Oman",
    "PK": "Pakistan",
    "PW": "Palau",
    "PS": "Palestine, State of",
    "PA": "Panama",
    "PG": "Papua New Guinea",
    "PY": "Paraguay",
    "PE": "Peru",
    "PH": "Philippines",
    "PN": "Pitcairn",
    "PL": "Poland",
    "PT": "Portugal",
    "PR": "Puerto Rico",
    "QA": "Qatar",
    "MK": "Republic of North Macedonia",
    "RO": "Romania",
    "RU": "Russian Federation",
    "RW": "Rwanda",
    "RE": "Réunion",
    "BL": "Saint Barthélemy",
    "SH": "Saint Helena, Ascension and Tristan da Cunha",
    "KN": "Saint Kitts and Nevis",
    "LC": "Saint Lucia",
    "MF": "Saint Martin (French part)",
    "PM": "Saint Pierre and Miquelon",
    "VC": "Saint Vincent and the Grenadines",
    "WS": "Samoa",
    "SM": "San Marino",
    "ST": "Sao Tome and Principe",
    "SA": "Saudi Arabia",
    "SN": "Senegal",
    "RS": "Serbia",
    "SC": "Seychelles",
    "SL": "Sierra Leone",
    "SG": "Singapore",
    "SX": "Sint Maarten (Dutch part)",
    "SK": "Slovakia",
    "SI": "Slovenia",
    "SB": "Solomon Islands",
    "SO": "Somalia",
    "ZA": "South Africa",
    "GS": "South Georgia and the South Sandwich Islands",
    "SS": "South Sudan",
    "ES": "Spain",
    "LK": "Sri Lanka",
    "SD": "Sudan",
    "SR": "Suriname",
    "SJ": "Svalbard and Jan Mayen",
    "SE": "Sweden",
    "CH": "Switzerland",
    "SY": "Syrian Arab Republic",
    "TW": "Taiwan",
    "TJ": "Tajikistan",
    "TZ": "Tanzania, United Republic of",
    "TH": "Thailand",
    "TL": "Timor-Leste",
    "TG": "Togo",
    "TK": "Tokelau",
    "TO": "Tonga",
    "TT": "Trinidad and Tobago",
    "TN": "Tunisia",
    "TR": "Turkey",
    "TM": "Turkmenistan",
    "TC": "Turks and Caicos Islands",
    "TV": "Tuvalu",
    "UG": "Uganda",
    "UA": "Ukraine",
    "AE": "United Arab Emirates",
    "GB": "United Kingdom of Great Britain and Northern Ireland",
    "UM": "United States Minor Outlying Islands",
    "US": "United States of America",
    "UY": "Uruguay",
    "UZ": "Uzbekistan",
    "VU": "Vanuatu",
    "VE": "Venezuela (Bolivarian Republic of)",
    "VN": "Viet Nam",
    "VG": "Virgin Islands (British)",
    "VI": "Virgin Islands (U.S.)",
    "WF": "Wallis and Futuna",
    "EH": "Western Sahara",
    "YE": "Yemen",
    "ZM": "Zambia",
    "ZW": "Zimbabwe",
    "SQ": "St Lucia",
    "AX": "Åland Islands",
};

// Creating Div element
let div=document.createElement("div");
div.setAttribute("class","text-center");

//creation of form
let formgroup=document.createElement("div");
formgroup.setAttribute("class","form");

//Creation of search box of type input-> Text with id main
let input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("class","form-control");
input.setAttribute("id","main");
input.setAttribute("placeholder","Enter the name to be Searched");
input.style.width="70%";
input.style.margin="auto";

// Creation of button for Searching
let button=document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("class","btn btn-warning");
button.innerHTML="Search";
button.style.marginTop="20px";
button.addEventListener("click",foo);

//creating heading element to display the name we entered in the searchbox
let disname=document.createElement("h2");
disname.setAttribute("id","dname");

// Heading for the table
let toptwo=document.createElement("h4");
toptwo.setAttribute("id","toptwo");

// Creating Table to store and display the values of Country name and Probability

var tab=document.createElement("table");
tab.setAttribute("class","table");
tab.setAttribute("id","mytable");

var trb=document.createElement("tr");

var tb1=document.createElement("td");

var tb2=document.createElement("td");

trb.append(tb1,tb2);

tab.append(trb);

//appending text box, search button, and other div elements into form
formgroup.append(input,button,disname,toptwo,tab);
//appending form to the First div element created
div.append(formgroup);

// appending all the elements to body of HTML
document.body.append(div);

//to get the Country names using country_id from the API from ISO_3166-1_alpha-2
let carray=[];
function codeToCountry(data) 
{
    try
    {
        let CountriesArray = data.country.map((country) => {
            //console.log (countryCodes[country.country_id]);
            carray.push(countryCodes[country.country_id]);             
        });

        var table=document.getElementsByTagName('table')[0];
        var newRow = table.insertRow(1);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);   

        cell1.innerHTML = `${carray[0]}`;           // top 1st country based on probability
        cell2.innerHTML = `${data.country[0].probability}`; 
        
        var newRow = table.insertRow(2);
        var cell3 = newRow.insertCell(0);
        var cell4 = newRow.insertCell(1);

        cell3.innerHTML = `${carray[1]}`;           // 2nd top country based on probability
        cell4.innerHTML = `${data.country[1].probability}`;  

        // nation.innerHTML=`Top Two Countries : <br> ${carray[0]} ${data.country[0].probability} <br> ${carray[1]}`;   
        carray.length=0;        //once the datas are fed into the table it is resetted for searching and entering new names into the table.
        // console.log(carray);
    }catch(error)
    {
        console.log(error);
    }
     
}

// function foo upon on clicking of Search button(Onclick Search) using the Name entered
async function foo()
{
    var name=document.getElementById('main').value;
    // console.log(name);
    var res=await fetch(`https://api.nationalize.io/?name=${name}`);
    result= await res.json();
    if(name===result.name)
    {
        disname.innerHTML=`Name : <mark>${name}</mark>`;
    }else
    {
        disname.innerHTML=`Name : ${name}`;
    }
    
    toptwo.innerHTML="Top Countries";

    tab.style.backgroundColor="silver";  // changing the background color of the table after clicking search

    tb1.innerHTML="<b>Country Name</b>";        //row names are added once the search is invoked
    tb2.innerHTML="<b>Probability Value</b>";

    console.log(result);
    codeToCountry(result);

    //document.getElementById("main").value="";     //to reset the input values from the text-box 
}