export enum URL {
  loginPage = 'https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=706&q=80',
  brandLogo = 'https://w7.pngwing.com/pngs/629/929/png-transparent-10-v-lighting-control-dimmer-lighting-control-system-constant-current-science-and-technology-logo-blue-electronics-free-logo-design-template.png',
}

export const getFlagUri = (countryCode: string) => {
  const baseURL = 'https://flagcdn.com';
  return {
    src: `${baseURL}/w20/${countryCode.toLowerCase()}.png`,
    srcSet: `${baseURL}/w40/${countryCode.toLowerCase()}.png`,
  };
};

export const countries = [
  {
    label: 'Andorra',
    value: 'AD',
  },
  {
    label: 'United Arab Emirates',
    value: 'AE',
  },
  {
    label: 'Afghanistan',
    value: 'AF',
  },
  {
    label: 'Antigua and Barbuda',
    value: 'AG',
  },
  {
    label: 'Anguilla',
    value: 'AI',
  },
  {
    label: 'Albania',
    value: 'AL',
  },
  {
    label: 'Armenia',
    value: 'AM',
  },
  {
    label: 'Angola',
    value: 'AO',
  },
  {
    label: 'Antarctica',
    value: 'AQ',
  },
  {
    label: 'Argentina',
    value: 'AR',
  },
  {
    label: 'American Samoa',
    value: 'AS',
  },
  {
    label: 'Austria',
    value: 'AT',
  },
  {
    label: 'Australia',
    value: 'AU',
  },
  {
    label: 'Aruba',
    value: 'AW',
  },
  {
    label: 'Alland Islands',
    value: 'AX',
  },
  {
    label: 'Azerbaijan',
    value: 'AZ',
  },
  {
    label: 'Bosnia and Herzegovina',
    value: 'BA',
  },
  {
    label: 'Barbados',
    value: 'BB',
  },
  {
    label: 'Bangladesh',
    value: 'BD',
  },
  {
    label: 'Belgium',
    value: 'BE',
  },
  {
    label: 'Burkina Faso',
    value: 'BF',
  },
  {
    label: 'Bulgaria',
    value: 'BG',
  },
  {
    label: 'Bahrain',
    value: 'BH',
  },
  {
    label: 'Burundi',
    value: 'BI',
  },
  {
    label: 'Benin',
    value: 'BJ',
  },
  {
    label: 'Saint Barthelemy',
    value: 'BL',
  },
  {
    label: 'Bermuda',
    value: 'BM',
  },
  {
    label: 'Brunei Darussalam',
    value: 'BN',
  },
  {
    label: 'Bolivia',
    value: 'BO',
  },
  {
    label: 'Brazil',
    value: 'BR',
  },
  {
    label: 'Bahamas',
    value: 'BS',
  },
  {
    label: 'Bhutan',
    value: 'BT',
  },
  {
    label: 'Bouvet Island',
    value: 'BV',
  },
  {
    label: 'Botswana',
    value: 'BW',
  },
  {
    label: 'Belarus',
    value: 'BY',
  },
  {
    label: 'Belize',
    value: 'BZ',
  },
  {
    label: 'Canada',
    value: 'CA',
  },
  {
    label: 'Cocos (Keeling) Islands',
    value: 'CC',
  },
  {
    label: 'Congo, Democratic Republic of the',
    value: 'CD',
  },
  {
    label: 'Central African Republic',
    value: 'CF',
  },
  {
    label: 'Congo, Republic of the',
    value: 'CG',
  },
  {
    label: 'Switzerland',
    value: 'CH',
  },
  {
    label: "Cote d'Ivoire",
    value: 'CI',
  },
  {
    label: 'Cook Islands',
    value: 'CK',
  },
  {
    label: 'Chile',
    value: 'CL',
  },
  {
    label: 'Cameroon',
    value: 'CM',
  },
  {
    label: 'China',
    value: 'CN',
  },
  {
    label: 'Colombia',
    value: 'CO',
  },
  {
    label: 'Costa Rica',
    value: 'CR',
  },
  {
    label: 'Cuba',
    value: 'CU',
  },
  {
    label: 'Cape Verde',
    value: 'CV',
  },
  {
    label: 'Curacao',
    value: 'CW',
  },
  {
    label: 'Christmas Island',
    value: 'CX',
  },
  {
    label: 'Cyprus',
    value: 'CY',
  },
  {
    label: 'Czech Republic',
    value: 'CZ',
  },
  {
    label: 'Germany',
    value: 'DE',
  },
  {
    label: 'Djibouti',
    value: 'DJ',
  },
  {
    label: 'Denmark',
    value: 'DK',
  },
  {
    label: 'Dominica',
    value: 'DM',
  },
  {
    label: 'Dominican Republic',
    value: 'DO',
  },
  {
    label: 'Algeria',
    value: 'DZ',
  },
  {
    label: 'Ecuador',
    value: 'EC',
  },
  {
    label: 'Estonia',
    value: 'EE',
  },
  {
    label: 'Egypt',
    value: 'EG',
  },
  {
    label: 'Western Sahara',
    value: 'EH',
  },
  {
    label: 'Eritrea',
    value: 'ER',
  },
  {
    label: 'Spain',
    value: 'ES',
  },
  {
    label: 'Ethiopia',
    value: 'ET',
  },
  {
    label: 'Finland',
    value: 'FI',
  },
  {
    label: 'Fiji',
    value: 'FJ',
  },
  {
    label: 'Falkland Islands (Malvinas)',
    value: 'FK',
  },
  {
    label: 'Micronesia, Federated States of',
    value: 'FM',
  },
  {
    label: 'Faroe Islands',
    value: 'FO',
  },
  {
    label: 'France',
    value: 'FR',
  },
  {
    label: 'Gabon',
    value: 'GA',
  },
  {
    label: 'United Kingdom',
    value: 'GB',
  },
  {
    label: 'Grenada',
    value: 'GD',
  },
  {
    label: 'Georgia',
    value: 'GE',
  },
  {
    label: 'French Guiana',
    value: 'GF',
  },
  {
    label: 'Guernsey',
    value: 'GG',
  },
  {
    label: 'Ghana',
    value: 'GH',
  },
  {
    label: 'Gibraltar',
    value: 'GI',
  },
  {
    label: 'Greenland',
    value: 'GL',
  },
  {
    label: 'Gambia',
    value: 'GM',
  },
  {
    label: 'Guinea',
    value: 'GN',
  },
  {
    label: 'Guadeloupe',
    value: 'GP',
  },
  {
    label: 'Equatorial Guinea',
    value: 'GQ',
  },
  {
    label: 'Greece',
    value: 'GR',
  },
  {
    label: 'South Georgia and the South Sandwich Islands',
    value: 'GS',
  },
  {
    label: 'Guatemala',
    value: 'GT',
  },
  {
    label: 'Guam',
    value: 'GU',
  },
  {
    label: 'Guinea-Bissau',
    value: 'GW',
  },
  {
    label: 'Guyana',
    value: 'GY',
  },
  {
    label: 'Hong Kong',
    value: 'HK',
  },
  {
    label: 'Heard Island and McDonald Islands',
    value: 'HM',
  },
  {
    label: 'Honduras',
    value: 'HN',
  },
  {
    label: 'Croatia',
    value: 'HR',
  },
  {
    label: 'Haiti',
    value: 'HT',
  },
  {
    label: 'Hungary',
    value: 'HU',
  },
  {
    label: 'Indonesia',
    value: 'ID',
  },
  {
    label: 'Ireland',
    value: 'IE',
  },
  {
    label: 'Israel',
    value: 'IL',
  },
  {
    label: 'Isle of Man',
    value: 'IM',
  },
  {
    label: 'India',
    value: 'IN',
  },
  {
    label: 'British Indian Ocean Territory',
    value: 'IO',
  },
  {
    label: 'Iraq',
    value: 'IQ',
  },
  {
    label: 'Iran, Islamic Republic of',
    value: 'IR',
  },
  {
    label: 'Iceland',
    value: 'IS',
  },
  {
    label: 'Italy',
    value: 'IT',
  },
  {
    label: 'Jersey',
    value: 'JE',
  },
  {
    label: 'Jamaica',
    value: 'JM',
  },
  {
    label: 'Jordan',
    value: 'JO',
  },
  {
    label: 'Japan',
    value: 'JP',
  },
  {
    label: 'Kenya',
    value: 'KE',
  },
  {
    label: 'Kyrgyzstan',
    value: 'KG',
  },
  {
    label: 'Cambodia',
    value: 'KH',
  },
  {
    label: 'Kiribati',
    value: 'KI',
  },
  {
    label: 'Comoros',
    value: 'KM',
  },
  {
    label: 'Saint Kitts and Nevis',
    value: 'KN',
  },
  {
    label: "Korea, Democratic People's Republic of",
    value: 'KP',
  },
  {
    label: 'Korea, Republic of',
    value: 'KR',
  },
  {
    label: 'Kuwait',
    value: 'KW',
  },
  {
    label: 'Cayman Islands',
    value: 'KY',
  },
  {
    label: 'Kazakhstan',
    value: 'KZ',
  },
  {
    label: "Lao People's Democratic Republic",
    value: 'LA',
  },
  {
    label: 'Lebanon',
    value: 'LB',
  },
  {
    label: 'Saint Lucia',
    value: 'LC',
  },
  {
    label: 'Liechtenstein',
    value: 'LI',
  },
  {
    label: 'Sri Lanka',
    value: 'LK',
  },
  {
    label: 'Liberia',
    value: 'LR',
  },
  {
    label: 'Lesotho',
    value: 'LS',
  },
  {
    label: 'Lithuania',
    value: 'LT',
  },
  {
    label: 'Luxembourg',
    value: 'LU',
  },
  {
    label: 'Latvia',
    value: 'LV',
  },
  {
    label: 'Libya',
    value: 'LY',
  },
  {
    label: 'Morocco',
    value: 'MA',
  },
  {
    label: 'Monaco',
    value: 'MC',
  },
  {
    label: 'Moldova, Republic of',
    value: 'MD',
  },
  {
    label: 'Montenegro',
    value: 'ME',
  },
  {
    label: 'Saint Martin (French part)',
    value: 'MF',
  },
  {
    label: 'Madagascar',
    value: 'MG',
  },
  {
    label: 'Marshall Islands',
    value: 'MH',
  },
  {
    label: 'Macedonia, the Former Yugoslav Republic of',
    value: 'MK',
  },
  {
    label: 'Mali',
    value: 'ML',
  },
  {
    label: 'Myanmar',
    value: 'MM',
  },
  {
    label: 'Mongolia',
    value: 'MN',
  },
  {
    label: 'Macao',
    value: 'MO',
  },
  {
    label: 'Northern Mariana Islands',
    value: 'MP',
  },
  {
    label: 'Martinique',
    value: 'MQ',
  },
  {
    label: 'Mauritania',
    value: 'MR',
  },
  {
    label: 'Montserrat',
    value: 'MS',
  },
  {
    label: 'Malta',
    value: 'MT',
  },
  {
    label: 'Mauritius',
    value: 'MU',
  },
  {
    label: 'Maldives',
    value: 'MV',
  },
  {
    label: 'Malawi',
    value: 'MW',
  },
  {
    label: 'Mexico',
    value: 'MX',
  },
  {
    label: 'Malaysia',
    value: 'MY',
  },
  {
    label: 'Mozambique',
    value: 'MZ',
  },
  {
    label: 'Namibia',
    value: 'NA',
  },
  {
    label: 'New Caledonia',
    value: 'NC',
  },
  {
    label: 'Niger',
    value: 'NE',
  },
  {
    label: 'Norfolk Island',
    value: 'NF',
  },
  {
    label: 'Nigeria',
    value: 'NG',
  },
  {
    label: 'Nicaragua',
    value: 'NI',
  },
  {
    label: 'Netherlands',
    value: 'NL',
  },
  {
    label: 'Norway',
    value: 'NO',
  },
  {
    label: 'Nepal',
    value: 'NP',
  },
  {
    label: 'Nauru',
    value: 'NR',
  },
  {
    label: 'Niue',
    value: 'NU',
  },
  {
    label: 'New Zealand',
    value: 'NZ',
  },
  {
    label: 'Oman',
    value: 'OM',
  },
  {
    label: 'Panama',
    value: 'PA',
  },
  {
    label: 'Peru',
    value: 'PE',
  },
  {
    label: 'French Polynesia',
    value: 'PF',
  },
  {
    label: 'Papua New Guinea',
    value: 'PG',
  },
  {
    label: 'Philippines',
    value: 'PH',
  },
  {
    label: 'Pakistan',
    value: 'PK',
  },
  {
    label: 'Poland',
    value: 'PL',
  },
  {
    label: 'Saint Pierre and Miquelon',
    value: 'PM',
  },
  {
    label: 'Pitcairn',
    value: 'PN',
  },
  {
    label: 'Puerto Rico',
    value: 'PR',
  },
  {
    label: 'Palestine, State of',
    value: 'PS',
  },
  {
    label: 'Portugal',
    value: 'PT',
  },
  {
    label: 'Palau',
    value: 'PW',
  },
  {
    label: 'Paraguay',
    value: 'PY',
  },
  {
    label: 'Qatar',
    value: 'QA',
  },
  {
    label: 'Reunion',
    value: 'RE',
  },
  {
    label: 'Romania',
    value: 'RO',
  },
  {
    label: 'Serbia',
    value: 'RS',
  },
  {
    label: 'Russian Federation',
    value: 'RU',
  },
  {
    label: 'Rwanda',
    value: 'RW',
  },
  {
    label: 'Saudi Arabia',
    value: 'SA',
  },
  {
    label: 'Solomon Islands',
    value: 'SB',
  },
  {
    label: 'Seychelles',
    value: 'SC',
  },
  {
    label: 'Sudan',
    value: 'SD',
  },
  {
    label: 'Sweden',
    value: 'SE',
  },
  {
    label: 'Singapore',
    value: 'SG',
  },
  {
    label: 'Saint Helena',
    value: 'SH',
  },
  {
    label: 'Slovenia',
    value: 'SI',
  },
  {
    label: 'Svalbard and Jan Mayen',
    value: 'SJ',
  },
  {
    label: 'Slovakia',
    value: 'SK',
  },
  {
    label: 'Sierra Leone',
    value: 'SL',
  },
  {
    label: 'San Marino',
    value: 'SM',
  },
  {
    label: 'Senegal',
    value: 'SN',
  },
  {
    label: 'Somalia',
    value: 'SO',
  },
  {
    label: 'Suriname',
    value: 'SR',
  },
  {
    label: 'South Sudan',
    value: 'SS',
  },
  {
    label: 'Sao Tome and Principe',
    value: 'ST',
  },
  {
    label: 'El Salvador',
    value: 'SV',
  },
  {
    label: 'Sint Maarten (Dutch part)',
    value: 'SX',
  },
  {
    label: 'Syrian Arab Republic',
    value: 'SY',
  },
  {
    label: 'Swaziland',
    value: 'SZ',
  },
  {
    label: 'Turks and Caicos Islands',
    value: 'TC',
  },
  {
    label: 'Chad',
    value: 'TD',
  },
  {
    label: 'French Southern Territories',
    value: 'TF',
  },
  {
    label: 'Togo',
    value: 'TG',
  },
  {
    label: 'Thailand',
    value: 'TH',
  },
  {
    label: 'Tajikistan',
    value: 'TJ',
  },
  {
    label: 'Tokelau',
    value: 'TK',
  },
  {
    label: 'Timor-Leste',
    value: 'TL',
  },
  {
    label: 'Turkmenistan',
    value: 'TM',
  },
  {
    label: 'Tunisia',
    value: 'TN',
  },
  {
    label: 'Tonga',
    value: 'TO',
  },
  {
    label: 'Turkey',
    value: 'TR',
  },
  {
    label: 'Trinidad and Tobago',
    value: 'TT',
  },
  {
    label: 'Tuvalu',
    value: 'TV',
  },
  {
    label: 'Taiwan, Province of China',
    value: 'TW',
  },
  {
    label: 'United Republic of Tanzania',
    value: 'TZ',
  },
  {
    label: 'Ukraine',
    value: 'UA',
  },
  {
    label: 'Uganda',
    value: 'UG',
  },
  {
    label: 'United States',
    value: 'US',
  },
  {
    label: 'Uruguay',
    value: 'UY',
  },
  {
    label: 'Uzbekistan',
    value: 'UZ',
  },
  {
    label: 'Holy See (Vatican City State)',
    value: 'VA',
  },
  {
    label: 'Saint Vincent and the Grenadines',
    value: 'VC',
  },
  {
    label: 'Venezuela',
    value: 'VE',
  },
  {
    label: 'British Virgin Islands',
    value: 'VG',
  },
  {
    label: 'US Virgin Islands',
    value: 'VI',
  },
  {
    label: 'Vietnam',
    value: 'VN',
  },
  {
    label: 'Vanuatu',
    value: 'VU',
  },
  {
    label: 'Wallis and Futuna',
    value: 'WF',
  },
  {
    label: 'Samoa',
    value: 'WS',
  },
  {
    label: 'Kosovo',
    value: 'XK',
  },
  {
    label: 'Yemen',
    value: 'YE',
  },
  {
    label: 'Mayotte',
    value: 'YT',
  },
  {
    label: 'South Africa',
    value: 'ZA',
  },
  {
    label: 'Zambia',
    value: 'ZM',
  },
  {
    label: 'Zimbabwe',
    value: 'ZW',
  },
];
