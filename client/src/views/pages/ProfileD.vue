<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" lg="6">
        <v-card>
          <v-card-text>
            <h3 class="title blue-grey--text text--darken-2 font-weight-regular">General Information</h3>
            <h6 class="subtitle-2 font-weight-light">General information about the patient to be treated.</h6>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
              <!-- Nombre-->
              <v-text-field
              v-model="name"
              label="Name"
              filled
              background-color="transparent"
            ></v-text-field>
            <!-- Apellido -->
            <v-text-field
              v-model="lastName"
              label="Last Name"
              filled
              background-color="transparent"
            ></v-text-field>
            <!-- Sexo --> 
            <v-select
            v-model="sex"
            :items="sexo"
            menu-props="auto"
            label="Sex"
            hide-details
            single-line
            ></v-select>
            <!--Nacionalidad-->
            <v-select
            v-model="nacio"
            :items="states"
            menu-props="auto"
            label="Country"
            hide-details
            prepend-icon="mdi-map"
            single-line
            ></v-select>
            <!-- Fecha-->
            <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Birthday date"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          :active-picker.sync="activePicker"
          :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
          min="1950-01-01"
          @change="save"
        ></v-date-picker>
      </v-menu>
            
              <!--email-->
            <v-text-field
              type="email"
              v-model="emailtext"
              label="Email e.g. 'example@gmail.com"
              filled
              background-color="transparent"
            ></v-text-field>
            <div class="mt-4">
               </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!--segunda columna-->
      <v-col cols="12" lg="6">
        <v-card>
          <v-card-text>
            <h3 class="title blue-grey--text text--darken-2 font-weight-regular">Private Data</h3>
            <h6 class="subtitle-2 font-weight-light">Private information about the patient's condition.</h6>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
              <!-- Peso-->
              <v-text-field
              v-model="pro"
              label="Professional License"
              filled
              background-color="transparent"
              cols="3"
            ></v-text-field>
            
            <!--Sangre-->
            <v-select
            v-model="espe"
            :items="esp"
            menu-props="auto"
            label="Specialty"
            hide-details
            single-line
            ></v-select>

            <v-select
            v-model="coun"
            :items="states"
            menu-props="auto"
            label="Country where it operates"
            hide-details
            single-line
            ></v-select>
            <div class="mt-4">
               </div>
          </v-card-text>
        </v-card>
        <v-btn class="text-capitalize mt-5 element-0" color="success">Submit</v-btn>
      </v-col>
      
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Profile",

  data: () => ({
    name: "",
    lastName:"",
    nacio:"",
    sex:"",
    date:"",
    emailtext: "",
    pro: "",
    espe: "",
    coun: "",
    show1: false,
    esp: [
      'Allergy and immunology','Anesthesiology','Dermatology','Diagnostic radiology',
      'Emergency medicine','Family medicine','Internal medicine','Medical genetics',
      'Neurology','Nuclear medicine','Obstetrics and gynecology','Ophthalmology','Pathology',
      'Pediatrics','Physical medicine and rehabilitation',
      'Preventive medicine','Psychiatry','Radiation oncology','Surgery','Urology'
    ],
    sexo:[
      'Female','Male'
    ],
    states: [
       'Afghanistan',
'Albania',
'Algeria',
'Andorra',
'Angola',
'Antigua and Barbuda',
'Argentina',
'Armenia',
'Australia',
'Austria',
'Azerbaijan',
'The Bahamas',
'Bahrain',
'Bangladesh',
'Barbados',
'Belarus',
'Belgium',
'Belize',
'Benin',
'Bhutan',
'Bolivia',
'Bosnia and Herzegovina',
'Botswana',
'Brazil',
'Brunei',
'Bulgaria',
'Burkina Faso',
'Burundi',
'C',
'Cabo Verde',
'Cambodia',
'Cameroon',
'Canada',
'Central African Republic',
'Chad',
'Chile',
'China',
'Colombia',
'Comoros',
'Congo, Democratic Republic of the',
'Congo, Republic of the',
'Costa Rica',
'Côte d’Ivoire',
'Croatia',
'Cuba',
'Cyprus',
'Czech Republic',
'Denmark',
'Djibouti',
'Dominica',
'Dominican Republic',
'East Timor (Timor-Leste)',
'Ecuador',
'Egypt',
'El Salvador',
'Equatorial Guinea',
'Eritrea',
'Estonia',
'Eswatini',
'Ethiopia',
'Fiji',
'Finland',
'France',
'Gabon',
'The Gambia',
'Georgia',
'Germany',
'Ghana',
'Greece',
'Grenada',
'Guatemala',
'Guinea',
'Guinea-Bissau',
'Guyana',
'Haiti',
'Honduras',
'Hungary',
'Iceland',
'India',
'Indonesia',
'Iran',
'Iraq',
'Ireland',
'Israel',
'Italy',
'Jamaica',
'Japan',
'Jordan',
'Kazakhstan',
'Kenya',
'Kiribati',
'Korea, North',
'Korea, South',
'Kosovo',
'Kuwait',
'Kyrgyzstan',
'Laos',
'Latvia',
'Lebanon',
'Lesotho',
'Liberia',
'Libya',
'Liechtenstein',
'Lithuania',
'Luxembourg',
'Madagascar',
'Malawi',
'Malaysia',
'Maldives',
'Mali',
'Malta',
'Marshall Islands',
'Mauritania',
'Mauritius',
'Mexico',
'Micronesia, Federated States of',
'Moldova',
'Monaco',
'Mongolia',
'Montenegro',
'Morocco',
'Mozambique',
'Myanmar (Burma)',
'Namibia',
'Nauru',
'Nepal',
'Netherlands',
'New Zealand',
'Nicaragua',
'Niger',
'Nigeria',
'North Macedonia',
'Norway',
'Oman',
'Pakistan',
'Palau',
'Panama',
'Papua New Guinea',
'Paraguay',
'Peru',
'Philippines',
'Poland',
'Portugal',
'Qatar',
'Romania',
'Russia',
'Rwanda',
'Saint Kitts and Nevis',
'Saint Lucia',
'Saint Vincent and the Grenadines',
'Samoa',
'San Marino',
'Sao Tome and Principe',
'Saudi Arabia',
'Senegal',
'Serbia',
'Seychelles',
'Sierra Leone',
'Singapore',
'Slovakia',
'Slovenia',
'Solomon Islands',
'Somalia',
'South Africa',
'Spain',
'Sri Lanka',
'Sudan',
'Sudan, South',
'Suriname',
'Sweden',
'Switzerland',
'Syria',
'Taiwan',
'Tajikistan',
'Tanzania',
'Thailand',
'Togo',
'Tonga',
'Trinidad and Tobago',
'Tunisia',
'Turkey',
'Turkmenistan',
'Tuvalu',
'Uganda',
'Ukraine',
'United Arab Emirates',
'United Kingdom',
'United States',
'Uruguay',
'Uzbekistan',
'Vanuatu',
'Vatican City',
'Venezuela',
'Vietnam',
'Yemen',
'Zambia',
'Zimbabwe'
      ],
       activePicker: null,
    date: null,
    menu: false,
  }),
  watch: {
    menu (val) {
      val && setTimeout(() => (this.activePicker = 'YEAR'))
    },
  },
  methods: {
    save (date) {
      this.$refs.menu.save(date)
    },
  },
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters",
      emailMatch: () => "The email and password you entered don't match"
    },
   
  
  components: {}
};
</script>
