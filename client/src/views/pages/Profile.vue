<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" lg="6">
        <v-card>
          <v-card-text>
            <h3
              class="title blue-grey--text text--darken-2 font-weight-regular"
            >
              General Information
            </h3>
            <h6 class="subtitle-2 font-weight-light">
              General information about the patient to be treated.
            </h6>
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
                :max="
                  new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                    .toISOString()
                    .substr(0, 10)
                "
                min="1950-01-01"
                @change="save"
              ></v-date-picker>
            </v-menu>
            <!--Nacionalidad-->
            <v-select
              v-model="nac"
              :items="states"
              menu-props="auto"
              label="Country"
              hide-details
              prepend-icon="mdi-map"
              single-line
            ></v-select>
            <!-- Sexo -->
            <v-select
              v-model="sex"
              :items="sexo"
              menu-props="auto"
              label="Sex"
              hide-details
              prepend-icon="mdi-map"
              single-line
            ></v-select>

            <!--email-->
            <v-text-field
              type="email"
              v-model="emailtext"
              label="Email e.g. 'example@gmail.com"
              filled
              background-color="transparent"
            ></v-text-field>
            <div class="mt-4"></div>
          </v-card-text>
        </v-card>
      </v-col>

      <!--segunda columna-->
      <v-col cols="12" lg="6">
        <v-card>
          <v-card-text>
            <h3
              class="title blue-grey--text text--darken-2 font-weight-regular"
            >
              Private Data
            </h3>
            <h6 class="subtitle-2 font-weight-light">
              Private information about the patient's condition.
            </h6>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            <!-- Peso-->
            <v-text-field
              v-model="weight"
              label="Weight e.g 68.2 kg"
              filled
              background-color="transparent"
              cols="3"
            ></v-text-field>
            <!-- Estatura -->
            <v-text-field
              v-model="height"
              label="Height e.g 175 cm"
              filled
              background-color="transparent"
            ></v-text-field>
            <!--Sangre-->
            <v-select
              v-model="san"
              :items="blood"
              menu-props="auto"
              label="Blood Type"
              hide-details
              single-line
            ></v-select>

            <!--Enfermedades-->
            <v-combobox
              v-model="enfer"
              :items="enf"
              label="Diseases"
              multiple
              chips
            >
              <template v-slot:selection="data">
                <v-chip
                  :key="JSON.stringify(data.item)"
                  v-bind="data.attrs"
                  :input-value="data.selected"
                  :disabled="data.disabled"
                  @click:close="data.parent.selectItem(data.item)"
                >
                  <v-avatar
                    class="accent white--text"
                    left
                    v-text="data.item.slice(0, 1).toUpperCase()"
                  ></v-avatar>
                  {{ data.item }}
                </v-chip>
              </template>
            </v-combobox>

            <!--Alergias-->
            <v-combobox
              v-model="alergias"
              :items="allergies"
              label="Allergies"
              multiple
              chips
            >
              <template v-slot:selection="data">
                <v-chip
                  :key="JSON.stringify(data.item)"
                  v-bind="data.attrs"
                  :input-value="data.selected"
                  :disabled="data.disabled"
                  @click:close="data.parent.selectItem(data.item)"
                >
                  <v-avatar
                    class="accent white--text"
                    left
                    v-text="data.item.slice(0, 1).toUpperCase()"
                  ></v-avatar>
                  {{ data.item }}
                </v-chip>
              </template>
            </v-combobox>

            <div class="mt-4"></div>
          </v-card-text>
        </v-card>
        <v-btn class="text-capitalize mt-5 element-0" color="success"
          >Submit</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Profile",

  data: () => ({
    name: "",
    lastName: "",
    nac: "",
    sex: "",
    emailtext: "",
    weight: "",
    height: "",
    san: "",
    enfer: "",
    alergias: "",
    show1: false,
    blood: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],

    allergies: [
      "Balsam of Peru",
      "Buckwheat",
      "Celery",
      "Egg",
      "Fish",
      "Fruit",
      "Garlic",
      "Oats",
      "Maize",
      "Milk",
      "Mustard",
      "Peanut",
      "Poultry Meat",
      "Red Meat",
      "Rice",
      "Sesame",
      "Shellfish",
      "Soy",
      "Tetracycline",
      "Dilantin",
      "Penicillin",
      "Non-steroidal anti-inflammatories",
      "Local anesthetics",
      "Pollen",
      "Cat",
      "Dog",
      "Insect sting",
      "Mold",
      "Semen",
      "Latex",
    ],

    enf: [
      "Diabetes",
      "Functional gastrointestinal disorder",
      "Arthritis",
      "Asthma",
      "Cancer",
      "Chronic obstructive pulmonary disease",
      "Lyme disease",
      "Autoimmune diseases",
      "Hepatitis C",
      "Acquired immunodeficiency syndrome",
    ],
    sexo: ["Female", "Male"],
    states: [
      "Afghanistan",
      "Albania",
      "Algeria",
      "Andorra",
      "Angola",
      "Antigua and Barbuda",
      "Argentina",
      "Armenia",
      "Australia",
      "Austria",
      "Azerbaijan",
      "The Bahamas",
      "Bahrain",
      "Bangladesh",
      "Barbados",
      "Belarus",
      "Belgium",
      "Belize",
      "Benin",
      "Bhutan",
      "Bolivia",
      "Bosnia and Herzegovina",
      "Botswana",
      "Brazil",
      "Brunei",
      "Bulgaria",
      "Burkina Faso",
      "Burundi",
      "C",
      "Cabo Verde",
      "Cambodia",
      "Cameroon",
      "Canada",
      "Central African Republic",
      "Chad",
      "Chile",
      "China",
      "Colombia",
      "Comoros",
      "Congo, Democratic Republic of the",
      "Congo, Republic of the",
      "Costa Rica",
      "Côte d’Ivoire",
      "Croatia",
      "Cuba",
      "Cyprus",
      "Czech Republic",
      "Denmark",
      "Djibouti",
      "Dominica",
      "Dominican Republic",
      "East Timor (Timor-Leste)",
      "Ecuador",
      "Egypt",
      "El Salvador",
      "Equatorial Guinea",
      "Eritrea",
      "Estonia",
      "Eswatini",
      "Ethiopia",
      "Fiji",
      "Finland",
      "France",
      "Gabon",
      "The Gambia",
      "Georgia",
      "Germany",
      "Ghana",
      "Greece",
      "Grenada",
      "Guatemala",
      "Guinea",
      "Guinea-Bissau",
      "Guyana",
      "Haiti",
      "Honduras",
      "Hungary",
      "Iceland",
      "India",
      "Indonesia",
      "Iran",
      "Iraq",
      "Ireland",
      "Israel",
      "Italy",
      "Jamaica",
      "Japan",
      "Jordan",
      "Kazakhstan",
      "Kenya",
      "Kiribati",
      "Korea, North",
      "Korea, South",
      "Kosovo",
      "Kuwait",
      "Kyrgyzstan",
      "Laos",
      "Latvia",
      "Lebanon",
      "Lesotho",
      "Liberia",
      "Libya",
      "Liechtenstein",
      "Lithuania",
      "Luxembourg",
      "Madagascar",
      "Malawi",
      "Malaysia",
      "Maldives",
      "Mali",
      "Malta",
      "Marshall Islands",
      "Mauritania",
      "Mauritius",
      "Mexico",
      "Micronesia, Federated States of",
      "Moldova",
      "Monaco",
      "Mongolia",
      "Montenegro",
      "Morocco",
      "Mozambique",
      "Myanmar (Burma)",
      "Namibia",
      "Nauru",
      "Nepal",
      "Netherlands",
      "New Zealand",
      "Nicaragua",
      "Niger",
      "Nigeria",
      "North Macedonia",
      "Norway",
      "Oman",
      "Pakistan",
      "Palau",
      "Panama",
      "Papua New Guinea",
      "Paraguay",
      "Peru",
      "Philippines",
      "Poland",
      "Portugal",
      "Qatar",
      "Romania",
      "Russia",
      "Rwanda",
      "Saint Kitts and Nevis",
      "Saint Lucia",
      "Saint Vincent and the Grenadines",
      "Samoa",
      "San Marino",
      "Sao Tome and Principe",
      "Saudi Arabia",
      "Senegal",
      "Serbia",
      "Seychelles",
      "Sierra Leone",
      "Singapore",
      "Slovakia",
      "Slovenia",
      "Solomon Islands",
      "Somalia",
      "South Africa",
      "Spain",
      "Sri Lanka",
      "Sudan",
      "Sudan, South",
      "Suriname",
      "Sweden",
      "Switzerland",
      "Syria",
      "Taiwan",
      "Tajikistan",
      "Tanzania",
      "Thailand",
      "Togo",
      "Tonga",
      "Trinidad and Tobago",
      "Tunisia",
      "Turkey",
      "Turkmenistan",
      "Tuvalu",
      "Uganda",
      "Ukraine",
      "United Arab Emirates",
      "United Kingdom",
      "United States",
      "Uruguay",
      "Uzbekistan",
      "Vanuatu",
      "Vatican City",
      "Venezuela",
      "Vietnam",
      "Yemen",
      "Zambia",
      "Zimbabwe",
    ],
    activePicker: null,
    date: null,
    menu: false,
  }),
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },
  },
  rules: {
    required: (value) => !!value || "Required.",
    min: (v) => v.length >= 8 || "Min 8 characters",
    emailMatch: () => "The email and password you entered don't match",
  },

  components: {},
};
</script>
